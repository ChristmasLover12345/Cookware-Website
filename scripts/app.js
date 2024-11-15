

let slide = document.querySelector('.slideRight')


document.addEventListener('DOMContentLoaded', () => {
    let menuButton = document.querySelector('.menuButton');
    let closeButton = document.querySelector('.closeMenu');
    let slideMenu = document.getElementById('slideMenu');

   
    menuButton.addEventListener('click', () => {
        slideMenu.classList.add('Active');
        
    });

    
    closeButton.addEventListener('click', () => {
        slideMenu.classList.remove('Active');
    });
});

