/* ===== CONSTANTS ===== */
var DATA_BASE="https://kjjin628.github.io/gamezone-data/";
var BLOG_URL="https://gamezone-kr.blogspot.com";
var EPIC_API="https://store-site-backend-static-ipv4.ak.epicgames.com/freeGamesPromotions?locale=ko&country=KR&allowCountries=KR";
var EPIC_STORE="https://store.epicgames.com/ko/p/";
var EPIC_BROWSE="https://store.epicgames.com/ko/browse?sortBy=relevancy&category=Game&count=40";
var CREATOR_TAG="";
var DEFAULT_FONT="Nanum Gothic";
var ADMIN_PW="gamezone2026";

/* ===== FONT LIST ===== */
var FONT_LIST=[
{name:"나눔고딕",family:"Nanum Gothic",url:""},
{name:"나눔명조",family:"Nanum Myeongjo",url:"https://fonts.googleapis.com/css2?family=Nanum+Myeongjo:wght@400;700;800&display=swap"},
{name:"나눔바른고딕",family:"NanumBarunGothic",url:"https://cdn.jsdelivr.net/npm/font-nanumbarungothic@1.0/nanumbarungothicsubset.css"},
{name:"나눔스퀘어",family:"NanumSquare",url:"https://cdn.jsdelivr.net/npm/nanumsquare@1.0/nanumsquare.css"},
{name:"마루부리",family:"MaruBuri",url:"https://cdn.jsdelivr.net/gh/kfonts/maruburi@main/maruburi.css"},
{name:"Noto Sans KR",family:"Noto Sans KR",url:"https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;700;900&display=swap"},
{name:"Pretendard",family:"Pretendard",url:"https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css"}
];

/* ===== STEAM CATEGORIES ===== */
var STEAM_CATS=[
{name:"액션",icon:"fa-gun",url:"https://store.steampowered.com/category/action/?l=koreana"},
{name:"어드벤처",icon:"fa-hat-cowboy",url:"https://store.steampowered.com/category/adventure/?l=koreana"},
{name:"RPG",icon:"fa-hat-wizard",url:"https://store.steampowered.com/category/rpg/?l=koreana"},
{name:"전략",icon:"fa-chess",url:"https://store.steampowered.com/category/strategy/?l=koreana"},
{name:"시뮬레이션",icon:"fa-plane",url:"https://store.steampowered.com/category/simulation/?l=koreana"},
{name:"스포츠",icon:"fa-futbol",url:"https://store.steampowered.com/category/sports/?l=koreana"},
{name:"레이싱",icon:"fa-flag-checkered",url:"https://store.steampowered.com/category/racing/?l=koreana"},
{name:"인디",icon:"fa-star",url:"https://store.steampowered.com/category/indie/?l=koreana"},
{name:"캐주얼",icon:"fa-puzzle-piece",url:"https://store.steampowered.com/category/casual/?l=koreana"},
{name:"무료",icon:"fa-gift",url:"https://store.steampowered.com/genre/Free%20to%20Play/?l=koreana"},
{name:"공포",icon:"fa-ghost",url:"https://store.steampowered.com/category/horror/?l=koreana"},
{name:"생존",icon:"fa-campground",url:"https://store.steampowered.com/category/survival/?l=koreana"}
];
var EPIC_CATS=[
{name:"액션",icon:"fa-gun",url:"https://store.epicgames.com/ko/browse?tag=Action&category=Game"},
{name:"어드벤처",icon:"fa-hat-cowboy",url:"https://store.epicgames.com/ko/browse?tag=Adventure&category=Game"},
{name:"RPG",icon:"fa-hat-wizard",url:"https://store.epicgames.com/ko/browse?tag=RPG&category=Game"},
{name:"전략",icon:"fa-chess",url:"https://store.epicgames.com/ko/browse?tag=Strategy&category=Game"},
{name:"시뮬레이션",icon:"fa-plane",url:"https://store.epicgames.com/ko/browse?tag=Simulation&category=Game"},
{name:"스포츠",icon:"fa-futbol",url:"https://store.epicgames.com/ko/browse?tag=Sports&category=Game"},
{name:"레이싱",icon:"fa-flag-checkered",url:"https://store.epicgames.com/ko/browse?tag=Racing&category=Game"},
{name:"인디",icon:"fa-star",url:"https://store.epicgames.com/ko/browse?tag=Indie&category=Game"},
{name:"캐주얼",icon:"fa-puzzle-piece",url:"https://store.epicgames.com/ko/browse?tag=Casual&category=Game"},
{name:"무료",icon:"fa-gift",url:"https://store.epicgames.com/ko/browse?sortBy=currentPrice&sortDir=ASC&category=Game"},
{name:"공포",icon:"fa-ghost",url:"https://store.epicgames.com/ko/browse?tag=Horror&category=Game"},
{name:"오픈월드",icon:"fa-earth-americas",url:"https://store.epicgames.com/ko/browse?tag=Open+World&category=Game"}
];
var STEAM_PLAY=[
{name:"싱글플레이",icon:"fa-user",url:"https://store.steampowered.com/category/single_player/?l=koreana"},
{name:"멀티플레이",icon:"fa-users",url:"https://store.steampowered.com/category/multiplayer/?l=koreana"},
{name:"협동",icon:"fa-handshake",url:"https://store.steampowered.com/category/co-op/?l=koreana"},
{name:"온라인 PvP",icon:"fa-crosshairs",url:"https://store.steampowered.com/category/online_pvp/?l=koreana"},
{name:"MMO",icon:"fa-globe",url:"https://store.steampowered.com/category/mmo/?l=koreana"},
{name:"로컬 멀티",icon:"fa-couch",url:"https://store.steampowered.com/category/local_multiplayer/?l=koreana"},
{name:"배틀로얄",icon:"fa-skull-crossbones",url:"https://store.steampowered.com/category/battle_royale/?l=koreana"},
{name:"컨트롤러",icon:"fa-gamepad",url:"https://store.steampowered.com/category/controller_support/?l=koreana"}
];
var EPIC_PLAY=[
{name:"싱글플레이",icon:"fa-user",url:"https://store.epicgames.com/ko/browse?tag=Singleplayer&category=Game"},
{name:"멀티플레이",icon:"fa-users",url:"https://store.epicgames.com/ko/browse?tag=Multiplayer&category=Game"},
{name:"협동",icon:"fa-handshake",url:"https://store.epicgames.com/ko/browse?tag=Co-op&category=Game"},
{name:"MMO",icon:"fa-globe",url:"https://store.epicgames.com/ko/browse?tag=MMO&category=Game"},
{name:"PvP",icon:"fa-crosshairs",url:"https://store.epicgames.com/ko/browse?tag=PvP&category=Game"},
{name:"PvE",icon:"fa-shield-halved",url:"https://store.epicgames.com/ko/browse?tag=PvE&category=Game"}
];

/* ===== SIDEBAR CONFIG ===== */
var GUIDE_LABELS=[
{label:"최신 뉴스",icon:"fa-newspaper"},
{label:"초보자 팁",icon:"fa-lightbulb"},
{label:"공략",icon:"fa-book"},
{label:"게임 추천",icon:"fa-thumbs-up"}
];
var GAME_SIDES=[
{label:"디아블로2",icon:"fa-fire",open:false},
{label:"디아블로4",icon:"fa-fire-flame-curved",open:false},
{label:"라스트에폭",icon:"fa-clock-rotate-left",open:false}
];

/* ===== GEAR DEFAULT CATEGORIES ===== */
var DEFAULT_GEAR=[
{name:"게이밍 PC",icon:"fa-desktop"},
{name:"그래픽카드",icon:"fa-microchip"},
{name:"게이밍 마우스",icon:"fa-computer-mouse"},
{name:"게이밍 키보드",icon:"fa-keyboard"},
{name:"게이밍 모니터",icon:"fa-display"},
{name:"게이밍 헤드셋",icon:"fa-headphones"},
{name:"게이밍 의자",icon:"fa-chair"},
{name:"컨트롤러",icon:"fa-gamepad"}
];

/* ===== DATA CONTAINERS ===== */
var top20Data=[], top100Data=[], metaData=null;
var epicAllGames=[], epicFreeNow=[], epicFreeUpcoming=[], epicDeals=[];
var isAdmin=false, logoClicks=0, logoTimer=null;
var heroIdx=0, heroTimer=null, heroSlides=[];
var steamTopExpanded=false, dealExpanded=false, epicTopExpanded=false, epicDealExpanded=false;

/* ===== UTILITY ===== */
function $(id){return document.getElementById(id);}
function fmtNum(n){return Number(n).toLocaleString("ko-KR");}
function fmtWon(n){if(!n||n==="0"||n===0)return"무료";var v=Number(n);if(v>10000)v=Math.round(v/100);return"₩"+fmtNum(v);}
function escHtml(s){if(!s)return"";return String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");}
function loadCss(url){if(!url)return;var l=document.createElement("link");l.rel="stylesheet";l.href=url;document.head.appendChild(l);}
function epicLink(slug){var u=EPIC_STORE+(slug||"");if(CREATOR_TAG)u+=(u.indexOf("?")>-1?"&":"?")+"utm_source=creator&utm_campaign="+CREATOR_TAG;return u;}
function toast(msg){var t=$("toast");if(!t)return;t.textContent=msg;t.classList.add("show");setTimeout(function(){t.classList.remove("show");},2500);}

/* ===== FONT SYSTEM ===== */
function initFont(){
  var saved=localStorage.getItem("gz_font");
  if(saved){try{var f=JSON.parse(saved);applyFont(f.family,f.url);}catch(e){applyFont(DEFAULT_FONT,"");}}
}
function applyFont(family,url){
  if(url)loadCss(url);
  document.body.style.fontFamily="'"+family+"', sans-serif";
  var inputs=document.querySelectorAll("input,button,select,textarea");
  for(var i=0;i<inputs.length;i++){inputs[i].style.fontFamily="'"+family+"', sans-serif";}
}
function openFontPanel(){
  var m=$("gameModal"),mb=$("modalBody");
  var h='<div class="font-panel"><div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;"><span style="font-size:16px;font-weight:700;color:#fff;">서체 변경</span><span style="cursor:pointer;color:#8f98a0;font-size:20px;" onclick="closeModal()">&times;</span></div>';
  var custom=JSON.parse(localStorage.getItem("gz_custom_fonts")||"[]");
  var all=FONT_LIST.concat(custom);
  for(var i=0;i<all.length;i++){
    var f=all[i];
    h+='<div class="font-item" onclick="selectFont('+i+')" style="font-family:\''+f.family+'\'">';
    h+='<span>'+escHtml(f.name)+'</span>';
    if(i>=FONT_LIST.length)h+='<span style="color:#e74c3c;font-size:14px;cursor:pointer;" onclick="event.stopPropagation();removeCustomFont('+(i-FONT_LIST.length)+')"><i class="fas fa-trash"></i></span>';
    h+='</div>';
  }
  h+='<div style="margin-top:16px;border-top:1px solid #2a475e;padding-top:16px;"><div style="font-size:13px;font-weight:700;color:#66c0f4;margin-bottom:8px;">커스텀 폰트 추가</div>';
  h+='<input id="cfName" placeholder="폰트 이름" style="width:100%;padding:8px;margin-bottom:6px;background:#0a0e17;border:1px solid #2a475e;border-radius:6px;color:#c6d4df;font-size:12px;"/>';
  h+='<input id="cfFamily" placeholder="CSS font-family 이름" style="width:100%;padding:8px;margin-bottom:6px;background:#0a0e17;border:1px solid #2a475e;border-radius:6px;color:#c6d4df;font-size:12px;"/>';
  h+='<input id="cfUrl" placeholder="CSS URL" style="width:100%;padding:8px;margin-bottom:8px;background:#0a0e17;border:1px solid #2a475e;border-radius:6px;color:#c6d4df;font-size:12px;"/>';
  h+='<button onclick="addCustomFont()" style="padding:8px 20px;background:#66c0f4;color:#1b2838;border:none;border-radius:6px;font-weight:700;cursor:pointer;">추가</button>';
  h+='</div></div>';
  mb.innerHTML=h;m.style.display="flex";
}
function selectFont(idx){
  var custom=JSON.parse(localStorage.getItem("gz_custom_fonts")||"[]");
  var all=FONT_LIST.concat(custom);
  if(idx>=0&&idx<all.length){var f=all[idx];applyFont(f.family,f.url);localStorage.setItem("gz_font",JSON.stringify({family:f.family,url:f.url}));toast("서체 변경: "+f.name);closeModal();}
}
function addCustomFont(){
  var n=$("cfName").value.trim(),fam=$("cfFamily").value.trim(),u=$("cfUrl").value.trim();
  if(!n||!fam){toast("이름과 font-family를 입력하세요.");return;}
  var custom=JSON.parse(localStorage.getItem("gz_custom_fonts")||"[]");
  custom.push({name:n,family:fam,url:u});
  localStorage.setItem("gz_custom_fonts",JSON.stringify(custom));
  toast("폰트 추가됨: "+n);openFontPanel();
}
function removeCustomFont(idx){
  var custom=JSON.parse(localStorage.getItem("gz_custom_fonts")||"[]");
  if(idx>=0&&idx<custom.length){custom.splice(idx,1);localStorage.setItem("gz_custom_fonts",JSON.stringify(custom));toast("폰트 삭제됨");openFontPanel();}
}

/* ===== HERO SLIDER ===== */
function renderHero(){
  var el=$("hero");if(!el)return;
  heroSlides=[];
  var steamSlides=top20Data.slice(0,3);
  for(var i=0;i<steamSlides.length;i++){
    heroSlides.push({type:"steam",name:steamSlides[i].name_kr||steamSlides[i].name,img:steamSlides[i].header_img,appid:steamSlides[i].appid,ccu:steamSlides[i].ccu,genres:steamSlides[i].genres||[]});
  }
  var epicCount=0;
  for(var j=0;j<epicFreeNow.length&&epicCount<3;j++){
    var eg=epicFreeNow[j];
    var eImg=getEpicImg(eg);
    var eSlug=getEpicSlug(eg);
    heroSlides.push({type:"epic",name:eg.title,img:eImg,slug:eSlug,price:eg.price});
    epicCount++;
  }
  for(var j2=0;j2<epicAllGames.length&&epicCount<3;j2++){
    var dup=false;
    for(var chk=0;chk<heroSlides.length;chk++){if(heroSlides[chk].name===epicAllGames[j2].title){dup=true;break;}}
    if(dup)continue;
    var eg2=epicAllGames[j2];
    heroSlides.push({type:"epic",name:eg2.title,img:getEpicImg(eg2),slug:getEpicSlug(eg2),price:eg2.price});
    epicCount++;
  }
  if(heroSlides.length===0){el.innerHTML='<div class="loader">데이터를 불러오는 중...</div>';return;}
  var h='<div class="hero-slides">';
  for(var s=0;s<heroSlides.length;s++){
    var sl=heroSlides[s];
    var act=s===0?" active":"";
    var badgeColor=sl.type==="steam"?"#66c0f4":"#a4d007";
    var badgeText=sl.type==="steam"?"STEAM":"EPIC";
    var extra2="";if(sl.type==="steam"&&sl.ccu)extra2=" | "+fmtNum(sl.ccu)+"명 플레이중";
    h+='<div class="hero-slide'+act+'" data-idx="'+s+'">';
    h+='<img src="'+escHtml(sl.img)+'" alt="'+escHtml(sl.name)+'"/>';
    h+='<div class="hero-overlay"></div>';
    h+='<div class="hero-info"><div class="hero-title">'+escHtml(sl.name)+'</div>';
    h+='<span class="hero-badge" style="background:'+badgeColor+'">'+badgeText+extra2+'</span></div></div>';
  }
  h+='</div>';
  h+='<button class="hero-arrow hero-prev" onclick="heroMove(-1)"><i class="fas fa-chevron-left"></i></button>';
  h+='<button class="hero-arrow hero-next" onclick="heroMove(1)"><i class="fas fa-chevron-right"></i></button>';
  h+='<div class="hero-dots">';
  for(var d=0;d<heroSlides.length;d++){h+='<div class="hero-dot'+(d===0?" active":"")+'" onclick="heroGo('+d+')"></div>';}
  h+='</div>';
  el.innerHTML=h;
  var slides=el.querySelectorAll(".hero-slide");
  for(var c=0;c<slides.length;c++){
    (function(idx){slides[idx].addEventListener("click",function(){
      var s2=heroSlides[idx];
      if(s2.type==="steam")openModal(s2.appid);
      else window.open(epicLink(s2.slug),"_blank");
    });})(c);
  }
  heroTimer=setInterval(function(){heroMove(1);},5000);
}
function getEpicImg(g){
  var img="";
  if(g.keyImages){for(var i=0;i<g.keyImages.length;i++){var ki=g.keyImages[i];if(ki.type==="OfferImageWide"||ki.type==="DieselStoreFrontWide"){return ki.url;}if(ki.type==="Thumbnail"||ki.type==="OfferImageTall")img=ki.url;}}
  return img;
}
function getEpicSlug(g){
  if(g.catalogNs&&g.catalogNs.mappings&&g.catalogNs.mappings.length>0)return g.catalogNs.mappings[0].pageSlug;
  if(g.productSlug)return g.productSlug;
  if(g.urlSlug)return g.urlSlug;
  return"";
}
function heroMove(dir){
  if(heroSlides.length===0)return;
  heroIdx=(heroIdx+dir+heroSlides.length)%heroSlides.length;
  heroGo(heroIdx);
}
function heroGo(idx){
  heroIdx=idx;
  var slides=document.querySelectorAll(".hero-slide");
  var dots=document.querySelectorAll(".hero-dot");
  for(var i=0;i<slides.length;i++){slides[i].classList.remove("active");if(dots[i])dots[i].classList.remove("active");}
  if(slides[idx])slides[idx].classList.add("active");
  if(dots[idx])dots[idx].classList.add("active");
  if(heroTimer)clearInterval(heroTimer);
  heroTimer=setInterval(function(){heroMove(1);},5000);
}

/* ===== STEAM TOP 20 ===== */
function renderSteamTop20(){
  var el=$("steamTop20");if(!el||top20Data.length===0){if(el)el.innerHTML='<div class="loader">데이터 없음</div>';return;}
  var h="";
  for(var i=0;i<top20Data.length&&i<20;i++){
    var g=top20Data[i];
    var cls=i>=10?" hidden-card":"";
    var rc=i===0?" r1":i===1?" r2":i===2?" r3":"";
    var pr=buildSteamPrice(g);
    h+='<div class="top-card'+cls+'" onclick="openModal('+g.appid+')">';
    h+='<span class="rank'+rc+'">'+(i+1)+'</span>';
    h+='<img src="'+escHtml(g.header_img)+'" alt="'+escHtml(g.name_kr||g.name)+'" loading="lazy"/>';
    h+='<div class="top-info"><div class="top-name">'+escHtml(g.name_kr||g.name)+'</div>';
    h+='<div class="top-meta"><i class="fas fa-users" style="font-size:10px;"></i> '+fmtNum(g.ccu)+'</div>';
    h+='<div class="top-price">'+pr+'</div></div></div>';
  }
  el.innerHTML=h;
  if(top20Data.length>10)$("steamTopMore").style.display="flex";
}
function buildSteamPrice(g){
  if(g.is_free)return"<span class='price free'>무료</span>";
  if(g.discount&&Number(g.discount)>0){
    var orig=g.price_kr_formatted||fmtWon(g.price);
    var dv=g.price_kr?Math.round(g.price_kr*(100-Number(g.discount))/100):Math.round(Number(g.price)*(100-Number(g.discount))/10000*100);
    return"<span class='discount-badge'>-"+g.discount+"%</span> <span class='price original'>"+orig+"</span> <span class='price final'>"+fmtWon(dv)+"</span>";
  }
  return"<span class='price final'>"+(g.price_kr_formatted||fmtWon(g.price))+"</span>";
}
function toggleSteamTop(){
  steamTopExpanded=!steamTopExpanded;
  var cards=document.querySelectorAll("#steamTop20 .hidden-card");
  for(var i=0;i<cards.length;i++){if(steamTopExpanded)cards[i].classList.add("show-card");else cards[i].classList.remove("show-card");}
  $("steamTopMore").innerHTML=steamTopExpanded?"접기 ▲":"더보기 ▼";
  if(!steamTopExpanded){var sec=$("steamTop20");if(sec)sec.scrollIntoView({behavior:"smooth",block:"start"});}
}

/* ===== STEAM DEALS ===== */
function renderDeals(){
  var el=$("dealGrid");if(!el)return;
  var deals=[];
  for(var i=0;i<top100Data.length;i++){if(Number(top100Data[i].discount)>0)deals.push(top100Data[i]);}
  if(deals.length===0){var st=$("deal-sec-title");if(st)st.style.display="none";el.innerHTML="";return;}
  var h="";
  for(var i2=0;i2<deals.length;i2++){
    var d=deals[i2];
    var cls=i2>=6?" hidden-deal":"";
    var orig=fmtWon(d.price);
    var dp=Number(d.discount);
    var finalP=Math.round(Number(d.price)*(100-dp)/10000*100);
    h+='<div class="deal-card'+cls+'" onclick="openModal('+d.appid+')">';
    h+='<img src="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/'+d.appid+'/header.jpg" alt="'+escHtml(d.name)+'" loading="lazy"/>';
    h+='<div class="deal-info"><div class="deal-name">'+escHtml(d.name)+'</div>';
    h+='<div class="deal-price"><span class="discount-badge">-'+dp+'%</span><span class="price original">'+orig+'</span><span class="price final">'+fmtWon(finalP)+'</span></div></div></div>';
  }
  el.innerHTML=h;
  if(deals.length>6)$("dealMoreBtn").style.display="flex";
}
function toggleDeals(){
  dealExpanded=!dealExpanded;
  var cards=document.querySelectorAll("#dealGrid .hidden-deal");
  for(var i=0;i<cards.length;i++){if(dealExpanded)cards[i].classList.add("show-card");else cards[i].classList.remove("show-card");}
  $("dealMoreBtn").innerHTML=dealExpanded?"접기 ▲":"더보기 ▼";
  if(!dealExpanded){var sec=$("dealGrid");if(sec)sec.scrollIntoView({behavior:"smooth",block:"start"});}
}

/* ===== EPIC DATA PARSE ===== */
function parseEpicData(data){
  epicAllGames=[];epicFreeNow=[];epicFreeUpcoming=[];epicDeals=[];
  if(!data||!data.data||!data.data.Catalog||!data.data.Catalog.searchStore)return;
  var items=data.data.Catalog.searchStore.elements||[];
  var now=new Date();
  for(var i=0;i<items.length;i++){
    var g=items[i];
    epicAllGames.push(g);
    if(!g.promotions)continue;
    var po=g.promotions.promotionalOffers||[];
    var upo=g.promotions.upcomingPromotionalOffers||[];
    for(var j=0;j<po.length;j++){
      var offers=po[j].promotionalOffers||[];
      for(var k=0;k<offers.length;k++){
        var o=offers[k];
        if(o.discountSetting&&o.discountSetting.discountPercentage===0){
          var sd=new Date(o.startDate),ed=new Date(o.endDate);
          if(now>=sd&&now<=ed){g._freeStart=o.startDate;g._freeEnd=o.endDate;epicFreeNow.push(g);}
        }else if(o.discountSetting&&o.discountSetting.discountPercentage>0){
          epicDeals.push(g);
        }
      }
    }
    for(var j2=0;j2<upo.length;j2++){
      var offers2=upo[j2].promotionalOffers||[];
      for(var k2=0;k2<offers2.length;k2++){
        var o2=offers2[k2];
        if(o2.discountSetting&&o2.discountSetting.discountPercentage===0){
          g._freeStart=o2.startDate;g._freeEnd=o2.endDate;epicFreeUpcoming.push(g);
        }
      }
    }
  }
}

/* ===== EPIC FREE GAMES ===== */
function renderEpicFree(){
  var el=$("epicFreeGrid");if(!el)return;
  if(epicFreeNow.length===0&&epicFreeUpcoming.length===0){var st=$("epicFreeSection");if(st)st.style.display="none";el.innerHTML="";return;}
  var h="";
  if(epicFreeNow.length>0){
    h+='<div class="epic-free-label">현재 무료</div><div class="epic-free-list">';
    for(var i=0;i<epicFreeNow.length;i++){h+=buildEpicFreeCard(epicFreeNow[i],"free");}
    h+='</div>';
  }
  if(epicFreeUpcoming.length>0){
    h+='<div class="epic-free-label">다음 무료 예정</div><div class="epic-free-list">';
    for(var j=0;j<epicFreeUpcoming.length;j++){h+=buildEpicFreeCard(epicFreeUpcoming[j],"upcoming");}
    h+='</div>';
  }
  el.innerHTML=h;
}
function buildEpicFreeCard(g,type){
  var img=getEpicImg(g);
  var slug=getEpicSlug(g);
  var orig="";if(g.price&&g.price.totalPrice){var op=g.price.totalPrice.originalPrice;if(op>0)orig="₩"+fmtNum(Math.round(op/100));}
  var badgeCls=type==="free"?"free":"upcoming";
  var badgeText=type==="free"?"무료":"예정";
  var period="";if(g._freeEnd){var ed=new Date(g._freeEnd);period="~"+(ed.getMonth()+1)+"/"+ed.getDate();}
  var c='<a class="epic-free-card" href="'+epicLink(slug)+'" target="_blank" rel="noopener">';
  c+='<img src="'+escHtml(img)+'" alt="'+escHtml(g.title)+'" loading="lazy"/>';
  c+='<div class="epic-free-info"><div class="epic-free-title">'+escHtml(g.title)+'</div>';
  c+='<div class="epic-free-price">';
  if(orig)c+='<span class="price original">'+orig+'</span>';
  c+='<span class="epic-badge '+badgeCls+'">'+badgeText+'</span></div>';
  if(period)c+='<div class="epic-free-period">'+period+'</div>';
  c+='</div></a>';
  return c;
}

/* ===== EPIC TOP 20 ===== */
function renderEpicTop20(){
  var el=$("epicTop20");if(!el)return;
  if(epicAllGames.length===0){el.innerHTML='<div class="loader">에픽 데이터 없음</div>';return;}
  var h="";
  var count=epicAllGames.length>20?20:epicAllGames.length;
  for(var i=0;i<count;i++){
    var g=epicAllGames[i];
    var cls=i>=10?" hidden-card":"";
    var rc=i===0?" r1":i===1?" r2":i===2?" r3":"";
    var img=getEpicImg(g);
    var slug=getEpicSlug(g);
    var pr=buildEpicPrice(g);
    h+='<div class="top-card'+cls+'" onclick="window.open(\''+epicLink(slug)+'\',\'_blank\')">';
    h+='<span class="rank'+rc+'">'+(i+1)+'</span>';
    h+='<img src="'+escHtml(img)+'" alt="'+escHtml(g.title)+'" loading="lazy"/>';
    h+='<div class="top-info"><div class="top-name">'+escHtml(g.title)+'</div>';
    h+='<div class="top-price">'+pr+'</div></div></div>';
  }
  el.innerHTML=h;
  if(count>10)$("epicTopMore").style.display="flex";
}
function buildEpicPrice(g){
  if(!g.price||!g.price.totalPrice)return"";
  var tp=g.price.totalPrice;
  if(tp.discountPrice===0)return"<span class='price free'>무료</span>";
  if(tp.discountPrice!==tp.originalPrice){
    var dp=Math.round((1-tp.discountPrice/tp.originalPrice)*100);
    return"<span class='discount-badge'>-"+dp+"%</span> <span class='price original'>₩"+fmtNum(Math.round(tp.originalPrice/100))+"</span> <span class='price final'>₩"+fmtNum(Math.round(tp.discountPrice/100))+"</span>";
  }
  return"<span class='price final'>₩"+fmtNum(Math.round(tp.originalPrice/100))+"</span>";
}
function toggleEpicTop(){
  epicTopExpanded=!epicTopExpanded;
  var cards=document.querySelectorAll("#epicTop20 .hidden-card");
  for(var i=0;i<cards.length;i++){if(epicTopExpanded)cards[i].classList.add("show-card");else cards[i].classList.remove("show-card");}
  $("epicTopMore").innerHTML=epicTopExpanded?"접기 ▲":"더보기 ▼";
  if(!epicTopExpanded){var sec=$("epicTop20");if(sec)sec.scrollIntoView({behavior:"smooth",block:"start"});}
}

/* ===== EPIC DEALS ===== */
function renderEpicDeals(){
  var el=$("epicDealGrid");if(!el)return;
  if(epicDeals.length===0){var st=$("epicDealSection");if(st)st.style.display="none";el.innerHTML="";return;}
  var h="";
  for(var i=0;i<epicDeals.length;i++){
    var g=epicDeals[i];
    var cls=i>=6?" hidden-deal":"";
    var img=getEpicImg(g);
    var slug=getEpicSlug(g);
    var pr="";
    if(g.price&&g.price.totalPrice){
      var tp=g.price.totalPrice;
      if(tp.discountPrice!==tp.originalPrice){
        var dp=Math.round((1-tp.discountPrice/tp.originalPrice)*100);
        pr="<span class='discount-badge'>-"+dp+"%</span> <span class='price original'>₩"+fmtNum(Math.round(tp.originalPrice/100))+"</span> <span class='price final'>₩"+fmtNum(Math.round(tp.discountPrice/100))+"</span>";
      }
    }
    h+='<a class="deal-card'+cls+'" href="'+epicLink(slug)+'" target="_blank" rel="noopener" style="text-decoration:none;">';
    h+='<img src="'+escHtml(img)+'" alt="'+escHtml(g.title)+'" loading="lazy"/>';
    h+='<div class="deal-info"><div class="deal-name">'+escHtml(g.title)+'</div>';
    h+='<div class="deal-price">'+pr+'</div></div></a>';
  }
  el.innerHTML=h;
  if(epicDeals.length>6)$("epicDealMoreBtn").style.display="flex";
}
function toggleEpicDeals(){
  epicDealExpanded=!epicDealExpanded;
  var cards=document.querySelectorAll("#epicDealGrid .hidden-deal");
  for(var i=0;i<cards.length;i++){if(epicDealExpanded)cards[i].classList.add("show-card");else cards[i].classList.remove("show-card");}
  $("epicDealMoreBtn").innerHTML=epicDealExpanded?"접기 ▲":"더보기 ▼";
  if(!epicDealExpanded){var sec=$("epicDealGrid");if(sec)sec.scrollIntoView({behavior:"smooth",block:"start"});}
}
/* ===== NAV DROPDOWNS ===== */
function initNav(){
  var cp=$("catPanel");
  if(cp){
    cp.innerHTML='<div class="platform-tabs"><button class="ptab active" data-plat="steam" onclick="event.stopPropagation();switchCatPlat(\'steam\')"><i class="fab fa-steam"></i> 스팀</button><button class="ptab" data-plat="epic" onclick="event.stopPropagation();switchCatPlat(\'epic\')"><i class="fas fa-gamepad"></i> 에픽</button></div><div class="pgrid" id="catGrid"></div>';
    switchCatPlat("steam");
  }
  var pp=$("playPanel");
  if(pp){
    pp.innerHTML='<div class="platform-tabs"><button class="ptab active" data-plat="steam" onclick="event.stopPropagation();switchPlayPlat(\'steam\')"><i class="fab fa-steam"></i> 스팀</button><button class="ptab" data-plat="epic" onclick="event.stopPropagation();switchPlayPlat(\'epic\')"><i class="fas fa-gamepad"></i> 에픽</button></div><div class="pgrid" id="playGrid"></div>';
    switchPlayPlat("steam");
  }
  var navItems=document.querySelectorAll(".nav-item");
  for(var i=0;i<navItems.length;i++){
    (function(item){
      item.addEventListener("click",function(e){
        e.stopPropagation();
        var panel=item.querySelector(".drop-panel");
        if(!panel)return;
        var wasOpen=panel.classList.contains("open");
        closeAllDrops();
        if(!wasOpen)panel.classList.add("open");
      });
    })(navItems[i]);
  }
  var panels=document.querySelectorAll(".drop-panel");
  for(var j=0;j<panels.length;j++){panels[j].addEventListener("click",function(e){e.stopPropagation();});}
  document.addEventListener("click",function(){closeAllDrops();});
}
function closeAllDrops(){var p=document.querySelectorAll(".drop-panel");for(var i=0;i<p.length;i++)p[i].classList.remove("open");}
function switchCatPlat(plat){
  var grid=$("catGrid");if(!grid)return;
  var tabs=document.querySelectorAll("#catPanel .ptab");
  for(var i=0;i<tabs.length;i++){tabs[i].classList.remove("active");if(tabs[i].getAttribute("data-plat")===plat)tabs[i].classList.add("active");}
  var arr=plat==="steam"?STEAM_CATS:EPIC_CATS;
  var h="";for(var j=0;j<arr.length;j++){h+='<a class="pgrid-item" href="'+arr[j].url+'" target="_blank" rel="noopener"><i class="fas '+arr[j].icon+'"></i><span>'+arr[j].name+'</span></a>';}
  grid.innerHTML=h;
}
function switchPlayPlat(plat){
  var grid=$("playGrid");if(!grid)return;
  var tabs=document.querySelectorAll("#playPanel .ptab");
  for(var i=0;i<tabs.length;i++){tabs[i].classList.remove("active");if(tabs[i].getAttribute("data-plat")===plat)tabs[i].classList.add("active");}
  var arr=plat==="steam"?STEAM_PLAY:EPIC_PLAY;
  var h="";for(var j=0;j<arr.length;j++){h+='<a class="pgrid-item" href="'+arr[j].url+'" target="_blank" rel="noopener"><i class="fas '+arr[j].icon+'"></i><span>'+arr[j].name+'</span></a>';}
  grid.innerHTML=h;
}

/* ===== MOBILE MENU ===== */
function initMobile(){
  var hb=$("hamburger"),mm=$("mobileMenu");
  if(hb&&mm){hb.addEventListener("click",function(){mm.classList.toggle("open");});}
  var mmCat=$("mmCatItem"),mmPlay=$("mmPlayItem");
  if(mmCat){mmCat.addEventListener("click",function(){var s=this.querySelector(".mm-sub");if(s)s.classList.toggle("open");});}
  if(mmPlay){mmPlay.addEventListener("click",function(){var s=this.querySelector(".mm-sub");if(s)s.classList.toggle("open");});}
  var mc=$("mmCatPanel");
  if(mc){
    var h="<b style='color:#66c0f4;font-size:12px;'>스팀</b><br/>";
    for(var i=0;i<STEAM_CATS.length;i++){h+='<a class="drop-link" href="'+STEAM_CATS[i].url+'" target="_blank" rel="noopener"><i class="fas '+STEAM_CATS[i].icon+'"></i>'+STEAM_CATS[i].name+'</a>';}
    h+="<br/><b style='color:#a4d007;font-size:12px;'>에픽</b><br/>";
    for(var j=0;j<EPIC_CATS.length;j++){h+='<a class="drop-link" href="'+EPIC_CATS[j].url+'" target="_blank" rel="noopener"><i class="fas '+EPIC_CATS[j].icon+'"></i>'+EPIC_CATS[j].name+'</a>';}
    mc.innerHTML=h;
  }
  var mp=$("mmPlayPanel");
  if(mp){
    var h2="<b style='color:#66c0f4;font-size:12px;'>스팀</b><br/>";
    for(var i2=0;i2<STEAM_PLAY.length;i2++){h2+='<a class="drop-link" href="'+STEAM_PLAY[i2].url+'" target="_blank" rel="noopener"><i class="fas '+STEAM_PLAY[i2].icon+'"></i>'+STEAM_PLAY[i2].name+'</a>';}
    h2+="<br/><b style='color:#a4d007;font-size:12px;'>에픽</b><br/>";
    for(var j2=0;j2<EPIC_PLAY.length;j2++){h2+='<a class="drop-link" href="'+EPIC_PLAY[j2].url+'" target="_blank" rel="noopener"><i class="fas '+EPIC_PLAY[j2].icon+'"></i>'+EPIC_PLAY[j2].name+'</a>';}
    mp.innerHTML=h2;
  }
}

/* ===== SIDEBAR ===== */
function renderSidebar(){
  var el=$("sideContent");if(!el)return;
  var h='<div class="side-topic guide-topic"><div class="side-topic-title"><i class="fas fa-book-open" style="color:#66c0f4;"></i> 겜존 가이드</div>';
  h+='<div class="side-topic-body open">';
  for(var i=0;i<GUIDE_LABELS.length;i++){
    var gl=GUIDE_LABELS[i];
    h+='<div class="guide-sub"><div class="guide-sub-title"><i class="fas '+gl.icon+'"></i> '+escHtml(gl.label)+'</div>';
    h+='<div class="guide-posts" id="guide_'+i+'"><div class="loader-sm">로딩중...</div></div></div>';
  }
  h+='</div></div>';
  for(var j=0;j<GAME_SIDES.length;j++){
    var gs=GAME_SIDES[j];
    h+='<div class="side-topic"><div class="side-topic-title" onclick="toggleSideTopic(this)"><i class="fas '+gs.icon+'" style="color:#66c0f4;"></i> '+escHtml(gs.label)+'<span class="side-arrow"><i class="fas fa-chevron-down"></i></span></div>';
    h+='<div class="side-topic-body" id="side_'+gs.label+'"><div class="game-posts"><div class="loader-sm">로딩중...</div></div></div></div>';
  }
  el.innerHTML=h;
  for(var k=0;k<GUIDE_LABELS.length;k++){loadGuidePosts(k,GUIDE_LABELS[k].label);}
  for(var m=0;m<GAME_SIDES.length;m++){loadGamePosts(GAME_SIDES[m]);}
}
function toggleSideTopic(titleEl){
  var body=titleEl.nextElementSibling;
  var arrow=titleEl.querySelector(".side-arrow i");
  if(body){body.classList.toggle("open");if(arrow){arrow.className=body.classList.contains("open")?"fas fa-chevron-up":"fas fa-chevron-down";}}
}
function loadGuidePosts(idx,label){
  var url=BLOG_URL+"/feeds/posts/default/-/"+encodeURIComponent(label)+"?alt=json&max-results=3&orderby=published";
  fetch(url).then(function(r){return r.json();}).then(function(data){
    var el=$("guide_"+idx);if(!el)return;
    if(!data.feed||!data.feed.entry||data.feed.entry.length===0){el.innerHTML='<div class="side-empty">글이 없습니다</div>';return;}
    var h="",en=data.feed.entry;
    for(var i=0;i<en.length&&i<3;i++){
      var e=en[i],t=e.title.$t||"",lk="#";
      for(var j=0;j<e.link.length;j++){if(e.link[j].rel==="alternate"){lk=e.link[j].href;break;}}
      h+='<a href="'+lk+'" class="side-post-link" target="_blank" rel="noopener">'+escHtml(t)+'</a>';
    }
    el.innerHTML=h;
  }).catch(function(){var el=$("guide_"+idx);if(el)el.innerHTML='<div class="side-empty">로드 실패</div>';});
}
function loadGamePosts(gs){
  var url=BLOG_URL+"/feeds/posts/default/-/"+encodeURIComponent(gs.label)+"?alt=json&max-results=5&orderby=updated";
  fetch(url).then(function(r){return r.json();}).then(function(data){
    var el=$("side_"+gs.label);if(!el)return;
    if(!data.feed||!data.feed.entry||data.feed.entry.length===0){el.innerHTML='<div class="side-empty">글이 없습니다</div>';return;}
    var h="",en=data.feed.entry;
    for(var i=0;i<en.length&&i<5;i++){
      var e=en[i],t=e.title.$t||"",lk="#";
      for(var j=0;j<e.link.length;j++){if(e.link[j].rel==="alternate"){lk=e.link[j].href;break;}}
      h+='<a href="'+lk+'" class="side-post-link" target="_blank" rel="noopener">'+escHtml(t)+'</a>';
    }
    el.innerHTML=h;
  }).catch(function(){var el=$("side_"+gs.label);if(el)el.innerHTML='<div class="side-empty">로드 실패</div>';});
}

/* ===== GAME MODAL ===== */
function openModal(appid){
  var g=null;
  for(var i=0;i<top20Data.length;i++){if(top20Data[i].appid===appid){g=top20Data[i];break;}}
  if(!g){window.open("https://store.steampowered.com/app/"+appid+"/?l=koreana","_blank");return;}
  var m=$("gameModal"),mb=$("modalBody");
  var h='<div class="modal-hero" style="background-image:url(\''+escHtml(g.header_img)+'\')"></div>';
  h+='<div class="modal-content">';
  h+='<span style="position:absolute;top:16px;right:20px;font-size:28px;color:#8f98a0;cursor:pointer;z-index:10;" onclick="closeModal()">&times;</span>';
  h+='<div class="modal-title">'+escHtml(g.name_kr||g.name)+'</div>';
  if(g.desc_kr)h+='<div class="modal-desc">'+escHtml(g.desc_kr)+'</div>';
  h+='<div class="modal-meta-grid">';
  if(g.genres&&g.genres.length>0)h+='<div class="modal-meta-item"><span class="meta-label">장르</span><span>'+escHtml(g.genres.join(", "))+'</span></div>';
  if(g.release_date)h+='<div class="modal-meta-item"><span class="meta-label">출시일</span><span>'+escHtml(g.release_date)+'</span></div>';
  if(g.metacritic>0)h+='<div class="modal-meta-item"><span class="meta-label">메타크리틱</span><span style="color:#66c0f4;font-weight:700;">'+g.metacritic+'</span></div>';
  h+='<div class="modal-meta-item"><span class="meta-label">동시접속</span><span style="color:#66c0f4;font-weight:700;">'+fmtNum(g.ccu)+'명</span></div>';
  if(g.positive)h+='<div class="modal-meta-item"><span class="meta-label">긍정적</span><span style="color:#a4d007;">'+fmtNum(g.positive)+'</span></div>';
  if(g.negative)h+='<div class="modal-meta-item"><span class="meta-label">부정적</span><span style="color:#e74c3c;">'+fmtNum(g.negative)+'</span></div>';
  h+='</div>';
  h+='<div class="modal-price-box">';
  if(g.is_free){h+='<span class="modal-price free">무료 플레이</span>';}
  else{
    if(g.discount&&Number(g.discount)>0){
      h+='<span class="discount-badge" style="font-size:16px;">-'+g.discount+'%</span>';
      h+='<span class="price original" style="font-size:14px;">'+(g.price_kr_formatted||fmtWon(g.price))+'</span>';
      var dv2=g.price_kr?Math.round(g.price_kr*(100-Number(g.discount))/100):0;
      h+='<span class="modal-price">'+fmtWon(dv2)+'</span>';
    }else{h+='<span class="modal-price">'+(g.price_kr_formatted||fmtWon(g.price))+'</span>';}
  }
  h+='</div>';
  if(g.screenshots&&g.screenshots.length>0){
    h+='<div class="modal-screens"><div class="modal-specs-title">스크린샷</div><div class="screens-grid">';
    for(var s=0;s<g.screenshots.length&&s<6;s++){h+='<img src="'+escHtml(g.screenshots[s])+'" alt="screenshot" loading="lazy" onclick="openLightbox(this.src)"/>';}
    h+='</div></div>';
  }
  if(g.pc_requirements){
    h+='<div class="modal-specs"><div class="modal-specs-title">PC 사양</div>';
    if(g.pc_requirements.minimum)h+='<div class="spec-block">'+g.pc_requirements.minimum+'</div>';
    if(g.pc_requirements.recommended)h+='<div class="spec-block">'+g.pc_requirements.recommended+'</div>';
    h+='</div>';
  }
  h+='<a class="modal-steam-btn" href="https://store.steampowered.com/app/'+g.appid+'/?l=koreana" target="_blank" rel="noopener"><i class="fab fa-steam"></i> Steam에서 보기</a>';
  h+='</div>';
  mb.innerHTML=h;m.style.display="flex";document.body.style.overflow="hidden";
}
function closeModal(){$("gameModal").style.display="none";document.body.style.overflow="";}

/* ===== ADMIN MODE ===== */
function initAdmin(){
  var logo=document.querySelector(".logo");if(!logo)return;
  logo.addEventListener("click",function(){
    logoClicks++;
    if(logoTimer)clearTimeout(logoTimer);
    logoTimer=setTimeout(function(){logoClicks=0;},2000);
    if(logoClicks>=5){
      logoClicks=0;
      if(isAdmin){isAdmin=false;toast("관리자 모드 해제");hideAdminUI();return;}
      $("pwModal").style.display="flex";
      setTimeout(function(){$("pwInput").focus();},100);
    }
  });
  $("pwInput").addEventListener("keydown",function(e){if(e.key==="Enter")checkPw();});
}
function checkPw(){
  var v=$("pwInput").value;
  if(v===ADMIN_PW){isAdmin=true;$("pwModal").style.display="none";$("pwInput").value="";toast("관리자 모드 활성화");showAdminUI();}
  else{toast("비밀번호 틀림");$("pwInput").value="";}
}
function showAdminUI(){var btns=document.querySelectorAll(".admin-btn");for(var i=0;i<btns.length;i++)btns[i].style.display="inline-flex";renderGear();}
function hideAdminUI(){var btns=document.querySelectorAll(".admin-btn");for(var i=0;i<btns.length;i++)btns[i].style.display="none";renderGear();}

/* ===== GEAR SECTION ===== */
function getGearCats(){var stored=localStorage.getItem("gz_gear_cats");if(stored){try{return JSON.parse(stored);}catch(e){}}return DEFAULT_GEAR.slice();}
function saveGearCats(cats){localStorage.setItem("gz_gear_cats",JSON.stringify(cats));}
function getGearItems(catName){var stored=localStorage.getItem("gz_gear_items_"+catName);if(stored){try{return JSON.parse(stored);}catch(e){}}return[];}
function saveGearItems(catName,items){localStorage.setItem("gz_gear_items_"+catName,JSON.stringify(items));}

var activeGearCat="";
function renderGear(){
  var cats=getGearCats();
  var catEl=$("gearCats"),gridEl=$("gearGrid"),secEl=$("gearSection");
  if(!catEl||!gridEl||!secEl)return;
  if(cats.length===0&&!isAdmin){secEl.style.display="none";catEl.innerHTML="";gridEl.innerHTML="";return;}
  secEl.style.display="";
  var h="";
  for(var i=0;i<cats.length;i++){
    var ac=activeGearCat===cats[i].name?" active":"";
    h+='<button class="gear-cat-btn'+ac+'" onclick="selectGearCat(\''+escHtml(cats[i].name)+'\')">';
    h+='<i class="fas '+cats[i].icon+'"></i> '+escHtml(cats[i].name)+'</button>';
  }
  if(isAdmin){
    h+='<button class="admin-btn" style="display:inline-flex;" onclick="addGearCat()"><i class="fas fa-plus"></i> 카테고리 추가</button>';
    h+='<button class="admin-btn" style="display:inline-flex;" onclick="openFontPanel()"><i class="fas fa-font"></i> 서체</button>';
  }
  catEl.innerHTML=h;
  if(!activeGearCat&&cats.length>0)activeGearCat=cats[0].name;
  renderGearItems();
}
function selectGearCat(name){activeGearCat=name;renderGear();}
function renderGearItems(){
  var gridEl=$("gearGrid");if(!gridEl)return;
  if(!activeGearCat){gridEl.innerHTML="";return;}
  var items=getGearItems(activeGearCat);
  if(items.length===0&&!isAdmin){gridEl.innerHTML='<div class="loader" style="grid-column:1/-1;">등록된 제품이 없습니다</div>';return;}
  var h="";
  for(var i=0;i<items.length;i++){
    var it=items[i];
    h+='<div class="gear-card">';
    if(it.img)h+='<img src="'+escHtml(it.img)+'" alt="'+escHtml(it.name)+'" loading="lazy"/>';
    h+='<div class="gear-info"><div class="gear-name">'+escHtml(it.name)+'</div>';
    if(it.price)h+='<div class="gear-price">'+escHtml(it.price)+'</div>';
    if(it.link)h+='<a class="gear-link" href="'+escHtml(it.link)+'" target="_blank" rel="noopener">구매하기</a>';
    h+='</div>';
    if(isAdmin){
      h+='<div class="gear-admin"><button class="admin-btn" style="display:inline-flex;padding:2px 6px;font-size:10px;" onclick="editGearItem(\''+escHtml(activeGearCat)+'\','+i+')"><i class="fas fa-pen"></i></button>';
      h+='<button class="admin-btn" style="display:inline-flex;padding:2px 6px;font-size:10px;background:#e74c3c;color:#fff;" onclick="deleteGearItem(\''+escHtml(activeGearCat)+'\','+i+')"><i class="fas fa-trash"></i></button></div>';
    }
    h+='</div>';
  }
  if(isAdmin){
    h+='<div class="gear-card" style="display:flex;align-items:center;justify-content:center;min-height:120px;cursor:pointer;border-style:dashed;" onclick="addGearItem(\''+escHtml(activeGearCat)+'\')">';
    h+='<div style="text-align:center;color:#66c0f4;"><i class="fas fa-plus" style="font-size:24px;"></i><div style="font-size:11px;margin-top:4px;">제품 추가</div></div></div>';
  }
  gridEl.innerHTML=h;
}
function addGearCat(){
  var name=prompt("카테고리 이름:");if(!name)return;
  var icon=prompt("아이콘 (FontAwesome, 예: fa-desktop):","fa-tag");if(!icon)icon="fa-tag";
  var cats=getGearCats();cats.push({name:name,icon:icon});saveGearCats(cats);activeGearCat=name;renderGear();toast("카테고리 추가: "+name);
}
function addGearItem(catName){
  var name=prompt("제품명:");if(!name)return;
  var price=prompt("가격 (예: ₩59,000):","");
  var img=prompt("이미지 URL:","");
  var link=prompt("구매 링크:","");
  var items=getGearItems(catName);items.push({name:name,price:price,img:img,link:link});saveGearItems(catName,items);renderGearItems();toast("제품 추가: "+name);
}
function editGearItem(catName,idx){
  var items=getGearItems(catName);if(idx>=items.length)return;var it=items[idx];
  var name=prompt("제품명:",it.name);if(!name)return;
  var price=prompt("가격:",it.price||"");var img=prompt("이미지 URL:",it.img||"");var link=prompt("구매 링크:",it.link||"");
  items[idx]={name:name,price:price,img:img,link:link};saveGearItems(catName,items);renderGearItems();toast("수정됨");
}
function deleteGearItem(catName,idx){
  if(!confirm("삭제하시겠습니까?"))return;
  var items=getGearItems(catName);items.splice(idx,1);saveGearItems(catName,items);renderGearItems();toast("삭제됨");
}

/* ===== SEARCH ===== */
function initSearch(){
  var input=$("searchInput"),res=$("searchResults");if(!input||!res)return;
  input.addEventListener("input",function(){
    var q=this.value.trim().toLowerCase();
    if(q.length<2){res.style.display="none";return;}
    var matches=[];
    for(var i=0;i<top20Data.length;i++){var g=top20Data[i];if((g.name&&g.name.toLowerCase().indexOf(q)>-1)||(g.name_kr&&g.name_kr.toLowerCase().indexOf(q)>-1))matches.push(g);}
    for(var j=0;j<top100Data.length&&matches.length<20;j++){
      var g2=top100Data[j];var dup=false;
      for(var d=0;d<matches.length;d++){if(matches[d].appid===g2.appid){dup=true;break;}}
      if(!dup&&g2.name&&g2.name.toLowerCase().indexOf(q)>-1)matches.push(g2);
    }
    if(matches.length===0){res.style.display="none";return;}
    var h="";
    for(var k=0;k<matches.length&&k<10;k++){
      var m=matches[k];
      var img2=m.header_img||"https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/"+m.appid+"/header.jpg";
      h+='<div class="search-item" onclick="openModal('+m.appid+');document.getElementById(\'searchResults\').style.display=\'none\';">';
      h+='<img src="'+escHtml(img2)+'" alt=""/><span>'+escHtml(m.name_kr||m.name)+'</span></div>';
    }
    res.innerHTML=h;res.style.display="block";
  });
  document.addEventListener("click",function(e){if(!res.contains(e.target)&&e.target!==input)res.style.display="none";});
}

/* ===== LIGHTBOX ===== */
function openLightbox(src){var lb=$("lightbox"),img=$("lightboxImg");if(lb&&img){img.src=src;lb.style.display="flex";}}
function initLightbox(){var lb=$("lightbox");if(lb){lb.addEventListener("click",function(){this.style.display="none";$("lightboxImg").src="";});}}

/* ===== BACK TO TOP ===== */
function initBtt(){
  var btn=$("backToTop");if(!btn)return;
  window.addEventListener("scroll",function(){if(window.scrollY>400)btn.classList.add("show");else btn.classList.remove("show");});
  btn.addEventListener("click",function(){window.scrollTo({top:0,behavior:"smooth"});});
}

/* ===== MODAL CLOSE ===== */
function initModalClose(){
  var gm=$("gameModal");if(gm)gm.addEventListener("click",function(e){if(e.target===this)closeModal();});
  var pm=$("pwModal");if(pm)pm.addEventListener("click",function(e){if(e.target===this){this.style.display="none";}});
  document.addEventListener("keydown",function(e){
    if(e.key==="Escape"){closeModal();var pm2=$("pwModal");if(pm2)pm2.style.display="none";var lb=$("lightbox");if(lb)lb.style.display="none";}
  });
}

/* ===== INIT ===== */
document.addEventListener("DOMContentLoaded",function(){
  initFont();
  initNav();
  initMobile();
  initSearch();
  initLightbox();
  initBtt();
  initAdmin();
  initModalClose();
  renderSidebar();
  renderGear();

  fetch(DATA_BASE+"top20.json").then(function(r){return r.json();}).then(function(data){
    top20Data=data;
    renderSteamTop20();
  }).catch(function(e){console.error("top20 error:",e);});

  fetch(DATA_BASE+"top100.json").then(function(r){return r.json();}).then(function(data){
    top100Data=data;
    renderDeals();
  }).catch(function(e){console.error("top100 error:",e);});

  fetch(DATA_BASE+"meta.json").then(function(r){return r.json();}).then(function(data){
    metaData=data;
    var ut=$("updateTime");if(ut&&data.updated_at)ut.textContent="업데이트: "+data.updated_at;
  }).catch(function(e){console.error("meta error:",e);});

  fetch(EPIC_API).then(function(r){return r.json();}).then(function(data){
    parseEpicData(data);
    renderEpicFree();
    renderEpicTop20();
    renderEpicDeals();
    renderHero();
  }).catch(function(e){
    console.error("Epic error:",e);
    renderHero();
  });
});
