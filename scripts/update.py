#!/usr/bin/env python3
"""GameZone 데이터 갱신 스크립트 - Steam Top100 KRW 가격 + Epic 프로모션"""
import json, urllib.request, time, datetime

STEAM_TOP100_URL = "https://api.steampowered.com/ISteamChartsService/GetMostPlayedGames/v1/"
STEAM_DETAIL_URL = "https://store.steampowered.com/api/appdetails?appids={}&cc=kr&l=koreana"
EPIC_API_URL = "https://store-site-backend-static-ipv4.ak.epicgames.com/freeGamesPromotions?locale=ko&country=KR&allowCountries=KR"

def fetch_json(url):
    req = urllib.request.Request(url, headers={"User-Agent": "GameZone-Bot/1.0"})
    with urllib.request.urlopen(req, timeout=30) as r:
        return json.loads(r.read().decode("utf-8"))

def get_top100():
    data = fetch_json(STEAM_TOP100_URL)
    ranks = data.get("response", {}).get("ranks", [])
    games = []
    for r in ranks:
        games.append({
            "appid": r["appid"],
            "ccu": r.get("peak_in_game", r.get("concurrent_in_game", 0)),
        })
    return games[:100]

def get_kr_detail(appid):
    try:
        url = STEAM_DETAIL_URL.format(appid)
        data = fetch_json(url)
        info = data.get(str(appid), {})
        if not info.get("success"):
            return None
        d = info.get("data", {})
        result = {
            "appid": appid,
            "name": d.get("name", ""),
            "name_kr": d.get("name", ""),
            "is_free": d.get("is_free", False),
            "desc_kr": d.get("short_description", ""),
            "release_date": d.get("release_date", {}).get("date", ""),
            "header_img": d.get("header_image", ""),
        }
        po = d.get("price_overview")
        if po:
            result["price_kr"] = po.get("final", 0)
            result["price_kr_initial"] = po.get("initial", 0)
            result["price_kr_formatted"] = po.get("final_formatted", "")
            result["price_kr_initial_formatted"] = po.get("initial_formatted", "")
            result["discount"] = po.get("discount_percent", 0)
        else:
            result["price_kr"] = 0
            result["price_kr_initial"] = 0
            result["price_kr_formatted"] = ""
            result["price_kr_initial_formatted"] = ""
            result["discount"] = 0
        recs = d.get("recommendations", {})
        if isinstance(recs, dict):
            result["positive"] = recs.get("total", 0)
        else:
            result["positive"] = 0
        result["negative"] = 0
        genres = d.get("genres", [])
        result["genres"] = [g.get("description", "") for g in genres]
        mc = d.get("metacritic")
        result["metacritic"] = mc.get("score", 0) if isinstance(mc, dict) else 0
        ss = d.get("screenshots", [])
        result["screenshots"] = [s.get("path_thumbnail", "") for s in ss[:6]]
        pc = d.get("pc_requirements", {})
        if isinstance(pc, dict):
            result["pc_requirements"] = {
                "minimum": pc.get("minimum", ""),
                "recommended": pc.get("recommended", "")
            }
        return result
    except Exception as e:
        print(f"  [WARN] appid {appid}: {e}")
        return None

def main():
    print("=== Steam Top100 가져오는 중... ===")
    ranks = get_top100()
    print(f"  {len(ranks)}개 게임 발견")

    top20_full = []
    top100_simple = []

    for i, r in enumerate(ranks):
        appid = r["appid"]
        ccu = r["ccu"]
        print(f"  [{i+1}/{len(ranks)}] appid={appid} 가격 조회중...")
        detail = get_kr_detail(appid)
        time.sleep(0.4)

        if detail:
            detail["ccu"] = ccu
            if i < 20:
                top20_full.append(detail)
            top100_simple.append({
                "appid": appid,
                "name": detail.get("name", ""),
                "name_kr": detail.get("name_kr", ""),
                "ccu": ccu,
                "is_free": detail.get("is_free", False),
                "price_kr": detail.get("price_kr", 0),
                "price_kr_initial": detail.get("price_kr_initial", 0),
                "price_kr_formatted": detail.get("price_kr_formatted", ""),
                "price_kr_initial_formatted": detail.get("price_kr_initial_formatted", ""),
                "discount": detail.get("discount", 0),
                "positive": detail.get("positive", 0),
                "negative": detail.get("negative", 0),
                "header_img": detail.get("header_img", ""),
            })
        else:
            top100_simple.append({
                "appid": appid, "name": "", "name_kr": "",
                "ccu": ccu, "is_free": False,
                "price_kr": 0, "price_kr_initial": 0,
                "price_kr_formatted": "", "price_kr_initial_formatted": "",
                "discount": 0, "positive": 0, "negative": 0, "header_img": "",
            })

    print("=== Epic 프로모션 가져오는 중... ===")
    epic = fetch_json(EPIC_API_URL)
    print("  Epic 데이터 완료")

    now = datetime.datetime.utcnow().strftime("%Y-%m-%d %H:%M:%S")
    meta = {"updated_at": now, "top20_count": len(top20_full), "top100_count": len(top100_simple)}

    with open("top20.json", "w", encoding="utf-8") as f:
        json.dump(top20_full, f, ensure_ascii=False, indent=2)
    with open("top100.json", "w", encoding="utf-8") as f:
        json.dump(top100_simple, f, ensure_ascii=False, indent=2)
    with open("epic.json", "w", encoding="utf-8") as f:
        json.dump(epic, f, ensure_ascii=False, indent=2)
    with open("meta.json", "w", encoding="utf-8") as f:
        json.dump(meta, f, ensure_ascii=False, indent=2)

    print(f"\n=== 완료! top20={len(top20_full)}, top100={len(top100_simple)}, 시간={now} ===")

if __name__ == "__main__":
    main()
