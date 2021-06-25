export default function Modal() {
    function open() {
        // Atribuira a classe active à modal
        document.querySelector('.modal-wrapper').classList.add("active");
    }

    function close() {
        // Removera a classe active da modal
    }

    return {
        open, 
        close
    }
}