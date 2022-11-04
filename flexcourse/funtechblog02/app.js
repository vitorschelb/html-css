const burguer = document.getElementById('burguer');

function toggleMenu() {
    const nav = document.getElementById('nav');
    nav.classList.toggle('active')
    
}
burguer .addEventListener('click', toggleMenu);