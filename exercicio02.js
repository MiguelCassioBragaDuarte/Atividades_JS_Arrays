//*2. Crie um programa que peça ao usuário para digitar cinco elementos e adicione esses elementos a um array. Depois, exiba o array.*/

const ler = require('readline-sync');

let elementos = [];

for (let i = 1; i < 6; i++) {
    let leitura = ler.question(i+". Informe um elemento: ")
    elementos.push(leitura)
}
console.log("----- itens Cadastrados -----=-");
for (let i = 0; i < elementos.length; i++) {
    console.log(`Item na posição ${i}: ${elementos[i]}`);
    
}