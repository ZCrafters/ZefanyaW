document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const closeMenu = document.getElementById('close-menu');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (!menuToggle || !mobileMenu) return;
    
    const closeMenuFunc = () => {
        mobileMenu.classList.add('translate-x-full');
    };
    
    const openMenuFunc = () => {
        mobileMenu.classList.remove('translate-x-full');
    };
    
    // Toggle mobile menu with smooth animation
    menuToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        const isOpen = !mobileMenu.classList.contains('translate-x-full');
        if (isOpen) {
            closeMenuFunc();
        } else {
            openMenuFunc();
        }
    });
    
    // Close menu when clicking the close button
    if (closeMenu) {
        closeMenu.addEventListener('click', closeMenuFunc);
    }
    
    // Close menu when clicking outside (optimized with passive listener)
    document.addEventListener('click', (e) => {
        if (!mobileMenu.contains(e.target) && 
            !menuToggle.contains(e.target) && 
            !mobileMenu.classList.contains('translate-x-full')) {
            closeMenuFunc();
        }
    }, { passive: true });
    
    // Use event delegation for nav links
    mobileMenu.addEventListener('click', (e) => {
        if (e.target.tagName === 'A') {
            setTimeout(closeMenuFunc, 300); // Smooth close after click
        }
    });
    
    // Close on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !mobileMenu.classList.contains('translate-x-full')) {
            closeMenuFunc();
        }
    });
});
