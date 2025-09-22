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

// Create floating lines
function createFloatingLines() {
    const floatingLines = document.getElementById('floating-lines');
    const lineCount = 15;
    
    for (let i = 0; i < lineCount; i++) {
        // Horizontal lines
        const line = document.createElement('div');
        line.classList.add('line');
        
        // Random position
        line.style.top = `${Math.random() * 100}%`;
        
        // Random animation duration
        const duration = Math.random() * 10 + 10;
        line.style.animationDuration = `${duration}s`;
        
        // Random delay
        line.style.animationDelay = `${Math.random() * 15}s`;
        
        floatingLines.appendChild(line);
        
        // Vertical lines
        const vLine = document.createElement('div');
        vLine.classList.add('line', 'vertical');
        
        // Random position
        vLine.style.left = `${Math.random() * 100}%`;
        
        // Random animation duration
        const vDuration = Math.random() * 10 + 10;
        vLine.style.animationDuration = `${vDuration}s`;
        
        // Random delay
        vLine.style.animationDelay = `${Math.random() * 15}s`;
        
        floatingLines.appendChild(vLine);
        
        // Diagonal lines
        const dLine = document.createElement('div');
        dLine.classList.add('line', 'diagonal');
        
        // Random position
        dLine.style.left = `${Math.random() * 100}%`;
        dLine.style.top = `${Math.random() * 100}%`;
        
        // Random rotation
        const rotation = Math.random() * 90;
        dLine.style.transform = `rotate(${rotation}deg)`;
        
        // Random animation duration
        const dDuration = Math.random() * 15 + 15;
        dLine.style.animationDuration = `${dDuration}s`;
        
        // Random delay
        dLine.style.animationDelay = `${Math.random() * 20}s`;
        
        floatingLines.appendChild(dLine);
    }
}

// Create floating dots
function createFloatingDots() {
    const floatingDots = document.getElementById('floating-dots');
    const dotCount = 20;
    
    for (let i = 0; i < dotCount; i++) {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        
        // Random size
        const size = Math.random() * 50 + 20;
        dot.style.width = `${size}px`;
        dot.style.height = `${size}px`;
        
        // Random position
        dot.style.left = `${Math.random() * 100}%`;
        dot.style.top = `${Math.random() * 100}%`;
        
        // Random animation duration
        const duration = Math.random() * 20 + 10;
        dot.style.animationDuration = `${duration}s`;
        
        // Random delay
        dot.style.animationDelay = `${Math.random() * 10}s`;
        
        // Random opacity
        dot.style.opacity = Math.random() * 0.2 + 0.1;
        
        floatingDots.appendChild(dot);
    }
}

// Create circuit lines
function createCircuitLines() {
    const circuitLines = document.getElementById('circuit-lines');
    const circuitCount = 30;
    
    for (let i = 0; i < circuitCount; i++) {
        // Horizontal circuits
        const hCircuit = document.createElement('div');
        hCircuit.classList.add('circuit', 'horizontal');
        
        // Random position
        hCircuit.style.left = `${Math.random() * 100}%`;
        hCircuit.style.top = `${Math.random() * 100}%`;
        
        // Random width
        const width = Math.random() * 150 + 50;
        hCircuit.style.width = `${width}px`;
        
        // Random animation delay
        hCircuit.style.animationDelay = `${Math.random() * 4}s`;
        
        circuitLines.appendChild(hCircuit);
        
        // Vertical circuits
        const vCircuit = document.createElement('div');
        vCircuit.classList.add('circuit', 'vertical');
        
        // Random position
        vCircuit.style.left = `${Math.random() * 100}%`;
        vCircuit.style.top = `${Math.random() * 100}%`;
        
        // Random height
        const height = Math.random() * 150 + 50;
        vCircuit.style.height = `${height}px`;
        
        // Random animation delay
        vCircuit.style.animationDelay = `${Math.random() * 4}s`;
        
        circuitLines.appendChild(vCircuit);
        
        // Corner circuits
        const corner = document.createElement('div');
        corner.classList.add('circuit', 'corner');
        
        // Random position
        corner.style.left = `${Math.random() * 100}%`;
        corner.style.top = `${Math.random() * 100}%`;
        
        // Random size
        const size = Math.random() * 30 + 10;
        corner.style.width = `${size}px`;
        corner.style.height = `${size}px`;
        
        // Random rotation
        const rotation = Math.floor(Math.random() * 4) * 90;
        corner.style.transform = `rotate(${rotation}deg)`;
        
        // Random animation delay
        corner.style.animationDelay = `${Math.random() * 4}s`;
        
        circuitLines.appendChild(corner);
    }
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

// Create matrix rain effect
function createMatrixRain() {
    const matrixRain = document.getElementById('matrix-rain');
    const columnCount = 30;
    const characters = "01";
    
    for (let i = 0; i < columnCount; i++) {
        const column = document.createElement('div');
        column.classList.add('matrix-column');
        
        // Create random characters
        let columnContent = '';
        const charCount = Math.floor(Math.random() * 20) + 10;
        
        for (let j = 0; j < charCount; j++) {
            columnContent += characters.charAt(Math.floor(Math.random() * characters.length));
            columnContent += '<br>';
        }
        
        column.innerHTML = columnContent;
        
        // Random position
        column.style.left = `${Math.random() * 100}%`;
        
        // Random animation duration
        const duration = Math.random() * 10 + 10;
        column.style.animationDuration = `${duration}s`;
        
        // Random delay
        column.style.animationDelay = `${Math.random() * 15}s`;
        
        matrixRain.appendChild(column);
    }
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

// Create digital particles
function createDigitalParticles() {
    const digitalParticles = document.getElementById('digital-particles');
    const particleCount = 40;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('digital-particle');
        
        // Random size
        const size = Math.random() * 4 + 1;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        
        // Random position
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        
        // Random animation duration
        const duration = Math.random() * 15 + 10;
        particle.style.animationDuration = `${duration}s`;
        
        // Random delay
        particle.style.animationDelay = `${Math.random() * 10}s`;
        
        // Random direction
        const directionX = Math.random() * 100 - 50;
        const directionY = Math.random() * 100 - 50;
        particle.style.setProperty('--move-x', `${directionX}px`);
        particle.style.setProperty('--move-y', `${directionY}px`);
        
        digitalParticles.appendChild(particle);
    }
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
