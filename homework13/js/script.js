let number = +prompt('Введите число');
let deg = +prompt('Введите степень возведения числа');

function calculate(number, deg = 1) {
    if (typeof(number) !== 'number' && typeof(deg) !== 'number') {
        return alert('some error');
    }

    let result = Math.pow(Number(number), Number(deg));

    return alert(result);

}

calculate(number, deg);