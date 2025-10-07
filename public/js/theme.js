// Theme Toggle with 3D Effects
document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = themeToggle.querySelector('i');
    const themeText = themeToggle.querySelector('.theme-text');
    
    // Check for saved theme preference or use system preference
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    let currentTheme = localStorage.getItem('theme');
    
    // If no theme is saved, use system preference
    if (!currentTheme) {
        currentTheme = prefersDarkScheme.matches ? 'dark' : 'light';
        localStorage.setItem('theme', currentTheme);
    }
    
    // Apply the saved theme
    const applyTheme = (theme) => {
        document.body.className = theme === 'dark' ? 'dark-mode' : 'light-mode';
        themeIcon.className = theme === 'dark' ? 'fas fa-moon' : 'fas fa-sun';
        themeText.textContent = theme === 'dark' ? 'Dark Mode' : 'Light Mode';
        
        // Update button state
        themeToggle.setAttribute('aria-pressed', theme === 'dark');
        themeToggle.setAttribute('aria-label', `Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`);
    };
    
    // Initialize theme
    applyTheme(currentTheme);
    
    // Toggle theme on button click
    themeToggle.addEventListener('click', () => {
        // Add active class for animation
        themeToggle.classList.add('active');
        
        // Toggle theme after a short delay for animation
        setTimeout(() => {
            const newTheme = document.body.classList.contains('dark-mode') ? 'light' : 'dark';
            localStorage.setItem('theme', newTheme);
            applyTheme(newTheme);
            
            // Remove active class after animation completes
            setTimeout(() => {
                themeToggle.classList.remove('active');
            }, 500);
        }, 100);
    });
    
    // Listen for system theme changes
    prefersDarkScheme.addEventListener('change', (e) => {
        // Only update if user hasn't set a preference
        if (!localStorage.getItem('theme')) {
            const newTheme = e.matches ? 'dark' : 'light';
            applyTheme(newTheme);
        }
    });
    
    // Add hover effect
    themeToggle.addEventListener('mouseenter', () => {
        themeToggle.style.transform = 'translateY(-2px)';
        themeToggle.style.boxShadow = '0 4px 15px rgba(255, 0, 60, 0.3)';
    });
    
    themeToggle.addEventListener('mouseleave', () => {
        themeToggle.style.transform = 'translateY(0)';
        themeToggle.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.2)';
    });
    
    // Add parallax effect to canvas container
    const canvasContainer = document.querySelector('.canvas-container');
    if (canvasContainer) {
        canvasContainer.addEventListener('mousemove', (e) => {
            const rect = canvasContainer.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const moveX = (x - centerX) / 50;
            const moveY = (y - centerY) / 50;
            
            canvasContainer.style.transform = `perspective(1000px) rotateX(${moveY}deg) rotateY(${moveX}deg)`;
            canvasContainer.style.boxShadow = `${-moveX * 2}px ${-moveY * 2}px 30px rgba(255, 0, 60, 0.3)`;
        });
        
        canvasContainer.addEventListener('mouseleave', () => {
            canvasContainer.style.transition = 'all 0.5s ease';
            canvasContainer.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
            canvasContainer.style.boxShadow = '0 8px 32px 0 rgba(31, 38, 135, 0.2), 0 0 20px rgba(255, 0, 60, 0.1)';
            
            setTimeout(() => {
                canvasContainer.style.transition = '';
            }, 500);
        });
    }
    
    // Add hover effect to tool buttons
    const toolButtons = document.querySelectorAll('.tool-btn');
    toolButtons.forEach(button => {
        button.addEventListener('mousemove', (e) => {
            const rect = button.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateY = (x - centerX) / 10;
            const rotateX = (centerY - y) / 10;
            
            button.style.transform = `perspective(500px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
            button.style.boxShadow = `${-rotateY * 2}px ${rotateX * 2}px 15px rgba(255, 0, 60, 0.5)`;
        });
        
        button.addEventListener('mouseleave', () => {
            button.style.transition = 'all 0.3s ease';
            button.style.transform = 'perspective(500px) rotateX(0) rotateY(0) translateZ(0)';
            button.style.boxShadow = '0 5px 15px rgba(255, 0, 60, 0.3)';
            
            setTimeout(() => {
                button.style.transition = '';
            }, 300);
        });
    });

    // Advanced Scroll Animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    // Observe elements for scroll animations
    const animatedElements = document.querySelectorAll('.card-glass, .bento-card, .skill-card, .project-card');
    animatedElements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(50px)';
        element.style.transition = `all 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.1}s`;
        scrollObserver.observe(element);
    });

    // Add CSS for scroll animations
    const animationStyles = document.createElement('style');
    animationStyles.textContent = `
        .animate-in {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }

        .stagger-animation {
            animation: staggerIn 0.6s ease-out forwards;
            opacity: 0;
        }

        .stagger-animation:nth-child(1) { animation-delay: 0.1s; }
        .stagger-animation:nth-child(2) { animation-delay: 0.2s; }
        .stagger-animation:nth-child(3) { animation-delay: 0.3s; }
        .stagger-animation:nth-child(4) { animation-delay: 0.4s; }
        .stagger-animation:nth-child(5) { animation-delay: 0.5s; }

        @keyframes staggerIn {
            to {
                opacity: 1;
                transform: translateY(0) scale(1);
            }
        }

        .parallax-element {
            transform: translateZ(0);
            will-change: transform;
        }

        .floating-particles {
            position: absolute;
            width: 100%;
            height: 100%;
            pointer-events: none;
            overflow: hidden;
        }

        .particle-float {
            position: absolute;
            background: radial-gradient(circle, rgba(229, 0, 0, 0.3) 0%, transparent 70%);
            border-radius: 50%;
            animation: particleFloat 15s infinite linear;
        }

        @keyframes particleFloat {
            0% {
                transform: translateY(100vh) translateX(0) rotate(0deg);
                opacity: 0;
            }
            10% {
                opacity: 1;
            }
            90% {
                opacity: 1;
            }
            100% {
                transform: translateY(-100px) translateX(100px) rotate(360deg);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(animationStyles);

    // Create floating particles
    function createFloatingParticles(container) {
        if (!container) return;

        for (let i = 0; i < 20; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle-float';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.width = Math.random() * 8 + 4 + 'px';
            particle.style.height = particle.style.width;
            particle.style.animationDelay = Math.random() * 15 + 's';
            particle.style.animationDuration = (Math.random() * 10 + 15) + 's';

            container.appendChild(particle);
        }
    }

    // Add floating particles to sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const particlesContainer = document.createElement('div');
        particlesContainer.className = 'floating-particles';
        section.appendChild(particlesContainer);
        createFloatingParticles(particlesContainer);
    });

    // Advanced hover effects for interactive elements
    const interactiveElements = document.querySelectorAll('.interactive-element, .card-glass, .bento-card');
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
            this.style.boxShadow = '0 20px 40px rgba(229, 0, 0, 0.2)';
        });

        element.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = '';
        });
    });

    // Magnetic effect for buttons
    const buttons = document.querySelectorAll('button, .glowing-button');
    buttons.forEach(button => {
        button.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;

            this.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
        });

        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translate(0, 0)';
        });
    });

    // Smooth scroll with parallax
    let ticking = false;
    function updateParallax() {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.parallax-element');

        parallaxElements.forEach(element => {
            const speed = element.dataset.speed || 0.5;
            const yPos = -(scrolled * speed);
            element.style.transform = `translateY(${yPos}px)`;
        });

        ticking = false;
    }

    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateParallax);
            ticking = true;
        }
    }

    window.addEventListener('scroll', requestTick);

    // Add loading animation
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');

        // Animate elements on load
        const loadElements = document.querySelectorAll('.fade-in, .bento-card, .card-glass');
        loadElements.forEach((element, index) => {
            setTimeout(() => {
                element.classList.add('animate-in');
            }, index * 100);
        });
    });

    // Add ripple effect to clickable elements
    function createRipple(event) {
        const button = event.currentTarget;
        const circle = document.createElement('span');
        const diameter = Math.max(button.clientWidth, button.clientHeight);
        const radius = diameter / 2;

        circle.style.width = circle.style.height = `${diameter}px`;
        circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
        circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
        circle.classList.add('ripple');

        const rippleStyles = document.createElement('style');
        rippleStyles.textContent = `
            .ripple {
                position: absolute;
                border-radius: 50%;
                background-color: rgba(229, 0, 0, 0.3);
                transform: scale(0);
                animation: ripple 0.6s linear;
                pointer-events: none;
            }

            @keyframes ripple {
                to {
                    transform: scale(4);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(rippleStyles);

        const ripple = button.getElementsByClassName('ripple')[0];
        if (ripple) {
            ripple.remove();
        }

        button.appendChild(circle);
    }

    // Add ripple effect to buttons
    const rippleButtons = document.querySelectorAll('button, .glowing-button');
    rippleButtons.forEach(button => {
        button.addEventListener('click', createRipple);
    });

    // Advanced skill progress animation
    const skillBars = document.querySelectorAll('.progress-bar');
    skillBars.forEach(bar => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const progress = entry.target.style.getPropertyValue('--progress') || '85%';
                    entry.target.style.width = progress;
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        observer.observe(bar);
    });

    console.log('Advanced animations and interactive elements initialized');
});
