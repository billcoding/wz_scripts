/* global cm, Packages, MapleItemInformationProvider, World, MaplePacketCreator */

importPackage(Packages.tools);
importPackage(Packages.handling.world);
importPackage(Packages.server);

var status = -1;
var selected = 0;
var bag = -1;
var Cash = 0;
var itemId = 0;
var maxtimesperday = 5;
var neededCash = 10;
var s = 0;
var h = 0;

var msg = "";

var edit = false;

var inv = null;
var statsSel = null;

var slot = Array();
var bosslog = ["�����", "���һ", "��ݶ�", "�����", "�����", "�����", "�����"];

var d = new Date();
var day = d.getDay();

function start() {
    if (edit && !cm.getPlayer().isGM()) {
        msg = "��NPC#rά����#k�����Ժ����ԡ�";
        cm.sendNext(msg);
        cm.dispose();
        return;
    }
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else if (mode == 0) {
        status--;
    } else {
        cm.dispose();
        return;
    }

    if (status == 0) {
        if (cm.getPlayer().getAcLog(bosslog[day] + "_�㲥") >= maxtimesperday) {
            msg = "һ�����ʹ�ô���Ϊ#r" + maxtimesperday;
            cm.sendNext(msg);
            cm.dispose();
            return;
        }
        msg = "��NPC�����ṩ�����㲥���ܣ�ʹ��һ��Ϊ" + neededCash + "�����(����ѡ�����/��Ҷ����)\r\n" +
                "��ѡ����ʹ�õĵ�����\r\n \r\n#r" +
                "#L1#һ�����\r\n" +
                "#L2#��Ҷ����";
        cm.sendSimple(msg);
    } else if (status == 1) {
        if (mode == 1) {
            Cash = selection;
        }
        msg = "��ѡ��Ҫ�����ĵ�������#r\r\n" +
                "#L1#װ����\r\n" +
                "#L2#������\r\n" +
                "#L3#װ����\r\n" +
                "#L4#������\r\n" +
                "#L5#������";
        cm.sendSimple(msg);
    } else if (status == 2) {
        msg = "��ѡ��Ҫ�㲥�ĵ���\r\n";
        if (mode == 1) {
            bag = selection;
            inv = cm.getInventory(bag);
        }
        for (var i = 1; i <= inv.getSlotLimit(); i++) {
            slot.push(i);
            var it = inv.getItem(i);
            if (it != null) {
                var itemid = it.getItemId();
                msg += "#L" + i + "##v" + itemid + "##t" + itemid + "##l\r\n";
            }
        }
        cm.sendSimple(msg);
    } else if (status == 3) {
        selected = selection - 1;
        if (selected >= inv.getSlotLimit()) {
            msg = "�������Ժ����ԡ�";
            cm.sendNext(msg);
            cm.dispose();
            return;
        }
        try {
            statsSel = inv.getItem(slot[selected]);
        } catch (err) {

        }
        if (statsSel == null) {
            msg = "�������Ժ����ԡ�";
            cm.sendNext(msg);
            cm.dispose();
            return;
        }
        itemId = statsSel.getItemId();
        msg = "��ȷ�����������Ƿ���ȷ��\r\n" +
                "\tһ��ʹ�õ�������Ϊ��" + (Cash == 1 ? "��ͨ����" : Cash == 2 ? "��Ҷ����" : "��������") + "\r\n" +
                "\t����ѡ�������λΪ��" + (bag == 1 ? "װ��" : bag == 2 ? "����" : bag == 3 ? "װ��" : bag == 4 ? "����" : bag == 5 ? "����" : "��������") + "��\r\n" +
                "\t������ѡ��ĵ���Ϊ��#v" + itemId + "##t" + itemId + "#\r\n";
        cm.sendYesNo(msg);
    } else if (status == 4) {
        // �ɰ湦��
        // msg = "������Ҫ�㲥��ѶϢ";
        // cm.sendGetText(msg);
        msg = "��ѡ��Ҫ�㲥������Ƶ����ֵ( Ƶ��-���� ��Ƶ��)\r\n" +
                "#L1#1\r\n" +
                "#L2#2\r\n" +
                "#L3#3\r\n" +
                "#L4#4\r\n" +
                "#L5#5\r\n" +
                "#L6#6\r\n" +
                "#L7#7\r\n" +
                "#L8#8\r\n" +
                "#L9#9\r\n";
        cm.sendSimple(msg);
    } else if (status == 5) {
        s = selection;
        msg = "��ѡ��Ҫ�㲥�����Ķ�����ֵ( Ƶ��-���� �Ķ���)\r\n" +
                "#L1#1\r\n" +
                "#L2#2\r\n" +
                "#L3#3\r\n" +
                "#L4#4\r\n" +
                "#L5#5\r\n" +
                "#L6#6\r\n" +
                "#L7#7\r\n" +
                "#L8#8\r\n" +
                "#L9#9\r\n";
        cm.sendSimple(msg);
    } else if (status == 6) {
        h = selection;
        if (cm.getPlayer().getCSPoints(Cash) < neededCash) {
            msg = "���ĵ������㡣";
            cm.sendNext(msg);
            cm.dispose();
            return;
        }
        cm.getPlayer().setAcLog(bosslog[day]);
        cm.getPlayer().modifyCSPoints(Cash, -neededCash, false);
        // var text = cm.getText();
        var text = "      " + s + " - " + h + " ��������������!";
        World.Broadcast.broadcastMessage(MaplePacketCreator.getGachaponMega(cm.getPlayer().getName(), " : " + text, statsSel, 0).getBytes());
        cm.dispose();
    } else {
        cm.dispose();
    }
}