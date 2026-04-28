#!/usr/bin/env python3
"""GameZone 데이터 갱신 스크립트 - Steam Top100 KRW 가격 + Epic 프로모션"""
import json, urllib.request, time, datetime, os

STEAM_TOP100_URL = "https://api.steampowered.com/ISteamChartsService/GetMostPlayedGames/v1/"
STEAM_DETAIL_URL = "https://store.steampowered.com/api/appdetails?appids={}&cc=kr&l=koreana"
EPIC_API_URL = "https://store-site-backend-static-ipv4.ak.epicgames.com/freeGamesPromotions?locale=ko&country=KR&allowCountries=KR"

def fetch_json(url):
    req = urllib.request.Request(url, headers={"User-Agent": "GameZone-Bot/1.0"})
    with urllib.request.urlopen(req, timeout=30) as r:
        return json.loads(r.read().decode("utf-8"))

def get_top100():
    """Steam 동시접속 Top100 가져오기"""
    data = fetch_json(STEAM_TOP100_URL)
    ranks = data.get("response", {}).get("ranks", [])
    games = []
    for r in ranks:
        games.append({
            "appid": r["appid"],
            "ccu": r.get("concurrent_in_game", 0),
        })
    return games[:100]

def get_kr_price(appid):
    """개별 게임 한국 가격 조회"""
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
            "is_free": d.get("is_free", False),
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
            result["discount"] = 0

        # 리뷰 (recommendations)
        recs = d.get("recommendations", {})
        result["positive"] = recs.get("positive", 0) if isinstance(recs, dict) else 0
        result["negative"] = recs.get("negative", 0) if isinstance(recs, dict) else 0

        # 장르
        genres = d.get("genres", [])
        result["genres"] = [g.get("description", "") for g in genres]

        # 이미지
        result["header_img"] = d.get("header_image", "")

        # 이름/설명 (한국어)
        result["name_kr"] = d.get("name", "")
        result["desc_kr"] = d.get("short_description", "")
        result["release_date"] = d.get("release_date", {}).get("date", "")
        result["metacritic"] = d.get("metacritic", {}).get("score", 0) if isinstance(d.get("metacritic"), dict) else 0

        # 스크린샷
        ss = d.get("screenshots", [])
        result["screenshots"] = [s.get("path_thumbnail", "") for s in ss[:6]]

        # PC 요구사항
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

def build_top100():
    """Top100 데이터에 KRW 가격 추가"""
    print("=== Steam Top100 가져오는 중... ===")
    ranks = get_top100()
    print(f"  {len(ranks)}개 게임 발견")

    top20_full = []
    top100_simple = []

    for i, r in enumerate(ranks):
        appid = r["appid"]
        ccu = r["ccu"]
        print(f"  [{i+1}/{len(ranks)}] appid={appid} 가격 조회중...")
        detail = get_kr_price(appid)
        time.sleep(0.3)  # 레이트 리밋 방지

        if detail:
            detail["ccu"] = ccu
            if i < 20:
                top20_full.append(detail)

            # top100용 간략 데이터
            top100_simple.append({
                "appid": appid,
                "name": detail.get("name", ""),
                "name_kr": detail.get("name_kr", ""),
                "ccu": ccu,
                "price_kr": detail.get("price_kr", 0),
                "price_kr_initial": detail.get("price_kr_initial", 0),
                "price_kr_formatted": detail.get("price_kr_formatted", ""),
                "price_kr_initial_formatted": detail.get("price_kr_initial_formatted", ""),
                "discount": detail.get("discount", 0),
                "is_free": detail.get("is_free", False),
                "positive": detail.get("positive", 0),
                "negative": detail.get("negative", 0),
                "header_img": detail.get("header_img", ""),
            })
        else:
            # 조회 실패시 최소 정보
            simple = {"appid": appid, "name": "", "ccu": ccu, "price_kr": 0, "discount": 0, "is_free": False, "positive": 0, "negative": 0, "header_img": ""}
            top100_simple.append(simple)

    return top20_full, top100_simple

def fetch_epic():
    """에픽 프로모션 데이터"""
    print("=== Epic 프로모션 가져오는 중... ===")
    data = fetch_json(EPIC_API_URL)
    print("  Epic 데이터 완료")
    return data

def main():
    top20, top100 = build_top100()

    epic = fetch_epic()

    now = datetime.datetime.utcnow().strftime("%Y-%m-%d %H:%M:%S")
    meta = {"updated_at": now, "top20_count": len(top20), "top100_count": len(top100)}

    # 파일 저장
    with open("top20.json", "w", encoding="utf-8") as f:
        json.dump(top20, f, ensure_ascii=False, indent=2)
    with open("top100.json", "w", encoding="utf-8") as f:
        json.dump(top100, f, ensure_ascii=False, indent=2)
    with open("epic.json", "w", encoding="utf-8") as f:
        json.dump(epic, f, ensure_ascii=False, indent=2)
    with open("meta.json", "w", encoding="utf-8") as f:
        json.dump(meta, f, ensure_ascii=False, indent=2)

    print(f"\n=== 완료! top20={len(top20)}, top100={len(top100)}, 시간={now} ===")

if __name__ == "__main__":
    main()
