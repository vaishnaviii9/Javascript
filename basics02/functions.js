// functions

function sayMyName() {
    console.log("Reference");

}

//sayMyName() //execute

// function addNumbers(num1, num2){ //num1,num2- parameters
//     console.log(num1+num2);
// }

// function addNumbers(num1, num2){ //num1,num2- parameters
//     let result = num1+num2
//     // console.log(result);

//     return result
// }


function addNumbers(num1, num2) { //num1,num2- parameters
    return num1 + num2
}

// addNumbers(4,9) //4,9-arguments
// addNumbers(4,"9")
// addNumbers(4,null)

const result = addNumbers(4, 9)
console.log("Result: ", result);

function loginUserMessage(username = "user") {
    if (!username) {
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("vaishnavi"))
// console.log(loginUserMessage(""))
console.log(loginUserMessage())


// rest operator / spread operator
function calculateCartPrice(...args) {
    let sum = 0;
    for (let i of args) {
        sum = sum + i;
    }
    return sum;
}

const totalPrice = calculateCartPrice(200, 300, 400);
console.log(`${totalPrice} is the total price `);

function example(val1, val2, ...num1) {
    return num1
}
console.log(example(200, 300, 500, 30000));

const user = {
    username: "user",
    price: 300
}
function handleObject(anyObject) {
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);

}

handleObject(user)

handleObject(
    {
        username: "abcd",
        price: 499
    }
)

// arrays

const myNewArray =[100,200,499,392]
function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));

console.log(returnSecondValue([283094,129890,2908,302,2040]));
