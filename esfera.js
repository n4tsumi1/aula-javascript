/*Desafio
Fa�a um programa que calcule e mostre o volume de uma esfera sendo fornecido o valor de seu raio (R). A f�rmula para calcular o volume �: (4/3) * pi * R3. Considere (atribua) para pi o valor 3.14159.

Dica: Ao utilizar a f�rmula, procure usar (4/3.0) ou (4.0/3), pois algumas linguagens (dentre elas o C++), assumem que o resultado da divis�o entre dois inteiros � outro inteiro.

Entrada
O arquivo de entrada cont�m um valor de ponto flutuante (dupla precis�o), correspondente ao raio da esfera.

Sa�da
A sa�da dever� ser uma mensagem "VOLUME" conforme o exemplo fornecido abaixo, com um espa�o antes e um espa�o depois da igualdade. O valor dever� ser apresentado com 3 casas ap�s o ponto.*/

// a fun��o gets � implementada dentro do sistema para ler as entradas(inputs) dos dados e a fun��o print para imprimir a sa�da (output) de dados e j� pula uma linha ("\n")
// Abaixo segue um exemplo de c�digo que voc� pode ou n�o utilizar

const PI = 3.14159;

let R = parseFloat(gets());

//TODO: Complete os espa�os em branco com uma poss�vel solu��o para o desafio
//Para precis�o num�rica utiliza-se o .toFixed(n)
let volume = (4/3) *  PI * Math.pow(R, 3);

print("VOLUME =          "  + volume.toFixed(3));