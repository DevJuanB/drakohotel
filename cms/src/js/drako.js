const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');
const menuIcon = document.querySelector('.menu-icon');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    menuIcon.classList.toggle('active');
});

function showModal() {
    document.getElementById('modal-overlay').classList.add('show');
}

function closeModal() {
    document.getElementById('modal-overlay').classList.remove('show');
}

document.querySelector('.toggle-discord').addEventListener('click', function() {
    document.querySelector('.discord-widget').classList.toggle('show-discord');
    this.textContent = this.textContent === 'Mostrar servidor de Discord' ? 'Ocultar servidor de Discord' : 'Mostrar servidor de Discord';
});