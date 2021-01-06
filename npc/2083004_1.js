/*
	NPC Name: 		The Forgotten Temple Manager
	Map(s): 		Deep in the Shrine - Forgotten Twilight
	Description: 		Pink Bean battle starter
*/
var status = -1;

function start() {
	if (cm.getPlayer().getLevel() < 120) {
		cm.sendOk("��ĵȼ�С�� 120 ��,�޷���ս.");
		cm.dispose();
		return;
	}

	if (cm.getBossLog('HorntailBattle') >= 1) {
		//cm.warp(240050400, 0);//��ͼ����
		cm.sendOk("�������� ÿ��ֻ����ս1��.");
		cm.dispose();
		return;
	}
//	var party = cm.getPlayer().getParty();
//   if (party == null) {
//		cm.sendOk("��Ķ���Ҫ��2�������ϣ���ſ�������Զ���ӳ���");
//        cm.safeDispose();
//		return;
//    }
//    if (party.getMembers().size() < 1) {
//		cm.sendOk("��Ķ���Ҫ��2�������ϣ���ſ�������Զ���ӳ���");
//        cm.safeDispose();
//        return;
//     }
//	if (cm.getPlayerCount(240050400 ) < 1){
//		cm.sendOk("��Ķ���Ҫ��2�������ϣ���ſ�������Զ���ӳ���");
//        cm.safeDispose();
//		return;
//	}
    var em = cm.getEventManager("HorntailBattle");

    if (em == null) {
		cm.sendOk("�����嵥Ϊ�գ�����ϵ����Ա.");
		cm.dispose();
		return;
    }
	
    var eim_status = em.getProperty("state");
	if (eim_status == null || eim_status.equals("0")) {
		var squadAvailability = cm.getSquadAvailability("Horntail");
		if (squadAvailability == -1) {
			status = 0;
			cm.sendYesNo("���ڿ�������Զ���ӣ������ΪԶ���Ӷӳ���");
		} else if (squadAvailability == 1) {
			// -1 = Cancelled, 0 = not, 1 = true
			var type = cm.isSquadLeader("Horntail");
			if (type == -1) {
				cm.sendOk("�Ѿ�����������.");
				cm.dispose();
			} else if (type == 0) {
				var memberType = cm.isSquadMember("Horntail");
				if (memberType == 2) {
					cm.sendOk("��Զ���ӵ��Ʋ�����.");
					cm.dispose();
				} else if (memberType == 1) {
					status = 5;
					//cm.sendSimple("����������ʲô��\r\n#b#L0#�鿴Զ���ӳ�Ա��#l \r\n#b#L1#����Զ���ӡ�#l \r\n#b#L2#�˳�Զ���ӡ�#l");
					cm.sendSimple("����������ʲô��\r\n#b#L2#�鿴Զ���ӳ�Ա��#l \r\n#b#L0#����Զ���ӡ�#l ");
				} else if (memberType == -1) {
					cm.sendOk("Զ����Ա�Ѿ��ﵽ30�������Ժ����ԡ�");
					cm.dispose();
				} else {
					status = 5;
					//cm.sendSimple("����������ʲô�� \r\n#b#L0#�鿴Զ���ӳ�Ա��#l \r\n#b#L1#����Զ���ӡ�#l \r\n#b#L2#�˳�Զ���ӡ�#l");
					cm.sendSimple("����������ʲô��\r\n#b#L2#�鿴Զ���ӳ�Ա��#l \r\n#b#L0#����Զ���ӡ�#l ");
				}
			} else { // Is leader
				status = 10;
				cm.sendSimple("����������ʲô��\r\n#b#L0#�鿴Զ���ӳ�Ա��#l \r\n#b#L1#����Զ���ӳ�Ա��#l \r\n#b#L2#�༭�����б�#l \r\n#r#L3#�����ͼ��#l");
				// TODO viewing!
			}
	    } else {
			//��������ͼ��û���ˣ����û�У�����Զ��
			if( (cm.getMonsterCount(240060000) < 1 || cm.getPlayerCount(240060000) < 1)
				&& (cm.getMonsterCount(240060100) < 1 || cm.getPlayerCount(240060100) < 1)
				&& (cm.getMonsterCount(240060200) < 1 || cm.getPlayerCount(240060200) < 1) ) {
				//���û���ˣ�����û�й֣���ʼ������Զ��״̬��
				var em = cm.getEventManager("HorntailBattle");
				var eim = em.getInstance("HorntailBattle");
				if( eim != null ) {
					eim.dispose();
				}
				var squad = cm.getSquad("Horntail");
				if( squad != null ) {
					squad.clear();
				}
			}
			
			var eim = cm.getDisconnected("HorntailBattle");
			if (eim == null) {
				cm.sendOk("Զ���ӵ���ս�Ѿ���ʼ��");
				cm.safeDispose();
			} else {
				cm.sendYesNo("��Ҫ��������Զ��������");
				status = 2;
			}
	    }
	} else {
		var eim = cm.getDisconnected("HorntailBattle");
		if (eim == null) {
			cm.sendOk("Զ���ӵ���ս�Ѿ���ʼ��");
			cm.safeDispose();
		} else {
			cm.sendYesNo("��Ҫ��������Զ��������");
			status = 2;
		}
	}
}

function action(mode, type, selection) {
    switch (status) {
	case 0:
	    if (mode == 1) {
                if (cm.registerSquad("Horntail", 5, " �Ѿ���Ϊ��Զ���Ӷӳ�������������Զ���ӣ������´򿪶Ի��������Զ���ӡ�")) {
				cm.sendOk("���Ѿ���Ϊ��Զ���Ӷӳ�����������5���ӣ���ȴ���Ա�ǵ����롣");
				//cm.gainNX(-1000);
			} else {
				cm.sendOk("δ֪����.");
			}
	    }
	    cm.dispose();
	    break;
	case 2:
		if (!cm.reAdd("HorntailBattle", "Horntail")) {
			cm.sendOk("����δ֪�Ĵ��󣬲���ʧ�ܡ�");
		}
		cm.safeDispose();
		break;
	case 5:
	    if (selection == 0) { // join
			var ba = cm.addMember("Horntail", true);
			if (ba == 2) {
				cm.sendOk("Զ����Ա�Ѿ��ﵽ30�������Ժ����ԡ�");
			} else if (ba == 1) {
				cm.sendOk("�������Զ���ӳɹ�����Ⱥ�ӳ�ָʾ��");
			} else {
				cm.sendOk("���Ѿ��μ���Զ���ӣ���Ⱥ�ӳ�ָʾ��");
			}
	    } else if (selection == 1) {// withdraw
			var baa = cm.addMember("Horntail", false);
			if (baa == 1) {
				cm.sendOk("�Ʋ�ָ���ĳ�Ա�ɹ���");
			} else {
				cm.sendOk("��û�вμ�Զ���ӡ�");
			}
	    } else if (selection == 2) {
			if (!cm.getSquadList("Horntail", 0)) {
				cm.sendOk("����δ֪�Ĵ��󣬲���ʧ��.");
			}
	    }
	    cm.dispose();
	    break;
	case 10:
	    if (mode == 1) {
			if (selection == 0) {
				if (!cm.getSquadList("Horntail", 0)) {
					cm.sendOk("����δ֪�Ĵ��󣬲���ʧ��.");
				}
				cm.dispose();
			} else if (selection == 1) {
				status = 11;
				if (!cm.getSquadList("Horntail", 1)) {
					cm.sendOk("����δ֪�Ĵ��󣬲���ʧ��.");
					cm.dispose();
				}
			} else if (selection == 2) {
				status = 12;
				if (!cm.getSquadList("Horntail", 2)) {
					cm.sendOk("����δ֪�Ĵ��󣬲���ʧ��.");
					cm.dispose();
				}
			} else if (selection == 3) { // get insode
				if (cm.getSquad("Horntail") != null) {
					var dd = cm.getEventManager("HorntailBattle");
					//dd.startInstance(cm.getSquad("Horntail"), cm.getMap());
					//cm.sendOk("����δ֪�Ĵ��󣬲���ʧ��."+cm.getMap());
				
					//var party = cm.getPlayer().getParty();
					//if (party == null) {
					//	cm.sendOk("��Ķ���Ҫ��2��������,�ſ��Խ��밵��������ս��.");
					//	cm.safeDispose();
					//	return;
					//}
					//if (party.getMembers().size() < 2) {
					//	cm.sendOk("��Ķ���Ҫ��2��������,�ſ��Խ��밵��������ս��.");
					//	cm.safeDispose();
					//	return;
					//}
					cm.worldMessage(6,"��ң�["+cm.getName()+"]����Զ��������ս����������");
					//cm.sendOk("�����ܺ�������ͷ­����#v4031050#������\r\nȻ����#v4031050#����30��#v4000186#��Ƭ������Ķ����ǽ����������ս����");
					dd.startInstance(cm.getSquad("Horntail"), cm.getMap());
				} else {
					cm.sendOk("����δ֪�Ĵ��󣬲���ʧ��.");
				}
				cm.dispose();
			}
	    } else {
			cm.dispose();
	    }
	    break;
	case 11:
	    cm.banMember("Horntail", selection);
	    cm.dispose();
	    break;
	case 12:
	    if (selection != -1) {
			cm.acceptMember("Horntail", selection);
	    }
	    cm.dispose();
	    break;
    }
}