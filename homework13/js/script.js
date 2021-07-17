let number = +prompt('Введите число');
let deg = +prompt('Введите степень возведения числа');

function calculate(number, deg = 1) {
    if (isNaN(number) && isNaN(deg)){
        return alert('some error');
    }

    let result = Math.pow(Number(number), Number(deg));

    return alert(result);

}

calculate(number, deg);