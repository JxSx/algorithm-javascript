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
    let j;
    for (let i = 1; i < array.length; i++) {
        let temp = array[i];
        for (j = i; j >= 1 && array[j - 1] > temp; j--) {
            console.count("计数Improved")
            array[j] = array[j - 1];
        }
        array[j] = temp;
    }
    return array;
}
if (module === require.main) {
    // console.log(insertSort(data));
    console.log(insertSortImproved(data));
}