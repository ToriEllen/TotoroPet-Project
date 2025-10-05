let cont = 1
const totalRadio = 3

setInterval (() =>{
    document.getElementById('radio' + cont).checked = true
    cont ++
    if(cont > totalRadio){
        cont = 1
    }

}, 4000)