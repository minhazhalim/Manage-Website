const menu = document.getElementById('menu');
const menuButton = document.getElementById('menu-button');
menuButton.addEventListener('click',() => {
     menuButton.classList.toggle('open');
     menu.classList.toggle('flex');
     menu.classList.toggle('hidden');
});