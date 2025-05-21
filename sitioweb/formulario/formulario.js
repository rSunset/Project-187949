    // MENU
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

    menu.addEventListener("transitionend", function() {
        this.removeAttribute("style");
    });

    // DROPDOWN
    menu.querySelectorAll(".dropdown > i").forEach((arrow) => {
        arrow.addEventListener("click", function(){
            this.closest(".dropdown").classList.toggle("active");
        });
    });

    // Cargar Google Charts
    google.charts.load('current', {'packages':['table']});

    function drawTable(respuestas) {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Pregunta');
        data.addColumn('string', 'Tu Respuesta');
        data.addColumn('string', 'Respuesta Correcta');
        
        // Definir las respuestas correctas
        const respuestasCorrectas = {
            first: "inteligencia artificial",
            second: "Desplazamiento laboral",
            third: "John McCarthy",
            fourth: "Resolver problemas",
            fifth: "Empatía y liderazgo",
            sixth: "Tener la capacidad de obtener aprendizaje",
            seventh: "Abre las puertas a la creación y experimentación de novedosos conceptos",
            eighth: "Transparencia",
            nineth: "falso",
            tenth: "verdadero"
        };
        
        // Preguntas
        const preguntas = [
            "1. ¿Qué permite a las computadoras simular la inteligencia humana?",
            "2. ¿Cuál de las siguientes es una desventaja de la inteligencia artificial?",
            "3. ¿Quién acuñó formalmente el término 'inteligencia artificial'?",
            "4. ¿Cuál es una de las capacidades que debe tener un agente inteligente?",
            "5. ¿Qué elemento no puede ser sustituido por la inteligencia artificial en el ámbito educativo?",
            "6. ¿Cuál de los siguientes son atributos de un agente inteligente?",
            "7. ¿Cuál es una ventaja que ofrece la IA en el arte según Mingyong Cheng?",
            "8. ¿Cuáles son principios éticos fundamentales en el desarrollo de la IA?",
            "9. La inteligencia artificial no plantea ningún problema ético o de privacidad.",
            "10. ChatGPT se ha convertido en una herramienta común para estudiantes y docentes por su capacidad de ofrecer información confiable rápidamente."
        ];
        
        // Añadir filas a la tabla
        for (let i = 0; i < preguntas.length; i++) {
            const key = Object.keys(respuestasCorrectas)[i];
            data.addRow([
                preguntas[i],
                respuestas[key] || "No respondida",
                respuestasCorrectas[key]
            ]);
        }

        var table = new google.visualization.Table(document.getElementById('tabla2'));
        
        var options = {
            width: '100%',
            height: '100%',
            page: 'enable',
            pageSize: 10,
            showRowNumber: true
        };

        table.draw(data, options);
    }

    document.addEventListener('DOMContentLoaded', function() {
        const form = document.getElementById('quizForm');
        
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Recoger respuestas
            const radioInputs = document.querySelectorAll('input[type="radio"]:checked');
            radioInputs.forEach(input => {
                respuestas[input.name] = input.value;
            });
            
            // Calcular puntuación
            let puntuacion = 0;
            const respuestasCorrectas = {
            first: "inteligencia artificial",
            second: "Desplazamiento laboral",
            third: "John McCarthy",
            fourth: "Resolver problemas",
            fifth: "Empatía y liderazgo",
            sixth: "Tener la capacidad de obtener aprendizaje",
            seventh: "Abre las puertas a la creación y experimentación de novedosos conceptos",
            eighth: "Transparencia",
            nineth: "falso",
            tenth: "verdadero"
            };
            
            for (const key in respuestasCorrectas) {
                if (respuestas[key] === respuestasCorrectas[key]) {
                    puntuacion+=1;
                }
            }
            
            // Generar PDF y tabla
            generarPDF(respuestas, puntuacion, respuestasCorrectas);
            google.charts.setOnLoadCallback(function() { drawTable(respuestas); });
        });
    });

    function generarPDF(respuestas, puntuacion, respuestasCorrectas) {
        const doc = new jsPDF();
        
        // Encabezado
        doc.setFontSize(18);
        doc.setTextColor(56, 89, 68);
        doc.text("Resultados del Cuestionario de Inteligencia Artificial", 105, 20, {align: 'center'});
        
        doc.setFontSize(12);
        doc.setTextColor(0, 0, 0);
        
        let yPosition = 30;
        
        // Preguntas y respuestas
        const preguntas = [
            "1. ¿Qué permite a las computadoras simular la inteligencia humana?",
            "2. ¿Cuál de las siguientes es una desventaja de la inteligencia artificial?",
            "3. ¿Quién acuñó formalmente el término 'inteligencia artificial'?",
            "4. ¿Cuál es una de las capacidades que debe tener un agente inteligente?",
            "5. ¿Qué elemento no puede ser sustituido por la inteligencia artificial en el ámbito educativo?",
            "6. ¿Cuál de los siguientes son atributos de un agente inteligente?",
            "7. ¿Cuál es una ventaja que ofrece la IA en el arte según Mingyong Cheng?",
            "8. ¿Cuáles son principios éticos fundamentales en el desarrollo de la IA?",
            "9. La inteligencia artificial no plantea ningún problema ético o de privacidad.",
            "10. ChatGPT se ha convertido en una herramienta común para estudiantes y docentes por su capacidad de ofrecer información confiable rápidamente."
        ];
        
        const keys = Object.keys(respuestasCorrectas);
        
        for (let i = 0; i < preguntas.length; i++) {
            const key = keys[i];
            
            // Si estamos cerca del final de la página, añadir nueva página
            if (yPosition > 250) {
                doc.addPage();
                yPosition = 20;
            }
            
            // Pregunta
            doc.setFontSize(12);
            doc.setTextColor(0, 0, 0);
            doc.text(preguntas[i], 20, yPosition);
            yPosition += 7;
            
            // Tu respuesta
            doc.setFontSize(10);
            doc.setTextColor(100, 100, 100);
            doc.text("Tu respuesta: " + (respuestas[key] || "No respondida"), 25, yPosition);
            yPosition += 7;
            
            // Respuesta correcta
            doc.setTextColor(0, 100, 0);
            doc.text("Respuesta correcta: " + respuestasCorrectas[key], 25, yPosition);
            yPosition += 10;
            
            // Línea separadora
            doc.setDrawColor(200, 200, 200);
            doc.line(20, yPosition, 190, yPosition);
            yPosition += 5;
        }
        
        // Puntuación final
        doc.setFontSize(14);
        doc.setTextColor(56, 89, 68);
        doc.text("Puntuación final: " + puntuacion + "/10", 105, yPosition + 10, {align: 'center'});
        
        // Guardar PDF
        doc.save('resultados_IA.pdf');
    }