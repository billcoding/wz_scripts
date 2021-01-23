var 箭头 = "#fUI/Initials/Button/Button9/mouseOver/0#";
var 箭头1 = "#fUI/GuildMark/Mark/Etc/00009004/3#";
var 箭头2 = "#fUI/GuildMark.img/Mark/Etc/00009001/11#";
var 箭头3 = "#fUI/GuildMark.img/Mark/Etc/00009001/7#";

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
        text = 箭头2+" "+箭头3+" "+箭头2+ "#e#r  新人指南书  "+箭头2+" "+箭头3+" "+箭头2+ "    #k#n\r\n  \r\n悠悠冒险岛\r\n";
        text += "#L1##r领取萌新助力活动奖励\r\n";
		text += "#L2##b目前阶段我应该如何升级？\r\n";
		text += "#L3#我想变强应该做些什么？\r\n";
		text += "#L4#我想推荐朋友有什么奖励？\r\n";
		text += "#L5#我想应聘当主播或助手该怎么做？\r\n";
        cm.sendSimpleS(text,2);
    } else if (selection == 1) {
		var
        text1 = "选项1脚本标题\r\n";
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