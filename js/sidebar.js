document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menuToggle');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    const body = document.body;
    const menuLines = document.querySelectorAll('.menu-line');

    // Toggle sidebar
    function toggleSidebar() {
        const isOpen = sidebar.classList.contains('open');
        sidebar.classList.toggle('open');
        overlay.classList.toggle('open');
        menuToggle.classList.toggle('open');
        body.classList.toggle('sidebar-open');

        // Toggle aria-expanded for accessibility
        menuToggle.setAttribute('aria-expanded', !isOpen);

        // Set focus to sidebar when opened for better keyboard navigation
        if (!isOpen) {
            sidebar.setAttribute('tabindex', '-1');
            sidebar.focus();
        }
    }

    // Close sidebar
    function closeSidebar() {
        sidebar.classList.remove('open');
        overlay.classList.remove('open');
        menuToggle.classList.remove('open');
        body.classList.remove('sidebar-open');
        menuToggle.setAttribute('aria-expanded', 'false');
    }

    // Toggle sidebar on menu button click
    if (menuToggle && sidebar && overlay) {
        menuToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleSidebar();
        });
        
        // Add keyboard accessibility
        menuToggle.setAttribute('aria-label', 'Toggle menu');
        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.setAttribute('aria-controls', 'sidebar');
        
        // Close when clicking outside
        document.addEventListener('click', (e) => {
            if (sidebar.classList.contains('open') && 
                !sidebar.contains(e.target) && 
                !menuToggle.contains(e.target)) {
                closeSidebar();
            }
        });
        
        // Close on overlay click
        overlay.addEventListener('click', closeSidebar);
        
        // Close on Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && sidebar.classList.contains('open')) {
                closeSidebar();
                menuToggle.focus(); // Return focus to menu button
            }
        });
        
        // Handle menu item clicks
        const menuItems = document.querySelectorAll('.sidebar-menu a');
        menuItems.forEach(item => {
            item.addEventListener('click', (e) => {
                // Update active state
                menuItems.forEach(i => i.classList.remove('active'));
                item.classList.add('active');
                
                // Close sidebar after a short delay for better UX
                if (window.innerWidth <= 768) {
                    setTimeout(closeSidebar, 200);
                }
            });
        });
    }
    
    // Add smooth scroll to anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Close sidebar on mobile after clicking a link
                if (window.innerWidth <= 768) {
                    closeSidebar();
                }
            }
        });
    });
});
