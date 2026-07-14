const reseñas = [
    {
        id: 1,
        nombre: "Juan Díaz",
        avatar: "JD",
        texto: "Excelente atención, muy profesionales. Me encanta cómo me dejaron el corte y la barba. Sin duda volveré.",
        estrellas: 5,
        fecha: "15/07/2026"
    },
    {
        id: 2,
        nombre: "Marcos Gómez",
        avatar: "MG",
        texto: "El mejor lugar para cortarse el cabello en Itauguá. La atención es de primera y el ambiente es muy acogedor.",
        estrellas: 5,
        fecha: "12/07/2026"
    },
    {
        id: 3,
        nombre: "Carlos López",
        avatar: "CL",
        texto: "Muy buena experiencia. El barbero supo exactamente lo que quería y el resultado fue espectacular.",
        estrellas: 5,
        fecha: "10/07/2026"
    },
    {
    id: 4,
    nombre: "Luis Fernández",
    avatar: "LF",
    texto: "Me encantó el servicio, muy detallistas y atentos. El ambiente es relajado y moderno, perfecto para disfrutar el corte.",
    estrellas: 5,
    fecha: "09/07/2026"
},
{
    id: 5,
    nombre: "Roberto Martínez",
    avatar: "RM",
    texto: "Excelente trabajo, el barbero entendió exactamente lo que quería. Además, la charla fue muy amena. ¡Recomendado!",
    estrellas: 5,
    fecha: "08/07/2026"
}
];

function mostrarReseñas() {
    const contenedor = document.getElementById('reseñas');
    if (!contenedor) return;

    let html = '';

    reseñas.forEach(reseña => {
        let estrellas = '';
        for (let i = 0; i < reseña.estrellas; i++) {
            estrellas += '⭐';
        }

        html += `
            <div class="reseña-item">
                <div class="reseña-estrellas">${estrellas}</div>
                <p class="reseña-texto">"${reseña.texto}"</p>
                <div class="reseña-cliente">
                    <div class="reseña-avatar">${reseña.avatar}</div>
                    <div>
                        <h4 class="reseña-nombre">${reseña.nombre}</h4>
                        <span class="reseña-fecha">${reseña.fecha}</span>
                    </div>
                </div>
            </div>
        `;
    });

    contenedor.innerHTML = html;
}

document.addEventListener('DOMContentLoaded', mostrarReseñas);
