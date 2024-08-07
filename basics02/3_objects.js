// singleton
// literal(no singleton ), constructor(singleton) -declare objects /object literals
// Object.create - constructor

const mySym = Symbol("key")

const jsUser = {
    "full name": "Vaishnavi  Tonpe",
    [mySym] : "mykey1",
    name:"vaishnavi",
    age : 20,
    location : "aurangabad",
    email :  "vaishnavi@gmail.com",
    isLoggedIn: false,
    lastLoginDays:["Monday","Saturday"]
}

// console.log(jsUser.email);
// console.log(jsUser["email"]);

// console.log(jsUser.full name); --not allowed


console.log(jsUser["full name"]); 
console.log(jsUser[mySym]); 
console.log(typeof jsUser.mySym); 

jsUser.email ="vaishnavi@google.com"
console.log(jsUser["email"]);

// Object.freeze(jsUser)
jsUser.email="vaishnavi@microsoft.com"
console.log(jsUser["email"]);

console.log(jsUser);


// functions

jsUser.greeting = function(){
    console.log("Hello user");
}

jsUser.greetingTwo = function(){
    console.log(`Hello user , ${this.name}`);
}

// console.log(jsUser.greeting);
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());