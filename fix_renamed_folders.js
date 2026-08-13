const fs = require('fs');

let cat1 = fs.readFileSync('catalog-data.js', 'utf8');
// Replace "katalog/ with "katalog-not-printed/
cat1 = cat1.replace(/"katalog\//g, '"katalog-not-printed/');
fs.writeFileSync('catalog-data.js', cat1);

let cat2 = fs.readFileSync('catalog2-data.js', 'utf8');
// Replace "katalog2/ with "katalog-printed/
cat2 = cat2.replace(/"katalog2\//g, '"katalog-printed/');
fs.writeFileSync('catalog2-data.js', cat2);

console.log("Fixed folder names in catalog data!");
