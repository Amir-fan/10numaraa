// Initialize AOS if it exists
if (typeof AOS !== 'undefined') {
    AOS.init();
}

// (Mobile menu logic is initialized at the bottom of this file)

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

// Pagination System
function initializePagination() {
    const currentPage = getCurrentPageNumber();
    const totalPages = 5; // We have 5 pages total
    
    console.log('Initializing pagination - Current page:', currentPage, 'Total pages:', totalPages);
    
    // Update pagination links with proper active states
    updatePaginationLinks(currentPage, totalPages);
    
    // Add smooth scrolling to top when changing pages
    addPaginationSmoothScroll();
    
    // Add keyboard navigation
    addPaginationKeyboardNav();
}

function getCurrentPageNumber() {
    const currentPath = window.location.pathname;
    const fileName = currentPath.split('/').pop();
    
    switch(fileName) {
        case 'products.html':
        case '':
        case 'index.html':
            return 1;
        case 'page1.html':
            return 2;
        case 'page2.html':
            return 3;
        case 'page3.html':
            return 4;
        case 'page4.html':
            return 5;
        default:
            return 1;
    }
}

function updatePaginationLinks(currentPage, totalPages) {
    const paginationContainer = document.querySelector('.pagination');
    if (!paginationContainer) {
        console.error('Pagination container not found!');
        return;
    }
    
    console.log('Updating pagination links for page:', currentPage);
    
    // Clear existing pagination (including fallback static links)
    paginationContainer.innerHTML = '';
    
    // Add previous button (if not on first page)
    if (currentPage > 1) {
        const prevLink = createPaginationLink(getPageUrl(currentPage - 1), '‹', 'prev');
        paginationContainer.appendChild(prevLink);
    }
    
    // Add page numbers
    for (let i = 1; i <= totalPages; i++) {
        const pageLink = createPaginationLink(getPageUrl(i), i.toString(), i === currentPage ? 'active' : '');
        paginationContainer.appendChild(pageLink);
    }
    
    // Add next button (if not on last page)
    if (currentPage < totalPages) {
        const nextLink = createPaginationLink(getPageUrl(currentPage + 1), '›', 'next');
        paginationContainer.appendChild(nextLink);
    }
    
    console.log('Pagination updated with', paginationContainer.children.length, 'links');
}

function createPaginationLink(href, text, className = '') {
    const link = document.createElement('a');
    link.href = href;
    link.textContent = text;
    if (className) {
        link.className = className;
    }
    
    // Add click event for smooth transition
    link.addEventListener('click', function(e) {
        e.preventDefault();
        navigateToPage(href);
    });
    
    return link;
}

function getPageUrl(pageNumber) {
    switch(pageNumber) {
        case 1:
            return 'products.html';
        case 2:
            return 'page1.html';
        case 3:
            return 'page2.html';
        case 4:
            return 'page3.html';
        case 5:
            return 'page4.html';
        default:
            return 'products.html';
    }
}

function navigateToPage(url) {
    // Add loading animation
    const loader = document.querySelector('.loader');
    if (loader) {
        loader.style.display = 'flex';
        loader.classList.remove('fade-out');
    }
    
    // Smooth transition effect
    document.body.style.opacity = '0.7';
    document.body.style.transition = 'opacity 0.3s ease';
    
    // Navigate after a short delay for smooth effect
    setTimeout(() => {
        window.location.href = url;
    }, 300);
}

function addPaginationSmoothScroll() {
    // Scroll to top smoothly when pagination is clicked
    const paginationLinks = document.querySelectorAll('.pagination a');
    paginationLinks.forEach(link => {
        link.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    });
}

function addPaginationKeyboardNav() {
    document.addEventListener('keydown', function(e) {
        const currentPage = getCurrentPageNumber();
        
        // Left arrow - previous page
        if (e.key === 'ArrowLeft' && currentPage > 1) {
            e.preventDefault();
            navigateToPage(getPageUrl(currentPage - 1));
        }
        
        // Right arrow - next page
        if (e.key === 'ArrowRight' && currentPage < 5) {
            e.preventDefault();
            navigateToPage(getPageUrl(currentPage + 1));
        }
        
        // Number keys 1-5 for direct page navigation
        if (e.key >= '1' && e.key <= '5') {
            e.preventDefault();
            const pageNum = parseInt(e.key);
            if (pageNum !== currentPage) {
                navigateToPage(getPageUrl(pageNum));
            }
        }
    });
}

// Enhanced Lightbox with pagination awareness
function initializeEnhancedLightbox() {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');
    const closeBtn = document.querySelector('.close-lightbox');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    if (!lightbox || !lightboxImg) return;
    
    let currentImageIndex = 0;
    const galleryImages = document.querySelectorAll('.gallery-item img');
    
    // Open lightbox
    galleryImages.forEach((img, index) => {
        img.style.cursor = 'pointer';
        img.addEventListener('click', () => {
            currentImageIndex = index;
            updateLightbox();
            lightbox.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        });
    });
    
    // Close lightbox
    if (closeBtn) {
        closeBtn.addEventListener('click', closeLightbox);
    }
    
    // Close on outside click
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });
    
    // Previous image
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
            updateLightbox();
        });
    }
    
    // Next image
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
            updateLightbox();
        });
    }
    
    // Update lightbox content
    function updateLightbox() {
        const currentImg = galleryImages[currentImageIndex];
        lightboxImg.src = currentImg.src;
        lightboxCaption.textContent = currentImg.alt;
        
        // Add loading animation
        lightboxImg.style.opacity = '0';
        lightboxImg.onload = function() {
            lightboxImg.style.transition = 'opacity 0.3s ease';
            lightboxImg.style.opacity = '1';
        };
    }
    
    function closeLightbox() {
        lightbox.style.display = 'none';
        document.body.style.overflow = '';
    }
    
    // Keyboard navigation for lightbox
    document.addEventListener('keydown', (e) => {
        if (lightbox.style.display === 'flex') {
            if (e.key === 'ArrowLeft') {
                currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
                updateLightbox();
            } else if (e.key === 'ArrowRight') {
                currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
                updateLightbox();
            } else if (e.key === 'Escape') {
                closeLightbox();
            }
        }
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM Content Loaded - Initializing components...');
    
    // Initialize pagination with a small delay to ensure DOM is ready
    setTimeout(() => {
        initializePagination();
    }, 100);
    
    // Initialize enhanced lightbox
    initializeEnhancedLightbox();
    
    // Initialize image error handling
    initializeImageErrorHandling();
    
    // Add loading animation
    window.addEventListener('load', function() {
        const loader = document.querySelector('.loader');
        if (loader) {
            loader.classList.add('fade-out');
            setTimeout(() => {
                loader.style.display = 'none';
            }, 500);
        }
        
        // Restore body opacity
        document.body.style.opacity = '1';
    });
    

    
    // Navbar scroll effect
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
});

// Image Error Handling
function initializeImageErrorHandling() {
    const galleryImages = document.querySelectorAll('.gallery-item img');
    
    galleryImages.forEach(img => {
        img.addEventListener('error', function() {
            // Create a placeholder image with text
            this.style.display = 'none';
            
            const placeholder = document.createElement('div');
            placeholder.className = 'image-placeholder';
            placeholder.innerHTML = `
                <div class="placeholder-content">
                    <i class="fas fa-image"></i>
                    <p>Ürün Görseli</p>
                    <small>Yüklenemedi</small>
                </div>
            `;
            
            // Insert placeholder after the image
            this.parentNode.insertBefore(placeholder, this.nextSibling);
            
            // Add click handler to placeholder for lightbox
            placeholder.style.cursor = 'pointer';
            placeholder.addEventListener('click', function() {
                // Show a message instead of opening lightbox
                showImageErrorMessage();
            });
        });
        
        // Add loading state
        img.addEventListener('loadstart', function() {
            this.style.opacity = '0.5';
        });
        
        img.addEventListener('load', function() {
            this.style.opacity = '1';
            this.style.transition = 'opacity 0.3s ease';
        });
    });
}

function showImageErrorMessage() {
    // Create a simple error message
    const message = document.createElement('div');
    message.className = 'error-message';
    message.innerHTML = `
        <div class="error-content">
            <i class="fas fa-exclamation-triangle"></i>
            <p>Bu ürün görseli şu anda mevcut değil</p>
            <button onclick="this.parentElement.parentElement.remove()">Tamam</button>
        </div>
    `;
    
    document.body.appendChild(message);
    
    // Auto remove after 3 seconds
    setTimeout(() => {
        if (message.parentNode) {
            message.remove();
        }
    }, 3000);
}

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
