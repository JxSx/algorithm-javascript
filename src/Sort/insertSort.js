const { data, exch } = require('./common');
function insertSort(array) {
    for (let i = 1; i < array.length; i++) {
        for (let j = i; j > 0; j--) {
            console.count('计数')
            if (array[j - 1] > array[j]) {
                exch(array, j - 1, j)
            } else {
                break;
            }
        }
    }
    return array;
}

const insertSortImproved = array => {
    for (let i = 1; i < array.length; i++) {
        let temp = array[i];
        let j;
        for (j = i - 1; j >= 0 && array[j] > temp; j--) {
            console.count("计数")
            array[j + 1] = array[j];
        }
        array[j + 1] = temp;
    }
    return array;
}

console.log(insertSortImproved(data))