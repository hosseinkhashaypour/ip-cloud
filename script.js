const themeButton = document.querySelector('.theme-button');
const menu = document.querySelector('.spanchange')

themeButton.addEventListener('click', () => {
    document.body.classList.toggle('light-body');
    menu.classList.toggle('span-color');
})

function openNav() {
    document.getElementById('myNav').style.width = "75%"
}
function closeNav() {
    document.getElementById('myNav').style.width = "0%"
}