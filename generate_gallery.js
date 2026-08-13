const fs = require('fs');

const cat1 = fs.readFileSync('catalog-data.js', 'utf8');
const cat2 = fs.readFileSync('catalog2-data.js', 'utf8');

const matches1 = [...cat1.matchAll(/"src":\s*"([^"]+)"/g)].map(m => m[1]);
const matches2 = [...cat2.matchAll(/"src":\s*"([^"]+)"/g)].map(m => m[1]);
const allImages = [...new Set([...matches1, ...matches2])];

let html = `<!DOCTYPE html>
<html>
<head>
<style>
  body { background: #888; margin: 0; padding: 20px; font-family: sans-serif; }
  .grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; }
  .card { background: #fff; padding: 10px; border-radius: 8px; text-align: center; }
  img { max-width: 100%; height: 200px; object-fit: contain; background: #ddd; }
  .filename { font-size: 12px; margin-top: 10px; word-break: break-all; }
  /* Dropdown for quick categorization by subagent */
  select { margin-top: 5px; width: 100%; padding: 5px; }
</style>
</head>
<body>
  <h1>Image Categorization</h1>
  <button id="exportBtn" style="padding:10px; margin-bottom:20px; font-size:16px;">Export JSON</button>
  <textarea id="output" style="width:100%; height:100px; display:none; margin-bottom:20px;"></textarea>
  <div class="grid" id="grid">
`;

allImages.forEach((src, idx) => {
    html += `
    <div class="card" data-src="${src}">
      <img src="${src}" loading="lazy">
      <div class="filename">${src}</div>
      <select class="cat-select" data-src="${src}">
        <option value="unassigned">-- Select --</option>
        <option value="transparent">transparent</option>
        <option value="black">black</option>
        <option value="white_silver_cream">white/silver/cream</option>
        <option value="brown">brown</option>
        <option value="gold">gold</option>
        <option value="standard">Standard</option>
      </select>
    </div>`;
});

html += `
  </div>
  <script>
    document.getElementById('exportBtn').addEventListener('click', () => {
      const selects = document.querySelectorAll('.cat-select');
      const results = {};
      selects.forEach(sel => {
        if (sel.value !== 'unassigned') {
          results[sel.dataset.src] = sel.value;
        }
      });
      document.getElementById('output').value = JSON.stringify(results, null, 2);
      document.getElementById('output').style.display = 'block';
    });
  </script>
</body>
</html>`;

fs.writeFileSync('catalog-gallery.html', html);
console.log('Gallery generated at catalog-gallery.html with ' + allImages.length + ' images.');
