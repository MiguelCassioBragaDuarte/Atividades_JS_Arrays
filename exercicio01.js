
/*1. Crie um programa que peça ao usuário para digitar cinco números, adicione esses números a um array e depois exiba o maior número no array.*/
const ler = require('readline-sync');

let numeros = [];

for (let i = 1; i < 6; i++) {
    let numero = ler.questionFloat(i+". Informe o numero: ")
    numeros.push(numero)
}
console.log("----- Numeros Cadastrados -----=-");
for (let i = 0; i < numeros.length; i++) {
    console.log(`Numero na posição ${i}: ${numeros[i]}`);
    
}