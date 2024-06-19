/*6. Crie um programa que peça ao usuário para digitar seu nome e idade, crie um objeto com essas informações e depois exiba apenas o nome do objeto.*/

const ler = require('readline-sync');

let usuario = {};

usuario.nome = ler.question("Informe seu nome: ");
usuario.idade = ler.questionInt("Informe sua idade: ");
console.log(`Nome: ${usuario.nome}`)