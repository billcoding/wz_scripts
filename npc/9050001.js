var ����2 = "#fEffect/CharacterEff/1114000/2/0#";
var ���� = "#fMap/MapHelper/weather/witch/3#";
var С���� = "#fItem/Etc/0427/04270001/Icon9/0#";  //
var �۰��� = "#fItem/Etc/0427/04270005/Icon8/1#";  //
var �̻� = "#fMap/MapHelper/weather/squib/squib1/3#";//�̻�
var а��С�� = "#fEffect/CharacterEff/1112960/3/0#";  //а��С�� ��С��
function start() {
    status = -1;
    action(1, 0, 0);
}
var ������;
var itemId;
var itemCount;
function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (status == 0) {
        //cm.��Ϣ(2,"[ʱװǿ��] : "+cm.�齱��Ʒ��ѯ(1802026));
        var

            text = "";
        text += "" + ����2 + ����2 + ����2 + ����2 + ����2 + ����2 + ����2 + ����2 + ����2 + ����2 + ����2 + ����2 + ����2 + ����2 + ����2 + ����2 + ����2 + ����2 + ����2 + "\r\n"
        text += "\t\t#e  ��ӭ����#b����ð�յ�-������齱#k!#n\r\n\r\n"
        text += "ð�յ�ת�������и���#bװ���������ϡ�е�ʱװ����#kŶ��ʹ�á�#b������ĵ�#k���Ϳ��Գ齱����#r��Ϸ�̳��еġ�������-����Ϸ��������#k�����߻����μ�һЩ#r�#k���á�\r\n"
        text += "#L1000000#" + С���� + "�鿴���������#l                  #r��ǰ����ֵ��" + ȡ�����(30, 100) + "\r\n";
        text += "#b#L2000000#" + С���� + "����������齱�����Σ�#l\r\n";
        text += "#L3000000#" + С���� + "����������齱��10���飩#l\r\n";
        text += "#L4000000#" + С���� + "����������齱��50���飩#l\r\n";
        text += "#L5000000#" + а��С�� + "�򿪷������̵�#l";
        text += "#L6000000#" + а��С�� + "�򿪷�����ֿ�#l\r\n\r\n";
        text += ����2 + ����2 + ����2 + ����2 + ����2 + ����2 + ����2 + ����2 + ����2 + ����2 + ����2 + ����2 + ����2 + ����2 + ����2 + ����2 + ����2 + ����2 + ����2
        cm.sendNext(text);
    } else if (selection == 1000000) {
        cm.sendOk("������������һЩϡ�е��ߺͼ�Ʒ����\r\n����#b�������ף��֣�#k�ӷ���������ͻ���Ȼ2-7����\r\n��������ϡ�е��ߵ���������\r\nÿ���ڼ��ջ��нڼ����޶�װ������\r\n#r#e������ֿ�#n#k����רΪϲ���齱�����׼���Ĺ��ܣ� �齱�����е��߶�����������ֿ⣬������Ҫ��ʱ����Դӷ�����ֿ�ȡ����������鵽ϡ��װ����ʱ��û�����Եģ���Ҫ�ż����ӷ�����ֿ�ȡ��װ����ʱ������������Ŷ��\r\n#r#e�����޶���#n#k���˵��߿����ڷ������̵껻��һЩ�޶��ĵ���");
    } else if (selection == 2000000) {
		if (cm.�ж���Ʒ(5220040,1)){
			cm.����Ʒ(5220040,-1);
        var cc = cm.�齱��ʼ(1, 1);
			cm.sendOk(cc);
		} else{
			cm.sendOk("#e#r��ȷ�ϱ�������#v5220040##z5220040#");
		}
        cm.�Ի�����();
    } else if (selection == 3000000) {
		if (cm.�ж���Ʒ(5220040,10)){
			cm.����Ʒ(5220040,-10);
			var cc = cm.�齱��ʼ(1, 10);
			cm.sendOk(cc);
		} else{
			cm.sendOk("#e#r��ȷ�ϱ�������#v5220040##z5220040#");
		}
        cm.�Ի�����();
    } else if (selection == 4000000) {
		if (cm.�ж���Ʒ(5220040,50)){
			cm.����Ʒ(5220040,-50);
			var cc = cm.�齱��ʼ(1, 50);
			cm.sendOk(cc);
		} else{
			cm.sendOk("#e#r��ȷ�ϱ�������#v5220040##z5220040#");
		}
        cm.�Ի�����();
    } else if (selection == 5000000) {

    } else if (selection == 6000000) {
		//cm.��Ϣ(5,"12313")
        var text = "";
        text += "" + ����2 + ����2 + ����2 + ����2 + ����2 + ����2 + ����2 + ����2 + ����2 + ����2 + ����2 + ����2 + ����2 + ����2 + ����2 + ����2 + ����2 + ����2 + ����2 + "\r\n"
        text += "\t\t           #b#e������齱�ֿ�#k#n\r\n\r\n"
        text += "�ֿ���Ϊϲ���齱�����׼���ģ��齱�ĵ��߶������ڲֿ���ұ��ܣ���ҿ�����ʱȡ��ȥ\r\n"
        text += "#r#e   #L31000000#" + а��С�� + "װ����ֿ�#l         ";
        text += "#L32000000#" + а��С�� + "������ֿ�#l\r\n";
        text += "   #L33000000#" + а��С�� + "������ֿ�#l         ";
        text += "#L34000000#" + а��С�� + "������ֿ�#l\r\n";
        text += "   #L35000000#" + а��С�� + "������ֿ�#l         ";
        text += "#L36000000#" + а��С�� + "#b[һ��ȡ��]#l\r\n\r\n";
        cm.sendNext(text);
    } else if (selection == 31000000) {
		var selStr = "#e#r��ѡ����Ҫȡ������Ʒ��\r\n\r\n#b";
        ������ = cm.�齱��ѯ1(1, 1);
        for (var i in ������) {
             itemId = ������[i].itemId;
             itemCount = ������[i].itemCount;
            selStr += "#L" + (100000 + i) + "##d#v" + itemId + "##z" + itemId + "# #b  ���� " + itemCount + "#b ��#l\r\n";
        }
			cm.sendNext(selStr);
    } else if (selection == 32000000) {
		var selStr = "#e#r��ѡ����Ҫȡ������Ʒ��\r\n\r\n#b";
        ������ = cm.�齱��ѯ1(1, 2);
        for (var i in ������) {
             itemId = ������[i].itemId;
             itemCount = ������[i].itemCount;
            selStr += "#L" + (100000 + i) + "##d#v" + itemId + "##z" + itemId + "# #b  ���� " + itemCount + "#b ��#l\r\n";
        }
			cm.sendNext(selStr);
    } else if (selection == 33000000) {
        var selStr = "#e#r��ѡ����Ҫȡ������Ʒ��\r\n\r\n#b";
        ������ = cm.�齱��ѯ1(1, 3);
        for (var i in ������) {
             itemId = ������[i].itemId;
             itemCount = ������[i].itemCount;
            selStr += "#L" + (100000 + i) + "##d#v" + itemId + "##z" + itemId + "# #b  ���� " + itemCount + "#b ��#l\r\n";
        }
        cm.sendNext(selStr);
    } else if (selection == 34000000) {
		var selStr = "#e#r��ѡ����Ҫȡ������Ʒ��\r\n\r\n#b";
        ������ = cm.�齱��ѯ1(1, 4);
        for (var i in ������) {
             itemId = ������[i].itemId;
             itemCount = ������[i].itemCount;
            selStr += "#L" + (100000 + i) + "##d#v" + itemId + "##z" + itemId + "# #b  ���� " + itemCount + "#b ��#l\r\n";
        }
			cm.sendNext(selStr);
    } else if (selection == 35000000) {
		var selStr = "#e#r��ѡ����Ҫȡ������Ʒ��\r\n\r\n#b";
        ������ = cm.�齱��ѯ1(1, 5);
        for (var i in ������) {
             itemId = ������[i].itemId;
             itemCount = ������[i].itemCount;
            selStr += "#L" + (100000 + i) + "##d#v" + itemId + "##z" + itemId + "# #b  ���� " + itemCount + "#b ��#l\r\n";
        }
			cm.sendNext(selStr);
    } else if (selection == 36000000) {
		//cm.��Ϣ(5,status);
		cm.openNpc(9050001,1);
		//cm.�Ի�����();
		//cm.sendYesNo("#e#b���棡���棡\r\n\r\n		#e#rȷ��Ҫȫ��ȡ�����������û����ô��ո���Ʒ�ͻ���ʧ��");
		//cm.�Ի�����();

    } else if (selection > 99999 && selection< 1000000 ) {
        var i = selection - 100000;
         itemId = ������[i].itemId;
         itemCount = ������[i].itemCount;
        
		var tex =""
		tex +="��Ҫȡ���ĵ���Ϊ#v"+itemId+"##z"+itemId+"#\r\n"
		tex +="��������Ҫȡ������Ʒ��������ǰ������ȡ�� "+itemCount+" ��\r\n"
		tex +="(ȡ��֮ǰ��ȷ�ϱ����Ƿ�װ���£�����������Ʒ����ʧ)\r\n\r\n"
		if (itemCount>5000){
			itemCount=5000
		}
		
		cm.sendGetNumber(tex,itemCount,1,itemCount);
		//cm.��Ϣ(5,selection)
		//cm.�Ի�����();
		//cm.sendOk(tex+itemId + " - " + itemCount);
		//var itemId = ������[i].itemId;
        //var itemCount = ������[i].itemCount;
	} else if (selection< 5001 && selection>0) {
			if (cm.�齱ɾ��(1,itemId,selection)){
				if(��Ʒ����(itemId)==1){
					for (var z = 0; z < selection; z++) {
					cm.����Ʒ(itemId,1);
					}
				}else{
			cm.����Ʒ(itemId,selection);
				}
			cm.�Ի�����();	
		}else{
			cm.sendOk("ϵͳ����");
			cm.�Ի�����();
		}			
		}
		//cm.�Ի�����();
		if (status == 3) {
			
			//����ȫ��ȡ����
			//cm.�Ի�����();
		}
		
    }

