let num = prompt('Введите целое число');

if (num > 0 ) {

    if (num.length === 1) {
        alert ( 'Число ' + num + ' положительное однозначное ');
        console.log(num.length);
    } else if (num.length === 2) {
        alert ( 'Число ' + num + ' положительное двузначное ');
    } else if (num.length === 3) {
        alert ( 'Число ' + num + ' положительное трехзначное ');
    } else if (num.length > 3) {
        alert ( 'Число ' + num + ' положительное многозначное ');
    }
}
else {
        alert('Число ' + num + ' отрицательное');
    }

//if (arr = 1) {
 //   alert('Число однозначноное');
//} else if (arr = 2) ;