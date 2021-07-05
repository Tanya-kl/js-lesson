
function mainFunction(callback){
    let number = prompt('Введите первое число');
    let degree = prompt('Введите второе число');
    return callback(number, degree);
}

function exponentiation(number, degree){
    let num = Math.pow(Number(number), Number(degree));
    alert(num);
}

function multiplay(number, degree) {
    let num1 = number * degree;
    alert(num1);
}

function division(number, degree){
    let num2 = number / degree;
    alert(num2);
}

function modulo(number, degree){
    let num3 = number % degree;
    alert(num3);
}
mainFunction(exponentiation);
mainFunction(multiplay);
mainFunction(division);
mainFunction(modulo);
alert(number, deg);