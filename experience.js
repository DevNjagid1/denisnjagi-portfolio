document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.padding = '15px 8%';
            navbar.style.background = '#05070a';
            navbar.style.borderBottom = '1px solid var(--gold-main)';
        } else {
            navbar.style.padding = '20px 8%';
            navbar.style.background = 'rgba(5, 7, 10, 0.95)';
            navbar.style.borderBottom = '1px solid rgba(212, 175, 55, 0.15)';
        }
    });

    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
    };

    const revealOnScroll = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                revealOnScroll.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const timelineItems = document.querySelectorAll('.timeline-item');
    
    timelineItems.forEach((item, index) => {
        item.style.transition = `all 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.1}s`;
        item.style.transform = 'translateY(50px)';
        revealOnScroll.observe(item);
    });
});