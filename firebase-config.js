// Konfigurasi Firebase untuk login & simpan progres.
// Salin dari Firebase Console → Project settings → General → Your apps → Web app → SDK setup and configuration (Config).
// Nilai ini memang ditaruh di sisi klien dan bukan rahasia; keamanannya dijaga oleh firestore.rules.
// Biarkan apiKey kosong jika belum siap: game tetap jalan, progres hanya tersimpan di perangkat.
window.FIREBASE_CONFIG = {
  apiKey: "AIzaSyARAFRRPEOty-hzAtk-9mi3ST8x0omVv3M",
  authDomain: "pynoir-1.firebaseapp.com",
  projectId: "pynoir-1",
  appId: "1:1001203201081:web:8817a49082b8eba1b0c9e8",
};
