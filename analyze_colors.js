const fs = require('fs');
let content = fs.readFileSync('catalog-gallery.html', 'utf8');
const matches = [...content.matchAll(/data-src=\"([^\"]+)\"/g)].map(m => m[1]);
let countNoColor = 0;
for(let m of matches) {
    if(!m.toLowerCase().includes('black') && !m.toLowerCase().includes('brown') && !m.toLowerCase().includes('gold') && !m.toLowerCase().includes('white') && !m.toLowerCase().includes('silver') && !m.toLowerCase().includes('transparent')) {
        countNoColor++;
        console.log(m);
    }
}
console.log('Total without colors: ' + countNoColor);
