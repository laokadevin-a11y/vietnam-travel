// ============================================================
// VN Du Lịch – Trình quản lý trang chi tiết
// Đọc dữ liệu từ data.js, xử lý ?id=..., hiển thị + lightbox
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    const data = SITE_DATA.destinations.find(d => d.id === id);

    const titleEl = document.getElementById('detail-title');
    const descEl = document.getElementById('detail-description');
    const heroEl = document.getElementById('detail-hero');
    const galleryEl = document.getElementById('detail-gallery');
    const infoEl = document.getElementById('detail-info');

    if (!data) {
        // Không tìm thấy điểm đến
        if (titleEl) titleEl.innerText = 'Không tìm thấy điểm đến';
        if (descEl) descEl.innerText = 'Rất tiếc, điểm đến bạn tìm không tồn tại. Hãy quay lại trang Địa điểm để khám phá thêm.';
        if (heroEl) heroEl.style.backgroundImage = "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('picture/dao-ngoc-bien-phu-quoc.jpg')";
        if (galleryEl) galleryEl.innerHTML = '';
        return;
    }

    const lang = localStorage.getItem('vnlang') || 'vi';
    const content = data[lang] || data.vi;

    if (titleEl) titleEl.innerText = content.title;
    if (descEl) descEl.innerText = content.desc;
    if (heroEl) {
        heroEl.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('${data.img}')`;
    }

    // Thông tin hữu ích
    if (infoEl && content.info) {
        infoEl.innerHTML = `
            <p style="font-size:1.05rem; line-height:1.9; color:#333;">
                <i class="fas fa-tag" style="color:var(--primary);"></i>
                <strong>Vùng:</strong> ${content.regionLabel}<br>
                <i class="fas fa-calendar-alt" style="color:var(--primary);"></i>
                <strong>Mùa đẹp nhất:</strong> ${content.seasonLabel}<br>
                <i class="fas fa-lightbulb" style="color:var(--primary);"></i>
                ${content.info}
            </p>`;
    }

    // Gallery + lightbox
    if (galleryEl && data.gallery && data.gallery.length) {
        galleryEl.innerHTML = '';
        data.gallery.forEach(src => {
            const img = document.createElement('img');
            img.src = src;
            img.alt = content.title;
            img.loading = 'lazy';
            img.addEventListener('click', () => openLightbox(src, content.title));
            galleryEl.appendChild(img);
        });
    }

    // Khu vui chơi / tour – chi tiết theo từng vùng
    renderZone(id, lang);
});

// --- Hiển thị khu vui chơi, ăn uống, sự kiện, văn hóa của từng điểm ---
function renderZone(id, lang) {
    const zone = (typeof SITE_ZONE !== 'undefined') ? SITE_ZONE[id] : null;
    const zoneEl = document.getElementById('detail-zone');
    if (!zoneEl || !zone) return;

    const content = zone[lang] || zone.vi;
    const blocks = [
        { key: 'vuiChoi', icon: 'fa-map-signs', label: 'Khu vui chơi – hoạt động' },
        { key: 'anUong', icon: 'fa-utensils', label: 'Ăn uống nhỏ lẻ – đặc sản' },
        { key: 'suKien', icon: 'fa-calendar-check', label: 'Sự kiện – lễ hội' },
        { key: 'vanHoa', icon: 'fa-landmark', label: 'Văn hóa – tập quán – bản sắc dân tộc' }
    ];

    zoneEl.innerHTML = blocks.map(block => {
        const items = content[block.key] || [];
        const lis = items.map(item => `<li><i class="fas fa-check-circle" style="color:var(--primary);margin-right:8px;"></i>${item}</li>`).join('');
        return `
            <div class="zone-block">
                <h3 style="color:var(--primary);margin-bottom:12px;font-size:1.2rem;">
                    <i class="fas ${block.icon}"></i> ${block.label}
                </h3>
                <ul style="list-style:none;padding:0;margin:0 0 30px 0;">
                    ${lis}
                </ul>
            </div>`;
    }).join('');
}

// --- Lightbox đơn giản ---
let lightboxEl = null;
function openLightbox(src, alt) {
    closeLightbox();
    lightboxEl = document.createElement('div');
    lightboxEl.id = 'lightbox';
    lightboxEl.style.cssText = `
        position: fixed; top:0; left:0; width:100%; height:100%;
        background: rgba(0,0,0,0.92); z-index: 2000;
        display: flex; align-items: center; justify-content: center; cursor: zoom-out;
    `;
    const img = document.createElement('img');
    img.src = src;
    img.alt = alt || '';
    img.style.cssText = 'max-width:92%; max-height:92%; border-radius:10px; box-shadow:0 10px 40px rgba(0,0,0,0.6);';
    lightboxEl.appendChild(img);
    lightboxEl.addEventListener('click', closeLightbox);
    document.addEventListener('keydown', onLightboxKey);
    document.body.appendChild(lightboxEl);
    document.body.style.overflow = 'hidden';
}

function onLightboxKey(e) {
    if (e.key === 'Escape') closeLightbox();
}

function closeLightbox() {
    if (lightboxEl) {
        lightboxEl.remove();
        lightboxEl = null;
        document.removeEventListener('keydown', onLightboxKey);
        document.body.style.overflow = '';
    }
}
