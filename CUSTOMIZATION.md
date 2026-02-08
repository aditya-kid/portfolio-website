# 📝 Panduan Kustomisasi Portfolio Website

## 🎯 Langkah-langkah Kustomisasi

### 1. Mengubah Informasi Pribadi

**File: `src/components/Header.js`**

```javascript
// Ganti informasi berikut:
<Name>Nama Anda</Name>  // Ganti dengan nama Anda
<Title>Full Stack Developer | UI/UX Designer</Title>  // Ganti dengan profesi Anda
<Description>
  Passionate developer with expertise in creating innovative solutions 
  across hardware, software, and mobile applications. Always eager to 
  learn new technologies and tackle challenging projects.
</Description>  // Ganti dengan deskripsi Anda

// Ganti foto profil:
src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
// Ganti URL dengan foto Anda atau upload foto ke folder src/assets/images/ dan gunakan:
// src={require('../assets/images/your-photo.jpg')}
```

### 2. Mengubah Informasi Kontak

**File: `src/components/Footer.js`**

```javascript
const contactData = [
  {
    icon: FaInstagram,
    label: 'Instagram',
    detail: '@username',  // Ganti dengan username Instagram Anda
    link: 'https://instagram.com/username'  // Ganti dengan link Instagram Anda
  },
  {
    icon: FaWhatsapp,
    label: 'WhatsApp',
    detail: '+62 812-3456-7890',  // Ganti dengan nomor WhatsApp Anda
    link: 'https://wa.me/6281234567890'  // Ganti dengan nomor WhatsApp Anda
  },
  {
    icon: FaLinkedin,
    label: 'LinkedIn',
    detail: 'linkedin.com/in/username',  // Ganti dengan profil LinkedIn Anda
    link: 'https://linkedin.com/in/username'  // Ganti dengan link LinkedIn Anda
  },
  {
    icon: FaEnvelope,
    label: 'Email',
    detail: 'your.email@gmail.com',  // Ganti dengan email Anda
    link: 'mailto:your.email@gmail.com'  // Ganti dengan email Anda
  }
];
```

### 3. Menambah/Mengubah Proyek

**File: `src/data/projectsData.js`**

Format untuk menambah proyek baru:

```javascript
{
  category: 'hardware', // atau 'software' atau 'mobile'
  title: 'Nama Proyek Anda',
  description: 'Deskripsi lengkap proyek Anda...',
  technologies: ['Tech1', 'Tech2', 'Tech3'], // Teknologi yang digunakan
  images: [
    'URL_gambar_1',
    'URL_gambar_2',
    'URL_gambar_3'  // Bisa lebih dari 3 atau kurang
  ],
  liveLink: 'https://demo-link.com', // Link demo (opsional)
  githubLink: 'https://github.com/username/repo' // Link GitHub (opsional)
}
```

### 4. Mengupload Gambar Proyek

**Cara 1: Menggunakan URL eksternal**
- Upload gambar ke service seperti Imgur, Cloudinary, atau hosting Anda
- Gunakan URL langsung di array `images`

**Cara 2: Menggunakan folder lokal**
```javascript
// 1. Letakkan gambar di folder src/assets/images/
// 2. Import gambar di bagian atas file:
import project1Image1 from '../assets/images/project1-1.jpg';
import project1Image2 from '../assets/images/project1-2.jpg';

// 3. Gunakan dalam array images:
images: [project1Image1, project1Image2]
```

### 5. Mengubah Warna Tema

**File: `src/App.css`**

```css
/* Ganti gradient background */
body {
  background: linear-gradient(135deg, #your-color-1 0%, #your-color-2 100%);
}
```

**File: Komponen-komponen (Header.js, Navigation.js, dll)**

Cari dan ganti warna-warna berikut:
- `#667eea` - Warna biru utama
- `#764ba2` - Warna ungu utama
- Ganti dengan warna pilihan Anda

### 6. Menambah Kategori Proyek Baru

**File: `src/components/Navigation.js`**

```javascript
const categories = [
  { id: 'hardware', name: 'Hardware', icon: FaMicrochip },
  { id: 'software', name: 'Software', icon: FaCode },
  { id: 'mobile', name: 'Mobile Apps', icon: FaMobile },
  { id: 'design', name: 'Design', icon: FaPalette }, // Kategori baru
];
```

**File: `src/components/ProjectSection.js`**

```javascript
const categoryTitles = {
  hardware: 'Hardware Projects',
  software: 'Software Projects',
  mobile: 'Mobile App Projects',
  design: 'Design Projects' // Tambah kategori baru
};
```

### 7. SEO dan Meta Tags

**File: `public/index.html`**

```html
<title>Nama Anda - Portfolio | Full Stack Developer</title>
<meta name="description" content="Deskripsi singkat tentang Anda" />
<meta name="keywords" content="keyword1, keyword2, keyword3" />
<meta name="author" content="Nama Anda" />
<meta property="og:title" content="Nama Anda - Portfolio" />
<meta property="og:description" content="Deskripsi untuk social media" />
```

## 🚀 Tips Deployment

### Netlify (Gratis)
1. Build project: `npm run build`
2. Upload folder `build` ke Netlify
3. Atau connect repository GitHub untuk auto-deploy

### Vercel (Gratis)
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow instructions

### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json:
```json
"homepage": "https://username.github.io/repo-name",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```
3. Run: `npm run deploy`

## 🎨 Kustomisasi Lanjutan

### Menambah Animasi
Lihat file `src/components/Loading.js` untuk contoh animasi dengan styled-components

### Menambah Komponen Baru
1. Buat file di folder `src/components/`
2. Import dan gunakan di `App.js`

### Responsive Design
Semua komponen sudah responsive dengan breakpoint:
- Desktop: > 768px
- Mobile: ≤ 768px

Selamat mengkustomisasi! 🎉