importPackage(Packages.client);
var status = 0;
function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        if (status == 0) {
            var txt = "";
            txt = "��ã�����ÿ���ܻ�������廷NPC���ܻ��Ĵ���Խ�ཱ��Խ�ḻ��\r\n\r\n";

            if (cm.getPS() == 4){// cm.getPS()  ����˼�� ��ȡ����ֵ�������0 �͵ó���û�п�ʼ���� �����������е�һ������!

                txt += "#L1##b�ռ�5���ƽ�#v4011006#�����ң�#l";
                cm.sendSimple(txt);
			}else if (cm.getPS() == 5){
                txt += "��ϲ����ɵ��廷������ȥͯ������ϵС׿���ܵ���������";
                cm.sendOk(txt);
                cm.dispose();
            }else{
                txt += "��û�������һ����������Ѿ��������ڶ���������";
                cm.sendOk(txt);
                cm.dispose();
            }

        } else if (selection == 1) {
            if (cm.getPS() == 4 && cm.haveItem(4011006,5)){
                cm.gainPS(1);//cm.gainPS(1);  ����˼�� ��������̵�һ����ʱ������� ����ֵ+1��������޷����ظ�����һ���ˡ�ֻ���賿12��ˢ�²��У�
		
                cm.gainItem(4011006, -5);
				cm.gainMeso(2000000);
                cm.sendOk("���̵��廷���!");
                cm.dispose();
            }else{
                cm.sendOk("�ռ�5���ƽ�#v4011006#������!");
                cm.dispose();
            }
        }
    }
}
