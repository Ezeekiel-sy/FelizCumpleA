function openCardPage(image) {
    // Verifica si la función está siendo llamada correctamente
    console.log("Abrir carta con imagen:", image);

    // Abre una nueva ventana (pestaña) con la URL adecuada, pasando el parámetro 'image'
    window.open("detalle.html?image=" + image, "_blank");
}
const messages = {
    'fotos/carta1.jpeg': 'El día que nos conocimos, \nUn suspiro en el aire, \nMiradas que se cruzaron, \nY un amor que comenzó a nacer.',
    'carta2.jpeg': 'En cada paso que damos, \nNos acercamos más al sol, \nY aunque la vida nos pone pruebas, \nSiempre encontraremos el amor.',
    'carta3.jpeg': 'Tiempos de risas y de lágrimas, \nUn viaje lleno de emoción, \nCada momento juntos es eterno, \nUn latido del corazón.',
    'carta4.jpeg': 'Aunque el tiempo pase lento, \nSiempre estaré aquí a tu lado, \nEl amor que siento por ti es inmenso, \nInquebrantable, nunca será olvidado.'
};
document.body.innerHTML = `
    <div class="container">
        <img src="${image}" alt="Imagen de la carta">
        <div class="message">${message}</div>
    </div>
`;
