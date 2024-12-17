const gameName = new String('aditya')

console.log(gameName[0])
// console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase())
console.log(gameName.charAt(4))
console.log(gameName.indexOf('y'))

const newString = gameName.substring(0,3);
console.log(newString);

const anotherString = gameName.slice(-5 , 0);
console.log(anotherString);
