#!/usr/bin/env python3
"""겜기어 상품 자동 등록 - URL 크롤링 + Gemini 설명 생성"""
import json, os, re, urllib.request, urllib.parse, ssl

GEMINI_KEY = os.environ.get("GEMINI_API_KEY", "")
GEMINI_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key="

def fetch(url, headers=None):
    if not headers:
        headers = {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"}
    req = urllib.request.Request(url, headers=headers)
    ctx = ssl.create_default_context()
    with urllib.request.urlopen(req, timeout=15, context=ctx) as r:
        return r.read().decode("utf-8", errors="replace")

def extract_meta(html):
    """OG 메타태그에서 제품 정보 추출"""
    def og(prop):
        m = re.search(r'<meta[^>]*property=["\']og:' + prop + r'["\'][^>]*content=["\']([^"\']+)["\']', html, re.I)
        if not m:
            m = re.search(r'<meta[^>]*content=["\']([^"\']+)["\'][^>]*property=["\']og:' + prop + r'["\']', html, re.I)
        return m.group(1).strip() if m else ""

    title = og("title")
    image = og("image")
    desc = og("description")

    # 가격 추출 시도
    price = ""
    # 쿠팡 가격
    m = re.search(r'class="total-price"[^>]*>[\s\S]*?<strong[^>]*>([\d,]+)', html)
    if m:
        price = m.group(1)
    if not price:
        m = re.search(r'"price"[:\s]*"?([\d,]+)', html)
        if m:
            price = m.group(1)
    if not price:
        m = re.search(r'[\u20A9\uFFE6][\s]*([\d,]+)', html)
        if m:
            price = m.group(1)

    # 원래 가격 (할인 전)
    original = ""
    m = re.search(r'class="origin-price"[^>]*>[\s\S]*?([\d,]+)', html)
    if m:
        original = m.group(1)
    if not original:
        m = re.search(r'list-price["\'][^>]*>[\s\S]*?([\d,]+)', html)
        if m:
            original = m.group(1)

    return {
        "title": title,
        "image": image,
        "desc": desc,
        "price": price,
        "original_price": original
    }

def gemini_describe(product_info):
    """Gemini API로 상품 설명 생성"""
    if not GEMINI_KEY:
        return product_info.get("desc", "")[:200]

    prompt = f"""다음 게이밍 장비의 핵심 특징을 3줄로 요약해줘.
각 줄은 ✅로 시작하고, 게이머 관점에서 왜 좋은지 간결하게 설명해.
전문 용어는 쉽게 풀어서 써.

제품명: {product_info['title']}
설명: {product_info['desc']}
가격: {product_info['price']}원

형식:
✅ (첫 번째 장점)
✅ (두 번째 장점)
✅ (세 번째 장점)"""

    body = json.dumps({
        "contents": [{"parts": [{"text": prompt}]}],
        "generationConfig": {"temperature": 0.7, "maxOutputTokens": 300}
    }).encode("utf-8")

    try:
        req = urllib.request.Request(
            GEMINI_URL + GEMINI_KEY,
            data=body,
            headers={"Content-Type": "application/json"},
            method="POST"
        )
        with urllib.request.urlopen(req, timeout=30) as r:
            data = json.loads(r.read().decode("utf-8"))
            text = data["candidates"][0]["content"]["parts"][0]["text"]
            return text.strip()
    except Exception as e:
        print(f"  [WARN] Gemini API 실패: {e}")
        return product_info.get("desc", "")[:200]

def calc_discount(price_str, original_str):
    """할인율 계산"""
    try:
        p = int(price_str.replace(",", ""))
        o = int(original_str.replace(",", ""))
        if o > p > 0:
            return str(round((1 - p / o) * 100))
    except:
        pass
    return ""

def process_queue():
    # 큐 읽기
    try:
        with open("gear-queue.json", "r", encoding="utf-8") as f:
            queue = json.load(f)
    except:
        queue = []

    if not queue:
        print("처리할 요청 없음")
        return

    # 기존 gear.json 읽기
    try:
        with open("gear.json", "r", encoding="utf-8") as f:
            gear = json.load(f)
    except:
        gear = {}

    processed = 0
    for item in queue:
        url = item.get("url", "").strip()
        category = item.get("category", "게이밍 PC")
        if not url:
            continue

        print(f"처리중: {url}")
        try:
            html = fetch(url)
            info = extract_meta(html)

            if not info["title"]:
                print(f"  [SKIP] 제목 추출 실패: {url}")
                continue

            # Gemini로 설명 생성
            print(f"  제품: {info['title']}")
            description = gemini_describe(info)
            print(f"  설명 생성 완료")

            discount = calc_discount(info["price"], info["original_price"])

            product = {
                "name": info["title"],
                "price": info["price"],
                "original_price": info["original_price"],
                "discount": discount,
                "image": info["image"],
                "link": url,
                "desc": description
            }

            if category not in gear:
                gear[category] = []
            gear[category].append(product)
            processed += 1
            print(f"  등록 완료: {category} > {info['title']}")

        except Exception as e:
            print(f"  [ERROR] {url}: {e}")

    # gear.json 저장
    with open("gear.json", "w", encoding="utf-8") as f:
        json.dump(gear, f, ensure_ascii=False, indent=2)

    # 큐 비우기
    with open("gear-queue.json", "w", encoding="utf-8") as f:
        json.dump([], f)

    print(f"\n=== 완료! {processed}개 상품 등록 ===")

if __name__ == "__main__":
    process_queue()
