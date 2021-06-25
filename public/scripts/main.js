import Modal from './modal.js';

const modal = Modal();

const modalTitle = document.querySelector('.modal h2');

const modalDescription = document.querySelector('.modal p');

const modalButton = document.querySelector('.modal button');

// Recuperar todos os botoes com a classe check
const checkButtons = document.querySelectorAll('.actions a.check');

checkButtons.forEach(button => {
    // Adcionar o eventListener em cada botao
    button.addEventListener("click", handleClick);
});

// Abertura da modal ao clique no botao "Excluir"
const deleteButton = document.querySelectorAll(".actions a.delete");
deleteButton.forEach(button => {
    button.addEventListener("click", handleClick);
});

function handleClick(event) {
    // Abrir modal
    modal.open();
}

