const marvel =["thor","spiderman","ironman"]
const dc =["superman","batman","flash"]

// marvel.push(dc)

// console.log(marvel);
// console.log(dc);

// console.log(marvel[3]);
// console.log(marvel[3][1]);

const all = marvel.concat(dc)
// console.log(marvel);
// console.log(dc);
// console.log(all);

const newAll = [...marvel, ...dc]
// console.log(newAll);

const newArr = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const realArr = newArr.flat(Infinity)
// console.log(realArr);


console.log( Array.isArray("ABC"));
console.log(Array.from("ABCD"));
console.log(Array.from({name:"vaish"})); //important


let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3));

