// ==========================================
// FEELSPACE SUPPORT WEBSITE - INTERACTIONS
// ==========================================

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    initScrollAnimations();
    initNavScroll();
    initSmoothScroll();
});

// ==========================================
// SCROLL ANIMATIONS with Intersection Observer
// ==========================================
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe feature cards
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach((card, index) => {
        card.style.transitionDelay = `${index * 100}ms`;
        observer.observe(card);
    });

    // Observe room cards
    const roomCards = document.querySelectorAll('.room-card');
    roomCards.forEach((card, index) => {
        card.style.transitionDelay = `${index * 100}ms`;
        observer.observe(card);
    });

    // Observe privacy section
    const privacyText = document.querySelector('.privacy-text');
    const privacyVisual = document.querySelector('.privacy-visual');

    if (privacyText) observer.observe(privacyText);
    if (privacyVisual) observer.observe(privacyVisual);

    // Animate floating badges on load
    const floatingBadges = document.querySelectorAll('.floating-badge');
    floatingBadges.forEach((badge, index) => {
        setTimeout(() => {
            badge.classList.add('visible');
        }, 500 + (index * 150));
    });
}

// ==========================================
// NAVIGATION SCROLL EFFECT
// ==========================================
function initNavScroll() {
    const nav = document.querySelector('.nav');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        // Add shadow on scroll
        if (currentScroll > 50) {
            nav.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            nav.style.boxShadow = 'none';
        }

        lastScroll = currentScroll;
    });
}

// ==========================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ==========================================
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');

            // Don't prevent default for hash-only links
            if (href === '#') return;

            e.preventDefault();

            const target = document.querySelector(href);
            if (target) {
                const navHeight = document.querySelector('.nav').offsetHeight;
                const targetPosition = target.offsetTop - navHeight - 20;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ==========================================
// MOOD BUTTON INTERACTIONS (for demo)
// ==========================================
const moodButtons = document.querySelectorAll('.mood-btn');
moodButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all
        moodButtons.forEach(b => b.classList.remove('mood-active'));
        // Add to clicked button
        btn.classList.add('mood-active');
    });
});

// ==========================================
// PERFORMANCE: Lazy load animations
// ==========================================
if ('IntersectionObserver' in window) {
    console.log('✨ Scroll animations initialized');
} else {
    // Fallback: show all elements immediately
    document.querySelectorAll('.feature-card, .room-card, .privacy-text, .privacy-visual').forEach(el => {
        el.classList.add('visible');
    });
}
