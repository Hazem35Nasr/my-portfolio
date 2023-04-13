/*toggle icon navbar   */
let menuIcon = document.getElementById('menu-icon');
let navbar=document.querySelector('.navbar');

menuIcon.onclick = () => {
    navbar.classList.toggle('active');
};


/*scroll section  //color of nav   */
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');
window.onscroll = () => {
    sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
        navlinks.forEach(links => {
            links.classList.remove('active');
            document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
        });
    };
});

/*remove nav on click */
navbar.classList.remove('active');


};


/*scroll reveal */
ScrollReveal({ 
    reset: true ,
    distance: '80px',
    duration: 2000,
    delay: 200

});

ScrollReveal().reveal('.home-content, .heading', { origin: 'left' });
ScrollReveal().reveal('.home-img, .services-content, .portfolio-box, .contact form', { origin: 'right' });
ScrollReveal().reveal('.home-content h1, .about img', { origin: 'right' });
ScrollReveal().reveal(' .about img', { origin: 'top' });


