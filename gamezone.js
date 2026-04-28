/* ============================================================
   GameZone – gamezone.js  (Part 1/3: Constants + Utilities)
   ============================================================ */

/* ----- URLs & Config ----- */
var DATA_BASE = "https://kjjin628.github.io/gamezone-data/";
var BLOG_URL  = "https://gamezone-kr.blogspot.com";
var EPIC_STORE = "https://store.epicgames.com/ko/p/";
var EPIC_BROWSE = "https://store.epicgames.com/ko/browse?sortBy=relevancy&category=Game&count=40";
var ADMIN_PW   = "gamezone2026";
var DEFAULT_FONT = "Nanum Gothic";

/* ----- Font List ----- */
var FONT_LIST = [
  {name:"나눔고딕",family:"Nanum Gothic",url:""},
  {name:"나눔명조",family:"Nanum Myeongjo",url:"https://fonts.googleapis.com/css2?family=Nanum+Myeongjo:wght@400;700;800&display=swap"},
  {name:"나눔바른고딕",family:"NanumBarunGothic",url:"https://cdn.jsdelivr.net/npm/font-nanumbarungothic@1.0/nanumbarungothicsubset.css"},
  {name:"나눔스퀘어",family:"NanumSquare",url:"https://cdn.jsdelivr.net/npm/nanumsquare@1.0/nanumsquare.css"},
  {name:"마루부리",family:"MaruBuri",url:"https://cdn.jsdelivr.net/gh/kfonts/maruburi@main/maruburi.css"},
  {name:"Noto Sans KR",family:"Noto Sans KR",url:"https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;700;900&display=swap"},
  {name:"Pretendard",family:"Pretendard",url:"https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css"}
];

/* ----- Steam Categories ----- */
var STEAM_CATS = [
  {name:"\uC561\uC158",icon:"fa-gun",url:"https://store.steampowered.com/category/action/?l=koreana"},
  {name:"\uC5B4\uB4DC\uBCA4\uCC98",icon:"fa-hat-cowboy",url:"https://store.steampowered.com/category/adventure/?l=koreana"},
  {name:"RPG",icon:"fa-dragon",url:"https://store.steampowered.com/category/rpg/?l=koreana"},
  {name:"\uC804\uB7B5",icon:"fa-chess",url:"https://store.steampowered.com/category/strategy/?l=koreana"},
  {name:"\uC2DC\uBBAC\uB808\uC774\uC158",icon:"fa-plane",url:"https://store.steampowered.com/category/simulation/?l=koreana"},
  {name:"\uC2A4\uD3EC\uCE20",icon:"fa-futbol",url:"https://store.steampowered.com/category/sports/?l=koreana"},
  {name:"\uC778\uB514",icon:"fa-seedling",url:"https://store.steampowered.com/category/indie/?l=koreana"},
  {name:"\uCE90\uC8FC\uC5BC",icon:"fa-gamepad",url:"https://store.steampowered.com/category/casual/?l=koreana"},
  {name:"\uB808\uC774\uC2F1",icon:"fa-flag-checkered",url:"https://store.steampowered.com/category/racing/?l=koreana"},
  {name:"\uD37C\uC990",icon:"fa-puzzle-piece",url:"https://store.steampowered.com/category/puzzle_matching/?l=koreana"}
];

var EPIC_CATS = [
  {name:"\uC561\uC158",icon:"fa-gun",url:"https://store.epicgames.com/ko/browse?tag=Action&category=Game"},
  {name:"\uC5B4\uB4DC\uBCA4\uCC98",icon:"fa-hat-cowboy",url:"https://store.epicgames.com/ko/browse?tag=Adventure&category=Game"},
  {name:"RPG",icon:"fa-dragon",url:"https://store.epicgames.com/ko/browse?tag=RPG&category=Game"},
  {name:"\uC804\uB7B5",icon:"fa-chess",url:"https://store.epicgames.com/ko/browse?tag=Strategy&category=Game"},
  {name:"\uC2DC\uBBAC\uB808\uC774\uC158",icon:"fa-plane",url:"https://store.epicgames.com/ko/browse?tag=Simulation&category=Game"},
  {name:"\uC2A4\uD3EC\uCE20",icon:"fa-futbol",url:"https://store.epicgames.com/ko/browse?tag=Sports&category=Game"},
  {name:"\uC778\uB514",icon:"fa-seedling",url:"https://store.epicgames.com/ko/browse?tag=Indie&category=Game"},
  {name:"\uD37C\uC990",icon:"fa-puzzle-piece",url:"https://store.epicgames.com/ko/browse?tag=Puzzle&category=Game"}
];

/* ----- Play Mode Links ----- */
var STEAM_PLAY = [
  {name:"\uC2F1\uAE00\uD50C\uB808\uC774",icon:"fa-user",url:"https://store.steampowered.com/category/single_player/?l=koreana"},
  {name:"\uBA40\uD2F0\uD50C\uB808\uC774",icon:"fa-users",url:"https://store.steampowered.com/category/multi_player/?l=koreana"},
  {name:"\uD611\uB3D9",icon:"fa-handshake",url:"https://store.steampowered.com/category/co-op/?l=koreana"},
  {name:"PvP",icon:"fa-crosshairs",url:"https://store.steampowered.com/category/pvp/?l=koreana"},
  {name:"MMO",icon:"fa-globe",url:"https://store.steampowered.com/category/mmo/?l=koreana"}
];

var EPIC_PLAY = [
  {name:"\uC2F1\uAE00\uD50C\uB808\uC774",icon:"fa-user",url:"https://store.epicgames.com/ko/browse?tag=Singleplayer&category=Game"},
  {name:"\uBA40\uD2F0\uD50C\uB808\uC774",icon:"fa-users",url:"https://store.epicgames.com/ko/browse?tag=Multiplayer&category=Game"},
  {name:"\uD611\uB3D9",icon:"fa-handshake",url:"https://store.epicgames.com/ko/browse?tag=Co-op&category=Game"},
  {name:"PvP",icon:"fa-crosshairs",url:"https://store.epicgames.com/ko/browse?tag=PvP&category=Game"},
  {name:"MMO",icon:"fa-globe",url:"https://store.epicgames.com/ko/browse?tag=MMO&category=Game"}
];

/* ----- Sidebar Config ----- */
var GUIDE_LABELS = [
  {label:"\uCD5C\uC2E0 \uB274\uC2A4",icon:"fa-newspaper"},
  {label:"\uCD08\uBCF4\uC790 \uD301",icon:"fa-lightbulb"},
  {label:"\uACF5\uB7B5",icon:"fa-book"},
  {label:"\uAC8C\uC784 \uCD94\uCC9C",icon:"fa-thumbs-up"}
];

var GAME_SIDES = [
  {label:"\uB514\uC544\uBE14\uB85C2",icon:"fa-fire",open:false},
  {label:"\uB514\uC544\uBE14\uB85C4",icon:"fa-fire-flame-curved",open:false},
  {label:"\uB77C\uC2A4\uD2B8\uC5D0\uD3ED",icon:"fa-clock-rotate-left",open:false}
];

/* ----- Gear Defaults ----- */
var DEFAULT_GEAR = [
  {name:"\uAC8C\uC774\uBC0D PC",icon:"fa-desktop"},
  {name:"\uBAA8\uB2C8\uD130",icon:"fa-tv"},
  {name:"\uD0A4\uBCF4\uB4DC",icon:"fa-keyboard"},
  {name:"\uB9C8\uC6B0\uC2A4",icon:"fa-computer-mouse"},
  {name:"\uD5E4\uB4DC\uC14B",icon:"fa-headphones"},
  {name:"\uAC8C\uC784\uD328\uB4DC",icon:"fa-gamepad"},
  {name:"\uC758\uC790",icon:"fa-chair"},
  {name:"\uAE30\uD0C0",icon:"fa-ellipsis"}
];

/* ----- Data Containers ----- */
var top20Data = [], top100Data = [], metaData = null;
var epicAllGames = [], epicFreeNow = [], epicFreeUpcoming = [], epicDeals = [];
var isAdmin = false, logoClicks = 0, logoTimer = null;
var heroIdx = 0, heroTimer = null, heroSlides = [];
var steamTopExpanded = false, epicTopExpanded = false;

/* ===== UTILITY FUNCTIONS ===== */
function $(id) { return document.getElementById(id); }

function escHtml(s) {
  if (!s) return "";
  var d = document.createElement("div");
  d.appendChild(document.createTextNode(s));
  return d.innerHTML;
}

function formatKRW(n) {
  if (!n || n === "0" || n === 0) return "\uBB34\uB8CC";
  var v = parseInt(n, 10);
  if (isNaN(v) || v <= 0) return "\uBB34\uB8CC";
  if (v > 100000) v = Math.round(v / 100);
  return "\u20A9 " + v.toLocaleString("ko-KR");
}

function steamLink(appid) {
  return "https://store.steampowered.com/app/" + appid + "/?l=koreana";
}

function epicLink(g) {
  var slug = "";
  if (g.catalogNs && g.catalogNs.mappings && g.catalogNs.mappings.length) {
    slug = g.catalogNs.mappings[0].pageSlug;
  } else if (g.offerMappings && g.offerMappings.length) {
    slug = g.offerMappings[0].pageSlug;
  } else if (g.productSlug) {
    slug = g.productSlug;
  }
  return slug ? EPIC_STORE + slug : EPIC_BROWSE;
}

function epicImg(g, type) {
  if (!g.keyImages) return "";
  for (var i = 0; i < g.keyImages.length; i++) {
    if (g.keyImages[i].type === type) return g.keyImages[i].url;
  }
  return g.keyImages[0] ? g.keyImages[0].url : "";
}

function toast(msg) {
  var t = $("toast");
  if (!t) return;
  t.textContent = msg;
  t.classList.add("show");
  setTimeout(function() { t.classList.remove("show"); }, 2500);
}

function stripHtml(html) {
  var tmp = document.createElement("div");
  tmp.innerHTML = html;
  return tmp.textContent || tmp.innerText || "";
}
/* ============================================================
   GameZone – gamezone.js  (Part 2/3: Render Functions)
   ============================================================ */

/* ===== FONT SYSTEM ===== */
function initFont() {
  var saved = localStorage.getItem("gz_font");
  if (saved) {
    try {
      var f = JSON.parse(saved);
      applyFont(f.family, f.url);
    } catch(e) {}
  }
}

function applyFont(family, url) {
  if (url) {
    var exists = document.querySelector('link[href="' + url + '"]');
    if (!exists) {
      var link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = url;
      document.head.appendChild(link);
    }
  }
  document.body.style.fontFamily = '"' + family + '", sans-serif';
  localStorage.setItem("gz_font", JSON.stringify({family:family, url:url}));
}

function openFontPanel() {
  var panel = $("fontPanel");
  if (!panel) return;
  var html = "";
  var customs = [];
  try { customs = JSON.parse(localStorage.getItem("gz_custom_fonts") || "[]"); } catch(e) {}
  var all = FONT_LIST.concat(customs);
  for (var i = 0; i < all.length; i++) {
    html += '<div class="font-item" onclick="selectFont(' + i + ')" style="font-family:\'' + all[i].family + '\'">';
    html += escHtml(all[i].name);
    if (i >= FONT_LIST.length) html += ' <span onclick="event.stopPropagation();removeCustomFont(' + (i - FONT_LIST.length) + ')" style="color:#f44;cursor:pointer;margin-left:8px">X</span>';
    html += '</div>';
  }
  if (isAdmin) {
    html += '<div style="margin-top:12px;border-top:1px solid #333;padding-top:10px">';
    html += '<input id="cfName" placeholder="\uD3F0\uD2B8\uBA85" style="width:100%;margin-bottom:4px;padding:6px;background:#1b2838;border:1px solid #444;color:#fff;border-radius:4px">';
    html += '<input id="cfFamily" placeholder="font-family \uAC12" style="width:100%;margin-bottom:4px;padding:6px;background:#1b2838;border:1px solid #444;color:#fff;border-radius:4px">';
    html += '<input id="cfUrl" placeholder="CSS URL (\uC120\uD0DD)" style="width:100%;margin-bottom:4px;padding:6px;background:#1b2838;border:1px solid #444;color:#fff;border-radius:4px">';
    html += '<button onclick="addCustomFont()" style="width:100%;padding:8px;background:#66c0f4;border:none;border-radius:4px;color:#000;cursor:pointer;font-weight:700">\uCD94\uAC00</button>';
    html += '</div>';
  }
  panel.innerHTML = html;
  panel.style.display = panel.style.display === "block" ? "none" : "block";
}

function selectFont(idx) {
  var customs = [];
  try { customs = JSON.parse(localStorage.getItem("gz_custom_fonts") || "[]"); } catch(e) {}
  var all = FONT_LIST.concat(customs);
  if (all[idx]) {
    applyFont(all[idx].family, all[idx].url);
    toast(all[idx].name + " \uC801\uC6A9\uB428");
    var p = $("fontPanel"); if (p) p.style.display = "none";
  }
}

function addCustomFont() {
  var n = $("cfName"), f = $("cfFamily"), u = $("cfUrl");
  if (!n || !f || !n.value.trim() || !f.value.trim()) return toast("\uD3F0\uD2B8\uBA85\uACFC family\uB97C \uC785\uB825\uD558\uC138\uC694");
  var customs = [];
  try { customs = JSON.parse(localStorage.getItem("gz_custom_fonts") || "[]"); } catch(e) {}
  customs.push({name:n.value.trim(), family:f.value.trim(), url:u.value.trim()});
  localStorage.setItem("gz_custom_fonts", JSON.stringify(customs));
  openFontPanel();
  toast("\uD3F0\uD2B8 \uCD94\uAC00\uB428");
}

function removeCustomFont(idx) {
  var customs = [];
  try { customs = JSON.parse(localStorage.getItem("gz_custom_fonts") || "[]"); } catch(e) {}
  customs.splice(idx, 1);
  localStorage.setItem("gz_custom_fonts", JSON.stringify(customs));
  openFontPanel();
  toast("\uD3F0\uD2B8 \uC0AD\uC81C\uB428");
}

/* ===== HERO SLIDER (Steam 3 + Epic 3) ===== */
function buildHeroSlides() {
  heroSlides = [];
  var count = 0;
  for (var i = 0; i < top20Data.length && count < 3; i++) {
    heroSlides.push({type:"steam", data:top20Data[i]});
    count++;
  }
  count = 0;
  var epicSrc = epicFreeNow.concat(epicFreeUpcoming).concat(epicDeals).concat(epicAllGames);
  var used = {};
  for (var j = 0; j < epicSrc.length && count < 3; j++) {
    if (!used[epicSrc[j].title]) {
      heroSlides.push({type:"epic", data:epicSrc[j]});
      used[epicSrc[j].title] = true;
      count++;
    }
  }
}

function renderHero() {
  var track = $("heroTrack");
  var dots = $("heroDots");
  if (!track || !dots) return;
  if (heroSlides.length === 0) { track.innerHTML = '<div class="hero-slide" style="display:flex;align-items:center;justify-content:center;color:#888">\uB370\uC774\uD130 \uB85C\uB529\uC911...</div>'; return; }
  var html = "", dhtml = "";
  for (var i = 0; i < heroSlides.length; i++) {
    var s = heroSlides[i];
    var img = "", title = "", badge = "", link = "#";
    if (s.type === "steam") {
      img = s.data.header_img || "";
      title = s.data.name_kr || s.data.name || "";
      badge = "STEAM";
      link = "javascript:openModal(" + s.data.appid + ")";
    } else {
      img = epicImg(s.data, "OfferImageWide") || epicImg(s.data, "featuredMedia");
      title = s.data.title || "";
      badge = "EPIC";
      link = epicLink(s.data);
    }
    html += '<div class="hero-slide' + (i === 0 ? " active" : "") + '">';
    html += '<a href="' + link + '"' + (s.type === "epic" ? ' target="_blank"' : '') + ' style="display:block;width:100%;height:100%;position:relative">';
    html += '<img src="' + escHtml(img) + '" alt="' + escHtml(title) + '" style="width:100%;height:100%;object-fit:cover">';
    html += '<span class="hero-badge hero-badge-' + s.type + '">' + badge + '</span>';
    html += '<span class="hero-title">' + escHtml(title) + '</span>';
    html += '</a></div>';
    dhtml += '<span class="hero-dot' + (i === 0 ? " active" : "") + '" onclick="heroGo(' + i + ')"></span>';
  }
  track.innerHTML = html;
  dots.innerHTML = dhtml;
  heroIdx = 0;
  clearInterval(heroTimer);
  heroTimer = setInterval(function() { heroMove(1); }, 5000);
}

function heroMove(dir) {
  if (heroSlides.length === 0) return;
  var slides = document.querySelectorAll(".hero-slide");
  var dotEls = document.querySelectorAll(".hero-dot");
  if (slides.length === 0) return;
  slides[heroIdx].classList.remove("active");
  if (dotEls[heroIdx]) dotEls[heroIdx].classList.remove("active");
  heroIdx = (heroIdx + dir + heroSlides.length) % heroSlides.length;
  slides[heroIdx].classList.add("active");
  if (dotEls[heroIdx]) dotEls[heroIdx].classList.add("active");
}

function heroGo(idx) {
  if (heroSlides.length === 0) return;
  var slides = document.querySelectorAll(".hero-slide");
  var dotEls = document.querySelectorAll(".hero-dot");
  if (slides[heroIdx]) slides[heroIdx].classList.remove("active");
  if (dotEls[heroIdx]) dotEls[heroIdx].classList.remove("active");
  heroIdx = idx;
  if (slides[heroIdx]) slides[heroIdx].classList.add("active");
  if (dotEls[heroIdx]) dotEls[heroIdx].classList.add("active");
  clearInterval(heroTimer);
  heroTimer = setInterval(function() { heroMove(1); }, 5000);
}

/* ===== STEAM TOP 20 ===== */
function renderSteamTop20() {
  var grid = $("steamTop20");
  if (!grid) return;
  if (top20Data.length === 0) { grid.innerHTML = '<p style="color:#888">\uB370\uC774\uD130\uB97C \uBD88\uB7EC\uC624\uB294 \uC911...</p>'; return; }
  var html = "";
  var show = steamTopExpanded ? top20Data.length : Math.min(10, top20Data.length);
  for (var i = 0; i < show; i++) {
    var g = top20Data[i];
    var priceText = "";
    if (g.is_free || g.price === "0") {
      priceText = "\uBB34\uB8CC";
    } else if (g.price_kr_formatted) {
      priceText = g.price_kr_formatted;
    } else {
      priceText = formatKRW(g.price);
    }
    html += '<div class="top20-card' + (i >= 10 ? " hidden-card" : "") + '" onclick="openModal(' + g.appid + ')">';
    html += '<div class="top20-rank">' + (i + 1) + '</div>';
    html += '<img src="' + escHtml(g.header_img) + '" alt="' + escHtml(g.name_kr || g.name) + '">';
    html += '<div class="top20-info">';
    html += '<div class="top20-name">' + escHtml(g.name_kr || g.name) + '</div>';
    html += '<div class="top20-meta">';
    if (g.genres && g.genres.length) html += '<span class="top20-genre">' + escHtml(g.genres[0]) + '</span>';
    html += '<span class="top20-ccu"><i class="fa-solid fa-user"></i> ' + (g.ccu ? g.ccu.toLocaleString("ko-KR") : "0") + '</span>';
    html += '</div>';
    html += '<div class="top20-price">' + priceText + '</div>';
    html += '</div></div>';
  }
  if (top20Data.length > 10) {
    html += '<div class="btn-more-wrap"><button class="btn-more" onclick="event.stopPropagation();toggleSteamTop()">';
    html += steamTopExpanded ? '<i class="fa-solid fa-chevron-up"></i>' : '<i class="fa-solid fa-chevron-down"></i>';
    html += '</button></div>';
  }
  grid.innerHTML = html;
}

function toggleSteamTop() {
  steamTopExpanded = !steamTopExpanded;
  renderSteamTop20();
}

/* ===== STEAM DEALS ===== */
function renderDeals() {
  var grid = $("dealGrid");
  if (!grid) return;
  var deals = [];
  var src = top100Data.length ? top100Data : top20Data;
  for (var i = 0; i < src.length; i++) {
    var d = parseInt(src[i].discount, 10);
    if (d > 0) deals.push(src[i]);
  }
  if (deals.length === 0) { grid.innerHTML = '<p style="color:#888">\uD604\uC7AC \uD560\uC778 \uC815\uBCF4\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.</p>'; return; }
  deals.sort(function(a, b) { return parseInt(b.discount, 10) - parseInt(a.discount, 10); });
  var html = "";
  var show = Math.min(8, deals.length);
  for (var i = 0; i < show; i++) {
    var g = deals[i];
    var disc = parseInt(g.discount, 10);
    var origPrice = "";
    var salePrice = "";
    if (g.price_kr_formatted) {
      salePrice = g.price_kr_formatted;
      var orig = g.price_kr ? Math.round(g.price_kr / 100 / (1 - disc / 100)) : 0;
      origPrice = orig > 0 ? ("\u20A9 " + orig.toLocaleString("ko-KR")) : "";
    } else {
      var raw = parseInt(g.price, 10);
      salePrice = formatKRW(raw);
      var origRaw = Math.round(raw / (1 - disc / 100));
      origPrice = formatKRW(origRaw);
    }
    html += '<div class="deal-card" onclick="openModal(' + g.appid + ')">';
    html += '<img src="' + escHtml(g.header_img) + '" alt="' + escHtml(g.name_kr || g.name) + '">';
    html += '<div class="deal-info">';
    html += '<div class="deal-name">' + escHtml(g.name_kr || g.name) + '</div>';
    html += '<div class="deal-price-row">';
    html += '<span class="deal-badge">-' + disc + '%</span>';
    if (origPrice) html += '<span class="deal-orig">' + origPrice + '</span>';
    html += '<span class="deal-sale">' + salePrice + '</span>';
    html += '</div></div></div>';
  }
  grid.innerHTML = html;
}

/* ===== EPIC DATA PARSE ===== */
function parseEpicData(raw) {
  try {
    var elems = raw.data.Catalog.searchStore.elements;
    epicAllGames = elems;
    epicFreeNow = [];
    epicFreeUpcoming = [];
    epicDeals = [];
    var now = new Date();
    for (var i = 0; i < elems.length; i++) {
      var g = elems[i];
      var p = g.price ? g.price.totalPrice : null;
      if (!p) continue;
      var promo = g.promotions;
      if (promo && promo.promotionalOffers && promo.promotionalOffers.length) {
        var offers = promo.promotionalOffers[0].promotionalOffers;
        for (var k = 0; k < offers.length; k++) {
          var sd = new Date(offers[k].startDate);
          var ed = new Date(offers[k].endDate);
          if (now >= sd && now <= ed && p.discountPrice === 0) {
            epicFreeNow.push(g);
          }
        }
      }
      if (promo && promo.upcomingPromotionalOffers && promo.upcomingPromotionalOffers.length) {
        var up = promo.upcomingPromotionalOffers[0].promotionalOffers;
        for (var k = 0; k < up.length; k++) {
          if (up[k].discountSetting && up[k].discountSetting.discountPercentage === 0) {
            epicFreeUpcoming.push(g);
          } else if (up[k].discountSetting && up[k].discountSetting.discountPercentage > 0) {
            epicDeals.push(g);
          }
        }
      }
      if (p.discount > 0 && p.discountPrice > 0) {
        var already = false;
        for (var m = 0; m < epicDeals.length; m++) { if (epicDeals[m].id === g.id) { already = true; break; } }
        if (!already) epicDeals.push(g);
      }
    }
  } catch(e) {
    console.log("Epic parse error:", e);
  }
}

/* ===== EPIC FREE GAMES ===== */
function renderEpicFree() {
  var list = $("epicFreeList");
  if (!list) return;
  if (epicFreeNow.length === 0 && epicFreeUpcoming.length === 0) {
    list.innerHTML = '<p style="color:#888">\uD604\uC7AC \uBB34\uB8CC \uAC8C\uC784 \uC815\uBCF4\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.</p>';
    return;
  }
  var html = "";
  for (var i = 0; i < epicFreeNow.length; i++) {
    html += buildEpicFreeCard(epicFreeNow[i], "free");
  }
  for (var i = 0; i < epicFreeUpcoming.length; i++) {
    html += buildEpicFreeCard(epicFreeUpcoming[i], "upcoming");
  }
  list.innerHTML = html;
}

function buildEpicFreeCard(g, type) {
  var img = epicImg(g, "OfferImageWide") || epicImg(g, "Thumbnail");
  var link = epicLink(g);
  var badge = type === "free" ? "\uBB34\uB8CC" : "\uC608\uC815";
  var badgeClass = type === "free" ? "epic-badge-free" : "epic-badge-upcoming";
  var origPrice = "";
  if (g.price && g.price.totalPrice && g.price.totalPrice.fmtPrice) {
    origPrice = g.price.totalPrice.fmtPrice.originalPrice;
  }
  var h = '<div class="deal-card">';
  h += '<a href="' + escHtml(link) + '" target="_blank" style="text-decoration:none;color:inherit">';
  h += '<img src="' + escHtml(img) + '" alt="' + escHtml(g.title) + '">';
  h += '<div class="deal-info">';
  h += '<div class="deal-name">' + escHtml(g.title) + '</div>';
  h += '<div class="deal-price-row">';
  h += '<span class="deal-badge ' + badgeClass + '">' + badge + '</span>';
  if (origPrice && origPrice !== "0") h += '<span class="deal-orig">' + origPrice + '</span>';
  h += '<span class="deal-sale">\uBB34\uB8CC</span>';
  h += '</div></div></a></div>';
  return h;
}

/* ===== EPIC TOP 20 ===== */
function renderEpicTop20() {
  var grid = $("epicTop20");
  if (!grid) return;
  if (epicAllGames.length === 0) { grid.innerHTML = '<p style="color:#888">\uB370\uC774\uD130\uB97C \uBD88\uB7EC\uC624\uB294 \uC911...</p>'; return; }
  var html = "";
  var show = epicTopExpanded ? epicAllGames.length : Math.min(10, epicAllGames.length);
  for (var i = 0; i < show; i++) {
    var g = epicAllGames[i];
    var img = epicImg(g, "OfferImageWide") || epicImg(g, "Thumbnail");
    var link = epicLink(g);
    var priceText = "\uBB34\uB8CC";
    if (g.price && g.price.totalPrice) {
      var dp = g.price.totalPrice.discountPrice;
      if (dp > 0 && g.price.totalPrice.fmtPrice) {
        priceText = g.price.totalPrice.fmtPrice.discountPrice;
      }
    }
    html += '<div class="top20-card' + (i >= 10 ? " hidden-card" : "") + '">';
    html += '<a href="' + escHtml(link) + '" target="_blank" style="text-decoration:none;color:inherit">';
    html += '<div class="top20-rank">' + (i + 1) + '</div>';
    html += '<img src="' + escHtml(img) + '" alt="' + escHtml(g.title) + '">';
    html += '<div class="top20-info">';
    html += '<div class="top20-name">' + escHtml(g.title) + '</div>';
    html += '<div class="top20-price">' + priceText + '</div>';
    html += '</div></a></div>';
  }
  if (epicAllGames.length > 10) {
    html += '<div class="btn-more-wrap"><button class="btn-more" onclick="event.stopPropagation();toggleEpicTop()">';
    html += epicTopExpanded ? '<i class="fa-solid fa-chevron-up"></i>' : '<i class="fa-solid fa-chevron-down"></i>';
    html += '</button></div>';
  }
  grid.innerHTML = html;
}

function toggleEpicTop() {
  epicTopExpanded = !epicTopExpanded;
  renderEpicTop20();
}

/* ===== EPIC DEALS ===== */
function renderEpicDeals() {
  var grid = $("epicDealGrid");
  if (!grid) return;
  if (epicDeals.length === 0) { grid.innerHTML = '<p style="color:#888">\uD604\uC7AC \uD560\uC778 \uC815\uBCF4\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.</p>'; return; }
  var html = "";
  for (var i = 0; i < epicDeals.length; i++) {
    var g = epicDeals[i];
    var img = epicImg(g, "OfferImageWide") || epicImg(g, "Thumbnail");
    var link = epicLink(g);
    var disc = 0;
    if (g.promotions && g.promotions.upcomingPromotionalOffers && g.promotions.upcomingPromotionalOffers.length) {
      var ups = g.promotions.upcomingPromotionalOffers[0].promotionalOffers;
      if (ups.length && ups[0].discountSetting) disc = ups[0].discountSetting.discountPercentage;
    }
    if (disc === 0 && g.price && g.price.totalPrice && g.price.totalPrice.discount > 0 && g.price.totalPrice.originalPrice > 0) {
      disc = Math.round(g.price.totalPrice.discount / g.price.totalPrice.originalPrice * 100);
    }
    var origPrice = "", salePrice = "";
    if (g.price && g.price.totalPrice && g.price.totalPrice.fmtPrice) {
      origPrice = g.price.totalPrice.fmtPrice.originalPrice;
      if (disc > 0) {
        var op = g.price.totalPrice.originalPrice;
        var sp = Math.round(op * (1 - disc / 100));
        salePrice = "\u20A9 " + sp.toLocaleString("ko-KR");
      } else {
        salePrice = g.price.totalPrice.fmtPrice.discountPrice;
      }
    }
    html += '<div class="deal-card">';
    html += '<a href="' + escHtml(link) + '" target="_blank" style="text-decoration:none;color:inherit">';
    html += '<img src="' + escHtml(img) + '" alt="' + escHtml(g.title) + '">';
    html += '<div class="deal-info">';
    html += '<div class="deal-name">' + escHtml(g.title) + '</div>';
    html += '<div class="deal-price-row">';
    if (disc > 0) html += '<span class="deal-badge">-' + disc + '%</span>';
    if (origPrice) html += '<span class="deal-orig">' + origPrice + '</span>';
    html += '<span class="deal-sale">' + (salePrice || origPrice) + '</span>';
    html += '</div></div></a></div>';
  }
  grid.innerHTML = html;
}
/* ============================================================
   GameZone – gamezone.js  (Part 3: Modal, Sidebar, Nav, Admin, Gear, Search, Init)
   ============================================================ */

/* ===== GAME MODAL (Steam) ===== */
function openModal(appid) {
  var g = null;
  var all = top20Data.concat(top100Data);
  for (var i = 0; i < all.length; i++) {
    if (all[i].appid === appid) { g = all[i]; break; }
  }
  if (!g) return;
  var m = $("gameModal");
  var mc = $("modalContent");
  if (!m || !mc) return;

  var priceHtml = "";
  if (g.is_free || g.price === "0") {
    priceHtml = '<span class="modal-price-free">\uBB34\uB8CC</span>';
  } else {
    var disc = parseInt(g.discount, 10);
    if (disc > 0) {
      priceHtml = '<span class="deal-badge">-' + disc + '%</span> ';
      priceHtml += '<span class="modal-price-sale">' + (g.price_kr_formatted || formatKRW(g.price)) + '</span>';
    } else {
      priceHtml = '<span class="modal-price-normal">' + (g.price_kr_formatted || formatKRW(g.price)) + '</span>';
    }
  }

  var genreHtml = "";
  if (g.genres && g.genres.length) {
    for (var i = 0; i < g.genres.length; i++) {
      genreHtml += '<span class="modal-genre-tag">' + escHtml(g.genres[i]) + '</span>';
    }
  }

  var ssHtml = "";
  if (g.screenshots && g.screenshots.length) {
    var ssMax = Math.min(6, g.screenshots.length);
    for (var i = 0; i < ssMax; i++) {
      ssHtml += '<img src="' + escHtml(g.screenshots[i]) + '" alt="ss" class="modal-ss" onclick="openLightbox(this.src)">';
    }
  }

  var specHtml = "";
  if (g.pc_requirements) {
    if (g.pc_requirements.minimum) {
      specHtml += '<div class="modal-spec"><h4>\uCD5C\uC18C \uC0AC\uC591</h4>' + g.pc_requirements.minimum + '</div>';
    }
    if (g.pc_requirements.recommended) {
      specHtml += '<div class="modal-spec"><h4>\uAD8C\uC7A5 \uC0AC\uC591</h4>' + g.pc_requirements.recommended + '</div>';
    }
  }

  var metaHtml = "";
  if (g.metacritic && g.metacritic > 0) {
    metaHtml = '<div class="modal-meta"><span class="meta-score">' + g.metacritic + '</span> Metacritic</div>';
  }

  var reviewHtml = "";
  var pos = g.positive || 0;
  var neg = g.negative || 0;
  var total = pos + neg;
  if (total > 0) {
    var pct = Math.round(pos / total * 100);
    reviewHtml = '<div class="modal-review"><i class="fa-solid fa-thumbs-up" style="color:#66c0f4"></i> ' + pct + '% \uAE0D\uC815 (' + total.toLocaleString("ko-KR") + '\uAC1C)</div>';
  }

  var html = '';
  html += '<div class="modal-header">';
  html += '<img src="' + escHtml(g.header_img) + '" class="modal-header-img">';
  html += '<button class="modal-close" onclick="closeModal()">&times;</button>';
  html += '</div>';
  html += '<div class="modal-body">';
  html += '<h2 class="modal-title">' + escHtml(g.name_kr || g.name) + '</h2>';
  html += '<div class="modal-row">' + genreHtml + '</div>';
  html += '<div class="modal-row">';
  if (g.release_date) html += '<span class="modal-date"><i class="fa-solid fa-calendar"></i> ' + escHtml(g.release_date) + '</span>';
  if (g.ccu) html += '<span class="modal-ccu"><i class="fa-solid fa-user"></i> ' + g.ccu.toLocaleString("ko-KR") + '\uBA85</span>';
  html += '</div>';
  html += metaHtml + reviewHtml;
  html += '<div class="modal-price-row">' + priceHtml + '</div>';
  if (g.desc_kr) html += '<p class="modal-desc">' + escHtml(g.desc_kr) + '</p>';
  if (ssHtml) html += '<div class="modal-screenshots">' + ssHtml + '</div>';
  html += specHtml;
  html += '<div class="modal-actions">';
  html += '<a href="' + steamLink(g.appid) + '" target="_blank" class="modal-btn-steam"><i class="fa-brands fa-steam"></i> Steam\uC5D0\uC11C \uBCF4\uAE30</a>';
  html += '</div></div>';

  mc.innerHTML = html;
  m.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  var m = $("gameModal");
  if (m) m.classList.remove("open");
  document.body.style.overflow = "";
}

function openLightbox(src) {
  var lb = $("lightbox");
  var lbImg = $("lightboxImg");
  if (!lb || !lbImg) return;
  lbImg.src = src;
  lb.classList.add("open");
}

function closeLightbox() {
  var lb = $("lightbox");
  if (lb) lb.classList.remove("open");
}

/* ===== SIDEBAR ===== */
function renderSidebar() {
  var sc = $("sideContent");
  if (!sc) return;
  var html = "";
  html += '<div class="side-section">';
  html += '<div class="side-title"><i class="fa-solid fa-gamepad"></i> \uAC9C\uC874 \uAC00\uC774\uB4DC</div>';
  for (var i = 0; i < GUIDE_LABELS.length; i++) {
    var gl = GUIDE_LABELS[i];
    html += '<div class="side-topic">';
    html += '<div class="side-topic-title"><i class="fa-solid ' + gl.icon + '"></i> ' + escHtml(gl.label) + '</div>';
    html += '<div class="side-posts" id="guide_' + i + '"><span class="side-loading">\uB85C\uB529\uC911...</span></div>';
    html += '</div>';
  }
  html += '</div>';
  for (var j = 0; j < GAME_SIDES.length; j++) {
    var gs = GAME_SIDES[j];
    html += '<div class="side-section">';
    html += '<div class="side-title side-toggle" onclick="toggleSideGame(' + j + ')">';
    html += '<i class="fa-solid ' + gs.icon + '"></i> ' + escHtml(gs.label);
    html += ' <i class="fa-solid fa-chevron-down" id="sideArrow_' + j + '"></i>';
    html += '</div>';
    html += '<div class="side-game-posts" id="sideGame_' + j + '" style="display:none">';
    html += '<span class="side-loading">\uB85C\uB529\uC911...</span></div></div>';
  }
  sc.innerHTML = html;
  loadGuidePosts();
  loadGamePosts();
}

function toggleSideGame(idx) {
  GAME_SIDES[idx].open = !GAME_SIDES[idx].open;
  var el = $("sideGame_" + idx);
  var arrow = $("sideArrow_" + idx);
  if (el) el.style.display = GAME_SIDES[idx].open ? "block" : "none";
  if (arrow) arrow.className = "fa-solid fa-chevron-" + (GAME_SIDES[idx].open ? "up" : "down");
}

function loadGuidePosts() {
  for (var i = 0; i < GUIDE_LABELS.length; i++) {
    (function(idx) {
      var label = GUIDE_LABELS[idx].label;
      var url = BLOG_URL + "/feeds/posts/default/-/" + encodeURIComponent(label) + "?alt=json&max-results=3";
      fetch(url).then(function(r) { return r.json(); }).then(function(data) {
        var el = $("guide_" + idx);
        if (!el) return;
        if (!data.feed || !data.feed.entry || !data.feed.entry.length) {
          el.innerHTML = '<span class="side-empty">\uAC8C\uC2DC\uAE00 \uC5C6\uC74C</span>';
          return;
        }
        var h = "";
        for (var k = 0; k < data.feed.entry.length; k++) {
          var e = data.feed.entry[k];
          var t = e.title ? e.title.$t : "";
          var lk = "#";
          if (e.link) { for (var l = 0; l < e.link.length; l++) { if (e.link[l].rel === "alternate") { lk = e.link[l].href; break; } } }
          h += '<a href="' + escHtml(lk) + '" class="side-post-link">' + escHtml(t) + '</a>';
        }
        el.innerHTML = h;
      }).catch(function() {
        var el = $("guide_" + idx);
        if (el) el.innerHTML = '<span class="side-empty">\uBD88\uB7EC\uC624\uAE30 \uC2E4\uD328</span>';
      });
    })(i);
  }
}

function loadGamePosts() {
  for (var j = 0; j < GAME_SIDES.length; j++) {
    (function(idx) {
      var label = GAME_SIDES[idx].label;
      var url = BLOG_URL + "/feeds/posts/default/-/" + encodeURIComponent(label) + "?alt=json&max-results=5&orderby=published";
      fetch(url).then(function(r) { return r.json(); }).then(function(data) {
        var el = $("sideGame_" + idx);
        if (!el) return;
        if (!data.feed || !data.feed.entry || !data.feed.entry.length) {
          el.innerHTML = '<span class="side-empty">\uAC8C\uC2DC\uAE00 \uC5C6\uC74C</span>';
          return;
        }
        var h = "";
        for (var k = 0; k < data.feed.entry.length; k++) {
          var e = data.feed.entry[k];
          var t = e.title ? e.title.$t : "";
          var lk = "#";
          if (e.link) { for (var l = 0; l < e.link.length; l++) { if (e.link[l].rel === "alternate") { lk = e.link[l].href; break; } } }
          h += '<a href="' + escHtml(lk) + '" class="side-post-link">' + escHtml(t) + '</a>';
        }
        el.innerHTML = h;
      }).catch(function() {
        var el = $("sideGame_" + idx);
        if (el) el.innerHTML = '<span class="side-empty">\uBD88\uB7EC\uC624\uAE30 \uC2E4\uD328</span>';
      });
    })(j);
  }
}
/* ===== NAVIGATION DROPDOWNS ===== */
function initNav() {
  var navItems = document.querySelectorAll(".nav-item.has-drop");
  for (var i = 0; i < navItems.length; i++) {
    (function(item) {
      var link = item.querySelector(".nav-link");
      if (link) {
        link.addEventListener("click", function(e) {
          e.preventDefault();
          e.stopPropagation();
          var wasOpen = item.classList.contains("open");
          closeAllDropdowns();
          if (!wasOpen) item.classList.add("open");
        });
      }
    })(navItems[i]);
  }

  var catSteam = $("catSteamList");
  var catEpic = $("catEpicList");
  if (catSteam) {
    var h = "";
    for (var i = 0; i < STEAM_CATS.length; i++) {
      h += '<a href="' + STEAM_CATS[i].url + '" target="_blank" class="drop-link"><i class="fa-solid ' + STEAM_CATS[i].icon + '"></i> ' + escHtml(STEAM_CATS[i].name) + '</a>';
    }
    catSteam.innerHTML = h;
  }
  if (catEpic) {
    var h = "";
    for (var i = 0; i < EPIC_CATS.length; i++) {
      h += '<a href="' + EPIC_CATS[i].url + '" target="_blank" class="drop-link"><i class="fa-solid ' + EPIC_CATS[i].icon + '"></i> ' + escHtml(EPIC_CATS[i].name) + '</a>';
    }
    catEpic.innerHTML = h;
  }

  var playSteam = $("playSteamList");
  var playEpic = $("playEpicList");
  if (playSteam) {
    var h = "";
    for (var i = 0; i < STEAM_PLAY.length; i++) {
      h += '<a href="' + STEAM_PLAY[i].url + '" target="_blank" class="drop-link"><i class="fa-solid ' + STEAM_PLAY[i].icon + '"></i> ' + escHtml(STEAM_PLAY[i].name) + '</a>';
    }
    playSteam.innerHTML = h;
  }
  if (playEpic) {
    var h = "";
    for (var i = 0; i < EPIC_PLAY.length; i++) {
      h += '<a href="' + EPIC_PLAY[i].url + '" target="_blank" class="drop-link"><i class="fa-solid ' + EPIC_PLAY[i].icon + '"></i> ' + escHtml(EPIC_PLAY[i].name) + '</a>';
    }
    playEpic.innerHTML = h;
  }

  var tabBtns = document.querySelectorAll(".tab-btn");
  for (var i = 0; i < tabBtns.length; i++) {
    tabBtns[i].addEventListener("click", function(e) {
      e.stopPropagation();
      var target = this.getAttribute("data-target");
      var parent = this.closest(".drop-panel");
      if (!parent) return;
      var allTabs = parent.querySelectorAll(".tab-btn");
      var allPanels = parent.querySelectorAll(".tab-panel");
      for (var k = 0; k < allTabs.length; k++) allTabs[k].classList.remove("active");
      for (var k = 0; k < allPanels.length; k++) allPanels[k].classList.remove("active");
      this.classList.add("active");
      var tp = parent.querySelector("#" + target);
      if (tp) tp.classList.add("active");
    });
  }
}

function closeAllDropdowns() {
  var items = document.querySelectorAll(".nav-item.has-drop");
  for (var i = 0; i < items.length; i++) items[i].classList.remove("open");
}

/* ===== MOBILE MENU ===== */
function initMobile() {
  var burger = $("burger");
  var mobileMenu = $("mobileMenu");
  if (burger && mobileMenu) {
    burger.addEventListener("click", function() {
      mobileMenu.classList.toggle("open");
    });
  }
}

/* ===== SEARCH ===== */
function initSearch() {
  var input = $("searchInput");
  var results = $("searchResults");
  if (!input || !results) return;

  input.addEventListener("input", function() {
    var q = input.value.trim().toLowerCase();
    if (q.length < 2) { results.innerHTML = ""; results.style.display = "none"; return; }
    var all = top20Data.concat(top100Data);
    var matches = [];
    var seen = {};
    for (var i = 0; i < all.length; i++) {
      var g = all[i];
      if (seen[g.appid]) continue;
      var nk = (g.name_kr || "").toLowerCase();
      var ne = (g.name || "").toLowerCase();
      if (nk.indexOf(q) >= 0 || ne.indexOf(q) >= 0) {
        matches.push(g);
        seen[g.appid] = true;
      }
      if (matches.length >= 8) break;
    }
    if (matches.length === 0) {
      results.innerHTML = '<div class="search-empty">\uAC80\uC0C9 \uACB0\uACFC \uC5C6\uC74C</div>';
      results.style.display = "block";
      return;
    }
    var html = "";
    for (var i = 0; i < matches.length; i++) {
      var g = matches[i];
      html += '<div class="search-item" onclick="openModal(' + g.appid + ');document.getElementById(\'searchResults\').style.display=\'none\'">';
      html += '<img src="' + escHtml(g.header_img) + '">';
      html += '<span>' + escHtml(g.name_kr || g.name) + '</span>';
      html += '</div>';
    }
    results.innerHTML = html;
    results.style.display = "block";
  });

  input.addEventListener("focus", function() {
    if (input.value.trim().length >= 2) results.style.display = "block";
  });
}

/* ===== ADMIN MODE ===== */
function initAdmin() {
  var logo = document.querySelector(".logo");
  if (!logo) return;
  logo.addEventListener("click", function(e) {
    e.preventDefault();
    logoClicks++;
    clearTimeout(logoTimer);
    logoTimer = setTimeout(function() { logoClicks = 0; }, 3000);
    if (logoClicks >= 5) {
      logoClicks = 0;
      var pwModal = $("pwModal");
      if (pwModal) pwModal.classList.add("open");
    }
  });

  var pwBtn = $("pwSubmit");
  if (pwBtn) {
    pwBtn.addEventListener("click", function() {
      var input = $("pwInput");
      if (!input) return;
      if (input.value === ADMIN_PW) {
        isAdmin = true;
        var pwModal = $("pwModal");
        if (pwModal) pwModal.classList.remove("open");
        input.value = "";
        document.body.classList.add("admin-mode");
        toast("\uAD00\uB9AC\uC790 \uBAA8\uB4DC \uD65C\uC131\uD654");
        renderGear();
      } else {
        toast("\uBE44\uBC00\uBC88\uD638\uAC00 \uD2C0\uB9BD\uB2C8\uB2E4");
        input.value = "";
      }
    });
  }

  var pwClose = $("pwClose");
  if (pwClose) {
    pwClose.addEventListener("click", function() {
      var pw = $("pwModal");
      if (pw) pw.classList.remove("open");
    });
  }
}

/* ===== GEAR SECTION ===== */
function getGearData() {
  var saved = localStorage.getItem("gz_gear");
  if (saved) { try { return JSON.parse(saved); } catch(e) {} }
  return DEFAULT_GEAR.map(function(c) { return {name:c.name, icon:c.icon, items:[]}; });
}

function saveGearData(data) {
  localStorage.setItem("gz_gear", JSON.stringify(data));
}

function renderGear() {
  var grid = $("gearGrid");
  if (!grid) return;
  var data = getGearData();
  var activeTab = parseInt(localStorage.getItem("gz_gear_tab") || "0", 10);
  if (activeTab >= data.length) activeTab = 0;

  var tabHtml = "";
  for (var i = 0; i < data.length; i++) {
    tabHtml += '<button class="gear-tab' + (i === activeTab ? " active" : "") + '" onclick="switchGearTab(' + i + ')">';
    tabHtml += '<i class="fa-solid ' + data[i].icon + '"></i> ' + escHtml(data[i].name) + '</button>';
  }

  var contentHtml = "";
  var items = data[activeTab] ? data[activeTab].items : [];
  if (items.length === 0) {
    contentHtml = '<p style="color:#888;text-align:center;padding:20px">\uB4F1\uB85D\uB41C \uC544\uC774\uD15C\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.</p>';
  } else {
    for (var i = 0; i < items.length; i++) {
      var it = items[i];
      contentHtml += '<div class="gear-card">';
      if (it.img) contentHtml += '<img src="' + escHtml(it.img) + '">';
      contentHtml += '<div class="gear-info">';
      contentHtml += '<div class="gear-name">' + escHtml(it.name) + '</div>';
      if (it.desc) contentHtml += '<div class="gear-desc">' + escHtml(it.desc) + '</div>';
      if (it.link) contentHtml += '<a href="' + escHtml(it.link) + '" target="_blank" class="gear-link">\uBCF4\uB7EC\uAC00\uAE30</a>';
      contentHtml += '</div>';
      if (isAdmin) contentHtml += '<button class="gear-del" onclick="deleteGearItem(' + activeTab + ',' + i + ')"><i class="fa-solid fa-trash"></i></button>';
      contentHtml += '</div>';
    }
  }

  var adminHtml = "";
  if (isAdmin) {
    adminHtml += '<div class="gear-admin">';
    adminHtml += '<div class="gear-admin-title">\uC544\uC774\uD15C \uCD94\uAC00</div>';
    adminHtml += '<input id="gearItemName" placeholder="\uC0C1\uD488\uBA85" class="gear-input">';
    adminHtml += '<input id="gearItemDesc" placeholder="\uC124\uBA85" class="gear-input">';
    adminHtml += '<input id="gearItemImg" placeholder="\uC774\uBBF8\uC9C0 URL" class="gear-input">';
    adminHtml += '<input id="gearItemLink" placeholder="\uB9C1\uD06C URL" class="gear-input">';
    adminHtml += '<button onclick="addGearItem(' + activeTab + ')" class="gear-add-btn">\uCD94\uAC00</button>';
    adminHtml += '</div>';
  }

  grid.innerHTML = '<div class="gear-tabs">' + tabHtml + '</div><div class="gear-content">' + contentHtml + '</div>' + adminHtml;
}

function switchGearTab(idx) {
  localStorage.setItem("gz_gear_tab", idx);
  renderGear();
}

function addGearItem(tabIdx) {
  var name = $("gearItemName");
  if (!name || !name.value.trim()) return toast("\uC0C1\uD488\uBA85\uC744 \uC785\uB825\uD558\uC138\uC694");
  var data = getGearData();
  if (!data[tabIdx]) return;
  data[tabIdx].items.push({
    name: name.value.trim(),
    desc: ($("gearItemDesc") ? $("gearItemDesc").value.trim() : ""),
    img: ($("gearItemImg") ? $("gearItemImg").value.trim() : ""),
    link: ($("gearItemLink") ? $("gearItemLink").value.trim() : "")
  });
  saveGearData(data);
  renderGear();
  toast("\uC544\uC774\uD15C \uCD94\uAC00\uB428");
}

function deleteGearItem(tabIdx, itemIdx) {
  var data = getGearData();
  if (!data[tabIdx]) return;
  data[tabIdx].items.splice(itemIdx, 1);
  saveGearData(data);
  renderGear();
  toast("\uC544\uC774\uD15C \uC0AD\uC81C\uB428");
}

/* ===== BACK TO TOP ===== */
function initBackToTop() {
  var btn = $("backToTop");
  if (!btn) return;
  window.addEventListener("scroll", function() {
    btn.classList.toggle("show", window.scrollY > 400);
  });
  btn.addEventListener("click", function() {
    window.scrollTo({top:0, behavior:"smooth"});
  });
}

/* ===== CLOSE HANDLERS ===== */
function initCloseHandlers() {
  document.addEventListener("click", function(e) {
    if (!e.target.closest(".nav-item.has-drop")) closeAllDropdowns();
    var sr = $("searchResults");
    if (sr && !e.target.closest(".search-box")) sr.style.display = "none";
    var fp = $("fontPanel");
    if (fp && fp.style.display === "block" && !e.target.closest("#fontPanel") && !e.target.closest(".font-btn")) fp.style.display = "none";
  });

  var modal = $("gameModal");
  if (modal) modal.addEventListener("click", function(e) { if (e.target === modal) closeModal(); });

  var lb = $("lightbox");
  if (lb) lb.addEventListener("click", function(e) { if (e.target === lb) closeLightbox(); });

  var pwModal = $("pwModal");
  if (pwModal) pwModal.addEventListener("click", function(e) { if (e.target === pwModal) pwModal.classList.remove("open"); });

  document.addEventListener("keydown", function(e) {
    if (e.key === "Escape") { closeModal(); closeLightbox(); var pw = $("pwModal"); if (pw) pw.classList.remove("open"); }
  });
}

/* ===== META INFO ===== */
function renderMeta() {
  var el = $("metaInfo");
  if (!el || !metaData) return;
  el.textContent = "\uB370\uC774\uD130 \uAC31\uC2E0: " + (metaData.updated_at || "N/A");
}

/* ============================================================
   INITIALIZATION
   ============================================================ */
document.addEventListener("DOMContentLoaded", function() {
  initFont();
  initNav();
  initMobile();
  initSearch();
  initAdmin();
  initCloseHandlers();
  initBackToTop();
  renderSidebar();
  renderGear();

  fetch(DATA_BASE + "top20.json")
    .then(function(r) { return r.json(); })
    .then(function(data) {
      top20Data = data;
      renderSteamTop20();
      renderDeals();
      fetchEpicAndHero();
    })
    .catch(function(err) {
      console.log("top20 error:", err);
      var el = $("steamTop20");
      if (el) el.innerHTML = '<p style="color:#f44">Steam TOP20 \uB85C\uB4DC \uC2E4\uD328</p>';
    });

  fetch(DATA_BASE + "top100.json")
    .then(function(r) { return r.json(); })
    .then(function(data) {
      top100Data = data;
      renderDeals();
    })
    .catch(function(err) { console.log("top100 error:", err); });

  fetch(DATA_BASE + "meta.json")
    .then(function(r) { return r.json(); })
    .then(function(data) { metaData = data; renderMeta(); })
    .catch(function(err) { console.log("meta error:", err); });
});

function fetchEpicAndHero() {
  fetch(DATA_BASE + "epic.json")
    .then(function(r) { return r.json(); })
    .then(function(data) {
      parseEpicData(data);
      renderEpicFree();
      renderEpicTop20();
      renderEpicDeals();
      buildHeroSlides();
      renderHero();
    })
    .catch(function(err) {
      console.log("epic error:", err);
      buildHeroSlides();
      renderHero();
      var el = $("epicTop20");
      if (el) el.innerHTML = '<p style="color:#f44">Epic \uB370\uC774\uD130 \uB85C\uB4DC \uC2E4\uD328</p>';
    });
}
