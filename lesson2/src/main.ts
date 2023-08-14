

let username: string;
let meaningOfLife: number;
let isLoading: boolean;
let summer: any;

username = "Faraji"
meaningOfLife = 22
isLoading = true
summer = "Cool Weather"
summer = true
summer = 345

console.log(summer);

const sum = (a: number, b: number) => {
    return a+b;
}

let val = sum(1,2);
console.log(val);

// Union Types

let checkUnion: string | number;

checkUnion = "true"
console.log(checkUnion);

checkUnion = 21635

console.log(checkUnion);

// checkUnion = false  // Type 'boolean' is not assignable to type 'string | number'

let re: RegExp = /\w+/g



