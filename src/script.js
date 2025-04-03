const items = document.querySelectorAll('.item');
const backgrounds = document.querySelectorAll('.bg-hoverITEM');
let openModalIsOpen = false;
const allModalVeladaIV = document.querySelector('.openModal');
const veladaIVContainer = document.querySelector('.svgOpen');
const closeveladaIVContainer = document.getElementById('svgCloseVeladaIV');
const modalOverlay = document.querySelector('.overlay');

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

items.forEach((item, index) => {
    item.addEventListener('mouseover', () => {
        if (backgrounds[index]) {
            backgrounds[index].style.opacity = '1';
        }
    });

    item.addEventListener('mouseout', () => {
        if (backgrounds[index]) {
            backgrounds[index].style.opacity = '0';
        }
    });
});

items.forEach((items) => {
    items.addEventListener('click', () => {
    });
});

veladaIVContainer.addEventListener('click', () => {
    if (!openModalIsOpen) {
        allModalVeladaIV.style.display = 'flex';
        allModalVeladaIV.style.opacity = '1';
        modalOverlay.style.opacity = '1';
        modalOverlay.style.display = 'flex';
        openModalIsOpen = true;
    } else {
        allModalVeladaIV.style.display = 'none';
        allModalVeladaIV.style.opacity = '0';
        modalOverlay.style.opacity = '0';
        modalOverlay.style.display = 'none';
        openModalIsOpen = false;
    }
});

closeveladaIVContainer.addEventListener('click', () => {
    allModalVeladaIV.style.display = 'none';
    allModalVeladaIV.style.opacity = '0';
    modalOverlay.style.opacity = '0';
    modalOverlay.style.display = 'none';
    openModalIsOpen = false;
})