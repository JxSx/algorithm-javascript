
/**
 * 广度优先遍历
 * 利用数组的shift方法模拟先进先出的队列
 * @param {*} list 
 */
function BFS(list) {
    while (list.length > 0) {
        console.count("计数：")
        const item = list.shift(); // 删除队列头元素
        console.log("name:", item.label, "value:", item.value)
        if (item.children) {
            list.push(...item.children);
        }
    }
}
const utils = require('../common/data');
const roots = [...utils.data]
BFS(roots);