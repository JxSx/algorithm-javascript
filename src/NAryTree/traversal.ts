import { N_ARY_TREE_DATA_SOURCE, Area } from '../common/data';
/**
 * 深度优先遍历
 * @param {Area} root 
 * @param {string[]} arr 
 */
function DFS(root: Area, arr: string[] = []) {
    if (!root) return;
    arr.push(root.name);
    if (root.children) {
        root.children.forEach(element => {
            DFS(element, arr);
        });
    }
    return arr;
}
console.log("深度优先遍历：", DFS(N_ARY_TREE_DATA_SOURCE));

/**
 * 广度优先遍历，返回一维数组
 * @param {Area} root 
 */
var BFS = function (root: Area) {
    let queue: Area[] = []; // 队列，先进先出
    let result: string[] = [];
    queue.push(root);
    while (queue.length > 0) {
        let node: any = queue.shift();
        result.push(node.name);
        if (node.children) {
            node.children.forEach((element: Area) => {
                queue.push(element);
            });
        }
    }
    return result;
};

console.log("广度优先遍历：", BFS(N_ARY_TREE_DATA_SOURCE));

/**
 * 层序遍历
 * @param root 
 */
var levelOrder = function (root: Area) {
    let queue = []; //
    let result = [];
    queue.push(root);
    while (queue.length > 0) {
        let size = queue.length; // 当前层级的个数
        let levelArr = [];
        for (let i = 0; i < size; i++) { // 嵌套一层循环，处理每个层级的数据
            const node: any = queue.shift();
            levelArr.push(node.name);
            if (node.children) {
                node.children.forEach((element: Area) => {
                    queue.push(element);
                });
            }
        }
        result.push(levelArr);
    }
    return result;
};

console.log("层序遍历：", levelOrder(N_ARY_TREE_DATA_SOURCE));
