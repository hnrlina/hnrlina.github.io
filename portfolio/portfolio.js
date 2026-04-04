function openModal(url) {
    alert("Le lien cliqué est : " + url);
    // Plus tard, ici on mettra le code pour ouvrir la vraie fenêtre
}

const hamburgerBtn = document.getElementById('hamburger-btn');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-links a');

// 1. Au clic sur le bouton : on ouvre/ferme
hamburgerBtn.addEventListener('click', () => {
    hamburgerBtn.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// 2. Au clic sur un lien : on ferme tout et on navigue
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburgerBtn.classList.remove('active');
        navMenu.classList.remove('active');
    });
});