// AURA CAFE — işletmeye özel ayarlar. index.html güncellenince bu dosyaya dokunmanız gerekmez.
// Her işletmenin kendi reposunda, index.html ile aynı klasörde durur.
(function(){
  // Logo: altın degrade, "aura" halesi + fincan. Gradyan kimliği "lgR" olmalı (uygulama kenar çubuğu için yeniden adlandırıyor).
  var GRAD = '<defs><linearGradient id="lgR" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="0" y2="140">'
    + '<stop offset="0" stop-color="#e6bd5c"/><stop offset=".55" stop-color="#c98f26"/><stop offset="1" stop-color="#9a6414"/>'
    + '</linearGradient></defs>';

  var EMBLEM = ''
    // dış halkalar
    + '<circle cx="70" cy="70" r="60" fill="none" stroke="url(#lgR)" stroke-width="2.2"/>'
    + '<circle cx="70" cy="70" r="51" fill="none" stroke="url(#lgR)" stroke-width="1.4" stroke-dasharray="1.5 6" stroke-linecap="round" opacity=".75"/>'
    // aura (üç hale yayı)
    + '<path d="M56.9 54.8A16 16 0 0 1 83.1 54.8" fill="none" stroke="url(#lgR)" stroke-width="3" stroke-linecap="round"/>'
    + '<path d="M48.7 49.1A26 26 0 0 1 91.3 49.1" fill="none" stroke="url(#lgR)" stroke-width="2.4" stroke-linecap="round" opacity=".8"/>'
    + '<path d="M40.5 43.3A36 36 0 0 1 99.5 43.3" fill="none" stroke="url(#lgR)" stroke-width="1.8" stroke-linecap="round" opacity=".55"/>'
    // ışıltı
    + '<path d="M70 52l2.4 5.6 5.6 2.4-5.6 2.4L70 68l-2.4-5.6-5.6-2.4 5.6-2.4z" fill="url(#lgR)"/>'
    // fincan, kulp, tabak
    + '<path d="M50 76h40v8a20 20 0 0 1-40 0z" fill="url(#lgR)"/>'
    + '<path d="M90 80h4a7 7 0 0 1 0 14h-5" fill="none" stroke="url(#lgR)" stroke-width="4" stroke-linecap="round"/>'
    + '<path d="M44 109h52" stroke="url(#lgR)" stroke-width="4" stroke-linecap="round"/>';

  var FULL = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 410 140" role="img" aria-label="AURA CAFE">'
    + GRAD + EMBLEM
    + '<text x="164" y="84" font-family="Cormorant Garamond,Playfair Display,Georgia,serif" font-size="66" font-weight="700" textLength="232" lengthAdjust="spacing" fill="url(#lgR)">AURA</text>'
    + '<path d="M164 97h232" stroke="url(#lgR)" stroke-width="1.2" opacity=".6"/>'
    + '<text x="164" y="124" font-family="Montserrat,Helvetica Neue,Arial,sans-serif" font-size="21" font-weight="500" textLength="232" lengthAdjust="spacing" fill="url(#lgR)">CAFE</text>'
    + '</svg>';

  var MARK = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" role="img" aria-label="AURA CAFE">'
    + '<rect width="100" height="100" rx="24" fill="#1b1410"/>' + GRAD
    + '<g transform="translate(50 50) scale(.62) translate(-70 -70)">' + EMBLEM + '</g>'
    + '</svg>';

  window.APP_CONFIG = {
    brand: {
      name: 'AURA CAFE',
      line1: 'AURA',
      line2: 'CAFE',
      initials: 'AC',
      logo: { full: FULL, mark: MARK }
    },

    // ÖNEMLİ: Firebase Authentication'da kayıtlı yönetici e-postanızı yazın.
    adminEmail: 'BURAYA_YONETICI_EPOSTASI',

    firebase: {
      apiKey: 'AIzaSyD5Ba_xKdglc33zYetrorN_Spu4v-patZY',
      authDomain: 'adisyon-sistemleri.firebaseapp.com',
      databaseURL: 'https://adisyon-sistemleri-default-rtdb.europe-west1.firebasedatabase.app',
      projectId: 'adisyon-sistemleri',
      storageBucket: 'adisyon-sistemleri.firebasestorage.app',
      messagingSenderId: '154612008415',
      appId: '1:154612008415:web:3d51e7df1166d9de24706a'
    }
  };
})();
