
var str = 'Very dfghjkldas ashdg jadgs hjdk asd';

var truncate = function (str, maxlength) {
    var newStr = '';

    return str.length > maxlength ?
        str.slice(0, maxlength - 3) + '...' : str
}

console.log(
    truncate(str, 10)
);