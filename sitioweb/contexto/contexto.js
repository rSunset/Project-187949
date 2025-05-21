//                  PAQUETES A CARGAR

google.charts.load('current', {'packages':['table']});

//                  LLAMADAS DE TABLAS
google.charts.setOnLoadCallback(drawTable);
google.charts.setOnLoadCallback(drawTable2);

//                  MENU

const menu = document.querySelector(".menu");
const openMenuBtn = document.querySelector(".open-menu-btn");
const closeMenuBtn = document.querySelector(".close-menu-btn");
var tabla1 = document.getElementById('tabla1');
var tabla2 = document.getElementById('tabla2');


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

//              TABLAS


function drawTable() 
{
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Ventajas');
    data.addColumn('string', 'Desventajas');
    data.addRows([
        ['Automatización eficiente', 'Desplazamiento laboral'],
        ['Aumento de la precisión', 'Sesgo y discriminación'],
        ['Mejora de la productividad', 'Problemas y preocupaciones de privacidad y seguridad'],
        ['Personalización y experiencia del cliente', 'Dependencia, manipulación y desinformación'],
        ['Avances en la atención médica', 'Armas autónomas']
    ]);

    var table = new google.visualization.Table(tabla1);

    var config1 =
    {
        showRowNumber: true,
        width: '100%',
        height: '100%'
    }

    table.draw(data, config1);
}

function drawTable2() 
{
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Atributos de un agente inteligente');
    data.addRows([
      ['Tener actitudes mentales tales como creencias e intenciones.'],
      ['Tener la capacidad de obtener conocimiento, es decir, aprender.'],
      ['Poder resolver problemas, incluso descomponiendo problemas complejos en otros más simples.'],
      ['Capaz de realizar operaciones más complejas.'],
      ['Poseer la capacidad de dar sentido, si es posible, a ideas ambiguas o contradictorias.'],
      ['Planificar, predecir consecuencias, evaluar alternativas (como en los juegos de ajedrez).'],
      ['Conocer los límites de sus propias habilidades y conocimientos.'],
      ['Poder distinguir a pesar de la similitud de las situaciones.'],
      ['Poder ser original, creando incluso nuevos conceptos o ideas, y hasta utilizando analogías.'],
      ['Poder generalizar.'],
      ['Poder percibir y modelar el mundo exterior.'],
      ['Poder entender y utilizar el lenguaje y sus símbolos.']
    ]);

    var table = new google.visualization.Table(tabla2);

    var config2 =
    {
        showRowNumber: true,
        width: '100%',
        height: '100%'
    }

    table.draw(data, config2);
}