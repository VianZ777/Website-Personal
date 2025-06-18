window.addEventListener('DOMContentLoaded', function() {
    const foto = document.querySelector('.profile-photo-center img');
    if (foto) {
        foto.style.opacity = '0';
        foto.style.transform = 'scale(0.8)';
        foto.style.transition = 'none';
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                foto.style.transition = 'opacity 0.8s cubic-bezier(.4,2,.6,1), transform 0.8s cubic-bezier(.4,2,.6,1)';
                foto.style.opacity = '1';
                foto.style.transform = 'scale(1)';
            });
        });
    }
});

document.querySelectorAll('.nav-link[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

(function() {
    const btn = document.createElement('button');
    btn.textContent = '↑';
    btn.title = 'Kembali ke atas';
    btn.style.position = 'fixed';
    btn.style.right = '24px';
    btn.style.bottom = '32px';
    btn.style.width = '44px';
    btn.style.height = '44px';
    btn.style.borderRadius = '50%';
    btn.style.border = 'none';
    btn.style.background = '#16222aee';
    btn.style.color = '#7ec8e3';
    btn.style.fontSize = '1.7rem';
    btn.style.boxShadow = '0 2px 12px #0003';
    btn.style.cursor = 'pointer';
    btn.style.zIndex = '99';
    btn.style.display = 'none';
    btn.style.transition = 'opacity 0.3s';
    btn.setAttribute('aria-label', 'Kembali ke atas');
    document.body.appendChild(btn);

    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            btn.style.display = 'block';
            btn.style.opacity = '1';
        } else {
            btn.style.opacity = '0';
            setTimeout(() => { if (btn.style.opacity === '0') btn.style.display = 'none'; }, 300);
        }
    });

    btn.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
})();


