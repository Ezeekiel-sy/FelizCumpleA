function openCardPage(image) {
    // Verifica si la función está siendo llamada correctamente
    console.log("Abrir carta con imagen:", image);

    // Abre una nueva ventana (pestaña) con la URL adecuada, pasando el parámetro 'image'
    window.open("detalle.html?image=" + image, "_blank");
}
const messages = {
        'fotos/carta1.jpeg': 'La primera vez que te vi, sentí el suelo desmoronarse bajo mis pies, cuando me di cuenta Era más de vos que de mí mismo. Esa noche me perdí en vos. En tus ojos, tu risa, en en tus labios. En una sola noche pintaste mi mundo de colores, colores que no sabía que existían, pero que ahora me habitan. Es ridículo, pero esa noche fue suficiente. Me enamoré de cada gesto que hacía temblar el tiempo, de cada mirada que encendía los silencios, y me perdí aún más con cada beso que dibujabas en mí. Desde entonces, no he dejado de caminar por el universo que sos.',
        'fotos/carta2.jpeg': 'Estos meses contigo han sido inimaginables. Jamás pensé que tendría a alguien como vos: fuerte, valiente, y seguir siendo bueno, dulce, tan único. Sos esa parte que siempre busqué, lo que mi alma anhelaba sin saberlo. Cada vez que estoy contigo, el mundo podría arder en llamas y no me importaría, porque con una mirada, una caricia o un beso tuyo, todo mi infierno se apaga. En ese instante, paso del caos al cielo, contigo... de la mano..',
        'fotos/carta3.jpeg': 'Te lo prometo. No te amaré solo por lo que ves, sino por lo que somos, por lo que crecemos juntos, por cada palabra compartida, por cada beso robado a la eternidad. Mi amor por ti no morirá, será un amor que no se mide en belleza, sino en la profundidad de lo que hemos construido,en lo que hemos sido siempre, y en lo que seguiremos siendo..',
        'fotos/carta4.jpeg': 'Con todo en contra, te amaría siempre. Sos indispensable, casi como respirar. No puedo imaginar mis sueños ni mis metas sin vos. Quiero estar a tu lado en cada logro y cada decisión que tomes. Voy a estar contigo siempre, en los buenos momentos, haciendo unboxing de hamburguesas super high, y en los malos, cuando el mundo pese demasiado. No importa qué pase, siempre voy a estar a tu lado..',
        'fotos/carta5.jpg': 'Feliz cumple mi amor espero te guste el ultimo regalo'
         };
document.body.innerHTML = `
    <div class="container">
        <img src="${image}" alt="Imagen de la carta">
        <div class="message">${message}</div>
    </div>
`;
