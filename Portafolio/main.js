
//                  MENU

const menu = document.querySelector(".menu");
const openMenuBtn = document.querySelector(".open-menu-btn");
const closeMenuBtn = document.querySelector(".close-menu-btn");

[openMenuBtn, closeMenuBtn].forEach((btn) => {
    btn.addEventListener("click", () => {
        menu.classList.toggle("open");
        menu.style.transition = "transform 0.5s ease";
    });
});

menu.addEventListener("transitioned", function() {
    this.removeAttribute("style");
});


//              DROPDOWN

menu.querySelectorAll(".dropdown > i").forEach((arrow) => {
    arrow.addEventListener("click", function(){
        this.closest(".dropdown").classList.toggle("active");
    });
});

window.onload = function () {
    // Variables
    const IMAGENES = [
        "images/ialink.jpeg",
        "images/iacentro.jpeg",
        "images/ialink2.jpeg"
    ];
    const TIEMPO_INTERVALO_MILESIMAS_SEG = 1000;
    let posicionActual =1;
    let $botonRetroceder = document.querySelector('#retroceder');
    let $botonAvanzar = document.querySelector('#avanzar');
    let $imagen = document.querySelector('#imagen');
    let intervalo;

    // Funciones

    /**
     * Funcion que cambia la foto en la siguiente posicion
     */
    function pasarFoto() {
        if(posicionActual >= IMAGENES.length - 1) {
            posicionActual = 0;
        } else {
            posicionActual++;
        }
        renderizarImagen();
    }

    /**
     * Funcion que cambia la foto en la anterior posicion
     */
    function retrocederFoto() {
        if(posicionActual <= 0) {
            posicionActual = IMAGENES.length - 1;
        } else {
            posicionActual--;
        }
        renderizarImagen();
    }

    /**
     * Funcion que actualiza la imagen de imagen dependiendo de posicionActual
     */
    function renderizarImagen () {
        $imagen.style.backgroundImage = `url(${IMAGENES[posicionActual]})`;
    }

    // Eventos
    $botonAvanzar.addEventListener('click', pasarFoto);
    $botonRetroceder.addEventListener('click', retrocederFoto);
    // Iniciar
    renderizarImagen();
}