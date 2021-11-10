/*var n1 = Number.parseInt(window.prompt('Digite um número')); recebe string e converte para int
var n2 = Number.parseInt(window.prompt('Digite um número')); recebe string e converte para double
var n3 = Number(window.prompt('Digite um número')); recebe string e converte para number em geral
var soma = n1 + n2 + n3;
window.alert(`Soma: ${soma}`);
*/

var nome = window.prompt('Qual é o seu nome?');
window.alert(nome);
document.write(`<h2>Seu nome tem ${nome.length} letras</h2>`);
document.write(`Seu nome tem ${nome.toUpperCase()} letras`);


var d = window.document.querySelector('p#hello');
d.style.color= 'red';