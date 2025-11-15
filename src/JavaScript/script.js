document.addEventListener("DOMContentLoaded", function() {
 
  function animateOnScroll() {
    document.querySelectorAll('[data-animate]').forEach(function(el) {
      const rect = el.getBoundingClientRect();//retorna um objeto com as posições e tamanhos do elemento na tela, em relação à janela de visualização do usuario.
      if (rect.top < window.innerHeight - 50) {
        el.classList.add('visible');//aqui interagimos diretamente com o css acionando a classe visible
      }
    });
  }

  function handleScroll() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 5) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }


  window.addEventListener('scroll', function(){
    animateOnScroll();
    handleScroll();
  });

  animateOnScroll();
  handleScroll();
   // Para animar os elementos  que já estão visíveis quando a pagina carrega
});

//function slider, galeria de fotos

let cont = 1
const totalRadio = 4

setInterval (() =>{
    const radio = document.getElementById('radio' + cont)
    
    if(radio){
      radio.checked = true
     } cont ++
    if(cont > totalRadio){
        cont = 1
    }

}, 4000)

/*Função de responsividade*/
function menuShow() {
  let menuMobile = document.querySelector('.navbar-mobile');
  let menuIcon = document.querySelector('.mobile-menu-icon img');
  
  if (menuMobile.classList.contains('open')) {
      menuMobile.classList.remove('open');
      document.querySelection('.icon').src = "src/images/Icon/menu_white_36dp.svg";
    } else {
      menuMobile.classList.add('open');
      document.querySelector('.icon').src = "src/images/Icon/close_white_36dp.svg";
    }
}

function menuShow1() {
  let menuMobile1 = document.querySelector('.navbar-mobile');
  if (menuMobile1.classList.contains('open')) {
      menuMobile1.classList.remove('open');
      document.querySelection('.icon').src = "../images/Icon/menu_white_36dp.svg";
    } else {
      menuMobile1.classList.add('open');
      document.querySelector('.icon').src = "../images/Icon/close_white_36dp.svg";
    }
}


