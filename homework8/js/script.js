let enterYear = prompt ('Введите Ваш год рождения');
if (enterYear){
    let age = 2021- enterYear;
    alert('Ваш возраст '+ age);
}
else if ( enterYear == null|| enterYear === '') {
    alert('Жаль, что ты не захотел ввести свою дату рождения');
}

let city = prompt('В каком городе ты живешь');
switch (city) {
    case null:
        if (city == null||city ===''){
            alert('Жаль, что ты не захотел ввести свой город проживания');
        }
        break;
    case 'Киев':
        alert ('Ты живешь в столице Украины');
        break;
        case 'Москва':
            alert ('Ты живешь в столице Роccии');
            break;
    case 'Минск':
        alert ('Ты живешь в столице Беларуссии');
        break;
    default:
        alert('Ты живешь в городе ' + city);

}
let sport = prompt('Укажи твой любимый вид спорта');
switch (sport) {
    case null:
        if ( sport == null||sport ===''){
            alert('Жаль, что ты не захотел ввести твой любимый вид спорта');
        }
        break;
    case 'футбол':
        sport = 'Lionel Messi';
        alert('Круто, ты хочешь стать ' + 'Lionel Messi');
        break;
    case 'теннис':
        sport = 'Novak Djokovic';
        alert('Круто, ты хочешь стать ' + 'Novak Djokovic');
        break;
    case 'хоккей':
        sport = 'Bogdan Panasenko';
        alert('Круто, ты хочешь стать ' + 'Bogdan Panasenko');
        break;
    default:
        alert('Твой любимый вид спорта ' + sport);
}
//age = 2021- enterYear;
//let result = 'Тебе ' + age + 'лет '+ 'ты из ' + '\n' + city + 'хочешь играть как ' +  '\n' + sport;
//alert(result);