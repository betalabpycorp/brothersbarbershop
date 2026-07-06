const fotos = [
    {
        img : "img/galeria/salon1.png"
    },
    {
        img : "img/galeria/1.png"
    },
    {
        img : "img/galeria/2.png"
    },
    {
        img : "img/galeria/3.png"
    },
    {
        img : "img/galeria/4.png"
    },
    {
        img : "img/galeria/5.png"
    },
    {
        img : "img/galeria/6.png"
    },
    {
        img : "img/galeria/7.png"
    },
    {
        img : "img/galeria/8.png"
    },
    {
        img : "img/galeria/9.png"
    },
    {
        img : "img/galeria/10.png"
    },
    {
        img : "img/galeria/11.png"
    },
    {
        img : "img/galeria/12.png"
    },
    {
        img : "img/galeria/13.png"
    },
    {
        img : "img/galeria/14.png"
    },
    {
        img : "img/galeria/15.png"
    },
    {
        img : "img/galeria/16.png"
    },
    {
        img : "img/galeria/17.png"
    },
    {
        img : "img/galeria/18.png"
    },
    {
        img : "img/galeria/19.png"
    }

]

function mostrarGaleria(){
    let contenedor = document.getElementById('galeria');

    let mostrar15 = fotos.slice(0,15)

    /*Recorrer servicios */
   mostrar15.forEach(fotos => {
        let card = document.createElement('div');
        card.className = 'cardgaleria';

        /*Agregar Contenido*/

        card.innerHTML = `
            <div class = "contenido-galeria" >
                <img title = "Haga click para agrandar la imagen" class = "fotos-galeria" src = "${fotos.img}">
            </div>
        `;

        /*Agregar al contenedor */
        contenedor.appendChild(card);
    });
}
document.addEventListener('DOMContentLoaded', mostrarGaleria());