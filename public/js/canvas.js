// canvas.js - Canvas drawing functionality
document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.getElementById('drawingCanvas');
    if (!canvas) {
        console.error('Canvas element not found!');
        return;
    }
    
    const ctx = canvas.getContext('2d');
    let isDrawing = false;
    let currentTool = 'pencil';
    let currentColor = '#FF003C';
    let brushSize = 8;
    let lastX = 0;
    let lastY = 0;

    // Initialize canvas
    function initCanvas() {
        // Set initial canvas size
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);
        
        // Set default canvas background
        ctx.fillStyle = 'rgba(10, 0, 15, 0.95)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // Set initial drawing style
        ctx.strokeStyle = currentColor;
        ctx.lineWidth = brushSize;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        
        // Event listeners for mouse
        canvas.addEventListener('mousedown', startDrawing);
        canvas.addEventListener('mouseup', stopDrawing);
        canvas.addEventListener('mouseout', stopDrawing);
        canvas.addEventListener('mousemove', draw);
        
        // Event listeners for touch
        canvas.addEventListener('touchstart', handleTouchStart, { passive: false });
        canvas.addEventListener('touchend', stopDrawing);
        canvas.addEventListener('touchcancel', stopDrawing);
        canvas.addEventListener('touchmove', handleTouchMove, { passive: false });
        
        // Brush size control
        const brushSizeSlider = document.getElementById('brushSize');
        const brushSizeValue = document.getElementById('brushSizeValue');
        
        if (brushSizeSlider && brushSizeValue) {
            brushSizeSlider.value = brushSize;
            brushSizeValue.textContent = `${brushSize}px`;
            
            brushSizeSlider.addEventListener('input', function() {
                brushSize = parseInt(this.value);
                brushSizeValue.textContent = `${brushSize}px`;
            });
        }
        
        // Tool buttons
        const toolButtons = document.querySelectorAll('[data-tool]');
        toolButtons.forEach(button => {
            button.addEventListener('click', function() {
                currentTool = this.dataset.tool;
                
                if (currentTool === 'clear') {
                    clearCanvas();
                    currentTool = 'pencil';
                }
                
                updateActiveToolButtons();
            });
        });
        
        // Color buttons
        const colorButtons = document.querySelectorAll('.color-btn');
        colorButtons.forEach(button => {
            button.addEventListener('click', function() {
                currentColor = this.dataset.color;
                currentTool = 'pencil';
                updateActiveToolButtons();
            });
        });
        
        // Color picker
        const customColorPicker = document.getElementById('customColorPicker');
        if (customColorPicker) {
            customColorPicker.addEventListener('input', function() {
                currentColor = this.value;
                currentTool = 'pencil';
                updateActiveToolButtons();
            });
        }
        
        // Image upload
        const imageUpload = document.getElementById('imageUpload');
        if (imageUpload) {
            imageUpload.addEventListener('change', function(e) {
                const file = e.target.files[0];
                if (file) {
                    const reader = new FileReader();
                    reader.onload = function(event) {
                        const img = new Image();
                        img.onload = function() {
                            // Clear canvas
                            ctx.fillStyle = 'rgba(10, 0, 15, 0.95)';
                            ctx.fillRect(0, 0, canvas.width, canvas.height);
                            
                            // Draw image to fit canvas while maintaining aspect ratio
                            const hRatio = canvas.width / img.width;
                            const vRatio = canvas.height / img.height;
                            const ratio = Math.min(hRatio, vRatio);
                            const centerX = (canvas.width - img.width * ratio) / 2;
                            const centerY = (canvas.height - img.height * ratio) / 2;
                            
                            ctx.drawImage(img, 0, 0, img.width, img.height, 
                                         centerX, centerY, 
                                         img.width * ratio, img.height * ratio);
                            
                            // Switch to pencil tool for editing
                            currentTool = 'pencil';
                            updateActiveToolButtons();
                        };
                        img.src = event.target.result;
                    };
                    reader.readAsDataURL(file);
                }
                // Reset file input
                e.target.value = '';
            });
        }
        
        // Download button
        const downloadBtn = document.getElementById('downloadBtn');
        if (downloadBtn) {
            downloadBtn.addEventListener('click', function() {
                const link = document.createElement('a');
                link.download = 'drawing-' + new Date().getTime() + '.png';
                link.href = canvas.toDataURL('image/png');
                link.click();
            });
        }
        
        // Save button
        const saveBtn = document.getElementById('saveBtn');
        if (saveBtn) {
            saveBtn.addEventListener('click', function() {
                alert('Gambar Anda telah disimpan ke Galeri Futuristik!');
            });
        }
    }

    function resizeCanvas() {
        const container = canvas.parentElement;
        canvas.width = container.clientWidth;
        canvas.height = Math.floor(container.clientWidth * 0.7); // 16:9 aspect ratio
        
        // Redraw canvas content if needed
        redrawCanvas();
    }
    
    function redrawCanvas() {
        // This function can be used to redraw the canvas content after resize
        // Currently, it just fills with the background color
        ctx.fillStyle = 'rgba(10, 0, 15, 0.95)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    function startDrawing(e) {
        isDrawing = true;
        const pos = getMousePos(canvas, e);
        [lastX, lastY] = [pos.x, pos.y];
        ctx.beginPath();
        ctx.moveTo(lastX, lastY);
    }

    function stopDrawing() {
        isDrawing = false;
    }

    function getMousePos(canvas, evt) {
        const rect = canvas.getBoundingClientRect();
        let clientX, clientY;
        
        if (evt.touches) {
            clientX = evt.touches[0].clientX;
            clientY = evt.touches[0].clientY;
        } else {
            clientX = evt.clientX;
            clientY = evt.clientY;
        }
        
        return {
            x: clientX - rect.left,
            y: clientY - rect.top
        };
    }

    function draw(e) {
        if (!isDrawing) return;
        
        const pos = getMousePos(canvas, e);
        const x = pos.x;
        const y = pos.y;
        
        ctx.lineWidth = brushSize;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        
        if (currentTool === 'pencil') {
            ctx.strokeStyle = currentColor;
            ctx.globalCompositeOperation = 'source-over';
        } else if (currentTool === 'eraser') {
            ctx.strokeStyle = 'rgba(10, 0, 15, 0.95)';
            ctx.globalCompositeOperation = 'destination-out';
        }
        
        ctx.beginPath();
        ctx.moveTo(lastX, lastY);
        ctx.lineTo(x, y);
        ctx.stroke();
        
        [lastX, lastY] = [x, y];
    }

    function handleTouchStart(e) {
        e.preventDefault();
        startDrawing(e);
    }

    function handleTouchMove(e) {
        e.preventDefault();
        draw(e);
    }

    function clearCanvas() {
        if (confirm('Are you sure you want to clear the canvas?')) {
            ctx.fillStyle = 'rgba(10, 0, 15, 0.95)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
        }
    }

    function updateActiveToolButtons() {
        const toolButtons = document.querySelectorAll('[data-tool]');
        toolButtons.forEach(button => {
            if (button.dataset.tool === currentTool) {
                button.classList.add('active');
            } else {
                button.classList.remove('active');
            }
        });
    }

    // Initialize the canvas when the DOM is fully loaded
    initCanvas();
});
