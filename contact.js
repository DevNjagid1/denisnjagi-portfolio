document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');
    const contactForm = document.querySelector('.contact-form');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.padding = '15px 8%';
            navbar.style.background = '#05070a';
            navbar.style.borderBottom = '1px solid #d4af37';
        } else {
            navbar.style.padding = '20px 8%';
            navbar.style.background = 'rgba(5, 7, 10, 0.95)';
            navbar.style.borderBottom = '1px solid rgba(212, 175, 55, 0.2)';
        }
    });

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const submitBtn = contactForm.querySelector('button');
        const originalText = submitBtn.innerText;
        
        submitBtn.innerText = 'Sending...';
        submitBtn.style.opacity = '0.7';
        submitBtn.disabled = true;

        setTimeout(() => {
            alert('Thank you! Your message has been sent to Denis Njagi.');
            contactForm.reset();
            submitBtn.innerText = originalText;
            submitBtn.style.opacity = '1';
            submitBtn.disabled = false;
        }, 1500);
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    const animatedItems = document.querySelectorAll('.contact-info, .contact-form, .section-title');
    animatedItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.style.transition = 'all 0.8s ease-out';
        observer.observe(item);
    });
});