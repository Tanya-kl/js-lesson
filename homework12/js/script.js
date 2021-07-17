let number = +prompt('Введите Ваше число');

    function calculate(number) {
        if (number < 1) {
        return NaN;
    }

         for (let i = 2; i < number; i++) {

         if (number % i === 0) {
              return i;
          }
           return "Делителем является введенное число";
        }
    }
    console.log(calculate(number));




