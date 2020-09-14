const { data } = require('./common');
//  0  1   2   3  4   5   6   7   8   9  10, 11  12  13  14
// [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48]  索引9赋值给索引0
// [2, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48]  索引1赋值给索引9
// [2, 3, 38, 5, 47, 15, 36, 26, 27, 44, 46, 4, 19, 50, 48]

// [2, 3, 19, 5, 47, 15, 36, 26, 27, 44, 46, 4, 19, 50, 48]
// [2, 3, 19, 5, 47, 15, 36, 26, 27, 44, 46, 4, 47, 50, 48]
// [2, 3, 19, 5, 4, 15, 36, 26, 27, 44, 46, 4, 47, 50, 48]
// [2, 3, 19, 5, 4, 15, 36, 26, 27, 38, 46, 44, 47, 50, 48]
const partition = (array, low, high) => {
    let pivot = array[low];
    while (low < high) {
        while (low < high && array[high] >= pivot) {
            high--;
        }
        array[low] = array[high];
        console.log(`Index:${high}的值：${array[high]}赋值给Index:${low}`);
        while (low < high && array[low] <= pivot) {
            low++;
        }
        array[high] = array[low];
        console.log(`Index:${low}-${array[low]}赋值给Index:${high}`);
    }
    array[low] = pivot;
    console.log(`基准值:${pivot}赋值给Index:${low}`);
    return low;
}

const quickSort = (array, low, high) => {
    if (low >= high) return;
    let mid = partition(array, low, high);
    quickSort(array, low, mid - 1);
    quickSort(array, mid + 1, high)
    return array;
}
if(module === require.main) {
    console.log(quickSort(data, 0, data.length - 1));
}