const { data, exch } = require('./common');

const bubbleSort = array => {
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j < array.length - 1 - i; j++) {
            console.count("计数")
            if (array[j] > array[j + 1]) {
                exch(array, j, j + 1)
            }
        }
        console.log(array)
    }
    return array;
}

console.log(bubbleSort(data))