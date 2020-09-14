const mergeSort = (array, newArr, left, right) => {
    if (left >= right) {
        return;
    }
    let mid = Math.floor((right + left) / 2);
    mergeSort(array, newArr, left, mid);
    mergeSort(array, newArr, mid + 1, right);
    merge(array, newArr, left, mid + 1, right);
}

const merge = (array, newArr, leftStart, rightStart, rightEnd) => {
    let leftEnd = rightStart - 1;
    console.log(`leftStart:${leftStart}, leftEnd: ${leftEnd}, rightStart: ${rightStart}, rightEnd: ${rightEnd}`)
    let newIndex = leftStart;
    let count = rightEnd - leftStart + 1;
    while (leftStart <= leftEnd && rightStart <= rightEnd) {
        if (array[leftStart] <= array[rightStart]) {
            newArr[newIndex] = array[leftStart];
            leftStart++;
            newIndex++;
        } else if (array[leftStart] > array[rightStart]) {
            newArr[newIndex] = array[rightStart];
            rightStart++;
            newIndex++;
        }
    }
    // 处理左区间剩余元素 
    while (leftStart <= leftEnd) {
        newArr[newIndex] = array[leftStart];
        leftStart++;
        newIndex++;
    }
    // 处理右区间剩余元素
    while (rightStart <= rightEnd) {
        newArr[newIndex] = array[rightStart];
        rightStart++;
        newIndex++;
    }
    // 拷贝排好序的数据到原数组中，方便下次循环，按照已排序的值进行比较
    for (let i = 0; i < count; i++) {
        array[rightEnd] = newArr[rightEnd]
        rightEnd--;
    }
    console.log(newArr, array)
}

if(module === require.main) {
    const { data } = require('./common');
    mergeSort(data, [], 0, data.length - 1)
    console.log(data)
}