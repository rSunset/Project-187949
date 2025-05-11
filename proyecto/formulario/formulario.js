
//                  MENU

const menu = document.querySelector(".menu");
const openMenuBtn = document.querySelector(".open-menu-btn");
const closeMenuBtn = document.querySelector(".close-menu-btn");
const respuestas = {};
const puntuacion = 0;

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

//              RECUPERAR DATOS

document.addEventListener('DOMContentLoaded', function() {
const form = document.getElementById('quizForm');
            
    form.addEventListener('submit', function(e) {
        e.preventDefault();
                
        const radioGroups = {};
        const radioInputs = document.querySelectorAll('input[type="radio"]:checked');
                
        radioInputs.forEach(input => {
            const questionName = input.name;
            respuestas[questionName] = input.value;
        });
    });
});

if(respuestas.first == "Inteligencia Artificial")
{
    puntuacion++;
}
if(respuestas.second == "Desplazamiento laboral")
{
    puntuacion++;
}
if(respuestas.third == "John McCarthy")
{
    puntuacion++;
}
if(respuestas.fourth == "Resolver problemas")
{
    puntuacion++;
}
if(respuestas.fifth == "Empatía y liderazgo")
{
    puntuacion++;
}
if(respuestas.sixth == "Tener la capacidad de obtener aprendizaje")
{
    puntuacion++;
}
if(respuestas.seventh == "Abre las puertas a la creación y experimentación de novedosos conceptos")
{
    puntuacion++;
}
if(respuestas.eighth == "Transparencia")
{
    puntuacion++;
}
if(respuestas.nineth == "falso")
{
    puntuacion++;
}
if(respuestas.tenth == "verdadero")
{
    puntuacion++;
}

function generar() {
			var doc = new jsPDF();

			doc.setFontSize(20);
			doc.setTextColor(56,89,68);
			doc.text(10, 20, "\t\tRespuestas del Formulario\n\n");

			doc.setFontSize(20);
			doc.setTextColor(146,24,24);
			doc.text(10, 30, "\tPregunta 1: Inteligencia Artificial\n\tTu Respuesta: ");
            doc.text(10, 30, respuestas.first);

			doc.setFontSize(20);
			doc.setTextColor(146,24,24);
			doc.text(10, 30, "\n\n\tPregunta 2: Desplazamiento laboral\n\tTu Respuesta: ");
            doc.text(10, 30, respuestas.second);

			doc.setFontSize(20);
			doc.setTextColor(146,24,24);
			doc.text(10, 30, "\n\n\tPregunta 3: John McCarthy\n\tTu Respuesta: ");
            doc.text(10, 30, respuestas.third);

            doc.setFontSize(20);
			doc.setTextColor(146,24,24);
			doc.text(10, 30, "\n\n\tPregunta 4: Resolver problemas\n\tTu Respuesta: ");
            doc.text(10, 30, respuestas.fourth);

            doc.setFontSize(20);
			doc.setTextColor(146,24,24);
			doc.text(10, 30, "\n\n\tPregunta 5: Empatía y liderazgo\n\tTu Respuesta: ");
            doc.text(10, 30, respuestas.fifth);

            doc.setFontSize(20);
			doc.setTextColor(146,24,24);
			doc.text(10, 30, "\n\n\tPregunta 6: Tener la capacidad de obtener aprendizaje\n\tTu Respuesta: ");
            doc.text(10, 30, respuestas.sixth);

            doc.setFontSize(20);
			doc.setTextColor(146,24,24);
			doc.text(10, 30, "\n\n\tPregunta 7: Abre las puertas a la creación y experimentación de novedosos conceptos.\n\tTu Respuesta: ");
            doc.text(10, 30, respuestas.seventh);

            doc.setFontSize(20);
			doc.setTextColor(146,24,24);
			doc.text(10, 30, "\n\n\tPregunta 8: Transparencia\n\tTu Respuesta: ");
            doc.text(10, 30, respuestas.eighth);

            doc.setFontSize(20);
			doc.setTextColor(146,24,24);
			doc.text(10, 30, "\n\n\tPregunta 9: falso\n\tTu Respuesta: ");
            doc.text(10, 30, respuestas.nineth);

            doc.setFontSize(20);
			doc.setTextColor(146,24,24);
			doc.text(10, 30, "\n\n\tPregunta 10: verdadero\n\tTu Respuesta: ");
            doc.text(10, 30, respuestas.tenth);

            doc.setFontSize(20);
			doc.setTextColor(146,24,24);
			doc.text(10, 30, "\n\n\tTu puntuacion: ");
            doc.text(10, 30, puntuacion);
            doc.text(10, 30, "/10\n\n");

            doc.save('respuestas-formulario.pdf')
		}