const fs = require('fs');

const langSelectorHTML = `
                <div class="custom-lang-selector">
                    <div class="lang-btn" onclick="toggleLangMenu(this, event)">
                        <i class="fas fa-globe"></i> <span class="current-lang">TR</span> <i class="fas fa-chevron-down drop-icon" style="font-size: 10px; margin-left:4px;"></i>
                    </div>
                    <ul class="lang-menu">
                        <li onclick="selectLanguage('tr')">Türkçe</li>
                        <li onclick="selectLanguage('en')">English</li>
                        <li onclick="selectLanguage('ar')">العربية</li>
                    </ul>
                </div>
`;

const htmlFiles = ['index.html', 'catalog.html', 'products.html', 'contact.html'];
for (const file of htmlFiles) {
    let content = fs.readFileSync(file, 'utf8');
    
    // 1. Insert the lang selector back into .nav-actions, right before <!-- Mobile Menu Toggle -->
    if (content.includes('<div class="nav-actions"') && !content.includes('<i class="fas fa-chevron-down drop-icon"')) {
        content = content.replace('<!-- Mobile Menu Toggle -->', langSelectorHTML + '\n                <!-- Mobile Menu Toggle -->');
    }

    // 2. Remove the inner lang selector from the mobile menu (the one that has style="display:block; margin-top:24px;")
    // We can just use a regex that specifically looks for the style attribute
    const innerLangRegex = /<div class="custom-lang-selector" style="display:block; margin-top:24px;">[\s\S]*?<\/ul>\s*<\/div>/g;
    content = content.replace(innerLangRegex, '');
    
    fs.writeFileSync(file, content);
}
console.log("Navbar lang selector fixed.");
