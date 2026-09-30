// ============================================================
// VN Du Lịch – Script chung (navbar, menu mobile, reveal, i18n)
// ============================================================

// --- Navbar đổi màu khi cuộn ---
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
});

// --- Menu mobile ---
document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    if (toggle && navLinks) {
        toggle.addEventListener('click', () => {
            const open = navLinks.classList.toggle('open');
            toggle.classList.toggle('active', open);
            toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
            toggle.innerHTML = open
                ? '<i class="fas fa-times"></i>'
                : '<i class="fas fa-bars"></i>';
        });
        // Đóng menu khi bấm vào link
        navLinks.querySelectorAll('a').forEach(a => {
            a.addEventListener('click', () => {
                navLinks.classList.remove('open');
                toggle.classList.remove('active');
                toggle.setAttribute('aria-expanded', 'false');
                toggle.innerHTML = '<i class="fas fa-bars"></i>';
            });
        });
    }

    // --- Hero hiện dần ---
    const heroText = document.querySelector('.hero-content');
    if (heroText) {
        heroText.style.opacity = '0';
        heroText.style.transform = 'translateY(30px)';
        setTimeout(() => {
            heroText.style.transition = 'all 1s ease-out';
            heroText.style.opacity = '1';
            heroText.style.transform = 'translateY(0)';
        }, 200);
    }
});

// --- Reveal on scroll (animation khi cuộn) ---
document.addEventListener('DOMContentLoaded', () => {
    const revealEls = document.querySelectorAll('.glass-card, .feature-card, .stat-item, .intro-text');
    if (!('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });

    revealEls.forEach(el => {
        el.classList.add('reveal');
        observer.observe(el);
    });
});

// --- Đổi ngôn ngữ (VI/EN/JP) ---
const I18N_LABELS = {
    vi: { brand: 'VN Du Lịch', home: 'Trang chủ', places: 'Địa điểm du lịch', food: 'Ẩm thực', culture: 'Văn hóa', contact: 'Liên hệ' },
    en: { brand: 'VN Travel', home: 'Home', places: 'Destinations', food: 'Food', culture: 'Culture', contact: 'Contact' },
    jp: { brand: 'VN トラベル', home: 'ホーム', places: '観光地', food: 'グルメ', culture: '文化', contact: 'お問い合わせ' }
};

function applyLanguage(lang) {
    const labels = I18N_LABELS[lang] || I18N_LABELS.vi;
    const links = document.querySelectorAll('.nav-links li a');
    const linkOrder = [0, 1, 2, 3, 4]; // Trang chủ, Địa điểm, Ẩm thực, Văn hóa, Liên hệ
    linkOrder.forEach((idx, i) => {
        if (links[i]) {
            const texts = [labels.home, labels.places, labels.food, labels.culture, labels.contact];
            links[i].textContent = texts[idx];
        }
    });
    const logo = document.querySelector('.logo');
    if (logo) {
        const brand = labels.brand;
        logo.innerHTML = brand.split(' ')[0] + '<span> ' + brand.split(' ').slice(1).join(' ') + '</span>';
    }
    localStorage.setItem('vnlang', lang);
}

// --- Khởi tạo i18n nếu có nút chọn ngôn ngữ ---
document.addEventListener('DOMContentLoaded', () => {
    const saved = localStorage.getItem('vnlang');
    if (saved && ['vi', 'en', 'jp'].includes(saved)) {
        applyLanguage(saved);
    }

    // Nếu trang có bộ chọn ngôn ngữ (#lang-select)
    const langSelect = document.getElementById('lang-select');
    if (langSelect) {
        langSelect.value = localStorage.getItem('vnlang') || 'vi';
        langSelect.addEventListener('change', (e) => applyLanguage(e.target.value));
    }
});
