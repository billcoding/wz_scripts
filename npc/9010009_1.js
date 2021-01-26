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
            txt = "����ÿ����������NPC����һ��.\r\n\r\n";

            if (cm.getPS() == 0){// cm.getPS()  ����˼�� ��ȡ����ֵ�������0 �͵ó���û�п�ʼ���� �����������е�һ������!
                txt += "#L1##b�ռ�50������ţ��#v4000016#�����ң�#l";
                cm.sendSimple(txt);
            }else{
                txt += "���Ѿ���ɹ���Ȼ����ȥ��ŵ����˹����ͷ��������һ��.!\r\n��ڶ���������ɵ�һ����";
                cm.sendOk(txt);
                cm.dispose();
            }

        } else if (selection == 1) {
            if (cm.haveItem(4000016,50)){
                cm.gainPS(1);//cm.gainPS(1);  ����˼�� ��������̵�һ����ʱ������� ����ֵ+1��������޷����ظ�����һ���ˡ�ֻ���賿12��ˢ�²��У�
		
                cm.gainItem(4000016, -50);
            //    cm.gainMeso(+200000);//��ȡ����
           //     cm.gainExp(+100000);
                cm.gainNX(+100);
            //    cm.����(2, "[" + cm.getPlayer().getName() + "]�ɹ���ɵ�һ���������񣬻�ý��20�򣬾���10�򣬻�õ�ȯ����100�㣬���ٽ�����������");
                cm.sendOk("���̵�һ�����!��õ��100��\r\n\r\nȻ����ȥ��ŵ����˹����ͷ��������һ��.");
                cm.dispose();
            }else{
                cm.sendOk("�ռ�50������ţ��#v4000016#������!");
                cm.dispose();
            }
        }
    }
}
