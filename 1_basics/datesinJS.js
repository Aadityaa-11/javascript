// date is a object in javascript
//  dates is calculate from 1st jan of 1970
let myDate = new Date();

// console.log(myDate)
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toLocaleTimeString())
// console.log(myDate.toJSON())

// let mycreatedDate = new Date(2023 ,1,5)
// let mycreatedDate = new Date(2023,0 ,25, 5,3)
// let mycreatedDate = new Date("2024-01-24")  // only in this case 01 is january
let mycreatedDate = new Date("01-24-2024")
// console.log(mycreatedDate.toDateString())
// console.log(mycreatedDate.toLocaleDateString())

let myTimeStamp = Date.now()

// console.log(myTimeStamp)    //1733808862402(in mili sec) from 1st jan 1970