/*Datos*/
const noticias = [
    {
    id: 1,
        imagen: 'img/tendencia.jpg',
        fecha: '15 Junio 2026',
        titulo: 'Nuevos cortes 2026',
        resumen: 'Descubrí las tendencias en cortes de cabello para este año. Desde el clásico fade hasta los estilos más modernos...',
        contenido: [
            'Este año traemos las tendencias más innovadoras del mundo de la barbería. Desde el clásico fade americano hasta el moderno corte texturizado, pasando por estilos vintage que están volviendo con fuerza.',
            'Nuestro equipo de barberos se ha capacitado en las últimas técnicas para ofrecerte un servicio de primer nivel. No importa si preferís un look clásico o algo más arriesgado, en The Brothers tenemos el estilo perfecto para vos.',
            '¡Agendá tu turno y renová tu imagen con nosotros!'
        ]
    },
    {
        id: 2,
        imagen: 'img/5años.png',
        fecha: '02 Mayo 2026',
        titulo: 'Celebramos 5 años',
        resumen: 'The Brothers cumple 5 años de trayectoria en Itauguá. Te invitamos a celebrar con nosotros este gran logro...',
        contenido: [
            'The Brothers cumple 5 años de trayectoria en Itauguá. Cinco años de historias, cortes, barbas y sonrisas compartidas con nuestra querida comunidad.',
            'Desde aquel día en que Mateo y Santiago abrieron las puertas de su sueño, no hemos dejado de crecer y mejorar para ofrecerte la mejor experiencia en barbería.',
            'Te invitamos a celebrar con nosotros durante todo el mes con promociones especiales y sorpresas. ¡Gracias por ser parte de esta gran familia!'
        ]
    },
    {
        id: 3,
        imagen: 'img/40off.png',
        fecha: '20 Abril 2026',
        titulo: 'Promociones especiales',
        resumen: 'Aprovechá nuestras promociones por el mes del barbero. Descuentos en cortes, barba y combos especiales...',
        contenido: [
            'Por el mes del barbero, en The Brothers tenemos descuentos increíbles en todos nuestros servicios.',
            '• 40% en todos los servicios',
            'Las promoción es valida hasta fin de mes. ¡No te pierdas esta oportunidad de lucir increíble!'
        ]
    },
    {
        id: 4,
        imagen: 'img/prod.jpg',
        fecha: '10 Marzo 2026',
        titulo: 'Nuevos productos',
        resumen: 'Incorporamos nuevas marcas de productos para el cuidado del cabello y la barba. Calidad premium para vos...',
        contenido: [
            'En The Brothers siempre buscamos lo mejor para vos. Por eso incorporamos nuevas marcas de productos para el cuidado del cabello y la barba.',
            'Ahora podés encontrar <strong>ceras</strong> de las marcas más prestigiosas del mercado.',
            'Todos nuestros productos son de calidad premium y están seleccionados especialmente para cada tipo de cabello y barba. ¡Consultá con tu barbero cuál es el ideal para vos!'
        ]
    },
    {
    id: 5,
    imagen: 'img/campaña.png',
    fecha: '15 Agosto 2026',
    titulo: 'Campaña solidaria: Cortes gratis para abuelos',
    resumen: 'The Brothers se une a la comunidad con una jornada de cortes gratuitos para adultos mayores...',
    contenido: [
        'En The Brothers creemos en devolver a la comunidad todo el cariño que nos brindan. Por eso, organizamos una <strong>jornada solidaria</strong> ofreciendo cortes de cabello y arreglo de barba completamente <strong>gratuitos</strong> para adultos mayores de Itauguá.',
        'La actividad se realizó en nuestro local durante toda una jornada, donde nuestros barberos Mateo, Santiago y Lucía atendieron a más de 30 abuelos y abuelas de la comunidad, brindándoles no solo un servicio de calidad, sino también un momento de atención y cariño.',
        'La iniciativa fue todo un éxito y estamos muy agradecidos con todas las personas que se sumaron. Ver las sonrisas de los abuelos fue la mejor recompensa.',
        'Seguiremos realizando este tipo de actividades porque <strong>en The Brothers, la comunidad es nuestra familia</strong>. ¡Gracias a todos los que hicieron posible este hermoso día!'
    ]
},
    {
        id: 6,
        imagen: 'img/cursobarber.png',
        fecha: '10 Enero 2026',
        titulo: 'Curso de barbería profesional',
        resumen: 'Abrimos las inscripciones para nuestro curso intensivo de barbería. Aprendé las técnicas de los mejores...',
        contenido: [
            'En The Brothers creemos en formar nuevas generaciones de barberos. Por eso abrimos las inscripciones para nuestro <strong>Curso Intensivo de Barbería Profesional</strong>.',
            'El curso tiene una duración de 3 meses y está dividido en módulos: técnicas de corte, manejo de navaja, arreglo de barba, atención al cliente y gestión de un negocio de barbería.',
            'Las clases son prácticas y teóricas, dictadas por Mateo y Santiago en nuestro local de Itauguá. Cupos limitados. ¡Inscribite ahora y empezá tu carrera como barbero profesional!'
        ]
    }
];

const grid = document.getElementById('noticiasGrid');

noticias.forEach(noticia => {
    const item = document.createElement('div');
    item.className = 'noticia-item';

    item.innerHTML = `
        <div class="noticia-imagen">
            <img src="${noticia.imagen}" alt="${noticia.titulo}" />
            <span class="noticia-fecha">${noticia.fecha}</span>
        </div>
        <div class="noticia-contenido">
            <h3 class="noticia-titulo">${noticia.titulo}</h3>
            <p class="noticia-resumen">${noticia.resumen}</p>
            <button class="noticia-boton" data-id="${noticia.id}">Leer más</button>
        </div>
    `;

    grid.appendChild(item);
});

// ========== MODAL ==========
const modal = document.getElementById('modalNoticia');
const modalCerrar = document.getElementById('modalCerrar');
const modalImg = document.getElementById('modalImg');
const modalFecha = document.getElementById('modalFecha');
const modalTitulo = document.getElementById('modalTitulo');
const modalTexto = document.getElementById('modalTexto');

// Abrir modal
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('noticia-boton')) {
        const id = parseInt(e.target.getAttribute('data-id'));
        const noticia = noticias.find(n => n.id === id);

        if (noticia) {
            modalImg.src = noticia.imagen;
            modalImg.alt = noticia.titulo;
            modalFecha.textContent = noticia.fecha;
            modalTitulo.textContent = noticia.titulo;
            modalTexto.innerHTML = noticia.contenido.map(p => `<p class="modal-texto">${p}</p>`).join('');
            modal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        }
    }
});

// Cerrar modal con la X
modalCerrar.addEventListener('click', function() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
});

// Cerrar modal haciendo clic fuera
modal.addEventListener('click', function(e) {
    if (e.target === this) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Cerrar con tecla ESC
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && modal.style.display === 'flex') {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});