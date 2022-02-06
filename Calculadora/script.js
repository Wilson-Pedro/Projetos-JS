var so = window.document.getElementById('so')
so.addEventListener('click', somar)
var su = window.document.getElementById('su')
su.addEventListener('click', subtrair)
var mu = window.document.getElementById('mu')
mu.addEventListener('click', multiplicar)
var di = window.document.getElementById('di')
di.addEventListener('click', dividir)
        
function somar() {
    var n1 = Number(document.getElementById('v1').value)
    var n2 = Number(document.getElementById('v2').value)
    var s = n1 + n2
    res.innerHTML = s
}

function subtrair() {
    var n1 = Number(document.getElementById('v1').value)
    var n2 = Number(document.getElementById('v2').value)
    var s = n1 - n2
    res.innerHTML = s
}

function multiplicar() {
    var n1 = Number(document.getElementById('v1').value)
    var n2 = Number(document.getElementById('v2').value)
    var res = window.document.getElementById('res')
    var s = n1 * n2
    res.innerHTML = s
}

function dividir() {
    let n1 = Number(document.getElementById('v1').value)
    let n2 = Number(document.getElementById('v2').value)
    var res = window.document.getElementById('res')
    var s = n1 / n2
    res.innerHTML = s
}