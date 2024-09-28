// const arr = [10,20,30,40,50];

// for(let item of arr){
//     console.log(item)
// }

// forEach, map
//   (item) =>

// arr.forEach((item) => item )

// function show(a){
//     console.log(a)
// }

// const show = (a) => {
//     console.log(a)
// }
const arr = [10, 20, 30, 40, 50];
// arr.forEach((a) => {
//     console.log(a)
// })
// let sum = 0;
// arr.forEach((item) => {
//   sum += item
// });
// console.log(sum)

// callback parameters (item, index, whole array)
arr.forEach((item,index,a) => {
  console.log("item:",item, "index:",index,a)
});