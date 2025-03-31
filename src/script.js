document.querySelectorAll(".recuadroAnimated").forEach(contenedor => {
    const img = contenedor.querySelector(".imageAnimation");
    if (!img) return; // Si no hay imagen, continuar con el siguiente

    let x = 0, y = 0; // Posición inicial
    let dx = 2, dy = 2; // Velocidades

    function moverImagen() {
        x += dx;
        y += dy;

        // Obtener tamaños
        const imgWidth = img.clientWidth;
        const imgHeight = img.clientHeight;
        const contWidth = contenedor.clientWidth;
        const contHeight = contenedor.clientHeight;

        // Rebotar en los bordes
        if (x + imgWidth >= contWidth || x <= 0) {
            dx *= -1;
        }
        if (y + imgHeight >= contHeight || y <= 0) {
            dy *= -1;
        }

        img.style.transform = `translate(${x}px, ${y}px)`;

        requestAnimationFrame(moverImagen);
    }

    moverImagen(); // Iniciar animación para cada imagen
});
