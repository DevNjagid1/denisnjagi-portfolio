document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');
    const typingSpan = document.getElementById('typing-text');

    const roles = [
        "Information Scientist",
        "Community Developer",
        "Digital Designer",
        "Data Specialist"
    ];

    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeEffect() {
        const currentRole = roles[roleIndex];
        
        if (isDeleting) {
            typingSpan.textContent = currentRole.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typingSpan.textContent = currentRole.substring(0, charIndex + 1);
            charIndex++;
        }

        let typeSpeed = isDeleting ? 50 : 100;

        if (!isDeleting && charIndex === currentRole.length) {
            isDeleting = true;
            typeSpeed = 2000; 
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            typeSpeed = 500;
        }

        setTimeout(typeEffect, typeSpeed);
    }

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.padding = '15px 8%';
            navbar.style.background = '#05070a';
            navbar.style.borderBottom = '1px solid #d4af37';
        } else {
            navbar.style.padding = '20px 8%';
            navbar.style.background = 'rgba(5, 7, 10, 0.95)';
            navbar.style.borderBottom = '1px solid rgba(212, 175, 55, 0.15)';
        }
    });

    typeEffect();
});