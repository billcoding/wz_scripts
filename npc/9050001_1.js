var 星星2 = "#fEffect/CharacterEff/1114000/2/0#";
var 星星 = "#fMap/MapHelper/weather/witch/3#";
var 小黄星 = "#fItem/Etc/0427/04270001/Icon9/0#";  //
var 粉爱心 = "#fItem/Etc/0427/04270005/Icon8/1#";  //
var 烟花 = "#fMap/MapHelper/weather/squib/squib1/3#";//烟花
var 邪恶小兔 = "#fEffect/CharacterEff/1112960/3/0#";  //邪恶小兔 【小】
var 取出;


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
        var text = "";
        text += "" + 星星2 + 星星2 + 星星2 + 星星2 + 星星2 + 星星2 + 星星2 + 星星2 + 星星2 + 星星2 + 星星2 + 星星2 + 星星2 + 星星2 + 星星2 + 星星2 + 星星2 + 星星2 + 星星2 + "\r\n"
        text += "\t\t#b#e      选择要全部取出的类型#k#n\r\n"
		text += "#e确认要全部取出吗，如果背包没有空格物品就会消失！\r\n"
        text += "#r#e#L1#"  + "装备类#l";
        text += "#L2#"  + "消耗类#l";
        text += "#L3#"  + "椅子类#l";
        text += "#L4#"  + "其他类#l";
        text += "#L5#"  + "特殊类#l\r\n\r\n\r\n";
		text += "" + 星星2 + 星星2 + 星星2 + 星星2 + 星星2 + 星星2 + 星星2 + 星星2 + 星星2 + 星星2 + 星星2 + 星星2 + 星星2 + 星星2 + 星星2 + 星星2 + 星星2 + 星星2 + 星星2
        cm.sendNext(text);
    } else if (selection == 1) {
        取出 = cm.抽奖查询1(1, 1);
        for (var i in 取出) {
             itemId = 取出[i].itemId;
             itemCount = 取出[i].itemCount;
			 if (cm.抽奖删除(1,itemId,itemCount)){
				 for (var z = 0; z < itemCount; z++) {
					cm.给物品(itemId,1);
				 }
			 }
		}
		cm.sendNext("#e#r已经全部取出！");
		cm.对话结束();
    } else if (selection == 2) {
        取出 = cm.抽奖查询1(1, 2);
        for (var i in 取出) {
             itemId = 取出[i].itemId;
             itemCount = 取出[i].itemCount;
			 if (cm.抽奖删除(1,itemId,itemCount)){
				cm.给物品(itemId,itemCount);
			 }
		}
		cm.sendNext("#e#r已经全部取出！");
		cm.对话结束();
    } else if (selection == 3) {
        取出 = cm.抽奖查询1(1, 3);
        for (var i in 取出) {
             itemId = 取出[i].itemId;
             itemCount = 取出[i].itemCount;
			 if (cm.抽奖删除(1,itemId,itemCount)){
				cm.给物品(itemId,itemCount);
			 }
		}
		cm.sendNext("#e#r已经全部取出！");
		cm.对话结束();
    } else if (selection == 4) {
        取出 = cm.抽奖查询1(1, 4);
        for (var i in 取出) {
             itemId = 取出[i].itemId;
             itemCount = 取出[i].itemCount;
			 if (cm.抽奖删除(1,itemId,itemCount)){
				cm.给物品(itemId,itemCount);
			 }
		}
		cm.sendNext("#e#r已经全部取出！");
		cm.对话结束();
    }
/* 	cm.消息(5,selection)
	cm.消息(5,status) */
}