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
