var ���� = "#fEffect/CharacterEff/1114000/2/0#";
var ���� = "#fEffect/CharacterEff/1022223/4/0#";
var ��ɫ��ͷ = "#fUI/UIWindow/Quest/icon6/7#";
var ������ = "#fUI/UIWindow/Quest/icon3/6#";
var ��ɫ��ͷ = "#fUI/UIWindow/Quest/icon2/7#";

function start() {
    status = -1;

    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (status >= 0 && mode == 0) {

            cm.sendOk("��л��Ĺ��٣�");
            cm.dispose();
            return;
        }
        if (mode == 1) {
            status++;
        } else {
            status--;
        }
        if (status == 0) {
            var tex2 = "";
            var text = "";
            for (i = 0; i < 10; i++) {
                text += "";
            }
            text += "" + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + "\r\n"
            text += "\t\t\t  #e��ӭ����#b����ð�յ�v079 #k!#n\r\n#r���˵�����£�\r\n���Ҫ�󣺱�����2����,��Ҫ�н��Կ��.\r\n�����󣺱�����һ��һŮ.�з����ӳ�.\r\n��齱������龭��ӳ�30%�ͽ���ָһö\r\n#d���֮��˫����ͬ��������񣬿�ÿ�˻��#v1112495# x1 \r\n\r\n#r"
            text += "������̣�\r\n1.˫���ȹ������˽�ָ.\r\n2.������Կ��.˫����Ҫ����!\r\n3.��ӽ����ͼ.��������Ҫ��100W��������ϼ�200��.\r\n4.������Ͻ��ɹ�.\r\n5.֮����#d �������� #r��ȡ������ #d�Ϲ����Ž�ָ.#r\r\n\r\n"
            text += "#L1##e#d" + ��ɫ��ͷ + "��Ҫ�����½������ͼ#l\r\n\r\n#L2##d" + ��ɫ��ͷ + "������Կ�� - ��Ҫ��� 520 ���/��.#l\r\n\r\n\r\n"//3

            text += "" + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ����
            cm.sendSimple(text);
        } else if (selection == 1) { //������Ӹ���		//cm.warp(700000000 ,0);
            if (!cm.haveItem(4031409, 1)) {
                cm.sendOk("�������ͼ��Ҫ#v4031409##z4031409#,���ȹ�����˵��");
                cm.dispose();
            } else {
                cm.warp(700000000, 0);
                cm.gainItem(4031409, -1);//
                cm.dispose();
                return;
            }
        } else if (selection == 2) {  //������Ӹ���
            if (!cm.canHold(4031409, 1)) {
                cm.sendOk("�������ˣ�������һ�£���");
                cm.dispose();
            } else if (cm.haveItem(4031409, 1)) {
                cm.sendOk("���Ѿ�����#v4031409##z4031409#,��Ҫ�ظ�����");
                cm.dispose();
            } else if (cm.getPlayer().getCSPoints(1) >= 9999) {
                cm.gainNX(-520);
                //cm.gainItem(4031409, 1);//
				//Packages.handling.world.World.Broadcast.broadcastSmega(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(),"���� : ��ð���",true).getBytes());
                cm.����(2, "��ϲ[" + cm.getPlayer().getName() + "]�ɹ�������Կ��һ���������İ���һ��������ͼ��׼�����ɣ���");
                cm.sendOk("����ɹ���");
                cm.dispose();
            } else {
                cm.sendOk("����㣬�޷�����!");
                cm.dispose();
            }
        }
    }
}


