
let string = prompt('Введите Вашу строку');
let number = prompt('Введите желаемую длинну строки');
let symb = Symbol("*");
let sub = string.substr(0, number);

function padString(string, number, symb, Boolean='right') {
    if (string === typeof('undefined') && number === typeof('undefined')){
        alert('Вы не ввели строку');
    } else if (isNaN(number)) {
        alert('Вы ввели не число');
    } else if (number > string){
        alert(string+ $`symb`);
    } else if (string > number) {
        alert(sub);
    }
}

padString(string, number, Boolean='right',symb);
console.log(string, number, Boolean='right',symb);