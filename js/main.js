
var obj = {
    className: 'open menu'
};

function addClass(obj, cls) {
    var arrClass = obj.className.split(' ');
    for (var i = 0; i < arrClass.length; i++) {
        if (arrClass[i] === cls) {
            break;
        }
        else {
            arrClass.push(cls);
            break;
        }
    }
    obj.className = arrClass.join(' ');
    return obj;
}

console.log(addClass(obj, 'new'))
console.log(addClass(obj, 'me'))
console.log(addClass(obj, 'abc'))