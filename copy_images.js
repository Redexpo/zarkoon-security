const fs = require('fs');
const path = require('path');

const images = [
    { src: 'C:\\Users\\huzai\\AppData\\Local\\Temp\\tmp-14816LpU7qK0UeSu9\\input_file_0.png', dest: 'c:\\Users\\huzai\\Downloads\\src\\assets\\image_key_holding_hero_long.png' },
    { src: 'C:\\Users\\huzai\\AppData\\Local\\Temp\\tmp-14816LpU7qK0UeSu9\\input_file_1.png', dest: 'c:\\Users\\huzai\\Downloads\\src\\assets\\image_uk_coverage.png' },
    { src: 'C:\\Users\\huzai\\AppData\\Local\\Temp\\tmp-14816LpU7qK0UeSu9\\input_file_2.png', dest: 'c:\\Users\\huzai\\Downloads\\src\\assets\\image_combined_services.png' }
];

images.forEach(img => {
    try {
        if (fs.existsSync(img.src)) {
            fs.copyFileSync(img.src, img.dest);
            console.log(`Copied ${img.src} to ${img.dest}`);
        } else {
            console.error(`Source file not found: ${img.src}`);
        }
    } catch (err) {
        console.error(`Error copying ${img.src}: ${err.message}`);
    }
});
