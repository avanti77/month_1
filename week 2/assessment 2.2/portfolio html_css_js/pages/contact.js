document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    const confirmationMessage = document.getElementById('confirmation-message');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        confirmationMessage.style.display = 'block';
        contactForm.reset();
    });
});
