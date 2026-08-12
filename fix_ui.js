const fs = require('fs');

// 1. Add 'dev_by' to translations.js
let trans = fs.readFileSync('translations.js', 'utf8');
if (!trans.includes('dev_by:')) {
    trans = trans.replace(/fanari_desc: "Modern Web Teknolojileri ve Tasarım Ajansı",/g, 'fanari_desc: "Modern Web Teknolojileri ve Tasarım Ajansı",\n        dev_by: "Web Tasarım & Yazılım:",');
    trans = trans.replace(/fanari_desc: "Modern Web Technologies and Design Agency",/g, 'fanari_desc: "Modern Web Technologies and Design Agency",\n        dev_by: "Web Design & Development:",');
    trans = trans.replace(/fanari_desc: "وكالة تقنيات الويب الحديثة والتصميم",/g, 'fanari_desc: "وكالة تقنيات الويب الحديثة والتصميم",\n        dev_by: "تصميم وتطوير الويب:",');
    fs.writeFileSync('translations.js', trans);
}

// 2. Fix the 4 HTML files
const files = ['index.html', 'catalog.html', 'products.html', 'contact.html'];
files.forEach(f => {
    let content = fs.readFileSync(f, 'utf8');

    // Remove About Us from Nav
    content = content.replace(/<li><a href="about\.html" data-translate="about">Hakkımızda<\/a><\/li>\s*/g, '');

    // Fix Dev Tag translation
    content = content.replace(/Web Tasarım & Yazılım:\s*<button id="fanariDevBtn"/g, '<span data-translate="dev_by">Web Tasarım & Yazılım:</span> <button id="fanariDevBtn"');

    // Fix catalog.html defer
    if(f === 'catalog.html') {
        content = content.replace('<script src="catalog-data.js" defer></script>', '<script src="catalog-data.js"></script>');
        content = content.replace('<script src="catalog2-data.js" defer></script>', '<script src="catalog2-data.js"></script>');
    }

    // Hero bg flip support in index.html
    if (f === 'index.html') {
        const oldHero = `<section class="hero" style="background-image: url('images/hero image.png'); background-size: cover; background-position: center; background-repeat: no-repeat;">`;
        const newHero = `<section class="hero">\n        <div class="hero-bg" style="position: absolute; top:0; left:0; width:100%; height:100%; background-image: url('images/hero image.png'); background-size: cover; background-position: center; background-repeat: no-repeat; z-index: 0; transition: transform 0.3s ease;"></div>`;
        content = content.replace(oldHero, newHero);
    }

    fs.writeFileSync(f, content);
});

// 3. Add RTL CSS to style.css
let css = fs.readFileSync('style.css', 'utf8');
if(!css.includes('html[dir="rtl"] .hero-bg')) {
    css += `\n\n/* RTL Hero Background Flip */\nhtml[dir="rtl"] .hero-bg {\n    transform: scaleX(-1);\n}\n`;
    fs.writeFileSync('style.css', css);
}

console.log("Fixes applied successfully!");
