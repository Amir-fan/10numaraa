const fs = require('fs');
const path = require('path');

// 1. Move the file
const oldPath = path.join('katalog', 'اكياس غير مطبوعة (8) brown.jpeg');
const newPath = path.join('katalog2', 'اكياس غير مطبوعة (8) brown.jpeg');
if (fs.existsSync(oldPath)) {
    fs.renameSync(oldPath, newPath);
    console.log('Moved image to katalog2');
}

// 2. Remove from catalog-data.js
let catalogData = fs.readFileSync('catalog-data.js', 'utf8');
const searchString = `    {
        "src": "katalog/اكياس غير مطبوعة (8) brown.jpeg",
        "category": "اكياس غير مطبوعة",
        "details": "unprinted"
    },`;
catalogData = catalogData.replace(searchString, '');
fs.writeFileSync('catalog-data.js', catalogData);
console.log('Removed from catalog-data.js');

// 3. Add to catalog2-data.js
let catalog2Data = fs.readFileSync('catalog2-data.js', 'utf8');
if (!catalog2Data.includes('اكياس غير مطبوعة (8) brown.jpeg')) {
    const newItem = `
    {
        "src": "katalog2/اكياس غير مطبوعة (8) brown.jpeg",
        "category": "اكياس مطبوعة",
        "details": "printed"
    },`;
    catalog2Data = catalog2Data.replace('const catalogItems2 = [', 'const catalogItems2 = [' + newItem);
    fs.writeFileSync('catalog2-data.js', catalog2Data);
    console.log('Added to catalog2-data.js');
}

// 4. Hide "Products" page from all navigation
const htmlFiles = ['index.html', 'catalog.html', 'contact.html', 'products.html', 'page1.html', 'page2.html', 'page3.html', 'page4.html'];

for (const file of htmlFiles) {
    if (!fs.existsSync(file)) continue;
    let content = fs.readFileSync(file, 'utf8');
    
    // Remove from main nav
    content = content.replace(/<li><a href="products\.html"[^>]*>.*?<\/a><\/li>/g, '');
    
    // Remove from footer links
    content = content.replace(/<li><a href="products\.html" class="footer-link".*?<\/a><\/li>/g, '');
    
    // Update hero button in index.html to point to catalog.html instead of products.html
    if (file === 'index.html') {
        content = content.replace(/<a href="products\.html" class="btn btn-primary"/g, '<a href="catalog.html" class="btn btn-primary"');
    }
    
    fs.writeFileSync(file, content);
}
console.log('Removed Products from navigation.');

// 5. Commit and push
const { execSync } = require('child_process');
try {
    execSync('git add .');
    execSync('git commit -m "Move brown bag to printed, hide products page"');
    execSync('git push');
    console.log('Pushed to GitHub');
} catch(e) {
    console.log('Git error: ' + e.message);
}
