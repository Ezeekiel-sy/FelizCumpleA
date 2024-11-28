// Función para abrir la página de detalle de la carta
function openCardPage(image) { 
    console.log("Abrir carta con imagen:", image);

    // Manejo para abrir nueva ventana en iOS
    const nuevaVentana = window.open();
    if (nuevaVentana) {
        nuevaVentana.location = "detalle.html?image=" + image;
    } else {
        alert("No se pudo abrir una nueva pestaña. Habilita las ventanas emergentes en tu navegador.");
    }
}

// Mensajes de las cartas
const messages = {
    'fotos/carta1.jpeg': 'El día que nos conocimos, \nUn suspiro en el aire, \nMiradas que se cruzaron, \nY un amor que comenzó a nacer.',
    'fotos/carta2.jpeg': 'En cada paso que damos, \nNos acercamos más al sol, \nY aunque la vida nos pone pruebas, \nSiempre encontraremos el amor.',
    'fotos/carta3.jpeg': 'Tiempos de risas y de lágrimas, \nUn viaje lleno de emoción, \nCada momento juntos es eterno, \nUn latido del corazón.',
    'fotos/carta4.jpeg': 'Aunque el tiempo pase lento, \nSiempre estaré aquí a tu lado, \nEl amor que siento por ti es inmenso, \nInquebrantable, nunca será olvidado.'
};

// Estado de las cartas, modificado en detalle.html
const cartasHabilitadas = {
    'fotos/carta1.jpeg': true,  // Carta 1 ya habilitada
    'fotos/carta2.jpeg': true,
    'fotos/carta3.jpeg': false,
    'fotos/carta4.jpeg': false
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
    // Verifica si las notificaciones están habilitadas y muestra una
    if (Notification.permission === 'granted') {
        new Notification(mensaje);
    } else if (Notification.permission !== 'denied') {
        // Si no se ha concedido el permiso, solicita permiso
        Notification.requestPermission().then(permission => {
            if (permission === 'granted') {
                new Notification(mensaje);
            } else {
                // Fallback para iOS en caso de denegación de notificaciones
                alert(mensaje);
            }
        });
    } else {
        // Fallback para navegadores que no soporten notificaciones
        alert(mensaje);
    }
}

// Solicitar permisos de notificación al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    if (Notification.permission !== 'granted') {
        // Solicita permiso solo si no se ha concedido
        Notification.requestPermission().then(permission => {
            console.log(`Permiso de notificación: ${permission}`);
        });
    }

    // Verificar el estado de las cartas al cargar la página
    verificarCartasHabilitadas(cartasHabilitadas);
});

// Aquí es donde habilitarías las cartas manualmente
// Ejemplo: Cuando habilites una carta, asegúrate de actualizar el estado de 'cartasHabilitadas'
// cartasHabilitadas['fotos/carta2.jpeg'] = true;  // Esto habilitará la carta 2
['fotos/carta2.jpeg'] = true;
