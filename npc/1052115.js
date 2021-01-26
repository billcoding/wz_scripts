var status = 0;
var section = 0;
importPackage(java.lang);
//questid 29931, infoquest 7662
function action(mode, type, selection) {
    if (status == 99 || mode == -1){
	cm.sendOk("��Ҫ��ʱ����������ҡ�");
	cm.dispose();
	}
	if (mode == 1) {
	status++;
    } else {
	status--;
    }
    if (status == 1) {
	if (cm.getMapId() == 910320001) {
		cm.warp(910320000, 0);
		cm.dispose();
	} else if (cm.getMapId() == 910330001) {
		var itemid = 4001321;
		if (!cm.canHold(itemid)) {
			cm.sendOk("��ճ�һЩ��������");
		} else {
			cm.gainItem(itemid,1);
			cm.warp(910320000, 0);
		}
		cm.dispose();
	} else if (cm.getMapId() >= 910320100 && cm.getMapId() <= 910320304) {
		cm.sendYesNo("����Ҫ�뿪����");
		status = 99;
	} else {
		cm.sendSimple("���ã�����#p1052115# ��ʲô���԰�æ���𣿣�\r\n#b#e#L1#��ȥ��ս��#l#n\r\n#L2#��ѵ�� 999.#l\r\n#L3#��ȡѫ�� <#t4001321#>.#l#k");
	}
    } else if (status == 2) {
		section = selection;
		if (selection == 1) {
			if (cm.getPlayer().getLevel() < 25 || cm.getPlayer().getLevel() > 30 || !cm.isLeader()) {
				cm.sendOk("����Ҫ�ȼ�25-30֮�ڣ����Ҷӳ����ҡ�");
			} else {
				if (!cm.start_PyramidSubway(-1)) {
					cm.sendOk("Ŀǰ�����ġ�");
				}
			}
			//todo
		} else if (selection == 2) {
			if (cm.haveItem(4001321)) {
				if (cm.bonus_PyramidSubway(-1)) {
					cm.gainItem(4001321, -1);
				} else {
					cm.sendOk("�����Ѿ����ˡ�");
				}
			} else {
				cm.sendOk("��û��#b#t4001321##k��");
			}
		} else if (selection == 3) {
			var record = cm.getQuestRecord(7662);
			var data = record.getCustomData();
			if (data == null) {
				record.setCustomData("0");
				data = record.getCustomData();
			}
			var mons = parseInt(data);
			if (mons < 10000) {
				cm.sendOk("����Ҫɱ��1��ֻ���Ŀǰ : " + mons);
			} else if (cm.canHold(1142141) && !cm.haveItem(1142141)){
				cm.gainItem(1142141,1);
				cm.forceStartQuest(29931);
				cm.forceCompleteQuest(29931);
			} else {
				cm.sendOk("��ճ�һЩ�ռ䡣");
			}
		}
		cm.dispose();
	} else if (status == 100) {
		cm.warp(910320000,0);
		cm.dispose();
	}
}