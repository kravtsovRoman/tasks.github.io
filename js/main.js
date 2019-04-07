
var str = 'Very dfghjkldas ashdg jadgs hjdk asd';

var truncate = function (str, maxlength) {
    var newStr = '';

    if (str.length > maxlength) {
        newStr = str.slice(0, maxlength - 3) + '...';
    }
    else {
        newStr = str;
    }
    console.log(newStr);
}

truncate(str, 10)