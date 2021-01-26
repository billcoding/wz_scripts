var status = 0;

var ttt = "#fUI/UIWindow.img/Quest/icon9/0#";
var xxx = "#fUI/UIWindow.img/Quest/icon8/0#";
var sss = "#fUI/UIWindow.img/QuestIcon/3/0#";
function start() {
    status = -1;
    action(1, 0, 0);
}
function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (status >= 0 && mode == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;

        if (status == 0) {

            var textz = "\r\n��Ҫ��ս#r �������#k��ϣ�������Ǹ�ʵ��\r\n";

            textz += "#r#L0#" + ttt + "��ս�����    #d(ÿ������60��,��ǰ�Ѿ���ս"+cm.getBossLog("���")+"��)\r\n";

            cm.sendSimple(textz);

        } else if (status == 1) {

            if (selection == 0) {
				if ((cm.getQuestStatus(4103) == 1 && cm.haveItem(4031289 ,1)) || cm.getQuestStatus(8510) == 2) {
		} else {
		cm.sendOk("��û�����ũ��İ�������!");
		cm.dispose();
	}
				
                if (cm.getLevel() < 40) {
                    cm.sendOk("�ȼ�����40");
                    cm.dispose();
                } else if (cm.getBossLog("���") >= 60) {
                    cm.sendOk("#b�������#k ÿ��ֻ����ս#r 60 #k��");
                    cm.dispose();
                } else {
                    cm.setBossLog("���");
                    cm.warp(701010321, 0);
                    cm.dispose();
                }

            }
        }
    }
}














/* function start() {
	if ((cm.getQuestStatus(4103) == 1 && cm.haveItem(4031289 ,1)) || cm.getQuestStatus(8510) == 2) {
		cm.warp(701010321);
		cm.dispose();
		} else {
		cm.sendOk("��û�����ũ��İ�������!");
		cm.dispose();
	}
} */