// Contoh data proyek dalam bahasa Indonesia
// Ganti dengan proyek-proyek Anda sendiri

export const sampleProjectsIndonesia = [
  // Proyek Hardware
  {
    category: 'hardware',
    title: 'Smart Garden IoT',
    description: 'Sistem kebun pintar berbasis IoT yang dapat memantau kelembaban tanah, suhu, dan cahaya secara otomatis. Dilengkapi dengan sistem penyiraman otomatis dan notifikasi ke smartphone ketika tanaman membutuhkan perawatan.',
    technologies: ['Arduino', 'ESP32', 'Sensor DHT22', 'Soil Moisture Sensor', 'Relay', 'Blynk'],
    images: [
      'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=500&h=300&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=500&h=300&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1563720223185-11003d516935?w=500&h=300&fit=crop&crop=center'
    ],
    liveLink: '',
    githubLink: 'https://github.com/username/smart-garden'
  },
  {
    category: 'hardware',
    title: 'Sistem Keamanan Rumah',
    description: 'Sistem keamanan rumah dengan sensor gerak PIR, kamera, dan notifikasi real-time. Dapat diakses melalui aplikasi mobile dan menyimpan rekaman video di cloud storage.',
    technologies: ['Raspberry Pi', 'Camera Module', 'PIR Sensor', 'Python', 'OpenCV'],
    images: [
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=300&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=500&h=300&fit=crop&crop=center'
    ],
    liveLink: '',
    githubLink: 'https://github.com/username/home-security'
  },

  // Proyek Software
  {
    category: 'software',
    title: 'Sistem Informasi Sekolah',
    description: 'Aplikasi web untuk manajemen sekolah meliputi data siswa, guru, jadwal pelajaran, nilai, dan absensi. Dilengkapi dengan dashboard untuk kepala sekolah, guru, dan orang tua siswa.',
    technologies: ['Laravel', 'PHP', 'MySQL', 'Bootstrap', 'Chart.js'],
    images: [
      'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=500&h=300&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1427751840561-9852520f8ce8?w=500&h=300&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=500&h=300&fit=crop&crop=center'
    ],
    liveLink: 'https://demo-school-system.com',
    githubLink: 'https://github.com/username/school-management'
  },
  {
    category: 'software',
    title: 'E-Learning Platform',
    description: 'Platform pembelajaran online dengan fitur video streaming, quiz interaktif, forum diskusi, dan tracking progress belajar. Mendukung multiple course dan sertifikat digital.',
    technologies: ['React.js', 'Node.js', 'MongoDB', 'Socket.io', 'Video.js'],
    images: [
      'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=500&h=300&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=500&h=300&fit=crop&crop=center'
    ],
    liveLink: 'https://demo-elearning.com',
    githubLink: 'https://github.com/username/elearning-platform'
  },
  {
    category: 'software',
    title: 'Aplikasi Kasir & Inventory',
    description: 'Sistem point of sale dan manajemen inventory untuk toko retail. Fitur barcode scanner, laporan penjualan, manajemen stok, dan integrasi dengan printer thermal.',
    technologies: ['Electron', 'Vue.js', 'SQLite', 'Node.js', 'Chart.js'],
    images: [
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500&h=300&fit=crop&crop=center'
    ],
    liveLink: '',
    githubLink: 'https://github.com/username/pos-system'
  },

  // Proyek Mobile Apps
  {
    category: 'mobile',
    title: 'Aplikasi Ojek Online',
    description: 'Aplikasi pemesanan ojek online dengan fitur real-time tracking, estimasi harga, rating driver, dan multiple payment methods. Tersedia untuk driver dan customer.',
    technologies: ['React Native', 'Firebase', 'Google Maps API', 'Redux', 'Stripe'],
    images: [
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=300&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=500&h=300&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=500&h=300&fit=crop&crop=center'
    ],
    liveLink: '',
    githubLink: 'https://github.com/username/ojek-online'
  },
  {
    category: 'mobile',
    title: 'Aplikasi Resep Masakan',
    description: 'Aplikasi kumpulan resep masakan Indonesia dengan fitur pencarian berdasarkan bahan, favorit, shopping list, dan timer memasak. Tersedia mode offline untuk resep yang sudah disimpan.',
    technologies: ['Flutter', 'Dart', 'SQLite', 'API Recipe', 'SharedPreferences'],
    images: [
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&h=300&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=500&h=300&fit=crop&crop=center'
    ],
    liveLink: '',
    githubLink: 'https://github.com/username/recipe-app'
  },
  {
    category: 'mobile',
    title: 'Aplikasi Keuangan Pribadi',
    description: 'Aplikasi manajemen keuangan pribadi dengan fitur tracking pengeluaran, budgeting, reminder tagihan, dan analisa pola spending. Dilengkapi dengan grafik dan laporan keuangan.',
    technologies: ['React Native', 'AsyncStorage', 'Chart.js', 'Push Notifications', 'Biometric Auth'],
    images: [
      'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=500&h=300&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=500&h=300&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=500&h=300&fit=crop&crop=center'
    ],
    liveLink: '',
    githubLink: 'https://github.com/username/finance-app'
  }
];