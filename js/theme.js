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
});
