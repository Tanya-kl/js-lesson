// 1

// function factorial(n){
//     if (n===1||n===0 ){
//         return 1;
//     } else {
//         return n * factorial(n - 1);
//     }
// }
// factorial(3)
// console.log(factorial(3));

//2

// function pow(num, deg){
//     if (deg === 1){
//         return num;
//     }
//     return num * pow(num, deg-1);
// }
// pow(10, 2);
// console.log(pow(10, 2));

//3

function sum(a, b){
       if ( b === 0)
       return a;

       return sum(a + 1, b - 1);


}
console.log (sum(5,5));