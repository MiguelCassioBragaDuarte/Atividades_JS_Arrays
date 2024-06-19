/*4. Crie um programa que peça ao usuário para digitar cinco elementos, adicione esses elementos a um array e depois peça ao usuário para digitar um elemento para contar quantas vezes esse elemento aparece no array.*/

const ler = require('readline-sync');

let elementos = [];

for (let i = 1; i < 6; i++) {
    let leitura = ler.question(i+". Informe um elemento: ");
    elementos.push(leitura);
}

item = ler.question("Informe um elemento digitado anteriormente: ");
cont = 0;
for (let i = 0; i < elementos.length; i++) {
    if(item === elementos[i]){
        cont++;
    }
}
console.log("A quantidade vezes que esse elemento aparece e: "+cont);