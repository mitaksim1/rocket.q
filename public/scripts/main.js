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

// Abertura da modal ao clique no botao "Excluir"
const deleteButton = document.querySelectorAll(".actions a.delete");
deleteButton.forEach(button => {
    button.addEventListener("click", event => {
        modal.open();
    })
})

// Se o "Marcar como lida" for clicado

