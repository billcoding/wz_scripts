var status = -1;

function start(mode, type, selection) {
	if (mode == -1) {
		qm.dispose();
	} else {
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			if(qm.getQuestStatus(4762)== 2){
			qm.sendOk("���Ѿ���ȡ������������Ŭ����15�����Ի���½����");
			qm.completeQuest();
			qm.dispose();
			}else{
                        qm.sendNext("��ϲ�㵱ǰ�ȼ��Ѿ�����#b10#k�����������#e#r GM #n#k���͵� #b������Ա��װ #k�� #bǿ������#k !(װ����������6��λ��)");
			}
		} else if (status == 1) {
			qm.sendOk("��ϲ����ϵͳ������\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#\r\n#v1002797# #v1102174# #v1052165# #v1072366# #v1082244# #v1032058# #v2049104#x20");
			qm.gainItem(1002797, 1);
			qm.gainItem(1102174, 1);
			qm.gainItem(1052165, 1);
			qm.gainItem(1072366, 1);
			qm.gainItem(1082244, 1);
			qm.gainItem(1032058, 1);
			qm.gainItem(2049104, 20);
			qm.completeQuest();
			qm.dispose();
		} 
	}
}