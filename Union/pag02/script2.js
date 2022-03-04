var numero = document.getElementById('num')
var tab = document.getElementById('seltab')

function limpar(){
    num.value = ''
    num.focus()
    return true
}

function soma(){
    if (numero.value.length == 0 || numero.value < 0){
        alert('Digite o número corretamente')
    } else {
        var n = Number(numero.value)
        tab.innerHTML = ''
        for (let c = 1; c <= 10; c++){
            let item = document.createElement('option')
            item.text = `${n} + ${c} = ${n + c}`
            tab.appendChild(item)
        }
    }
    limpar()
}

function subtração(){
    if (numero.value.length == 0 || numero.value < 0){
        alert('Digite o número corretamente')
    } else {
        var n = Number(numero.value)
        tab.innerHTML = ''
        for (let c = 1; c <= 10; c++){
            let item = document.createElement('option')
            item.text = `${n} - ${c} = ${n - c}`
            tab.appendChild(item)
        }
    }
    limpar()
}

function multiplicação(){
    if (numero.value.length == 0 || numero.value < 0){
        alert('Digite o número corretamente')
    } else {
        var n = Number(numero.value)
        tab.innerHTML = ''
        for (let c = 1; c <= 10; c++){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n * c}`
            tab.appendChild(item)
        }
    }
    limpar()
}

function divisão(){
    if (numero.value.length == 0 || numero.value < 0){
        alert('Digite o número corretamente')
    } else {
        var n = Number(numero.value)
        tab.innerHTML = ''
        for (let c = 1; c <= 10; c++){
            let item = document.createElement('option')
            item.text = `${n} % ${c} = ${(n / c).toFixed(1)}`
            tab.appendChild(item)
        }
    }
    limpar()
}