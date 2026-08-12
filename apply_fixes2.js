const fs = require('fs');

// 1. Revert Hero Arabic RTL flip
let css = fs.readFileSync('style.css', 'utf8');
css = css.replace(/\/\* RTL Hero Background Flip \*\/\nhtml\[dir="rtl"\] \.hero-bg \{\n    transform: scaleX\(-1\);\n\}\n/g, '');
fs.writeFileSync('style.css', css);

// 2. Fix index.html
let html = fs.readFileSync('index.html', 'utf8');

// Replace High Print Quality image
html = html.replace(
    '<img src="images/product-13.png" alt="Yüksek Baskı Kalitesi" class="feature-image" style="object-fit: contain; padding: 16px; background: var(--bg-main);">',
    '<img src="katalog2/اكياس مطبوعة (1).png" alt="Yüksek Baskı Kalitesi" class="feature-image" style="object-fit: contain; padding: 16px; background: var(--bg-main);">'
);

// Fix Birlikte translation
html = html.replace(
    '<h2 class="heading-lg" style="margin-bottom:32px;">Birlikte<br><span style="color:var(--brand-yellow);" data-translate="produce_together">üretelim.</span></h2>',
    '<h2 class="heading-lg" style="margin-bottom:32px;" data-translate="produce_together_html">Birlikte<br><span style="color:var(--brand-yellow);">üretelim.</span></h2>'
);

// Fix Carousel items
const oldCarouselRegex = /<div class="product-carousel" id="productCarousel">[\s\S]*?<\/div>\s*<\/div>\s*<div class="credibility-strip"/;
const newCarousel = `<div class="product-carousel" id="productCarousel">
                    <div class="product-card">
                        <div class="image-wrapper"><img src="images/product-0.png" alt="Baskılı Poşet"></div>
                        <h3 class="product-title" data-translate="printed_bag">Baskılı Poşet</h3>
                        <p class="product-desc" data-translate="printed_bag_desc">Yüksek kaliteli baskı ile markanızı her yerde öne çıkarın.</p>
                        <span class="product-category" data-translate="cat_market">Market / Mağaza</span>
                    </div>
                    <div class="product-card">
                        <div class="image-wrapper"><img src="images/product-1.png" alt="Baharat Ambalajı"></div>
                        <h3 class="product-title" data-translate="spice_pack">Baharat Ambalajı</h3>
                        <p class="product-desc" data-translate="spice_pack_desc">Aromayı koruyan özel laminasyonlu baharat ambalajları.</p>
                        <span class="product-category" data-translate="cat_spice">Baharat</span>
                    </div>
                    <div class="product-card">
                        <div class="image-wrapper"><img src="images/product-2.png" alt="Kuruyemiş Ambalajı"></div>
                        <h3 class="product-title" data-translate="nuts_pack">Kuruyemiş Ambalajı</h3>
                        <p class="product-desc" data-translate="nuts_pack_desc">Dayanıklı doypack ambalajlarla tazeliği ve çıtırlığı korur.</p>
                        <span class="product-category" data-translate="cat_nuts">Kuruyemiş</span>
                    </div>
                    <div class="product-card">
                        <div class="image-wrapper"><img src="images/product-3.png" alt="Tohum Ambalajı"></div>
                        <h3 class="product-title" data-translate="seed_pack">Tohum Ambalajı</h3>
                        <p class="product-desc" data-translate="seed_pack_desc">Gıda güvenliğine uygun malzemelerle uzun ömürlü koruma sağlar.</p>
                        <span class="product-category" data-translate="cat_seed">Tohum</span>
                    </div>
                </div>
            </div>
            
            <div class="credibility-strip"`;

html = html.replace(oldCarouselRegex, newCarousel);
fs.writeFileSync('index.html', html);


// 3. Add produce_together_html to translations.js
let trans = fs.readFileSync('translations.js', 'utf8');

trans = trans.replace(
    /produce_together: "üretelim.",/g,
    'produce_together: "üretelim.",\n        produce_together_html: "Birlikte<br><span style=\\"color:var(--brand-yellow);\\">üretelim.</span>",'
);

trans = trans.replace(
    /produce_together: "together.",/g,
    'produce_together: "together.",\n        produce_together_html: "Let\'s produce<br><span style=\\"color:var(--brand-yellow);\\">together.</span>",'
);

trans = trans.replace(
    /produce_together: "معاً.",/g,
    'produce_together: "معاً.",\n        produce_together_html: "لننتج<br><span style=\\"color:var(--brand-yellow);\\">معاً.</span>",'
);

fs.writeFileSync('translations.js', trans);

console.log("Fixes applied successfully.");
