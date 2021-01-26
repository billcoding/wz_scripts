
/*
��ԵNPC
��Ҷ��ȡ���
*/



function start() {
	status = -1;
	
	action(1, 0, 0);
}

function action(mode, type, selection) {
            if (mode == -1) {
                cm.dispose();
            }
            else {
                if (status >= 0 && mode == 0) {
                
			cm.sendOk("�����������Ҳ����㽻���ѣ�");
			cm.dispose();
			return;                    
                }
                if (mode == 1) {
			status++;
		}
		else {
			status--;
		} 
		        if (status == 0) {
				cm.sendSimple("����ʲôϡ��Źֵĺ���Ĳ����𡣡������������һ���Ŷ���ҿ��ļ۸��ǵ��Ŷ��\r\n#L1##b2��#b����Ƥ#r����1���#n#L2##b20������Ƥ#r����10���#k\r\n#L3##b2������ë#r����1���#k#L4##b20������ë#r����10���#l\r\n#L80##b200������Ƥ#r����100���#k#L81##b200������ë#r����100���#l\r\n\r\n#k������BOSS������(ÿ���ɻ���#b50#k���)��\rk#L5##r#z4001083# #L6##z4001084# #L7##z4001085#");
			} else if (status == 1) { //ʹ��50��Ҷ��ȡ50���
			if (selection == 1) { //����Ƥ
			if (cm.haveItem(4000021, 2)) {
                        cm.gainItem(4000021,-2);
			cm.gainNX(1);
			cm.sendOk("�ɹ��һ�");
                  	cm.dispose();
                   	} else {
	           	cm.sendOk("����~");
			cm.dispose(); 
			}
			} else if (selection == 80) { //����Ƥ
			if (cm.haveItem(4000021, 200)) {
                        cm.gainItem(4000021,-200);
			cm.gainNX(100);
			cm.sendOk("�ɹ��һ�");
                  	cm.dispose();
                   	} else {
	           	cm.sendOk("����~");
			cm.dispose(); }
//------------------------------�߼�����һ�----------------------------------
            } else if (selection == 81) { //����ë
			if (cm.haveItem(4003004, 200)) {
                        cm.gainItem(4003004,-200);
			cm.gainNX(100);
			cm.sendOk("�ɹ��һ�");
                  	cm.dispose();
                   	} else {
	           	cm.sendOk("����~");
			cm.dispose(); }
//-------------------------------������ת����-----------------------------
			} else if  (selection == 2) { //ʹ��500��Ҷ500���
			if (cm.haveItem(4000021, 20)) {
                        cm.gainItem(4000021,-20);
			cm.gainNX(10);
			cm.sendOk("�ɹ��һ�");
                  	cm.dispose();
                   	} else {
	           	cm.sendOk("����~");
			cm.dispose(); }
//------------------------------�߼�����һ�----------------------------------
            } else if (selection == 3) { //����ë
			if (cm.haveItem(4003004, 2)) {
                        cm.gainItem(4003004,-2);
			cm.gainNX(1);
			cm.sendOk("�ɹ��һ�");
                  	cm.dispose();
                   	} else {
	           	cm.sendOk("����~");
			cm.dispose(); }
//--------------------------------����һ�------------------------------------
            } else if (selection == 4) {
			if (cm.haveItem(4003004, 20)) {
                        cm.gainItem(4003004,-20);
			cm.gainNX(10);
			cm.sendOk("�ɹ��һ�");
                  	cm.dispose();
                   	} else {
	           	cm.sendOk("����~");
			cm.dispose(); }
//-------------------------------BOSS�һ�------------------------------------4001083
	                 } else if (selection == 5) { 
			if (cm.haveItem(4001083, 1)) {
                        cm.gainItem(4001083,-1);
			cm.gainNX(50);
			cm.sendOk("�ɹ��һ�");
                  	cm.dispose();
                   	} else {
	           	cm.sendOk("����~");
			cm.dispose(); }
	                 } else if (selection == 6) {
			if (cm.haveItem(4001084, 1)) {
                        cm.gainItem(4001084,-1);
			cm.gainNX(50);
			cm.sendOk("�ɹ��һ�");
                  	cm.dispose();
                   	} else {
	           	cm.sendOk("����~");
			cm.dispose(); } //OK 4001085
	                 } else if (selection == 7) {
			if (cm.haveItem(4001085, 1)) {
                        cm.gainItem(4001085,-1);
			cm.gainNX(50);
			cm.sendOk("�ɹ��һ�");
                  	cm.dispose();
                   	} else {
	           	cm.sendOk("����~");
			cm.dispose(); } //ok
	                 } else if (selection == 8) {
			if (cm.haveItem(4000040, 1)) {
                        cm.gainItem(4000040,-1);
			cm.gainNX(50);
			cm.sendOk("�ɹ��һ�");
                  	cm.dispose();
                   	} else {
	           	cm.sendOk("����~");
			cm.dispose(); }
	                 } else if (selection == 9) {
			if ((cm.getNX() >= 2000)) { 
			cm.gainNX(-2000);
		   	cm.gainItem(1332099,1);
			cm.sendOk("�ɹ��һ���װ��!");
                  	cm.dispose();
                   	} else {
	           	cm.sendOk("�����~");
			cm.dispose(); }
	                 } else if (selection == 10) {
			if ((cm.getNX() >= 2000)) { 
			cm.gainNX(-2000);
		   	cm.gainItem(1472100,1);
			cm.sendOk("�ɹ��һ���װ��!");
                  	cm.dispose();
                   	} else {
	           	cm.sendOk("�����~");
			cm.dispose(); }
	                 } else if (selection == 11) {
			if ((cm.getNX() >= 2000)) { 
			cm.gainNX(-2000);
		   	cm.gainItem(1482046,1);
			cm.sendOk("�ɹ��һ���װ��!");
                  	cm.dispose();
                   	} else {
	           	cm.sendOk("�����~");
			cm.dispose(); }
	                 } else if (selection == 12) {
			if ((cm.getNX() >= 2000)) { 
			cm.gainNX(-2000);
		   	cm.gainItem(1492048,1);
			cm.sendOk("�ɹ��һ���װ��!");
                  	cm.dispose();
                   	} else {
	           	cm.sendOk("�����~");
			cm.dispose(); }


}}
	}
}