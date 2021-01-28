var 礼包物品 = "#v1302000#";
var x1 = "1302000,+1";// 物品ID,数量
var x2;
var x3;
var x4;
var 爱心 = "#fEffect/CharacterEff/1022223/4/0#";
var 礼包物品 = "#v1302000#";
var add = "#fEffect/CharacterEff/1112903/0/0#";//红桃心
var aaa = "#fUI/UIWindow.img/Quest/icon9/0#";//红色右箭头
var zzz = "#fUI/UIWindow.img/Quest/icon8/0#";//蓝色右箭头
var sss = "#fUI/UIWindow.img/UserList/Guild/Make/BtAgree/mouseOver/0#";//
var sss1 = "#fUI/UIWindow.img/QuestIcon/3/0#";//选择道具

var 正方箭头 = "#fUI/Basic/BtHide3/mouseOver/0#";
var 感叹号 = "#fUI/UIWindow/Quest/icon0#";
var 美化new = "#fUI/UIWindow/Quest/icon5/1#";
var 红色箭头 = "#fEffect/CharacterEff/1112908/0/1#";  //彩光3
var ttt1 = "#fEffect/CharacterEff/1062114/1/0#";  //爱心
var 蓝色角点 = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var ca = java.util.Calendar.getInstance();
var year = ca.get(java.util.Calendar.YEAR); //获得年份
var month = ca.get(java.util.Calendar.MONTH) + 1; //获得月份
var day = ca.get(java.util.Calendar.DATE);//获取日
var hour = ca.get(java.util.Calendar.HOUR_OF_DAY); //获得小时
var minute = ca.get(java.util.Calendar.MINUTE);//获得分钟
var second = ca.get(java.util.Calendar.SECOND); //获得秒
var weekday = ca.get(java.util.Calendar.DAY_OF_WEEK)-1;//获得星期
var 正方箭头 = "#fUI/Basic/BtHide3/mouseOver/0#";
var 爱心 = "#fEffect/CharacterEff/1022223/4/0#";

var 粉爱心 = "#fItem/Etc/0427/04270005/Icon8/1#";  //
var 菊花 = "#fUI/PredictHarmony/card/19#";//卡片效果菊花
var 笑 = "#fUI/GuildBBS/GuildBBS/Emoticon/Basic/0#";//笑脸
var 金枫叶 ="#fMap/MapHelper/weather/maple/2#";
var 红枫叶 ="#fMap/MapHelper/weather/maple/1#";
var 巫女 ="#fMap/MapHelper/weather/witch/0#";//巫女
var 气球 ="#fMap/MapHelper/weather/balloon/4#";//气球
var 射箭 ="#fMap/MapHelper/weather/LoveEffect2/4/0#";//射箭
var 玫瑰 ="#fMap/MapHelper/weather/rose/0#";//玫瑰花
var 烟花 ="#fMap/MapHelper/weather/squib/squib1/3#";//烟花

var 大粉红爱心 = "#fItem/Etc/0427/04270001/Icon8/4#";  //
var 小粉红爱心 = "#fItem/Etc/0427/04270001/Icon8/5#";  //
var 小黄星 = "#fItem/Etc/0427/04270001/Icon9/0#";  //
var 大黄星 = "#fItem/Etc/0427/04270001/Icon9/1#";  //
var 小水滴 = "#fItem/Etc/0427/04270001/Icon10/5#";  //
var 大水滴 = "#fItem/Etc/0427/04270001/Icon10/4#";  //
var tz = "#fEffect/CharacterEff/1082565/4/0#";  //粉兔子
var tz1 = "#fEffect/CharacterEff/1082565/0/0#";  //橙兔子
var tz2 = "#fEffect/CharacterEff/1082565/2/0#";  //蓝兔子
var 邪恶小兔 = "#fEffect/CharacterEff/1112960/3/0#";  //邪恶小兔 【小】
var 邪恶小兔2 = "#fEffect/CharacterEff/1112960/3/1#";  //邪恶小兔 【大】
var 花草 ="#fEffect/SetEff/208/effect/walk2/4#";
var 花草1 ="#fEffect/SetEff/208/effect/walk2/3#";
var 小花 ="#fMap/MapHelper/weather/birthday/2#";
var 桃花 ="#fMap/MapHelper/weather/rose/4#";
var 银杏叶 ="#fMap/MapHelper/weather/maple/3#";
var 小烟花 ="#fMap/MapHelper/weather/squib/squib4/1#";
var 星星 ="#fMap/MapHelper/weather/witch/3#";
var 星星2 = "#fEffect/CharacterEff/1114000/2/0#";
var 副本 = Array("玩具玩具","海盗副本","玩具3","玩具4","玩具5","玩具6","玩具7")
var 星期 = Array("一","二","三","四","五","六","天")
var 蓝色箭头 = "#fUI/UIWindow/Quest/icon2/7#";


var 任务 = "#fUI/UIWindow.img/Quest/summary#";//
var 奖励 = "#fUI/UIWindow.img/Quest/reward#";//
var 机率获得 = "#fUI/UIWindow.img/Quest/prob#";//
var 经验值 = "#fUI/UIWindow.img/QuestIcon/8/0#";//
var 金币 = "#fUI/UIWindow.img/QuestIcon/7/0#";//
var 黑箱子 = "#fUI/UIWindow.img/QuestIcon/5/0#";//
var 获取 = "#fUI/UIWindow.img/QuestIcon/4/0#";//

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
/*         var
        text = ttt1+"脚本标题\r\n";
        text += sss+tz1+tz2+add+爱心+"#L1#进入选项1\r\n";
		text +=  "\r\n";
        cm.sendNext(text) */;
		var
		text =  "#e#r  - 每日任务\r\n\r\n#n#k"
		text += "冒险路很长，适当停下脚步来完成一些有意义的事，比如来我这里完成每日打工任务，每一阶段都有超高经验奖励\r\n"
		text +="每完成一次 #r12#k 阶段还能获得 #r1#k 点劳动值\r\n"
		text +="劳动值可以兑换非常稀有道具，记得每天都要来完成哦\r\n"
		text +="#b#L1#"+邪恶小兔+"#e开始每日任务#n#l#L2#"+小粉红爱心+"摘取粉红花#l#L3#"+小粉红爱心+"获取工资币#l\r\n"
		text +="#b#L4#"+小粉红爱心+"每日任务经验奖励介绍#l#L5#"+小粉红爱心+"劳动值稀有道具介绍#l\r\n"
		text +="#b#L6#"+小粉红爱心+"劳动值兑换稀有道具/目前拥有：#r"+"0"+"#b 点#l\r\n"
		text +="#b#L7#"+小黄星+"#r刷新任务 1 - 10 阶 （每次消耗200抵用卷）#l\r\n"
		text +="#b#L8#"+小黄星+"#r刷新任务 1 - 10 阶 （每次消耗3个劳动勋章）#l\r\n"
		text +="#b#L9#"+小黄星+"#r刷新任务11 - 12 阶 （每次消耗1个传说币(稀有)）#l\r\n"
		cm.sendNext(text);
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

    }
}