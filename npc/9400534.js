function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (status == 0) {
        var
        selStr = "#r#e��ʱ����\r\n";
        //selStr += "#L1#����ѡ��1\r\n";

		var ��ʱ = cm.������ѯ1(1);
        for (var i in ��ʱ) {
            var ��ƷID = ��ʱ[i].itemId;
            var ��Ʒ���� = ��ʱ[i].itemCount;
			var ��Ǯ = ��ʱ[i].meso;
			var ��� = ��ʱ[i].cash;
            selStr += "#L" + (1000 + i) + "##v" + ��ƷID + "##z" + ��ƷID + "# ����:" + ��Ʒ���� + "��#l\r\n";
			//cm.��Ϣ(5,��ƷID+"  "+��Ʒ����+"  "+ ��Ǯ+"  "+���)
			
			
        }
			cm.sendNext(selStr);
			//cm.�Ի�����();
		
		
		
		
		
        //cm.sendNext(text);
    } else if (selection == 1) {
        var
        text1 = "ѡ��1�ű�����\r\n";
        text1 += "#L2#����ѡ��2\r\n";

        cm.sendNext(text1);
    } else if (selection == 2) {
		var
        text2 = "ѡ��1�ű�����\r\n";
        text2 += "#L3#����ѡ��3\r\n";
		
		cm.sendNext(text2);
    } else if (selection == 3) {

    } else if (selection == 4) {

    } else if (selection == 5) {

    } else if (selection == 20) {

	} else if (selection > 999) {
		var ��ʱ = cm.������ѯ1(1);
        var i = selection - 1000;
        var ��ƷID = ��ʱ[i].itemId;
        var ��Ʒ���� = ��ʱ[i].itemCount;
        cm.sendOk(��ƷID + " - " + ��Ʒ����);
		cm.�Ի�����();
    }
}