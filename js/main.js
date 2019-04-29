arr = [5, 3, 8, 1, 10, 15, 22, 123, 0, 3, 12, 14, 2, 3, 4, 5555, 12, 2];

function sortReverse(arr) {
    arr.sort(compareNumeric).reverse()

    return arr;
}

function compareNumeric(a, b) {
    if (a > b) return 1;
    if (a < b) return -1;
}

console.log(sortReverse(arr))