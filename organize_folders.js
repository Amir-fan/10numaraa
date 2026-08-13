const fs = require('fs');
const path = require('path');

const colors = [
    "black", 
    "brown", 
    "gold", 
    "white_silver_cream", 
    "transparent", 
    "standard"
];

let cat1 = fs.readFileSync('catalog-data.js', 'utf8');
let cat2 = fs.readFileSync('catalog2-data.js', 'utf8');

function processCatalog(data, baseDir) {
    const regex = new RegExp(`"src":\\s*"(${baseDir}/([^"]+))"`, 'g');
    let matches = [...data.matchAll(regex)];
    
    for (const match of matches) {
        const fullOldSrc = match[1]; // e.g. katalog/اكياس غير مطبوعة (11) black_black.png
        const filename = match[2];   // e.g. اكياس غير مطبوعة (11) black_black.png
        
        // Find which color suffix this file has
        let matchedColor = null;
        for (const c of colors) {
            if (filename.includes('_' + c + '.')) {
                matchedColor = c;
                break;
            }
        }

        if (matchedColor) {
            const oldPath = path.join(__dirname, fullOldSrc);
            const subDir = path.join(__dirname, baseDir, matchedColor);
            const newPath = path.join(subDir, filename);
            const newSrc = `${baseDir}/${matchedColor}/${filename}`;

            // Create dir if not exists
            if (!fs.existsSync(subDir)) {
                fs.mkdirSync(subDir, { recursive: true });
            }

            // Move file
            if (fs.existsSync(oldPath)) {
                fs.renameSync(oldPath, newPath);
                console.log(`Moved: ${fullOldSrc} -> ${newSrc}`);
            }

            // Replace in file data
            data = data.split(`"${fullOldSrc}"`).join(`"${newSrc}"`);
        }
    }
    return data;
}

cat1 = processCatalog(cat1, 'katalog');
cat2 = processCatalog(cat2, 'katalog2');

fs.writeFileSync('catalog-data.js', cat1);
fs.writeFileSync('catalog2-data.js', cat2);

console.log("Finished organizing files into folders and updating catalog references.");
