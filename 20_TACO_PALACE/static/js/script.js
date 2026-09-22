document.addEventListener('DOMContentLoaded', () => {

    // 1. AUMENTAR CONTADOR DEL CARRITO (+1)
    const botonesMas = document.querySelectorAll('.Mas');
    const contadorCarrito = document.querySelector('.carrito_cero span');
    let cantidad = 0;

    botonesMas.forEach(boton => {
        boton.addEventListener('click', () => {
            cantidad++;
            contadorCarrito.textContent = cantidad;
        });
    });

    // 2. ALERTA DE LOGIN
const inputEmail = document.getElementById('usuario');
    const botonLogin = document.querySelector('.boton_naranja');

    botonLogin.addEventListener('click', () => {
        const correo = inputEmail.value.trim();

        if (correo === '') {
            alert('Por favor, ingresa un correo electrónico.');
        } else {
            alert(`Bienveni@: ${correo}`);
            inputEmail.value = '';
        }
    });

    // 3. CAMBIAR IMAGEN AL PASAR EL CURSOR (HOVER)
    const imagenBanner = document.querySelector('.section_izquerda img');
    const imagenOriginal = imagenBanner.src;



    // Cambia a 'comida-mexicana2.jpg' al pasar el cursor por la imagen del banner
    const imagenSecundaria = 'static/img/Imágenes/comida-mexicana2.jpg';

    imagenBanner.addEventListener('mouseenter', () => {
        imagenBanner.src = imagenSecundaria;
    });

    imagenBanner.addEventListener('mouseleave', () => {
        imagenBanner.src = imagenOriginal;
    });

});