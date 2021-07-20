const arr = [1, 2, 3, -1, -2, -3];

function someNumbers (array){

    const exampleArr = [];

    for ( let i = 0; i < array.length; i++ ){
        if(array[i] > 0){
            exampleArr.push(array[i]);
        }
        }
    return(exampleArr);
    // if (exampleArr.length === 0){ это правильная проверка?
    //     console.log(null);
    }
console.log(someNumbers(arr));
