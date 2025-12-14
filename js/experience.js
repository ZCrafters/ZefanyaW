document.addEventListener('DOMContentLoaded', function() {
    // Optimized particles background with reduced count
    function initParticles() {
        const container = document.getElementById('particle-bg');
        if (!container) return;

        const particleCount = 20; // Reduced from 30
        const fragment = document.createDocumentFragment();
        
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.className = 'absolute rounded-full bg-primary opacity-20';
            
            const size = Math.random() * 4 + 2;
            const duration = Math.random() * 20 + 10;
            const delay = Math.random() * -20;
            
            particle.style.cssText = `
                width: ${size}px;
                height: ${size}px;
                left: ${Math.random() * 100}%;
                top: ${Math.random() * 100}%;
                animation: float ${duration}s ease-in-out ${delay}s infinite;
                will-change: transform;
            `;
            
            fragment.appendChild(particle);
        }
        
        container.appendChild(fragment);
    }

    // Optimized scroll animation with IntersectionObserver
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const animateObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                animateObserver.unobserve(entry.target); // Unobserve after animation
            }
        });
    }, observerOptions);

    // Initialize animations with IntersectionObserver
    function initAnimations() {
        const animatedElements = document.querySelectorAll('.timeline-item, .skill-card, .project-card');
        animatedElements.forEach((el, index) => {
            el.style.cssText = `
                opacity: 0;
                transform: translateY(20px);
                transition: opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.1}s, 
                           transform 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.1}s;
            `;
            animateObserver.observe(el);
        });
    }

    // Optimized tooltips with event delegation
    function initTooltips() {
        const tooltipElements = document.querySelectorAll('[data-tooltip]');
        
        tooltipElements.forEach(element => {
            const tooltip = document.createElement('div');
            tooltip.className = 'tooltip hidden absolute bg-dark text-white text-xs py-1 px-2 rounded whitespace-nowrap z-50';
            tooltip.textContent = element.getAttribute('data-tooltip');
            element.style.position = 'relative';
            element.appendChild(tooltip);
            
            element.addEventListener('mouseenter', () => {
                tooltip.classList.remove('hidden');
            }, { passive: true });
            
            element.addEventListener('mouseleave', () => {
                tooltip.classList.add('hidden');
            }, { passive: true });
        });
    }

    // Initialize all functions
    function init() {
        initParticles();
        initAnimations();
        initTooltips();
    }

    // Start the initialization
    init();
});
