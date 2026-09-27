# Questions Claude must resolve with the user

Ask these in one concise, grouped message in Turkish after inspecting the project. Record the answers in the repository (for example `PROJECT_DECISIONS.md`) so they are not asked repeatedly.

## Business and service facts

1. İşletme sahibinin sitede kullanılacak adı ve kısa tanıtımı nedir?
2. Toulouse’da tam hizmet bölgesi/radius nedir?
3. “7/24” tam olarak hangi hizmetler için geçerli: telefona cevap, son dakika bakım, ulaşım veya hepsi? Garanti edilen müdahale süresi var mı?
4. Garde familiale gündüz bakımını, gece konaklamayı veya ikisini de kapsıyor mu? Kabul koşulları neler?
5. Eğitim yaklaşımı, formatı ve doğrulanabilir eğitim/sertifikalar neler?
6. Ulaşım başka bir hizmete bağlı mı, bağımsız mı? Güvenli taşıma yöntemi ve kapsama alanı nedir?
7. Fiyatlar açıkça yayınlanacak mı, “devis sur demande” mı kullanılacak?

## Contact and conversion

1. Ana CTA nereye gidecek: telefon, WhatsApp, e-posta, form veya rezervasyon aracı?
2. Onaylı telefon, WhatsApp, e-posta, Instagram URL’si ve varsa Google Business profili nedir?
3. İletişim formunda hangi alanlar gerekli? Mesajların hangi adrese gitmesi gerekiyor?
4. Fotoğraf güncellemeleri, müsaitlik takvimi veya online ödeme şu an gerekli mi? Bunları ihtiyaç yoksa ekleme.

## Legal and privacy — France

1. Resmî işletme adı/statüsü, adres, SIREN/SIRET, yayın sorumlusu ve varsa TVA bilgisi nedir?
2. Hosting sağlayıcısının yasal bilgileri canlıya geçmeden Mentions légales’e eklenecek.
3. Analytics isteniyor mu? İsteniyorsa privacy-friendly/cookie-free çözüm mü, consent gerektiren çözüm mü?
4. Form verisinin saklama süresi ve gizlilik iletişim adresi nedir?

Do not invent legal language or identifiers. Flag that the final legal text may need review by a qualified French professional.

## Domain and hosting — mandatory choice

Ask before any purchase or DNS action:

1. Domain already exists? If yes: exact domain, registrar and who has DNS access.
2. If no domain: desired names/extensions and annual budget. Check live availability only after the user confirms candidates.
3. Hosting preference/budget: free static tier, managed platform or existing server? Present 2–3 current options and compare cost, custom domain, form support, analytics, deployment and maintenance.
4. Does the user want Claude to perform deployment after preview approval, or provide instructions for an owner-admin to complete it?

Never request passwords, full API keys or payment card information in chat. Use official secure authorization flows. Never purchase or enable recurring billing without explicit authorization.

## Recommended deployment sequence

1. Build and test locally in the web session.
2. Show screenshots/preview and receive design approval.
3. Confirm business/legal/contact facts.
4. Present hosting/domain options with verified current pricing.
5. User chooses and authorizes.
6. Deploy to a staging URL.
7. User approves staging.
8. Connect domain/DNS.
9. Verify production and deliver the handoff summary.
