const fs = require('fs');
const path = require('path');

const userMapping = {
  "katalog/اكياس غير مطبوعة (11) black.png": "black",
  "katalog/اكياس غير مطبوعة (17) black.png": "black",
  "katalog/اكياس غير مطبوعة (19) black.png": "black",
  "katalog/اكياس غير مطبوعة (30) black.png": "black",
  "katalog/اكياس غير مطبوعة (31) black.png": "black",
  "katalog/اكياس غير مطبوعة (6) brown.png": "brown",
  "katalog/اكياس غير مطبوعة (7) brown.png": "brown",
  "katalog/اكياس غير مطبوعة (31) gold.png": "gold",
  "katalog/اكياس غير مطبوعة (34) gold.png": "gold",
  "katalog/اكياس غير مطبوعة (35) gold.png": "gold",
  "katalog/اكياس غير مطبوعة (36) gold.png": "gold",
  "katalog/اكياس غير مطبوعة (37) gold.png": "gold",
  "katalog/اكياس غير مطبوعة (32) white silver.png": "white_silver_cream",
  "katalog/اكياس غير مطبوعة (33) white silver.png": "white_silver_cream",
  "katalog/اكياس غير مطبوعة (34) white silver.png": "white_silver_cream",
  "katalog/اكياس غير مطبوعة (35) white silver.png": "white_silver_cream",
  "katalog/اكياس غير مطبوعة (36) white silver.png": "white_silver_cream",
  "katalog/اكياس غير مطبوعة (37) white silver.png": "white_silver_cream",
  "katalog/اكياس غير مطبوعة (38) white silver.png": "white_silver_cream",
  "katalog/اكياس غير مطبوعة (39) white silver.png": "white_silver_cream",
  "katalog/اكياس غير مطبوعة (40) white silver.png": "white_silver_cream",
  "katalog/اكياس غير مطبوعة (41) white silver.png": "white_silver_cream",
  "katalog/اكياس غير مطبوعة (42) white silver.png": "white_silver_cream",
  "katalog/اكياس غير مطبوعة (32) see through.png": "white_silver_cream",
  "katalog/اكياس غير مطبوعة (33) see through.png": "transparent",
  "katalog/اكياس غير مطبوعة (36) see through.png": "transparent",
  "katalog/اكياس غير مطبوعة (37) see through.png": "transparent",
  "katalog/اكياس غير مطبوعة (38) see through.png": "transparent",
  "katalog/اكياس غير مطبوعة (39) see through.png": "transparent",
  "katalog/اكياس غير مطبوعة (10).jpeg": "standard",
  "katalog2/اكياس غير مطبوعة (8) brown.jpeg": "brown",
  "katalog2/اكياس مطبوعة (1).jpeg": "white_silver_cream",
  "katalog2/اكياس مطبوعة (22).jpeg": "white_silver_cream",
  "katalog2/اكياس مطبوعة (23).jpeg": "white_silver_cream",
  "katalog2/اكياس مطبوعة (24).jpeg": "white_silver_cream",
  "katalog2/اكياس مطبوعة (25).jpeg": "white_silver_cream",
  "katalog2/اكياس مطبوعة (26).jpeg": "brown",
  "katalog2/اكياس مطبوعة (27).jpeg": "white_silver_cream",
  "katalog2/اكياس مطبوعة (28).jpeg": "white_silver_cream",
  "katalog2/اكياس مطبوعة (29).jpeg": "white_silver_cream",
  "katalog2/اكياس مطبوعة (30).jpeg": "brown",
  "katalog2/اكياس مطبوعة (31).jpeg": "brown",
  "katalog2/اكياس مطبوعة (32).jpeg": "white_silver_cream",
  "katalog2/اكياس مطبوعة (33).jpeg": "brown",
  "katalog2/اكياس مطبوعة (34).jpeg": "white_silver_cream",
  "katalog2/اكياس مطبوعة (35).jpeg": "brown",
  "katalog2/اكياس مطبوعة (36).jpeg": "brown",
  "katalog2/اكياس مطبوعة (37).jpeg": "white_silver_cream",
  "katalog2/اكياس مطبوعة (38).jpeg": "white_silver_cream",
  "katalog2/اكياس مطبوعة (39).jpeg": "white_silver_cream",
  "katalog2/اكياس مطبوعة (40).jpeg": "white_silver_cream",
  "katalog2/اكياس مطبوعة (41).jpeg": "white_silver_cream",
  "katalog2/اكياس مطبوعة (42).jpeg": "white_silver_cream",
  "katalog2/اكياس مطبوعة (43).jpeg": "white_silver_cream",
  "katalog2/اكياس مطبوعة (44).jpeg": "white_silver_cream",
  "katalog2/اكياس مطبوعة (45).jpeg": "white_silver_cream",
  "katalog2/اكياس مطبوعة (46).jpeg": "white_silver_cream",
  "katalog2/اكياس مطبوعة (47).jpeg": "white_silver_cream",
  "katalog2/اكياس مطبوعة (48).jpeg": "white_silver_cream",
  "katalog2/اكياس مطبوعة (49).jpeg": "white_silver_cream",
  "katalog2/اكياس مطبوعة (50).jpeg": "white_silver_cream",
  "katalog2/اكياس مطبوعة (51).jpeg": "white_silver_cream",
  "katalog2/اكياس مطبوعة (52).jpeg": "white_silver_cream",
  "katalog2/اكياس مطبوعة (53).jpeg": "white_silver_cream",
  "katalog2/اكياس مطبوعة (54).jpeg": "white_silver_cream",
  "katalog2/اكياس مطبوعة (55).jpeg": "brown",
  "katalog2/اكياس مطبوعة (56).jpeg": "brown",
  "katalog2/اكياس مطبوعة (57).jpeg": "black",
  "katalog2/اكياس مطبوعة (58).jpeg": "black",
  "katalog2/اكياس مطبوعة (59).jpeg": "white_silver_cream",
  "katalog2/اكياس مطبوعة (60).jpeg": "white_silver_cream",
  "katalog2/اكياس مطبوعة (61).jpeg": "black",
  "katalog2/اكياس مطبوعة (62).jpeg": "black",
  "katalog2/اكياس مطبوعة (63).jpeg": "black",
  "katalog2/اكياس مطبوعة (64).jpeg": "white_silver_cream",
  "katalog2/اكياس مطبوعة (65).jpeg": "white_silver_cream"
};

let cat1 = fs.readFileSync('catalog-data.js', 'utf8');
let cat2 = fs.readFileSync('catalog2-data.js', 'utf8');

for (const [oldPath, color] of Object.entries(userMapping)) {
    const suffix = "_" + color;
    
    const parsed = path.parse(oldPath);
    const newName = parsed.name + suffix + parsed.ext;
    const newPath = path.join(parsed.dir, newName).replace(/\\/g, '/');

    // Rename file if it exists
    if (fs.existsSync(oldPath)) {
        fs.renameSync(oldPath, newPath);
        console.log(`Renamed: ${oldPath} -> ${newPath}`);
    } else {
        console.log(`File not found, skipping rename: ${oldPath}`);
    }

    // Replace exactly the old path string with the new path string in both data files
    cat1 = cat1.split(`"${oldPath}"`).join(`"${newPath}"`);
    cat2 = cat2.split(`"${oldPath}"`).join(`"${newPath}"`);
}

fs.writeFileSync('catalog-data.js', cat1);
fs.writeFileSync('catalog2-data.js', cat2);

console.log("Finished updating files and catalog references.");
