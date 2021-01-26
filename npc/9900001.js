/** Author: nejevoli
 NPC Name: 		NimaKin
 Map(s): 		Victoria Road : Ellinia (180000000)
 Description: 		Maxes out your stats and able to modify your equipment stats
 */
importPackage(java.lang);

var status = 0;
var slot = Array();
var stats = Array("����", "����", "����", "����", "HP", "MP", "������", "ħ������", "�������", "ħ������", "������", "�ر���", "������", "�ƶ��ٶ�", "��Ծ��", "������", "�ƽ�����ʹ����", "ʹ�þ�����", "������", "ǳ�� 1", "ǳ�� 2", "ǳ�� 3", "װ������");
var selected;
var statsSel;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status >= 0 && mode == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1)
        status++;
    else
        status--;

    if (status == 0) {
        if (cm.getPlayerStat("ADMIN") == 1) {
            cm.sendSimple("�װ���#h \r\n����Ա����Ϊ����ʲô�أ���#b\r\n#L0#��������ֵ�ӵ�ȫ������#l\r\n#L1#���Ҽ��ܼӵ�ȫ������#l\r\n#L2#�����޸�װ����ֵ����#l\r\n#L4#���ҳ�ʼ��AP/SP��#l#k");
        } else if (cm.getPlayerStat("GM") == 1) {
            cm.sendSimple("�װ���#h \r\n����Ա����Ϊ����ʲô�أ���#b\r\n#L0#��������ֵ�ӵ�ȫ������#l\r\n#L1#���Ҽ��ܼӵ�ȫ������#l\r\n#L2#�����޸�װ����ֵ����#l\r\n#L4#���ҳ�ʼ��AP/SP��#l#k");
        } else {
            cm.dispose();
        }
    } else if (status == 1) {
        if (selection == 0) {
            if (cm.getPlayerStat("GM") == 1) {
                cm.maxStats();
                cm.sendOk("�Ѿ����������ˣ���");
            }
            cm.dispose();
        } else if (selection == 1) {
            //Beginner
            if (cm.getPlayerStat("GM") == 1) {
                cm.maxAllSkills();
            }
            cm.dispose();
        } else if (selection == 2 && cm.getPlayerStat("ADMIN") == 1) {
            var avail = "";
            for (var i = -1; i > -199; i--) {
                if (cm.getInventory(-1).getItem(i) != null) {
                    avail += "#L" + Math.abs(i) + "##t" + cm.getInventory(-1).getItem(i).getItemId() + "##l\r\n";
                }
                slot.push(i);
            }
            cm.sendSimple("��Ҫ�޸���һ��װ������ֵ�أ���\r\n#b" + avail);
        } else if (selection == 3 && cm.getPlayerStat("ADMIN") == 1) {
            var eek = cm.getAllPotentialInfo();
            var avail = "";
            for (var ii = 0; ii < eek.size(); ii++) {
                avail += "#L" + eek.get(ii) + "#ǳ�� ID " + eek.get(ii) + "#l\r\n";
            }
            cm.sendSimple("�������˽⣿��\r\n#b" + avail);
            status = 9;
        } else if (selection == 4) {
            cm.getPlayer().resetAPSP();
            cm.sendNext("��ɣ��뻻Ƶ��or���µ��롣");
            cm.dispose();
        } else {
            cm.dispose();
        }
    } else if (status == 2 && cm.getPlayerStat("ADMIN") == 1) {
        selected = selection - 1;
        var text = "";
        for (var i = 0; i < stats.length; i++) {
            text += "#L" + i + "#" + stats[i] + "#l\r\n";
        }
        cm.sendSimple("����Ҫ�޸���� #b#t" + cm.getInventory(-1).getItem(slot[selected]).getItemId() + "##k.\r\n���޸��ĸ�����ֵ����\r\n#b" + text);
    } else if (status == 3 && cm.getPlayerStat("ADMIN") == 1) {
        statsSel = selection;
        if (selection == 22) {
            cm.sendGetText("�����������ö��� #b#t" + cm.getInventory(-1).getItem(slot[selected]).getItemId() + "##k's " + stats[statsSel] + " ����ֵ?");
        } else {
            cm.sendGetNumber("������������ #b#t" + cm.getInventory(-1).getItem(slot[selected]).getItemId() + "##k's " + stats[statsSel] + " ��������ֵ?", 0, 0, 32767);
        }
    } else if (status == 4 && cm.getPlayerStat("ADMIN") == 1) {
        cm.changeStat(slot[selected], statsSel, selection);
        cm.sendOk("��� #b#t" + cm.getInventory(-1).getItem(slot[selected]).getItemId() + "##k's " + stats[statsSel] + " �ѱ�����Ϊ " + selection + ".");
        cm.dispose();
        cm.getPlayer().fakeRelog();
    } else if (status == 10 && cm.getPlayerStat("ADMIN") == 1) {
        cm.sendSimple("#L3#" + cm.getPotentialInfo(selection) + "#l");
        status = 0;
    } else {
        cm.dispose();
    }
}