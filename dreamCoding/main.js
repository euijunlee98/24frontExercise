const toogleBtn = document.querySelector('.toogleBtn');
const menu = document.querySelector('.menu');
const icons = document.querySelector('.sns');

toogleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
    icons.classList.toggle('active');
})
