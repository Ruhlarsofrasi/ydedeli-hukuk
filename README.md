# Yasin Dedeli — web sitesi

Saf HTML/CSS/JavaScript; derleme adımı yok. Yayınlanan klasör: `site/` (Vercel'de Root Directory = `site`, Framework = Other).

- Yerel önizleme: `python -m http.server 8123 --directory site`
- Diller: TR (HTML içinde), EN ve RU (`site/app.js`). Açık adres her dilde Türkçedir.
- Terazi yalnızca `transform` ile döner; aynı kaydırma konumu her zaman aynı açıyı verir.
- CSS/JS değişince `index.html` içindeki `?v=` sayısını yükselt.
- Arama motorlarına kapalı: `index.html` robots etiketi **ve** `site/vercel.json` X-Robots-Tag. Gerçek yayında ikisi de kaldırılacak.
- Vercel Web Analytics: `index.html` içindeki `/_vercel/insights/script.js`. Yalnızca Vercel'de çalışır; yerel önizlemede 404 vermesi normaldir.
