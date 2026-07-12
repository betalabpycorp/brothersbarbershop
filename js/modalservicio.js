const servicios = [
    {
        img: "img/corte-clasico.png",
        nombre: "Corte Clásico",
        descri: "Corte tradicional con tijera y máquina. Estilo limpio y atemporal.",
        precio: "₲35.000",
        categoria: "Cortes"
    },
    {
        img: "img/degradado.png",
        nombre: "Corte Degradado",
        descri: "Técnica de degradado con máquina para un acabado moderno y definido.",
        precio: "₲45.000",
        categoria: "Cortes"
    },
    {
        img: "img/corte-tijera.png",
        nombre: "Corte con Tijera",
        descri: "Corte 100% a tijera para un acabado más natural y detallado.",
        precio: "₲50.000",
        categoria: "Cortes"
    },
    {
        img: "img/corte-infantil.png",
        nombre: "Corte Infantil",
        descri: "Corte para niños hasta 12 años. Rápido y con paciencia.",
        precio: "₲30.000",
        categoria: "Cortes"
    },
    {
        img: "img/degrabarba.png",
        nombre: "Arreglo de Barba",
        descri: "Perfilado, recorte y diseño de barba con máquina y tijera.",
        precio: "₲30.000",
        categoria: "Barba"
    },
    {
        img: "img/afeitado.png",
        nombre: "Afeitado Tradicional",
        descri: "Afeitado con navaja, toalla caliente y productos de calidad.",
        precio: "₲40.000",
        categoria: "Barba"
    },
    {
        img: "img/arreglo-barba.png",
        nombre: "Perfilado de Bigote",
        descri: "Recorte y diseño de bigote con precisión milimétrica.",
        precio: "₲20.000",
        categoria: "Barba"
    },
    {
        img: "img/barba+corte.png",
        nombre: "Combo Barba + Corte",
        descri: "Corte de cabello + arreglo de barba completo.",
        precio: "₲65.000",
        categoria: "Barba"
    },
    {
        img: "img/lavado-cab.png",
        nombre: "Lavado de Cabello",
        descri: "Lavado con shampoo y masaje capilar para relajar.",
        precio: "₲15.000",
        categoria: "Cuidados"
    },
    {
        img: "img/tratamiento-cap.png",
        nombre: "Tratamiento Capilar",
        descri: "Hidratación profunda y nutrición para cabello dañado.",
        precio: "₲60.000",
        categoria: "Cuidados"
    },
    {
        img: "img/mascarilla.png",
        nombre: "Afeitado + Mascarilla",
        descri: "Afeitado con navaja + mascarilla facial hidratante.",
        precio: "₲60.000",
        categoria: "Cuidados"
    },
    {
        img: "img/pack.png",
        nombre: "Pack Ejecutivo",
        descri: "Corte + barba + lavado + mascarilla. El tratamiento completo.",
        precio: "₲90.000",
        categoria: "Cuidados"
    }
];

// Elementos del modal
const modal = document.getElementById('modal-servicios');
const modalCerrar = document.getElementById('modalCerrar');
const modalImg = document.getElementById('modalImg');
const modalTitulo = document.getElementById('modalTitulo');
const modalDescri = document.getElementById('modalDescri');
const modalCategoria = document.getElementById('modalCategoria');
const modalPrecio = document.getElementById('modalPrecio');

// Función para abrir modal con los datos del servicio
function abrirModalServicio(index) {
    const servicio = servicios[index];
    
    modalImg.src = servicio.img;
    modalImg.alt = servicio.nombre;
    modalTitulo.textContent = servicio.nombre;
    modalDescri.textContent = servicio.descri;
    modalCategoria.textContent = servicio.categoria;
    modalPrecio.textContent = servicio.precio;
    
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

// Función para cerrar modal
function cerrarModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Eventos para cerrar el modal
modalCerrar.addEventListener('click', cerrarModal);

// Cerrar al hacer clic fuera del contenido
modal.addEventListener('click', function(e) {
    if (e.target === modal) {
        cerrarModal();
    }
});

// Cerrar con tecla ESC
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && modal.style.display === 'flex') {
        cerrarModal();
    }
});