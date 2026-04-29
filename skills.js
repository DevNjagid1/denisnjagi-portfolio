document.addEventListener('DOMContentLoaded', () => {
    const skillFills = document.querySelectorAll('.skill-fill');

    const animateSkills = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const fill = entry.target;
                const width = fill.getAttribute('data-width');
                fill.style.width = width;
                observer.unobserve(fill);
            }
        });
    };

    const observer = new IntersectionObserver(animateSkills, {
        threshold: 0.1
    });

    skillFills.forEach(fill => {
        observer.observe(fill);
    });
});