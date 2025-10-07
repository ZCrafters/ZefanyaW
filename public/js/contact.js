// Enhanced contact form submission with better animations
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');
    const sendButton = document.getElementById('send-button');
    const spinner = document.getElementById('spinner');
    const sendText = sendButton ? sendButton.querySelector('span:first-child') : null;
    const formInputs = contactForm ? contactForm.querySelectorAll('input, textarea') : [];

    // Add floating animation to form inputs on focus
    formInputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.classList.add('input-focused');
            this.parentElement.style.transform = 'translateY(-3px)';
        });

        input.addEventListener('blur', function() {
            this.parentElement.classList.remove('input-focused');
            this.parentElement.style.transform = 'translateY(0)';
        });
    });

    // Form submission handler
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Show loading state with animation
            if (sendButton && sendText) {
                sendButton.disabled = true;
                sendButton.style.transform = 'scale(0.98)';
                sendText.textContent = 'Sending...';
                spinner.classList.remove('hidden');
                spinner.style.animation = 'spin 0.8s linear infinite';
            }

            // Add pulse animation to form
            contactForm.style.animation = 'pulse 2s infinite';
            
            // Hide any previous messages
            if (formMessage) {
                formMessage.style.opacity = '0';
                formMessage.style.transform = 'translateY(10px)';
                formMessage.style.display = 'none';
            }

            // Get form data
            const formData = new FormData(contactForm);
            const formProps = Object.fromEntries(formData);

            // Simulate API call (replace with actual EmailJS code)
            setTimeout(() => {
                // This is where you'd normally call EmailJS
                const isSuccess = Math.random() > 0.3; // Simulate 70% success rate for demo

                if (isSuccess) {
                    showMessage('Message sent successfully! 🚀 I\'ll get back to you soon.', 'success');
                    contactForm.reset();
                    
                    // Add confetti effect on success
                    createConfetti();
                } else {
                    showMessage('Failed to send message. Please try again later or contact me directly at your@email.com', 'error');
                }
                // Initialize EmailJS
                (function() {
                    // Replace with your actual EmailJS public key
                    emailjs.init('DEf6ZsN_jL2oWBxoc');
                })();

                // Contact Form Submission
                document.addEventListener('DOMContentLoaded', function() {
                    const contactForm = document.getElementById('contact-form');
                    const formMessage = document.getElementById('form-message');
                    const sendButton = document.getElementById('send-button');
                    const spinner = document.getElementById('spinner');
                    const sendText = sendButton ? sendButton.querySelector('span:first-child') : null;

                    // Form submission handler
                    if (contactForm) {
                        contactForm.addEventListener('submit', function(e) {
                            e.preventDefault();
                            
                            // Show loading state
                            if (sendButton && sendText) {
                                sendButton.disabled = true;
                                sendText.textContent = 'Sending...';
                                spinner.classList.remove('hidden');
                            }
                            if (formMessage) formMessage.style.display = 'none';

                            // Get form data
                            const formData = new FormData(contactForm);
                            const formProps = Object.fromEntries(formData);

                            // Add your email to the form data
                            formProps.to_email = 'zefanyawilliamszero@gmail.com';

                            // Send email using EmailJS
                            emailjs.send(
                                'service_8kutmfq',     // Replace with your EmailJS Service ID
                                'YOUR_TEMPLATE_ID',    // Replace with your EmailJS Template ID
                                formProps
                            )
                            .then(function(response) {
                                console.log('SUCCESS!', response.status, response.text);
                                showMessage('Message sent successfully! I\'ll get back to you soon.', 'success');
                                contactForm.reset();
                            }, function(error) {
                                console.error('FAILED...', error);
                                showMessage('Failed to send message. Please try again later or contact me directly at zefanyawilliamszero@gmail.com', 'error');
                            })
                            .finally(function() {
                                // Reset button state
                                if (sendButton && sendText) {
                                    sendButton.disabled = false;
                                    sendText.textContent = 'Send Message';
                                    spinner.classList.add('hidden');
                                }
                            });
                        });
                    }

                    // Rest of your existing code...
                });
                // Reset button state
                if (sendButton && sendText) {
                    sendButton.disabled = false;
                    sendText.textContent = 'Send Message';
                    spinner.classList.add('hidden');
                    sendButton.style.transform = 'scale(1)';
                }

                // Remove pulse animation
                contactForm.style.animation = 'none';
            }, 1500); // Simulate network delay
        });
    }

    // Show form message with animation
    function showMessage(message, type) {
        if (!formMessage) return;
        
        formMessage.textContent = message;
        formMessage.className = 'message'; // Reset classes
        formMessage.classList.add(type);
        
        // Animate in
        formMessage.style.display = 'block';
        setTimeout(() => {
            formMessage.style.opacity = '1';
            formMessage.style.transform = 'translateY(0)';
        }, 10);
        
        // Auto-hide after 5 seconds
        setTimeout(() => {
            formMessage.style.opacity = '0';
            formMessage.style.transform = 'translateY(-10px)';
            setTimeout(() => {
                formMessage.style.display = 'none';
            }, 300);
        }, 5000);
        
        // Scroll to message
        formMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    // Create confetti effect
    function createConfetti() {
        const colors = ['#e50000', '#ff4d4d', '#ff9999', '#ffcccc'];
        const container = document.createElement('div');
        container.style.position = 'fixed';
        container.style.top = '0';
        container.style.left = '0';
        container.style.width = '100%';
        container.style.height = '100%';
        container.style.pointerEvents = 'none';
        container.style.zIndex = '9999';
        
        document.body.appendChild(container);
        
        // Create confetti pieces
        for (let i = 0; i < 50; i++) {
            const confetti = document.createElement('div');
            confetti.style.position = 'absolute';
            confetti.style.width = Math.random() * 10 + 5 + 'px';
            confetti.style.height = Math.random() * 10 + 5 + 'px';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.borderRadius = '50%';
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.top = '-20px';
            confetti.style.opacity = '0.8';
            confetti.style.transform = 'rotate(' + Math.random() * 360 + 'deg)';
            
            // Random animation
            const animation = confetti.animate([
                { transform: 'translateY(0) rotate(0deg)', opacity: 0.8 },
                { transform: 'translateY(' + (window.innerHeight + 20) + 'px) rotate(' + (Math.random() * 360) + 'deg)', opacity: 0 }
            ], {
                duration: 2000 + Math.random() * 3000,
                easing: 'cubic-bezier(0.1, 0.8, 0.2, 1)',
                delay: Math.random() * 2000
            });
            
            animation.onfinish = () => confetti.remove();
            
            container.appendChild(confetti);
        }
        
        // Remove container after animation
        setTimeout(() => {
            container.remove();
        }, 3000);
    }
});

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
    
    @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.01); }
        100% { transform: scale(1); }
    }
    
    .message {
        display: none;
        opacity: 0;
        transform: translateY(10px);
        transition: all 0.3s ease;
        padding: 15px;
        border-radius: 8px;
        margin-top: 15px;
        font-weight: 500;
    }
    
    .success {
        background-color: rgba(40, 167, 69, 0.15);
        border-left: 4px solid #28a745;
        color: #28a745;
    }
    
    .error {
        background-color: rgba(220, 53, 69, 0.15);
        border-left: 4px solid #dc3545;
        color: #dc3545;
    }
    
    .input-focused {
        transform: translateY(-3px);
        transition: transform 0.3s ease;
    }
    
    .input-focused::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 2px;
        background: linear-gradient(90deg, #e50000, #ff6b6b);
        transform: scaleX(0);
        transform-origin: left;
        transition: transform 0.3s ease;
    }
    
    .input-focused:focus-within::after {
        transform: scaleX(1);
    }
`;
document.head.appendChild(style);
