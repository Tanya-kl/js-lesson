let action = prompt('Введите действие "add, sub, mult, div"');

let num1 = prompt('Введите первое число');
let num2 = prompt('Введите второе число');

if ( action == 'add') {
 alert ('H-p:" ' + num1 + '+' + num2 + ' = ' + (Number(num1) + Number(num2))+  '"');

}else if ( action == 'sub') {
 alert ('H-p:" ' + num1 + '-' + num2 + ' = ' + (Number(num1) - Number(num2))+  '"');
}else if ( action == 'mult') {
 alert ('H-p:" ' + num1 + '*' + num2 + ' = ' + (Number(num1) * Number(num2))+  '"');
}else if ( action == 'div') {
 alert ('H-p:" ' + num1 + '/' + num2 + ' = ' + (Number(num1) / Number(num2))+  '"');
}else {
 alert( 'Вы ввели неизвестное действие');
}

