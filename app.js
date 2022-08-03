'use strict'

function mudarCor(){
  
    const cor = document.getElementById('cor').value.toUpperCase()
    const body = document.getElementById('body')
    body.style.backgroundColor = `#${cor}`
    
    
    if ( cor == 'VERMELHO' ) {
        body.style.backgroundColor = '#990000'
    }
    else if ( cor == 'AZUL' ) {
        body.style.backgroundColor = '#00008B'
    }
    else if ( cor == 'AMARELO' ) {
        body.style.backgroundColor = '#EEAD2D'
    }
    else if ( cor == 'VERDE' ) {
        body.style.backgroundColor = '#006400'
    }
    else if (cor == 'ROSA') {
        body.style.backgroundColor = '#FFB6C1'
    }
    else if (cor == 'ROXO') {
        body.style.backgroundColor = '#800080'
    }
    else if (cor == 'CINZA') {
        body.style.backgroundColor = '7f7f7f'
    }
    
}

const botao = document.getElementById('botao').addEventListener('click', mudarCor)