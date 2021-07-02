function maxNum(num1, num2, num3){
    let max = 0;
    if(num1 < num2 && num3 < num2) {
        max = num2;
    } else if(num3 < num1){
        max = num1;
    } else {
        max = num3;
    }
    return max;
}
let arr = [];
for(let i = 0; i < 3; i++) {
    arr[i] = prompt("Enter a number");
}
console.log(maxNum.apply(this, arr));