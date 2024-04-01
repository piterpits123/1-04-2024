/**
 * o algoritmo ifelse serve para validação de dados, por exemplo :
 * if (variavel1 == variavel2){ algo irá acontecer se a variavel1 for igual a varivel2} else { algo irá acontecer se a variavel1 for diferente da variavel2}
 * 
 * if: nome do algoritmo
 * parênteses (): local onde se declaram os parâmetros ou expressão a ser validada
 * chaves{}: bloco de códigos a serem executados, ou seja, tudo que estiver dentro do bloco de códigos será executado
 * else: "senão" é onde serão executados os códigos, que estiverem dentro do bloco {}, caso a avaliação do algoritmo "if" retorne falsa
 * 
 * 
 * operadores lógicos:
 * 
 * == serve para comparar se uma variavel/valor é igual a outra
 * != serve para comparar se uma variavel/valor é diferente de outra
 * > serve para comparar se uma variavel/valor é maior que a outra
 * < serve para comparar se uma variavel/valor é menor que outra
 * >= serve para comparar se uma variavel/valor é maior ou igual a outra
 * <= serve para comparar se uma variavel/valor é menor ou igual a outra
 * 
 * se "falso": adicionar o ponto de exclamação no início da declaração de parâmetros/expressão, por exemplo:
 * if(variavel == variavel2) (bloco de código) aqui significa que : se a comparação da variavel1 com a variavel2 retornar falso, os códigos que estiverem dentro do bloco de código serão
 * executados, não havendo a necessidade do uso de cláusula "else"
 * 
 * criar um validador onde você irá declarar dua variáveis, cada uma com um valor DIFERENTE da outra, então haverá uma resposta diferente para cada situação
 * 
 * vamos criar dois inputs, onde cada input irá para cada uma das duas variáveis, ou seja:
 * <input txtVar1 = document.getElementById("txtvar1");
 * <input txtVar2 = document.getElementById("txtvar2");
 * 
 * txtVar1.value tem que ser comparado com a txtVar2.value
 * 
 * enviar os dados via console.log()
 */
function check(){
    var txtVar1 = document.getElementById("txtVar1");
    var txtVar2 = document.getElementById("txtVar2");
    
    if(txtVar1.value == txtVar2.value){
        console.log("true");
    }
    else{
        console.log("false");
    }
    
    };