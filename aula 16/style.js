let vetor_number = [1, 3, 2]

vetor_number[3] = 7
vetor_number[4] = 15

console.log(vetor_number)

// para adicionar um valor no final do vetor

vetor_number.push(32)

console.log(vetor_number)
// para descobrir o tamanho do vetor
console.log(vetor_number.length)

// para ordenar o vetor de forma simples e facil
vetor_number.sort()
console.log(vetor_number)

// para remover o ultimo elemento do vetor
vetor_number.pop()
console.log(vetor_number)

// para escrever o vetor na forma inversa do que foi atribuido
vetor_number.reverse()
console.log(vetor_number)

// formas de imprimir o vetor de números

for (let c=0; c<vetor_number.length;c++){
    console.log(`${vetor_number[c]} `)
}

console.log(` -------------- `)
// ou de uma forma mais simples

for (let c in vetor_number){
    console.log(`${vetor_number[c]} `)
}

// para procurar um valor no vetor e retornar a posição do elemento

let p = vetor_number.indexOf(15)
console.log(`O valor 15 esta na posicao ${p}`)