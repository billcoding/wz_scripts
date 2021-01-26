/* var 箭头 = "#fUI/Initials/Button/Button9/mouseOver/0#";
var 箭头1 = "#fUI/GuildMark/Mark/Etc/00009004/3#";
var 箭头2 = "#fUI/GuildMark.img/Mark/Etc/00009001/11#";
var 箭头3 = "#fUI/GuildMark.img/Mark/Etc/00009001/7#";
 */
var 星星 = "#fEffect/CharacterEff/1114000/2/0#";
//var 爱心 = "#fEffect/CharacterEff/1022223/4/0#";
//var 红色箭头 = "#fUI/UIWindow/Quest/icon6/7#";
//var 正方形 = "#fUI/UIWindow/Quest/icon3/6#";
var 蓝色箭头 = "#fUI/UIWindow/Quest/icon2/7#";



function start() {
    status = -1;
    action(1, 0, 0);
}

function 取随机数(a, b) {
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


function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (status == 0) {
        var
        text =""+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+"\r\n"
			text += "\t\t\t  #e欢迎来到#b悠悠冒险岛v079 #k!#n\r\n\r\n#k本服拒绝一切外挂脚本和利用BUG，发现之后永久禁封账号和机器，#k我们提倡爱戴玩家，关爱萌新，大力支持玩家与玩家之间进行交易！汗水应该得到回报！\r\n本服务器按照官方服务器进行维护与修复。功能以仿官方为主\r\n#r服主也是一位90后怀旧冒险岛老玩家，开设本服不以挣钱为目的，为了共同找回儿时的快乐时光！希望各位玩家多结交朋友，理性消费，人人平等！为了维护游戏平衡！玩家发现BUG请及时反馈给我们进行维护，共同打造一个美好的游戏环境！\r\n";
        text += "#L1##r#e"+ 蓝色箭头 +"领取萌新助力活动奖励\r\n";
		text += "#L2##b"+ 蓝色箭头 +"目前阶段我应该如何升级？\r\n";
		text += "#L3#"+ 蓝色箭头 +"我想变强应该做些什么？\r\n";
		text += "#L4#"+ 蓝色箭头 +"我想推荐朋友有什么奖励？\r\n";
		text += "#L5#"+ 蓝色箭头 +"我想应聘当主播或助手该怎么做？\r\n\r\n";
		text += ""+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星;
		//text += FileoutputUtil.CurrentReadable_Time();
		//text += 取随机数(1,3)+" "+ 取随机数(1,3)
		cm.getPlayer().gainqiandao(1)
        cm.sendSimpleS(text,2);
    } else if (selection == 1) {
		var
        text1 = "选项1脚本标题 "+ cm.剩余背包(5)  + "\r\n";
        text1 += "#L1#进入选项1\r\n";
        cm.sendNext(text1);
		cm.对话结束();
    } else if (selection == 2) {
		var
        text2 = "选项1脚本标题\r\n";
        text2 += "#L3#进入选项3\r\n";
		
		cm.sendNext(text2);
    } else if (selection == 3) {

    } else if (selection == 4) {

    } else if (selection == 5) {

    } else if (selection == 20) {

    }
}