const fs = require('fs');
const path = require('path');

function getFilesRecursively(directory) {
    let results = [];
    if (!fs.existsSync(directory)) return results;
    
    const list = fs.readdirSync(directory);
    list.forEach(file => {
        file = path.join(directory, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            results = results.concat(getFilesRecursively(file));
        } else {
            // Only include image files
            if (/\.(png|jpeg|jpg)$/i.test(file)) {
                results.push(file.replace(/\\/g, '/'));
            }
        }
    });
    return results;
}

function buildCatalog(baseDir, categoryName) {
    const files = getFilesRecursively(baseDir);
    const catalogItems = [];

    files.forEach(f => {
        // e.g. katalog-not-printed/black/اكياس غير مطبوعة (11)_black.png
        // Extract the folder color
        const parts = f.split('/');
        const colorFolder = parts[1]; // black, brown, transparent, etc.
        
        catalogItems.push({
            src: f,
            category: categoryName,
            details: colorFolder
        });
    });

    // Sort by color to ensure dividers work perfectly
    catalogItems.sort((a, b) => {
        if (a.details < b.details) return -1;
        if (a.details > b.details) return 1;
        return 0;
    });

    return catalogItems;
}

const items1 = buildCatalog('katalog-not-printed', 'اكياس غير مطبوعة');
const items2 = buildCatalog('katalog-printed', 'اكياس مطبوعة');

const cat1Content = `const catalogItems = ${JSON.stringify(items1, null, 4)};\n`;
const cat2Content = `const catalogItems2 = ${JSON.stringify(items2, null, 4)};\n`;

fs.writeFileSync('catalog-data.js', cat1Content);
fs.writeFileSync('catalog2-data.js', cat2Content);

console.log(`Synced catalog-data.js with ${items1.length} images.`);
console.log(`Synced catalog2-data.js with ${items2.length} images.`);
