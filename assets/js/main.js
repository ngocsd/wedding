// Animation on scroll
document.addEventListener('DOMContentLoaded', function() {
    // Animate elements when they come into view
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.animate-on-scroll');
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight;
            
            if(elementPosition < screenPosition) {
                element.classList.add('animated');
            }
        });
    }

    window.addEventListener('scroll', animateOnScroll);
});

// RSVP form handling
document.querySelector('.rsvp-button')?.addEventListener('click', function() {
    // Add RSVP form logic here
});

// QR Section Toggle
document.getElementById('qrButton')?.addEventListener('click', function() {
    const qrSection = document.getElementById('qrSection');
    qrSection.classList.toggle('hidden');
    
    // Scroll to QR section if it's visible
    if (!qrSection.classList.contains('hidden')) {
        qrSection.scrollIntoView({ behavior: 'smooth' });
    }
}); 