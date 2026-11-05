# Menyalakan login & simpan progres

Game tetap bisa dimainkan tanpa langkah ini. Selama `firebase-config.js` masih kosong, progres hanya tersimpan di browser pemain. Setelah diisi, muncul tombol **Masuk dengan Google**, dan progres tersimpan di akun pemain.

## 1. Siapkan proyek Firebase
Kamu bisa memakai proyek Firebase PyNoir yang sudah ada, supaya pemain cukup punya satu akun untuk kedua game. Bisa juga membuat proyek baru di https://console.firebase.google.com.

## 2. Aktifkan login Google
**Build → Authentication → Sign-in method → Google → Enable**.

## 3. Daftarkan domain Netlify
**Authentication → Settings → Authorized domains → Add domain**, lalu isi domain situsmu, misalnya `kasus-kopi-hilang.netlify.app`. Tanpa langkah ini, login akan gagal dengan pesan "domain belum didaftarkan".

## 4. Buat Firestore
**Build → Firestore Database → Create database**. Pilih lokasi `asia-southeast2 (Jakarta)`, lalu mulai dalam *production mode*.

## 5. Pasang aturan keamanan
Buka **Firestore → Rules**, tempel isi `firestore.rules`, lalu klik **Publish**.

Jika proyeknya dipakai bersama PyNoir, **jangan menimpa aturan PyNoir**. Tambahkan blok `match /users/{uid}/games/{game} { … }` ke dalam aturan yang sudah ada.

## 6. Isi `firebase-config.js`
**Project settings → General → Your apps**. Tambahkan *Web app* jika belum ada, lalu salin nilai `apiKey`, `authDomain`, `projectId`, dan `appId` ke `firebase-config.js`.

## 7. Deploy ulang ke Netlify
Seret folder ini ke tab **Deploys** di situs Netlify-mu.

---

**Data yang disimpan:** `users/{uid}/games/kasus-kopi-hilang`, satu dokumen per pemain. Isinya progres level, catatan kesalahan, draf query, waktu simpan terakhir, dan jumlah level selesai.

**Cara kerjanya:**
- Progres disimpan otomatis 1,5 detik setelah ada perubahan, dan juga saat tab ditutup.
- Jika akun dan perangkat menyimpan progres yang berbeda, pemain diminta memilih salah satu.
- Saat pemain keluar, progres di perangkat itu dihapus agar tidak tercampur dengan akun lain. Progresnya tetap aman di akun.
