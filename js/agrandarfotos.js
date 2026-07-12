

document.addEventListener('DOMContentLoaded', function() {

    const modalGaleria = document.getElementById('modalGaleria');
    const modalGaleriaCerrar = document.getElementById('modalGaleriaCerrar');
    const modalGaleriaImg = document.getElementById('modalGaleriaImg');

    // Verificar que los elementos existan
    if (!modalGaleria) {
        console.error('Error: No se encontró #modalGaleria');
        return;
    }
    if (!modalGaleriaCerrar) {
        console.error('Error: No se encontró #modalGaleriaCerrar');
        return;
    }
    if (!modalGaleriaImg) {
        console.error('Error: No se encontró #modalGaleriaImg');
        return;
    }

    function abrirModalGaleria(src) {
        modalGaleriaImg.src = src;
        modalGaleria.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }

    function cerrarModalGaleria() {
        modalGaleria.style.display = 'none';
        document.body.style.overflow = 'auto';
    }

    modalGaleriaCerrar.addEventListener('click', cerrarModalGaleria);

    modalGaleria.addEventListener('click', function(e) {
        if (e.target === modalGaleria) {
            cerrarModalGaleria();
        }
    });

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modalGaleria.style.display === 'flex') {
            cerrarModalGaleria();
        }
    });

    // Esperar un poco para que las imágenes estén cargadas
    setTimeout(function() {
        const imagenes = document.querySelectorAll('.fotos-galeria');

        if (imagenes.length === 0) {
            console.warn('No se encontraron imágenes con clase .fotos-galeria');
            return;
        }

        imagenes.forEach(function(img) {
            img.style.cursor = 'pointer';
            img.addEventListener('click', function() {
                abrirModalGaleria(this.src);
            });
        });

        console.log('Modal activado para', imagenes.length, 'imágenes');
    }, 500);

});