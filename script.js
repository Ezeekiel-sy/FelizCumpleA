// Función para detectar si el dispositivo es iOS
function isIos() {
    return /iPhone|iPad|iPod/i.test(navigator.userAgent);
}

// Función para mostrar la cuenta regresiva solo en iOS
function mostrarCuentaRegresiva() {
    const cuentaRegresiva = document.getElementById('cuenta-regresiva');
    if (isIos()) {
        const fechaObjetivo = new Date('2024-11-28T11:13:00');
        const interval = setInterval(function () {
            const ahora = new Date('2024-11-28T11:13:00');
            const distancia = fechaObjetivo - ahora;

            if (distancia <= 0) {
                clearInterval(interval);
                cuentaRegresiva.innerHTML = "¡Ahora si criatura!";
            } else {
                const horas = Math.floor(distancia / (1000 * 60 * 60));
                const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
                const segundos = Math.floor((distancia % (1000 * 60)) / 1000);
                cuentaRegresiva.innerHTML = `Tiempo restante: ${horas}h ${minutos}m ${segundos}s`;
            }
        }, 1000);
    } else {
        cuentaRegresiva.innerHTML = "La cuenta regresiva solo está disponible en dispositivos iOS.";
    }
}

// Función para manejar el clic en una carta y mostrar el mensaje correspondiente
function openCardPage(image) {
    const mensajeNotificacion = document.getElementById('mensaje-notificacion');
    const carta = document.querySelector(`[data-id="${image}"]`);

    // Si la carta es desbloqueada
    if (carta) {
        mensajeNotificacion.innerHTML = `¡La carta ha sido desbloqueada!`;
        window.open(`detalle.html?image=${image}`, "_blank");
    } else {
        mensajeNotificacion.innerHTML = `Esta carta está bloqueada.`;
    }
}

// Llamar a la función de cuenta regresiva cuando se carga la página
document.addEventListener('DOMContentLoaded', mostrarCuentaRegresiva);
