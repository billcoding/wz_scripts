function start2() {
    status = -1;
    action(1, 0, 0)
}

function start(){
	cm.sendOk("��ǰ�ȼ�:"+cm.�жϵȼ�());
	cm.����Ʒ(4002000,10);	
	cm.�����(10);	
	cm.����ȯ(10);	
	cm.dispose();
}

function action2(mode, type, selection) {
    if (status <= 0 && mode <= 0) {
        cm.dispose();
        return
    }
    if (mode == 1) {
        status++
    } else {
        status--
    }
    if (status <= 0) {
        var
        selStr = "�ű�����\r\n";
        selStr += "#L1#ѡ����1#l\r\n";
		selStr += "#L2#ѡ����2#l\r\n";
		selStr += "#L3#ѡ����3#l\r\n";
		
        cm.sendSimple(selStr)
    } else if (status == 1) {
        switch (selection) {
            case 1:
				cm.sendOk("ѡ����1");
				//cm.��Ϣ(2,��123��);
				//cm.�ж���Ʒ(4010000,5);
                cm.dispose();
                break;
			case 2:
				cm.sendOk("ѡ����2");
                cm.dispose();
                break;
			case 3:
				cm.sendOk("ѡ����3");
                cm.dispose();
                break;
           
        }
    }
}