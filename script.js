function openCardPage(image) {
    // Verifica si la carta está habilitada
    const cartasHabilitadas = {
        'fotos/carta1.jpeg': true,
        'fotos/carta2.jpeg': false,
        'fotos/carta3.jpeg': false,
        'fotos/carta4.jpeg': false
    };

    // Verifica si la carta está habilitada
    if (cartasHabilitadas[image] !== undefined) {
        if (cartasHabilitadas[image]) {
            // Si la carta está habilitada, abre la página de detalles
            window.open("detalle.html?image=" + image, "_blank");
        } else {
            // Si la carta está bloqueada, muestra un mensaje
            alert("¡Esta carta está bloqueada! Por favor, espera para desbloquearla.");
        }
    }
}

// Contador para la cuenta regresiva (fecha actual)
function actualizarCuentaRegresiva() {
    const fechaActual = new Date();
    const fechaObjetivo = new Date('2024-12-31T23:59:59'); // Fecha objetivo para la cuenta regresiva

    const diferencia = fechaObjetivo - fechaActual;
    
    if (diferencia <= 0) {
        document.getElementById('cuenta-regresiva').innerHTML = "¡La fecha ha llegado!";
    } else {
        const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
        const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
        const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

        document.getElementById('cuenta-regresiva').innerHTML = `Faltan ${dias} días, ${horas} horas, ${minutos} minutos y ${segundos} segundos`;
    }
}

// Actualiza la cuenta regresiva cada segundo
setInterval(actualizarCuentaRegresiva, 1000);
