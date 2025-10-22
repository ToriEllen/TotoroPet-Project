const card = document.getElementById('card');
const btnEntrar = document.getElementById('btnEntrar');
const btnCadastrar = document.getElementById('btnCadastrar');

btnEntrar.addEventListener('click', () => {
  card.classList.add('virar');
});

btnCadastrar.addEventListener('click', () => {
  card.classList.remove('virar');
});

//ajeitar evento alert
const buttons = document.getElementsByClassName('submit-button');
 buttons.forEach(button => {
    button.addEventListener('click', function(event) {
    event.preventDefault();
    alert('Cadastro realizado com sucesso!');
    });
});