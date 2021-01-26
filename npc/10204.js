var status = 0;
var job;



function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if ((mode == 0 && status == 2) || (mode == 0 && status == 13)) {
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			cm.sendNext("����ƾ������ݼ�����������˷���ٷ����еĶ�ǹ���߿���ʹ��˲����Լ���˵ĸ���.ʹ�ö�ǹ�ĺ�������ѡ�������ӵ�����Ч�ع������˻������ڴ��Ϲ�������,ʹ�ø�ȭ�׵ĺ������Ա���󷢻Ӹ�ǿ��������");
		} else if (status == 1) {
			cm.sendYesNo("��ô�����������麣����");
		} else if (status == 2) {

			cm.dispose();
		}
	}
}	
