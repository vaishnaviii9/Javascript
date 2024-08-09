// getname();
// console.log(x);

console.log(getname);
var x=7

// function getname(){
//     console.log("hello");
    
// }


// arrow function

var getname = () => {
    console.log("This function behaves like a variable and not function");
    
}

// console.log(getname);


/*
execution context

1. memory - variable environment
key : value
eg- a:10
fn:{...}

2.code component -thread of execution
code executes one line at a time

js - sychronous single-threaded language
singlethreaded- executes one line at a time

*/

var n=2;
function square(num){ //num-parameter
    var ans = num *num
    return ans;
}
var sq2 = square(n); //n-arg
var sq4 = square(4);

