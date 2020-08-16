function DFS(list) {
    if (!list) return;
    list.forEach(item => {
        console.count("计数：")
        console.log("name:", item.label, "value:", item.value)
        DFS(item.children);
    });
}
const utils = require('../common/data');

DFS(utils.data);