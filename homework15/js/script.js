const arr = [1, 2, 3, -1, -2, -3];

function someNumbers (params){
    const exampleArr = [];
    if (params.length === 0){
    alert('Нет значений');
    }
    for(i = 0; i < params.length; i++ ){
        if(params[i] > 0){
            alert('В массиве положительные числа');
            console.log(exampleArr);
            return (exampleArr.push(currentPositiveNumber));

        } else if(params[i] < 0){
            alert('В массиве отрицательные числа');
        }
    }
}

    //const exampleArr = (exampleArr.length === 0) ? null : exampleArr;
someNumbers (arr);