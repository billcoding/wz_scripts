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
			qm.sendOk("你已经领取过奖励，继续努力到15级可以获得新奖励喔");
			qm.completeQuest();
			qm.dispose();
			}else{
                        qm.sendNext("恭喜你当前等级已经到达#b10#k级，即将获得#e#r GM #n#k赠送的 #b工作人员套装 #k和 #b强化卷轴#k !(装备栏至少留6个位置)");
			}
		} else if (status == 1) {
			qm.sendOk("恭喜你获得系统奖励！\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#\r\n#v1002797# #v1102174# #v1052165# #v1072366# #v1082244# #v1032058# #v2049104#x20");
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