// //formula-1
// function add(num1, num2){
//     return num1 + num2;
// }
// const total = add( 15, 20);
// console.log(total);



// //formula-2
// function add(num1, num2){
//     if(num2 == undefined){
//         num2 = 0;
//     } 
//     return num1 + num2;
// }
// const total = add( 15, 20);
// console.log(total);


// //formula-3
// function add(num1, num2){
//     num2 = num2 || 20;
//     return num1 + num2;
// }
// const total = add(15);
// console.log(total);



//formula ES6
function add(num1, num2 = 20){
    return num1 + num2;
}
const total = add(15);
console.log(total);