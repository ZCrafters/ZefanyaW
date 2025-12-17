// Enhanced Animations - Cool new effects for the portfolio
document.addEventListener('DOMContentLoaded', () => {
    // Smooth page reveal on load
    document.body.style.opacity = '0';
    requestAnimationFrame(() => {
        document.body.style.transition = 'opacity 0.6s ease-in-out';
        document.body.style.opacity = '1';
    });

    // Cursor trail effect
    const cursor = {
        x: 0,
        y: 0,
        dots: []
    };

    const CURSOR_TRAIL_DOTS = 8;
    const CURSOR_BASE_OPACITY = 0.8;
    const CURSOR_OPACITY_STEP = 0.1;
    
    const createCursorTrail = () => {
        const trailContainer = document.createElement('div');
        trailContainer.id = 'cursor-trail';
        trailContainer.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 9998;
        `;
        document.body.appendChild(trailContainer);

        for (let i = 0; i < CURSOR_TRAIL_DOTS; i++) {
            const dot = document.createElement('div');
            dot.className = 'cursor-dot';
            dot.style.cssText = `
                position: absolute;
                width: ${CURSOR_TRAIL_DOTS - i}px;
                height: ${CURSOR_TRAIL_DOTS - i}px;
                border-radius: 50%;
                background: rgba(229, 0, 0, ${CURSOR_BASE_OPACITY - i * CURSOR_OPACITY_STEP});
                transform: translate(-50%, -50%);
                will-change: transform;
                pointer-events: none;
            `;
            trailContainer.appendChild(dot);
            cursor.dots.push({ element: dot, x: 0, y: 0 });
        }

        let animationFrame;
        document.addEventListener('mousemove', (e) => {
            cursor.x = e.clientX;
            cursor.y = e.clientY;
            
            if (!animationFrame) {
                animationFrame = requestAnimationFrame(() => {
                    updateCursorTrail();
                    animationFrame = null;
                });
            }
        }, { passive: true });

        function updateCursorTrail() {
            cursor.dots.forEach((dot, index) => {
                const nextDot = cursor.dots[index - 1] || cursor;
                dot.x += (nextDot.x - dot.x) * 0.4;
                dot.y += (nextDot.y - dot.y) * 0.4;
                dot.element.style.transform = `translate3d(${dot.x}px, ${dot.y}px, 0) translate(-50%, -50%)`;
            });
        }
    };

    // Initialize cursor trail on desktop only
    if (window.innerWidth > 768) {
        createCursorTrail();
    }

    // Scroll progress indicator
    const createScrollProgress = () => {
        const progressBar = document.createElement('div');
        progressBar.id = 'scroll-progress';
        progressBar.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            height: 3px;
            background: linear-gradient(90deg, #e50000, #ff6b6b);
            width: 0%;
            z-index: 10000;
            transition: width 0.1s ease-out;
            box-shadow: 0 0 10px rgba(229, 0, 0, 0.5);
        `;
        document.body.appendChild(progressBar);

        let ticking = false;
        window.addEventListener('scroll', () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
                    const scrollPercentage = (scrollTop / scrollHeight) * 100;
                    progressBar.style.width = `${scrollPercentage}%`;
                    ticking = false;
                });
                ticking = true;
            }
        }, { passive: true });
    };

    createScrollProgress();

    // Smooth reveal animations for sections
    const revealSections = () => {
        const sections = document.querySelectorAll('section:not(.revealed)');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.classList.add('revealed');
                        entry.target.style.cssText = `
                            animation: slideInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
                        `;
                    }, index * 100);
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        sections.forEach(section => {
            section.style.opacity = '0';
            observer.observe(section);
        });
    };

    revealSections();

    // Text typing animation for headers
    const typeWriter = (element, text, speed = 50) => {
        let i = 0;
        element.textContent = '';
        
        function type() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        
        type();
    };

    // Apply typing effect to h1 elements with data-type attribute
    const typingHeaders = document.querySelectorAll('h1[data-type], .typing-effect');
    const typingObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const originalText = entry.target.textContent;
                typeWriter(entry.target, originalText, 80);
                typingObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    typingHeaders.forEach(header => {
        typingObserver.observe(header);
    });

    // Tilt effect for cards
    const initTiltEffect = () => {
        const cards = document.querySelectorAll('.card-glass, .bento-card, .project-card');
        
        cards.forEach(card => {
            let tiltFrame = null;
            
            card.addEventListener('mousemove', (e) => {
                if (tiltFrame) return;
                
                tiltFrame = requestAnimationFrame(() => {
                    const rect = card.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    const centerX = rect.width / 2;
                    const centerY = rect.height / 2;
                    const rotateX = (y - centerY) / 20;
                    const rotateY = (centerX - x) / 20;
                    
                    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
                    card.style.boxShadow = `
                        ${-rotateY * 2}px ${rotateX * 2}px 30px rgba(229, 0, 0, 0.3),
                        0 0 20px rgba(229, 0, 0, 0.1)
                    `;
                    
                    tiltFrame = null;
                });
            }, { passive: true });
            
            card.addEventListener('mouseleave', () => {
                card.style.transition = 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
                card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
                card.style.boxShadow = '';
                
                setTimeout(() => {
                    card.style.transition = '';
                }, 500);
            });
        });
    };

    initTiltEffect();

    // Glow effect on hover for buttons
    const initGlowEffect = () => {
        const buttons = document.querySelectorAll('button, .glowing-button, a[class*="btn"]');
        
        buttons.forEach(button => {
            button.style.position = 'relative';
            button.style.overflow = 'hidden';
            
            button.addEventListener('mouseenter', function(e) {
                const glow = document.createElement('span');
                glow.style.cssText = `
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    top: 0;
                    left: 0;
                    background: radial-gradient(circle at center, rgba(229, 0, 0, 0.4), transparent);
                    animation: pulse 1.5s ease-in-out infinite;
                    pointer-events: none;
                `;
                this.appendChild(glow);
                
                setTimeout(() => glow.remove(), 1500);
            });
        });
    };

    initGlowEffect();

    // Add CSS animations
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        @keyframes pulse {
            0%, 100% {
                opacity: 0;
                transform: scale(1);
            }
            50% {
                opacity: 1;
                transform: scale(1.5);
            }
        }
        
        @keyframes shimmer {
            0% {
                background-position: -100% 0;
            }
            100% {
                background-position: 200% 0;
            }
        }
        
        .shimmer-effect {
            background: linear-gradient(
                90deg,
                transparent 0%,
                rgba(229, 0, 0, 0.3) 50%,
                transparent 100%
            );
            background-size: 200% 100%;
            animation: shimmer 2s ease-in-out infinite;
        }
        
        /* Smooth scrolling */
        html {
            scroll-behavior: smooth;
        }
        
        /* Enhanced focus styles for accessibility */
        *:focus-visible {
            outline: 2px solid #e50000;
            outline-offset: 2px;
        }
        
        /* Better link hover effects */
        a:not([class]) {
            position: relative;
            transition: color 0.3s ease;
        }
        
        a:not([class])::after {
            content: '';
            position: absolute;
            bottom: -2px;
            left: 0;
            width: 0;
            height: 2px;
            background: linear-gradient(90deg, #e50000, #ff6b6b);
            transition: width 0.3s ease;
        }
        
        a:not([class]):hover::after {
            width: 100%;
        }
        
        /* Loading state for images */
        img {
            transition: opacity 0.3s ease;
        }
        
        img:not([src]) {
            opacity: 0;
        }
    `;
    document.head.appendChild(style);

    // Lazy load images with fade-in effect
    const lazyImages = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.style.opacity = '0';
                img.onload = () => {
                    img.style.transition = 'opacity 0.5s ease';
                    img.style.opacity = '1';
                };
                imageObserver.unobserve(img);
            }
        });
    });

    lazyImages.forEach(img => imageObserver.observe(img));

    // Add shimmer effect to loading elements
    document.querySelectorAll('.loading, .skeleton').forEach(el => {
        el.classList.add('shimmer-effect');
    });

    // Performance monitoring
    if (window.performance && window.performance.timing) {
        window.addEventListener('load', () => {
            const timing = window.performance.timing;
            const loadTime = timing.loadEventEnd - timing.navigationStart;
            console.log(`Page loaded in ${loadTime}ms`);
        });
    }
});
