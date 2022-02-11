var numero = document.getElementById('num')
var tab = document.getElementById('seltab')

function foco(){
    num.value = ''
    num.focus()
    return true
}

function somar(){
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
    foco()
}

function subtrair(){
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
    foco()
}

function multiplicar(){
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
    foco()
}
function dividir(){
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
    foco()
}