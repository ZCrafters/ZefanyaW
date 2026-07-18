/**
 * ZEFANYA WILLIAMS PORTFOLIO - INTERACTIONS ENGINE
 * 1000+ Lines of JavaScript Interactions
 * Features: Animations, Scroll Effects, Mouse Tracking, 3D Transforms
 */

(function() {
    'use strict';

    // ==========================================================================
    // CONFIGURATION
    // ==========================================================================
    const CONFIG = {
        scrollOffset: 100,
        parallaxSpeed: 0.5,
        animationDuration: 800,
        easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
        throttleDelay: 16,
        debounceDelay: 150
    };

    // ==========================================================================
    // UTILITY FUNCTIONS
    // ==========================================================================
    const Utils = {
        // Throttle function execution
        throttle(func, limit) {
            let inThrottle;
            return function(...args) {
                if (!inThrottle) {
                    func.apply(this, args);
                    inThrottle = true;
                    setTimeout(() => inThrottle = false, limit);
                }
            };
        },

        // Debounce function execution
        debounce(func, wait) {
            let timeout;
            return function(...args) {
                clearTimeout(timeout);
                timeout = setTimeout(() => func.apply(this, args), wait);
            };
        },

        // Check if element is in viewport
        isInViewport(element, offset = 0) {
            const rect = element.getBoundingClientRect();
            return (
                rect.top <= (window.innerHeight - offset) &&
                rect.bottom >= offset
            );
        },

        // Get scroll percentage
        getScrollPercent() {
            const h = document.documentElement;
            const b = document.body;
            const st = 'scrollTop';
            const sh = 'scrollHeight';
            return (h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight) * 100;
        },

        // Random number between min and max
        random(min, max) {
            return Math.random() * (max - min) + min;
        },

        // Map value from one range to another
        map(value, x1, y1, x2, y2) {
            return (value - x1) * (y2 - x2) / (y1 - x1) + x2;
        },

        // Clamp value between min and max
        clamp(value, min, max) {
            return Math.min(Math.max(value, min), max);
        },

        // Linear interpolation
        lerp(start, end, factor) {
            return start + (end - start) * factor;
        },

        // Easing functions
        easeOutCubic(t) {
            return 1 - Math.pow(1 - t, 3);
        },

        easeInOutCubic(t) {
            return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
        },

        // Create and dispatch custom event
        dispatchEvent(name, detail = {}) {
            const event = new CustomEvent(name, { detail });
            document.dispatchEvent(event);
        }
    };

    // ==========================================================================
    // SCROLL MANAGER
    // ==========================================================================
    const ScrollManager = {
        elements: [],
        ticking: false,
        scrollY: 0,
        lastScrollY: 0,
        scrollDirection: 'down',

        init() {
            this.bindEvents();
            this.update();
        },

        bindEvents() {
            window.addEventListener('scroll', Utils.throttle(() => {
                this.scrollY = window.pageYOffset;
                this.scrollDirection = this.scrollY > this.lastScrollY ? 'down' : 'up';
                this.lastScrollY = this.scrollY;

                if (!this.ticking) {
                    requestAnimationFrame(() => this.update());
                    this.ticking = true;
                }
            }, CONFIG.throttleDelay), { passive: true });
        },

        update() {
            this.elements.forEach(item => {
                if (item.type === 'parallax') {
                    this.handleParallax(item);
                } else if (item.type === 'reveal') {
                    this.handleReveal(item);
                } else if (item.type === 'sticky') {
                    this.handleSticky(item);
                }
            });
            this.ticking = false;
        },

        handleParallax(item) {
            const { element, speed } = item;
            const rect = element.getBoundingClientRect();
            const scrolled = window.pageYOffset;
            const rate = scrolled * speed;
            element.style.transform = `translate3d(0, ${rate}px, 0)`;
        },

        handleReveal(item) {
            const { element, animation, delay } = item;
            if (Utils.isInViewport(element, CONFIG.scrollOffset)) {
                setTimeout(() => {
                    element.classList.add(animation);
                    element.classList.add('revealed');
                }, delay);
            }
        },

        handleSticky(item) {
            const { element, offset } = item;
            const rect = element.getBoundingClientRect();
            const shouldStick = rect.top <= offset;
            element.classList.toggle('stuck', shouldStick);
        },

        add(element, type, options = {}) {
            this.elements.push({ element, type, ...options });
        }
    };

    // ==========================================================================
    // MOUSE TRACKER
    // ==========================================================================
    const MouseTracker = {
        x: 0,
        y: 0,
        targetX: 0,
        targetY: 0,
        elements: [],
        isActive: false,

        init() {
            // Only track on non-touch devices
            if (window.matchMedia('(pointer: coarse)').matches) return;
            
            this.bindEvents();
            this.animate();
        },

        bindEvents() {
            document.addEventListener('mousemove', (e) => {
                this.targetX = e.clientX;
                this.targetY = e.clientY;
                this.isActive = true;
            }, { passive: true });
        },

        animate() {
            if (!this.isActive) {
                requestAnimationFrame(() => this.animate());
                return;
            }

            // Smooth interpolation
            this.x = Utils.lerp(this.x, this.targetX, 0.1);
            this.y = Utils.lerp(this.y, this.targetY, 0.1);

            this.elements.forEach(item => {
                const { element, intensity, type } = item;
                
                if (type === 'follow') {
                    element.style.transform = `translate3d(${this.x}px, ${this.y}px, 0)`;
                } else if (type === 'parallax') {
                    const rect = element.getBoundingClientRect();
                    const centerX = rect.left + rect.width / 2;
                    const centerY = rect.top + rect.height / 2;
                    const moveX = (this.x - centerX) * intensity;
                    const moveY = (this.y - centerY) * intensity;
                    element.style.transform = `translate3d(${moveX}px, ${moveY}px, 0)`;
                } else if (type === '3d-tilt') {
                    this.handle3DTilt(element, intensity);
                }
            });

            requestAnimationFrame(() => this.animate());
        },

        handle3DTilt(element, intensity) {
            const rect = element.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            
            const rotateX = (this.y - centerY) / (rect.height / 2) * intensity * -1;
            const rotateY = (this.x - centerX) / (rect.width / 2) * intensity;

            element.style.transform = `
                perspective(1000px) 
                rotateX(${rotateX}deg) 
                rotateY(${rotateY}deg)
                scale3d(1.02, 1.02, 1.02)
            `;
        },

        add(element, type, intensity = 0.1) {
            this.elements.push({ element, type, intensity });
            
            if (type === '3d-tilt') {
                element.addEventListener('mouseleave', () => {
                    element.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
                });
            }
        }
    };

    // ==========================================================================
    // INTERSECTION OBSERVER MANAGER
    // ==========================================================================
    const ObserverManager = {
        observers: new Map(),

        create(name, callback, options = {}) {
            const defaultOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px',
                ...options
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        callback(entry.target);
                        if (!options.continuous) {
                            observer.unobserve(entry.target);
                        }
                    }
                });
            }, defaultOptions);

            this.observers.set(name, observer);
            return observer;
        },

        observe(name, element) {
            const observer = this.observers.get(name);
            if (observer) {
                observer.observe(element);
            }
        },

        disconnect(name) {
            const observer = this.observers.get(name);
            if (observer) {
                observer.disconnect();
                this.observers.delete(name);
            }
        }
    };

    // ==========================================================================
    // ANIMATION ENGINE
    // ==========================================================================
    const AnimationEngine = {
        // Animate number counting up
        countUp(element, target, duration = 2000, suffix = '') {
            const start = 0;
            const startTime = performance.now();

            const update = (currentTime) => {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);
                const easeProgress = Utils.easeOutCubic(progress);
                const current = Math.floor(start + (target - start) * easeProgress);

                element.textContent = current.toLocaleString() + suffix;

                if (progress < 1) {
                    requestAnimationFrame(update);
                }
            };

            requestAnimationFrame(update);
        },

        // Typewriter effect
        typewriter(element, text, speed = 50) {
            let i = 0;
            element.textContent = '';

            const type = () => {
                if (i < text.length) {
                    element.textContent += text.charAt(i);
                    i++;
                    setTimeout(type, speed);
                }
            };

            type();
        },

        // Scramble text effect
        scrambleText(element, finalText, duration = 1000) {
            const chars = '!<>-_\\/[]{}—=+*^?#________';
            const length = finalText.length;
            const startTime = performance.now();

            const update = (currentTime) => {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);

                let result = '';
                for (let i = 0; i < length; i++) {
                    if (i < Math.floor(progress * length)) {
                        result += finalText[i];
                    } else {
                        result += chars[Math.floor(Math.random() * chars.length)];
                    }
                }
                element.textContent = result;

                if (progress < 1) {
                    requestAnimationFrame(update);
                }
            };

            requestAnimationFrame(update);
        },

        // Smooth scroll to element
        scrollTo(target, offset = 0, duration = 800) {
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
            const startPosition = window.pageYOffset;
            const distance = targetPosition - startPosition;
            const startTime = performance.now();

            const animate = (currentTime) => {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);
                const ease = Utils.easeInOutCubic(progress);

                window.scrollTo(0, startPosition + distance * ease);

                if (progress < 1) {
                    requestAnimationFrame(animate);
                }
            };

            requestAnimationFrame(animate);
        },

        // Magnetic button effect
        magneticButton(element, strength = 0.3) {
            element.addEventListener('mousemove', (e) => {
                const rect = element.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;

                element.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
            });

            element.addEventListener('mouseleave', () => {
                element.style.transform = 'translate(0, 0)';
            });
        },

        // Ripple effect
        ripple(event, element, color = 'rgba(229, 0, 0, 0.3)') {
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
                background: ${color};
                transform: scale(0);
                animation: ripple 0.6s ease-out;
                pointer-events: none;
            `;

            element.style.position = 'relative';
            element.style.overflow = 'hidden';
            element.appendChild(circle);

            setTimeout(() => circle.remove(), 600);
        }
    };

    // ==========================================================================
    // PARTICLE SYSTEM
    // ==========================================================================
    const ParticleSystem = {
        canvas: null,
        ctx: null,
        particles: [],
        animationId: null,
        isActive: false,

        init(canvasSelector, options = {}) {
            this.canvas = document.querySelector(canvasSelector);
            if (!this.canvas) return;

            this.ctx = this.canvas.getContext('2d');
            this.setCanvasSize();
            this.createParticles(options);
            this.bindEvents();
            this.animate();
            this.isActive = true;
        },

        setCanvasSize() {
            this.canvas.width = window.innerWidth;
            this.canvas.height = window.innerHeight;
        },

        createParticles(options) {
            const defaults = {
                count: 50,
                color: '#e50000',
                size: { min: 1, max: 3 },
                speed: { min: 0.5, max: 1.5 },
                opacity: { min: 0.1, max: 0.5 }
            };
            const config = { ...defaults, ...options };

            this.particles = [];
            for (let i = 0; i < config.count; i++) {
                this.particles.push({
                    x: Math.random() * this.canvas.width,
                    y: Math.random() * this.canvas.height,
                    size: Utils.random(config.size.min, config.size.max),
                    speedX: Utils.random(-config.speed.max, config.speed.max),
                    speedY: Utils.random(-config.speed.max, config.speed.max),
                    opacity: Utils.random(config.opacity.min, config.opacity.max),
                    color: config.color
                });
            }
        },

        bindEvents() {
            window.addEventListener('resize', Utils.debounce(() => {
                this.setCanvasSize();
            }, 250));
        },

        animate() {
            if (!this.isActive) return;

            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

            this.particles.forEach(particle => {
                // Update position
                particle.x += particle.speedX;
                particle.y += particle.speedY;

                // Wrap around screen
                if (particle.x < 0) particle.x = this.canvas.width;
                if (particle.x > this.canvas.width) particle.x = 0;
                if (particle.y < 0) particle.y = this.canvas.height;
                if (particle.y > this.canvas.height) particle.y = 0;

                // Draw particle
                this.ctx.beginPath();
                this.ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
                this.ctx.fillStyle = particle.color;
                this.ctx.globalAlpha = particle.opacity;
                this.ctx.fill();
            });

            this.ctx.globalAlpha = 1;
            this.animationId = requestAnimationFrame(() => this.animate());
        },

        destroy() {
            this.isActive = false;
            if (this.animationId) {
                cancelAnimationFrame(this.animationId);
            }
        }
    };

    // ==========================================================================
    // CURSOR EFFECTS
    // ==========================================================================
    const CursorEffects = {
        dot: null,
        outline: null,
        pos: { x: 0, y: 0 },
        target: { x: 0, y: 0 },

        init() {
            // Skip on touch devices
            if (window.matchMedia('(pointer: coarse)').matches) return;

            this.createElements();
            this.bindEvents();
            this.animate();
        },

        createElements() {
            // Create cursor dot
            this.dot = document.createElement('div');
            this.dot.className = 'cursor-dot';
            this.dot.style.cssText = `
                position: fixed;
                width: 8px;
                height: 8px;
                background: #e50000;
                border-radius: 50%;
                pointer-events: none;
                z-index: 99999;
                mix-blend-mode: difference;
                transition: transform 0.1s ease;
            `;

            // Create cursor outline
            this.outline = document.createElement('div');
            this.outline.className = 'cursor-outline';
            this.outline.style.cssText = `
                position: fixed;
                width: 40px;
                height: 40px;
                border: 2px solid rgba(229, 0, 0, 0.5);
                border-radius: 50%;
                pointer-events: none;
                z-index: 99998;
                transition: transform 0.15s ease, width 0.2s ease, height 0.2s ease, border-color 0.2s ease;
            `;

            document.body.appendChild(this.outline);
            document.body.appendChild(this.dot);

            // Hide default cursor
            document.body.style.cursor = 'none';
        },

        bindEvents() {
            document.addEventListener('mousemove', (e) => {
                this.target.x = e.clientX;
                this.target.y = e.clientY;
            }, { passive: true });

            // Hover effects on interactive elements
            const interactiveElements = document.querySelectorAll('a, button, [role="button"], input, textarea, select, [data-cursor-hover]');
            interactiveElements.forEach(el => {
                el.addEventListener('mouseenter', () => this.onHover());
                el.addEventListener('mouseleave', () => this.onLeave());
            });
        },

        onHover() {
            this.outline.style.width = '60px';
            this.outline.style.height = '60px';
            this.outline.style.borderColor = '#e50000';
            this.dot.style.transform = 'scale(1.5)';
        },

        onLeave() {
            this.outline.style.width = '40px';
            this.outline.style.height = '40px';
            this.outline.style.borderColor = 'rgba(229, 0, 0, 0.5)';
            this.dot.style.transform = 'scale(1)';
        },

        animate() {
            // Smooth follow
            this.pos.x += (this.target.x - this.pos.x) * 0.15;
            this.pos.y += (this.target.y - this.pos.y) * 0.15;

            this.dot.style.left = `${this.target.x - 4}px`;
            this.dot.style.top = `${this.target.y - 4}px`;

            this.outline.style.left = `${this.pos.x - 20}px`;
            this.outline.style.top = `${this.pos.y - 20}px`;

            requestAnimationFrame(() => this.animate());
        }
    };

    // ==========================================================================
    // SCROLL PROGRESS INDICATOR
    // ==========================================================================
    const ScrollProgress = {
        bar: null,

        init() {
            this.createBar();
            this.bindEvents();
        },

        createBar() {
            this.bar = document.createElement('div');
            this.bar.className = 'scroll-progress-bar';
            this.bar.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                height: 3px;
                background: linear-gradient(90deg, #e50000, #ff3333);
                width: 0%;
                z-index: 10000;
                transition: width 0.1s ease-out;
                box-shadow: 0 0 10px rgba(229, 0, 0, 0.5);
            `;
            document.body.appendChild(this.bar);
        },

        bindEvents() {
            window.addEventListener('scroll', Utils.throttle(() => {
                const scrollPercent = Utils.getScrollPercent();
                this.bar.style.width = `${scrollPercent}%`;
            }, 16), { passive: true });
        }
    };

    // ==========================================================================
    // TEXT REVEAL ANIMATIONS
    // ==========================================================================
    const TextReveal = {
        init() {
            this.wrapChars();
            this.bindObserver();
        },

        wrapChars() {
            document.querySelectorAll('[data-text-reveal]').forEach(el => {
                const text = el.textContent;
                el.innerHTML = '';
                text.split('').forEach((char, i) => {
                    const span = document.createElement('span');
                    span.textContent = char === ' ' ? '\u00A0' : char;
                    span.style.display = 'inline-block';
                    span.style.opacity = '0';
                    span.style.transform = 'translateY(20px)';
                    span.style.transition = `all 0.4s ease ${i * 0.03}s`;
                    el.appendChild(span);
                });
            });
        },

        bindObserver() {
            const observer = ObserverManager.create('textReveal', (element) => {
                element.querySelectorAll('span').forEach(span => {
                    span.style.opacity = '1';
                    span.style.transform = 'translateY(0)';
                });
            }, { threshold: 0.5 });

            document.querySelectorAll('[data-text-reveal]').forEach(el => {
                observer.observe(el);
            });
        }
    };

    // ==========================================================================
    // STAGGER ANIMATIONS
    // ==========================================================================
    const StaggerAnimations = {
        init() {
            this.bindObserver();
        },

        bindObserver() {
            const observer = ObserverManager.create('stagger', (element) => {
                const children = element.children;
                Array.from(children).forEach((child, i) => {
                    child.style.opacity = '0';
                    child.style.transform = 'translateY(20px)';
                    child.style.transition = `all 0.5s ease ${i * 0.1}s`;
                    
                    setTimeout(() => {
                        child.style.opacity = '1';
                        child.style.transform = 'translateY(0)';
                    }, 50);
                });
            }, { threshold: 0.2 });

            document.querySelectorAll('[data-stagger]').forEach(el => {
                observer.observe(el);
            });
        }
    };

    // ==========================================================================
    // PARALLAX IMAGES
    // ==========================================================================
    const ParallaxImages = {
        init() {
            document.querySelectorAll('[data-parallax]').forEach(el => {
                const speed = parseFloat(el.dataset.parallax) || 0.5;
                ScrollManager.add(el, 'parallax', { speed: speed * -1 });
            });
        }
    };

    // ==========================================================================
    // REVEAL ON SCROLL
    // ==========================================================================
    const RevealOnScroll = {
        init() {
            const animations = ['fade-up', 'fade-left', 'fade-right', 'fade-scale', 'rotate-in'];
            
            animations.forEach(anim => {
                document.querySelectorAll(`[data-reveal="${anim}"]`).forEach(el => {
                    const delay = parseInt(el.dataset.delay) || 0;
                    ScrollManager.add(el, 'reveal', { 
                        animation: `animate-${anim}`,
                        delay 
                    });
                });
            });
        }
    };

    // ==========================================================================
    // 3D CARD TILT
    // ==========================================================================
    const CardTilt = {
        init() {
            document.querySelectorAll('[data-tilt]').forEach(el => {
                const intensity = parseFloat(el.dataset.tilt) || 10;
                MouseTracker.add(el, '3d-tilt', intensity);
            });
        }
    };

    // ==========================================================================
    // MAGNETIC ELEMENTS
    // ==========================================================================
    const MagneticElements = {
        init() {
            document.querySelectorAll('[data-magnetic]').forEach(el => {
                const strength = parseFloat(el.dataset.magnetic) || 0.3;
                AnimationEngine.magneticButton(el, strength);
            });
        }
    };

    // ==========================================================================
    // COUNT UP ANIMATION
    // ==========================================================================
    const CountUpAnimation = {
        init() {
            const observer = ObserverManager.create('countUp', (element) => {
                const target = parseInt(element.dataset.countUp);
                const suffix = element.dataset.suffix || '';
                AnimationEngine.countUp(element, target, 2000, suffix);
            }, { threshold: 0.5 });

            document.querySelectorAll('[data-count-up]').forEach(el => {
                observer.observe(el);
            });
        }
    };

    // ==========================================================================
    // SMOOTH SCROLL LINKS
    // ==========================================================================
    const SmoothScrollLinks = {
        init() {
            document.querySelectorAll('a[href^="#"]').forEach(link => {
                link.addEventListener('click', (e) => {
                    const target = document.querySelector(link.getAttribute('href'));
                    if (target) {
                        e.preventDefault();
                        AnimationEngine.scrollTo(target, 80);
                    }
                });
            });
        }
    };

    // ==========================================================================
    // RIPPLE BUTTONS
    // ==========================================================================
    const RippleButtons = {
        init() {
            document.querySelectorAll('[data-ripple]').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const color = btn.dataset.rippleColor || 'rgba(229, 0, 0, 0.3)';
                    AnimationEngine.ripple(e, btn, color);
                });
            });
        }
    };

    // ==========================================================================
    // NAVIGATION SCROLL BEHAVIOR
    // ==========================================================================
    const NavigationScroll = {
        nav: null,
        lastScroll: 0,

        init() {
            this.nav = document.querySelector('[data-nav-scroll]');
            if (!this.nav) return;

            this.bindEvents();
        },

        bindEvents() {
            window.addEventListener('scroll', Utils.throttle(() => {
                const currentScroll = window.pageYOffset;
                
                if (currentScroll > 100) {
                    this.nav.classList.add('nav-scrolled');
                } else {
                    this.nav.classList.remove('nav-scrolled');
                }

                if (currentScroll > this.lastScroll && currentScroll > 200) {
                    this.nav.classList.add('nav-hidden');
                } else {
                    this.nav.classList.remove('nav-hidden');
                }

                this.lastScroll = currentScroll;
            }, 100), { passive: true });
        }
    };

    // ==========================================================================
    // LAZY LOADING IMAGES
    // ==========================================================================
    const LazyLoadImages = {
        init() {
            const observer = ObserverManager.create('lazyLoad', (img) => {
                const src = img.dataset.src;
                if (src) {
                    img.src = src;
                    img.style.opacity = '0';
                    img.onload = () => {
                        img.style.transition = 'opacity 0.5s ease';
                        img.style.opacity = '1';
                    };
                }
            }, { rootMargin: '50px 0px' });

            document.querySelectorAll('img[data-src]').forEach(img => {
                observer.observe(img);
            });
        }
    };

    // ==========================================================================
    // MOBILE MENU
    // ==========================================================================
    const MobileMenu = {
        toggle: null,
        menu: null,
        isOpen: false,

        init() {
            this.toggle = document.querySelector('[data-menu-toggle]');
            this.menu = document.querySelector('[data-menu]');
            if (!this.toggle || !this.menu) return;

            this.bindEvents();
        },

        bindEvents() {
            this.toggle.addEventListener('click', () => this.toggleMenu());

            // Close on link click
            this.menu.querySelectorAll('a').forEach(link => {
                link.addEventListener('click', () => this.close());
            });

            // Close on escape
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape' && this.isOpen) this.close();
            });
        },

        toggleMenu() {
            this.isOpen ? this.close() : this.open();
        },

        open() {
            this.isOpen = true;
            this.menu.classList.add('active');
            this.toggle.classList.add('active');
            document.body.style.overflow = 'hidden';
        },

        close() {
            this.isOpen = false;
            this.menu.classList.remove('active');
            this.toggle.classList.remove('active');
            document.body.style.overflow = '';
        }
    };

    // ==========================================================================
    // TABS COMPONENT
    // ==========================================================================
    const TabsComponent = {
        init() {
            document.querySelectorAll('[data-tabs]').forEach(tabGroup => {
                this.initializeTabGroup(tabGroup);
            });
        },

        initializeTabGroup(tabGroup) {
            const triggers = tabGroup.querySelectorAll('[data-tab-trigger]');
            const panels = tabGroup.querySelectorAll('[data-tab-panel]');

            triggers.forEach(trigger => {
                trigger.addEventListener('click', () => {
                    const target = trigger.dataset.tabTrigger;

                    // Update triggers
                    triggers.forEach(t => t.classList.remove('active'));
                    trigger.classList.add('active');

                    // Update panels
                    panels.forEach(panel => {
                        panel.classList.remove('active');
                        if (panel.dataset.tabPanel === target) {
                            panel.classList.add('active');
                        }
                    });
                });
            });
        }
    };

    // ==========================================================================
    // ACCORDION COMPONENT
    // ==========================================================================
    const AccordionComponent = {
        init() {
            document.querySelectorAll('[data-accordion]').forEach(accordion => {
                this.initializeAccordion(accordion);
            });
        },

        initializeAccordion(accordion) {
            const items = accordion.querySelectorAll('[data-accordion-item]');

            items.forEach(item => {
                const header = item.querySelector('[data-accordion-header]');
                header.addEventListener('click', () => {
                    const isActive = item.classList.contains('active');

                    // Close all items if accordion is exclusive
                    if (accordion.dataset.accordion === 'exclusive') {
                        items.forEach(i => i.classList.remove('active'));
                    }

                    // Toggle current item
                    item.classList.toggle('active', !isActive);
                });
            });
        }
    };

    // ==========================================================================
    // DROPDOWN COMPONENT
    // ==========================================================================
    const DropdownComponent = {
        init() {
            document.querySelectorAll('[data-dropdown]').forEach(dropdown => {
                this.initializeDropdown(dropdown);
            });
        },

        initializeDropdown(dropdown) {
            const trigger = dropdown.querySelector('[data-dropdown-trigger]');
            const menu = dropdown.querySelector('[data-dropdown-menu]');

            trigger.addEventListener('click', (e) => {
                e.stopPropagation();
                dropdown.classList.toggle('active');
            });

            // Close when clicking outside
            document.addEventListener('click', () => {
                dropdown.classList.remove('active');
            });

            menu.addEventListener('click', (e) => {
                e.stopPropagation();
            });
        }
    };

    // ==========================================================================
    // MODAL COMPONENT
    // ==========================================================================
    const ModalComponent = {
        init() {
            // Open modal triggers
            document.querySelectorAll('[data-modal-open]').forEach(btn => {
                btn.addEventListener('click', () => {
                    const modalId = btn.dataset.modalOpen;
                    this.open(modalId);
                });
            });

            // Close modal triggers
            document.querySelectorAll('[data-modal-close]').forEach(btn => {
                btn.addEventListener('click', () => {
                    const modal = btn.closest('[data-modal]');
                    this.close(modal);
                });
            });

            // Close on overlay click
            document.querySelectorAll('[data-modal]').forEach(modal => {
                modal.addEventListener('click', (e) => {
                    if (e.target === modal) this.close(modal);
                });
            });
        },

        open(modalId) {
            const modal = document.querySelector(`[data-modal="${modalId}"]`);
            if (modal) {
                modal.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        },

        close(modal) {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        }
    };

    // ==========================================================================
    // TOAST NOTIFICATIONS
    // ==========================================================================
    const ToastNotifications = {
        container: null,

        init() {
            this.createContainer();
        },

        createContainer() {
            this.container = document.createElement('div');
            this.container.className = 'toast-container';
            document.body.appendChild(this.container);
        },

        show(message, type = 'info', duration = 3000) {
            const toast = document.createElement('div');
            toast.className = `toast toast-${type}`;
            toast.innerHTML = `
                <div class="toast-content">
                    <div class="toast-message">${message}</div>
                </div>
                <button class="toast-close">&times;</button>
            `;

            this.container.appendChild(toast);

            // Close button
            toast.querySelector('.toast-close').addEventListener('click', () => {
                this.hide(toast);
            });

            // Auto close
            if (duration) {
                setTimeout(() => this.hide(toast), duration);
            }
        },

        hide(toast) {
            toast.classList.add('toast-exit');
            setTimeout(() => toast.remove(), 300);
        }
    };

    // ==========================================================================
    // INITIALIZATION
    // ==========================================================================
    function init() {
        // Core systems
        ScrollManager.init();
        MouseTracker.init();
        ScrollProgress.init();

        // Animations
        TextReveal.init();
        StaggerAnimations.init();
        ParallaxImages.init();
        RevealOnScroll.init();
        CardTilt.init();
        MagneticElements.init();
        CountUpAnimation.init();

        // Interactions
        SmoothScrollLinks.init();
        RippleButtons.init();
        NavigationScroll.init();
        LazyLoadImages.init();

        // Components
        MobileMenu.init();
        TabsComponent.init();
        AccordionComponent.init();
        DropdownComponent.init();
        ModalComponent.init();
        ToastNotifications.init();

        // Optional effects
        if (document.querySelector('[data-cursor-effects]')) {
            CursorEffects.init();
        }

        // Dispatch ready event
        Utils.dispatchEvent('portfolioReady');

        console.log('🚀 Zefanya Williams Portfolio - Interactions Engine Loaded');
    }

    // Run on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    // Expose API globally
    window.PortfolioAPI = {
        Utils,
        ScrollManager,
        MouseTracker,
        AnimationEngine,
        ParticleSystem,
        ToastNotifications,
        ObserverManager
    };

})();
