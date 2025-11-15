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
    botao.addEventListener("click", () => {
        document.getElementById("overlay").style.display = "block";
        document.getElementById("modal-adocao").style.display = "block";
    });
});

// Fechar modal
document.querySelector(".close-btn").addEventListener("click", fecharModal);
document.getElementById("overlay").addEventListener("click", fecharModal);

function fecharModal() {
    document.getElementById("overlay").style.display = "none";
    document.getElementById("modal-adocao").style.display = "none";
}

document.getElementById("form-adot").addEventListener("submit", function(e) {
    e.preventDefault();
const campos =["nome", "fone", "data", "pontos"]
let valido = true

campos.forEach(id => {
    document.getElementById(id).classList.remove("erro");                               
    })

    campos.forEach(id => {
        const campo = document.getElementById(id)
        if (campo.value.trim()===""){
            campo.classList.add("erro")
            valido = false
        }
    })

    const msg = document.getElementById("mensagem3");

    if (!valido) {
        msg.textContent = "Por favor, preencha todos os campos.";
        msg.className = "mensagem3 erro";
        return;
    }

    msg.textContent = "Obrigada por adotar!";
    msg.className = "mensagem3 sucesso";
    document.getElementById("form-adot").reset();
})