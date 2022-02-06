function somar(){
    var numero = document.getElementById('num')
    var tab = document.getElementById('seltab')
    if (numero.value.length == 0){
        alert('Você não colocou um número')
    } else {
        var n = Number(numero.value)
        tab.innerHTML = '' 
        for (let c = 1; c<= 10; c++){
            let item = document.createElement('option')
            item.text = `${n} + ${c} = ${n + c}`
            tab.appendChild(item)
        }
    }
}

function subtrair(){
    var numero = document.getElementById('num')
    var tab = document.getElementById('seltab')
    if (numero.value.length == 0){
        alert('Você não colocou um número')
    } else {
        var n = Number(numero.value)
        tab.innerHTML = ''
        for(let c = 1; c <= 10; c++){
            let item = document.createElement('option')
            item.text = `${n} - ${c} = ${n - c}`
            tab.appendChild(item)
        }
    }
}

function multiplicar(){
    var numero = document.getElementById('num')
    var tab = document.getElementById('seltab')
    if (numero.value.length == 0){
        alert('Você não colocou um número')
    } else {
        var n = Number(numero.value)
        tab.innerHTML = ''
        for (let c = 1; c <= 10; c++){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n * c}`
            tab.appendChild(item)
        }
    }
}
function dividir(){
    let numero = document.getElementById('num')
    var tab = document.getElementById('seltab')
    if (numero.value.length == 0){
        alert('Você não colocou um número')
    } else {
        var n = Number(numero.value)
        tab.innerHTML = ''
        for (let c = 1; c <= 10; c++){
            let item = document.createElement('option')
            item.text = `${n} % ${c} = ${n / c}`
            tab.appendChild(item)
        }
    }
}