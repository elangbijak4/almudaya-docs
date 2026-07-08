// Fungsi untuk menyalin perintah instalasi di Landing Page
function copyInstallCmd() {
    const cmdText = document.getElementById('install-cmd').innerText;
    
    navigator.clipboard.writeText(cmdText).then(() => {
        const copyBtn = document.querySelector('.copy-btn');
        const originalIcon = copyBtn.innerHTML;
        
        // Ubah ikon menjadi centang hijau
        copyBtn.innerHTML = `
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00ffcc" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
        `;
        
        setTimeout(() => {
            copyBtn.innerHTML = originalIcon;
        }, 2000);
    }).catch(err => {
        console.error('Gagal menyalin teks: ', err);
    });
}

// Logika untuk menyoroti navigasi Sidebar di halaman Dokumentasi
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.content h2');
    const navLinks = document.querySelectorAll('.sidebar a');

    if (sections.length > 0 && navLinks.length > 0) {
        window.addEventListener('scroll', () => {
            let current = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                if (scrollY >= sectionTop - 100) {
                    current = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href').includes(current)) {
                    link.classList.add('active');
                }
            });
        });
    }
});
