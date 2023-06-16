function modal() {
const modal = document.querySelector('.close--modal')

modal.addEventListener('click', function() {
    const closeModal = document.querySelector('.modal__container')
    closeModal.classList.add('modal--hidden')    
})
}

export default modal
