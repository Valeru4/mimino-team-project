(() => {
    const refs = {
      openModalBtn: document.querySelector(".data-modal-open-price"),
      openModalBtn1: document.querySelector(".data-modal-open-price-1"),
      openModalBtn2: document.querySelector(".data-modal-open-price-2"),
      openModalBtn3: document.querySelector(".data-modal-open-price-3"),
      
      closeModalBtn: document.querySelector("[data-modal-close-price]"),
      modal: document.querySelector("[data-modal-price]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.openModalBtn1.addEventListener("click", toggleModal);
    refs.openModalBtn2.addEventListener("click", toggleModal);
    refs.openModalBtn3.addEventListener("click", toggleModal);
  
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
    }
  })();