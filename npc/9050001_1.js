var ����2 = "#fEffect/CharacterEff/1114000/2/0#";
var ���� = "#fMap/MapHelper/weather/witch/3#";
var С���� = "#fItem/Etc/0427/04270001/Icon9/0#";  //
var �۰��� = "#fItem/Etc/0427/04270005/Icon8/1#";  //
var �̻� = "#fMap/MapHelper/weather/squib/squib1/3#";//�̻�
var а��С�� = "#fEffect/CharacterEff/1112960/3/0#";  //а��С�� ��С��
var ȡ��;


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
        var text = "";
        text += "" + ����2 + ����2 + ����2 + ����2 + ����2 + ����2 + ����2 + ����2 + ����2 + ����2 + ����2 + ����2 + ����2 + ����2 + ����2 + ����2 + ����2 + ����2 + ����2 + "\r\n"
        text += "\t\t#b#e      ѡ��Ҫȫ��ȡ��������#k#n\r\n"
		text += "#eȷ��Ҫȫ��ȡ�����������û�пո���Ʒ�ͻ���ʧ��\r\n"
        text += "#r#e#L1#"  + "װ����#l";
        text += "#L2#"  + "������#l";
        text += "#L3#"  + "������#l";
        text += "#L4#"  + "������#l";
        text += "#L5#"  + "������#l\r\n\r\n\r\n";
		text += "" + ����2 + ����2 + ����2 + ����2 + ����2 + ����2 + ����2 + ����2 + ����2 + ����2 + ����2 + ����2 + ����2 + ����2 + ����2 + ����2 + ����2 + ����2 + ����2
        cm.sendNext(text);
    } else if (selection == 1) {
        ȡ�� = cm.�齱��ѯ1(1, 1);
        for (var i in ȡ��) {
             itemId = ȡ��[i].itemId;
             itemCount = ȡ��[i].itemCount;
			 if (cm.�齱ɾ��(1,itemId,itemCount)){
				 for (var z = 0; z < itemCount; z++) {
					cm.����Ʒ(itemId,1);
				 }
			 }
		}
		cm.sendNext("#e#r�Ѿ�ȫ��ȡ����");
		cm.�Ի�����();
    } else if (selection == 2) {
        ȡ�� = cm.�齱��ѯ1(1, 2);
        for (var i in ȡ��) {
             itemId = ȡ��[i].itemId;
             itemCount = ȡ��[i].itemCount;
			 if (cm.�齱ɾ��(1,itemId,itemCount)){
				cm.����Ʒ(itemId,itemCount);
			 }
		}
		cm.sendNext("#e#r�Ѿ�ȫ��ȡ����");
		cm.�Ի�����();
    } else if (selection == 3) {
        ȡ�� = cm.�齱��ѯ1(1, 3);
        for (var i in ȡ��) {
             itemId = ȡ��[i].itemId;
             itemCount = ȡ��[i].itemCount;
			 if (cm.�齱ɾ��(1,itemId,itemCount)){
				cm.����Ʒ(itemId,itemCount);
			 }
		}
		cm.sendNext("#e#r�Ѿ�ȫ��ȡ����");
		cm.�Ի�����();
    } else if (selection == 4) {
        ȡ�� = cm.�齱��ѯ1(1, 4);
        for (var i in ȡ��) {
             itemId = ȡ��[i].itemId;
             itemCount = ȡ��[i].itemCount;
			 if (cm.�齱ɾ��(1,itemId,itemCount)){
				cm.����Ʒ(itemId,itemCount);
			 }
		}
		cm.sendNext("#e#r�Ѿ�ȫ��ȡ����");
		cm.�Ի�����();
    }
/* 	cm.��Ϣ(5,selection)
	cm.��Ϣ(5,status) */
}