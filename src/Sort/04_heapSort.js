
const { data, exch } = require('./common');
function adjustHeap(arr, root, length) {
    // 从左节点，右节点找出大于根节点的值，交换
    const left = root * 2 + 1;
    const right = root * 2 + 2;
    let largist = root;
    if (left < length && arr[left] > arr[largist]) {
        largist = left;
    }
    if (right < length && arr[right] > arr[largist]) {
        largist = right;
    }
    if (largist != root) {
        console.count("计数")
        exch(arr, root, largist); //上层变动，可能导致底层的堆顺序有问题，所以需要再调整
        adjustHeap(arr, largist, length)
    }
}

/**
 * 改进版的构建堆，减少交换次数
 * @param {*} array 
 * @param {*} rootIndex 
 * @param {*} length 
 */
const adjustHeapI = (array, rootIndex, length) => {
    let temp = array[rootIndex];
    for (let maxIndex = rootIndex * 2 + 1; maxIndex < length; maxIndex = 2 * maxIndex + 1) {
        if (maxIndex + 1 < length && array[maxIndex] < array[maxIndex + 1]) {// 左右节点比较出最大值
            maxIndex++;
        }
        if (array[maxIndex] > temp) { // 最大值同根节点进行比较
        console.count("计数Improved")
        array[rootIndex] = array[maxIndex];
        rootIndex = maxIndex;
      } else {
        break;
      }
    }
    array[rootIndex] = temp; // 将temp放在最终的位置
  }

function heapSort(arr) {
    const start = Math.floor(arr.length / 2) - 1;
    // 1.构建堆
    for (let i = start; i >= 0; i--) {
        adjustHeap(arr, i, arr.length);
    }
    // 2. 交换堆顶元素和末尾元素
    // 3. 重新调整剩余元素的堆结构
    for (let j = arr.length - 1; j > 0; j--) {//注意j的变化，是调整剩余元素的堆结构
        exch(arr, 0, j);
        adjustHeap(arr, 0, j);
    }
    
    return arr;
}
if (module === require.main) {
    console.log(heapSort(data));
}