/*Array 

const num = [1,2,4,3,5]
console.log(num);
console.log(num[0]);

New array

let NewArr = []

num.forEach(function(num){
   NewArr.push(num)
});

console.log(NewArr);
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
*/
//  Mathods

// let myArr = Array.from("Choudhary");
// console.log(myArr);
// function func(){
//     console.log(Array.isArray({foo :123}));
//     func();
// }
const myArr = new Array(2,3,5,6,6,7)
// let arr = []
// myArr.forEach(function (myArr){
//     arr.push(myArr);
// });
// arr.push(9)
// arr.pop()
// arr.pop()
// myArr.unshift(8)
// myArr.shift()
// console.log(myArr.indexOf(5));

// const newArr = myArr.join()
// console.log(typeof(myArr));

// console.log(typeof(newArr));


// slice, splice

console.log("A",myArr);
const myn1 = myArr.slice(1,4)
console.log(myn1);

console.log("B ",myArr);
const myn3 = myArr.splice(1,4)
console.log(myn3);



