/**
 * @author: OdinMS
 * @editor: Eric
 * @npc: Cesar
 * @func: Ariant PQ (Outdated GMS-like text, AriantPQ is closed off and I am unable to get this.)
*/

importPackage(Packages.tools);
importPackage(Packages.client);

var status = -1;
var sel;

function start() {
    if ((cm.getPlayer().getLevel() < 50) && !cm.getPlayer().isGM()) {
		cm.sendNext("�㲻�� level 20 and 30. �Բ��������ܲ��μ�.");
        cm.dispose();
        return;
    }
    if(cm.getPlayer().getMapId() % 10 == 1)
        cm.sendSimple("�������һ��������?\r\n#b#L0# ���� #t2270002# and #t2100067#.#l\r\n#L1# �Ҹ���ʲô?#l\r\n#L2# �����뿪����.#l");
    else
        cm.sendSimple(cm.getPlayer().getAriantRoomLeaderName(((cm.getPlayer().getMapId() / 100) % 10) - 1) == cm.getPlayer().getName() ? "���뿪ʼ������?#b\r\n#b#L3# ׼������ս��!!#l\r\n#L1# ��������һ����ɫ.#l\r\n#L2# �����뿪����.#l" : "����Ҫʲô?#b\r\n#L2# �����뿪����.#l");
}

function action(mode, type, selection){
    status++;
    if (mode != 1) {
        if (mode == 0 && type == 0)
            status -= 2;
        else {
            cm.dispose();
            return;
        }
    }
    if (cm.getPlayer().getMapId() % 10 == 1) {
        if (status == 0) {
            if (sel == undefined)
                sel = selection;
            if (sel == 0) {
                if (cm.haveItem(2270002))
                    cm.sendNext("���Ѿ�ӵ�� #b#t2270002##k.");
                else if (cm.canHold(2270002) && cm.canHold(2100067)) {
                    if (cm.haveItem(2100067))
                        cm.removeAll(2100067);
                    cm.gainItem(2270002, 32);
                    cm.gainItem(2100067, 5);
                    cm.sendNext("���ڽ��͹����HP����ʹ�� #b#t2270002##k �������ǵ�����!");
                } else
                    cm.sendNext("���Ͳ鿴�Ƿ�ʹ�ÿ����ȫ");
                cm.dispose();
            } else if(sel == 1) {
				status = 1;
                cm.sendNext("����Ҫ��ʲô����һ���������ġ�����������ϸ����.");
            } else
                cm.sendYesNo("Are you sure you want to leave?"); //No GMS like.
        } else if (status == 1) {
            if (mode == 1) {
                cm.warp(980010020);
                cm.dispose();
                return;
            }
		} else if (status == 2) {
            cm.sendNextPrev("����ĺܼ򵥡����õ� #b#t2270002##k �������ϣ�����������Ҫ����һ�����ϵ��� HP�ӹ��Ȼ��ʹ�� #b#t2270002##k ��ȡ��޴������.");
        } else if (status == 3)
            cm.sendNextPrev("�ܼ򵥡�����������˹��������#b#t2270002##k, Ȼ������� #b#t4031868##k, ����Ů�����дﰮ���������鱦ս����ʤ��Ϊ��Ӯ�ñ�����Ϊ�˷�ֹ���˵����գ���ʵ������һ���������뷨.");
        else if (status == 4)
            cm.sendNextPrev("һ����. #r����ܲ���ʹ�ó���.#k���?~!");
        else if (status == 5)
            cm.dispose();
    } else {
        var nextchar = cm.getMap(cm.getPlayer().getMapId()).getCharacters().iterator();
        if (status == 0) {
            if (sel == undefined)
                sel = selection;
            if (sel == 1)
                if (cm.getPlayerCount(cm.getPlayer().getMapId()) > 1) {
                    var text = "�����˭�ķ�������һ��?"; //Not GMS like text
                    var name;
                    for (var i = 0; nextchar.hasNext(); i++) {
                        name = nextchar.next().getName();
                        if (!cm.getPlayer().getAriantRoomLeaderName(((cm.getPlayer().getMapId() / 100) % 10) - 1).equals(name))
                            text += "\r\n#b#L" + i + "#" + name + "#l";
                    }
                    cm.sendSimple(text);
                } else {
                    cm.sendNext("����û��ʲô���Ա��ߵĽ�ɫ��");
                    cm.dispose();
                }
            else if (sel == 2) {
                if (cm.getPlayer().getAriantRoomLeaderName(((cm.getPlayer().getMapId() / 100) % 10) - 1) == cm.getPlayer().getName())
                    cm.sendYesNo("��ȷ����Ҫ�뿪�����Ǿ����������䣬����������뿪������ս�����������ر�.");
                else
                    cm.sendYesNo("��ȷ����Ҫ�뿪��?"); //No GMS like.
            } else if (sel == 3)
                if (cm.getPlayerCount(cm.getPlayer().getMapId()) > 0 )
                    cm.sendYesNo("���䶼��һ�ף�û�������Ľ�ɫ���Լ����ⳡս���ľ��������������ڿ�ʼ��Ϸ��?");
                else {
                    cm.sendNext("��������Ҫ2������������ʼ����.");
                    cm.dispose();
                }
        } else if (status == 1) {
            if (sel == 1) {
                for (var i = 0; nextchar.hasNext(); i++)
                    if (i == selection) {
                        nextchar.next().changeMap(cm.getMap(980010000));
                        break;
                    } else
                        nextchar.next();
                cm.sendNext("��ұ��߳�����̨."); //Not GMS like
            } else if(sel == 2) {
                if (cm.getPlayer().getAriantRoomLeaderName(((cm.getPlayer().getMapId() / 100) % 10) - 1) != cm.getPlayer().getName())
                    cm.warp(980010000);
                else {
                    cm.getPlayer().removeAriantRoom((cm.getPlayer().getMapId() / 100) % 10);
                    cm.mapMessage(6, cm.getPlayer().getName() + " �Ѿ��뿪����̨��������̨�����ڽ��ر�.");
                    cm.warpMap(980010000);
                }
            } else {
				cm.startAriantPQ(cm.getPlayer().getMapId() + 1);
            }
            cm.dispose();
        }
    }
}
