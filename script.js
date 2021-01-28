function 取随机数(a, b) {
    return randRange(a, b);
}

function 物品类型(itemId) {
    return itemType(itemId)
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