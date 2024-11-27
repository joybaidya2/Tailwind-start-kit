
const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

menuToggle.addEventListener('click', (e) => {
    menu.classList.toggle('hidden');
});
