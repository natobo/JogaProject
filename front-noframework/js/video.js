// eslint-disable-next-line no-undef
const lightbox = GLightbox({
  href: 'https://www.youtube.com/watch?v=QAz07vzN5Nk',
  type: 'video',
  source: 'youtube', // vimeo, youtube or local
  width: 900,
});

const body = document.querySelector('body');
const modal = document.querySelector('.modal');
const modalButton = document.querySelector('.modal-button');
const closeButton = document.querySelector('.close-button');
const scrollDown = document.querySelector('.scroll-down');
let isOpened = false;

const openModal = () => {
  modal.classList.add('is-open');
  body.style.overflow = 'hidden';
};

const closeModal = () => {
  modal.classList.remove('is-open');
  body.style.overflow = 'initial';
};

window.addEventListener('scroll', () => {
  if (window.scrollY > window.innerHeight / 3 && !isOpened) {
    isOpened = true;
    scrollDown.style.display = 'none';
    openModal();
  }
});

modalButton.addEventListener('click', openModal);
closeButton.addEventListener('click', closeModal);
