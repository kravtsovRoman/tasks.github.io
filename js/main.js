
var str = 'george';

var ucFirct = function (string) {

    return string.charAt(0).toUpperCase() + string.slice(1) || 'String is empty';

}

console.log(

    ucFirct(str)

);
