const fs = require('fs');
let script = fs.readFileSync('script.js', 'utf8');

const additions = `

// Warm Premium Minimalism Additions
function toggleMenu() {
    const menu = document.getElementById('mobileMenu');
    const overlay = document.getElementById('overlay');
    if(menu.classList.contains('active')) {
        menu.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    } else {
        menu.classList.add('active');
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function toggleLangMenu(btn, e) {
    e.stopPropagation();
    const parent = btn.parentElement;
    parent.classList.toggle('open');
}

document.addEventListener('click', function(e) {
    const selectors = document.querySelectorAll('.custom-lang-selector.open');
    selectors.forEach(sel => sel.classList.remove('open'));
});

function scrollCarousel(direction) {
    const carousel = document.getElementById('productCarousel');
    if(carousel) {
        const scrollAmount = carousel.offsetWidth * 0.8;
        carousel.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const overlay = document.getElementById('overlay');
    if(overlay) {
        overlay.addEventListener('click', () => {
            document.getElementById('mobileMenu').classList.remove('active');
            overlay.classList.remove('active');
            document.body.style.overflow = '';
        });
    }
});


// Fanari Labs Dev Popup
document.addEventListener('DOMContentLoaded', () => {
    const devBtn = document.getElementById('fanariDevBtn');
    const devPopup = document.getElementById('devPopup');
    const closeDevPopup = document.getElementById('closeDevPopup');
    if(devBtn && devPopup && closeDevPopup) {
        devBtn.addEventListener('click', () => {
            devPopup.style.display = 'flex';
            // Small delay to allow display block to apply before opacity transition
            setTimeout(() => {
                devPopup.style.opacity = '1';
                devPopup.querySelector('.dev-popup-content').style.transform = 'translateY(0)';
            }, 10);
        });
        
        const closePopup = () => {
            devPopup.style.opacity = '0';
            devPopup.querySelector('.dev-popup-content').style.transform = 'translateY(20px)';
            setTimeout(() => {
                devPopup.style.display = 'none';
            }, 300);
        };
        
        closeDevPopup.addEventListener('click', closePopup);
        devPopup.addEventListener('click', (e) => {
            if (e.target === devPopup) closePopup();
        });
    }
});
`;

if(!script.includes('Warm Premium Minimalism Additions')) {
    fs.writeFileSync('script.js', script + additions);
}
console.log("Restored successfully");
