const btn = document.querySelector('#back');
const modal = document.querySelector('.modal');
const modalOverlay = document.querySelector('.modal-overlay')
const closeBtn = document.querySelector('#closeBtn');

function openModal() {
  modal.classList.add('modal--active');
  modalOverlay.classList.add('modal-overlay--active')
}

function closeModal() {
  modal.classList.remove('modal--active');
  modalOverlay.classList.remove('modal-overlay--active')
}

btn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', closeModal);