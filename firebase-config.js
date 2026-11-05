// Konfigurasi Firebase untuk login & simpan progres.
// Salin dari Firebase Console → Project settings → General → Your apps → Web app → SDK setup and configuration (Config).
// Nilai ini memang ditaruh di sisi klien dan bukan rahasia; keamanannya dijaga oleh firestore.rules.
// Biarkan apiKey kosong jika belum siap: game tetap jalan, progres hanya tersimpan di perangkat.
window.FIREBASE_CONFIG = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  appId: "",
};
