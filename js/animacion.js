(function() {
    'use strict';

    // Ocultar el cuerpo al inicio
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    document.body.style.transform = 'translateY(20px)';

    // Mostrar después de un pequeño delay
    window.addEventListener('load', function() {
        document.body.style.opacity = '1';
        document.body.style.transform = 'translateY(0)';
    });

    // Seleccionar elementos a animar (excluir botones fijos)
    const elementos = document.querySelectorAll('.servicios, .presentacion, .galeria, .faq, .reseñas, .sobre-nosotros, .seccion-noticias, .contenedor-formulario');

    // Configurar el Intersection Observer
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    // Aplicar estilos iniciales y observar (solo a los elementos que no sean botones fijos)
    elementos.forEach(function(el) {
        // Si es un botón fijo, no lo animamos
        if (el.classList && (el.classList.contains('btn-modo') || el.classList.contains('btn-subir'))) {
            return;
        }
        el.style.opacity = '0';
        el.style.transform = 'translateY(40px)';
        el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(el);
    });

    // Asegurar que los botones fijos siempre estén visibles
    const botonesFijos = document.querySelectorAll('.btn-modo, .btn-subir');
    botonesFijos.forEach(function(btn) {
        btn.style.opacity = '1';
        btn.style.transform = 'none';
    });

    console.log('✅ Animaciones de carga activadas');

})();