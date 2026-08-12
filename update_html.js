const fs = require('fs');
const files = ['index.html', 'catalog.html', 'products.html', 'contact.html'];

files.forEach(f => {
    let content = fs.readFileSync(f, 'utf8');
    
    // Titles
    if(f === 'index.html') content = content.replace('<title>10 Numara Ambalaj - Plastik Poşet Baskı</title>', '<title data-translate="page_title_home">10 Numara Ambalaj - Plastik Poşet Baskı</title>');
    if(f === 'catalog.html') content = content.replace('<title>10 Numara Ambalaj - Katalog</title>', '<title data-translate="page_title_catalog">10 Numara Ambalaj - Katalog</title>');
    if(f === 'products.html') content = content.replace('<title>Ürün Galerisi - 10 Numara Ambalaj</title>', '<title data-translate="page_title_products">Ürün Galerisi - 10 Numara Ambalaj</title>');
    if(f === 'contact.html') content = content.replace('<title>İletişim | 10 Numara Ambalaj</title>', '<title data-translate="page_title_contact">İletişim | 10 Numara Ambalaj</title>');

    // Shared elements
    content = content.replace(/<p>Mersin, Türkiye<\/p>/g, '<p data-translate="contact_city">Mersin, Türkiye</p>');
    content = content.replace(/<p>Pzt - Cts: 08:00 - 19:00<\/p>/g, '<p data-translate="work_hours_short">Pzt - Cts: 08:00 - 19:00</p>');
    
    // Developer Credit
    content = content.replace(/Fanari Labs - Tıkla ve İletişime Geç/g, '<span data-translate="fanari_btn">Fanari Labs - Tıkla ve İletişime Geç</span>');
    content = content.replace(/<h3([^>]*)>Fanari Labs<\/h3>/g, '<h3$1 data-translate="fanari_title">Fanari Labs</h3>');
    content = content.replace(/<p([^>]*)>Modern Web Teknolojileri ve Tasarım Ajansı<\/p>/g, '<p$1 data-translate="fanari_desc">Modern Web Teknolojileri ve Tasarım Ajansı</p>');

    // In contact page
    content = content.replace(/<h3>Mersin, Türkiye<\/h3>/g, '<h3 data-translate="contact_city">Mersin, Türkiye</h3>');

    fs.writeFileSync(f, content);
});

console.log("HTML files updated!");
