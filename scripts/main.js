const btn = document.querySelector('#back');
const modal = document.querySelector('.modal');
const modalEnd = document.querySelector('.modal-end');
const modalOverlay = document.querySelector('.modal__overlay')
const closeBtn = document.querySelector('#closeBtn');
const closeEndBtn = document.querySelector('#closeEndBtn');
const continueBtn = document.querySelector('#continue');
const selectBtns = document.querySelectorAll('#select');
const bookmark = document.querySelector('.bookmark');
const bookmarkIcon = document.querySelector('.bookmark__icon');
const bookmarkLabel = document.querySelector('.bookmark__label');
const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');
const navOverlay = document.querySelector('.nav__overlay');

function openModal() {
  modal.classList.add('modal--active');
  modalOverlay.classList.add('modal__overlay--active')
}

function closeModal() {
  modal.classList.remove('modal--active');
  modalOverlay.classList.remove('modal__overlay--active')
  modalEnd.classList.remove('modal-end--active');
}

btn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', closeModal);
selectBtns.forEach(btn => {
  btn.addEventListener('click', openModal);
})

continueBtn.addEventListener('click', () => {
  modalEnd.classList.add('modal-end--active');
  modal.classList.remove('modal--active');
})



closeEndBtn.addEventListener('click', () => {
  modalEnd.classList.remove('modal-end--active');
  modalOverlay.classList.remove('modal__overlay--active')
})

bookmark.addEventListener('click', () => {
  bookmarkIcon.classList.toggle('bookmark__icon--active');
  bookmarkLabel.classList.toggle('bookmark__label--active');
})

menuBtn.addEventListener('click', () => {
  nav.classList.toggle('nav--active');
  navOverlay.classList.toggle('nav__overlay--active');
  menuBtn.classList.toggle('menu-btn--active');
})