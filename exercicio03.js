/*3. Crie um programa que peça ao usuário para digitar cinco elementos, adicione esses elementos a um array e depois exiba a quantidade de elementos no array.*/

const ler = require('readline-sync');

let elementos = [];

for (let i = 1; i < 6; i++) {
    let leitura = ler.question(i+". Informe um item: ")
    elementos.push(leitura)
}

let quant = elementos.length
console.log("A quantidade de itens e: "+quant);
