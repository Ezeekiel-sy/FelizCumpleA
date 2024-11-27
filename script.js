function openCardPage(image) {
    // Verifica si la función está siendo llamada correctamente
    console.log("Abrir carta con imagen:", image);

    // Obtén el mensaje correspondiente a la imagen desde el objeto 'messages'
    const message = messages[image];

    // Abre una nueva ventana (pestaña) con la URL adecuada, pasando el parámetro 'image'
    window.open("detalle.html?image=" + image, "_blank");

    // Asegúrate de que el contenido HTML esté correctamente generado
    document.body.innerHTML = `
        <div class="container">
            <img src="${image}" alt="Imagen de la carta">
            <div class="message">${message}</div>
        </div>
    `;
}
