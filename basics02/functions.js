// functions

function sayMyName(){
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


function addNumbers(num1, num2){ //num1,num2- parameters
    return num1+num2
}

// addNumbers(4,9) //4,9-arguments
// addNumbers(4,"9")
// addNumbers(4,null)

const result = addNumbers(4,9)
console.log("Result: ",result);

function loginUserMessage(username = "user"){
    if(!username){
        console.log("Please enter a username");
        return 
            }
    return `${username} just logged in`
}

// console.log(loginUserMessage("vaishnavi"))
// console.log(loginUserMessage(""))
console.log(loginUserMessage())

