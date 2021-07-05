let number = prompt('Введите Ваше число');

function calculate(number){
    for(let i=2; i < number; i++) {
        if (number % i !== 0) {
             alert('делитель не найден');
        } else {
             alert('делителем является ' +number);
        }
        if (num < 1){
            console.log(typeof NaN);
        } else {
         return console.log(i);
        }
        }
    }
    calculate(number);