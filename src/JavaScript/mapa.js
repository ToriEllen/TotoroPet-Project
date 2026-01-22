//Uso da biblioteca Leaflet, que é uma biblioteca JavaScript de código aberto para criar mapas interativos
//  e compatíveis com dispositivos móveis

const mapa1 = L.map('mapa1').setView([-3.760106, -38.482476], 15);// Coordenadas do local e zoom

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
   maxZoom: 20,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(mapa1);// Adiciona o mapa ao elemento com id 'mapa1' e a imagem do OpenStreetMap

L.marker([-3.760106, -38.482476]).addTo(mapa1)
    .bindPopup('ONG TotoroPet<br>Rua Eliseu Uchôa Beco, 600')
    .openPopup();// Adiciona um marcador com um popup no mapa

const mapa2 = L.map('mapa2').setView([-3.761772, -38.574468], 15);// Coordenadas do local e zoom

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
   maxZoom: 20,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(mapa2);// Adiciona o mapa ao elemento com id 'mapa2' e a imagem do OpenStreetMap

L.marker([-3.761772, -38.574468]).addTo(mapa2)
    .bindPopup('ONG TotoroPet<br>Avenida Senador Fernandes Távora, 137A')
    .openPopup();// Adiciona um marcador com um popup no mapa

const mapa3 = L.map('mapa3').setView([-3.733003, -38.525375], 15);// Coordenadas do local e zoom

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
   maxZoom: 20,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(mapa3);// Adiciona o mapa ao elemento com id 'mapa3' e a imagem do OpenStreetMap

L.marker([-3.733003, -38.525375]).addTo(mapa3)
    .bindPopup('ONG TotoroPet<br>Avenida Duque de Caxias, 101')
    .openPopup();// Adiciona um marcador com um popup no mapa
