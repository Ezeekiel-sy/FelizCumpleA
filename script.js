// Función para abrir la página de detalle de la carta
function openCardPage(image) { 
    console.log("Abrir carta con imagen:", image);

    // Abre una nueva ventana (pestaña) con la URL adecuada, pasando el parámetro 'image'
    window.open("detalle.html?image=" + image, "_blank");
}

// Mensajes de las cartas
const messages = {
    'fotos/carta1.jpeg': 'El día que nos conocimos, \nUn suspiro en el aire, \nMiradas que se cruzaron, \nY un amor que comenzó a nacer.',
    'carta2.jpeg': 'En cada paso que damos, \nNos acercamos más al sol, \nY aunque la vida nos pone pruebas, \nSiempre encontraremos el amor.',
    'carta3.jpeg': 'Tiempos de risas y de lágrimas, \nUn viaje lleno de emoción, \nCada momento juntos es eterno, \nUn latido del corazón.',
    'carta4.jpeg': 'Aunque el tiempo pase lento, \nSiempre estaré aquí a tu lado, \nEl amor que siento por ti es inmenso, \nInquebrantable, nunca será olvidado.'
};

// Función para verificar y notificar cambios en el estado de las cartas
function verificarCartasHabilitadas(cartas) {
    Object.keys(cartas).forEach(carta => {
        if (cartas[carta] === true) {
            mostrarNotificacion(`¡La carta ${carta} ahora está habilitada!`);
        }
    });
}

// Función para mostrar una notificación
function mostrarNotificacion(mensaje) {
    if (Notification.permission === 'granted') {
        new Notification(mensaje);
    } else if (Notification.permission !== 'denied') {
        Notification.requestPermission().then(permission => {
            if (permission === 'granted') {
                new Notification(mensaje);
            } else {
                console.warn("Permiso de notificación denegado.");
            }
        });
    }
}

// Solicitar permisos de notificación al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    if (Notification.permission !== 'granted') {
        Notification.requestPermission().then(permission => {
            console.log(`Permiso de notificación: ${permission}`);
        });
    }

    // Verificar el estado de las cartas al cargar la página
    verificarCartasHabilitadas(cartasHabilitadas);
});

// Estado de las cartas, modificado en detalle.html
const cartasHabilitadas = {
    'fotos/carta1.jpeg': true,  // Carta 1 ya habilitada
    'fotos/carta2.jpeg': false,
    'fotos/carta3.jpeg': false,
    'fotos/carta4.jpeg': false
};
