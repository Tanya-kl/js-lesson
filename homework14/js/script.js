
function padString(string, strLength, padStr, padSide = true) {
    let result = "";
    if (typeof string !== 'string') {
        return "Error with argument string"
    }
    if (typeof strLength !== 'number') {
        return "Error with argument strLength"
    }
    if (typeof padStr !== 'string') {
        return "Error with argument padStr"
    }
    if (typeof padSide !== 'boolean') {
        return "Error with argument padSide"
    }
    if (padSide === true && string.length < strLength) {
        result += string;
        for (let i = 0; i < strLength - string.length; i++) {
            result += padStr;
        }
        return result;
    } else if (padSide === false && string.length < strLength) {
        for (let i = 0; i < strLength - string.length; i++) {
            result += padStr;
        }
        result += string;
        return result;
    } else {
        return string.substr(0, strLength);
    }
}
console.log(padString('hello', 8, '*', 'right'));