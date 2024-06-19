/*8. Leia um array de 10 posições. Contar e escrever quantos valores pares ele possui.*/

const ler = require('readline-sync');

let numeros = [];

for (let i = 1; i < 11; i++) {
    let numero = ler.questionInt(i+". Informe um numero: ");
    numeros.push(numero);
}
cont = 0;
for (let i = 0; i < numeros.length; i++) {
    if(numeros[i]%2 === 0){
        cont++;
    }
}
console.log("A quantidade numeros pares e: "+cont);