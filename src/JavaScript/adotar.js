/*const imagens = document.querySelectorAll('.pet-adocao img');

imagens.forEach((img, i) => {
    setTimeout(() => {
        img.style.opacity = 1
        img.style.transform = 'translateY';
    }, i * 400);
})*/

/*function populateList(){
    const data = Array.from({ length: 9})
    .map((_, i) => `<div class="item">Item ${(i + 1)}</div`)

    const list = document.querySelector('#pagination .list')
    list.innerHTML = data.join("")
}

document.getElementById("btnAdotar").addEventListener("click", () => {
    document.getElementById("modalForm").style.display = "flex";
});

// Fechar o form
document.getElementById("closeForm").addEventListener("click", () => {
    document.getElementById("modalForm").style.display = "none";
});

// Fechar clicando fora do form
document.getElementById("modalForm").addEventListener("click", (e) => {
    if (e.target.id === "modalForm") {
        document.getElementById("modalForm").style.display = "none";
    }
});*/

// Abrir modal
document.querySelectorAll(".bnt-ad").forEach(botao => {
    botao.addEventListener("click", () => {//callback
        document.getElementById("overlay").style.display = "block";// Mostrar overlay que começa display none
        document.getElementById("modal-adocao").style.display = "block";// Mostrar modal que começa display none
    });
});

// Fechar modal
document.querySelector(".close-btn").addEventListener("click", fecharModal);
document.getElementById("overlay").addEventListener("click", fecharModal);

function fecharModal() {
    limparFormulario();// Limpar formulário ao fechar o modal
    document.getElementById("overlay").style.display = "none";// Esconder overlay
    document.getElementById("modal-adocao").style.display = "none";// Esconder modal
}

// Limpar formulário e mensagens
function limparFormulario() {
    const form = document.getElementById("form-adot");
    const campos = ["nome", "fone", "data", "pontos"];
    const msg = document.getElementById("mensagem3");

    if (form) form.reset();// Limpa os campos do formulário

    campos.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.classList.remove("erro");// Remove a classe de erro
    });

    if (msg) {
        msg.textContent = "";// Limpa a mensagem
        msg.className = "mensagem3"; // remove classes erro/sucesso
    }
}


document.getElementById("form-adot").addEventListener("submit", function(e) {// Adiciona o evento de submit ao formulário
    e.preventDefault();// Evita o envio do formulário
const campos =["nome", "fone", "data", "pontos"]
let valido = true

campos.forEach(id => {
    document.getElementById(id).classList.remove("erro"); // Remover classe de erro                              
    })

    campos.forEach(id => {
        const campo = document.getElementById(id)
        if(id === "pontos"){// Verifica o campo pontos
         if (campo.value === "" || campo.value.trim() === ""){// Verifica se o campo está vazio ou contém apenas espaços
            campo.classList.add("erro")// Adiciona a classe de erro
            valido = false
        }
    }else{
        if (campo.value.trim () === ""){// Verifica se o campo está vazio ou contém apenas espaços
            campo.classList.add("erro")// Adiciona a classe de erro
            valido = false
        }
    }
})

    const msg = document.getElementById("mensagem3");// Elemento para exibir mensagens

    if (!valido) {
        msg.textContent = "Por favor, preencha todos os campos.";
        msg.className = "mensagem3 erro";
        return;
    }

    msg.textContent = "Obrigada por adotar!";
    msg.className = "mensagem3 sucesso";
    document.getElementById("form-adot").reset();// Limpa os campos do formulário
})