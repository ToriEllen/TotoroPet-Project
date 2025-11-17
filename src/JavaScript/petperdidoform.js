

const formulario = document.getElementById("form-pet");
const nome = document.getElementById("nomeBichinho");
const tipo = document.getElementById("tipoBichinho");
const localEncontrado = document.getElementById("localBichinho");
const contato = document.getElementById("contatoBichinho");
const obs = document.getElementById("obsBichinho");
const foto = document.getElementById("seupet");
const preview = document.getElementById("preview");


/* serve para salvar rascunho */
function salvarRascunho() {
    if (!formulario) return;

    const fotoBase64 = preview?.querySelector("img")?.src || "";

    const dados = {
        nome: nome.value.trim(),
        tipo: tipo.value.trim(),
        local: localEncontrado.value.trim(),
        contato: contato.value.trim(),
        obs: obs.value.trim(),
        fotoBase64
    };

    localStorage.setItem("formPet", JSON.stringify(dados));
}


/* para carregar rascunho */
function carregarRascunho() {
    if (!formulario) return;

    const dados = JSON.parse(localStorage.getItem("formPet"));
    if (!dados) return;

    nome.value = dados.nome || "";
    tipo.value = dados.tipo || "";
    localEncontrado.value = dados.local || "";
    contato.value = dados.contato || "";
    obs.value = dados.obs || "";

    if (dados.fotoBase64) {
        mostrarPreview(dados.fotoBase64);
    }
}


/* Redimensionar imagem */
function redimensionarImagem(file, maxWidth, callback) {
    const reader = new FileReader();
    reader.onload = e => {
        const img = new Image();
        img.onload = () => {
            const canvas = document.createElement("canvas");

            const scale = maxWidth / img.width;
            canvas.width = maxWidth;
            canvas.height = img.height * scale;

            const ctx = canvas.getContext("2d");
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

            const base64 = canvas.toDataURL("image/jpeg", 0.7);
            callback(base64);
        };
        img.src = e.target.result;
    };
    reader.readAsDataURL(file);
}


/* Mostrar imagem */
function mostrarPreview(src) {
    if (!preview) return;

    preview.innerHTML = "";

    const img = document.createElement("img");
    img.src = src;
    img.className = "preview-imagem";

    const botao = document.createElement("button");
    botao.type = "button";
    botao.textContent = "Trocar foto";
    botao.className = "trocar-foto-btn";
    botao.onclick = () => foto.click();

    preview.appendChild(img);
    preview.appendChild(botao);

    foto.setAttribute("data-has-image", "true");
}


/* Escolher nova foto  */
if (foto) {
    foto.addEventListener("change", () => {
        const file = foto.files[0];
        if (file) {
            redimensionarImagem(file, 600, base64 => {
                mostrarPreview(base64);
                salvarRascunho();
            });
        }
    });
}


/*Salvar rascunho automátic */
if (formulario) {
    [nome, tipo, localEncontrado, contato, obs].forEach(campo => {
        campo.addEventListener("input", salvarRascunho);
    });
}


/* envia o formulario */
if (formulario) {
    formulario.addEventListener("submit", e => {
        e.preventDefault();

        if (
            !nome.value.trim() ||
            !tipo.value.trim() ||
            !localEncontrado.value.trim() ||
            !contato.value.trim() ||
            !obs.value.trim() ||
            !preview.querySelector("img")
        ) {
            alert("Por favor, preencha TODOS os campos e adicione uma foto!");
            return;
        }

        const novoPet = {
            nome: nome.value.trim(),
            tipo: tipo.value.trim(),
            local: localEncontrado.value.trim(),
            contato: contato.value.trim(),
            obs: obs.value.trim(),
            fotoBase64: preview.querySelector("img").src,
            data: new Date().toLocaleString("pt-BR")
        };

        const pets = JSON.parse(localStorage.getItem("petsCadastrados")) || [];
        pets.push(novoPet);
        localStorage.setItem("petsCadastrados", JSON.stringify(pets));

        localStorage.removeItem("formPet");
        formulario.reset();
        preview.innerHTML = "<small>Clique para adicionar uma foto</small>";

        alert(`Pet "${novoPet.nome}" cadastrado com sucesso!`);

        window.location.href = "../pages/Perdido.html";
    });
}


/* lista os pets na perdido.html */
function listarPets() {
    const listaPets = document.getElementById("lista-pets");
    if (!listaPets) return;

    const pets = JSON.parse(localStorage.getItem("petsCadastrados")) || [];

    if (pets.length === 0) {
        listaPets.innerHTML = "<p>Nenhum pet perdido foi reportado ainda.</p>";
        return;
    }

    pets.sort((a, b) => new Date(b.data) - new Date(a.data));

    pets.forEach(p => {
        const card = document.createElement("div");
        card.classList.add("card-pet");

        card.innerHTML = `
            <img src="${p.fotoBase64}">
            <div class="card-info">
                <h3>${p.nome}</h3>
                <p><strong>Tipo:</strong> ${p.tipo}</p>
                <p><strong>Visto por último:</strong> ${p.local}</p>
                <p><strong>Contato:</strong> <span>${p.contato}</span></p>
                ${p.obs ? `<p><strong>Obs:</strong> ${p.obs}</p>` : ""}
                <p class="data">Reportado em: ${p.data}</p>
            </div>
        `;

        listaPets.appendChild(card);
    });
}


window.addEventListener("DOMContentLoaded", () => {
    carregarRascunho();
    listarPets();
});