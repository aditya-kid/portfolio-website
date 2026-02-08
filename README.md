# Portfolio Website

Website portofolio personal yang dibangun menggunakan React.js dengan desain modern dan responsif.

## Fitur Utama

- **Header Section**: Foto profil dan informasi pribadi
- **Navigation**: Kategori proyek (Hardware, Software, Mobile Apps)
- **Project Showcase**: Tampilan proyek dengan carousel foto dan deskripsi
- **Footer**: Informasi kontak dengan ikon media sosial
- **Responsive Design**: Kompatibel dengan desktop dan mobile
- **Modern UI**: Glass morphism effect dan gradient design

## Teknologi yang Digunakan

- React.js
- Styled Components
- React Icons
- React Responsive Carousel
- CSS3 dengan effects modern

## Cara Menjalankan

1. Clone repository ini
2. Install dependencies:
   ```bash
   npm install
   ```
3. Jalankan development server:
   ```bash
   npm start
   ```
4. Buka browser di `http://localhost:3000`

## Kustomisasi

### Mengubah Informasi Pribadi
Edit file `src/components/Header.js` untuk mengubah:
- Nama
- Foto profil
- Deskripsi

### Menambah/Mengubah Proyek
Edit file `src/data/projectsData.js` untuk:
- Menambah proyek baru
- Mengubah deskripsi proyek
- Menambah foto proyek
- Mengubah teknologi yang digunakan

### Mengubah Informasi Kontak
Edit file `src/components/Footer.js` untuk mengubah:
- Instagram
- WhatsApp
- LinkedIn
- Email

## Struktur Folder

```
src/
├── components/
│   ├── Header.js          # Komponen header dengan foto dan nama
│   ├── Navigation.js      # Navigasi kategori proyek
│   ├── ProjectCard.js     # Kartu proyek individual
│   ├── ProjectSection.js  # Section untuk menampilkan proyek
│   └── Footer.js          # Footer dengan kontak
├── data/
│   └── projectsData.js    # Data proyek-proyek
├── assets/
│   └── images/           # Folder untuk gambar
├── App.js                # Komponen utama
├── App.css               # Styling global
└── index.js              # Entry point
```

## Deployment

Untuk deployment ke production:

```bash
npm run build
```

Folder `build` akan berisi file-file yang siap untuk deployment.

## Tips Penggunaan

1. **Foto Profil**: Ganti placeholder foto dengan foto Anda yang sesungguhnya
2. **Gambar Proyek**: Upload gambar proyek Anda dan update URL di `projectsData.js`
3. **Link Proyek**: Tambahkan link GitHub dan live demo yang benar
4. **Kontak**: Update semua informasi kontak dengan data Anda yang sebenarnya
5. **SEO**: Tambahkan meta tags di `public/index.html` untuk SEO yang lebih baik

## Lisensi

MIT License - Silakan gunakan untuk keperluan pribadi atau komersial.
