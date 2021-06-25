import Modal from './modal.js';

const modal = Modal();

// Recuperar todos os botoes com a classe check
const checkButtons = document.querySelectorAll('.actions a.check');

checkButtons.forEach(button => {
    // Adcionar o eventListener em cada botao
    button.addEventListener("click", event => {
        modal.open();
    });
});

// Se o "Marcar como lida" for clicado

