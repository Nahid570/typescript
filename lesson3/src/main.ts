
// TS Array
let stringArr: string[] = ["one", "two", "three"]
let dates: (string | number)[] = ["one", "nine", 31]
let isLoading: (string | number | boolean)[] = ["yes", 1, true]

// isLoading = dates
// dates = isLoading

console.log(isLoading);

let test = []

let bands: string[] = []

// TS Tuples

let myTuple: [string, number, boolean] = ['Nahid', 123, false]
let mixed = ['Faraji',1,true]

console.log(myTuple);

// myTuple = mixed
// myTuple.push("hello")

// myTuple[3] = 34


// TS Object

let obj: object

obj = []

console.log(typeof obj);

const exampleObject = {
    prop1: "Nahid",
    prop2: true
}

// exampleObject.prop2 = 67

// type Gutarist = {
//     name: string,
//     active?: boolean,
//     albums: (number | string)[]
// }

// Can be also use interface
interface Guitarist {
    name?: string,
    active: boolean,
    albums: (number | string)[]
}

let evh: Guitarist = {
    name: "Nahid",
    active: false,
    albums: ['faraji', 1, 2, 3, 4],
}

console.log(evh);

let jennie: Guitarist = {
    name: "Jennie Kim",
    active: true,
    albums: ['Jennie',3,4]
}

// evh = jennie

jennie = evh

console.log(jennie);

// evh = jennie

// jennie.age = 55 // Property 'age' does not exist on type 'Guitarist'


const guitarist = (guitarist: Guitarist) => {
    if(guitarist.name) {
        return `Hello ${guitarist.name?.toUpperCase()}`
    }
    return "Hello!"
}

console.log(guitarist(jennie));

// TS ENUMS

enum Grade {
    U,
    D,
    C,
    B,
    A
}

console.log(Grade.U);







