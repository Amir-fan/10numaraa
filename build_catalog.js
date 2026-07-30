const fs = require('fs');

const dir = './katalog';
const files = fs.readdirSync(dir);

const itemsMap = new Map();

files.forEach(f => {
    // Expected format: "اكياس غير مطبوعة (11) black.png"
    // Match number, optional color string, and extension
    const match = f.match(/\((\d+)\)\s*(.*?)\.(png|jpeg|jpg)$/i);
    
    if (match) {
        const num = parseInt(match[1]);
        // Normalize color string (e.g. trim spaces, fix typos like goldd -> gold)
        let color = match[2] ? match[2].trim().toLowerCase() : 'standard';
        if (color === 'goldd') color = 'gold';
        if (color === '') color = 'standard';
        
        const ext = match[3].toLowerCase();
        
        const key = `${num}_${color}`;
        
        if (!itemsMap.has(key)) {
            itemsMap.set(key, { file: f, num, color, ext });
        } else {
            // Prefer png if duplicate exists
            const existing = itemsMap.get(key);
            if (ext === 'png' && existing.ext !== 'png') {
                itemsMap.set(key, { file: f, num, color, ext });
            }
        }
    }
});

let items = Array.from(itemsMap.values());

// Order of colors to group together
const colorOrder = {
    'black': 1,
    'brown': 2,
    'gold': 3,
    'white silver': 4,
    'see through': 5,
    'standard': 99
};

items.sort((a, b) => {
    const orderA = colorOrder[a.color] !== undefined ? colorOrder[a.color] : 99;
    const orderB = colorOrder[b.color] !== undefined ? colorOrder[b.color] : 99;
    
    if (orderA !== orderB) {
        return orderA - orderB;
    }
    
    // If same color, sort by number numerically
    return a.num - b.num;
});

// Map to required format
const data = items.map(item => ({
    src: `katalog/${item.file}`,
    category: 'اكياس غير مطبوعة',
    details: item.color // keep the color name for the details
}));

const content = `const catalogItems = ${JSON.stringify(data, null, 4)};`;
fs.writeFileSync('./catalog-data.js', content);
console.log('Generated catalog-data.js with ' + data.length + ' unique items.');
