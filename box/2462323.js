var ��ͷ = "#fUI/Initials/Button/Button9/mouseOver/0#";
var ��ͷ1 = "#fUI/GuildMark/Mark/Etc/00009004/3#";
var ��ͷ2 = "#fUI/GuildMark.img/Mark/Etc/00009001/11#";
var ��ͷ3 = "#fUI/GuildMark.img/Mark/Etc/00009001/7#";

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
        text = ��ͷ2+" "+��ͷ3+" "+��ͷ2+ "#e#r  ����ָ����  "+��ͷ2+" "+��ͷ3+" "+��ͷ2+ "    #k#n\r\n  \r\n����ð�յ�\r\n";
        text += "#L1##r��ȡ�������������\r\n";
		text += "#L2##bĿǰ�׶���Ӧ�����������\r\n";
		text += "#L3#�����ǿӦ����Щʲô��\r\n";
		text += "#L4#�����Ƽ�������ʲô������\r\n";
		text += "#L5#����ӦƸ�����������ָ���ô����\r\n";
        cm.sendSimpleS(text,2);
    } else if (selection == 1) {
		var
        text1 = "ѡ��1�ű�����\r\n";
        text1 += "#L1#����ѡ��1\r\n";
        cm.sendNext(text1);
		cm.�Ի�����();
    } else if (selection == 2) {
		var
        text2 = "ѡ��1�ű�����\r\n";
        text2 += "#L3#����ѡ��3\r\n";
		
		cm.sendNext(text2);
    } else if (selection == 3) {

    } else if (selection == 4) {

    } else if (selection == 5) {

    } else if (selection == 20) {

    }
}