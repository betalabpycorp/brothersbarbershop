// ============================================ //
// MENÚ HAMBURGUESA                            //
// ============================================ //

const botonHamburguesa = document.getElementById('botonHamburguesa');
const navLinks = document.getElementById('navLinks');
const overlayMenu = document.getElementById('overlayMenu');

// Abrir/cerrar menú
botonHamburguesa.addEventListener('click', function() {
    this.classList.toggle('activo');
    navLinks.classList.toggle('abierto');
    overlayMenu.classList.toggle('activo');
    document.body.style.overflow = navLinks.classList.contains('abierto') ? 'hidden' : 'auto';
});

// Cerrar menú al hacer clic en el overlay
overlayMenu.addEventListener('click', function() {
    botonHamburguesa.classList.remove('activo');
    navLinks.classList.remove('abierto');
    this.classList.remove('activo');
    document.body.style.overflow = 'auto';
});

// Cerrar menú al hacer clic en un enlace
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', function() {
        botonHamburguesa.classList.remove('activo');
        navLinks.classList.remove('abierto');
        overlayMenu.classList.remove('activo');
        document.body.style.overflow = 'auto';
    });
});

// Cerrar menú con tecla ESC
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && navLinks.classList.contains('abierto')) {
        botonHamburguesa.classList.remove('activo');
        navLinks.classList.remove('abierto');
        overlayMenu.classList.remove('activo');
        document.body.style.overflow = 'auto';
    }
});