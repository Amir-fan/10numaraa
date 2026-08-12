const fs = require('fs');
const path = require('path');

const dir = 'c:\\Users\\PC\\Documents\\projects\\clients\\10numaraa-master';

const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

const desktopRegex = /<div class="language-selector">[\s\S]*?<\/select>\s*<\/div>/g;

const newHTML = `
            <div class="custom-lang-selector">
                <div class="lang-btn" onclick="toggleLangMenu(this, event)">
                    <i class="fas fa-globe"></i> <span class="current-lang">TR</span> <i class="fas fa-chevron-down drop-icon"></i>
                </div>
                <ul class="lang-menu">
                    <li onclick="selectLanguage('tr')">Türkçe</li>
                    <li onclick="selectLanguage('en')">English</li>
                    <li onclick="selectLanguage('ar')">العربية</li>
                </ul>
            </div>
`;

files.forEach(file => {
    let content = fs.readFileSync(path.join(dir, file), 'utf8');
    let original = content;
    content = content.replace(desktopRegex, newHTML.trim());
    if (content !== original) {
        fs.writeFileSync(path.join(dir, file), content);
        console.log('Updated ' + file);
    }
});
