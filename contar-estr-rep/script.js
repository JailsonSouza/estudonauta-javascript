function ContarNumber(){
    var txtInicio = document.getElementById('numInicio')
    var txtFinal = document.getElementById('numFinal')
    var txtPassos = document.getElementById('numPassos')
    let res = document.getElementById('res')

    var inicio = Number(txtInicio.value)
    var final = Number(txtFinal.value)
    var passos = Number(txtPassos.value)


    res.innerHTML = 'Contando... <br>'
    if (inicio < final) {
        let contador = inicio
        while (contador <= final){
            res.innerHTML += `${contador} `
            contador += passos
        } 
    } else {
        let contador = inicio
        while (contador >= final){
            res.innerHTML += `${contador} `
            contador -= passos
        }
    }
}