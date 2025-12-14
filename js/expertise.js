document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    const overlay = document.getElementById('overlay');
    const mobileMenuButton = document.querySelector('.md-hide button');

    if (!mobileMenu) return;

    // Optimized toggle with smooth transitions
    const toggleMobileMenu = () => {
        const isHidden = mobileMenu.classList.contains('hidden');
        mobileMenu.classList.toggle('hidden');
        overlay?.classList.toggle('hidden');
        document.body.classList.toggle('overflow-hidden');
        
        // Add smooth fade-in animation
        if (isHidden) {
            mobileMenu.style.opacity = '0';
            requestAnimationFrame(() => {
                mobileMenu.style.transition = 'opacity 0.3s ease-in-out';
                mobileMenu.style.opacity = '1';
            });
        }
    };

    // Use event delegation for better performance
    [menuToggle, mobileMenuButton, overlay].forEach(element => {
        element?.addEventListener('click', toggleMobileMenu, { passive: true });
    });

    // Event delegation for menu links
    mobileMenu.addEventListener('click', (e) => {
        if (e.target.tagName === 'A') {
            setTimeout(toggleMobileMenu, 250);
        }
    });
    
    // Close on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !mobileMenu.classList.contains('hidden')) {
            toggleMobileMenu();
        }
    });
});
