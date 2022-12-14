var vel = 60
var acelerou = false
if (acelerou){
    vel += 20
}else{
    vel += 0
}
console.log(`A velocidade atual do carro é de ${vel}km\h`)

if (vel >= 80){
    console.log('Ultrapassou a velocidade! MULTADO!!!')
}else {
    console.log('Se mantenha na velocidade permitida!')
}