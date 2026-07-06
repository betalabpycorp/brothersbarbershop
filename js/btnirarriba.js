// ============ BOTÓN VOLVER ARRIBA ============
const btnSubir = document.getElementById('btnSubir');

// Mostrar/ocultar al hacer scroll
window.addEventListener('scroll', function() {
    if (window.scrollY > 1000) {
        btnSubir.classList.add('visible');
    } else {
        btnSubir.classList.remove('visible');
    }
});

// Volver arriba al hacer clic
btnSubir.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});