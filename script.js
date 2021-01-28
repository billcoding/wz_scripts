function 取随机数(a, b) {
    return randRange(a, b);
}

function 物品类型(itemId) {
    return itemType(itemId)
}

function 抽奖物品属性(type) {
    return lotteryItemAttr(type);
}

function randRange(a, b) {
    if (!(typeof (a) === "number" && typeof (b) === "number")) {
        return 0;
    }
    if (a < 0) {
        a = 0;
    }
    if (b < a) {
        b = a + 1;
    }
    if (a == b) {
        return a;
    }
    return parseInt(Math.random() * (b - a + 1) + a);
}

function itemType(itemId) {
    return parseInt((itemId + "")[0])
}

function lotteryItemAttr(type) {
    var maxI = 10;
    var maxJ = 6;
    var double = 10;
    if (type < 0) {
        type = 0;
    }
    if (type > maxI) {
        type = 10;
    }
    var attrs = [];
    for (var i = 0; i < maxI; i++) {
        var a = [];
        for (var j = 0; j < maxJ; j++) {
            a.push((i + 1) * double);
        }
        attrs.push(a);
    }
    return attrs[type - 1];
}