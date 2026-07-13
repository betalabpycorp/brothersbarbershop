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
        nombre: "María Gómez",
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