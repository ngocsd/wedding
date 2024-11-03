// Section Toggle Logic
const mapButton = document.getElementById('mapButton');
const qrButton = document.getElementById('qrButton');
const mapSection = document.getElementById('mapSection');
const qrSection = document.getElementById('qrSection');
const ngocQR = document.getElementById('ngoc-qr');
const hienQR = document.getElementById('hien-qr');

function hideAllSections() {
    mapSection.classList.add('hidden');
    qrSection.classList.add('hidden');
    // Reset trạng thái của các QR khi ẩn section
    ngocQR?.classList.remove('hidden');
    hienQR?.classList.remove('hidden');
}

mapButton?.addEventListener('click', function() {
    if (!mapSection.classList.contains('hidden')) {
        hideAllSections();
    } else {
        hideAllSections();
        mapSection.classList.remove('hidden');
    }
});

qrButton?.addEventListener('click', function() {
    if (!qrSection.classList.contains('hidden')) {
        hideAllSections();
    } else {
        hideAllSections();
        qrSection.classList.remove('hidden');
    }
});

// QR Toggle Logic
function toggleQR(clickedQR, otherQR) {
    if (!otherQR.classList.contains('hidden')) {
        otherQR.classList.add('hidden');
    }
}

// Thêm event listeners cho cả QR và tên
ngocQR?.querySelector('.qr-code')?.addEventListener('click', () => toggleQR(ngocQR, hienQR));
ngocQR?.querySelector('.qr-name')?.addEventListener('click', () => toggleQR(ngocQR, hienQR));

hienQR?.querySelector('.qr-code')?.addEventListener('click', () => toggleQR(hienQR, ngocQR));
hienQR?.querySelector('.qr-name')?.addEventListener('click', () => toggleQR(hienQR, ngocQR));

// Thêm function để xử lý progressive loading cho hero background
function loadHeroBackground() {
    const images = [
        { url: 'assets/images/hero/hero-bg-low.jpg', quality: 1 },
        { url: 'assets/images/hero/hero-bg.jpg', quality: 2 },
        { url: 'assets/images/hero/hero-bg.png', quality: 3 }
    ];
    
    const hero = document.querySelector('.hero');
    let currentQuality = 0;

    images.forEach(img => {
        const image = new Image();
        image.src = img.url;
        image.onload = () => {
            if (img.quality > currentQuality) {
                hero.style.backgroundImage = `url(${img.url})`;
                currentQuality = img.quality;
            }
        };
    });
}

// Gọi function khi document load
document.addEventListener('DOMContentLoaded', loadHeroBackground);
