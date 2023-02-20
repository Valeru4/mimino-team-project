(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open-tablet]"),
    closeModalBtn: document.querySelector("[data-modal-close-tablet]"),
    modal: document.querySelector("[data-modal-table]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();