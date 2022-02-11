var numero = document.getElementById('num')
var res = document.getElementById('res')

function clicar(){
    if (numero.value.length == 0 || numero.value.length == 1)
        alert('Você precisa digitar o valor corre tamente')
    if (numero.value < 0)
        alert('Você não pode digitar valores negativos!')

    res.innerHTML = `Valor inertido: ${inverter(numero.value)}`

    num.value = ''
    num.focus()

}  

function inverter(n){
    return n.split("").reverse().join("")
}