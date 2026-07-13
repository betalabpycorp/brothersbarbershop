// ============================================ //
// MODO OSCURO/CLARO + BOTÓN VOLVER ARRIBA     //
// ============================================ //

(function() {
    'use strict';

    let botonModo = document.getElementById('btnModo');

    if (!botonModo) {
        botonModo = document.createElement('button');
        botonModo.className = 'btn-modo';
        botonModo.id = 'btnModo';
        botonModo.setAttribute('aria-label', 'Cambiar modo');
        botonModo.innerHTML = '<i class="fas fa-moon"></i>';
        document.body.appendChild(botonModo);
    }

    const icono = botonModo.querySelector('i');
    const cuerpo = document.body;

    function cambiarLogo(ruta) {
        const logo = document.getElementById('logoPrincipal');
        if (logo) {
            logo.src = ruta;
        }
    }

    function cambiarModo(modo) {
        if (modo === 'claro') {
            cuerpo.classList.add('modo-claro');
            cuerpo.classList.remove('modo-oscuro');
            if (icono) {
                icono.className = 'fas fa-sun';
            }
            localStorage.setItem('modo', 'claro');
            botonModo.setAttribute('aria-label', 'Cambiar a modo oscuro');
            cambiarLogo('img/logobarberclaro.png');
        } else {
            cuerpo.classList.add('modo-oscuro');
            cuerpo.classList.remove('modo-claro');
            if (icono) {
                icono.className = 'fas fa-moon';
            }
            localStorage.setItem('modo', 'oscuro');
            botonModo.setAttribute('aria-label', 'Cambiar a modo claro');
            cambiarLogo('img/logobarber.png');
        }
    }

    function alternarModo() {
        if (cuerpo.classList.contains('modo-claro')) {
            cambiarModo('oscuro');
        } else {
            cambiarModo('claro');
        }
    }

    function cargarModoGuardado() {
        const modoGuardado = localStorage.getItem('modo');
        
        if (!modoGuardado) {
            cambiarModo('oscuro');
            return;
        }

        if (modoGuardado === 'claro') {
            cambiarModo('claro');
        } else {
            cambiarModo('oscuro');
        }
    }

    if (botonModo) {
        botonModo.addEventListener('click', alternarModo);
    }

    cargarModoGuardado();

    console.log('Modo claro/oscuro inicializado');

    let botonSubir = document.getElementById('btnSubir');

    if (!botonSubir) {
        botonSubir = document.createElement('button');
        botonSubir.className = 'btn-subir';
        botonSubir.id = 'btnSubir';
        botonSubir.innerHTML = '↑';
        botonSubir.setAttribute('aria-label', 'Volver arriba');
        document.body.appendChild(botonSubir);
    }

    if (botonSubir) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 1000) {
                botonSubir.classList.add('visible');
            } else {
                botonSubir.classList.remove('visible');
            }
        });

        botonSubir.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    console.log('Botón volver arriba inicializado');

})();

const estilos = document.createElement('style');
estilos.textContent = `
    .btn-modo {
        position: fixed;
        bottom: 90px;
        right: 30px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        border: none;
        background: #C9A66B;
        color: #000000;
        font-size: 1.5rem;
        cursor: pointer;
        z-index: 999;
        box-shadow: 0 4px 15px rgba(201, 166, 107, 0.3);
        transition: all 0.3s ease;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .btn-modo:hover {
        transform: scale(1.1);
        box-shadow: 0 6px 25px rgba(201, 166, 107, 0.5);
    }

    .btn-modo i {
        transition: 0.3s ease;
    }

    .btn-subir {
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        background-color: #C9A66B;
        color: #000000;
        border: none;
        border-radius: 50%;
        font-size: 1.8rem;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        box-shadow: 0 4px 15px rgba(201, 166, 107, 0.3);
        z-index: 999;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .btn-subir:hover {
        background-color: #b8924f;
        transform: scale(1.1);
        box-shadow: 0 6px 25px rgba(201, 166, 107, 0.5);
    }

    .btn-subir.visible {
        opacity: 1;
        visibility: visible;
    }

    body.modo-claro {
        background-color: #f5f0eb;
        color: #2d2a27;
    }

    body.modo-claro * {
        color: #2d2a27;
    }

    body.modo-claro h1,
    body.modo-claro h2,
    body.modo-claro h3,
    body.modo-claro h4,
    body.modo-claro h5,
    body.modo-claro h6 {
        color: #2d2a27;
    }

    body.modo-claro p {
        color: #2d2a27;
    }

    body.modo-claro a {
        color: #2d2a27;
    }

    body.modo-claro a:hover {
        color: #C9A66B;
    }

    body.modo-claro header {
        background: #f5f0eb;
        border-bottom-color: #C9A66B;
    }

    body.modo-claro header * {
        color: #2d2a27;
    }

    body.modo-claro header a {
        color: #2d2a27;
    }

    body.modo-claro header a:hover {
        background-color: #e8e0d8;
        color: #2d2a27;
    }

    body.modo-claro .boton-hamburguesa span {
        background: #2d2a27;
    }

    body.modo-claro .nav-links {
        background: #f5f0eb !important;
    }

    body.modo-claro .nav-links a {
        color: #2d2a27 !important;
    }

    body.modo-claro .nav-links a:hover {
        background-color: #e8e0d8 !important;
        color: #2d2a27 !important;
    }

    body.modo-claro .nav-links.abierto {
        background: #f5f0eb !important;
    }

    body.modo-claro .overlay-menu {
        background: rgba(0, 0, 0, 0.5) !important;
    }

    body.modo-claro .banner h1,
    body.modo-claro .banner h4 {
        color: #ffffff;
    }

    body.modo-claro .textpresen h4 {
        color: #2d2a27;
    }

    body.modo-claro .titulos {
        color: #b8924f;
    }

    body.modo-claro .noticias-titulo-principal {
        color: #2d2a27 !important;
    }

    body.modo-claro .sobre-titulo {
        color: #2d2a27 !important;
    }

    body.modo-claro .contenido {
        background-color: #ffffff;
        color: #2d2a27;
    }

    body.modo-claro .contenido:hover {
        background-color: #f0ece6;
    }

    body.modo-claro .contenido * {
        color: #2d2a27;
    }

    body.modo-claro .sp-categoria {
        color: #e74c3c;
    }

    body.modo-claro .sp-precio {
        color: #27ae60;
    }

    body.modo-claro .ver-mas {
        background-color: #C9A66B;
        color: #000000;
    }

    body.modo-claro .ver-mas:hover {
        background-color: #b8924f;
    }

    body.modo-claro .formulario {
        background-color: rgba(255, 255, 255, 0.8);
    }

    body.modo-claro .formulario * {
        color: #2d2a27;
    }

    body.modo-claro .campo input,
    body.modo-claro .campo select,
    body.modo-claro .campo textarea {
        background: #ffffff;
        color: #2d2a27;
        border-color: #ccc;
    }

    body.modo-claro .campo input:focus,
    body.modo-claro .campo select:focus,
    body.modo-claro .campo textarea:focus {
        border-color: #C9A66B;
    }

    body.modo-claro .campo label {
        color: #2d2a27;
    }

    body.modo-claro .pie-pagina {
        background: #e8e0d8;
        border-top-color: #C9A66B;
    }

    body.modo-claro .pie-pagina * {
        color: #2d2a27 !important;
    }

    body.modo-claro .parte-superior {
        border-bottom-color: #d5cdc5;
    }

    body.modo-claro .columna h4 {
        color: #2d2a27 !important;
    }

    body.modo-claro .columna a {
        color: #2d2a27 !important;
    }

    body.modo-claro .columna a:hover {
        color: #C9A66B !important;
    }

    body.modo-claro .columna p {
        color: #2d2a27 !important;
    }

    body.modo-claro .redes-sociales a {
        background: #ffffff;
        color: #2d2a27 !important;
        border-color: #ccc;
    }

    body.modo-claro .redes-sociales a:hover {
        background: #C9A66B;
        color: #000000 !important;
    }

    body.modo-claro .faq-item {
        background: #ffffff;
        border-color: #ddd;
    }

    body.modo-claro .faq-item * {
        color: #2d2a27;
    }

    body.modo-claro .faq-pregunta {
        color: #2d2a27;
    }

    body.modo-claro .faq-pregunta:hover {
        color: #C9A66B;
    }

    body.modo-claro .faq-respuesta p {
        color: #555555;
    }

    body.modo-claro .modal-contenido {
        background: #ffffff;
    }

    body.modo-claro .modal-contenido * {
        color: #2d2a27;
    }

    body.modo-claro .modal-servicios-contenido {
        background: #ffffff;
    }

    body.modo-claro .modal-servicios-contenido * {
        color: #2d2a27;
    }

    body.modo-claro .modal-galeria-contenido {
        background: #ffffff;
    }

    body.modo-claro .modal-galeria-contenido * {
        color: #2d2a27;
    }

    body.modo-claro .modal-servicios {
        background: rgba(255, 255, 255, 0.95);
    }

    body.modo-claro .modal-galeria {
        background: rgba(255, 255, 255, 0.95);
    }

    body.modo-claro .modal-servicios-cerrar {
        background: rgba(0, 0, 0, 0.1);
        color: #2d2a27;
    }

    body.modo-claro .modal-servicios-cerrar:hover {
        background: #C9A66B;
        color: #000000;
    }

    body.modo-claro .modal-galeria-cerrar {
        background: rgba(0, 0, 0, 0.1);
        color: #2d2a27;
    }

    body.modo-claro .modal-galeria-cerrar:hover {
        background: #C9A66B;
        color: #000000;
    }

    body.modo-claro .btn-subir {
        background-color: #C9A66B;
        color: #000000;
    }

    body.modo-claro .btn-subir:hover {
        background-color: #b8924f;
    }

    body.modo-claro .btn-modo {
        background: #C9A66B;
        color: #000000;
    }

    body.modo-claro .btn-modo:hover {
        background: #b8924f;
    }

    body.modo-claro .seccion-noticias {
        color: #2d2a27;
    }

    body.modo-claro .seccion-noticias * {
        color: #2d2a27;
    }

    body.modo-claro .noticia-item {
        background: #ffffff;
        border-color: #ddd;
    }

    body.modo-claro .noticia-titulo {
        color: #2d2a27;
    }

    body.modo-claro .noticia-resumen {
        color: #555555;
    }

    body.modo-claro .noticia-fecha {
        color: #000000;
    }

    body.modo-claro .noticia-boton {
        color: #C9A66B;
        border-color: #C9A66B;
    }

    body.modo-claro .noticia-boton:hover {
        background: #C9A66B;
        color: #000000;
    }

    body.modo-claro .sobre-nosotros {
        color: #2d2a27;
    }

    body.modo-claro .sobre-nosotros * {
        color: #2d2a27;
    }

    body.modo-claro .sobre-historia p {
        color: #555555;
    }

    body.modo-claro .sobre-destacado {
        color: #2d2a27;
    }

    body.modo-claro .sobre-mision,
    body.modo-claro .sobre-vision,
    body.modo-claro .sobre-valores {
        background: #ffffff;
        border-color: #ddd;
    }

    body.modo-claro .sobre-mision *,
    body.modo-claro .sobre-vision *,
    body.modo-claro .sobre-valores * {
        color: #2d2a27;
    }

    body.modo-claro .sobre-mision p,
    body.modo-claro .sobre-vision p {
        color: #555555;
    }

    body.modo-claro .sobre-valor-item {
        background: #f5f0eb;
        border-color: #ddd;
    }

    body.modo-claro .sobre-equipo-miembro {
        background: #ffffff;
        border-color: #ddd;
    }

    body.modo-claro .sobre-equipo-miembro * {
        color: #2d2a27;
    }

    body.modo-claro .sobre-equipo-nombre {
        color: #2d2a27;
    }

    body.modo-claro .sobre-equipo-bio {
        color: #555555;
    }

    body.modo-claro .sobre-local-foto {
        background: #ffffff;
        border-color: #ddd;
    }

    body.modo-claro .sobre-local-foto * {
        color: #2d2a27;
    }

    body.modo-claro .sobre-ubicacion {
        background: #ffffff;
        border-color: #ddd;
    }

    body.modo-claro .sobre-ubicacion * {
        color: #2d2a27;
    }

    body.modo-claro .sobre-ubicacion-texto {
        color: #555555;
    }

    body.modo-claro .sobre-firma-nombre {
        color: #2d2a27;
    }

    body.modo-claro .sobre-firma-cargo {
        color: #777777;
    }

    body.modo-claro .sobre-equipo-titulo {
        color: #2d2a27;
    }

    body.modo-claro .sobre-equipo-descripcion {
        color: #555555;
    }

    body.modo-claro .sobre-local-titulo {
        color: #2d2a27;
    }

    body.modo-claro .sobre-local-descripcion {
        color: #555555;
    }

    body.modo-claro .sobre-ubicacion-titulo {
        color: #2d2a27;
    }

    body.modo-claro .sobre-ubicacion-frase {
        color: #777777;
    }

    body.modo-claro .noticias-encabezado h2 {
        color: #2d2a27 !important;
    }

    body.modo-claro .noticias-encabezado .noticias-titulo-principal {
        color: #2d2a27 !important;
    }

    body.modo-claro .noticias-encabezado .noticias-subtitulo {
        color: #555555 !important;
    }

    body.modo-claro .noticias-encabezado .noticias-etiqueta {
        color: #C9A66B !important;
        background: rgba(0, 0, 0, 0.05) !important;
        border-color: #C9A66B !important;
    }

    body.modo-claro .sobre-encabezado h1 {
        color: #2d2a27 !important;
    }

    body.modo-claro .sobre-encabezado .sobre-titulo {
        color: #2d2a27 !important;
    }

    body.modo-claro .sobre-encabezado .sobre-subtitulo {
        color: #555555 !important;
    }

    body.modo-claro .sobre-encabezado .sobre-etiqueta {
        color: #C9A66B !important;
        background: rgba(0, 0, 0, 0.05) !important;
        border-color: #C9A66B !important;
    }

    body.modo-claro .politica-privacidad {
        color: #2d2a27;
    }

    body.modo-claro .politica-privacidad * {
        color: #2d2a27;
    }

    body.modo-claro .politica-privacidad h1 {
        color: #2d2a27;
    }

    body.modo-claro .politica-privacidad h2 {
        color: #2d2a27;
    }

    body.modo-claro .politica-privacidad p {
        color: #555555;
    }

    body.modo-claro .politica-privacidad .seccion {
        background: #ffffff;
        border-color: #ddd;
    }

    body.modo-claro .politica-privacidad .seccion * {
        color: #2d2a27;
    }

    body.modo-claro .politica-privacidad .seccion p {
        color: #555555;
    }

    body.modo-claro .politica-privacidad .seccion ul {
        color: #555555;
    }

    body.modo-claro .politica-privacidad .seccion ul li {
        color: #555555;
    }

    body.modo-claro .politica-privacidad .seccion ul li strong {
        color: #2d2a27;
    }

    body.modo-claro .politica-privacidad .seccion .destacado {
        color: #C9A66B;
    }

    body.modo-claro .politica-privacidad .fecha {
        color: #777777;
    }

    body.modo-claro .politica-privacidad .volver {
        background-color: #C9A66B;
        color: #000000;
    }

    body.modo-claro .politica-privacidad .volver:hover {
        background-color: #b8924f;
    }

    body.modo-claro .politica-privacidad .footer-politica {
        color: #777777;
        border-top-color: #ddd;
    }

    body.modo-claro .desarrollador {
        color: #2d2a27;
    }

    body.modo-claro .desarrollador * {
        color: #2d2a27;
    }

    body.modo-claro .desarrollador h1 {
        color: #2d2a27;
    }

    body.modo-claro .desarrollador .subtitulo {
        color: #555555;
    }

    body.modo-claro .desarrollador .dev-card {
        background: #ffffff;
        border-color: #ddd;
    }

    body.modo-claro .desarrollador .dev-card * {
        color: #2d2a27;
    }

    body.modo-claro .desarrollador .dev-card h3 {
        color: #2d2a27;
    }

    body.modo-claro .desarrollador .dev-card .dev-rol {
        background: #C9A66B;
        color: #000000;
    }

    body.modo-claro .desarrollador .dev-card .dev-desc {
        color: #555555;
    }

    body.modo-claro .desarrollador .dev-redes a {
        color: #C9A66B;
        border-color: #C9A66B;
    }

    body.modo-claro .desarrollador .dev-redes a:hover {
        background: #C9A66B;
        color: #000000;
    }

    body.modo-claro .desarrollador .tecnologias {
        background: #ffffff;
        border-color: #ddd;
    }

    body.modo-claro .desarrollador .tecnologias h2 {
        color: #2d2a27;
    }

    body.modo-claro .desarrollador .tech-item {
        background: #f5f0eb;
        color: #2d2a27;
        border-color: #ddd;
    }

    body.modo-claro .desarrollador .tech-item:hover {
        border-color: #C9A66B;
        color: #C9A66B;
    }

    body.modo-claro .desarrollador .volver {
        background-color: #C9A66B;
        color: #000000;
    }

    body.modo-claro .desarrollador .volver:hover {
        background-color: #b8924f;
    }

    body.modo-claro .desarrollador .footer-dev {
        color: #777777;
        border-top-color: #ddd;
    }

    body.modo-claro .desarrollador .footer-dev strong {
        color: #2d2a27;
    }

    body.modo-claro .beneficio-card {
        background: #ffffff;
        border-color: #ddd;
    }

    body.modo-claro .beneficio-card h3 {
        color: #2d2a27;
    }

    body.modo-claro .beneficio-card p {
        color: #555555;
    }

    body.modo-claro .beneficio-card:hover {
        border-color: #C9A66B;
        box-shadow: 0 10px 40px rgba(201, 166, 107, 0.2);
    }

    body.modo-claro .reseña-item {
        background: #ffffff;
        border-color: #ddd;
    }

    body.modo-claro .reseña-item:hover {
        border-color: #C9A66B;
        box-shadow: 0 8px 30px rgba(201, 166, 107, 0.2);
    }

    body.modo-claro .reseña-texto {
        color: #555555;
    }

    body.modo-claro .reseña-nombre {
        color: #2d2a27;
    }

    body.modo-claro .reseña-fecha {
        color: #888888;
    }

    body.modo-claro .reseña-avatar {
        background: #C9A66B;
        color: #000000;
    }

    body.modo-claro .reseña-cliente {
        border-top-color: #ddd;
    }

    body.modo-claro .reseñas-titulo {
        color: #C9A66B;
    }

    body.modo-claro .reseñas-titulo::after {
        background: #C9A66B;
    }

    @media (max-width: 768px) {
        .btn-modo {
            bottom: 80px;
            right: 20px;
            width: 45px;
            height: 45px;
            font-size: 1.3rem;
        }

        .btn-subir {
            bottom: 25px;
            right: 20px;
            width: 45px;
            height: 45px;
            font-size: 1.5rem;
        }
    }

    @media (max-width: 480px) {
        .btn-modo {
            bottom: 70px;
            right: 15px;
            width: 40px;
            height: 40px;
            font-size: 1.1rem;
        }

        .btn-subir {
            bottom: 20px;
            right: 15px;
            width: 40px;
            height: 40px;
            font-size: 1.3rem;
        }
    }
`;
document.head.appendChild(estilos);