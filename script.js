// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Form Section Toggle
const chickOrderTriggers = document.querySelectorAll('.chick-order-trigger');
const incubationOrderTriggers = document.querySelectorAll('.incubation-order-trigger');
const consultationTriggers = document.querySelectorAll('.consultation-trigger');
const formsSection = document.querySelector('.forms-section');
const closeForms = document.querySelector('.close-forms');
const formTitle = document.getElementById('form-title');

const chickForm = document.getElementById('chick-order-form-container');
const incubationForm = document.getElementById('incubation-form-container');
const consultationForm = document.getElementById('consultation-form-container');

// Message Popup Elements
const messagePopup = document.getElementById('message-popup');
const closeMessage = document.querySelector('.close-message');
const messageTitle = document.getElementById('message-title');
const messageText = document.getElementById('message-text');

// Function to show specific form
function showForm(formElement, title) {
    // Hide all forms first
    chickForm.classList.remove('active');
    incubationForm.classList.remove('active');
    consultationForm.classList.remove('active');
    
    // Show the selected form
    formElement.classList.add('active');
    
    // Update form title
    formTitle.textContent = title;
    
    // Show the forms section
    formsSection.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Function to show message popup
function showMessage(type, title, text) {
    messagePopup.classList.remove('success', 'error');
    messagePopup.classList.add(type, 'active');
    messageTitle.textContent = title;
    messageText.textContent = text;
    document.body.style.overflow = 'hidden';
}

// Close message popup
closeMessage.addEventListener('click', () => {
    messagePopup.classList.remove('active');
    document.body.style.overflow = 'auto';
});

// Close message when clicking outside
messagePopup.addEventListener('click', (e) => {
    if (e.target === messagePopup) {
        messagePopup.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// Chick order form triggers
chickOrderTriggers.forEach(trigger => {
    trigger.addEventListener('click', (e) => {
        e.preventDefault();
        showForm(chickForm, 'Order Chicks');
    });
});

// Incubation order form triggers
incubationOrderTriggers.forEach(trigger => {
    trigger.addEventListener('click', (e) => {
        e.preventDefault();
        showForm(incubationForm, 'Request Incubation Service');
    });
});

// Consultation form triggers
consultationTriggers.forEach(trigger => {
    trigger.addEventListener('click', (e) => {
        e.preventDefault();
        showForm(consultationForm, 'Request Consultation');
    });
});

// Close forms
closeForms.addEventListener('click', () => {
    formsSection.classList.remove('active');
    document.body.style.overflow = 'auto';
});

// Close forms when clicking outside
formsSection.addEventListener('click', (e) => {
    if (e.target === formsSection) {
        formsSection.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// Handle form loading states
document.addEventListener('DOMContentLoaded', function() {
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        form.addEventListener('submit', function() {
            const submitButton = this.querySelector('button[type="submit"]');
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

function showSlide(n) {
    slides.forEach(slide => slide.classList.remove('active'));
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
}

prevBtn.addEventListener('click', () => {
    showSlide(currentSlide - 1);
});

nextBtn.addEventListener('click', () => {
    showSlide(currentSlide + 1);
});

// Auto-advance slides every 5 seconds
setInterval(() => {
    showSlide(currentSlide + 1);
}, 5000);

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
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
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        }
    });
});

