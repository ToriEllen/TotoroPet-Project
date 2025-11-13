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
