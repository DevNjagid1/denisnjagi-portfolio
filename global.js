document.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('#mobile-menu');
    const menuLinks = document.querySelector('.nav-links');
    const modal = document.getElementById('portfolioModal');
    const modalImg = document.getElementById('expandedImg');
    const closeModal = document.querySelector('.close-modal');

    if (menu && menuLinks) {
        menu.addEventListener('click', () => {
            menuLinks.classList.toggle('active');
        });

        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                menuLinks.classList.remove('active');
            });
        });
    }

    document.body.addEventListener('click', (e) => {
        const clickedImage = e.target.closest('.card-image img');
        if (clickedImage && modal && modalImg) {
            modal.style.display = 'flex';
            modalImg.src = clickedImage.src;
            document.body.style.overflow = 'hidden';
        }
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

document.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('#mobile-menu');
    const menuLinks = document.querySelector('.nav-links');

    if (menu && menuLinks) {
        menu.addEventListener('click', () => {
            menuLinks.classList.toggle('active');
        });
    }
});