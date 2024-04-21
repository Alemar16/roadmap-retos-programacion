
//1. Crea ejemplos utilizando todos los tipos de operadores de tu lenguaje:

//OPERADORES ARITMETRICOS
console.log("--------OPERADORES ARITMETRICOS-------")
// usare una funcion para demostrar el uso de cada operador

// Definición de variables con valores numéricos
let num1 = 10;
let num2 = 5;

function calcularOperaciones(n1, n2){
    console.log(`Valores de entrada: num1 = ${n1}, num2 = ${n2}`)

    //operador de SUMA ( + )
    let suma = n1  + n2;
    console.log(`${n1} + ${n2} = ${suma} suma`);

    //operador de RESTA ( - )
    let resta = n1 - n2;
    console.log(`${n1} - ${n2} = ${resta}`)

    //operador de MULTIPLICACION ( * ) 
    let multiplicacion = n1 * n2;
    console.log(`${n1} * ${n2} = ${multiplicacion}`)

    //operador de DIVICION ( / )
    let divicion = n1 / n2;
    console.log(`${n1} / ${n2} = ${divicion}`)

    //operador de MODULO ( % ) Su función es calcular el resto de la división entre dos números.
    let modulo = n1 % n2;
    console.log(`${n1} % ${n2} = ${modulo}`)

    //operador de POTENCIACION ( ** )
    let potencia = n1 ** n2;
    console.log(`${n1} ** ${n2} = ${potencia}`)
}
calcularOperaciones(num1, num2);


//OPERADORES LÓGICOS
console.log("--------OPERADORES LOGICOS-------")
function operadoresLogicos() {
    // Definición de variables con valores booleanos
    let a = true;
    let b = false;

//OPERADOR AND (En una expresión AND, si al menos uno de los operandos es false, la expresión completa devolverá false.)

// Tabla de verdad para el operador AND (&&):
// a       b       a && b
// true    true    true
// true    false   false
// false   true    false
// false   false   false

console.log("--------OPERADOR AND-------")
    // Operador AND lógico (&&) para a y b
    let andLogico1 = a && b;
    console.log(`a && b = ${andLogico1}`);

    // Operador AND lógico (&&) para b y a
    let andLogico2 = b && a;
    console.log(`b && a = ${andLogico2}`);

    // Operador AND lógico (&&) para a y a
    let andLogico3 = a && a;
    console.log(`a && a = ${andLogico3}`);

    // Operador AND lógico (&&) para b y b
    let andLogico4 = b && b;
    console.log(`b && b = ${andLogico4}`);

    console.log("--------OPERADOR OR-------")
//OPERADOR OR (En una expresión OR, si al menos uno de los operandos es true, la expresión completa devolverá true.)

// Tabla de verdad para el operador OR (||):
// a       b       a || b
// true    true    true
// true    false   true
// false   true    true
// false   false   false

    // Operador OR lógico (||) para a y b
    let orLogico1 = a || b;
    console.log(`a || b = ${orLogico1}`);

    // Operador OR lógico ||&) para b y a
    let orLogico2 = b || a;
    console.log(`b || a = ${orLogico2}`);

    // Operador OR lógico (||) para a y a
    let orLogico3 = a || a;
    console.log(`a || a = ${orLogico3}`);

    // Operador OR lógico (||) para b y b
    let orLogico4 = b || b;
    console.log(`b || b = ${orLogico4}`);


    console.log("--------OPERADOR NOT -------")
// OPERADOR NOT lógico (invierte el valor de un operando booleano. Si el operando es true, ! lo convierte en false, y si el operando es false, ! lo convierte en true.)

// Tabla de verdad para el operador NOT (!):
// a       !a
// true    false
// false   true

    // Usar el operador NOT lógico con las variables
    let notA = !a; // Invierte el valor de a
    let notB = !b; // Invierte el valor de b

    console.log(`El valor original de a es ${a}, con NOT aplicado es ${notA}`);
    console.log(`El valor original de b es ${b}, con NOT aplicado es ${notB}`);
}

operadoresLogicos();

console.log("--------OPERADORES DE COMPARACION-------")
//OPERADORES  DE COMPARACION
//Los operadores de comparación ( se utilizan para comparar dos valores y devolver un resultado booleano (true o false) en función de la comparación.) 

function operadoresComparacion() {
    // Definición de valores para comparar
    let a = 10;
    let b = 5;

    console.log(`Comparando a = ${a} con b = ${b}:`);

    // Operador de igualdad (==)
    console.log(`a == b: ${a == b}`); // false

    // Operador de desigualdad (!=)
    console.log(`a != b: ${a != b}`); // true

    // Operador de igualdad estricta (===)
    console.log(`a === b: ${a === b}`); // false

    // Operador de desigualdad estricta (!==)
    console.log(`a !== b: ${a !== b}`); // true

    // Operador menor que (<)
    console.log(`a < b: ${a < b}`); // false

    // Operador mayor que (>)
    console.log(`a > b: ${a > b}`); // true

    // Operador menor o igual que (<=)
    console.log(`a <= b: ${a <= b}`); // false

    // Operador mayor o igual que (>=)
    console.log(`a >= b: ${a >= b}`); // true
}
operadoresComparacion();

console.log("--------EJERCICIO ADICIONAL-------")
//-----EJERCICIO OPCIONAL-----------
// Crea un programa que imprima por consola todos los números comprendidos entre 10 y 55 (incluidos), pares, y que no son ni el 16 ni múltiplos de 3.

function ejercicioReto(){
  for (let i = 10; i <= 55; i++){//bucle entre 10 y 55
    if (i % 2 === 0){//si es par
        if (i !== 16){//no muestra 16
            if(i % 3 !==0){//no muestra multiplos por 3
                console.log(i)
            }
        }
    }
}  
}
ejercicioReto()
