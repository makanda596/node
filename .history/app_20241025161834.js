// const number = 8
// if (number < 10) {
//     console.log('small number')
// } else {
//     console.log('large number')
// }
// console.log('hello world')
// console.log(__dirname)
// setInterval(() => {
//     console.log("hello there")
// }, 3000)

//MODULES
//every file in module is commonJS

const names = require('./4-names')  //We are importing the two variables from the -4names files by require
console.log(names);
