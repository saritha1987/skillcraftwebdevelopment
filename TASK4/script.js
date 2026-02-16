// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Simple contact form submit
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert("Thank you for contacting me! I'll get back to you soon.");
    this.reset();
});
