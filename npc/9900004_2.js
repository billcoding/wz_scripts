var ���ڽ����� = "#fUI/UIWindow/Quest/Tab/enabled/1#";
var ��� = "#fUI/UIWindow/Quest/Tab/enabled/2#";
var ���ڽ������� = "#fUI/UIWindow/MonsterCarnival/icon1#";
var ��ɺ� = "#fUI/UIWindow/MonsterCarnival/icon0#";
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

            cm.sendOk("��л��Ĺ��٣�");
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
            var tex2 = "";
            var text = "";
            for (i = 0; i < 10; i++) {
                text += "";
            }
			//text += "#d��ɫ���ƣ�#b" + cm.getName() + "#k#n\t  #b��ǰ����ʱ�䣺#r" + cm.getGamePoints() + "����#k#n\r\n"
		//	text += "\t\t\t\r\n\r\n ���߽�������Ϊ:\r\n����ҩˮ10��     ����ҩˮ10��     ����3��  ��Ҷ100��\r\n���þ�=3000��    ���þ�=3300��    ���þ�=3700��.\r\n\r\n"
			//text += "#L1##r��ȡ���ù�Ӷ���ˣ�#v5030001#x1#l\r\n\r\n\r\n\r\n"//3
			//cm.gainItemPeriod(2000005,3,1);
            if (cm.getBossLog("ǩ��") == 0 ) {//��ȡ���ǩ��״̬
                cm.setBossLog('ǩ��');//����ǩ������
                cm.getPlayer().gainqiandao(1);
                //cm.sendOk("��ϲǩ���ɹ���");
				//cm.gainDY(300)
                cm.��Ϣ(2, "[ÿ��ǩ��] : " + cm.getPlayer().getName() + "�������ѳɹ�ǩ������ǰ����ǩ������Ϊ��" + cm.getPlayer().getqiandao() + "��.");
                //cm.dispose();
            //} else {
/*                 cm.sendOk("��������ǩ�����ˣ�");
                cm.dispose();			 */
			}
			
			
			
			if(cm.getPlayer().getGamePoints() >= 60 && cm.getPlayer().getGamePointsPD() == 0){
					text += "#L2##r"+��ɺ�+"����ʱ�䳬��60���ӣ�"+���+"#v5200002#(���)x5w#l\r\n\r\n\r\n"//3
				} else if(cm.getPlayer().getGamePoints() >= 60 && cm.getPlayer().getGamePointsPD() > 0){
					text += ""+��ɺ�+"#r����ʱ�䳬��60���ӣ�#l"+���+"\r\n\r\n"//3
				} else {
					text += ""+���ڽ�������+"#r����ʱ�䳬��60���ӣ�#l"+���ڽ�����+"#v5200002#(���)x5w\r\n\r\n"//3
			}
			
			if(cm.getPlayer().getGamePoints() >= 120 && cm.getPlayer().getGamePointsPD() == 1){
					text += "#L3##r"+��ɺ�+"����ʱ�䳬��120���ӣ�"+���+"#v2000005#x50#l\r\n\r\n\r\n"//3
				} else if(cm.getPlayer().getGamePoints() >= 120 && cm.getPlayer().getGamePointsPD() > 1){
					text += ""+��ɺ�+"#r����ʱ�䳬��120���ӣ�#l"+���+"\r\n\r\n"//3
				} else {
					text += ""+���ڽ�������+"#r����ʱ�䳬��120���ӣ�#l"+���ڽ�����+"#v2000005#x50\r\n\r\n"//3
			}
			
			if(cm.getPlayer().getGamePoints() >= 180 && cm.getPlayer().getGamePointsPD() == 2){
					text += "#L4##r"+��ɺ�+"����ʱ�䳬��180���ӣ�"+���+"#v5072000#x3��.#l\r\n\r\n\r\n"//3
				} else if(cm.getPlayer().getGamePoints() >= 180 && cm.getPlayer().getGamePointsPD() > 2){
					text += ""+��ɺ�+"#r����ʱ�䳬��180���ӣ�#l"+���+"\r\n\r\n"//3
				} else {
					text += ""+���ڽ�������+"#r����ʱ�䳬��180���ӣ�#l"+���ڽ�����+"#v5072000#x3\r\n\r\n"//3
			}
			
			if(cm.getPlayer().getGamePoints() >= 240 && cm.getPlayer().getGamePointsPD() == 3){
					text += "#L5##r"+��ɺ�+"����ʱ�䳬��240���ӣ�"+���+"#v5200001#(���þ�)x200#l\r\n\r\n\r\n"//3
				} else if(cm.getPlayer().getGamePoints() >= 240 && cm.getPlayer().getGamePointsPD() > 3){
					text += ""+��ɺ�+"#r����ʱ�䳬��240���ӣ�#l"+���+"\r\n\r\n"//3
				} else {
					text += ""+���ڽ�������+"#r����ʱ�䳬��240���ӣ�#l"+���ڽ�����+"#v5200001#(���þ�)x200\r\n\r\n"//3
			}
			
			if(cm.getPlayer().getGamePoints() >= 300 && cm.getPlayer().getGamePointsPD() == 4){
					text += "#L6##r"+��ɺ�+"����ʱ�䳬��300���ӣ�"+���+"#v4310019#(�����)x1#l\r\n\r\n\r\n"//3
				} else if(cm.getPlayer().getGamePoints() >= 300 && cm.getPlayer().getGamePointsPD() > 4){
					text += ""+��ɺ�+"#r����ʱ�䳬��300���ӣ�#l"+���+"\r\n\r\n"//3 
				} else {
					text += ""+���ڽ�������+"#r����ʱ�䳬��300���ӣ�#l"+���ڽ�����+"#v4310019#(�����)x1\r\n\r\n"//3
			}
			
			if(cm.getPlayer().getGamePoints() >= 360 && cm.getPlayer().getGamePointsPD() == 5){
					text += "#L7##r"+��ɺ�+"����ʱ�䳬��360���ӣ�"+���+"#v5200001#(���þ�)x200#l\r\n\r\n\r\n"//3
				} else if(cm.getPlayer().getGamePoints() >= 360 && cm.getPlayer().getGamePointsPD() > 5){
					text += ""+��ɺ�+"#r����ʱ�䳬��360���ӣ�#l"+���+"\r\n\r\n"//3
				} else {
					text += ""+���ڽ�������+"#r����ʱ�䳬��360���ӣ�#l"+���ڽ�����+"#v5200001#(���þ�)x200\r\n\r\n"//3
			}
			
			if(cm.getPlayer().getGamePoints() >= 420 && cm.getPlayer().getGamePointsPD() == 6){
					text += "#L8##r"+��ɺ�+"����ʱ�䳬��420���ӣ�"+���+"#v5200002#(���)x40w#l\r\n\r\n\r\n"//3
				} else if(cm.getPlayer().getGamePoints() >= 420 && cm.getPlayer().getGamePointsPD() > 6){
					text += ""+��ɺ�+"#r����ʱ�䳬��420���ӣ�#l"+���+"\r\n\r\n"//3
				} else {
					text += ""+���ڽ�������+"#r����ʱ�䳬��420���ӣ�#l"+���ڽ�����+"#v5200002#(���)x40w\r\n\r\n"//3
			}
 			if(cm.getPlayer().getGamePoints() >= 600 && cm.getPlayer().getGamePointsPD() == 7){
					text += "#L9##r"+��ɺ�+"����ʱ�䳬��600���ӣ�"+���+"#v4310019#(�����)x2#l\r\n\r\n\r\n"//3
				} else if(cm.getPlayer().getGamePoints() >= 420 && cm.getPlayer().getGamePointsPD() > 7){
					text += ""+��ɺ�+"#r����ʱ�䳬��600���ӣ�#l"+���+"\r\n\r\n"//3
				} else {
					text += ""+���ڽ�������+"#r����ʱ�䳬��600���ӣ�#l"+���ڽ�����+"#v4310019#(�����)x2\r\n\r\n"//3
			}           
			if(cm.getPlayer().getGamePoints() >= 720 && cm.getPlayer().getGamePointsPD() == 8){
					text += "#L10##r"+��ɺ�+"����ʱ�䳬��720���ӣ�"+���+"#v5200002#(��ȯ)x800#l\r\n\r\n\r\n"//3
				} else if(cm.getPlayer().getGamePoints() >= 420 && cm.getPlayer().getGamePointsPD() > 8){
					text += ""+��ɺ�+"#r����ʱ�䳬��720���ӣ�#l"+���+"\r\n\r\n"//3
				} else {
					text += ""+���ڽ�������+"#r����ʱ�䳬��720���ӣ�#l"+���ڽ�����+"#v5200002#(��ȯ)x800\r\n\r\n"//3
			}			
			
			
			
			
			
			
			cm.sendSimple(text);
        } else if (selection == 1) {
			if(cm.haveItem(5030001, 1)){
            cm.sendOk("���Ѿ���ȡ���ˡ��޷�������ȡ��");
            cm.dispose();
			}else if (cm.haveItem(5030000, 1)){
            cm.sendOk("���Ѿ���ȡ���ˡ��޷�������ȡ��");
            cm.dispose();
			}else{
			cm.gainItem(5030001, 1);//
			//cm.gainGamePointsPD(1);
           // cm.sendOk("��ȡ�����ɹ���");
			cm.worldMessage(6,"��ң�["+cm.getName()+"]��ȡ���ù�Ӷ���ˣ�");
            cm.dispose();
			}
        } else if (selection == 2) {
			cm.�����(50000);
			cm.gainGamePointsPD(1);
            //cm.sendOk("��ȡ�����ɹ���");
			cm.worldMessage(6,"��ң�["+cm.getName()+"]��ȡ��60�������߽��������5��.");
            cm.dispose();
			cm.openNpc(9900004,2);
        } else if (selection == 3) {
			//cm.gainItem(2000005, 10);
			cm.gainItemPeriod(2000005,50,1);
			cm.gainGamePointsPD(1);
            //cm.sendOk("��ȡ�����ɹ���");
			cm.worldMessage(6,"��ң�["+cm.getName()+"]��ȡ��120�������߽���������ҩˮ50��.");
            cm.dispose();
			cm.openNpc(9900004,2);
        } else if (selection == 4) {
			cm.gainItem(5072000, 3);
			cm.gainGamePointsPD(1);
            //cm.sendOk("��ȡ�����ɹ���");
			cm.worldMessage(6,"��ң�["+cm.getName()+"]��ȡ��180�������߽�������������*3��.");
            cm.dispose();
			cm.openNpc(9900004,2);
        } else if (selection == 5) {
			//cm.gainItem(4001126, 100);//��Ҷ
			cm.gainDY(200);
			cm.gainGamePointsPD(1);
            //cm.sendOk("��ȡ�����ɹ���");
			cm.worldMessage(6,"��ң�["+cm.getName()+"]��ȡ��240�������߽���������ȯ200.");
            cm.dispose();
			cm.openNpc(9900004,2);
        } else if (selection == 6) {
			cm.gainItem(4310019, 1);
			cm.gainGamePointsPD(1);
            //cm.sendOk("��ȡ�����ɹ���");
			cm.worldMessage(6,"��ң�["+cm.getName()+"]��ȡ��300�������߽����������x1.");
            cm.dispose();
			cm.openNpc(9900004,2);
        } else if (selection == 7) {
            cm.gainDY(200)
			cm.gainGamePointsPD(1);
            //cm.sendOk("��ȡ�����ɹ���");
			cm.worldMessage(6,"��ң�["+cm.getName()+"]��ȡ��360�������߽��������þ�200.");
            cm.dispose();
			cm.openNpc(9900004,2);
        } else if (selection == 8) {
            cm.�����(400000)
			cm.gainGamePointsPD(1);
            //cm.sendOk("��ȡ�����ɹ���");
			cm.worldMessage(6,"��ң�["+cm.getName()+"]��ȡ��420�������߽��������40��.");
            cm.dispose();
			cm.openNpc(9900004,2);
        } else if (selection == 9) {
            cm.gainItem(4310019, 2);
			cm.gainGamePointsPD(1);
            //cm.sendOk("��ȡ�����ɹ���");
			cm.worldMessage(6,"��ң�["+cm.getName()+"]��ȡ��600�������߽����������x2.");
            cm.dispose();
			cm.openNpc(9900004,2);
        } else if (selection == 10) {
            cm.����ȯ(800)
			cm.gainGamePointsPD(1);
            //cm.sendOk("��ȡ�����ɹ���");
			cm.worldMessage(6,"��ң�["+cm.getName()+"]��ȡ��720�������߽�������ȯ800.");
            cm.dispose();
			cm.openNpc(9900004,2);
		}
           // cm.openNpc(9900004,2);
    }
}


