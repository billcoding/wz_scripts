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
        text += "#L1#" + С���� + "�鿴���������#l                  #r��ǰ����ֵ��" + ȡ�����(30, 100) + "\r\n";
        text += "#b#L2#" + С���� + "����������齱�����Σ�#l\r\n";
        text += "#L3#" + С���� + "����������齱��10���飩#l\r\n";
        text += "#L4#" + С���� + "����������齱��50���飩#l\r\n";
        text += "#L5#" + а��С�� + "�򿪷������̵�#l";
        text += "#L6#" + а��С�� + "�򿪷�����ֿ�#l\r\n\r\n";
        text += ����2 + ����2 + ����2 + ����2 + ����2 + ����2 + ����2 + ����2 + ����2 + ����2 + ����2 + ����2 + ����2 + ����2 + ����2 + ����2 + ����2 + ����2 + ����2
        cm.sendNext(text);
    } else if (selection == 1) {
        cm.sendOk("������������һЩϡ�е��ߺͼ�Ʒ����\r\n����#b�������ף��֣�#k�ӷ���������ͻ���Ȼ2-7����\r\n��������ϡ�е��ߵ���������\r\nÿ���ڼ��ջ��нڼ����޶�װ������\r\n#r#e������ֿ�#n#k����רΪϲ���齱�����׼���Ĺ��ܣ� 50��������е��߶�����������ֿ⣬������Ҫ��ʱ����Դӷ�����ֿ�ȡ����������50���鵽ϡ��װ����ʱ��û�����Եģ���Ҫ�ż����ӷ�����ֿ�ȡ��װ����ʱ������������Ŷ��������ֿ⻹�ṩһ�����۹��ܣ����㲻�����̵�Ϳ��Ե��һ�����ۣ��Ϳɻ�ö�Ӧ��ң�һ�����۲�����۵����װ�������ǻ���ע��ʹ��Ŷ���Լ����õĶ�����ȡ��������һ������\r\n#r#e�����޶���#n#k���˵��߿����ڷ������̵껻��һЩ�޶��ĵ���");
    } else if (selection == 2) {
        //var
        //text2 = "ѡ��1�ű�����\r\n";
        //text2 += "#L3#����ѡ��3\r\n";

        //cm.sendNext(text2);

        var cc = cm.�齱��ʼ(1, 50);
        cm.sendOk(cc);
        cm.�Ի�����();
    } else if (selection == 3) {

    } else if (selection == 4) {

    } else if (selection == 5) {

    } else if (selection == 6) {
        var text = "";
        text += "" + ����2 + ����2 + ����2 + ����2 + ����2 + ����2 + ����2 + ����2 + ����2 + ����2 + ����2 + ����2 + ����2 + ����2 + ����2 + ����2 + ����2 + ����2 + ����2 + "\r\n"
        text += "\t\t           #b#e������齱�ֿ�#k#n\r\n\r\n"
        text += "�ֿ���Ϊϲ���齱�����׼���ģ�50����ĵ��߶������ڲֿ���ұ��ܣ���ҿ�����ʱȡ��ȥ��Ҳ�ṩ#rһ������#k���Ƿ��û���Լ�ȥ���̵��һ��Ӵ�����װ���޷�ͨ��#rһ������#k��ȥ\r\n"
        text += "#r#e   #L31#" + а��С�� + "װ����ֿ�#l         ";
        text += "#L32#" + а��С�� + "������ֿ�#l\r\n";
        text += "   #L33#" + а��С�� + "������ֿ�#l         ";
        text += "#L34#" + а��С�� + "������ֿ�#l\r\n";
        text += "   #L35#" + а��С�� + "������ֿ�#l         ";
        text += "#L36#" + а��С�� + "#b[һ��ȡ��]#l\r\n\r\n";
        cm.sendNext(text);
    } else if (selection == 31) {
        װ���� = cm.�齱��ѯ1(1, 1);
        for (var i in װ����) {
            var itemId = װ����[i].itemId;
            var itemCount = װ����[i].itemCount;
            selStr += "#L" + (1000 + i) + "##v" + itemId + "##z" + itemId + "# ����:" + itemCount + "��#l\r\n";
        }
			cm.sendNext(selStr);
    } else if (selection == 32) {

    } else if (selection == 33) {
        var selStr = "#e#r��ѡ����Ҫȡ������Ʒ��\r\n\r\n#b";
        ������ = cm.�齱��ѯ1(1, 3);
        for (var i in ������) {
            var itemId = ������[i].itemId;
            var itemCount = ������[i].itemCount;
            selStr += "#L" + (1000 + i) + "##v" + itemId + "##z" + itemId + "# ����:" + itemCount + "��#l\r\n";
        }
        cm.sendNext(selStr);
    } else if (selection == 34) {

    } else if (selection == 35) {

    } else if (selection == 36) {

    } else if (selection > 999) {
        var i = selection - 1000;
        var itemId = ������[i].itemId;
        var itemCount = ������[i].itemCount;
        cm.sendOk(itemId + " - " + itemCount);
    }
}