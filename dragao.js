// JavaScript source code
/*Desafio
Daenerys � a khaleesi dos Dothraki. Juntamente com Drogon, eles v�o atr�s do Tyrion, para tentar dominar Westeros. Ela possui, al�m do seu drag�ozinho, um rastreador que mede o n�vel de energia de qualquer ser vivo. Todos os seres com o n�vel menor ou igual a 8000, ela considera como se fosse um inseto. Quando passa deste valor, que foi o caso do Drogon, ela se espanta e grita �Mais de 8000�. Baseado nisso, utilize a mesma tecnologia e analise o n�vel de energia dos seres vivos.

Entrada
A entrada � composta por v�rios casos de teste. A primeira linha cont�m um n�mero inteiro C relativo ao n�mero de casos de teste. Em seguida, haver� C linhas, com um n�mero inteiro N (100 <= N <= 100000) relativo ao n�vel de energia de um ser vivo.

Sa�da
Para cada valor lido, imprima o texto correspondente.*/

// TODO: complete os espa�os em branco com sua solu��o para o problema
// a fun��o gets � implementada dentro do sistema para ler as entradas(inputs) dos dados e a fun��o print para imprimir a sa�da (output) de dados e j� pula uma linha ("\n")
// Abaixo segue um exemplo de c�digo que voc� pode ou n�o utilizar

let input = gets();

let qtdEntradas = parseInt(input);
let nivelEnergia;

//Resolva o desafios nos espa�os em branco
for(let i = 0; i < qtdEntradas; i++){
    input = gets();
    nivelEnergia = parseInt(input);
    
    if(nivelEnergia > 8000      ){
        print   ("Mais de 8000!"       )
    }else{
        print ("Inseto!")
    }
}