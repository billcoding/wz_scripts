var status = 0;
var 所需物品ID = 4000025;
// var properties = [
//     'Str', 'Dex', 'Int', 'Luk',
//     'Hp', 'Mp', 'Watk', 'Matk',
//     'Wdef', 'Mdef', 'Acc', 'Avoid',
//     'Hands', 'Speed', 'Jump', 'Owner'
// ];
//力量,敏捷,智力,运气
//HP,MP,物攻,魔攻
//物御,魔防,命中,回避
//手技,移速,跳跃力
//Potential1-3,是潜能,079客户端没有这个,剔除
//属于谁(这里用来做等级的标识)
//装备鉴定出来的品级 , 以及不同品级会改变的装备属性列表 , 以及属性叠加值
var 数组 = {
    "D": {
        属性s: ['Str', 'Dex', 'Int', 'Luk'],
        属性值: [10, 10, 10, 10]
    },
    "C": {
        属性s: ['Str', 'Dex', 'Int', 'Luk'],
        属性值: [20, 20, 20, 20]
    },
    "B": {
        属性s: ['Str', 'Dex', 'Int', 'Luk'],
        属性值: [40, 40, 40, 40]
    },
    "A": {
        属性s: ['Str', 'Dex', 'Int', 'Luk'],
        属性值: [60, 60, 60, 60]
    },
    "S": {
        属性s: ['Str', 'Dex', 'Int', 'Luk', 'Watk', 'Matk'],
        属性值: [80, 80, 80, 80, 80, 80]
    },
    "SS": {
        属性s: ['Str', 'Dex', 'Int', 'Luk', 'Watk', 'Matk', 'Hands'],
        属性值: [100, 100, 100, 100, 100, 100, 100]
    },
    "SSS": {
        属性s: ['Str', 'Dex', 'Int', 'Luk', 'Watk', 'Matk', 'Hands'],
        属性值: [150, 150, 150, 150, 150, 150, 150]
    }
} //;['D', 'C', 'B', 'A', 'S', 'SS', 'SSS'];
//
function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1) status++;
        if (status == 0) {
            var ii = Packages.server.MapleItemInformationProvider.getInstance();
            var item = cm.getInventory(1).getItem(1);
            var itemId = item.getItemId();
            if (item == null) {
                cm.sendOk("当前背包第一格没有装备 ！");
                cm.dispose();
            }
			            //cm.showEffect(false, "quest/party/clear");
            //cm.playSound(false, "Game/Bird");
           var text = "    #e 您好 ! 我是#r传说中的装备鉴定之神#k : \r\n";
            text += "是否确认使用一枚#v4000025#鉴定当前道具 ？ \r\n";
			text += "#b潜能等级分为：D-C-B-A-S-SS-SSS七档 等级随机升降 不会降低装备初始属性\r\n";
            text += "当前道具 ： \r\n";
            text += "#v" + itemId + "#\r\n";
            cm.sendYesNo(text);
        } else if (status == 1) {
            var ii = Packages.server.MapleItemInformationProvider.getInstance();
            if (cm.haveItem(所需物品ID, 1)) {
                item = cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy();
                try {
/*                     if (ii.isCash(item.getItemId())) {
                        cm.sendOk("对不起,点装不支持鉴定 ！");
                        cm.dispose();
                        return;
                    } */
                } catch (e) {
                    cm.dispose();
                    return;
                }
                //获取当前物品的现有等级
                var 装备头 = item.getOwner();
                var lv = "",
                    newLv = "";
                var 属性s, 属性值;
                var 新装备 = false;
                if (装备头 == "") {
                    //没有鉴定过的装备 
                    新装备 = true;
                } else {
                    lv = 装备头.substring(0, 装备头.length() - 1);
                }
                newLv = 随机属性ABC();
                if (lv != newLv) {
                    if (新装备) {
                        // 属性追加
                        属性s = 数组[newLv].属性s;
                        属性值 = 数组[newLv].属性值;
                        for (var i = 0; i < 属性s.length; i++) {
                            var 老 = item['get' + 属性s[i]]();
                            var 新 = 老 + parseInt(属性值[i]);
                            item['set' + 属性s[i]](新);
                        }
                    } else {
                        //replace new property
                        //5 , 10
                        //var opts = getNewProperty(数组[lv], 数组[newLv]);
                        //清空旧的属性
                        var oldPorps = 数组[lv].属性s;
                        var oldVals = 数组[lv].属性值;
                        for (var i = 0; i < oldPorps.length; i++) {
                            var currVal = item['get' + oldPorps[i]]();
                            var oldVal = oldVals[i];
                            item['set' + oldPorps[i]](currVal - parseInt(oldVal));
                        }
                        //设置新的
                        属性s = 数组[newLv].属性s;
                        属性值 = 数组[newLv].属性值;
                        for (var i = 0; i < 属性s.length; i++) {
                            var 老 = item['get' + 属性s[i]]();
                            var 新 = 老 + parseInt(属性值[i]);
                            item['set' + 属性s[i]](新);
                        }
                    }
                }
                item.setOwner(newLv + "级");
                Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, true);
                Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
                cm.gainItem(所需物品ID, -1);
                cm.sendOk("恭喜,鉴定成功 , 快看看你的包袱吧 ！");
                cm.worldMessage("[装备鉴定]]：恭喜[" + cm.getChar().getName() + "]成功使用了装备鉴定功能,获得[" + newLv + "]级道具 ！");
                cm.dispose();
            } else {
                cm.sendOk("对不起,你没有足够的#v" + 所需物品ID + "# ！");
                cm.dispose();
                return;
            }
        } else {
            cm.dispose();
        }
    }
}

function 随机属性ABC() {
    //
    //9 8 7 6 3 2 1
    var num = Math.floor(Math.random() * 10000);
    var flag = "D";
    if (num > 1000 && num <= 2000) {
        //C
        flag = "C";
    } else if (num > 2000 && num <= 2700) {
        //B
        flag = "B";
    } else if (num > 2700 && num <= 3300) {
        //A
        flag = "A";
    } else if (num > 3300 && num <= 3600) {
        //S
        flag = "S";
    } else if (num > 3600 && num <= 3800) {
        //SS
        flag = "SS";
    } else if (num > 3800 && num <= 3900) {
        //SSS
        flag = "SSS";
    } else {
        flag = "D";
    }
    return flag;
}