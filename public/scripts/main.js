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
    button.addEventListener("click", (event) => handleClick(event, false));
});

function handleClick(event, check = true) {

    const text = check ? "Marcar como lida" : "Excluir";

    // Altera o titulo
    modalTitle.innerHTML = `${text.toLowerCase()} esta pergunta`;

    // Altera a descriçao
    modalDescription.innerHTML = `Tem certeza que deseja ${text.toLowerCase()} esta pergunta?`;

    // Abrir modal
    modal.open();
}

