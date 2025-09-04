const menuBtn = document.getElementById('menu-btn');
const menu = document.querySelector('#menu');

function showMenu() {
    menu.classList.toggle('hidden');
    menu.innerHTML = `
    <li><button id="close-menu-btn"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg></button></li>
    <li><a href="index.html">Home</a></li>
    <li><a href="">Projects</a></li>
    <li><a href="">Products</a></li>
    <li><a href="">Find me</a></li>
    `;
    
    document.getElementById('close-menu-btn').addEventListener('click', () => {
        closeMenu();
    });
}

function closeMenu() {
    menu.classList.toggle('hidden');
    menu.innerHTML = '';
}

menuBtn.addEventListener('click', () => {
    showMenu();
});

