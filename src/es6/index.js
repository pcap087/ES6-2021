//caracteristicas del ecmascript 6
// 1 - parametros por defecto
//antes
function newFunction(name, age, country){
    var name = name || 'pablo';
    var age = age || 26;
    var country = country || 'PY';
    console.log(name, age, country);
}

//ahora, asignacion por defecto
function newfunction2(name = 'pablo', age = 26, country = 'PY'){
    console.log(name, age, country);
}
newfunction2();

// 2 - template literal = separar o unir varios elementos
//antes
let nombre = 'Pablo';
let apellido = 'Acosta';
let nombreCompleto = nombre + ' ' + apellido;
console.log(nombreCompleto);

//ahora, esta es la manera de como concatenar varias variables
let nombreCompleto2 = `${nombre} ${apellido}`;
console.log(nombreCompleto2);


// 3 - desestructuracion de elementos
//antes
let person = {
    'name': 'pablo',
    'age': 26,
    'country': 'PY'
}
console.log(person.name, person.age);

//ahora
let{name, age} = person;
console.log(name, age);

// 4 - operador de propagacion, unir diferentes elementos
let team1 = ['Pablo', 'cesar', 'martin'];
let team2 = ['valeria', 'yessi', 'alvaro'];

let education = ['david', ...team1, ...team2];
console.log(education);

// 5 - let variables
{
    var var1 = 'global var';
}
{
    let var2 = 'global let';
    console.log(var2);
    //solo esta disponible en el bloque de codigo en el cual ha sido definido
}
console.log(var1);

// 6 - const, las constantes nunca cambian de valor
const a = 'b';
a = 'a';
console.log(a);

// 7 - Parámetros en objetos
let nombre = 'pablo';
let edad = 26;
//es5
obj = {nombre: nombre, edad: edad};
//es6
obj2 = {nombre, edad};
console.log(obj2);

// 8 - Arrow Function
const names = [
    {name: 'Pablo', age: 26},
    {name: 'Martin', age: 26}
]

let listNames = names.map(function (item){
    console.log(item.name);
})

//las arrow function son funciones anonimas

let listNames2 = names.map(item => console.log(item.name));

const listNames3 = (name, age, country) => {
    //codigo que se le pasa varios parametros
}

const listName4 = name => {
    //codigo cuando se le pasa un parametro
}

const suma = num => num + 1; //

// 9 - Promesas, asincronismo, javascript no es sincronico
const helloPromise = () => {
    return new Promise((resolve, reject) => {
        //operador ternario
        true ? resolve('todo bien') : reject('todo mal')
    })
}

helloPromise()
    .then(response => console.log(response))
    .then(() => console.log('hola'))
    .catch(error => console.log(error));

// 10 - clases para manejar objetos y herencias en js
//constructor es un metodo para inicializar la clase
class calculator {
    constructor(){
        this.valueA = 0;
        this.valueB = 0;
    }
    sumar(valorA, valorB){ //se le pasa los dos elementos
        this.valueA = valorA; //asigna las variables de clase a los valores que recibo 
        this.valueB = valorB;
        return this.valueA + this.valueB;
    }
}
const calc = new calculator();
console.log(calc.sumar(2,2));

// 11 import y export : trabajar con modulos
import {hello} from './module';
hello();

// 12 - generator: es una funcion especial que retorna un conjuntos de valores segun el algoritmo definido
function* helloworld(){
    if(true){
        yield 'hello';
    }
    if(true){
        yield 'World';
    }
}
const generatorHello = helloworld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);







