const fs = require('fs');

function fixCatalog(filename) {
    let content = fs.readFileSync(filename, 'utf8');
    // Extract array content
    let match = content.match(/const\s+(catalogItems[2]?)\s*=\s*(\[\s*\{[\s\S]*\}\s*\]);/);
    if (!match) return;
    
    let varName = match[1];
    let arr = JSON.parse(match[2]);
    
    // Update details based on folder name in src
    for (let item of arr) {
        let src = item.src;
        // e.g. katalog/white_silver_cream/...
        // match katalog2/folder/ or katalog/folder/
        let folderMatch = src.match(/katalog2?\/([^\/]+)\//);
        if (folderMatch) {
            item.details = folderMatch[1];
        } else {
            // fallback if not in subfolder
            if (src.includes('_black.')) item.details = 'black';
            else if (src.includes('_brown.')) item.details = 'brown';
            else if (src.includes('_gold.')) item.details = 'gold';
            else if (src.includes('_transparent.')) item.details = 'transparent';
            else if (src.includes('_white_silver_cream.')) item.details = 'white_silver_cream';
            else if (src.includes('_standard.')) item.details = 'standard';
        }
    }
    
    // Sort array by details
    arr.sort((a, b) => {
        if (a.details < b.details) return -1;
        if (a.details > b.details) return 1;
        return 0;
    });
    
    let newContent = `const ${varName} = ${JSON.stringify(arr, null, 4)};\n`;
    fs.writeFileSync(filename, newContent);
    console.log(`Updated and sorted ${filename}`);
}

fixCatalog('catalog-data.js');
fixCatalog('catalog2-data.js');

// Fix catalog.html divider logic
let html = fs.readFileSync('catalog.html', 'utf8');
html = html.replace(/if\s*\(filterCategory\s*!==\s*'اكياس مطبوعة'\s*&&\s*item\.details\s*!==\s*lastColor\)\s*\{/, 
                    "if (item.details !== lastColor) {");
fs.writeFileSync('catalog.html', html);
console.log('Fixed catalog.html divider logic');

// Fix style.css white background
let css = fs.readFileSync('style.css', 'utf8');
if (!css.includes('background-color: #ffffff; /* matching color */')) {
    css = css.replace('.editorial-item .item-image {', 
        '.editorial-item .item-image {\n    background-color: #ffffff; /* matching color */');
    fs.writeFileSync('style.css', css);
    console.log('Fixed style.css background');
}
