// Mobile Navigation Toggle - ENHANCED VERSION
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger && navLinks) {
    hamburger.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent event bubbling
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close menu when clicking on a nav link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        }
    });

    // Close menu on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        }
    });
}

// Form Section Toggle
const chickOrderTriggers = document.querySelectorAll('.chick-order-trigger');
const incubationOrderTriggers = document.querySelectorAll('.incubation-order-trigger');
const broodingOrderTriggers = document.querySelectorAll('.brooding-order-trigger');
const consultationTriggers = document.querySelectorAll('.consultation-trigger');
const formsSection = document.querySelector('.forms-section');
const closeForms = document.querySelector('.close-forms');
const formTitle = document.getElementById('form-title');

const chickForm = document.getElementById('chick-order-form-container');
const incubationForm = document.getElementById('incubation-form-container');
const broodingForm = document.getElementById('brooding-form-container');
const consultationForm = document.getElementById('consultation-form-container');

// Message Popup Elements
const messagePopup = document.getElementById('message-popup');
const closeMessage = document.querySelector('.close-message');
const messageTitle = document.getElementById('message-title');
const messageText = document.getElementById('message-text');

// Store current scroll position
let scrollPosition = 0;

// Function to show specific form
function showForm(formElement, title) {
    // Store current scroll position
    scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    
    // Hide all forms first
    if (chickForm) chickForm.classList.remove('active');
    if (incubationForm) incubationForm.classList.remove('active');
    if (broodingForm) broodingForm.classList.remove('active');
    if (consultationForm) consultationForm.classList.remove('active');
    
    // Show the selected form
    if (formElement) formElement.classList.add('active');
    
    // Update form title
    if (formTitle) formTitle.textContent = title;
    
    // Show the forms section
    if (formsSection) {
        formsSection.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    
    // Close mobile menu if open
    if (hamburger && navLinks) {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    }
    
    // Prevent default anchor behavior
    return false;
}

// Function to show message popup
function showMessage(type, title, text) {
    if (!messagePopup) return;
    
    messagePopup.classList.remove('success', 'error');
    messagePopup.classList.add(type, 'active');
    if (messageTitle) messageTitle.textContent = title;
    if (messageText) messageText.textContent = text;
    document.body.style.overflow = 'hidden';
}

// Close message popup
if (closeMessage) {
    closeMessage.addEventListener('click', () => {
        if (messagePopup) messagePopup.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
}

// Close message when clicking outside
if (messagePopup) {
    messagePopup.addEventListener('click', (e) => {
        if (e.target === messagePopup) {
            messagePopup.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
}

// Close message on escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && messagePopup && messagePopup.classList.contains('active')) {
        messagePopup.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// Chick order form triggers
if (chickOrderTriggers.length > 0 && chickForm) {
    chickOrderTriggers.forEach(trigger => {
        trigger.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            showForm(chickForm, 'Order Chicks');
        });
    });
}

// Incubation order form triggers
if (incubationOrderTriggers.length > 0 && incubationForm) {
    incubationOrderTriggers.forEach(trigger => {
        trigger.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            showForm(incubationForm, 'Request Incubation Service');
        });
    });
}

// Brooding order form triggers
if (broodingOrderTriggers.length > 0 && broodingForm) {
    broodingOrderTriggers.forEach(trigger => {
        trigger.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            showForm(broodingForm, 'Request Brooding Service');
        });
    });
}

// Consultation form triggers
if (consultationTriggers.length > 0 && consultationForm) {
    consultationTriggers.forEach(trigger => {
        trigger.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            showForm(consultationForm, 'Request Consultation');
        });
    });
}

// Close forms
if (closeForms && formsSection) {
    closeForms.addEventListener('click', () => {
        formsSection.classList.remove('active');
        document.body.style.overflow = 'auto';
        
        // Restore scroll position
        window.scrollTo(0, scrollPosition);
    });
}

// Close forms when clicking outside
if (formsSection) {
    formsSection.addEventListener('click', (e) => {
        if (e.target === formsSection) {
            formsSection.classList.remove('active');
            document.body.style.overflow = 'auto';
            
            // Restore scroll position
            window.scrollTo(0, scrollPosition);
        }
    });
}

// Close forms on escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && formsSection && formsSection.classList.contains('active')) {
        formsSection.classList.remove('active');
        document.body.style.overflow = 'auto';
        window.scrollTo(0, scrollPosition);
    }
});

// Handle form loading states
document.addEventListener('DOMContentLoaded', function() {
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        form.addEventListener('submit', function() {
            const submitButton = this.querySelector('button[type="submit"]');
            if (!submitButton) return;
            
            const originalText = submitButton.textContent;
            
            // Show loading state
            submitButton.textContent = 'Sending...';
            submitButton.disabled = true;
            
            // Re-enable button after 10 seconds in case submission fails
            setTimeout(() => {
                submitButton.textContent = originalText;
                submitButton.disabled = false;
            }, 10000);
        });
    });
});

// Gallery Slideshow
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
let currentSlide = 0;
let slideInterval;

function showSlide(n) {
    if (slides.length === 0) return;
    
    slides.forEach(slide => slide.classList.remove('active'));
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
}

function startSlideshow() {
    if (slides.length > 1) {
        slideInterval = setInterval(() => {
            showSlide(currentSlide + 1);
        }, 5000);
    }
}

function stopSlideshow() {
    if (slideInterval) {
        clearInterval(slideInterval);
    }
}

// Initialize slideshow if elements exist
if (slides.length > 0) {
    // Show first slide
    showSlide(0);
    
    // Start auto-advance
    startSlideshow();
    
    // Pause on hover
    const slideshow = document.querySelector('.slideshow');
    if (slideshow) {
        slideshow.addEventListener('mouseenter', stopSlideshow);
        slideshow.addEventListener('mouseleave', startSlideshow);
    }
}

// Previous button
if (prevBtn) {
    prevBtn.addEventListener('click', () => {
        stopSlideshow();
        showSlide(currentSlide - 1);
        startSlideshow();
    });
}

// Next button
if (nextBtn) {
    nextBtn.addEventListener('click', () => {
        stopSlideshow();
        showSlide(currentSlide + 1);
        startSlideshow();
    });
}

// Smooth scrolling for navigation links (excluding form triggers)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    // Skip form trigger buttons
    if (anchor.classList.contains('chick-order-trigger') || 
        anchor.classList.contains('incubation-order-trigger') ||
        anchor.classList.contains('brooding-order-trigger') ||
        anchor.classList.contains('consultation-trigger')) {
        return;
    }
    
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if(targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if(targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            if (hamburger && navLinks) {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            }
        }
    });
});

// Handle form submissions with FormSubmit
document.querySelectorAll("form").forEach(form => {
    form.addEventListener("submit", async function(e) {
        e.preventDefault();
        const formData = new FormData(this);
        const submitButton = this.querySelector('button[type="submit"]');
        
        if (!submitButton) return;
        
        const originalText = submitButton.textContent;
        submitButton.textContent = "Sending...";
        submitButton.disabled = true;

        try {
            const res = await fetch(this.action, {
                method: "POST",
                body: formData
            });
            if (res.ok) {
                showMessage("success", "Success!", "Your message has been sent successfully.");
                this.reset();
                
                // Close forms section if open
                if (formsSection && formsSection.classList.contains('active')) {
                    formsSection.classList.remove('active');
                    document.body.style.overflow = 'auto';
                    window.scrollTo(0, scrollPosition);
                }
            } else {
                showMessage("error", "Error", "Failed to send your message. Please try again later.");
            }
        } catch (error) {
            showMessage("error", "Error", "Something went wrong. Please check your connection and try again.");
        }

        submitButton.textContent = originalText;
        submitButton.disabled = false;
    });
});
// Phone number copy functionality - SIMPLIFIED WORKING VERSION
function initializePhoneCopy() {
    const phoneElement = document.querySelector('.copy-phone');
    
    if (phoneElement) {
        phoneElement.addEventListener('click', function() {
            const phoneNumber = '+254714634508';
            const tooltip = this.querySelector('.copy-tooltip');
            
            // Show copying feedback
            if (tooltip) {
                tooltip.textContent = 'Copying...';
                tooltip.style.visibility = 'visible';
                tooltip.style.opacity = '1';
                tooltip.style.backgroundColor = '#ffc107';
            }
            
            // Use modern Clipboard API first
            if (navigator.clipboard && window.isSecureContext) {
                navigator.clipboard.writeText(phoneNumber).then(() => {
                    showCopySuccess(this, tooltip);
                }).catch(() => {
                    useFallbackCopy(phoneNumber, this, tooltip);
                });
            } else {
                useFallbackCopy(phoneNumber, this, tooltip);
            }
        });

        // Show tooltip on hover
        phoneElement.addEventListener('mouseenter', function() {
            const tooltip = this.querySelector('.copy-tooltip');
            if (tooltip && !this.classList.contains('copied')) {
                tooltip.style.visibility = 'visible';
                tooltip.style.opacity = '1';
            }
        });

        phoneElement.addEventListener('mouseleave', function() {
            const tooltip = this.querySelector('.copy-tooltip');
            if (tooltip && !this.classList.contains('copied')) {
                tooltip.style.visibility = 'hidden';
                tooltip.style.opacity = '0';
            }
        });
    }
}

function useFallbackCopy(phoneNumber, element, tooltip) {
    // Fallback method
    const tempInput = document.createElement('input');
    tempInput.value = phoneNumber;
    document.body.appendChild(tempInput);
    tempInput.select();
    tempInput.setSelectionRange(0, 99999);
    
    try {
        const successful = document.execCommand('copy');
        document.body.removeChild(tempInput);
        
        if (successful) {
            showCopySuccess(element, tooltip);
        } else {
            showCopyError(element, tooltip);
        }
    } catch (err) {
        document.body.removeChild(tempInput);
        showCopyError(element, tooltip);
    }
}

function showCopySuccess(element, tooltip) {
    element.classList.add('copied');
    
    if (tooltip) {
        tooltip.textContent = 'Copied!';
        tooltip.style.backgroundColor = '#28a745';
        tooltip.style.visibility = 'visible';
        tooltip.style.opacity = '1';
    }
    
    setTimeout(() => {
        element.classList.remove('copied');
        if (tooltip) {
            tooltip.textContent = 'Click to copy';
            tooltip.style.backgroundColor = 'var(--dark)';
            tooltip.style.visibility = 'hidden';
            tooltip.style.opacity = '0';
        }
    }, 2000);
}

function showCopyError(element, tooltip) {
    if (tooltip) {
        tooltip.textContent = 'Failed to copy';
        tooltip.style.backgroundColor = '#dc3545';
        
        setTimeout(() => {
            tooltip.textContent = 'Click to copy';
            tooltip.style.backgroundColor = 'var(--dark)';
            tooltip.style.visibility = 'hidden';
            tooltip.style.opacity = '0';
        }, 2000);
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', initializePhoneCopy);


// Prevent right-click and view source
document.addEventListener("contextmenu", function(e) {
    e.preventDefault();
    return false;
});

document.addEventListener("keydown", function(e) {
    if (e.ctrlKey && (e.key === "u" || e.key === "U")) {
        e.preventDefault();
        alert("You are not allowed to copy content or view source!");
    }
});

// Add loading state to the page
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});

// Handle window resize - close mobile menu on larger screens
window.addEventListener('resize', function() {
    if (window.innerWidth > 768 && hamburger && navLinks) {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    }
});

