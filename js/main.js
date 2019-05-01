var arr = [1, 2, 3, 4, 5];

function getSums(arr) {
    var arrSum = [];

    arr.reduce(function (sum, item) {
        sum += item;
        arrSum.push(sum);
        return sum;
    }, 0);

    return arrSum;
}

console.log(getSums(arr));