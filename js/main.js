var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const arr2 = arr.reduce((sum, item) => {
    return sum += item
});

console.log(arr2)