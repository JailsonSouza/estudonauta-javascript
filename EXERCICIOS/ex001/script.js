function carregar() {    
    var msg01 = document.getElementById('txt01')
    var img = document.getElementById('imagem')
    var data = new Date()
    var horaAtual = data.getHours()
    horaAtual = 17
    msg01.innerHTML = `A hora atual é ${horaAtual} horas.`
    if (horaAtual > 0 && horaAtual < 12){
        // bom dia
        img.src = 'imgs/manha.jpg'
        document.body.style.background = '#e2cd9f'
    }else if (horaAtual < 17){
        // bom dia
        img.src = 'imgs/tarde.jpg'
        document.body.style.background = 'yellow'
    } else if (horaAtual < 18) {
        img.src = 'imgs/tardezinha.jpg'
        document.body.style.background = 'orange'
    } else {
        img.src = 'imgs/noite.jpg'
        document.body.style.background = 'black'
    }
}

