const formulario = document.getElementById("form-pet");
const nome = document.getElementById("nomeBichinho");
const tipo = document.getElementById("tipoBichinho");
const local = document.getElementById("localBichinho");
const contato = document.getElementById("contatoBichinho");
const obs = document.getElementById("obsBichinho");
const foto = document.getElementById("seupet");
const preview = document.getElementById("preview");

// === serve para carregar o rascunho que foi salvo ===
window.addEventListener("load", () => {
    const dadosSalvos = JSON.parse(localStorage.getItem("formPet"));
    if (dadosSalvos) {
        nome.value = dadosSalvos.nome || "";
        tipo.value = dadosSalvos.tipo || "";
        local.value = dadosSalvos.local || "";
        contato.value = dadosSalvos.contato || "";
        obs.value = dadosSalvos.obs || "";
        
        if (dadosSalvos.fotoBase64) {
            mostrarPreview(dadosSalvos.fotoBase64);
        }
    }
});


[nome, tipo, local, contato, obs].forEach(campo => {
    campo.addEventListener("input", salvarRascunho);
});

function redimensionarImagem(file, maxWidth, callback) {
    const reader = new FileReader();
    reader.onload = function(e) {
        const img = new Image();
        img.onload = function() {
            const canvas = document.createElement("canvas");
            const scaleSize = maxWidth / img.width;
            canvas.width = maxWidth;
            canvas.height = img.height * scaleSize;
            const ctx = canvas.getContext("2d");
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
            const newBase64 = canvas.toDataURL("image/jpeg", 0.7); 
            callback(newBase64);
        };
        img.src = e.target.result;
    };
    reader.readAsDataURL(file);
}


foto.addEventListener("change", () => {
    const file = foto.files[0];
    if (file) {
        redimensionarImagem(file, 600, (base64) => { 
            mostrarPreview(base64);
            salvarRascunho();
        });
    }
});



function converterParaBase64(file, callback) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => callback(reader.result);
    reader.onerror = () => alert("Erro ao ler a imagem. Tente outra foto.");
}

function mostrarPreview(src) {
    preview.innerHTML = "";
    const img = document.createElement("img");
    img.src = src;
    img.style.maxWidth = "200px";
    img.style.borderRadius = "10px";
    img.style.marginTop = "10px";
    img.style.boxShadow = "0 4px 8px rgba(0,0,0,0.2)";
    img.style.display = "block";
    preview.appendChild(img);
}

function salvarRascunho() {
    const fotoBase64 = preview.querySelector("img")?.src || "";

    const dados = {
        nome: nome.value,
        tipo: tipo.value,
        local: local.value,
        contato: contato.value,
        obs: obs.value,
        fotoBase64: fotoBase64
    };

    localStorage.setItem("formPet", JSON.stringify(dados));
}

// === envia o formulario ===
formulario.addEventListener("submit", function(e) {
    e.preventDefault();

    // serve para validar se todos os campos estão preenchidos
    if (!nome.value.trim() || !tipo.value.trim() || !local.value.trim() || 
        !contato.value.trim() || !obs.value.trim() || !preview.querySelector("img")) {
        
        alert("Por favor, preencha TODOS os campos e adicione uma foto do pet!");
        return;
    }

    const fotoBase64 = preview.querySelector("img").src;

    const novoPet = {
        nome: nome.value.trim(),
        tipo: tipo.value.trim(),
        local: local.value.trim(),
        contato: contato.value.trim(),
        obs: obs.value.trim(),
        fotoBase64: fotoBase64,
        data: new Date().toLocaleString('pt-BR')
    };

    // serve para salvar no localStorage
    let petsSalvos = JSON.parse(localStorage.getItem("petsCadastrados")) || [];
    petsSalvos.push(novoPet);
    localStorage.setItem("petsCadastrados", JSON.stringify(petsSalvos));

    
    localStorage.removeItem("formPet");
    formulario.reset();
    preview.innerHTML = "<small>Clique para adicionar uma foto</small>";

    
    alert('Pet "${novoPet.nome}" cadastrado com sucesso! Vamos ajudar a encontrar!');

    
    window.location.href = "perdido.html";  
   
});