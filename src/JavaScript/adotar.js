

// Abrir modal
document.querySelectorAll(".bnt-ad").forEach(botao => {//pega todos os botoes passando por todos com foreach
    botao.addEventListener("click", () => {//callback, ao clicar
        document.getElementById("overlay").style.display = "block";// Mostrar overlay que começa display none
        document.getElementById("modal-adocao").style.display = "block";// Mostrar modal que começa display none
    });
});

// Fechar modal, tanto no x, quanto clicando fora, na parte escura
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

const list = document.querySelectorAll(".pet-adocao");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const pageNumber = document.getElementById("page-number");

const maxItem = 8; //quantos cards vai aparecer
let index = 1; //pagina atual

const totalPages = Math.ceil(list.length / maxItem);

// MOSTRA OS ITENS
function showItems() {
    list.forEach(item => { 
        item.classList.remove("show"); 
        item.classList.add("hide"); 
    });

    let start = (index - 1) * maxItem;
    let end = index * maxItem;

    for (let i = start; i < end && i < list.length; i++) {
        list[i].classList.remove("hide");
        list[i].classList.add("show");
    }

pageNumber.textContent = index;
}

//próxima página
next.addEventListener("click", () => {
    if (index < totalPages) {
        index++;
        showItems();
    }
});

// página anterior
prev.addEventListener("click", () => {
    if (index > 1) {
        index--;
        showItems();
    }
});

//executa tudo
window.onload = () => {
    showItems();
};
