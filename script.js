// On récupère les éléments du curseur
const cursor = document.getElementById('cursor');
const trail = document.getElementById('cursor-trail');

// Quand la souris bouge, on déplace les cercles
document.addEventListener('mousemove', (e) => {
    // Le petit point suit la souris instantanément
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';

    // Le grand cercle suit avec un petit décalage (géré par le CSS transition)
    trail.style.left = e.clientX + 'px';
    trail.style.top = e.clientY + 'px';
});

// Fonction pour quitter la page quand on clique sur le bouton
function enterPortfolio() {
    const overlay = document.getElementById('exit-overlay');
    if(overlay) overlay.classList.add('active');
    
    setTimeout(() => {
        // "portfolio/" désigne le dossier, "portfolio.html" le fichier dedans
        window.location.href = 'portfolio/portfolio.html'; 
    }, 600);
}