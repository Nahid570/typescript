"use strict";
// TS Array
let stringArr = ["one", "two", "three"];
let dates = ["one", "nine", 31];
let isLoading = ["yes", 1, true];
// isLoading = dates
// dates = isLoading
console.log(isLoading);
let test = [];
let bands = [];
// TS Tuples
let myTuple = ['Nahid', 123, false];
let mixed = ['Faraji', 1, true];
console.log(myTuple);
// myTuple = mixed
// myTuple.push("hello")
// myTuple[3] = 34
// TS Object
let obj;
obj = [];
console.log(typeof obj);
const exampleObject = {
    prop1: "Nahid",
    prop2: true
};
let evh = {
    name: "Nahid",
    active: false,
    albums: ['faraji', 1, 2, 3, 4],
};
console.log(evh);
let jennie = {
    name: "Jennie Kim",
    active: true,
    albums: ['Jennie', 3, 4]
};
// evh = jennie
jennie = evh;
console.log(jennie);
// evh = jennie
// jennie.age = 55 // Property 'age' does not exist on type 'Guitarist'
const guitarist = (guitarist) => {
    var _a;
    if (guitarist.name) {
        return `Hello ${(_a = guitarist.name) === null || _a === void 0 ? void 0 : _a.toUpperCase()}`;
    }
    return "Hello!";
};
console.log(guitarist(jennie));
// TS ENUMS
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 0] = "U";
    Grade[Grade["D"] = 1] = "D";
    Grade[Grade["C"] = 2] = "C";
    Grade[Grade["B"] = 3] = "B";
    Grade[Grade["A"] = 4] = "A";
})(Grade || (Grade = {}));
console.log(Grade.U);
