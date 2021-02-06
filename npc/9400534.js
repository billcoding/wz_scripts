function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (status == 0) {
        var
        selStr = "#r#e限时抢购\r\n";
        //selStr += "#L1#进入选项1\r\n";

		var 限时 = cm.抢购查询1(1);
        for (var i in 限时) {
            var 物品ID = 限时[i].itemId;
            var 物品数量 = 限时[i].itemCount;
			var 金钱 = 限时[i].meso;
			var 点卷 = 限时[i].cash;
            selStr += "#L" + (1000 + i) + "##v" + 物品ID + "##z" + 物品ID + "# 数量:" + 物品数量 + "个#l\r\n";
			//cm.消息(5,物品ID+"  "+物品数量+"  "+ 金钱+"  "+点卷)
			
			
        }
			cm.sendNext(selStr);
			//cm.对话结束();
		
		
		
		
		
        //cm.sendNext(text);
    } else if (selection == 1) {
        var
        text1 = "选项1脚本标题\r\n";
        text1 += "#L2#进入选项2\r\n";

        cm.sendNext(text1);
    } else if (selection == 2) {
		var
        text2 = "选项1脚本标题\r\n";
        text2 += "#L3#进入选项3\r\n";
		
		cm.sendNext(text2);
    } else if (selection == 3) {

    } else if (selection == 4) {

    } else if (selection == 5) {

    } else if (selection == 20) {

	} else if (selection > 999) {
		var 限时 = cm.抢购查询1(1);
        var i = selection - 1000;
        var 物品ID = 限时[i].itemId;
        var 物品数量 = 限时[i].itemCount;
        cm.sendOk(物品ID + " - " + 物品数量);
		cm.对话结束();
    }
}