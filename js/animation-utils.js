// Animation Utilities - Reusable animation functions
const AnimationUtils = (() => {
    // Throttle function for performance (timestamp-based)
    const throttle = (func, limit) => {
        let lastRan = 0;
        return function(...args) {
            const now = Date.now();
            if (now - lastRan >= limit) {
                func.apply(this, args);
                lastRan = now;
            }
        };
    };

    // Debounce function for performance
    const debounce = (func, delay) => {
        let timeoutId;
        return function(...args) {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => func.apply(this, args), delay);
        };
    };

    // Request animation frame wrapper
    const rafThrottle = (callback) => {
        let rafId = null;
        return function(...args) {
            if (rafId) return;
            rafId = requestAnimationFrame(() => {
                callback.apply(this, args);
                rafId = null;
            });
        };
    };

    // Smooth scroll to element
    const smoothScrollTo = (element, offset = 0, duration = 800) => {
        const targetPosition = element.getBoundingClientRect().top + window.pageYOffset - offset;
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        let startTime = null;

        const easeInOutCubic = (t) => {
            return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
        };

        const animation = (currentTime) => {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const progress = Math.min(timeElapsed / duration, 1);
            const ease = easeInOutCubic(progress);
            
            window.scrollTo(0, startPosition + distance * ease);
            
            if (timeElapsed < duration) {
                requestAnimationFrame(animation);
            }
        };

        requestAnimationFrame(animation);
    };

    // Fade in animation
    const fadeIn = (element, duration = 500) => {
        element.style.opacity = '0';
        element.style.display = 'block';
        
        let start = null;
        const animate = (timestamp) => {
            if (!start) start = timestamp;
            const progress = timestamp - start;
            const opacity = Math.min(progress / duration, 1);
            
            element.style.opacity = opacity;
            
            if (progress < duration) {
                requestAnimationFrame(animate);
            }
        };
        
        requestAnimationFrame(animate);
    };

    // Fade out animation
    const fadeOut = (element, duration = 500) => {
        let start = null;
        const animate = (timestamp) => {
            if (!start) start = timestamp;
            const progress = timestamp - start;
            const opacity = 1 - Math.min(progress / duration, 1);
            
            element.style.opacity = opacity;
            
            if (progress < duration) {
                requestAnimationFrame(animate);
            } else {
                element.style.display = 'none';
            }
        };
        
        requestAnimationFrame(animate);
    };

    // Slide in animation
    const slideIn = (element, direction = 'left', duration = 500) => {
        const directions = {
            left: 'translateX(-100%)',
            right: 'translateX(100%)',
            top: 'translateY(-100%)',
            bottom: 'translateY(100%)'
        };
        
        element.style.transform = directions[direction];
        element.style.opacity = '0';
        element.style.display = 'block';
        
        requestAnimationFrame(() => {
            element.style.transition = `all ${duration}ms cubic-bezier(0.4, 0, 0.2, 1)`;
            element.style.transform = 'translate(0, 0)';
            element.style.opacity = '1';
        });
    };

    // Parallax effect
    const initParallax = (elements, speed = 0.5) => {
        const updateParallax = rafThrottle(() => {
            const scrollTop = window.pageYOffset;
            elements.forEach(element => {
                const elementSpeed = parseFloat(element.dataset.speed) || speed;
                const yPos = -(scrollTop * elementSpeed);
                element.style.transform = `translate3d(0, ${yPos}px, 0)`;
            });
        });
        
        window.addEventListener('scroll', updateParallax, { passive: true });
    };

    // Intersection Observer for lazy animations
    const observeElements = (elements, callback, options = {}) => {
        const defaultOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px',
            ...options
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    callback(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        }, defaultOptions);
        
        elements.forEach(el => observer.observe(el));
        return observer;
    };

    // Stagger animation
    const staggerAnimation = (elements, animationClass, delay = 100) => {
        elements.forEach((element, index) => {
            setTimeout(() => {
                element.classList.add(animationClass);
            }, index * delay);
        });
    };

    // Ripple effect
    const createRipple = (event, element) => {
        const circle = document.createElement('span');
        const diameter = Math.max(element.clientWidth, element.clientHeight);
        const radius = diameter / 2;
        
        const rect = element.getBoundingClientRect();
        circle.style.cssText = `
            position: absolute;
            width: ${diameter}px;
            height: ${diameter}px;
            left: ${event.clientX - rect.left - radius}px;
            top: ${event.clientY - rect.top - radius}px;
            border-radius: 50%;
            background-color: rgba(229, 0, 0, 0.3);
            transform: scale(0);
            animation: ripple 0.6s ease-out;
            pointer-events: none;
        `;
        
        const ripple = element.querySelector('.ripple');
        if (ripple) ripple.remove();
        
        circle.classList.add('ripple');
        element.appendChild(circle);
        
        setTimeout(() => circle.remove(), 600);
    };

    // Count up animation
    const countUp = (element, start, end, duration = 2000) => {
        const startTime = Date.now();
        const range = end - start;
        
        const updateCount = () => {
            const now = Date.now();
            const progress = Math.min((now - startTime) / duration, 1);
            const easeProgress = 1 - Math.pow(1 - progress, 3); // ease-out cubic
            const current = Math.floor(start + range * easeProgress);
            
            element.textContent = current.toLocaleString();
            
            if (progress < 1) {
                requestAnimationFrame(updateCount);
            } else {
                element.textContent = end.toLocaleString();
            }
        };
        
        requestAnimationFrame(updateCount);
    };

    // Shuffle array animation
    const shuffleArray = (array) => {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    };

    // Typewriter effect
    const typewriter = (element, text, speed = 50, callback) => {
        let i = 0;
        element.textContent = '';
        
        const type = () => {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(type, speed);
            } else if (callback) {
                callback();
            }
        };
        
        type();
    };

    // Wave animation for text
    const waveText = (element) => {
        const text = element.textContent;
        element.innerHTML = '';
        
        text.split('').forEach((char, index) => {
            const span = document.createElement('span');
            span.textContent = char;
            span.style.cssText = `
                display: inline-block;
                animation: wave 1s ease-in-out infinite;
                animation-delay: ${index * 0.05}s;
            `;
            element.appendChild(span);
        });
    };

    // Add required CSS for animations
    const addAnimationStyles = () => {
        if (document.getElementById('animation-utils-styles')) return;
        
        const style = document.createElement('style');
        style.id = 'animation-utils-styles';
        style.textContent = `
            @keyframes ripple {
                to {
                    transform: scale(4);
                    opacity: 0;
                }
            }
            
            @keyframes wave {
                0%, 100% {
                    transform: translateY(0);
                }
                50% {
                    transform: translateY(-10px);
                }
            }
            
            .fade-in {
                animation: fadeIn 0.5s ease-in-out;
            }
            
            @keyframes fadeIn {
                from {
                    opacity: 0;
                }
                to {
                    opacity: 1;
                }
            }
            
            .slide-up {
                animation: slideUp 0.6s cubic-bezier(0.4, 0, 0.2, 1);
            }
            
            @keyframes slideUp {
                from {
                    opacity: 0;
                    transform: translateY(30px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
            
            .scale-in {
                animation: scaleIn 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            }
            
            @keyframes scaleIn {
                from {
                    opacity: 0;
                    transform: scale(0.9);
                }
                to {
                    opacity: 1;
                    transform: scale(1);
                }
            }
            
            .rotate-in {
                animation: rotateIn 0.6s cubic-bezier(0.4, 0, 0.2, 1);
            }
            
            @keyframes rotateIn {
                from {
                    opacity: 0;
                    transform: rotate(-10deg) scale(0.9);
                }
                to {
                    opacity: 1;
                    transform: rotate(0) scale(1);
                }
            }
        `;
        document.head.appendChild(style);
    };

    // Initialize styles on load
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', addAnimationStyles);
    } else {
        addAnimationStyles();
    }

    // Public API
    return {
        throttle,
        debounce,
        rafThrottle,
        smoothScrollTo,
        fadeIn,
        fadeOut,
        slideIn,
        initParallax,
        observeElements,
        staggerAnimation,
        createRipple,
        countUp,
        shuffleArray,
        typewriter,
        waveText
    };
})();

// Make it available globally
window.AnimationUtils = AnimationUtils;
