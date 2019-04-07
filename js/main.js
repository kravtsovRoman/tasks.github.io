
var str = 'viagra and XXX';
var target = ["viagra", "xxx"];

var checkSpam = function (string) {

    var pos = 0;

    while (true) {
        for (let i = 0; i < target.length; i++) {
            var foundPos = string.toLowerCase().indexOf(target[i], pos);
            if (~foundPos) {
                console.log(foundPos, ' - позиция со спамом');
            }
        }
        if (foundPos == -1) break;
        pos = foundPos + 1;
    }
}

console.log(
    checkSpam(str)
);