# 📁 Struktur Proyek Portfolio Website

## 🏗️ Arsitektur Proyek

```
portfolio-website/
├── public/                     # File statis
│   ├── favicon.ico            # Icon website
│   ├── index.html             # Template HTML utama
│   ├── logo192.png           # Logo 192x192
│   ├── logo512.png           # Logo 512x512
│   ├── manifest.json         # Web app manifest
│   └── robots.txt            # SEO robots file
│
├── src/                       # Source code utama
│   ├── components/           # Komponen React
│   │   ├── Header.js         # Header dengan foto & nama
│   │   ├── Navigation.js     # Navigasi kategori
│   │   ├── ProjectCard.js    # Kartu proyek individual
│   │   ├── ProjectSection.js # Section proyek
│   │   ├── Footer.js         # Footer dengan kontak
│   │   ├── ScrollToTop.js    # Tombol scroll to top
│   │   └── Loading.js        # Komponen loading
│   │
│   ├── data/                 # Data proyek
│   │   ├── projectsData.js   # Data proyek utama
│   │   └── sampleProjectsIndonesia.js # Contoh proyek Indonesia
│   │
│   ├── assets/              # Asset gambar & file
│   │   └── images/          # Folder gambar
│   │
│   ├── App.js               # Komponen utama aplikasi
│   ├── App.css              # Styling global
│   ├── index.js             # Entry point aplikasi
│   ├── index.css            # CSS dasar
│   └── ...                  # File lainnya dari CRA
│
├── CUSTOMIZATION.md          # Panduan kustomisasi
├── STRUCTURE.md             # File ini
├── README.md                # Dokumentasi utama
├── package.json             # Dependencies & scripts
└── package-lock.json        # Lock file dependencies
```

## 🧩 Penjelasan Komponen

### 1. Header Component (`src/components/Header.js`)
**Fungsi:** Menampilkan foto profil, nama, dan deskripsi singkat
**Props:** Tidak ada
**Features:**
- Responsive design
- Hover effect pada foto
- Gradient text pada nama
- Animation fade-in

### 2. Navigation Component (`src/components/Navigation.js`)
**Fungsi:** Navigasi untuk memilih kategori proyek
**Props:**
- `activeCategory`: Kategori yang sedang aktif
- `setActiveCategory`: Function untuk mengubah kategori
**Features:**
- Icon untuk setiap kategori
- Hover animation
- Active state styling

### 3. ProjectCard Component (`src/components/ProjectCard.js`)
**Fungsi:** Menampilkan detail proyek individual
**Props:**
- `project`: Object berisi data proyek
**Features:**
- Image carousel (jika lebih dari 1 gambar)
- Tech stack tags
- Project links (demo & GitHub)
- Responsive layout

### 4. ProjectSection Component (`src/components/ProjectSection.js`)
**Fungsi:** Container untuk menampilkan daftar proyek berdasarkan kategori
**Props:**
- `category`: Kategori yang dipilih
- `projects`: Array semua proyek
**Features:**
- Filter proyek berdasarkan kategori
- Empty state jika tidak ada proyek
- Section title dinamis

### 5. Footer Component (`src/components/Footer.js`)
**Fungsi:** Menampilkan informasi kontak dan social media
**Props:** Tidak ada
**Features:**
- Social media icons
- Contact information
- Hover effects
- Copyright section

### 6. ScrollToTop Component (`src/components/ScrollToTop.js`)
**Fungsi:** Tombol untuk kembali ke atas halaman
**Props:** Tidak ada
**Features:**
- Muncul setelah scroll 300px
- Smooth scroll animation
- Fixed position
- Auto hide/show

## 📊 Data Structure

### Project Object Structure
```javascript
{
  category: 'hardware|software|mobile',  // Kategori proyek
  title: 'String',                      // Judul proyek
  description: 'String',                // Deskripsi lengkap
  technologies: ['String'],             // Array teknologi
  images: ['URL'],                      // Array URL gambar
  liveLink: 'URL',                      // Link demo (optional)
  githubLink: 'URL'                     // Link GitHub (optional)
}
```

### Contact Data Structure
```javascript
{
  icon: ReactComponent,     // Icon komponen
  label: 'String',         // Label kontak
  detail: 'String',        // Detail kontak
  link: 'URL'             // Link eksternal
}
```

## 🎨 Styling System

### Teknologi Styling
- **Styled Components**: Untuk component-level styling
- **CSS3**: Untuk global styling
- **Keyframe Animations**: Untuk animasi

### Color Palette
```css
Primary Colors:
- #667eea (Blue primary)
- #764ba2 (Purple primary)

Background:
- Linear gradient dari #667eea ke #764ba2

Text Colors:
- #333 (Primary text)
- #666 (Secondary text)
- #777 (Tertiary text)
- #888 (Muted text)

Effects:
- rgba(255, 255, 255, 0.95) (Glass morphism)
- Various shadow effects
```

### Responsive Breakpoints
```css
Desktop: > 768px
Mobile: ≤ 768px
```

## 🔧 Dependencies

### Production Dependencies
```json
{
  "react": "^18.x",
  "react-dom": "^18.x",
  "react-icons": "^4.x",
  "react-responsive-carousel": "^3.x",
  "styled-components": "^5.x"
}
```

### Key Features dari Dependencies
- **react-icons**: Icon library (FontAwesome, dll)
- **react-responsive-carousel**: Carousel component
- **styled-components**: CSS-in-JS styling

## 🚀 Scripts

```bash
npm start          # Development server
npm run build      # Production build
npm test           # Run tests
npm run eject      # Eject from CRA (irreversible)
```

## 📱 Responsive Features

### Desktop (> 768px)
- 2-column layout untuk project cards
- Larger fonts dan spacing
- Hover effects lebih prominent

### Mobile (≤ 768px)
- Single column layout
- Smaller fonts dan compact spacing
- Touch-friendly buttons
- Optimized image sizes

## 🔍 SEO Features

- Meta tags untuk social media sharing
- Semantic HTML structure
- Alt texts untuk semua gambar
- Descriptive page title
- Keywords meta tag

## 🎯 Performance Optimizations

- Lazy loading untuk gambar
- Optimized image sizes
- Minimal re-renders
- Efficient state management
- CSS animations dengan hardware acceleration

## 🐛 Known Issues & Solutions

### Common Issues:
1. **Images tidak load**: Pastikan URL gambar valid
2. **Carousel tidak berfungsi**: Check import CSS carousel
3. **Responsive issues**: Verify media queries

### Solutions:
- Gunakan placeholder images untuk development
- Test di berbagai device sizes
- Validate all external URLs