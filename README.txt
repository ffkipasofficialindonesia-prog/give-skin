FF SKIN FEEDBACK → Discord
==========================

ISI FOLDER
- index.html
- style.css
- script.js
- assets/logo.png     ← logo Free Fire (header)
- assets/skins/       ← taruh gambar skin di sini

SETUP CEPAT
1) Discord: Channel → Edit → Integrations → Webhooks → New Webhook → Copy URL
2) Buka script.js, ganti:
   const DISCORD_WEBHOOK_URL = "https://discord.com/api/webhooks/....";
3) Taruh gambar skin di assets/skins/ (png/jpg/webp)
4) Edit daftar SKINS di script.js, contoh:
   { id: "cobra", name: "Cobra Bundle", image: "assets/skins/cobra.png" },
5) Upload seluruh folder ke hosting (GitHub Pages / Cloudflare / dll)

CATATAN
- Thumbnail skin di Discord hanya muncul jika web sudah di-hosting (URL publik).
- Lampiran gambar dari user ikut terkirim sebagai file di Discord.
