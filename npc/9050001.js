var 星星2 = "#fEffect/CharacterEff/1114000/2/0#";
var 星星 = "#fMap/MapHelper/weather/witch/3#";
var 小黄星 = "#fItem/Etc/0427/04270001/Icon9/0#";  //
var 粉爱心 = "#fItem/Etc/0427/04270005/Icon8/1#";  //
var 烟花 = "#fMap/MapHelper/weather/squib/squib1/3#";//烟花
var 邪恶小兔 = "#fEffect/CharacterEff/1112960/3/0#";  //邪恶小兔 【小】
function start() {
    status = -1;
    action(1, 0, 0);
}
var 椅子类;
var itemId;
var itemCount;
function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (status == 0) {
        //cm.消息(2,"[时装强化] : "+cm.抽奖物品查询(1802026));
        var

            text = "";
        text += "" + 星星2 + 星星2 + 星星2 + 星星2 + 星星2 + 星星2 + 星星2 + 星星2 + 星星2 + 星星2 + 星星2 + 星星2 + 星星2 + 星星2 + 星星2 + 星星2 + 星星2 + 星星2 + 星星2 + "\r\n"
        text += "\t\t#e  欢迎来到#b悠悠冒险岛-飞天猪抽奖#k!#n\r\n\r\n"
        text += "冒险岛转蛋机中有各种#b装备、卷轴和稀有的时装道具#k哦！使用“#b飞天猪的蛋#k”就可以抽奖，在#r游戏商城中的“其他”-“游戏”区购买#k，或者积极参加一些#r活动#k会获得。\r\n"
        text += "#L1000000#" + 小黄星 + "查看飞天猪介绍#l                  #r当前运气值：" + 取随机数(30, 100) + "\r\n";
        text += "#b#L2000000#" + 小黄星 + "开启飞天猪抽奖（单次）#l\r\n";
        text += "#L3000000#" + 小黄星 + "开启飞天猪抽奖（10连抽）#l\r\n";
        text += "#L4000000#" + 小黄星 + "开启飞天猪抽奖（50连抽）#l\r\n";
        text += "#L5000000#" + 邪恶小兔 + "打开飞天猪商店#l";
        text += "#L6000000#" + 邪恶小兔 + "打开飞天猪仓库#l\r\n\r\n";
        text += 星星2 + 星星2 + 星星2 + 星星2 + 星星2 + 星星2 + 星星2 + 星星2 + 星星2 + 星星2 + 星星2 + 星星2 + 星星2 + 星星2 + 星星2 + 星星2 + 星星2 + 星星2 + 星星2
        cm.sendNext(text);
    } else if (selection == 1000000) {
        cm.sendOk("飞天猪包里藏有一些稀有道具和极品武器\r\n例如#b工地手套（褐）#k从飞天猪出来就会天然2-7攻击\r\n其他隐藏稀有道具等你来发掘！\r\n每个节假日还有节假日限定装备加入\r\n#r#e飞天猪仓库#n#k：是专为喜欢抽奖的玩家准备的功能， 抽奖的所有道具都会进入飞天猪仓库，当你需要的时候可以从飞天猪仓库取出，例如你抽到稀有装备当时是没有属性的，不要着急！从飞天猪仓库取出装备的时候才是最后属性哦！\r\n#r#e冬季限定币#n#k：此道具可以在飞天猪商店换到一些限定的道具");
    } else if (selection == 2000000) {
		if (cm.判断物品(5220040,1)){
			cm.给物品(5220040,-1);
        var cc = cm.抽奖开始(1, 1);
			cm.sendOk(cc);
		} else{
			cm.sendOk("#e#r请确认背包里有#v5220040##z5220040#");
		}
        cm.对话结束();
    } else if (selection == 3000000) {
		if (cm.判断物品(5220040,10)){
			cm.给物品(5220040,-10);
			var cc = cm.抽奖开始(1, 10);
			cm.sendOk(cc);
		} else{
			cm.sendOk("#e#r请确认背包里有#v5220040##z5220040#");
		}
        cm.对话结束();
    } else if (selection == 4000000) {
		if (cm.判断物品(5220040,50)){
			cm.给物品(5220040,-50);
			var cc = cm.抽奖开始(1, 50);
			cm.sendOk(cc);
		} else{
			cm.sendOk("#e#r请确认背包里有#v5220040##z5220040#");
		}
        cm.对话结束();
    } else if (selection == 5000000) {

    } else if (selection == 6000000) {
		//cm.消息(5,"12313")
        var text = "";
        text += "" + 星星2 + 星星2 + 星星2 + 星星2 + 星星2 + 星星2 + 星星2 + 星星2 + 星星2 + 星星2 + 星星2 + 星星2 + 星星2 + 星星2 + 星星2 + 星星2 + 星星2 + 星星2 + 星星2 + "\r\n"
        text += "\t\t           #b#e飞天猪抽奖仓库#k#n\r\n\r\n"
        text += "仓库是为喜欢抽奖的玩家准备的，抽奖的道具都会先在仓库帮大家保管，大家可以随时取出去\r\n"
        text += "#r#e   #L31000000#" + 邪恶小兔 + "装备类仓库#l         ";
        text += "#L32000000#" + 邪恶小兔 + "消耗类仓库#l\r\n";
        text += "   #L33000000#" + 邪恶小兔 + "椅子类仓库#l         ";
        text += "#L34000000#" + 邪恶小兔 + "其他类仓库#l\r\n";
        text += "   #L35000000#" + 邪恶小兔 + "特殊类仓库#l         ";
        text += "#L36000000#" + 邪恶小兔 + "#b[一键取出]#l\r\n\r\n";
        cm.sendNext(text);
    } else if (selection == 31000000) {
		var selStr = "#e#r请选择你要取出的物品。\r\n\r\n#b";
        椅子类 = cm.抽奖查询1(1, 1);
        for (var i in 椅子类) {
             itemId = 椅子类[i].itemId;
             itemCount = 椅子类[i].itemCount;
            selStr += "#L" + (100000 + i) + "##d#v" + itemId + "##z" + itemId + "# #b  数量 " + itemCount + "#b 个#l\r\n";
        }
			cm.sendNext(selStr);
    } else if (selection == 32000000) {
		var selStr = "#e#r请选择你要取出的物品。\r\n\r\n#b";
        椅子类 = cm.抽奖查询1(1, 2);
        for (var i in 椅子类) {
             itemId = 椅子类[i].itemId;
             itemCount = 椅子类[i].itemCount;
            selStr += "#L" + (100000 + i) + "##d#v" + itemId + "##z" + itemId + "# #b  数量 " + itemCount + "#b 个#l\r\n";
        }
			cm.sendNext(selStr);
    } else if (selection == 33000000) {
        var selStr = "#e#r请选择你要取出的物品。\r\n\r\n#b";
        椅子类 = cm.抽奖查询1(1, 3);
        for (var i in 椅子类) {
             itemId = 椅子类[i].itemId;
             itemCount = 椅子类[i].itemCount;
            selStr += "#L" + (100000 + i) + "##d#v" + itemId + "##z" + itemId + "# #b  数量 " + itemCount + "#b 个#l\r\n";
        }
        cm.sendNext(selStr);
    } else if (selection == 34000000) {
		var selStr = "#e#r请选择你要取出的物品。\r\n\r\n#b";
        椅子类 = cm.抽奖查询1(1, 4);
        for (var i in 椅子类) {
             itemId = 椅子类[i].itemId;
             itemCount = 椅子类[i].itemCount;
            selStr += "#L" + (100000 + i) + "##d#v" + itemId + "##z" + itemId + "# #b  数量 " + itemCount + "#b 个#l\r\n";
        }
			cm.sendNext(selStr);
    } else if (selection == 35000000) {
		var selStr = "#e#r请选择你要取出的物品。\r\n\r\n#b";
        椅子类 = cm.抽奖查询1(1, 5);
        for (var i in 椅子类) {
             itemId = 椅子类[i].itemId;
             itemCount = 椅子类[i].itemCount;
            selStr += "#L" + (100000 + i) + "##d#v" + itemId + "##z" + itemId + "# #b  数量 " + itemCount + "#b 个#l\r\n";
        }
			cm.sendNext(selStr);
    } else if (selection == 36000000) {
		//cm.消息(5,status);
		cm.openNpc(9050001,1);
		//cm.对话结束();
		//cm.sendYesNo("#e#b警告！警告！\r\n\r\n		#e#r确认要全部取出吗，如果背包没有这么多空格物品就会消失！");
		//cm.对话结束();

    } else if (selection > 99999 && selection< 1000000 ) {
        var i = selection - 100000;
         itemId = 椅子类[i].itemId;
         itemCount = 椅子类[i].itemCount;
        
		var tex =""
		tex +="你要取出的道具为#v"+itemId+"##z"+itemId+"#\r\n"
		tex +="请输入你要取出的物品数量，当前最多可以取出 "+itemCount+" 个\r\n"
		tex +="(取出之前请确认背包是否装得下，超出部分物品会消失)\r\n\r\n"
		if (itemCount>5000){
			itemCount=5000
		}
		
		cm.sendGetNumber(tex,itemCount,1,itemCount);
		//cm.消息(5,selection)
		//cm.对话结束();
		//cm.sendOk(tex+itemId + " - " + itemCount);
		//var itemId = 椅子类[i].itemId;
        //var itemCount = 椅子类[i].itemCount;
	} else if (selection< 5001 && selection>0) {
			if (cm.抽奖删除(1,itemId,selection)){
				if(物品类型(itemId)==1){
					for (var z = 0; z < selection; z++) {
					cm.给物品(itemId,1);
					}
				}else{
			cm.给物品(itemId,selection);
				}
			cm.对话结束();	
		}else{
			cm.sendOk("系统错误！");
			cm.对话结束();
		}			
		}
		//cm.对话结束();
		if (status == 3) {
			
			//这里全部取出！
			//cm.对话结束();
		}
		
    }

