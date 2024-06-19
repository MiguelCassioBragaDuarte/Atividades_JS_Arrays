/*7. Faça um programa que leia um array de 10 posições para números inteiros. Depois de armazenar os valores, em um menu se digitar zero, finalize o programa; se for 1, mostre a lista na ordem direta; se for 2, mostre a lista na ordem inversa, se for 3 mostrar a soma total dos valores. Caso, o número for diferente de 1, 2 e 3 escreva uma mensagem informando que o código é inválido.*/

const ler = require('readline-sync');

let numeros = [];

for (let i = 1; i < 11; i++) {
    let numero = ler.questionInt(i+". Informe um numero: ");
    numeros.push(numero);
}

console.log("-------- Menu de Opções --------");
console.log("0 - Finalizar.");
console.log("1 - lista direta.");
console.log("2 - Lista inversa.");
console.log("3 - Soma dos valores.");
console.log("---------------------------------");
let opt = ler.questionInt("=> ")

switch (opt) {
    case 0:   
        break;
    case 1:
        for (let i = 0; i < numeros.length; i++) {
            console.log(`Numero na posição ${i}: ${numeros[i]}`);
        }   
        break;
    case 2:
        for (let i = numeros.length -1; i>=0 ; i--) {
            console.log(`Numero na posição ${i}: ${numeros[i]}`);
        } 
        break;
    case 3:
        let soma = 0;
        for (let i = 0; i < numeros.length; i++) {
        console.log(`Valor ${i}: ${numeros[i]}`);
        soma += numeros[i];
        }
        console.log("Soma total: "+soma)   
        break;

    default:
        console.log("Opção invalida!");
        break;
}