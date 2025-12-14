document.addEventListener('DOMContentLoaded', () => {
    // Check if background elements exist, if not create them
    createBackgroundContainers();
    
    // Create all background effects
    createFloatingLines();
    createFloatingDots();
    createCircuitLines();
    createFloatingHexagons();
    createMatrixRain();
    createNeonGrid();
    createGlowingOrbs();
    createTechNodes();
    createPulseWaves();
    createDigitalParticles();
    
    // Initialize the digital clock
    initDigitalClock();
});

// Create background containers if they don't exist
function createBackgroundContainers() {
    const containers = [
        'floating-lines',
        'floating-dots',
        'circuit-lines',
        'floating-hexagons',
        'matrix-rain',
        'neon-grid',
        'glowing-orbs',
        'tech-nodes',
        'pulse-waves',
        'digital-particles'
    ];
    
    containers.forEach(id => {
        if (!document.getElementById(id)) {
            const container = document.createElement('div');
            container.id = id;
            container.className = id;
            document.body.appendChild(container);
        }
    });
    
    // Create grid container for neon grid
    const neonGrid = document.getElementById('neon-grid');
    if (!neonGrid.querySelector('.grid-container')) {
        const gridContainer = document.createElement('div');
        gridContainer.className = 'grid-container';
        neonGrid.appendChild(gridContainer);
    }
}

// Create floating lines - optimized with document fragment
function createFloatingLines() {
    const floatingLines = document.getElementById('floating-lines');
    const lineCount = 10; // Reduced from 15 for better performance
    const fragment = document.createDocumentFragment();
    
    for (let i = 0; i < lineCount; i++) {
        // Horizontal lines
        const line = document.createElement('div');
        line.className = 'line';
        const duration = Math.random() * 10 + 10;
        line.style.cssText = `
            top: ${Math.random() * 100}%;
            animation-duration: ${duration}s;
            animation-delay: ${Math.random() * 15}s;
            will-change: transform;
        `;
        fragment.appendChild(line);
        
        // Vertical lines
        const vLine = document.createElement('div');
        vLine.className = 'line vertical';
        const vDuration = Math.random() * 10 + 10;
        vLine.style.cssText = `
            left: ${Math.random() * 100}%;
            animation-duration: ${vDuration}s;
            animation-delay: ${Math.random() * 15}s;
            will-change: transform;
        `;
        fragment.appendChild(vLine);
        
        // Diagonal lines
        const dLine = document.createElement('div');
        dLine.className = 'line diagonal';
        const rotation = Math.random() * 90;
        const dDuration = Math.random() * 15 + 15;
        dLine.style.cssText = `
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            transform: rotate(${rotation}deg);
            animation-duration: ${dDuration}s;
            animation-delay: ${Math.random() * 20}s;
            will-change: transform;
        `;
        fragment.appendChild(dLine);
    }
    
    floatingLines.appendChild(fragment);
}

// Create floating dots - optimized
function createFloatingDots() {
    const floatingDots = document.getElementById('floating-dots');
    const dotCount = 15; // Reduced from 20
    const fragment = document.createDocumentFragment();
    
    for (let i = 0; i < dotCount; i++) {
        const dot = document.createElement('div');
        dot.className = 'dot';
        const size = Math.random() * 50 + 20;
        const duration = Math.random() * 20 + 10;
        
        dot.style.cssText = `
            width: ${size}px;
            height: ${size}px;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation-duration: ${duration}s;
            animation-delay: ${Math.random() * 10}s;
            opacity: ${Math.random() * 0.2 + 0.1};
            will-change: transform, opacity;
        `;
        
        fragment.appendChild(dot);
    }
    
    floatingDots.appendChild(fragment);
}

// Create circuit lines - optimized
function createCircuitLines() {
    const circuitLines = document.getElementById('circuit-lines');
    const circuitCount = 20; // Reduced from 30
    const fragment = document.createDocumentFragment();
    
    for (let i = 0; i < circuitCount; i++) {
        // Horizontal circuits
        const hCircuit = document.createElement('div');
        hCircuit.className = 'circuit horizontal';
        const width = Math.random() * 150 + 50;
        hCircuit.style.cssText = `
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            width: ${width}px;
            animation-delay: ${Math.random() * 4}s;
            will-change: opacity;
        `;
        fragment.appendChild(hCircuit);
        
        // Vertical circuits
        const vCircuit = document.createElement('div');
        vCircuit.className = 'circuit vertical';
        const height = Math.random() * 150 + 50;
        vCircuit.style.cssText = `
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            height: ${height}px;
            animation-delay: ${Math.random() * 4}s;
            will-change: opacity;
        `;
        fragment.appendChild(vCircuit);
        
        // Corner circuits
        const corner = document.createElement('div');
        corner.className = 'circuit corner';
        const size = Math.random() * 30 + 10;
        const rotation = Math.floor(Math.random() * 4) * 90;
        corner.style.cssText = `
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            width: ${size}px;
            height: ${size}px;
            transform: rotate(${rotation}deg);
            animation-delay: ${Math.random() * 4}s;
            will-change: opacity;
        `;
        fragment.appendChild(corner);
    }
    
    circuitLines.appendChild(fragment);
}

// Create floating hexagons
function createFloatingHexagons() {
    const floatingHexagons = document.getElementById('floating-hexagons');
    const hexCount = 10;
    
    for (let i = 0; i < hexCount; i++) {
        const hexagon = document.createElement('div');
        hexagon.classList.add('hexagon');
        
        // Random size
        const size = Math.random() * 80 + 40;
        const height = size * 0.5774; // sqrt(3)/2
        
        hexagon.style.width = `${size}px`;
        hexagon.style.height = `${height}px`;
        
        // Random position
        hexagon.style.left = `${Math.random() * 100}%`;
        hexagon.style.top = `${Math.random() * 100}%`;
        
        // Random animation duration
        const duration = Math.random() * 20 + 20;
        hexagon.style.animationDuration = `${duration}s`;
        
        // Random delay
        hexagon.style.animationDelay = `${Math.random() * 20}s`;
        
        floatingHexagons.appendChild(hexagon);
    }
}

// Create matrix rain effect - optimized
function createMatrixRain() {
    const matrixRain = document.getElementById('matrix-rain');
    const columnCount = 20; // Reduced from 30
    const characters = "01";
    const fragment = document.createDocumentFragment();
    
    for (let i = 0; i < columnCount; i++) {
        const column = document.createElement('div');
        column.className = 'matrix-column';
        
        // Create random characters
        const charCount = Math.floor(Math.random() * 20) + 10;
        const columnContent = Array.from({ length: charCount }, () => 
            characters.charAt(Math.floor(Math.random() * characters.length))
        ).join('<br>');
        
        column.innerHTML = columnContent;
        
        const duration = Math.random() * 10 + 10;
        column.style.cssText = `
            left: ${Math.random() * 100}%;
            animation-duration: ${duration}s;
            animation-delay: ${Math.random() * 15}s;
            will-change: transform;
        `;
        
        fragment.appendChild(column);
    }
    
    matrixRain.appendChild(fragment);
}

// Create neon grid
function createNeonGrid() {
    const gridContainer = document.querySelector('.grid-container');
    const gridSize = 20; // Number of lines in each direction
    const spacing = 100; // Spacing between lines in pixels
    
    // Create horizontal grid lines
    for (let i = 0; i <= gridSize; i++) {
        const gridLine = document.createElement('div');
        gridLine.classList.add('grid-line', 'horizontal');
        
        // Position
        gridLine.style.top = `${(i * spacing)}px`;
        
        // Random animation delay
        gridLine.style.animationDelay = `${Math.random() * 4}s`;
        
        gridContainer.appendChild(gridLine);
    }
    
    // Create vertical grid lines
    for (let i = 0; i <= gridSize; i++) {
        const gridLine = document.createElement('div');
        gridLine.classList.add('grid-line', 'vertical');
        
        // Position
        gridLine.style.left = `${(i * spacing)}px`;
        
        // Random animation delay
        gridLine.style.animationDelay = `${Math.random() * 4}s`;
        
        gridContainer.appendChild(gridLine);
    }
}

// Create glowing orbs
function createGlowingOrbs() {
    const glowingOrbs = document.getElementById('glowing-orbs');
    const orbCount = 15;
    
    for (let i = 0; i < orbCount; i++) {
        const orb = document.createElement('div');
        orb.classList.add('orb');
        
        // Random size
        const size = Math.random() * 120 + 60;
        orb.style.width = `${size}px`;
        orb.style.height = `${size}px`;
        
        // Random position
        orb.style.left = `${Math.random() * 100}%`;
        orb.style.top = `${Math.random() * 100}%`;
        
        // Random animation duration
        const duration = Math.random() * 30 + 20;
        orb.style.animationDuration = `${duration}s`;
        
        // Random delay
        orb.style.animationDelay = `${Math.random() * 15}s`;
        
        // Random opacity
        orb.style.opacity = Math.random() * 0.15 + 0.05;
        
        glowingOrbs.appendChild(orb);
    }
}

// Create tech nodes
function createTechNodes() {
    const techNodes = document.getElementById('tech-nodes');
    const nodeCount = 20;
    
    for (let i = 0; i < nodeCount; i++) {
        const node = document.createElement('div');
        node.classList.add('node');
        
        // Random size
        const size = Math.random() * 15 + 5;
        node.style.width = `${size}px`;
        node.style.height = `${size}px`;
        
        // Random position
        node.style.left = `${Math.random() * 100}%`;
        node.style.top = `${Math.random() * 100}%`;
        
        // Create connection lines
        if (Math.random() > 0.5 && i > 0) {
            const connection = document.createElement('div');
            connection.classList.add('node-connection');
            
            // Random width (length of connection)
            const width = Math.random() * 150 + 50;
            connection.style.width = `${width}px`;
            
            // Random rotation
            const rotation = Math.random() * 360;
            connection.style.transform = `rotate(${rotation}deg)`;
            
            // Random animation duration
            const duration = Math.random() * 4 + 2;
            connection.style.animationDuration = `${duration}s`;
            
            node.appendChild(connection);
        }
        
        // Random animation duration for pulse
        const duration = Math.random() * 4 + 2;
        node.style.animationDuration = `${duration}s`;
        
        // Random delay
        node.style.animationDelay = `${Math.random() * 5}s`;
        
        techNodes.appendChild(node);
    }
}

// Create pulse waves
function createPulseWaves() {
    const pulseWaves = document.getElementById('pulse-waves');
    const waveCount = 8;
    
    for (let i = 0; i < waveCount; i++) {
        const wave = document.createElement('div');
        wave.classList.add('pulse-wave');
        
        // Random position
        wave.style.left = `${Math.random() * 100}%`;
        wave.style.top = `${Math.random() * 100}%`;
        
        // Random animation duration
        const duration = Math.random() * 10 + 10;
        wave.style.animationDuration = `${duration}s`;
        
        // Random delay
        wave.style.animationDelay = `${Math.random() * 20}s`;
        
        // Random size
        const size = Math.random() * 200 + 100;
        wave.style.setProperty('--max-size', `${size}px`);
        
        pulseWaves.appendChild(wave);
    }
}

// Create digital particles - optimized
function createDigitalParticles() {
    const digitalParticles = document.getElementById('digital-particles');
    const particleCount = 30; // Reduced from 40
    const fragment = document.createDocumentFragment();
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'digital-particle';
        
        const size = Math.random() * 4 + 1;
        const duration = Math.random() * 15 + 10;
        const directionX = Math.random() * 100 - 50;
        const directionY = Math.random() * 100 - 50;
        
        particle.style.cssText = `
            width: ${size}px;
            height: ${size}px;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation-duration: ${duration}s;
            animation-delay: ${Math.random() * 10}s;
            --move-x: ${directionX}px;
            --move-y: ${directionY}px;
            will-change: transform, opacity;
        `;
        
        fragment.appendChild(particle);
    }
    
    digitalParticles.appendChild(fragment);
}

// Update Jakarta time
function updateJakartaTime() {
    const options = {
        timeZone: 'Asia/Jakarta',
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    };
    const timeString = new Date().toLocaleTimeString('en-US', options);
    const clockElement = document.getElementById('jakarta-time');
    if (clockElement) {
        clockElement.innerHTML = `${timeString} <span class="timezone">WIB</span>`;
    }
}

// Run the clock immediately and then every second
function initDigitalClock() {
    updateJakartaTime();
    setInterval(updateJakartaTime, 1000);
}
