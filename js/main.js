

function f() {
    var summ = 0;
    for (var i = 0; i < arguments.length; i++) {
        summ += arguments[i];
    }
    return summ;
}

console.log(f(1, 2, 3, 4, 5, 5));