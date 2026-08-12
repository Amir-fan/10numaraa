const fs = require('fs');

// 1. Update index.html image
let index = fs.readFileSync('index.html', 'utf8');
index = index.replace(
    '<img src="katalog2/اكياس مطبوعة (1).png"',
    '<img src="katalog2/اكياس مطبوعة (1).jpeg"'
);
fs.writeFileSync('index.html', index);

// 2. Remove toggleMenu JS duplicate listener
let js = fs.readFileSync('script.js', 'utf8');
// The listener is between 423-448 roughly. Let's use regex to remove it.
// It looks like:
/*
    // Enhanced mobile menu functionality
    const mobileMenuToggle = document.querySelector('.menu-toggle');
    const mobileMenu = document.getElementById('mobileMenu');
    
    if (mobileMenuToggle && mobileMenu) {
        ...
        });
    }
*/
const regexMobileMenuListener = /\/\/\s*Enhanced mobile menu functionality[\s\S]*?if\s*\(mobileMenuToggle\s*&&\s*mobileMenu\)\s*\{[\s\S]*?\}\s*\}\s*\n/g;
js = js.replace(regexMobileMenuListener, '');
fs.writeFileSync('script.js', js);

// 3. Fix nav-actions grouping and remove internal lang selector
const htmlFiles = ['index.html', 'catalog.html', 'products.html', 'contact.html'];
for (const file of htmlFiles) {
    let content = fs.readFileSync(file, 'utf8');
    
    // Group custom-lang-selector and menu-toggle
    const navRegex = /(<div class="custom-lang-selector">[\s\S]*?<\/ul>\s*<\/div>\s*<!-- Mobile Menu Toggle -->\s*<div class="menu-toggle"[^>]*>[\s\S]*?<\/div>)/;
    content = content.replace(navRegex, (match) => {
        return `<div class="nav-actions" style="display: flex; align-items: center; gap: 16px;">\n                ${match}\n                </div>`;
    });
    
    // Remove the inner custom-lang-selector from mobile menu
    const innerLangRegex = /<div class="custom-lang-selector"[^>]*>[\s\S]*?<\/ul>\s*<\/div>/;
    content = content.replace(innerLangRegex, '');
    
    fs.writeFileSync(file, content);
}

// 4. Improve style.css mobile responsiveness
let css = fs.readFileSync('style.css', 'utf8');

// Ensure custom-lang-selector is not hidden on mobile, but nav ul is.
css = css.replace(
    /@media \(max-width: 1024px\) \{\s*nav ul \{ display: none; \}\s*\.custom-lang-selector \{ display: none; \}\s*\.menu-toggle \{ display: block; \}\s*\}/g,
    `@media (max-width: 1024px) {
    nav { display: none; }
    .menu-toggle { display: block; }
}`
);

// Append robust mobile styling for headers and grids
const mobileFixes = `

/* =========================================
   COMPREHENSIVE MOBILE FIXES
========================================= */

@media (max-width: 1024px) {
    .why-us-header {
        flex-direction: column;
        align-items: flex-start;
        gap: 24px;
    }
    .features-grid {
        grid-template-columns: repeat(2, 1fr);
    }
    .contact-layout {
        grid-template-columns: 1fr;
    }
    .contact-stack {
        order: 2;
    }
    .contact-map {
        order: 1;
        min-height: 300px;
    }
    .hero {
        padding-top: 120px;
    }
}

@media (max-width: 768px) {
    .features-grid {
        grid-template-columns: 1fr;
    }
    .nav-inner {
        padding: 12px 20px;
    }
    .logo img {
        height: 36px;
    }
    .heading-xl { font-size: 36px; line-height: 1.2; }
    .heading-lg { font-size: 32px; line-height: 1.2; }
    .heading-md { font-size: 28px; line-height: 1.2; }
    .text-lg { font-size: 16px; }
    
    .section-padding { padding: 60px 0; }
    .why-us-header { margin-bottom: 40px; }
    .products-header { margin-bottom: 40px; }
    .filters { flex-direction: column; align-items: stretch; }
    .filter-btn { text-align: center; }
    .color-divider { flex-direction: column; align-items: flex-start; gap: 8px; }
    .carousel-wrapper { padding: 0 16px; }
    .product-carousel { scroll-snap-type: x mandatory; }
    .product-card { scroll-snap-align: start; }
}

/* Fix mobile menu internal spacing */
.mobile-menu {
    padding: 80px 40px 40px !important;
}

/* Stop image overflow */
img {
    max-width: 100%;
    height: auto;
}

/* Ensure horizontal scrolling elements don't break layout */
.product-carousel {
    display: flex;
    overflow-x: auto;
    gap: 24px;
    padding-bottom: 24px;
    scrollbar-width: none;
}
.product-carousel::-webkit-scrollbar {
    display: none;
}
.product-card {
    min-width: 280px;
    flex-shrink: 0;
}
`;

css += mobileFixes;

fs.writeFileSync('style.css', css);

console.log("Mobile UI Optimization and Fixes Applied Successfully");
