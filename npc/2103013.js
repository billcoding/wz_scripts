var status = 0;
var section = 0;
importPackage(java.lang);
//questid 29932, infoquest 7760
function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 99) {
            cm.dispose();
            return;
        }
        status--;
    }
    if (status == 1) {
        if (cm.getMapId() >= 926020001 && cm.getMapId() <= 926020004) {
            var itemid = 4001321 + (cm.getMapId() % 10);
            if (!cm.canHold(itemid)) {
                cm.sendOk("��ճ�һЩ��������");
            } else {
                cm.gainItem(itemid, 1);
                cm.warp(cm.getMapId() - 10000, 0);
            }
            cm.dispose();
        } else if (cm.getMapId() >= 926010001 && cm.getMapId() <= 926010004) {
            cm.warp(926010000, 0);
            cm.dispose();
        } else if (cm.getMapId() >= 926010100 && cm.getMapId() <= 926013504) {
            cm.sendYesNo("����Ҫ�뿪�����");
            status = 99;
        } else {
            cm.sendSimple("�ҵ�������#p2103013#\r\n#b#e#L1#�������������#l#n\r\n#L2#���뷨��Сѩ�򸱱�#l\r\n#L3#�һ�����������#l\r\n#L4#�һ�ѫ��#l#k");
        }
    } else if (status == 2) {
        section = selection;
        if (selection == 1) {
            cm.sendSimple("�������֪��ɵ�Ͼ�Ȼ�������ϵ۵ķ�ŭ��ѡ��һ�����˰ɣ�\r\n#L0# #v3994115# #l#L1# #v3994116# #l#L2# #v3994117# #l#L3# #v3994118# #l");
        } else if (selection == 2) {
            cm.sendSimple("����Ҫʲô����\r\n#L0##i4001322##t4001322##l\r\n#L1##i4001323##t4001323##l\r\n#L2##i4001324##t4001324##l\r\n#L3##i4001325##t4001325##l");
        } else if (selection == 3) {
            cm.sendSimple("����Ҫʲô����\r\n#L0##i1132012##t1132012##l\r\n#L1##i1132013##t1132013##l");
        } else if (selection == 4) {
            var record = cm.getQuestRecord(7760);
            var data = record.getCustomData();
            if (data == null) {
                record.setCustomData("0");
                data = record.getCustomData();
            }
            var mons = parseInt(data);
            if (mons < 50000) {
                cm.sendOk("���ɱ 50,000 �����������ڵĹ����������� \r\nĿǰ��ɱ�� : " + mons + "ֻ");
            } else if (cm.canHold(1142142) && !cm.haveItem(1142142)) {
                cm.gainItem(1142142, 1);
                cm.forceStartQuest(29932);
                cm.forceCompleteQuest(29932);
            } else {
                cm.sendOk("��ճ�һЩװ�����ռ䡣");
            }
            cm.dispose();
        }
    } else if (status == 3) {
        if (section == 1) {
            var cont_ = false;
            if (selection == 0) { //easy; 40-45
                if (cm.getPlayer().getLevel() < 40) {
                    cm.sendOk("��ĵȼ���δ�ﵽ40����");
                } else if (cm.getPlayer().getLevel() > 60) {
                    cm.sendOk("��ĵȼ�����60����");
                } else {
                    cont_ = true;
                }
            } else if (selection == 1) { //normal; 46-50
                if (cm.getPlayer().getLevel() < 45) {
                    cm.sendOk("��ĵȼ���δ�ﵽ45����");
                } else if (cm.getPlayer().getLevel() > 60) {
                    cm.sendOk("��ĵȼ�����60����");
                } else {
                    cont_ = true;
                }
            } else if (selection == 2) { //hard; 51-60
                if (cm.getPlayer().getLevel() < 50) {
                    cm.sendOk("��ĵȼ���δ�ﵽ50����");
                } else if (cm.getPlayer().getLevel() > 60) {
                    cm.sendOk("��ĵȼ�����60����");
                } else {
                    cont_ = true;
                }
            } else if (selection == 3) { //hell; 61+
                if (cm.getPlayer().getLevel() < 61) {
                    cm.sendOk("��ĵȼ���δ�ﵽ61����");
                } else {
                    cont_ = true;
                }
            }
            if (cont_ && cm.isLeader()) {//todo
                if (!cm.start_PyramidSubway(selection)) {
                    cm.sendOk("Ŀǰ�������������ˣ����Ժ��ٳ��ԡ�");
                }
            } else if (cont_ && !cm.isLeader()) {
                cm.sendOk("�������Ķӳ�������˵����");
            }
        } else if (section == 2) {
            var itemid = 4001322 + selection;
            if (!cm.haveItem(itemid, 1)) {
                cm.sendOk("��û��#b#t" + itemid + "##k");
            } else {
                if (cm.bonus_PyramidSubway(selection)) {
                    cm.gainItem(itemid, -1);
                } else {
                    cm.sendOk("Ŀǰ�������������ˣ����Ժ��ٳ��ԡ�");
                }
            }
        } else if (section == 3) {
            if (selection == 0) {
				if (cm.canHold(1132012)) {
                if (cm.haveItem(2022613, 150)) {
					cm.gainItem(2022613, -150);
					cm.gainItem(1132012, 1);
					cm.sendOk("��������Ľ�����");
				} else {
					cm.sendOk("����Ҫ#b#t2022613##k 150����");
				}
					cm.sendOk("��ճ�һЩ�ռ䡣");
				}
            } else if (selection == 1) {
				if (cm.canHold(1132013)) {
                if (cm.haveItem(2022613, 400) && cm.haveItem(1132012)) {
					cm.gainItem(2022613, -400);
					cm.gainItem(1132012, -1);
					cm.gainItem(1132013, 1);
					cm.sendOk("��������Ľ�����");
				} else {
					cm.sendOk("����Ҫ#b#t2022613##k 400�� ��һ�� #i1132012#��");
				}
					cm.sendOk("��ճ�һЩ�ռ䡣");
            }
        }
        cm.dispose(); //todo
    } else if (status == 100) {
        cm.warp(926010000, 0);
        cm.dispose();
    }
}
}