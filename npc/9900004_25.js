


var status = 0;

	function start() {
		status = -1;
		action(1, 0, 0);
		}
	function action(mode, type, selection) {
		if (mode == -1) {
		cm.dispose();
		} else {
		if (status >= 0 && mode == 0) {
		cm.dispose();
		return;
		}
		if (mode == 1)
		status++;
		else
		status--;


	if (status == 0) {

	    var textz = "���ڵ��ı�BOSS��ɱ?����������.��HP��ɣ�÷���!\r\n\r\n";

		textz += "#r#L0#����+1000HP��ɣ�÷�(��)#l\r\n\r\n";

		textz += "#r#L1#����+1000HP��ɣ�÷�(Ů)#l\r\n\r\n";

		textz += "#r#L2#����+2000HP��ɣ�÷�(��)#l\r\n\r\n";

		textz += "#r#L3#����+2000HP��ɣ�÷�(Ů)#l\r\n\r\n";

		textz += "#r#L4#����+3000HP��ɣ�÷�(��)#l\r\n\r\n";

		textz += "#r#L5#����+3000HP��ɣ�÷�(Ů)#l\r\n\r\n";

		cm.sendSimple (textz);  

	}else if (status == 1) {

	if (selection == 0){
		if (!cm.haveItem(1050018)) {
 			cm.sendOk("�����#v1050018##z1050018#\r\n\#rע:����Ʒ������֮��ɣ�÷�������#k");
      			cm.dispose();
		} else{
     			cm.gainItem(1050018,-1);
			//var ID = 1050100;//��ԡ��
                        cm.gainItem(1050100,0,0,0,0,1000,0,0,0,23,24,0,0,0,0,1,0,0);
                        cm.����(1, "��ң�[" + cm.getName() + "]�ɹ�����+1000HP����ԡ��(��)!,��ҹ�ϲ��!");
      			cm.dispose();
			}

	}else if (selection == 1){
		if (!cm.haveItem(1051017)) {
 			cm.sendOk("�����#v1051017##z1051017#\r\n\#rע:����Ʒ������֮��ɣ�÷�������#k");
      			cm.dispose();

		} else{
     			cm.gainItem(1051017,-1);
			//var ID = 1051098;//��ԡ��
                        cm.gainItem(1051098,0,0,0,0,1000,0,0,0,23,24,0,0,0,0,1,0,0);
                        cm.����(1, "��ң�[" + cm.getName() + "]�ɹ�����+1000HP�ĺ�ԡ��(Ů)!,��ҹ�ϲ��!");
      			cm.dispose();
			}

	}else if (selection == 2){
		if (!cm.haveItem(1050100)) {
 			cm.sendOk("�����#v1050100##z1050100#\r\n5��#v4000040##z4000040#\r\n30��#v4021007##z4021007#\r\n1��#v4011007##z4011007#\r\n1��#v4021009##z4021009#\r\n#r���1��DQ\r\n#rע:����Ʒ#v1050100##z1050100#��1000Ѫ�»��#k");
      			cm.dispose();
		} else if (!cm.haveItem(4000040,5)) {
 			cm.sendOk("�����5��#v4000040##z4000040#\r\n\#rע:����Ʒ�ɻ�ɱĢ�������#k");
      			cm.dispose();
		} else if (!cm.haveItem(4021007,30)) {
 			cm.sendOk("�����30��#v4021007##z4021007#\r\n\#rע:����Ʒ��Ұ��������ĸ��ϳɻ��#k");
      			cm.dispose();
		} else if (!cm.haveItem(4011007)) {
 			cm.sendOk("�����1��#v4011007##z4011007#\r\n\#rע:����Ʒ�ɸ��ֳ�Ʒ��ʯ�ϳ�#k");
      			cm.dispose();
		} else if (!cm.haveItem(4021009)) {
 			cm.sendOk("�����#v4021009##z4021009#\r\n\#rע:����Ʒ�ɸ��ֳ�Ʒ��ʯ�ϳ�#k");
      			cm.dispose();
          	} else if (cm.getPlayer().getNX() < 10000) {
 			cm.sendOk("�����1����");
      			cm.dispose();

		} else{
     			cm.gainItem(4000040,-5);
			cm.gainItem(4021007,-30);
			cm.gainItem(4011007,-1);
			cm.gainItem(4021009,-1);
			cm.gainItem(1050100,-1);
			cm.gainNX(-10000);
			//var ID = 1050127;//ԡ��
                        cm.gainItem(1050127,3,3,3,3,2000,0,0,0,23,24,0,0,0,0,1,0,0);
                        cm.����(1, "��ң�[" + cm.getName() + "]�ɹ�����+2000HP��ԡ��(��)!,��ҹ�ϲ��!");
      			cm.dispose();
			}

	}else if (selection == 3){
		if (!cm.haveItem(1051098)) {
 			cm.sendOk("�����#v1051098##z1051098#\r\n5��#v4000040##z4000040#\r\n30��#v4021007##z4021007#\r\n1��#v4011007##z4011007#\r\n1��#v4021009##z4021009#\r\n#r���1��DQ\r\n#rע:����Ʒ#v1051098##z1051098#��1000Ѫ�»��#k");
      			cm.dispose();
		} else if (!cm.haveItem(4000040,5)) {
 			cm.sendOk("�����5��#v4000040##z4000040#\r\n\#rע:����Ʒ�ɻ�ɱĢ�������#k");
      			cm.dispose();
		} else if (!cm.haveItem(4021007,30)) {
 			cm.sendOk("�����30��#v4021007##z4021007#\r\n\#rע:����Ʒ��Ұ��������ĸ��ϳɻ��#k");
      			cm.dispose();
		} else if (!cm.haveItem(4011007)) {
 			cm.sendOk("�����1��#v4011007##z4011007#\r\n\#rע:����Ʒ�ɸ��ֳ�Ʒ��ʯ�ϳ�#k");
      			cm.dispose();
		} else if (!cm.haveItem(4021009)) {
 			cm.sendOk("�����#v4021009##z4021009#\r\n\#rע:����Ʒ�ɸ��ֳ�Ʒ��ʯ�ϳ�#k");
      			cm.dispose();
          	} else if (cm.getPlayer().getNX() < 10000) {
 			cm.sendOk("�����1����");
      			cm.dispose();

		} else{
     			cm.gainItem(4000040,-5);
			cm.gainItem(4021007,-30);
			cm.gainItem(4011007,-1);
			cm.gainItem(4021009,-1);
			cm.gainItem(1051098,-1);
			cm.gainNX(-10000);
			//var ID = 1051140;//��ɫ��ԡ��
                        cm.gainItem(1051140,3,3,3,3,2000,0,0,0,23,24,0,0,0,0,1,0,0);
                        cm.����(1, "��ң�[" + cm.getName() + "]�ɹ�����+2000HP�Ļ�ɫ��ԡ��(Ů)!,��ҹ�ϲ��!"); 
      			cm.dispose();
			}

	}else if (selection == 4){
		if (!cm.haveItem(1050127)) {
 			cm.sendOk("�����#v1050127##z1050127#\r\n1��#v4001084##z4001084#\r\n1��#v4001083##z4001083#\r\n1��#v4001085##z4001085#\r\n300��#v4310030##z4310030#\r\n#r���1��DQ\r\n#rע:����Ʒ#v1050127##z1050127#��2000Ѫ�»��#k");
      			cm.dispose();
		} else if (!cm.haveItem(4001084)) {
 			cm.sendOk("�����#v4001084##z4001084#\r\n\#rע:����Ʒ�ɻ�ɱ������ͼ˹(����)���#k");
      			cm.dispose();
		} else if (!cm.haveItem(4001083)) {
 			cm.sendOk("�����#v4001083##z4001083#\r\n\#rע:����Ʒ�ɻ�ɱ�������#k");
      			cm.dispose();
		} else if (!cm.haveItem(4001085)) {
 			cm.sendOk("�����#v4001085##z4001085#\r\n\#rע:����Ʒ�ɻ�ɱ��ɱ�������#k");
      			cm.dispose();
		} else if (!cm.haveItem(4310030,300)) {
 			cm.sendOk("�����300��#v4310030##z4310030#\r\n\#rע:����Ʒ����ʱ������#k");
      			cm.dispose();
          	} else if (cm.getPlayer().getNX() < 10000) {
 			cm.sendOk("�����1����");
      			cm.dispose();

		} else{
     			cm.gainItem(4001084,-1);
			cm.gainItem(4310030,-300);
			cm.gainItem(4001083,-1);
			cm.gainItem(4001085,-1);
			cm.gainItem(1050127,-1);
			cm.gainNX(-10000);
			//var ID = 1052358;//δ֪�׷�9
                        cm.gainItem(1052358,10,10,10,10,3000,0,5,5,23,24,5,5,0,0,1,0,0);
                        cm.����(1, "��ң�[" + cm.getName() + "]�ɹ�����+3000HP���׷�(��)!,�Բ�ţX��~��ҹ�ϲ��!"); 
      			cm.dispose();
			}

	}else if (selection == 5){
		if (!cm.haveItem(1051140)) {
 			cm.sendOk("�����#v1051140##z1051140#\r\n1��#v4001084##z4001084#\r\n1��#v4001083##z4001083#\r\n1��#v4001085##z4001085#\r\n300��#v4310030##z4310030#\r\n#r���1��DQ\r\n#rע:����Ʒ#v1051140##z1051140#��2000Ѫ�»��#k");
      			cm.dispose();
		} else if (!cm.haveItem(4001084)) {
 			cm.sendOk("�����#v4001084##z4001084#\r\n\#rע:����Ʒ�ɻ�ɱ������ͼ˹(����)���#k");
      			cm.dispose();
		} else if (!cm.haveItem(4001083)) {
 			cm.sendOk("�����#v4001083##z4001083#\r\n\#rע:����Ʒ�ɻ�ɱ�������#k");
      			cm.dispose();
		} else if (!cm.haveItem(4001085)) {
 			cm.sendOk("�����#v4001085##z4001085#\r\n\#rע:����Ʒ�ɻ�ɱ��ɱ�������#k");
      			cm.dispose();
		} else if (!cm.haveItem(4310030,300)) {
 			cm.sendOk("�����300��#v4310030##z4310030#\r\n\#rע:����Ʒ����ʱ������#k");
      			cm.dispose();
          	} else if (cm.getPlayer().getNX() < 10000) {
 			cm.sendOk("�����1����");
      			cm.dispose();

		} else{
     			cm.gainItem(4001084,-1);
			cm.gainItem(4310030,-300);
			cm.gainItem(4001083,-1);
			cm.gainItem(4001085,-1);
			cm.gainItem(1051140,-1);
			cm.gainNX(-10000);
			//var ID = 1052358;//δ֪�׷�9
	                cm.gainItem(1052358,10,10,10,10,3000,0,5,5,23,24,5,5,0,0,1,0,0);
                        cm.����(1, "��ң�[" + cm.getName() + "]�ɹ�����+3000HP���׷�(Ů)!,�Բ�ţX��~��ҹ�ϲ��!"); 
      			cm.dispose();
			}

}
}
}
}
