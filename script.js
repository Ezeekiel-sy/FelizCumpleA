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
    'fotos/carta1.jpeg': 'La primera vez que te vi, sentí el suelo desmoronarse bajo mis pies, cuando me di cuenta Era más de vos que de mí mismo. Esa noche me perdí en vos. En tus ojos, tu risa, en en tus labios. En una sola noche pintaste mi mundo de colores, colores que no sabía que existían, pero que ahora me habitan. Es ridículo, pero esa noche fue suficiente. Me enamoré de cada gesto que hacía temblar el tiempo, de cada mirada que encendía los silencios, y me perdí aún más con cada beso que dibujabas en mí. Desde entonces, no he dejado de caminar por el universo que sos.',
        'fotos/carta2.jpeg': 'Estos meses contigo han sido inimaginables. Jamás pensé que tendría a alguien como vos: fuerte, valiente, y seguir siendo bueno, dulce, tan único. Sos esa parte que siempre busqué, lo que mi alma anhelaba sin saberlo. Cada vez que estoy contigo, el mundo podría arder en llamas y no me importaría, porque con una mirada, una caricia o un beso tuyo, todo mi infierno se apaga. En ese instante, paso del caos al cielo, contigo... de la mano..',
        'fotos/carta3.jpeg': 'Te lo prometo. No te amaré solo por lo que ves, sino por lo que somos, por lo que crecemos juntos, por cada palabra compartida, por cada beso robado a la eternidad. Mi amor por ti no morirá, será un amor que no se mide en belleza, sino en la profundidad de lo que hemos construido,en lo que hemos sido siempre, y en lo que seguiremos siendo..',
        'fotos/carta4.jpeg': 'Aunque el tiempo pase lento, Siempre estaré aquí a tu lado, El amor que siento por ti es inmenso, Inquebrantable, nunca será olvidado.'
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
