const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnlogin-popup');
// const iconClose = document.querySelector('.icon-close');

registerLink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', ()=> {
    wrapper.classList.add('active-popup');
});


// Function to toggle the menu
function toggleMenu() {
    const menu = document.querySelector('.menu-container');
    menu.classList.toggle('active');
}

// Close the menu when clicking outside of it
document.addEventListener('click', function (event) {
    const menuContainer = document.getElementById('menu-container');
    const burgerIcon = document.querySelector('.burger-icon');

    // Check if the click is outside the menu and burger icon
    if (
        menuContainer.style.display === 'block' && // Menu is open
        event.target !== menuContainer && // Click is not on the menu container
        event.target !== burgerIcon && // Click is not on the burger icon
        !menuContainer.contains(event.target) // Click is not inside the menu container
    ) {
        menuContainer.style.display = 'none'; // Hide the menu
    }
});

// iconClose.addEventListener('click', ()=> {
//     wrapper.classList.remove('active-popup');
// });