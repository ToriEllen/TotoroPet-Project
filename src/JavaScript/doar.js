//funcao copiar texto pix

function copiarTexto() {
    const input = document.getElementById("chavePix")
    navigator.clipboard.writeText(input.value)
    .then(() => {
        const msg = document.getElementById("msg-copiado")
        msg.textContent = "Chave PIX copiada!"
        setTimeout(() => {
            msg.textContent = ""
        }, 3000)
    })
    .catch(err => {
        console.error('Erro ao copiar o texto: ', err)
    })
}
//função validação do formulário de cartao de crédito
    document.getElementById("form-cartao").addEventListener("submit", function(e) {
    e.preventDefault(); // impede envio

    const campos = ["nomeCartao", "numeroCartao", "validadeCartao", "cvvCartao", "valorDoacao"];
    let valido = true;

    // limpa erros anteriores
    campos.forEach(id => {
        document.getElementById(id).classList.remove("erro");
    });

    // checa se há campo vazio
    campos.forEach(id => {
        const campo = document.getElementById(id);
        if (campo.value.trim() === "") {
        campo.classList.add("erro");
        valido = false;
        }
    });
    // mostra mensagem de erro ou sucesso
    const msg = document.getElementById("mensagem");

    if (!valido) {
        msg.textContent = "Por favor, preencha todos os campos.";
        msg.className = "mensagem erro";
        return;
    }

    // se tudo estiver certo
    msg.textContent = "Obrigada pela sua doação!";
    msg.className = "mensagem sucesso";

    // limpa os campos
    document.getElementById("form-cartao").reset();
    });

    document.getElementById("form-itens").addEventListener("submit", function(e) {
    e.preventDefault(); // impede envio do form

    const campos = ["nomeDoador", "contatoDoador", "itensDoados"];
    let valido = true;                      
    // limpa erros anteriores
    campos.forEach(id => {
        document.getElementById(id).classList.remove("erro");
    });
    // checa se há campo vazio
    campos.forEach(id => {
        const campo = document.getElementById(id);
        if (campo.value.trim() === "") {
        campo.classList.add("erro");
        valido = false;
        }
    });
     const msg2 = document.getElementById("mensagem2");

    if (!valido) {
        msg2.textContent = "Por favor, preencha todos os campos.";
        msg2.className = "mensagem erro";
        return;
    }

    // se tudo estiver certo
    msg2.textContent = "Obrigada pela sua doação!";
    msg2.className = "mensagem sucesso";

    // limpa os campos
    document.getElementById("form-itens").reset();
    });

    //função mudar frase sobre animais ajudados com doaçoes
    const frase = document.getElementById("mudar-ajuda")
    const frases = [
    "A cadelinha Maya foi adotada e esta feliz ",
    "O gatinho Thor encontrou um lar amoroso ",
    "Java teve uma segunda chance na vida ",
    "O doguinho Bold está mais saudável e feliz "
];

let fraseIndice = 0



function mudarFrase(){
    frase.style.opacity = "0"
    frase.style.transform = "translateY(100%)"
    setTimeout(() => {
        fraseIndice = (fraseIndice + 1) % frases.length
        frase.textContent = frases[fraseIndice]

        frase.style.transform = "translateY(-100%)"

        setTimeout(() => {
            frase.style.opacity = "1"
            frase.style.transform = "translateY(0)"
        })
    }, 60);
}

frase.textContent = frases[0];

setInterval(mudarFrase, 3500); 
