var n = 16;
var num = "16";
var num2 = 3.2;
// conversões de string para numero

console.log(typeof(num));

num = Number.parseInt();
num2 = Number.parseFloat();

console.log(typeof(num));

// conversões de número para string
n = String();
//n.toString();
console.log(typeof(n));

// formatação de string

// contatenação
console.log('Teste de string ' + n);

// template string
console.log(`Teste de string ${n}`);

// formatação de string
var nome = 'Jailson';
console.log(nome.length);
console.log(nome.toUpperCase());
console.log(nome.toLowerCase());

// formatação de número
var number = 10.14343545;
console.log(number.toFixed(2));
console.log(number.toFixed(2).replace('.', '.'));
//console.log(number.r('.', ','));
console.log(number.toLocaleString('pt-BR', {style: 'currency', currency: 'EUR'})); // BRL, USD, EUR

