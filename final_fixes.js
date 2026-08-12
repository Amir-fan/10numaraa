const fs = require('fs');

// Check for favicon
if (fs.existsSync('images/favicon.png')) {
    console.log('favicon.png exists');
} else if (fs.existsSync('images/favicon.ico')) {
    console.log('favicon.ico exists');
} else {
    console.log('No favicon found. Using logo-gold.png as favicon.');
}

// 1. Fix style.css for carousel arrows on mobile
let css = fs.readFileSync('style.css', 'utf8');
css = css.replace(
    /\.carousel-prev,\s*\.carousel-next\s*\{\s*display:\s*none;\s*\}/g,
    ''
);
// Add mobile specific sizing for arrows
css += `
@media (max-width: 1024px) {
    .carousel-prev, .carousel-next { display: flex !important; }
    .carousel-control { width: 36px; height: 36px; font-size: 14px; }
    .carousel-prev { left: 4px; }
    .carousel-next { right: 4px; }
}
`;
fs.writeFileSync('style.css', css);

// 2. Add close button and favicon to HTML files
const htmlFiles = ['index.html', 'catalog.html', 'products.html', 'contact.html', 'page1.html', 'page2.html', 'page3.html', 'page4.html'];
for (const file of htmlFiles) {
    if (!fs.existsSync(file)) continue;
    let content = fs.readFileSync(file, 'utf8');
    
    // Add favicon
    if (!content.includes('<link rel="icon"')) {
        content = content.replace('</head>', '    <link rel="icon" type="image/png" href="images/logo-gold.png">\n</head>');
    }
    
    // Add close button to mobile menu
    if (!content.includes('class="close-menu"')) {
        content = content.replace('<div class="mobile-menu" id="mobileMenu">', 
            '<div class="mobile-menu" id="mobileMenu">\n        <div class="close-menu" onclick="toggleMenu()" style="position: absolute; top: 24px; right: 24px; font-size: 28px; cursor: pointer; color: var(--text-primary); z-index: 10;"><i class="fas fa-times"></i></div>');
    }
    
    fs.writeFileSync(file, content);
}

// 3. Push to github
const { execSync } = require('child_process');
try {
    execSync('git add .');
    execSync('git commit -m "Fix mobile carousel arrows, add mobile menu close button, and add favicon"');
    execSync('git push');
    console.log('Successfully pushed to GitHub');
} catch(e) {
    console.log('Git error: ' + e.message);
}
