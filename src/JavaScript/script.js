document.addEventListener("DOMContentLoaded", function() {
  function animateOnScroll() {
    document.querySelectorAll('[data-animate]').forEach(function(el) {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 50) {
        el.classList.add('visible');
      }
    });
  }

  window.addEventListener('scroll', animateOnScroll);
  animateOnScroll(); // Para animar os elementos já visíveis ao carregar
});

let cont = 1
const totalRadio = 3

setInterval (() =>{
    document.getElementById('radio' + cont).checked = true
    cont ++
    if(cont > totalRadio){
        cont = 1
    }

}, 4000)

