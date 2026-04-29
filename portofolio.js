document.addEventListener('DOMContentLoaded', () => {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const cards = document.querySelectorAll('.portfolio-card');
    const modal = document.getElementById('portfolioModal');
    const modalImg = document.getElementById('expandedImg');
    const closeModal = document.querySelector('.close-modal');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            cards.forEach(card => {
                const category = card.getAttribute('data-category');

                if (filterValue === 'all' || filterValue === category) {
                    card.classList.remove('hide');
                    card.classList.add('show');
                } else {
                    card.classList.remove('show');
                    card.classList.add('hide');
                }
            });
        });
    });

    cards.forEach(card => {
        card.addEventListener('click', () => {
            const img = card.querySelector('img');
            if (modal && modalImg && img) {
                modal.style.display = 'flex';
                modalImg.src = img.src;
                document.body.style.overflow = 'hidden';
            }
        });
    });

    if (closeModal) {
        closeModal.addEventListener('click', () => {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
    }

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
});