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
            txt = "����ÿ�����̵�2��NPCŶ��\r\n\r\n";

            if (cm.getPS() == 1){// cm.getPS()  ����˼�� ��ȡ����ֵ�������1 �͵ó��������Ѿ�����˵�һ�� �����������еڶ�������!

                txt += "#L1##b�ռ�100����Һ��#v4000004#�����ң���#l";
                cm.sendSimple(txt);
            }else{
                txt += "���Ѿ���ɹ���Ȼ����ȥħ����������.\r\n��ڶ���������";
                cm.sendOk(txt);
                cm.dispose();
            }

        } else if (selection == 1) {
            if (cm.haveItem(4000004,100)){
                cm.gainPS(1);//cm.gainPS(1);  ����˼�� ��������̵�һ����ʱ������� ����ֵ+1��������޷����ظ����ڶ����ˡ�ֻ���賿12��ˢ�²��У�
		
                cm.gainItem(4000004, -100);
//cm.gainExp(+150000);
//cm.gainMeso(+300000);
cm.gainNX(+200);
//cm.����(2, "[" + cm.getPlayer().getName() + "]�ɹ���ɵڶ����������񣬻�ý��30�򣬾���15�򣬻�õ�ȯ����200�㣬���ٽ�����������");
                cm.sendOk("���̵�2�����!��ϲ��õ��200��\r\n\r\nȻ����ȥ��.ħ�����ֽ�����һ����");
                cm.dispose();
            }else{
                cm.sendOk("�ռ�100����Һ��#v4000004#������!");
                cm.dispose();
            }
        }
    }
}
