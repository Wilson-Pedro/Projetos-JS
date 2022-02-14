var n1
var n2

function somar(){
    Numeros()
    res.innerHTML = `${n1} + ${n2} = ${n1 + n2}`
    limpar()
}

function subtrair(){
    Numeros()
    res.innerHTML =`${n1} - ${n2} = ${n1- n2}`
    limpar()
}

function multiplicar(){
    Numeros()
    res.innerHTML = `${n1} x ${n2} = ${(n1 * n2).toFixed(2)}`
    limpar()
}

function dividir(){
    Numeros()
    res.innerHTML = `${n1} / ${n2} = ${(n1 / n2).toFixed(2)}`
    limpar()
}

function Numeros(){
    n1 = Number(document.getElementById('num1').value)
    n2 = Number(document.getElementById('num2').value)
    return n1, n2;
}

function limpar(){
    num1.value = ''
    num2.value = ''
    num1.focus()
    return true
}