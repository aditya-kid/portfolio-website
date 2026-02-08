const sharp = require('sharp');

async function createCircularFavicon() {
  try {
    const inputPath = 'public/adit.jpg';
    const outputPath = 'public/adit-circle.png';
    const size = 512;
    
    // Create circular mask as SVG
    const circleSvg = Buffer.from(`
      <svg width="${size}" height="${size}">
        <circle cx="${size/2}" cy="${size/2}" r="${size/2}" fill="white"/>
      </svg>
    `);
    
    // First, resize and crop image to square
    const squareImage = await sharp(inputPath)
      .resize(size, size, {
        fit: 'cover',
        position: 'center'
      })
      .toBuffer();
    
    // Then apply circular mask
    await sharp(squareImage)
      .composite([{
        input: circleSvg,
        blend: 'dest-in'
      }])
      .png()
      .toFile(outputPath);
    
    console.log('✅ Circular favicon berhasil dibuat:', outputPath);
  } catch (error) {
    console.error('❌ Error:', error.message);
  }
}

createCircularFavicon();
