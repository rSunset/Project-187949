
//                  MENU

const menu = document.querySelector(".menu");
const openMenuBtn = document.querySelector(".open-menu-btn");
const closeMenuBtn = document.querySelector(".close-menu-btn");
const respuestas = {};

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

        let puntuacion = 0;

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

        generarPDF(respuestas, puntuacion);
    });
});



function generarPDF(respuestas, puntuacion) {
    var doc = new jsPDF();
    
    doc.setFontSize(18);
    doc.setTextColor(56, 89, 68);
    doc.text(10, 20, "Respuestas del Formulario\n\n");
    
    doc.setFontSize(7);
    doc.setTextColor(0, 0, 0);
    
    let yPosition = 30;
    
    doc.text(10, yPosition, "Pregunta 1: ¿Qué permite a las computadoras simular la inteligencia humana?");
    yPosition += 7;
    doc.text(10, yPosition, "Respuesta correcta: Inteligencia Artificial");
    yPosition += 7;
    doc.text(10, yPosition, "Tu respuesta: " + (respuestas.first || "No respondida"));
    yPosition += 10;
    
    doc.text(10, yPosition, "Pregunta 2: ¿Cuál de las siguientes es una desventaja de la inteligencia artificial?");
    yPosition += 7;
    doc.text(10, yPosition, "Respuesta correcta: Desplazamiento laboral");
    yPosition += 7;
    doc.text(10, yPosition, "Tu respuesta: " + (respuestas.second || "No respondida"));
    yPosition += 10;
    
    doc.text(10, yPosition, "Pregunta 3: ¿Quién acuñó formalmente el término 'inteligencia artificial'?");
    yPosition += 7;
    doc.text(10, yPosition, "Respuesta correcta: John McCarthy");
    yPosition += 7;
    doc.text(10, yPosition, "Tu respuesta: " + (respuestas.third || "No respondida"));
    yPosition += 10;
    
    doc.text(10, yPosition, "Pregunta 4: ¿Cuál es una de las capacidades que debe tener un agente inteligente?");
    yPosition += 7;
    doc.text(10, yPosition, "Respuesta correcta: Resolver problemas");
    yPosition += 7;
    doc.text(10, yPosition, "Tu respuesta: " + (respuestas.fourth || "No respondida"));
    yPosition += 10;
    
    doc.text(10, yPosition, "Pregunta 5: ¿Qué elemento no puede ser sustituido por la inteligencia artificial en el ámbito educativo?");
    yPosition += 7;
    doc.text(10, yPosition, "Respuesta correcta: Empatía y liderazgo");
    yPosition += 7;
    doc.text(10, yPosition, "Tu respuesta: " + (respuestas.fifth || "No respondida"));
    yPosition += 10;

    doc.text(10, yPosition, "Pregunta 6: ¿Cuál de los siguientes son atributos de un agente inteligente?");
    yPosition += 7;
    doc.text(10, yPosition, "Respuesta correcta: Tener la capacidad de obtener aprendizaje");
    yPosition += 7;
    doc.text(10, yPosition, "Tu respuesta: " + (respuestas.sixth || "No respondida"));
    yPosition += 10;

    doc.text(10, yPosition, "Pregunta 7: ¿Cuál es una ventaja que ofrece la IA en el arte según Mingyong Cheng?");
    yPosition += 7;
    doc.text(10, yPosition, "Respuesta correcta: Abre las puertas a la creación y experimentación de novedosos conceptos");
    yPosition += 7;
    doc.text(10, yPosition, "Tu respuesta: " + (respuestas.seventh || "No respondida"));
    yPosition += 10;

    doc.text(10, yPosition, "Pregunta 8: ¿Cuáles son principios éticos fundamentales en el desarrollo de la IA?");
    yPosition += 7;
    doc.text(10, yPosition, "Respuesta correcta: Transparencia");
    yPosition += 7;
    doc.text(10, yPosition, "Tu respuesta: " + (respuestas.eighth || "No respondida"));
    yPosition += 10;

    doc.text(10, yPosition, "Pregunta 9: La inteligencia artificial no plantea ningún problema ético o de privacidad.");
    yPosition += 7;
    doc.text(10, yPosition, "Respuesta correcta: falso");
    yPosition += 7;
    doc.text(10, yPosition, "Tu respuesta: " + (respuestas.nineth || "No respondida"));
    yPosition += 10;
 
    doc.text(10, yPosition, "Pregunta 10: ChatGPT se ha convertido en una herramienta común para estudiantes y docentes por su capacidad de ofrecer información confiable rápidamente.");
    yPosition += 7;
    doc.text(10, yPosition, "Respuesta correcta: verdadero");
    yPosition += 7;
    doc.text(10, yPosition, "Tu respuesta: " + (respuestas.tenth || "No respondida"));
    yPosition += 10;

    doc.setFontSize(12);
    doc.setTextColor(56, 89, 68);
    doc.text(10, yPosition, "Puntuación final: " + puntuacion + "/10"); 
    
    var string = doc.output('datauristring');
	$('iframe').attr('src', string);
}