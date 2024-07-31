const name="vaish"
const repoCount = 50
// console.log(name + repoCount + "Value");
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName= new String('Pubg-google-com')
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('g'));
const newString = gameName.substring(0,2)
console.log(newString);

const anotherString = gameName.slice(0,2)
console.log(anotherString);

const newStringOne ="       vaish      "
console.log(newStringOne);
console.log(newStringOne.trim());

const url="https://vaish.com/vaish%20t"
console.log(url.replace('%20','-'))

console.log(url.includes('google'));

console.log(gameName.split('-'));