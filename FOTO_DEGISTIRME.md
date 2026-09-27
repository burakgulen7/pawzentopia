# Fotoğraf nasıl değiştirilir? (kod bilgisi gerekmez)

Sitedeki bütün fotoğraflar tek bir klasörde durur: **`src/photos/`**

| Dosya adı | Sitede nerede görünür |
| --- | --- |
| `hero` | En üstteki büyük fotoğraf (Marianna ve iki köpek) |
| `garde-familiale` | Hizmet kartı 1 — Aile ortamında bakım |
| `education` | Hizmet kartı 2 — Köpek eğitimi |
| `urgence` | Hizmet kartı 3 — Acil bakım |
| `transport` | Hizmet kartı 4 — 7/24 ulaşım |
| `approche` | "Yaklaşımımız" bölümündeki yuvarlak köşeli fotoğraf |
| `social-1` … `social-4` | "Bizi takip edin" (Instagram & TikTok) bölümündeki 4 fotoğraf, soldan sağa |

## Adım adım (GitHub web sitesi üzerinden)

1. Yeni fotoğrafı bilgisayarınızda **tablodaki adla** yeniden adlandırın. Örnek: `hero.jpg`.
   JPG, PNG veya WEBP olabilir; boyutu önemli değil (site otomatik küçültür ve hızlandırır).
2. Tarayıcıda GitHub'daki depoyu açın → `src` → `photos` klasörüne girin.
3. **Eski fotoğrafı silin:** eski dosyaya tıklayın (ör. `hero.png`) → sağ üstteki **…** menüsü →
   **Delete file** → yeşil **Commit changes** düğmesine basın.
4. `photos` klasörüne geri dönün → sağ üstte **Add file** → **Upload files** →
   yeni fotoğrafı sürükleyip bırakın → yeşil **Commit changes** düğmesine basın.
5. Birkaç dakika bekleyin. Site kendiliğinden yeniden yayınlanır. İlerlemeyi deponun
   **Actions** sekmesinden görebilirsiniz (yeşil tik = tamam, kırmızı çarpı = sorun).

> Eski dosyayı silmeyi unutursanız ve aynı addan iki dosya kalırsa (ör. `hero.png` ve `hero.jpg`),
> site önce JPG'yi kullanır. Yine de karışıklık olmaması için eskisini silin.

## İpuçları

- **Yüzlerin kesilmemesi için:** Büyük üst fotoğraf yatay (en az 1800 piksel genişlik) olmalı;
  kişi ve köpekler fotoğrafın **sağ yarısında** dursun, çünkü sol taraf yazının arkasında açık yeşil bir
  perdeyle yumuşatılır. Hizmet kartları kare olarak gösterilir.
- Hizmet kartları ve sosyal medya fotoğrafları telefonda **kare** gösterilir; dikey (portre) fotoğraflar da
  olur, yeter ki yüzler fotoğrafın ortasına yakın olsun.
- **Kırpma ayarı (isteğe bağlı):** Bir fotoğrafta önemli kısım kesiliyorsa `src/config/photos.ts`
  dosyasındaki `position` değerini değiştirin. İlk sayı yatay, ikinci sayı dikey odak noktasıdır:
  `'50% 50%'` = orta, `'50% 20%'` = üst kısmı göster, `'80% 50%'` = sağ tarafı göster.
  Dosyayı GitHub'da açıp kalem simgesine (✏️) basarak düzenleyebilirsiniz.
- **Görme engelliler için açıklama (alt metin):** Aynı dosyada her fotoğrafın 4 dilde kısa bir
  açıklaması var (`alt`). Fotoğrafın içeriği değişirse bu cümleleri de güncelleyin.
- Onaylı ilk fotoğrafların orijinalleri `assets/photos/` klasöründe arşiv olarak saklanır;
  sitede kullanılmazlar, silmeyin.
