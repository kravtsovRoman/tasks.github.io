

function camelize(string) {
    var newArr = [];
    var arrString = string.split('-');
    for (let i = 0; i < arrString.length; i++) {
        if (i !== 0) {
            var firstChar = arrString[i].charAt(0).toUpperCase();
            var allWord = arrString[i].split('');

            allWord.splice(0, 1, firstChar);
            newArr.push(allWord.join(''))
        }
        else {
            newArr.push(arrString[i])
        }
    }
    return newArr.join('');
}

console.log(camelize('list-style-type'))
console.log(camelize('background-color'))
console.log(camelize('inline-flex'))
console.log(camelize('text-align'))