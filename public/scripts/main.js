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

// Gerencia como serao mostrados os elementos da modal
function handleClick(event, check = true) {
    event.preventDefault();

    // Recupera a açao da url
    const action = check ? "check" : "delete";

    // Recupera o codigo da sala
    const roomId = document.querySelector("#room-id").dataset.id;

    const questionId = event.target.dataset.id;

    // Atribui à propriedade action do form a seguinte URL
    const form = document.querySelector('.modal form');
    form.setAttribute("action", `/question/${roomId}/${questionId}/${action}`);

    const text = check ? "Marcar como lida" : "Excluir";

    // Altera o titulo
    modalTitle.innerHTML = `${text.toLowerCase()} esta pergunta`;

    // Altera a descriçao
    modalDescription.innerHTML = `Tem certeza que deseja ${text.toLowerCase()} esta pergunta?`;

    // Altera a mensagem do botao
    modalButton.innerHTML = `Sim, ${text.toLowerCase()}`;

    // Altera a cor do botao
    check ? modalButton.classList.remove("red") : modalButton.classList.add("red");

    // Abrir modal
    modal.open();
}

