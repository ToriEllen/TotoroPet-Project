/*const imagens = document.querySelectorAll('.pet-adocao img');

imagens.forEach((img, i) => {
    setTimeout(() => {
        img.style.opacity = 1
        img.style.transform = 'translateY';
    }, i * 400);
})*/

function populateList(){
    const data = Array.from({ length: 9})
    .map((_, i) => `<div class="item">Item ${(i + 1)}</div`)

    const list = document.querySelector('#pagination .list')
    list.innerHTML = data.join("")
}