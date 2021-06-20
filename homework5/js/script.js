let user = {
    name: "John",
    surname : "Smith",
};
user.name = "Pete";
delete user.name;
alert( user.surname );

const user1 = {
    name: "John"
};
user1.name = "Pete";
alert(user1.name);

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};
let sum = salaries.John + salaries.Ann + salaries.Pete;
alert(sum);
