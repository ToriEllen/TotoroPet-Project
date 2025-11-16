//efeito de virar o card de login/cadastro com css
const card = document.getElementById('card');
const btnEntrar = document.getElementById('btnEntrar');
const btnCadastrar = document.getElementById('btnCadastrar');

btnEntrar.addEventListener('click', () => {
  card.classList.add('virar');
});

btnCadastrar.addEventListener('click', () => {
  card.classList.remove('virar');
});

//validação de formulários de cadastro e login
const buttons = document.querySelectorAll('.submit-button');

//adiciona evento de click para todos os botões com a classe submit-button
    buttons.forEach(button => {
    button.addEventListener('click', function(event) {
    event.preventDefault();

    const form = button.closest('form');//encontra o form mais próximo do botão clicado.
    const inputs = form.querySelectorAll('input');//variavel que seleciona todos os inputs dentro do form  mais proximo do botão clicado.
    let camposVazios = false;

    //função para limpar mensagem de erro e classe css
        function limparErro (input, errorMsg){
      input.classList.remove('error');
      errorMsg.textContent = '';
      errorMsg.style.display = 'none';
       input.style.border = '1px solid #ccc';
    }

    //validação de campos vazios e adiciona mensagem de erro e class css, se nao estiver vazio limpa a mensagem de erro
    inputs.forEach(input => {
       const errorMsg = input.parentElement.querySelector('.error-msg');
      if (input.value.trim() === ""){
        camposVazios = true;
        input.classList.add('error');
        input.style.border = '1px solid red';
        errorMsg.textContent = 'Campo obrigatório';
        errorMsg.style.display = 'block';
      }else{
        limparErro(input, errorMsg);
      }
    

     input.addEventListener('input', () => 
        limparErro(input, errorMsg));
    });

//mensagens de sucesso no window alert para as duas formas
    if (!camposVazios && button.id === 'btnCadastro') {
      alert('Cadastro realizado com sucesso!');
      window.location.href = "../../Home.html";//redireciona para a página inicial apos o cadastro
    }else if (!camposVazios && button.id === 'btnLogin') {
      alert('Login realizado com sucesso!');
      window.location.href = "../../Home.html";//redireciona para a página inicial apos o login
    }
  });
});

const senhaInput = document.querySelectorAll('#senha');
const toggleSenha = document.querySelectorAll('#toggleSenha');




//animações de troca de imagens ao digitar a senha e clicar no icone olho

const animacoes = [
  '../images/Animation1.png',
  '../images/Animation2.png', 
  '../images/Animation3.png',
];

const imagens = document.querySelectorAll('.animation-img');

function trocarImagem(index) {
  imagens.forEach(img => {
    img.src = animacoes[index];
    img.style.transition = '1s ease-in-out';
  });
};
 
//condicoes para trocar a imagem dependendo do click
trocarImagem(0);

const senhaInputs = document.querySelectorAll('#senha');
const toggleSenhas = document.querySelectorAll('#toggleSenha');

toggleSenhas.forEach(toggle => {
  toggle.addEventListener("click", () => {
    const senhaInput = toggle.previousElementSibling;
    const tipo = senhaInput.getAttribute("type") === "password" ? "text" : "password";
    senhaInput.setAttribute('type', tipo);
    toggle.classList.toggle("fa-eye-slash");

      if(tipo === "text"){
        trocarImagem(2);
      } else {
        trocarImagem(1);
      }

    /*trocarImagem(2);*/
  });
});
//trocar entre imagens dependendo da açao no campo de senha

  senhaInputs.forEach(input => {
    input.addEventListener("input", () => {
      trocarImagem(1); 
    });

    input.addEventListener("input", () => {
      if (input.value.trim() === '') {
        trocarImagem(0);
    }else{
      trocarImagem(1);
    }
  });

    buttons.forEach(button => {
      button.addEventListener('click', () => {
        trocarImagem(0);
      });
  });
  


});

