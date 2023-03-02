let x: number = 10;
x =16
console.log(x);

// inferencia x annotation

let y = 12;

// tipos basicos

let firstName: string = "Augusto";
let age: number = 31;
let isAdmin: boolean = true;

const myNumber: number[] = [1, 2, 3];

console.log(myNumber);
console.log(myNumber.length);

// tuplas

let myTuple: [number, string, string[]]
myTuple = [5, "teste", ["a","b"]]


// object literals -> {prop: value}
const user: {name: string; age: number} = {
   name: "Augusto", 
   age: 31,

};

console.log(user);
console.log(user.name);

// any

let a: any = 0
a = "teste";
a = true;
a = [];
a = 0;

// union type
let id: string  | number = "10"

id = 200
id = "Gusto"

// type alias
type myIdType = number  | string

const userId: myIdType = 10
const productId: myIdType = "000123"
const shirId: myIdType = 321

// enum
// tamanho de roupas (size: médio, size: pequeno)
enum Size {
    p = "pequeno",
    M = "médio",
    G = "Grande",
}

const camisa = {
    name: "camisa gola v",
    size: Size.G,
};

console.log(camisa);

// literal types
let test: "autenticado"  | null;

test  = "autenticado";
test = null;

// funcoes
function sum(a: number, b: number) {
    return a + b;    
} 

console.log(sum (12,12));

function sayHelloTo(name: string): string {
    return `Hello ${name}`

}

console.log(sayHelloTo("Gusto"));

// void nao possui retorno...
function logger(msn: string): void {
    console.log(msg);
}

logger("testee");

function greeting(name: string, greet?: string) {
    if(greet){
        console.log(`olá ${greet} ${name}`);
    }else {
        console.log(`Olá ${name}`); 
    }
}

greeting("jose");

//interfaces
 interface mathFunctionParams {
    n1: number;
    n2: number;
 }

 function sumNumber(nums: ,mathFunctionParams){
    return nums.n1 + nums.n2;
 }

console.log(sumNumber({n1:1, n2:2}));
function multiplyNumber(nums: mathFunctionParams) {
    return nums.n1 * nums.n2
}

const someNumbers: mathFunctionParams = {
    n1: 5,
    n2: 10
}

console.log(multiplyNumber(someNumbers));

// narrowing
//checagem tipos

function doSomething(info: number  | boolean){
    if(typeof info === "number"){
        console.log(`o numero é ${info}`)
        return;
    }
    console.log("Nao foi passado numero");

}

doSomething(5);
doSomething(true);

// generics

function showArraysItems<T>(arr: T[]){
    arr.forEach((item) => {
        console.log(`ITEM: ${item}`)

    })
}


const a1 = [1, 2, 3];
const a2 = ["a", "b", "c"];

showArraysItems(a1);
showArraysItems(a2);
 

// classes

class used {
    nome 
    role
    isApproved

    constructor(name: string, role: string, isApproved: boolean){
        this.nome = nome
        this.role = role
        this.isApproved = isApproved
    }

    showUserName(){
        console.log(`O nome do usuario é ${this.nome}`)
    }

    showUserRole(canShow: boolean){
        if (canShow){
        console.log(`O usuario é ${this.role}`);
    return;
}
        console.log("informação restrita");
    }
}

const xico = new used ("xico", "admin", true);
console.log(xico);

xico.showUserName();
xico.showUserRole(false);

// interfaces em Classes

interface Ivehicle {
    brand: String
    showBrand(): void
}

class Car implements Ivehicle{
    brand
    wheels

    constructor(brand: string, wheels: number){
        this.brand = brand
        this.wheels = wheels

    }

    showBrand(): void {
        console.log(`a marca do carro é ${this.brand}`);
    }
}

const fusca = new Car("vw", 4);
fusca.showBrand()


// herança

class superCar extends Car {
    engine

    constructor(brand: string, wheels: number, engine: number){
        super(brand, wheels);
        this.engine = engine;
    }
}

const a4 = new superCar("Audi", 4, 2.0);
console.log(a4);

a4.showBrand();

//decorators

// constructor decorator
function baseParamters(){
    return function<T extends {new (...args: any[]):{}}>(constructor: T){
        return class extends constructor{
            id = Math.random()
            createdId = new Date();
        };

    };
}

@baseParamters()
class person {
    name

    constructor(name: string){
        this.name = name
    }
}


const sam = new person("sam");

console.log(sam);

