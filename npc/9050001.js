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
        text += "#L1#" + 小黄星 + "查看飞天猪介绍#l                  #r当前运气值：" + 取随机数(30, 100) + "\r\n";
        text += "#b#L2#" + 小黄星 + "开启飞天猪抽奖（单次）#l\r\n";
        text += "#L3#" + 小黄星 + "开启飞天猪抽奖（10连抽）#l\r\n";
        text += "#L4#" + 小黄星 + "开启飞天猪抽奖（50连抽）#l\r\n";
        text += "#L5#" + 邪恶小兔 + "打开飞天猪商店#l";
        text += "#L6#" + 邪恶小兔 + "打开飞天猪仓库#l\r\n\r\n";
        text += 星星2 + 星星2 + 星星2 + 星星2 + 星星2 + 星星2 + 星星2 + 星星2 + 星星2 + 星星2 + 星星2 + 星星2 + 星星2 + 星星2 + 星星2 + 星星2 + 星星2 + 星星2 + 星星2
        cm.sendNext(text);
    } else if (selection == 1) {
        cm.sendOk("飞天猪包里藏有一些稀有道具和极品武器\r\n例如#b工地手套（褐）#k从飞天猪出来就会天然2-7攻击\r\n其他隐藏稀有道具等你来发掘！\r\n每个节假日还有节假日限定装备加入\r\n#r#e飞天猪仓库#n#k：是专为喜欢抽奖的玩家准备的功能， 50连抽的所有道具都会进入飞天猪仓库，当你需要的时候可以从飞天猪仓库取出，例如你50连抽到稀有装备当时是没有属性的，不要着急！从飞天猪仓库取出装备的时候才是最后属性哦！飞天猪仓库还提供一键出售功能，当你不想跑商店就可以点击一键出售，就可获得对应金币，一键出售不会出售掉珍贵装备，但是还是注意使用哦，自己有用的东西先取出来，再一键出售\r\n#r#e冬季限定币#n#k：此道具可以在飞天猪商店换到一些限定的道具");
    } else if (selection == 2) {
        //var
        //text2 = "选项1脚本标题\r\n";
        //text2 += "#L3#进入选项3\r\n";

        //cm.sendNext(text2);

        var cc = cm.抽奖开始(1, 50);
        cm.sendOk(cc);
        cm.对话结束();
    } else if (selection == 3) {

    } else if (selection == 4) {

    } else if (selection == 5) {

    } else if (selection == 6) {
        var text = "";
        text += "" + 星星2 + 星星2 + 星星2 + 星星2 + 星星2 + 星星2 + 星星2 + 星星2 + 星星2 + 星星2 + 星星2 + 星星2 + 星星2 + 星星2 + 星星2 + 星星2 + 星星2 + 星星2 + 星星2 + "\r\n"
        text += "\t\t           #b#e飞天猪抽奖仓库#k#n\r\n\r\n"
        text += "仓库是为喜欢抽奖的玩家准备的，50连抽的道具都会先在仓库帮大家保管，大家可以随时取出去，也提供#r一键售卖#k但是费用会比自己去卖商店低一点哟，珍贵装备无法通过#r一键售卖#k出去\r\n"
        text += "#r#e   #L31#" + 邪恶小兔 + "装备类仓库#l         ";
        text += "#L32#" + 邪恶小兔 + "消耗类仓库#l\r\n";
        text += "   #L33#" + 邪恶小兔 + "椅子类仓库#l         ";
        text += "#L34#" + 邪恶小兔 + "其他类仓库#l\r\n";
        text += "   #L35#" + 邪恶小兔 + "特殊类仓库#l         ";
        text += "#L36#" + 邪恶小兔 + "#b[一键取出]#l\r\n\r\n";
        cm.sendNext(text);
    } else if (selection == 31) {
        装备类 = cm.抽奖查询1(1, 1);
        for (var i in 装备类) {
            var itemId = 装备类[i].itemId;
            var itemCount = 装备类[i].itemCount;
            selStr += "#L" + (1000 + i) + "##v" + itemId + "##z" + itemId + "# 数量:" + itemCount + "个#l\r\n";
        }
			cm.sendNext(selStr);
    } else if (selection == 32) {

    } else if (selection == 33) {
        var selStr = "#e#r请选择你要取出的物品。\r\n\r\n#b";
        椅子类 = cm.抽奖查询1(1, 3);
        for (var i in 椅子类) {
            var itemId = 椅子类[i].itemId;
            var itemCount = 椅子类[i].itemCount;
            selStr += "#L" + (1000 + i) + "##v" + itemId + "##z" + itemId + "# 数量:" + itemCount + "个#l\r\n";
        }
        cm.sendNext(selStr);
    } else if (selection == 34) {

    } else if (selection == 35) {

    } else if (selection == 36) {

    } else if (selection > 999) {
        var i = selection - 1000;
        var itemId = 椅子类[i].itemId;
        var itemCount = 椅子类[i].itemCount;
        cm.sendOk(itemId + " - " + itemCount);
    }
}