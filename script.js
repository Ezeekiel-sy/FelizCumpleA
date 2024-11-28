// Función para abrir la página de detalle de la carta
function openCardPage(image) {
    console.log("Abrir carta con imagen:", image);
    window.open("detalle.html?image=" + image, "_blank");
}

// Mensajes de las cartas
const messages = {
    'fotos/carta1.jpeg': 'El día que nos conocimos, \nUn suspiro en el aire, \nMiradas que se cruzaron, \nY un amor que comenzó a nacer.',
    'fotos/carta2.jpeg': 'En cada paso que damos, \nNos acercamos más al sol, \nY aunque la vida nos pone pruebas, \nSiempre encontraremos el amor.',
    'fotos/carta3.jpeg': 'Tiempos de risas y de lágrimas, \nUn viaje lleno de emoción, \nCada momento juntos es eterno, \nUn latido del corazón.',
    'fotos/carta4.jpeg': 'Aunque el tiempo pase lento, \nSiempre estaré aquí a tu lado, \nEl amor que siento por ti es inmenso, \nInquebrantable, nunca será olvidado.'
};

// Función para habilitar una carta y mostrar la notificación
function habilitarCarta(cartaId) {
    // Lógica para habilitar manualmente una carta
    const cartaElement = document.getElementById(cartaId);
    if (cartaElement) {
        cartaElement.classList.remove('deshabilitada'); // Quitar clase 'deshabilitada'
        mostrarNotificacion(`¡La carta ${cartaId} ha sido habilitada!`);
    }
}

// Función para mostrar una notificación
function mostrarNotificacion(mensaje) {
    if (Notification.permission === 'granted') {
        new Notification(mensaje);
    } else if (Notification.permission !== 'denied') {
        Notification.requestPermission().then(permission => {
            if (permission === 'granted') {
                new Notification(mensaje);
            }
        });
    }
}

// Solicitar permisos de notificación al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    if (Notification.permission !== 'granted') {
        Notification.requestPermission();
    }
});

// Ejemplo: Habilitar una carta manualmente
// Llama a esta función desde la consola o tu lógica manual para habilitar cartas
// habilitarCarta('carta2'); // Cambia 'carta2' por el ID de la carta que quieras habilitar
