// Menu animation
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

// Menu expand
menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
// Menu collapse
navbar.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.remove('active');
}
// setting up scroll reveal effect
const sr = ScrollReveal ({
    distance: '60px',
    duration: 2500,
    delay: 400,
    reset: false
});
sr.reveal('.text', {delay:200, origin: 'top'});
sr.reveal('.form-container form', {delay:800, origin: 'left'});
sr.reveal('.heading', {delay:200, origin: 'top'});
sr.reveal('.ride-container .box', {delay:100, origin: 'top'});
sr.reveal('.services-container .box', {delay:200, origin: 'top'});
sr.reveal('.about-container .box ', {delay:300, origin: 'top'});
sr.reveal('.reviews-container .box', {delay:200, origin: 'top'});
sr.reveal('.newsletter .box', {delay:400, origin: 'bottom'});