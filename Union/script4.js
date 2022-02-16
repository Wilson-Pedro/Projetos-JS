function carregar(){
    const msg = document.getElementById('mensagem')
    const foto = document.getElementById('imagem')
    const data = new Date()
    hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12){
        foto = document.getElementById('imagem').src="imagens/tarde.png"

    } else if (hora >= 12 && hora < 18){
        foto = document.getElementById('imagem').src="imagens/tarde.png"
        window.document.body.style.background = '#b9846f'

    } else {
        foto = document.getElementById('imagem').src="imagens/noite.png"
    }
}