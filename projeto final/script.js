let vetorNumber = []
let res = document.getElementById('res')
let tNumber = document.querySelector('input#tNumber')
let tLista = document.querySelector('select#tLista')

function isNumero(num){
    if (Number(num) < 1 || Number(num) > 100){
        return false
    } else {
        return true
    }
}

function inLista(n, l){
    if (l.indexOf(Number(n)) == -1) {
        return false
    } else {
        return true
    }
}
function adicionar() {
    
    res.innerText = ``
    if (isNumero(tNumber.value) && !inLista(tNumber.value, vetorNumber)){
        vetorNumber.push(Number(tNumber.value))
        let item = document.createElement('option')
        item.text = `Valor ${tNumber.value} adicionado!`
        tLista.appendChild(item)
    } else {
        alert('O valor informado está fora do intervalo (1 - 100) ou já foi adicionado na lista.')
    }
    tNumber.value = ''
    tNumber.focus()
}
let tamanho = 0

function finalizar() {
    if (vetorNumber.length == 0) {
        alert('vetor vazio! informe valores antes de finalizar!')
    } else {
        // saber o  tamanho do vetor de valores
        tamanho = vetorNumber.length
        res.innerHTML += `Ao todo, temos ${tamanho} números cadastrados. <br>`
        // saber qual o maior e menor número do vetor
        let maior = vetorNumber[0]
        let menor = vetorNumber[0]
        let soma = 0
        let media = 0

        for (let c in vetorNumber){
            soma += vetorNumber[c]

            if (vetorNumber[c] >= maior){
                maior = vetorNumber[c]
            }
            if (vetorNumber[c] <= menor){
                menor = vetorNumber[c]
            }
        }

        media = soma / tamanho

        res.innerHTML += `O maior valor informado foi ${maior}. <br>`
        res.innerHTML += `O menor valor informado foi ${menor}. <br>`
        res.innerHTML += `Somando todos os valores, temos ${soma}. <br>`
        res.innerHTML += `A média dos valores digitado é ${media}. <br>`
    }
}