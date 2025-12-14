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

    // Create floating particles
    const particleBg = document.getElementById('particle-bg');
    const particleCount = 30;
    
    // Create initial particles
    for (let i = 0; i < particleCount; i++) {
        createParticle(
            Math.random() * window.innerWidth,
            Math.random() * window.innerHeight
        );
    }
    
    // Add hover effect for skill items
    const skillItems = document.querySelectorAll('.skill-item');
    skillItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            const rect = item.getBoundingClientRect();
            createParticleBurst(rect);
        });
    });
    
    // Add hover effect for cards
    const cards = document.querySelectorAll('.card-glass');
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            card.style.setProperty('--x', `${x}px`);
            card.style.setProperty('--y', `${y}px`);
            
            // Create occasional particles on card hover
            if (Math.random() > 0.9) {
                createParticle(e.clientX, e.clientY);
            }
        });
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
    
    // Add parallax effect to background elements
    window.addEventListener('mousemove', (e) => {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        
        document.querySelector('.grid-bg').style.transform = `translate(${x * 20}px, ${y * 20}px)`;
    });
    
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
    
    // Create a single particle
    function createParticle(x, y) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        // Random size between 2px and 6px
        const size = 2 + Math.random() * 4;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        
        // Random color variation
        const hue = 0; // Red
        const saturation = 100; // Full saturation
        const lightness = 50 + Math.random() * 20; // 50-70% lightness
        particle.style.backgroundColor = `hsla(${hue}, ${saturation}%, ${lightness}%, 0.8)`;
        
        // Random position near the cursor
        particle.style.left = `${x}px`;
        particle.style.top = `${y}px`;
        
        // Random animation
        const duration = 1 + Math.random() * 2; // 1-3 seconds
        particle.style.animationDuration = `${duration}s`;
        
        document.body.appendChild(particle);
        
        // Remove particle after animation
        setTimeout(() => {
            particle.remove();
        }, duration * 1000);
    }
});
