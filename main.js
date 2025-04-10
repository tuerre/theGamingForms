const sendDatesFormBtns = document.querySelectorAll('.submit-btn');
const sureNotification = document.querySelector('.notification');

document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const modal = document.querySelector('.modal');
    const closeModal = document.querySelector('.close-modal');
    const purchaseForm = document.querySelector('#purchaseForm');
    const formContainer = document.querySelector('#purchaseForm');

    let scrollAmount = 0;
    const slideWidth = slides[0].offsetWidth + 20; // Including gap
    const maxScroll = (slides.length - 3) * slideWidth;

    // Slider Navigation
    nextBtn.addEventListener('click', () => {
        scrollAmount = Math.min(scrollAmount + slideWidth, maxScroll);
        slider.scrollLeft = scrollAmount;
    });

    prevBtn.addEventListener('click', () => {
        scrollAmount = Math.max(scrollAmount - slideWidth, 0);
        slider.scrollLeft = scrollAmount;
    });

    // Función para generar campos dinámicos en el formulario
    const generateFormFields = (id) => {
        let fields = '';
        switch (id) {
            case '1': // Minecraft Premium
                fields = `
                    <div class="form-group">
                        <label for="minecraft-username">Usuario de Minecraft</label>
                        <input type="text" id="minecraft-username" required>
                    </div>
                    <div class="form-group">
                        <label for="minecraft-email">Email</label>
                        <input type="email" id="minecraft-email" required>
                    </div>
                    <div class="form-group">
                        <label for="minecraft-tckets">Tickets</label>
                        <input type="number" id="tickets" required placeholder="Cantidad de tickets que tienes para el sorteo">
                    </div>`;
                break;
            case '2': // Playstation 5
                fields = `
                    <div class="form-group">
                        <label for="playstation-id">Playstation Network ID</label>
                        <input type="text" id="playstation-id" required>
                    </div>
                    <div class="form-group">
                        <label for="playstation-address">Dirección de envío</label>
                        <input type="text" id="playstation-address" required>
                    </div>
                    <div class="form-group">
                        <label for="playstation-color">Color de la Play</label>
                        <input type="color" id="playstation-color">
                    </div>`;
                break;
            case '3': // Postulación Programador
                fields = `
                    <div class="form-group">
                        <label for="programmer-name">Full Name</label>
                        <input type="text" id="programmer-name" required>
                    </div>
                    <div class="form-group">
                        <label for="programmer-portfolio">Portfolio URL</label>
                        <input type="url" id="programmer-portfolio" required>
                    </div>
                    <div class="form-group">
                        <label for="programmer-photo">Foto profesional</label>
                        <input type="file" id="programmer-photo" required>
                    </div>`;
                break;
            case '4': // Camisetas Deluxe
                fields = `
                    <div class="form-group">
                        <label for="shirt-size">Shirt Size</label>
                        <select id="shirt-size" required>
                            <option value="S">Small</option>
                            <option value="M">Medium</option>
                            <option value="L">Large</option>
                            <option value="XL">Extra Large</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="shirt-color">Preferred Color</label>
                        <input type="text" id="shirt-color" required>
                    </div>
                    <div class="form-group">
                        <label for="shirt-adress">Dirección de envío</label>
                        <input type="text" id="shirt-adress" required>
                    </div>
                    <div class="form-group">
                        <label for="shirt-postal-adress">Código Postal</label>
                        <input type="text" id="shirt-adress" required placeholder="Ex: '12345'">
                    </div>`;
                break;
            case '5': // Ruleta Rusa
                fields = `
                    <div class="form-group">
                        <label for="roulette-participant">Nombre del participante</label>
                        <input type="text" id="roulette-participant" required>
                    </div>
                    <div class="form-group">
                        <label for="roulette-age">Edad</label>
                        <input type="number" id="roulette-age" required>
                    </div>
                    <div class="form-group">
                        <label for="roulette-document">Documento de identidad: (<bs>DNI</b> o <b>Pasaporte</b>)</label>
                        <input type="file" id="roulette-document" required placeholder="Cédula, DNI, pasaporte o documento de identidad avalado">
                    </div>
                    <div class="form-group">
                        <label for="roulette-date">Fecha de nacimiento</label>
                        <input type="date" id="roulette-date" required>
                    </div>
                    <div class="form-group">
                        <label for="roulette-hour">Hora de entrada</label>
                        <input type="time" id="roulette-hour" required>
                    </div>
                    <div class="form-group">
                        <label for="roulette-password">Contraseña</label>
                        <input type="password" id="roulette-password" required placeholder="Contraseña para participar en la ruleta rusa">
                    </div>
                    <div class="form-group">
                        <label for="roulette-checkbox">¿Confirmas que eres mayor de edad?</label>
                        <input type="checkbox" id="roulette-checkbox" required checked>
                    </div>`;
                break;
            case '6': // Imagen en pantalla
                fields = `
                    <div class="form-group">
                        <label for="kick-username">Usuario de Kick</label>
                        <input type="text" id="roulette-participant" required>
                    </div>
                    </div>
                    <div class="form-group">
                        <label for="kick-image">Imagen a mostrar</label>
                        <input type="file" id="kick-image" required">
                    </div>
                    <div class="form-group">
                        <label for="kick-date">Día a mostrar</label>
                        <input type="date" id="kick-date" required>
                    </div>
                    <div class="form-group">
                        <label for="kick-hour">Hora a mostrar</label>
                        <input type="time" id="kick-hour" required>
                    </div>
                    <div class="form-group">
                        <label for="kick-kick">Kick a donar</label>
                        <input type="number" id="kick-kicks" placeholder="Kicks a donar - Opcional" required>
                    </div>`;
                break;

            case '7': // Mariachis
                fields = `
                    `;
                break;
            default:
                fields = `
                    <div class="form-group">
                        <label for="default-name">Full Name</label>
                        <input type="text" id="default-name" required>
                    </div>`;
        }

        // Agregar el botón de enviar al final de los campos
        fields += `
            <button class="submit-btn" type="submit">
                <svg class="sendForm" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M4.4 19.425q-.5.2-.95-.088T3 18.5V14l8-2l-8-2V5.5q0-.55.45-.837t.95-.088l15.4 6.5q.625.275.625.925t-.625.925z"></path>
                </svg>
                <span>Enviar Datos</span>
            </button>`;
        return fields;
    };

    // Mostrar el modal con campos dinámicos
    slides.forEach(slide => {
        slide.addEventListener('click', () => {
            const slideId = slide.getAttribute('data-id');
            formContainer.innerHTML = generateFormFields(slideId);
            modal.style.display = 'flex';
        });
    });

    // Cerrar el modal
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    purchaseForm.addEventListener('submit', (e) => {
        e.preventDefault();
        modal.style.display = 'none';
        purchaseForm.reset();
    });
});

sendDatesFormBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();

        // Validar los campos del formulario
        const nameInput = document.querySelector('#name');
        const emailInput = document.querySelector('#email');
        const usernameInput = document.querySelector('#username');

        if (!nameInput.value.trim()) {
            alert('Por favor, ingrese su nombre completo.');
            nameInput.focus();
            return;
        }

        if (!emailInput.value.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value)) {
            alert('Por favor, ingrese un correo electrónico válido.');
            emailInput.focus();
            return;
        }

        if (!usernameInput.value.trim()) {
            alert('Por favor, ingrese su nombre de usuario de gaming.');
            usernameInput.focus();
            return;
        }

        sureNotification.style.opacity = '1';
        sureNotification.classList.add('notificationAnimation');

        const modal = document.querySelector('.modal');
        modal.style.display = 'none';

        setTimeout(() => {
            sureNotification.style.opacity = '0';
            sureNotification.classList.remove('notificationAnimation');
        }, 3000);
    });
});


function openModal() {
    document.getElementById("modalKeyScappe").style.display = "block";
}

// Función para cerrar el modal
function closeModal() {
    document.getElementById("modalKeyScappe").style.display = "none";
}


// ABRIR REPOSITORIO CON CTRL + SHIFT + I

        // Evento para detectar las combinaciones de teclas
        document.addEventListener("keydown", function(event) {
            // Comprobamos si se presionaron Ctrl, Shift e I al mismo tiempo
            if (event.ctrlKey && event.shiftKey && event.key === "I") {
                event.preventDefault();  // Prevenir la acción predeterminada (abrir DevTools)
                
                // RL de del repo de GitHub
                const githubRepoURL = "https://github.com/tuerre/form-bento";
                
                // abrir una nueva pestaña con la URL del repositorio de GitHub
                window.open(githubRepoURL, "_blank");
            }
        });