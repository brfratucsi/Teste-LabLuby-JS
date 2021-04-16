// Tarefa 10
function valorComum(array1, array2){
    let array3 = array1.filter(number => array2.includes(number));
  
    console.log(array3)
    return array3;
}
  
valorComum([6, 8], [8, 9]);




/*
========== Tarefa 9 ========== 

function splitArray(array1, qtd){
    let array2 = []; 

    for ( i=0 ; i<array1.length ; i=i+qtd ) {
      array2.push(array1.slice(i, i + qtd));
    }
    
    console.log(array2);
}

splitArray([1,2,3,4,5], 2);

==============================
*/



/*
========== Tarefa 8 ========== 

function removerAninhamento(array1){
    let array2 = [];
    array2 = array1.flat();

    console.log(array2);
    return array2;
}

removerAninhamento([1, 2, [3], [4, 5]]);

==============================
*/



/*
========== Tarefa 7 ========== 

let myArray1 = [1,2,3,4];
let myArray2 = [1,2,3,4];

function comparaIgual(array1,array2){
    array1 = array1.toString();
    array2 = array2.toString();

    console.log(array1===array2);
}

comparaIgual( myArray1,myArray2 );

==============================
*/



/*
========== Tarefa 6 ========== 

function filtro(array1){
    let array2 = new Set();

    for(i=0 ; i< array1.length ; i++){
        array2.add(array1[i]);
    }

    console.log(array2);
    return array2;
 }

 filtro([1,2,3,3,2,4,5,4,7,3]);

==============================
*/



/*
========== Tarefa 5 ========== 

function filtro(array1,num1,num2){
    let array2 = [];

    array2 = array1.filter(array3 => array3 !== num1 && array3 !== num2 );

    console.log(array2);
}

filtro([5,4,3,2,5] , 5,3);

==============================
*/



/*
========== Tarefa 4 ========== 

const vetorVetor = [ ['c',2],['d',4] ];

function converterObjeto(valorEntrada){
    valorEntrada = Object.fromEntries(valorEntrada);
    return valorEntrada;
}

const vetorChaveValor = converterObjeto(vetorVetor);
console.log(vetorChaveValor);

==============================
*/



/*
========== Tarefa 3 ========== 

let myArray = [1,2,'',undefined];

function filtro(valor){
    num = 10;

        for( i=0 ; i<valor.length ; i++ ){
                if(typeof valor[i] != typeof num){
                    valor.splice(i,i);
                }
            }
    console.log(valor);
}

 filtro(myArray);

==============================
*/



/*
========== Tarefa 2 ==========  

function inverter(array1){
    array2 = [];

    for( i=array1.length-1 ; i>-1 ; i-- ){
         array2.push(array1[i]);
    }

    console.log(array2);
}

inverter([1,2,3,4]);

==============================
*/



/*
========== Tarefa 1 ==========

let myArray = [];

function add(num, valor){
    for(i=0 ; i<num ; i++){
         myArray[i] = valor;
    }
}

add(3,'a');
console.log(myArray);

==============================
*/
