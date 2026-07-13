(function() {
    'use strict';

    const beneficios = [
        { 
            titulo: 'Profesionales', 
            desc: 'Barberos con años de experiencia y técnicas modernas.' 
        },
        { 
            titulo: 'Puntualidad', 
            desc: 'Respetamos tu tiempo y el de nuestros barberos.' 
        },
        { 
            titulo: 'Calidad', 
            desc: 'Productos premium y atención personalizada para cada cliente.' 
        }
    ];

    // Crear sección
    const seccion = document.createElement('section');
    seccion.className = 'beneficios-section';

    // Título con class "titulos"
    const titulo = document.createElement('h1');
    titulo.className = 'titulos';
    titulo.textContent = '¿Por qué elegirnos?';
    seccion.appendChild(titulo);

    // Grid
    const grid = document.createElement('div');
    grid.className = 'beneficios-grid';

    beneficios.forEach(function(item) {
        const card = document.createElement('div');
        card.className = 'beneficio-card';

        card.innerHTML = `
            <h3>${item.titulo}</h3>
            <p>${item.desc}</p>
        `;

        grid.appendChild(card);
    });

    seccion.appendChild(grid);

    // Insertar después del banner
    const banner = document.querySelector('.banner');
    if (banner) {
        banner.parentNode.insertBefore(seccion, banner.nextSibling);
    } else {
        document.body.insertBefore(seccion, document.body.firstChild);
    }

    // Estilos
    const estilos = document.createElement('style');
    estilos.textContent = `
        .beneficios-section {
            max-width: 1100px;
            margin: 60px auto 40px auto;
            padding: 0 20px;
        }

        .beneficios-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 25px;
        }

        .beneficio-card {
            background: #1a1a1a;
            padding: 35px 25px;
            border-radius: 12px;
            text-align: center;
            border: 1px solid #2a2a2a;
            transition: 0.4s ease;
        }

        .beneficio-card:hover {
            border-color: #C9A66B;
            transform: translateY(-6px);
            box-shadow: 0 10px 40px rgba(201, 166, 107, 0.12);
        }

        .beneficio-card h3 {
            color: #ffffff;
            font-size: 20px;
            font-weight: 600;
            margin: 0 0 12px 0;
            letter-spacing: 0.5px;
        }

        .beneficio-card p {
            color: #aaaaaa;
            font-size: 14px;
            line-height: 1.7;
            margin: 0;
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

        @media (max-width: 768px) {
            .beneficios-section {
                margin: 40px auto 30px auto;
                padding: 0 15px;
            }

            .beneficios-grid {
                gap: 15px;
            }

            .beneficio-card {
                padding: 25px 18px;
            }

            .beneficio-card h3 {
                font-size: 16px;
            }

            .beneficio-card p {
                font-size: 13px;
            }
        }

        @media (max-width: 600px) {
            .beneficios-section {
                margin: 30px auto 20px auto;
            }

            .beneficios-grid {
                gap: 10px;
            }

            .beneficio-card {
                padding: 18px 12px;
                border-radius: 8px;
            }

            .beneficio-card h3 {
                font-size: 13px;
                margin-bottom: 4px;
            }

            .beneficio-card p {
                font-size: 11px;
                line-height: 1.4;
            }
        }

        @media (max-width: 400px) {
            .beneficios-grid {
                grid-template-columns: 1fr;
                gap: 10px;
                max-width: 300px;
                margin: 0 auto;
            }

            .beneficio-card {
                padding: 16px 15px;
            }

            .beneficio-card h3 {
                font-size: 14px;
            }

            .beneficio-card p {
                font-size: 12px;
            }
        }
    `;
    document.head.appendChild(estilos);

    console.log('Beneficios insertados correctamente');

})();