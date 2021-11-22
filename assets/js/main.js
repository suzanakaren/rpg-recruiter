/*===== MENU =====*/
const navMenu = document.getElementById('nav-menu'),
    toggleMenu = document.getElementById('nav-toggle'),
    closeMenu = document.getElementById('nav-close')

// SHOW
toggleMenu.addEventListener('click', ()=>{
    navMenu.classList.toggle('show')
})

// HIDDEN
closeMenu.addEventListener('click', ()=>{
    navMenu.classList.remove('show')
})


/*===== GSAP (ANIMAÇÃO DO MENU SUBINDO) =====*/
// NAV
gsap.from('.nav__logo, .nav__toggle', {opacity: 0, duration: 1, delay:2, y: 10})
gsap.from('.nav__item', {opacity: 0, duration: 1, delay: 2.1, y: 30, stagger: 0.2,})

// HOME
gsap.from('.home__title', {opacity: 0, duration: 1, delay:1.6, y: 30})
gsap.from('.home__description', {opacity: 0, duration: 1, delay:1.8, y: 30})
gsap.from('.home__button', {opacity: 0, duration: 1, delay:2.1, y: 30})
gsap.from('.home__img', {opacity: 0, duration: 1, delay:1.3, y: 30})


/*===== SLIDES DE PERSONAGENS =====*/
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1} 
  slides[slideIndex-1].style.display = "block";  
  setTimeout(showSlides, 2000); 
}


/*===== VALIDAÇÃO DO FORMULÁRIO DE CONTATO =====*/
function validaForm() {
    var x = document.forms["myForm"]["nome"].value;
    var y = document.forms["myForm"]["assunto"].value;
    var z = document.forms["myForm"]["mensagem"].value;
    if (x == "") {
      alert("Precisa estar preenchido");
      return false;
    } else
    if (y == "") {
      alert("Precisa estar preenchido");
      return false;
    } else
    if (z == "") {
      alert("Precisa estar preenchido");
      return false;
    }
}