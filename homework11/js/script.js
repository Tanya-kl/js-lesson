function checkNum() {
 let num = prompt('Введите число');
    for(let i = 2; i < num; i++)
        if(num % i === 0) return false;
    return num > 1;

}
if (checkNum () === true){
    console.log('true');
    alert ('Число простое');
} else {
    console.log('false');
    alert ('Число составное');
}

