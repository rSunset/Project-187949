document.addEventListener("DOMContentLoaded", function() {
    const calcularBtn = document.getElementById('calcular');
    const resultadoElement = document.getElementById('resultado');

    calcularBtn.addEventListener('click', function() {
        const horas = parseFloat(document.getElementById('horas').value);
        const vehiculo = parseFloat(document.getElementById('elegir').value);
        
        if (!isNaN(horas) && !isNaN(vehiculo)) {
            const total = horas * vehiculo;
            resultadoElement.textContent = total;
        } else {
            resultadoElement.textContent = "Por favor ingrese valores válidos";
        }
    });
});