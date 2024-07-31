/*
 primitive datatypes - call by value
7 - string, number, boolean, null, undefined, symbol,BigInt

 non primitive (reference ) datatypes - call by reference
array, objects, functions

 */

const score =100
const scoreValue =100.3
const isLoggedIn = false
const outsideTemp=null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

// const bigNumber = 393754700003n

const heros= ["abc", "hdioido", "edjoiheid"];
let myObj={
    name:"jcha",
    age:22,
}
const myFunction = function(){
    console.log("hello");
}

console.log(typeof outsideTemp);