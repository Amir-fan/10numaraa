﻿// Initialize AOS
AOS.init();

// Set current language
let currentLanguage = localStorage.getItem('language') || 'tr';

// Make setLanguage function globally available
window.setLanguage = function(lang) {
    currentLanguage = lang;
    localStorage.setItem('language', lang);
    
    // Update HTML lang attribute
    document.documentElement.lang = lang;
    
    // Set text direction for Arabic
    if (lang === 'ar') {
        document.documentElement.dir = 'rtl';
    } else {
        document.documentElement.dir = 'ltr';
    }
    
    // Translate all elements with data-translate attribute
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (window.translations && window.translations[lang] && window.translations[lang][key]) {
            element.textContent = window.translations[lang][key];
        } else {
            console.warn(`Translation not found for key: ${key} in language: ${lang}`);
        }
    });
    
    // Update language selector
    const languageSelectors = document.querySelectorAll('.language-selector');
    languageSelectors.forEach(selector => {
        selector.value = lang;
    });
    
    // Update mobile menu items
    const mobileMenuItems = document.querySelectorAll('.mobile-menu span');
    mobileMenuItems.forEach(item => {
        const key = item.getAttribute('data-translate');
        if (window.translations && window.translations[lang] && window.translations[lang][key]) {
            item.textContent = window.translations[lang][key];
        }
    });
    
    console.log(`Language changed to: ${lang}`);
};

// Initialize translations on page load
document.addEventListener('DOMContentLoaded', function() {
    // Set initial language
    window.setLanguage(currentLanguage);
    
    // Add event listeners for language selector
    const languageSelectors = document.querySelectorAll('.language-selector');
    languageSelectors.forEach(selector => {
        selector.addEventListener('change', function() {
            window.setLanguage(this.value);
        });
    });
    
    // Mobile menu toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    if (mobileMenuToggle && mobileMenu) {
        mobileMenuToggle.addEventListener('click', function() {
            mobileMenu.classList.toggle('active');
        });
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!mobileMenu.contains(event.target) && !mobileMenuToggle.contains(event.target)) {
                mobileMenu.classList.remove('active');
            }
        });
        
        // Close mobile menu when pressing escape key
        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape') {
                mobileMenu.classList.remove('active');
            }
        });
    }
});

// Sidebar functionality
function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    const overlay = document.getElementById("overlay");
    const body = document.body;

    if (sidebar.style.left === "0px") {
        sidebar.style.left = "-250px";
        overlay.classList.remove("active");
        body.style.overflow = "";
    } else {
        sidebar.style.left = "0px";
        overlay.classList.add("active");
        body.style.overflow = "hidden";
    }
}

// Close sidebar when clicking outside
document.addEventListener("DOMContentLoaded", function() {
    const overlay = document.getElementById("overlay");
    if (overlay) {
        overlay.addEventListener("click", function() {
            const sidebar = document.getElementById("sidebar");
            const body = document.body;

            sidebar.style.left = "-250px";
            overlay.classList.remove("active");
            body.style.overflow = "";
        });
    }
});

// Close sidebar on escape key
document.addEventListener("keydown", function(e) {
    if (e.key === "Escape") {
        const sidebar = document.getElementById("sidebar");
        const overlay = document.getElementById("overlay");
        const body = document.body;

        if (sidebar && sidebar.style.left === "0px") {
            sidebar.style.left = "-250px";
            overlay.classList.remove("active");
            body.style.overflow = "";
        }
    }
});

// Loading Animation
window.addEventListener('load', function() {
    const loader = document.querySelector('.loader');
    if (loader) {
        loader.classList.add('fade-out');
        setTimeout(() => {
            loader.style.display = 'none';
        }, 500);
    }
});

// Navbar Scroll Effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
});

// Lightbox functionality
document.addEventListener("DOMContentLoaded", function() {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');
    const closeLightbox = document.querySelector('.close-lightbox');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const galleryImages = document.querySelectorAll('.gallery-img');

    if (lightbox && lightboxImg && lightboxCaption && closeLightbox && prevBtn && nextBtn && galleryImages.length > 0) {
        let currentImageIndex = 0;

        // Open lightbox
        galleryImages.forEach((img, index) => {
            img.addEventListener('click', () => {
                lightbox.style.display = 'flex';
                lightboxImg.src = img.src;
                lightboxCaption.textContent = img.alt;
                currentImageIndex = index;
            });
        });

        // Close lightbox
        closeLightbox.addEventListener('click', () => {
            lightbox.style.display = 'none';
        });

        // Close lightbox when clicking outside
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                lightbox.style.display = 'none';
            }
        });

        // Previous image
        prevBtn.addEventListener('click', () => {
            currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
            lightboxImg.src = galleryImages[currentImageIndex].src;
            lightboxCaption.textContent = galleryImages[currentImageIndex].alt;
        });

        // Next image
        nextBtn.addEventListener('click', () => {
            currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
            lightboxImg.src = galleryImages[currentImageIndex].src;
            lightboxCaption.textContent = galleryImages[currentImageIndex].alt;
        });

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (lightbox.style.display === 'flex') {
                if (e.key === 'ArrowLeft') {
                    prevBtn.click();
                } else if (e.key === 'ArrowRight') {
                    nextBtn.click();
                } else if (e.key === 'Escape') {
                    closeLightbox.click();
                }
            }
        });
    }
});