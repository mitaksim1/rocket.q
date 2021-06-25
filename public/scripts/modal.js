export default function Modal() {

    const cancelButton = document.querySelector('.button.cancel');
    cancelButton.addEventListener("click", close);

    function open() {
        // Atribuira a classe active à modal
        document.querySelector('.modal-wrapper').classList.add("active");
    }

    function close() {
        // Removera a classe active da modal
        document.querySelector('.modal-wrapper').classList.remove("active");
    }

    return {
        open, 
        close
    }
}