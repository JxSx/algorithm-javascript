const data = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];
const exch = (array, i, j) => {
    let temp = array[j];
    array[j] = array[i];
    array[i] = temp;
}

module.exports = {
    data, exch
}