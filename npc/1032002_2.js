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
            txt = "��ã�����ÿ���ܻ�����ڶ���NPC���ܻ��Ĵ���Խ�ཱ��Խ�ḻ��\r\n\r\n";

            if (cm.getPS() == 1){// cm.getPS()  ����˼�� ��ȡ����ֵ�������0 �͵ó���û�п�ʼ���� �����������е�һ������!

                txt += "#L1##b�ռ�300����֦#v4000003#�����ң�#l";
                cm.sendSimple(txt);
			}else if (cm.getPS() == 2){
                txt += "��ϲ����ɵڶ���������ȥ����֮����ϵ���������ܵ���������";
                cm.sendOk(txt);
                cm.dispose();
            }else{
                txt += "��û�������һ����������Ѿ��������ڶ���������";
                cm.sendOk(txt);
                cm.dispose();
            }

        } else if (selection == 1) {
            if (cm.getPS() == 1 && cm.haveItem(4000003,300)){
                cm.gainPS(1);//cm.gainPS(1);  ����˼�� ��������̵�һ����ʱ������� ����ֵ+1��������޷����ظ�����һ���ˡ�ֻ���賿12��ˢ�²��У�
		
                cm.gainItem(4000003, -300);
				cm.gainDY(2000);
                cm.sendOk("���̵ڶ������!");
                cm.dispose();
            }else{
                cm.sendOk("�ռ�300����֦#v4000003#������!");
                cm.dispose();
            }
        }
    }
}
