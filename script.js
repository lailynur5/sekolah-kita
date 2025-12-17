// Fitur Toggle Menu Mobile (Hamburger)
const menuBtn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
    menu.classList.toggle('flex');
    menu.classList.toggle('flex-col');
    menu.classList.toggle('absolute');
    menu.classList.toggle('top-16');
    menu.classList.toggle('left-0');
    menu.classList.toggle('bg-blue-900');
    menu.classList.toggle('w-full');
    menu.classList.toggle('p-4');
});

// Tutup menu saat link diklik (untuk mobile)
const navLinks = document.querySelectorAll('#menu a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth < 768) {
            menu.classList.add('hidden');
        }
    });
});
