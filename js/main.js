arr = [5, 3, 8, 1, 10, 15, 22, 123, 0, 3, 12, 14, 2, 3, 4, 5555, 12, 2];

function filterRangeInPlace(arr, a, b) {
    // console.log(b)
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < a || arr[i] > b) {
            arr.splice(i, 1);
            i--;
            // console.log(i)
        }

    }
    return arr;
}

console.log(filterRangeInPlace(arr, 10, 20))