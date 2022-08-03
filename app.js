'use strict'

function mudarCor () {
    const cor = document.getElementById('cor').value
    document.body.style.backgroundColor = `#${cor}`
    document.documentElement.style.setProperty('--bg-color' , `#${cor}`)

    decodeURIComponent.getElementById('aplicar').addEventListenner('click' , mudarCor)
}