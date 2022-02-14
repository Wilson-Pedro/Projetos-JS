function inverter(){
    var numero = document.getElementById('num')
    var res = document.getElementById('res')
    
    res.innerHTML = `${inverterNumero(numero.value)}`

    num.value = ''
    num.focus()
}

function inverterNumero(n){
    return n.split("").reverse().join("")
}