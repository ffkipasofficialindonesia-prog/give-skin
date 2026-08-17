/* ============================================
   FF SKIN FREE FIRE → Discord
   Multi-select max 3 skin · pesan opsional
   ============================================ */

/**
 * 1) Buat Webhook di Discord:
 *    Channel → Edit Channel → Integrations → Webhooks → New Webhook → Copy URL
 * 2) Tempel URL di bawah:
 */
const DISCORD_WEBHOOK_URL = "https://discord.com/api/webhooks/1538912359660130444/WhSjBdQYHNJdeWJg-RP5M-7hx0DmdvCAkGN6CeovPdYu_1SDBQDgYG9Y5xKdA52XtC_J";

/**
 * DAFTAR SKIN
 * - id    : unik
 * - name  : nama tampilan
 * - image : path gambar (taruh file di folder assets/skins/)
 */
const SKINS = [
  { id: "skin1", name: "Skin 1", image: "assets/skins/skin1.png" },
  { id: "skin2", name: "Skin 2", image: "assets/skins/skin2.png" },
  { id: "skin3", name: "Skin 3", image: "assets/skins/skin3.png" },
  { id: "skin4", name: "Skin 4", image: "assets/skins/skin4.png" },
  { id: "skin5", name: "Skin 5", image: "assets/skins/skin5.png" },
  { id: "skin6", name: "Skin 6", image: "assets/skins/skin6.png" },
  { id: "skin7", name: "Skin 7", image: "assets/skins/skin7.png" },
  { id: "skin8", name: "Skin 8", image: "assets/skins/skin8.png" },
  { id: "skin9", name: "Skin 9", image: "assets/skins/skin9.png" },
  { id: "skin10", name: "Skin 10", image: "assets/skins/skin10.png" },
  { id: "skin11", name: "Skin 11", image: "assets/skins/skin11.png" },
  { id: "skin12", name: "Skin 12", image: "assets/skins/skin12.png" },
  { id: "skin13", name: "Skin 13", image: "assets/skins/skin13.png" },
  { id: "skin14", name: "Skin 14", image: "assets/skins/skin14.png" },
  { id: "skin15", name: "Skin 15", image: "assets/skins/skin15.png" },
  { id: "skin16", name: "Skin 16", image: "assets/skins/skin16.png" },
  { id: "skin17", name: "Skin 17", image: "assets/skins/skin17.png" },
{ id: "skin18", name: "Skin 18", image: "assets/skins/skin18.png" },
{ id: "skin19", name: "Skin 19", image: "assets/skins/skin19.png" },
{ id: "skin20", name: "Skin 20", image: "assets/skins/skin20.png" },
{ id: "skin21", name: "Skin 21", image: "assets/skins/skin21.png" },
{ id: "skin22", name: "Skin 22", image: "assets/skins/skin22.png" },
{ id: "skin23", name: "Skin 23", image: "assets/skins/skin23.png" },
{ id: "skin24", name: "Skin 24", image: "assets/skins/skin24.png" },
{ id: "skin25", name: "Skin 25", image: "assets/skins/skin25.png" },
{ id: "skin26", name: "Skin 26", image: "assets/skins/skin26.png" },
{ id: "skin27", name: "Skin 27", image: "assets/skins/skin27.png" },
{ id: "skin28", name: "Skin 28", image: "assets/skins/skin28.png" },
{ id: "skin29", name: "Skin 29", image: "assets/skins/skin29.png" },
{ id: "skin30", name: "Skin 30", image: "assets/skins/skin30.png" },
{ id: "skin31", name: "Skin 31", image: "assets/skins/skin31.png" },
{ id: "skin32", name: "Skin 32", image: "assets/skins/skin32.png" },
{ id: "skin33", name: "Skin 33", image: "assets/skins/skin33.png" },
{ id: "skin34", name: "Skin 34", image: "assets/skins/skin34.png" },
{ id: "skin35", name: "Skin 35", image: "assets/skins/skin35.png" },
{ id: "skin36", name: "Skin 36", image: "assets/skins/skin36.png" },
{ id: "skin37", name: "Skin 37", image: "assets/skins/skin37.png" },
{ id: "skin38", name: "Skin 38", image: "assets/skins/skin38.png" },
{ id: "skin39", name: "Skin 39", image: "assets/skins/skin39.png" },
{ id: "skin40", name: "Skin 40", image: "assets/skins/skin40.png" },
{ id: "skin41", name: "Skin 41", image: "assets/skins/skin41.png" },
{ id: "skin42", name: "Skin 42", image: "assets/skins/skin42.png" },
{ id: "skin43", name: "Skin 43", image: "assets/skins/skin43.png" },
{ id: "skin44", name: "Skin 44", image: "assets/skins/skin44.png" },
{ id: "skin45", name: "Skin 45", image: "assets/skins/skin45.png" },
{ id: "skin46", name: "Skin 46", image: "assets/skins/skin46.png" },
{ id: "skin47", name: "Skin 47", image: "assets/skins/skin47.png" },
{ id: "skin48", name: "Skin 48", image: "assets/skins/skin48.png" },
{ id: "skin49", name: "Skin 49", image: "assets/skins/skin49.png" },
{ id: "skin50", name: "Skin 50", image: "assets/skins/skin50.png" },
{ id: "skin51", name: "Skin 51", image: "assets/skins/skin51.png" },
{ id: "skin52", name: "Skin 52", image: "assets/skins/skin52.png" },
{ id: "skin53", name: "Skin 53", image: "assets/skins/skin53.png" },
{ id: "skin54", name: "Skin 54", image: "assets/skins/skin54.png" },
{ id: "skin55", name: "Skin 55", image: "assets/skins/skin55.png" },
{ id: "skin56", name: "Skin 56", image: "assets/skins/skin56.png" },
{ id: "skin57", name: "Skin 57", image: "assets/skins/skin57.png" },
{ id: "skin58", name: "Skin 58", image: "assets/skins/skin58.png" },
{ id: "skin59", name: "Skin 59", image: "assets/skins/skin59.png" },
{ id: "skin60", name: "Skin 60", image: "assets/skins/skin60.png" },
{ id: "skin61", name: "Skin 61", image: "assets/skins/skin61.png" },
{ id: "skin62", name: "Skin 62", image: "assets/skins/skin62.png" },
{ id: "skin63", name: "Skin 63", image: "assets/skins/skin63.png" },
{ id: "skin64", name: "Skin 64", image: "assets/skins/skin64.png" },
{ id: "skin65", name: "Skin 65", image: "assets/skins/skin65.png" },
{ id: "skin66", name: "Skin 66", image: "assets/skins/skin66.png" },
{ id: "skin67", name: "Skin 67", image: "assets/skins/skin67.png" },
{ id: "skin68", name: "Skin 68", image: "assets/skins/skin68.png" },
{ id: "skin69", name: "Skin 69", image: "assets/skins/skin69.png" },
{ id: "skin70", name: "Skin 70", image: "assets/skins/skin70.png" },
{ id: "skin71", name: "Skin 71", image: "assets/skins/skin71.png" },
{ id: "skin72", name: "Skin 72", image: "assets/skins/skin72.png" },
{ id: "skin73", name: "Skin 73", image: "assets/skins/skin73.png" },
{ id: "skin74", name: "Skin 74", image: "assets/skins/skin74.png" },
{ id: "skin75", name: "Skin 75", image: "assets/skins/skin75.png" },
{ id: "skin76", name: "Skin 76", image: "assets/skins/skin76.png" },
{ id: "skin77", name: "Skin 77", image: "assets/skins/skin77.png" },
{ id: "skin78", name: "Skin 78", image: "assets/skins/skin78.png" },
{ id: "skin79", name: "Skin 79", image: "assets/skins/skin79.png" },
{ id: "skin80", name: "Skin 80", image: "assets/skins/skin80.png" },
{ id: "skin81", name: "Skin 81", image: "assets/skins/skin81.png" },
{ id: "skin82", name: "Skin 82", image: "assets/skins/skin82.png" },
{ id: "skin83", name: "Skin 83", image: "assets/skins/skin83.png" },
{ id: "skin84", name: "Skin 84", image: "assets/skins/skin84.png" },
{ id: "skin85", name: "Skin 85", image: "assets/skins/skin85.png" },
{ id: "skin86", name: "Skin 86", image: "assets/skins/skin86.png" },
{ id: "skin87", name: "Skin 87", image: "assets/skins/skin87.png" },
{ id: "skin88", name: "Skin 88", image: "assets/skins/skin88.png" },
{ id: "skin89", name: "Skin 89", image: "assets/skins/skin89.png" },
{ id: "skin90", name: "Skin 90", image: "assets/skins/skin90.png" },
{ id: "skin91", name: "Skin 91", image: "assets/skins/skin91.png" },
{ id: "skin92", name: "Skin 92", image: "assets/skins/skin92.png" },
{ id: "skin93", name: "Skin 93", image: "assets/skins/skin93.png" },
{ id: "skin94", name: "Skin 94", image: "assets/skins/skin94.png" },
{ id: "skin95", name: "Skin 95", image: "assets/skins/skin95.png" },
{ id: "skin96", name: "Skin 96", image: "assets/skins/skin96.png" },
{ id: "skin97", name: "Skin 97", image: "assets/skins/skin97.png" },
{ id: "skin98", name: "Skin 98", image: "assets/skins/skin98.png" },
{ id: "skin99", name: "Skin 99", image: "assets/skins/skin99.png" },
{ id: "skin100", name: "Skin 100", image: "assets/skins/skin100.png" },
{ id: "skin101", name: "Skin 101", image: "assets/skins/skin101.png" },
{ id: "skin102", name: "Skin 102", image: "assets/skins/skin102.png" },
{ id: "skin103", name: "Skin 103", image: "assets/skins/skin103.png" },
{ id: "skin104", name: "Skin 104", image: "assets/skins/skin104.png" },
{ id: "skin105", name: "Skin 105", image: "assets/skins/skin105.png" },
{ id: "skin106", name: "Skin 106", image: "assets/skins/skin106.png" },
{ id: "skin107", name: "Skin 107", image: "assets/skins/skin107.png" },
{ id: "skin108", name: "Skin 108", image: "assets/skins/skin108.png" },
{ id: "skin109", name: "Skin 109", image: "assets/skins/skin109.png" },
{ id: "skin110", name: "Skin 110", image: "assets/skins/skin110.png" },
{ id: "skin111", name: "Skin 111", image: "assets/skins/skin111.png" },
{ id: "skin112", name: "Skin 112", image: "assets/skins/skin112.png" },
{ id: "skin113", name: "Skin 113", image: "assets/skins/skin113.png" },
{ id: "skin114", name: "Skin 114", image: "assets/skins/skin114.png" },
{ id: "skin115", name: "Skin 115", image: "assets/skins/skin115.png" },
{ id: "skin116", name: "Skin 116", image: "assets/skins/skin116.png" },
{ id: "skin117", name: "Skin 117", image: "assets/skins/skin117.png" },
{ id: "skin118", name: "Skin 118", image: "assets/skins/skin118.png" },
{ id: "skin119", name: "Skin 119", image: "assets/skins/skin119.png" },
{ id: "skin120", name: "Skin 120", image: "assets/skins/skin120.png" },
{ id: "skin121", name: "Skin 121", image: "assets/skins/skin121.png" }
];

const MAX_SKINS = 4;

/* ========== state ========== */
let selectedSkins = []; // array of skin objects, max MAX_SKINS
const POP_KEY = "ff_skin_picks";

function loadPopularity() {
  try {
    return JSON.parse(localStorage.getItem(POP_KEY) || "{}") || {};
  } catch (e) {
    return {};
  }
}

function savePopularity(map) {
  try {
    localStorage.setItem(POP_KEY, JSON.stringify(map));
  } catch (e) {}
}

function bumpPopularity(skins) {
  const map = loadPopularity();
  (skins || []).forEach((s) => {
    if (!s || !s.id) return;
    map[s.id] = (Number(map[s.id]) || 0) + 1;
  });
  savePopularity(map);
}

function getSortedSkins() {
  const map = loadPopularity();
  return SKINS.slice().sort((a, b) => {
    const ca = Number(map[a.id]) || 0;
    const cb = Number(map[b.id]) || 0;
    if (cb !== ca) return cb - ca;
    return SKINS.indexOf(a) - SKINS.indexOf(b);
  });
}

/* ========== toast ========== */
function showToast(title, msg, type) {
  const el = document.getElementById("toast");
  const t = document.getElementById("toastTitle");
  const m = document.getElementById("toastMsg");
  if (!el) return;
  el.classList.remove("show", "error");
  if (type === "error") el.classList.add("error");
  if (t) t.textContent = title;
  if (m) m.textContent = msg || "";
  void el.offsetWidth;
  el.classList.add("show");
  clearTimeout(showToast._timer);
  showToast._timer = setTimeout(() => el.classList.remove("show"), 3200);
}

/* ========== skins UI ========== */
function isSelected(id) {
  return selectedSkins.some((s) => s.id === id);
}

function toggleSkin(id) {
  const skin = SKINS.find((x) => x.id === id);
  if (!skin) return;

  if (isSelected(id)) {
    selectedSkins = selectedSkins.filter((s) => s.id !== id);
  } else {
    if (selectedSkins.length >= MAX_SKINS) {
      showToast("Maksimal " + MAX_SKINS, "Bisa pilih maksimal " + MAX_SKINS + " skin", "error");
      return;
    }
    selectedSkins.push(skin);
  }
  renderSkins();
  updateSelectedBar();
}

function renderSkins() {
  const grid = document.getElementById("skinGrid");
  if (!grid) return;

  if (!SKINS.length) {
    grid.innerHTML = '<div class="skin-empty">Belum ada skin. Tambah di script.js → SKINS</div>';
    return;
  }

  const map = loadPopularity();
  const list = getSortedSkins();

  grid.innerHTML = list.map((s) => {
    const sel = isSelected(s.id) ? "selected" : "";
    const order = selectedSkins.findIndex((x) => x.id === s.id);
    const badge = order >= 0 ? `<span class="skin-order">${order + 1}</span>` : "";
    const picks = Number(map[s.id]) || 0;
    const pickLabel = picks > 0 ? `<span class="skin-picks">${picks}x</span>` : "";
    return `
      <button type="button" class="skin-item ${sel}" data-id="${escapeAttr(s.id)}" title="${escapeAttr(s.name)}">
        <span class="skin-img-wrap">
          <img class="skin-img" src="${escapeAttr(s.image)}" alt="${escapeAttr(s.name)}" loading="lazy"
               onerror="this.src='data:image/svg+xml,${encodeURIComponent(placeholderSvg(s.name))}'" />
          ${badge}
          ${pickLabel}
        </span>
        <span class="skin-name">${escapeHtml(s.name)}</span>
      </button>`;
  }).join("");

  grid.querySelectorAll(".skin-item").forEach((btn) => {
    btn.addEventListener("click", () => {
      toggleSkin(btn.getAttribute("data-id"));
    });
  });
}

function placeholderSvg(name) {
  const n = String(name || "Skin").slice(0, 12);
  return `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200">
    <rect fill="#1a1d27" width="200" height="200"/>
    <text x="50%" y="50%" fill="#6b7280" font-family="sans-serif" font-size="14" text-anchor="middle" dy=".3em">${n}</text>
  </svg>`;
}

function updateSelectedBar() {
  const hint = document.getElementById("skinHint");
  const nameEl = document.getElementById("selectedName");
  const subEl = document.getElementById("selectedSub");
  const thumb = document.getElementById("selectedThumb");
  const thumbs = document.getElementById("selectedThumbs");

  if (!selectedSkins.length) {
    if (hint) {
      hint.textContent = "Belum dipilih (max " + MAX_SKINS + ")";
      hint.classList.remove("ok");
    }
    if (nameEl) nameEl.textContent = "Skin belum dipilih";
    if (subEl) subEl.textContent = "Pilih 1–" + MAX_SKINS + " skin di atas";
    if (thumb) {
      thumb.hidden = true;
      thumb.removeAttribute("src");
    }
    if (thumbs) {
      thumbs.innerHTML = "";
      thumbs.hidden = true;
    }
    return;
  }

  const names = selectedSkins.map((s) => s.name).join(", ");
  if (hint) {
    hint.textContent = selectedSkins.length + "/" + MAX_SKINS + " · " + names;
    hint.classList.add("ok");
  }
  if (nameEl) nameEl.textContent = names;
  if (subEl) subEl.textContent = "Siap dikirim ke Discord";

  // multi thumbs
  if (thumbs) {
    thumbs.hidden = false;
    thumbs.innerHTML = selectedSkins
      .map(
        (s) =>
          `<img src="${escapeAttr(s.image)}" alt="${escapeAttr(s.name)}" title="${escapeAttr(s.name)}"
            onerror="this.style.display='none'" />`
      )
      .join("");
  }
  if (thumb) {
    // single thumb fallback (hidden when multi thumbs exist)
    if (thumbs) {
      thumb.hidden = true;
    } else {
      thumb.hidden = false;
      thumb.src = selectedSkins[0].image;
      thumb.onerror = () => {
        thumb.hidden = true;
      };
    }
  }
}

function escapeHtml(s) {
  return String(s || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function escapeAttr(s) {
  return escapeHtml(s).replace(/'/g, "&#39;");
}

function fieldValue(v, fallback) {
  const s = String(v == null ? "" : v).trim();
  return (s || fallback || "-").slice(0, 1024);
}

/* ========== Discord send ========== */
function absoluteUrl(path) {
  try {
    return new URL(path, window.location.href).href;
  } catch (e) {
    return path;
  }
}

/** Hanya URL publik http(s) yang boleh jadi thumbnail Discord */
function publicImageUrl(path) {
  const u = absoluteUrl(path);
  if (!u || typeof u !== "string") return null;
  if (u.startsWith("https://") || u.startsWith("http://")) return u;
  return null;
}

async function sendToDiscord({ name, contact, message, skins }) {
  if (!DISCORD_WEBHOOK_URL || DISCORD_WEBHOOK_URL.includes("PASTE_WEBHOOK")) {
    throw new Error("Webhook belum diset. Edit DISCORD_WEBHOOK_URL di script.js");
  }

  const list = Array.isArray(skins) ? skins : [];
  const skinNames =
    list.length > 0 ? list.map((s) => s.name).join(", ") : "— (tidak dipilih)";

  // Discord menolak field value kosong → selalu isi fallback
  const fields = [
    { name: "Nama", value: fieldValue(name, "-"), inline: true },
    { name: "ID Free Fire", value: fieldValue(contact, "-"), inline: true },
    { name: "Jumlah Skin", value: String(list.length || 0), inline: true },
    { name: "Skin dipilih", value: fieldValue(skinNames, "-"), inline: false }
  ];

  // Pesan opsional — hanya tambah field jika diisi
  const msg = String(message || "").trim();
  if (msg) {
    fields.push({ name: "Pesan", value: fieldValue(msg, "-"), inline: false });
  }

  const embed = {
    title: "Bocil Skin FF",
    color: 16744448,
    fields,
    timestamp: new Date().toISOString(),
    footer: { text: "FF Skin Bocil · max " + MAX_SKINS + " skin" }
  };

  // Thumbnail hanya jika URL publik (hindari error embed dari file:// / relative)
  const firstImg = list[0] ? publicImageUrl(list[0].image) : null;
  if (firstImg) {
    embed.thumbnail = { url: firstImg };
  }

  const payload = {
    username: "FF Feedback",
    embeds: [embed]
  };

  const res = await fetch(DISCORD_WEBHOOK_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  });

  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error("Discord error " + res.status + (text ? ": " + text.slice(0, 160) : ""));
  }
}

/* ========== form submit ========== */
const form = document.getElementById("feedbackForm");
const sendBtn = document.getElementById("sendBtn");

if (form) {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const name = (document.getElementById("nameInput")?.value || "").trim();
    const contact = (document.getElementById("contactInput")?.value || "").trim();
    const message = (document.getElementById("msgInput")?.value || "").trim();

    if (name.length < 2) {
      showToast("Nama", "Isi nama minimal 2 huruf", "error");
      return;
    }
    if (contact.length < 3) {
      showToast("ID Free Fire", "ID Free Fire wajib diisi", "error");
      return;
    }
    if (!selectedSkins.length) {
      showToast("Skin", "Pilih minimal 1 skin (maksimal " + MAX_SKINS + ")", "error");
      return;
    }
    // pesan TIDAK wajib

    if (sendBtn) {
      sendBtn.disabled = true;
      sendBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Mengirim...';
    }

    try {
      await sendToDiscord({
        name,
        contact,
        message,
        skins: selectedSkins.slice()
      });
      bumpPopularity(selectedSkins);
      showToast("Terkirim", "Permintaan masuk ke admin. Dalam antrian");
      form.reset();
      selectedSkins = [];
      renderSkins();
      updateSelectedBar();
    } catch (err) {
      console.error(err);
      showToast("Gagal kirim", String(err.message || err).slice(0, 120), "error");
    }

    if (sendBtn) {
      sendBtn.disabled = false;
      sendBtn.innerHTML = '<i class="fa-brands fa-discord"></i> Kirim permintaan';
    }
  });
}

/* boot */
renderSkins();
updateSelectedBar();
