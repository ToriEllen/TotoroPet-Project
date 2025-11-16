document.addEventListener("DOMContentLoaded", function() {
 
  function animateOnScroll() {
    document.querySelectorAll('[data-animate]').forEach(function(el) {//aplica a todo atributo nas tags html data-animate
      const rect = el.getBoundingClientRect();//retorna um objeto com as posições e tamanhos do elemento na tela, em relação à janela de visualização do usuario.
      if (rect.top < window.innerHeight - 50) {//Se o topo do elemento estiver 50px antes de entrar totalmente na tela, então anime com a classe visible
        el.classList.add('visible');//aqui interagimos diretamente com o css acionando a classe visible
      }
    });
  }

  //funcao que adiciona estilo a nav bar ao scrollar a tela
  function handleScroll() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 5) {//se o scroll for mais de 5px aciona classe
      navbar.classList.add('scrolled');//adiciona a classe css scrolled
    } else {//se for menor de 5px retira a classe
      navbar.classList.remove('scrolled');//remove a classe css scrolled
    }
  }


  window.addEventListener('scroll', function(){//dois funcoes/animacoes para scroll da pagina
    animateOnScroll();
    handleScroll();
  });

  animateOnScroll();//chama
  handleScroll();//chama
   // Para animar os elementos  que já estão visíveis quando a pagina carrega
});
//funcao para esconder o login que tem posiçao fixa no topo, esconde quando sai do header
const header = document.querySelector("header");
const loginHeader = document.querySelector(".Login-header");

window.addEventListener("scroll", () => {
    const headerHeight = header.offsetHeight; // altura do header

    if (window.scrollY >= headerHeight) {//se o scroll passar do tamanho do header
        loginHeader.classList.add("hidden");//adiciona a classe hidden a div login-header escondendo ela
    } else {
        loginHeader.classList.remove("hidden");//se nao, remove o esconder
    }
});



/*Função de responsividade*/

function menuShow() {
    const menuMobile = document.querySelector('.navbar-mobile');//pega o elemento html
    const icon = document.querySelector('.mobile-menu-icon i'); // pega o ícone 

    if (!menuMobile || !icon) return;//verifica se tem mesmo um menumobile

    const menuAberto = menuMobile.classList.toggle('open'); // alterna entre abrir/fechar adiciona ou remove a classe .open, onde tudo acontece

    // troca o ícone (hamburger para icone x)
    if (menuAberto) {//se o menu tiver aberto remove icone hamburgese adiciona x no lugar
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-xmark');
    } else {//se o menu tiver fechado tira o x e coloca hamburger no lugar
        icon.classList.remove('fa-xmark');
        icon.classList.add('fa-bars');
    }
}

// Evento de clique no botão mobile
const mobileBtn = document.querySelector('.mobile-menu-icon');
if (mobileBtn) {
    mobileBtn.addEventListener('click', menuShow);
}
