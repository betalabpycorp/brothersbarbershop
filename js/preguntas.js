const preguntasFaq = [
     {
        pregunta: "¿Necesito agendar cita previa?",
        respuesta: "No trabajamos con citas previas. Atendemos por <strong>orden de llegada</strong>. Te recomendamos venir con tiempo para evitar esperas, especialmente los fines de semana."
    },
    {
        pregunta: "¿Qué servicios ofrecen?",
        respuesta: "Ofrecemos <strong>corte de cabello</strong>, <strong>arreglo de barba</strong>, <strong>afeitado tradicional con navaja</strong>, <strong>tratamientos capilares</strong> y <strong>pack ejecutivo</strong> completo."
    },
    {
        pregunta: "¿Aceptan tarjetas de crédito?",
        respuesta: "Sí. Aceptamos <strong>tarjetas de crédito, débito</strong>, <strong>transferencias bancarias</strong> y <strong>efectivo</strong>."
    },
    {
        pregunta: "¿Atienden niños?",
        respuesta: "Sí. Tenemos <strong>cortes infantiles</strong> para niños hasta 12 años. Nuestros barberos tienen paciencia y experiencia con los más pequeños."
    },
    {
        pregunta: "¿Cuál es el horario de atención?",
        respuesta: "Atendemos de <strong>lunes a sábado de 8:00 a 20:00</strong> y <strong>domingos de 9:00 a 14:00</strong>."
    },
    {
        pregunta: "¿Dónde están ubicados?",
        respuesta: "Estamos en <strong>calle Mariscal Estigarribia, Itauguá</strong>, frente a la plaza principal."
    },
    {
        pregunta: "¿Cuánto tiempo dura un corte de cabello?",
        respuesta: "Un corte de cabello dura aproximadamente <strong>30 a 45 minutos</strong>, dependiendo del estilo y la complejidad del trabajo."
    },
    {
        pregunta: "¿Ofrecen servicio a domicilio?",
        respuesta: "Actualmente no contamos con servicio a domicilio. Todas nuestras atenciones son en nuestro local de Itauguá."
    },
    {
        pregunta: "¿Puedo llevar mi propio diseño o foto de referencia?",
        respuesta: "Sí, puedes traer fotos o diseños de referencia. Nuestros barberos están capacitados para replicar el estilo que deseas."
    },
    {
        pregunta: "¿Tienen promociones o descuentos?",
        respuesta: "Sí. Ofrecemos <strong>descuentos para estudiantes</strong> y <strong>promociones especiales</strong> los días lunes y martes. Consultá por nuestras redes sociales."
    }
];

// Función para mostrar el acordeón
function mostrarFaq() {
    const contenedor = document.getElementById('faq-container');

    if (!contenedor) {
        console.error('ERROR: No existe el elemento con id="faq-container"');
        return;
    }

    preguntasFaq.forEach((item, index) => {
        const faqItem = document.createElement('div');
        faqItem.className = 'faq-item';

        faqItem.innerHTML = `
            <button class="faq-pregunta" data-index="${index}">
                <span>${item.pregunta}</span>
                <span class="icono-faq">▼</span>
            </button>
            <div class="faq-respuesta">
                <p>${item.respuesta}</p>
            </div>
        `;

        contenedor.appendChild(faqItem);
    });

    // Evento para abrir/cerrar el acordeón
    const botones = document.querySelectorAll('.faq-pregunta');
    
    botones.forEach(boton => {
        boton.addEventListener('click', function() {
            const item = this.parentElement;
            const estaActivo = item.classList.contains('activo');
            if (estaActivo) {
                item.classList.remove('activo');
            } else {
                item.classList.add('activo');
            }
        });
    });

    const primerItem = document.querySelector('.faq-item');
    if (primerItem) {
        primerItem.classList.add('activo');
    }
}

document.addEventListener('DOMContentLoaded', mostrarFaq);