document.querySelector('.toggle')
    .addEventListener('click', mostrarMenuConToggle);

function mostrarMenuConToggle() {
    const enlaces = document.querySelectorAll('.elemento-menu')

    enlaces.forEach(enlace => enlace.classList.toggle('mostrar-elementos-menu'));
}