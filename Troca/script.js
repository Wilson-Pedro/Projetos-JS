function trocar(){
    var frase = document.getElementById('tfrase').value
    var palavra = document.getElementById('tpalavra').value
    var res = document.getElementById('res')
    var troca = document.getElementById('ttroca').value

    var mudarFrase = frase.replace(palavra, troca)

    res.innerHTML = `${mudarFrase}`

    tfrase.value = ''
    tpalavra.value = ''
    ttroca.value = ''
    tfrase.focus()
}


/*
function trocarPalavra(){
    var frase = document.getElementById('tfrase').value
    var palavra = document.getElementById('tpalavra').value
    var res = document.getElementById('res')
    var troca = document.getElementById('ttroca').value

    var mudarFrase = frase.replace(palavra, troca)

    return mudarFrase
}
*/
