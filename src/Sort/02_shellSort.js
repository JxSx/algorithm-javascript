const shellSort = array => {
    let gap = Math.floor(array.length / 2);

    let j;
    while (gap > 0) {
        for (let i = gap; i < array.length; i++) {
            let temp = array[i];
            for (j = i; j >= gap && array[j - gap] > temp; j -= gap) {
                console.count("计数")
                array[j] = array[j - gap];
            }
            array[j] = temp;
        }

        gap = Math.floor(gap / 2);
    }
    return array;
}

if(module === require.main) {
    const { data } = require('./common');
    console.log(shellSort(data))
}