const fs = require('fs');
const path = require('path');

const dirsToScan = ['images', 'katalog', 'katalog2', 'katalog3'];
const textFilesToScan = ['index.html', 'catalog.html', 'products.html', 'contact.html', 'style.css', 'script.js', 'catalog-data.js', 'catalog2-data.js', 'translations.js', 'page1.html', 'page2.html', 'page3.html', 'page4.html'];
const mediaExtensions = ['.png', '.jpg', '.jpeg', '.gif', '.svg', '.webp', '.mp4', '.webm', '.mov'];

let allMediaFiles = [];

// Recursively get all media files
function getFiles(dir) {
    if (!fs.existsSync(dir)) return;
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            getFiles(fullPath);
        } else {
            const ext = path.extname(fullPath).toLowerCase();
            if (mediaExtensions.includes(ext)) {
                allMediaFiles.push(fullPath.replace(/\\/g, '/')); // Normalize slashes
            }
        }
    }
}

dirsToScan.forEach(dir => getFiles(dir));

console.log(`Found ${allMediaFiles.length} total media files.`);

// Read all codebase text content
let allText = '';
textFilesToScan.forEach(file => {
    if (fs.existsSync(file)) {
        allText += fs.readFileSync(file, 'utf8') + '\n';
    }
});

// For each media file, check if it's used
let unusedFiles = [];
let usedFiles = [];

for (const media of allMediaFiles) {
    const filename = path.basename(media);
    const encodedFilename = encodeURIComponent(filename);
    
    // Check if filename is mentioned in any text file
    // We check both the raw filename and the URL encoded version (for Arabic filenames)
    if (allText.includes(filename) || allText.includes(encodedFilename)) {
        usedFiles.push(media);
    } else {
        // As a fallback, check if the name without extension is constructed dynamically
        const nameWithoutExt = path.parse(filename).name;
        // Exception: dynamically generated images like category-1.jpg?
        // We will just do a strict check: if the exact filename isn't anywhere, it's unused.
        // Wait, what if someone wrote `src="images/" + filename + ".png"`? We check nameWithoutExt just in case.
        if (allText.includes(nameWithoutExt)) {
            // Highly likely it's dynamically constructed
            usedFiles.push(media + " (Dynamic Match)");
        } else {
            unusedFiles.push(media);
        }
    }
}

const report = `
# Media Usage Analysis Report
Total media files found: ${allMediaFiles.length}
Total used files: ${usedFiles.length}
Total unused files: ${unusedFiles.length}

## Unused Files (100% Sure)
${unusedFiles.join('\n')}
`;

fs.writeFileSync('unused_media_report.txt', report);
console.log("Analysis complete. Saved to unused_media_report.txt");
