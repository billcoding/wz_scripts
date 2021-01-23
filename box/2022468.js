function start2() {
    status = -1;
    action(1, 0, 0)
}

function start(){
	cm.sendOk("当前等级:"+cm.判断等级());
	cm.给物品(4002000,10);	
	cm.给金币(10);	
	cm.给点券(10);	
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
        selStr = "脚本标题\r\n";
        selStr += "#L1#选择项1#l\r\n";
		selStr += "#L2#选择项2#l\r\n";
		selStr += "#L3#选择项3#l\r\n";
		
        cm.sendSimple(selStr)
    } else if (status == 1) {
        switch (selection) {
            case 1:
				cm.sendOk("选择项1");
				//cm.消息(2,“123”);
				//cm.判断物品(4010000,5);
                cm.dispose();
                break;
			case 2:
				cm.sendOk("选择项2");
                cm.dispose();
                break;
			case 3:
				cm.sendOk("选择项3");
                cm.dispose();
                break;
           
        }
    }
}