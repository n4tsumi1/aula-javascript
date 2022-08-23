// JavaScript source code
/*Desafio
Voc� est� na feira com a sua sacola e parou em uma banca. O feirante lhe entregou piment�es amarelos e vermelhos. Agora iremos somar os pimet�es amarelos e vermelhos para descobrir o total de piment�es na sacola.  Voc� receber� 2 inteiros que devem ser lidos e armazenados nas vari�veis A (piment�es amarelos) e B (piment�es vermelhos). Fa�a a soma de A e B atribuindo o seu resultado na vari�vel X (total de piment�es). Apresente X como descrito na mensagem de exemplo abaixo. N�o apresente outra mensagem al�m da mensagem especificada.

Entrada
A entrada cont�m 2 valores inteiros, separados por um espa�o.

Sa�da
Imprimir a mensagem "X = " (sendo a letra X mai�scula) seguido pelo valor da vari�vel X e pelo final de linha. Assegure que exista um espa�o antes e depois do sinal de igualdade.*/

// IMPORTANTE: As fun��es "gets" e "print" s�o acess�veis globalmente e t�m as seguintes funcionalidades: 
// - "gets()" : l� UMA linha com dados de entrada (inputs) do usu�rio;
// - "print()": imprime um texto de sa�da (output) e pula uma linha ("\n") automaticamente;

let pimentoes_amarelos = parseInt(gets()); 
let pimentoes_vermelhos = parseInt(gets()); 

let total = pimentoes_amarelos  + pimentoes_vermelhos; 
 
print("X = " +  total );