document.addEventListener("DOMContentLoaded", function() {
 
  function animateOnScroll() {
    document.querySelectorAll('[data-animate]').forEach(function(el) {
      const rect = el.getBoundingClientRect();//retorna um objeto com as posições e tamanhos do elemento na tela, em relação à janela de visualização do usuario.
      if (rect.top < window.innerHeight - 50) {
        el.classList.add('visible');//aqui interagimos diretamente com o css acionando a classe visible
      }
    });
  }

  window.addEventListener('scroll', animateOnScroll);
  animateOnScroll(); // Para animar os elementos  que já estão visíveis quando a pagina carrega
});

//function slider, galeria de fotos

let cont = 1
const totalRadio = 4

setInterval (() =>{
    document.getElementById('radio' + cont).checked = true
    cont ++
    if(cont > totalRadio){
        cont = 1
    }

}, 4000)

