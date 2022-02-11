var numero = document.getElementById('num')

function maquina(){
    var num = Number.parseInt(Math.floor(Math.random() * (3 - 0 + 1) + 0))
    return num
}

function foco(){
    num.value = ''
    num.focus()
    return true
}

function advinhar(){
    if (numero.value < 0 || numero.value > 3 || numero.value.length == 0){
        window.alert('Digite o número corretamente!')
        foco()
    } else {
        var jogador = Number.parseInt(numero.value)
        var res = document.getElementById('res')
        if (jogador == maquina()){
            res.innerHTML = `Eu também pensei no número ${jogador}, Parabéns!`
            foco()
        } else {
            res.innerHTML = `Você errou!`
            foco()
        }
    }

}