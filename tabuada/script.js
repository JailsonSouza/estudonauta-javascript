function gerar(){
    var numT = document.getElementById('numT')
    let res = document.getElementById('seltab')

    if (numT.value.lenght == 0){
        window.alert(`Erro! Campos vazios, informe um numero!!!`)
    }else{
        var value = Number(numT.value)
        res.innerHTML = ``
        for (c=1;c<=10;c++){
            let item = document.createElement('option')
            item.text = `${value} X ${c} = ${value*c}`
            item.value = `tab${value}`
            res.appendChild(item)
        }
    }
}
    