document.addEventListener('DOMContentLoaded', function() {

    const modalGaleria = document.getElementById('modalGaleria');
    const modalGaleriaImg = document.getElementById('modalGaleriaImg');

    // Verificar que los elementos esenciales existan
    if (!modalGaleria) {
        console.error('Error: No se encontró #modalGaleria');
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

    // Cierra al hacer click en cualquier parte que NO sea la imagen
    modalGaleria.addEventListener('click', function(e) {
        if (e.target !== modalGaleriaImg) {
            cerrarModalGaleria();
        }
    });

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modalGaleria.style.display === 'flex') {
            cerrarModalGaleria();
        }
    });

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