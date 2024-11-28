function openCardPage(image) {
    // Verifica si la función está siendo llamada correctamente
    console.log("Abrir carta con imagen:", image);

    // Cargar estado de las cartas habilitadas desde localStorage
    const cartasHabilitadas = JSON.parse(localStorage.getItem('cartasHabilitadas')) || {
        'fotos/carta1.jpeg': true,
        'fotos/carta2.jpeg': false,
        'fotos/carta3.jpeg': false,
        'fotos/carta4.jpeg': false
    };

    // Verificar si la carta está habilitada
    if (cartasHabilitadas[image]) {
        // Si la carta está habilitada, abrir la página de detalles
        window.open("detalle.html?image=" + image, "_blank");
    } else {
        // Si no está habilitada, mostrar un mensaje de alerta
        alert("Esta carta está bloqueada. ¡Todavía no criatura!");
    }
}

// Mensajes asociados a cada carta
const messages = {
    'fotos/carta1.jpeg': 'La primera vez que te vi, sentí el suelo desmoronarse bajo mis pies, cuando me di cuenta Era más de vos que de mí mismo. Esa noche me perdí en vos. En tus ojos, tu risa, en tus labios. En una sola noche pintaste mi mundo de colores, colores que no sabía que existían, pero que ahora me habitan. Es ridículo, pero esa noche fue suficiente. Me enamoré de cada gesto que hacía temblar el tiempo, de cada mirada que encendía los silencios, y me perdí aún más con cada beso que dibujabas en mí. Desde entonces, no he dejado de caminar por el universo que sos.',
    'fotos/carta2.jpeg': 'Estos meses contigo han sido inimaginables. Jamás pensé que tendría a alguien como vos: fuerte, valiente, y seguir siendo bueno, dulce, tan único. Sos esa parte que siempre busqué, lo que mi alma anhelaba sin saberlo. Cada vez que estoy contigo, el mundo podría arder en llamas y no me importaría, porque con una mirada, una caricia o un beso tuyo, todo mi infierno se apaga. En ese instante, paso del caos al cielo, contigo... de la mano..',
    'fotos/carta3.jpeg': 'Te lo prometo. No te amaré solo por lo que ves, sino por lo que somos, por lo que crecemos juntos, por cada palabra compartida, por cada beso robado a la eternidad. Mi amor por ti no morirá, será un amor que no se mide en belleza, sino en la profundidad de lo que hemos construido, en lo que hemos sido siempre, y en lo que seguiremos siendo..',
    'fotos/carta4.jpeg': 'Aunque el tiempo pase lento, siempre estaré aquí a tu lado, el amor que siento por ti es inmenso, inquebrantable, nunca será olvidado.'
};

// Colores de los corazones para cada carta
const heartIcons = {
    'fotos/carta1.jpeg': 'https://upload.wikimedia.org/wikipedia/commons/4/4f/Heart_icon_red.svg', // Rojo
    'fotos/carta2.jpeg': 'https://upload.wikimedia.org/wikipedia/commons/c/cc/Heart_icon_blue.svg', // Azul
    'fotos/carta3.jpeg': 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Heart_icon_green.svg', // Verde
    'fotos/carta4.jpeg': 'https://upload.wikimedia.org/wikipedia/commons/4/4f/Heart_icon_red.svg' // Rojo
};

// Función para habilitar automáticamente las cartas según la fecha
function verificarHabilitacion() {
    const ahora = new Date(2024, 10, 28, 8, 15); // Fecha actual proporcionada: 28 de noviembre de 2024 a las 8:15 AM

    // Cargar el estado actual de las cartas desde localStorage
    const cartasHabilitadas = JSON.parse(localStorage.getItem('cartasHabilitadas')) || {
        'fotos/carta1.jpeg': true,
        'fotos/carta2.jpeg': false,
        'fotos/carta3.jpeg': false,
        'fotos/carta4.jpeg': false
    };

    // Actualizar el estado según las fechas configuradas
    if (ahora >= new Date(2024, 10, 30, 0, 0)) {  // 30 de noviembre de 2024 a las 12:00 AM
        cartasHabilitadas['fotos/carta2.jpeg'] = true;
    }
    if (ahora >= new Date(2024, 11, 3, 0, 0)) {  // 3 de diciembre de 2024 a las 12:00 AM
        cartasHabilitadas['fotos/carta3.jpeg'] = true;
    }
    if (ahora >= new Date(2024, 11, 6, 0, 0)) {  // 6 de diciembre de 2024 a las 12:00 AM
        cartasHabilitadas['fotos/carta4.jpeg'] = true;
    }

    // Guardar el estado actualizado en localStorage
    localStorage.setItem('cartasHabilitadas', JSON.stringify(cartasHabilitadas));

    // Notificación si una carta ha sido habilitada
    if (cartasHabilitadas['fotos/carta2.jpeg']) {
        new Notification("Ahora sí, criatura", {
            body: messages['fotos/carta2.jpeg'],
            icon: heartIcons['fotos/carta2.jpeg'] // Icono azul para carta2
        });
    }
    if (cartasHabilitadas['fotos/carta3.jpeg']) {
        new Notification("Ahora sí, criatura", {
            body: messages['fotos/carta3.jpeg'],
            icon: heartIcons['fotos/carta3.jpeg'] // Icono verde para carta3
        });
    }
    if (cartasHabilitadas['fotos/carta4.jpeg']) {
        new Notification("Ahora sí, criatura", {
            body: messages['fotos/carta4.jpeg'],
            icon: heartIcons['fotos/carta4.jpeg'] // Icono Rojo para carta4
        });
    }
}

// Llamar a la función de habilitación al cargar la página
verificarHabilitacion();
