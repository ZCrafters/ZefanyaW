document.addEventListener('DOMContentLoaded', function() {
    // Inisialisasi mobile menu
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const closeMenu = document.getElementById('close-menu');

    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', () => {
            mobileMenu.classList.remove('translate-x-full');
            mobileMenu.classList.add('translate-x-0');
        });
    }


    if (closeMenu && mobileMenu) {
        closeMenu.addEventListener('click', () => {
            mobileMenu.classList.remove('translate-x-0');
            mobileMenu.classList.add('translate-x-full');
        });
    }


    // Inisialisasi particles background
    function initParticles() {
        const container = document.getElementById('particle-bg');
        if (!container) return;

        const particleCount = 30;
        
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.className = 'absolute rounded-full bg-primary opacity-20';
            
            // Random size between 2px and 6px
            const size = Math.random() * 4 + 2;
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            
            // Random position
            particle.style.left = `${Math.random() * 100}%`;
            particle.style.top = `${Math.random() * 100}%`;
            
            // Random animation
            const duration = Math.random() * 20 + 10; // 10-30 seconds
            const delay = Math.random() * -20; // Start at random time
            
            particle.style.animation = `float ${duration}s ease-in-out ${delay}s infinite`;
            
            container.appendChild(particle);
        }
    }


    // Animate elements on scroll
    function animateOnScroll() {
        const elements = document.querySelectorAll('.timeline-item, .skill-card, .project-card');
        
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementTop < windowHeight - 100) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    }


    // Initialize animations
    function initAnimations() {
        // Add initial styles for animation
        const animatedElements = document.querySelectorAll('.timeline-item, .skill-card, .project-card');
        animatedElements.forEach((el, index) => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s`;
        });
        
        // Trigger initial animation
        setTimeout(animateOnScroll, 100);
    }


    // Initialize tooltips
    function initTooltips() {
        const tooltipElements = document.querySelectorAll('[data-tooltip]');
        
        tooltipElements.forEach(element => {
            const tooltip = document.createElement('div');
            tooltip.className = 'tooltip hidden absolute bg-dark text-white text-xs py-1 px-2 rounded whitespace-nowrap z-50';
            tooltip.textContent = element.getAttribute('data-tooltip');
            element.appendChild(tooltip);
            
            element.addEventListener('mouseenter', () => {
                tooltip.classList.remove('hidden');
            });
            
            element.addEventListener('mouseleave', () => {
                tooltip.classList.add('hidden');
            });
        });
    }


    // Initialize all functions
    function init() {
        initParticles();
        initAnimations();
        initTooltips();
        
        // Add scroll event listener for animations
        window.addEventListener('scroll', animateOnScroll);
    }


    // Start the initialization
    init();
});
