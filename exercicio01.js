
/*1. Crie um programa que peça ao usuário para digitar cinco números, adicione esses números a um array e depois exiba o maior número no array.*/
const ler = require('readline-sync');

let numeros = [];

for (let i = 1; i < 6; i++) {
    let numero = ler.questionFloat(i+". Informe o numero: ")
    numeros.push(numero)
}

let maior = 0;

for (let i = 0; i < numeros.length; i++) {
    if(numeros[i]> maior){
        maior = numeros[i];
    }
}

console.log("O maior numero da Array e: "+maior);