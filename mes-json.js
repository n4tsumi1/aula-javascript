// JavaScript source code
/*Desafio
Leia um valor inteiro entre 1 e 12, inclusive. Correspondente a este valor, deve ser apresentado como resposta o m�s do ano por extenso, em ingl�s, com a primeira letra mai�scula.

Entrada
A entrada cont�m um �nico valor inteiro.

Sa�da
Imprima por extenso o nome do m�s correspondente ao n�mero existente na entrada, com a primeira letra em mai�scula.*/

// IMPORTANTE: As fun��es "gets" e "print" s�o acess�veis globalmente e t�m as seguintes funcionalidades: 
// - "gets" : l� UMA linha com dados de entrada (inputs) do usu�rio;
// - "print": imprime um texto de sa�da (output) e pula uma linha ("\n") automaticamente;
// Abaixo segue o template de c�digo para este desafio, o qual pode ou n�o utilizar tais fun��es.

const monthNumber = gets();

//TODO: Complete o JSON "months" com os meses faltantes.
const months = {
  "1": "January",
  "2": "February",
  "3": "March",
  "4": "April",
  "5": "May",
  "6": "June",
  "7": "July",
  "8": "August",
  "9": "September",
  "10": "October",
  "11": "November",
  "12": "December"
  };
  


print(months[monthNumber]);