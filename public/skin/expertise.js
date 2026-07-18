// Initialize when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Add smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId !== '#') {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // Create a single particle element (optimized) - defined first
    const createParticleElement = (x, y) => {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        const size = 2 + Math.random() * 4;
        const lightness = 50 + Math.random() * 20;
        const duration = 1 + Math.random() * 2;
        
        particle.style.cssText = `
            width: ${size}px;
            height: ${size}px;
            background-color: hsla(0, 100%, ${lightness}%, 0.8);
            left: ${x}px;
            top: ${y}px;
            animation-duration: ${duration}s;
            will-change: transform, opacity;
        `;
        
        return particle;
    };
    
    // Create floating particles
    const particleBg = document.getElementById('particle-bg');
    const particleCount = 30;
    
    // Create initial particles with document fragment
    const fragment = document.createDocumentFragment();
    for (let i = 0; i < particleCount; i++) {
        const particle = createParticleElement(
            Math.random() * window.innerWidth,
            Math.random() * window.innerHeight
        );
        if (particle) fragment.appendChild(particle);
    }
    if (particleBg) particleBg.appendChild(fragment);
    
    // Add hover effect for skill items
    const skillItems = document.querySelectorAll('.skill-item');
    skillItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            const rect = item.getBoundingClientRect();
            createParticleBurst(rect);
        });
    });
    
    // Add hover effect for cards with throttled particle creation
    const cards = document.querySelectorAll('.card-glass');
    let lastParticleTime = 0;
    const particleThrottle = 100; // ms
    
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            card.style.setProperty('--x', `${x}px`);
            card.style.setProperty('--y', `${y}px`);
            
            // Throttled particle creation
            const now = Date.now();
            if (now - lastParticleTime > particleThrottle && Math.random() > 0.9) {
                createParticle(e.clientX, e.clientY);
                lastParticleTime = now;
            }
        }, { passive: true });
    });
    
    // Add click effect for buttons
    const buttons = document.querySelectorAll('button, a[href="#"]');
    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            if (button.getAttribute('href') === '#') {
                e.preventDefault();
            }
            
            const rect = button.getBoundingClientRect();
            createParticleBurst(rect);
        });
    });
    
    // Add scroll animation for skill bars
    const skillBars = document.querySelectorAll('.skill-bar-fill');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const width = entry.target.getAttribute('data-level');
                entry.target.style.width = width;
                entry.target.style.opacity = '1';
            }
        });
    }, { threshold: 0.5 });
    
    skillBars.forEach(bar => observer.observe(bar));
    
    // Add parallax effect to background elements with throttling
    const gridBg = document.querySelector('.grid-bg');
    let parallaxFrame = null;
    
    if (gridBg) {
        window.addEventListener('mousemove', (e) => {
            if (parallaxFrame) return;
            
            parallaxFrame = requestAnimationFrame(() => {
                const x = e.clientX / window.innerWidth;
                const y = e.clientY / window.innerHeight;
                gridBg.style.transform = `translate3d(${x * 20}px, ${y * 20}px, 0)`;
                parallaxFrame = null;
            });
        }, { passive: true });
    }
    
    // Create a burst of particles from an element
    function createParticleBurst(element) {
        const centerX = element.left + element.width / 2;
        const centerY = element.top + element.height / 2;
        
        for (let i = 0; i < 15; i++) {
            setTimeout(() => {
                const angle = Math.random() * Math.PI * 2;
                const distance = 5 + Math.random() * 20;
                const x = centerX + Math.cos(angle) * distance;
                const y = centerY + Math.sin(angle) * distance;
                
                createParticle(x, y);
            }, i * 30);
        }
    }
    
    // Create and append particle with automatic cleanup
    const createParticle = (x, y) => {
        const particle = createParticleElement(x, y);
        if (!particle) return;
        
        document.body.appendChild(particle);
        
        const duration = parseFloat(particle.style.animationDuration) * 1000;
        setTimeout(() => particle.remove(), duration);
    }
});
