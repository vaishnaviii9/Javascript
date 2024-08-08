// const tinderUser = new Object()
const tinderUser={}

tinderUser.id="123"
tinderUser.name="ABC"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser={
    email: "abcd@gmail.com",
    fullname : {
        userfullname: {
            firstname :"abcd",
            lastname : "xyz"
        }
    }
}

// console.log(regularUser.fullname);

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 ={1: "A", 2: "B"}
const obj2={3: "A", 4 :"B"}

// const obj3 = {obj1 ,obj2}
// const obj3 = Object.assign({},obj1, obj2)

const obj3 = {...obj1, ...obj2}

// console.log(obj3);

const users= [
    {
        id :1,
        email : "a@gmail.com"
    },
    {
        id :2,
        email : "a@gmail.com"
    },
    {
        id :3,
        email : "a@gmail.com"
    },
]

// console.log(users[1].email);

console.log(tinderUser);
console.log(Object.keys(tinderUser)); //store output in array

console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
 
console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course ={
    coursename: "js",
    price :"999",
    courseInstructor:"A"
}
// course.courseInstructor

const {courseInstructor : instructor} = course
// console.log(courseInstructor);
console.log(instructor);
 
// react
// const navbar =({company}) => {

// }
// navbar(company = "google")

// API's -json

// {
//     "name" :"abcd",
//     "coursename" :"js",
//     "price":"999"
// }

// api- array
// [
//     {},
//     {}
// ]

