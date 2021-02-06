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
        text = "#e#r需要购买 #d#v4031179##z4031179##r 吗？\r\n";
        text += "#b#L1#300w一个(价格会有浮动)  每日限制购买2次！#l\r\n";

        cm.sendNext(text);
    } else if (selection == 1) {
		if(cm.getMeso()>= 3000000){
			if(cm.getBossLog("购买碎片D")<=1){
				cm.setBossLog("购买碎片D");
				cm.给金币(-3000000);
				cm.给物品(4031179,1);
				cm.sendOk("购买成功！")
				cm.对话结束();
		}

    }
	cm.sendOk("金币不足或者已经超过购买限制！")
	cm.对话结束();
}
}