const { data, exch } = require('./common');

const select = array => {
    for (let i = 0; i < array.length - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < array.length; j++) {
            console.count('计数')
            if (array[j] < array[minIndex]) {
                minIndex = j;
            }
        }
        exch(array, i, minIndex)
    }
    return array;
}

console.log(select(data))