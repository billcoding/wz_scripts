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
			cm.sendNext("սʿӵ�к�ǿ�Ĺ�����������,�����ս���д��ڷǳ���Ҫ�ĵ�λ.��Ϊ����������ǿ,����ѧϰ�߼����ܵĻ����Է��ӳ�ǿ��������");
		} else if (status == 1) {
			cm.sendYesNo("��ô������������սʿ��");

			cm.dispose();
		}
	}
}	
