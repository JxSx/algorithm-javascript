const binaryTreeDataSource = {
    val: "F",
    left: {
        val: "B",
        left: {
            val: "A",
            left: null
        },
        right: {
            val: "D",
            left: {
                val: "C"
            },
            right: {
                val: "E"
            }
        }
    },
    right: {
        val: "G",
        right: {
            val: "I",
            left: {
                val: "H"
            }
        }
    }
};

const nAryTreeDataSource = {
    code: "china",
    name: "中国",
    children: [{
        code: '2973',
        name: '陕西',
        children: [{
            code: '2974',
            name: '西安',
            children: [
                { code: '2975', name: '西安市' },
                { code: '2976', name: '高陵县' }
            ]
        }, {
            code: '2980',
            name: '铜川',
            children: [
                { code: '2981', name: '铜川市' },
                { code: '2982', name: '宜君县' }
            ]
        }, {
            code: '2983',
            name: '宝鸡'
        }]
    }, {
        code: '3371',
        name: '新疆',
        children: [{
            code: '3430',
            name: '巴音郭楞蒙古自治州',
            children: [
                { code: '3431', name: '库尔勒市' },
                { code: '3432', name: '和静县' }
            ]
        }]
    }, {
        code: '3078',
        name: '四川'
    }]
};

module.exports = {
    binaryTreeDataSource,
    nAryTreeDataSource
}