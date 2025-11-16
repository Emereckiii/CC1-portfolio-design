// Mobile menu toggle
function toggleMenu() {
    const menu = document.getElementById('navMenu');
    const toggle = document.querySelector('.menu-toggle');
    menu.classList.toggle('active');
    toggle.classList.toggle('active');
}

function closeMenu() {
    const menu = document.getElementById('navMenu');
    const toggle = document.querySelector('.menu-toggle');
    menu.classList.remove('active');
    toggle.classList.remove('active');
}

// Spotlight effect on cards
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            card.style.setProperty('--x', `${x}px`);
            card.style.setProperty('--y', `${y}px`);
        });
    });

    // Scroll animations
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -80px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });
});

// Smooth scroll with offset
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 100;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});
