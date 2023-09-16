// Obtén referencias a los elementos del DOM
const campoTexto = document.getElementById("campoTexto");
const botonValidar = document.querySelector(".btnValidar");
const botonSiguiente = document.querySelector(".btnReclamar");

// Agrega un evento click al botón de validación
botonValidar.addEventListener("click", function () {
    // Obtiene el valor ingresado en el campo de texto y conviértelo a un número
    const valorIngresado = parseInt(campoTexto.value);

    // Compara el valor ingresado con el número 45
    if (valorIngresado === 45) {
        // Si el valor es igual a 45, habilita el botón "Reclamar"
        botonSiguiente.disabled = false;
    } else {
        // Si el valor no es igual a 45, deshabilita el botón "Reclamar"
        botonSiguiente.disabled = true;
    }
});


//Reproducir audio:

document.addEventListener('DOMContentLoaded', function() {
    // Obtener el elemento de audio y los botones personalizados
    var miAudio = document.getElementById('miAudio');
    var playButton = document.getElementById('playButton');
    var pauseButton = document.getElementById('pauseButton');

    // Agregar controladores de eventos para los botones personalizados
    playButton.addEventListener('click', function() {
        miAudio.play();
    });

    pauseButton.addEventListener('click', function() {
        miAudio.pause();
    });
});


