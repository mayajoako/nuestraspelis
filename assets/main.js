
const menu = document.querySelector('.btn')
const headerlinks = document.querySelector('.headerlinks')

menu.addEventListener('click', () => {
    headerlinks.classList.toggle('activado')
});

