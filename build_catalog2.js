const fs = require('fs');

const dir = './katalog2';
const files = fs.readdirSync(dir);

const items = [];

files.forEach(f => {
    const match = f.match(/\((\d+)\)\.(jpeg|jpg|png)$/i);
    if (match) {
        const num = parseInt(match[1]);
        items.push({ file: f, num });
    }
});

// Sort numerically
items.sort((a, b) => a.num - b.num);

const data = items.map(item => ({
    src: `katalog2/${item.file}`,
    category: 'اكياس مطبوعة',
    details: 'printed'
}));

const content = `const catalogItems2 = ${JSON.stringify(data, null, 4)};`;
fs.writeFileSync('./catalog2-data.js', content);
console.log('Generated catalog2-data.js with ' + data.length + ' items.');
