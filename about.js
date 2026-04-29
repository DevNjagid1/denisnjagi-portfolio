document.addEventListener('DOMContentLoaded', () => {
    const highlights = document.querySelectorAll('.highlight-card');
    
    const reveal = () => {
        highlights.forEach((card, index) => {
            const cardTop = card.getBoundingClientRect().top;
            if (cardTop < window.innerHeight - 50) {
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, index * 150);
            }
        });
    };

    highlights.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.6s ease-out';
    });

    window.addEventListener('scroll', reveal);
    reveal();
});