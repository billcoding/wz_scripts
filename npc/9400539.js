var �����Ʒ = "#v1302000#";
var x1 = "1302000,+1";// ��ƷID,����
var x2;
var x3;
var x4;
var ���� = "#fEffect/CharacterEff/1022223/4/0#";
var �����Ʒ = "#v1302000#";
var add = "#fEffect/CharacterEff/1112903/0/0#";//������
var aaa = "#fUI/UIWindow.img/Quest/icon9/0#";//��ɫ�Ҽ�ͷ
var zzz = "#fUI/UIWindow.img/Quest/icon8/0#";//��ɫ�Ҽ�ͷ
var sss = "#fUI/UIWindow.img/UserList/Guild/Make/BtAgree/mouseOver/0#";//
var sss1 = "#fUI/UIWindow.img/QuestIcon/3/0#";//ѡ�����

var ������ͷ = "#fUI/Basic/BtHide3/mouseOver/0#";
var ��̾�� = "#fUI/UIWindow/Quest/icon0#";
var ����new = "#fUI/UIWindow/Quest/icon5/1#";
var ��ɫ��ͷ = "#fEffect/CharacterEff/1112908/0/1#";  //�ʹ�3
var ttt1 = "#fEffect/CharacterEff/1062114/1/0#";  //����
var ��ɫ�ǵ� = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var ca = java.util.Calendar.getInstance();
var year = ca.get(java.util.Calendar.YEAR); //������
var month = ca.get(java.util.Calendar.MONTH) + 1; //����·�
var day = ca.get(java.util.Calendar.DATE);//��ȡ��
var hour = ca.get(java.util.Calendar.HOUR_OF_DAY); //���Сʱ
var minute = ca.get(java.util.Calendar.MINUTE);//��÷���
var second = ca.get(java.util.Calendar.SECOND); //�����
var weekday = ca.get(java.util.Calendar.DAY_OF_WEEK)-1;//�������
var ������ͷ = "#fUI/Basic/BtHide3/mouseOver/0#";
var ���� = "#fEffect/CharacterEff/1022223/4/0#";

var �۰��� = "#fItem/Etc/0427/04270005/Icon8/1#";  //
var �ջ� = "#fUI/PredictHarmony/card/19#";//��ƬЧ���ջ�
var Ц = "#fUI/GuildBBS/GuildBBS/Emoticon/Basic/0#";//Ц��
var ���Ҷ ="#fMap/MapHelper/weather/maple/2#";
var ���Ҷ ="#fMap/MapHelper/weather/maple/1#";
var ��Ů ="#fMap/MapHelper/weather/witch/0#";//��Ů
var ���� ="#fMap/MapHelper/weather/balloon/4#";//����
var ��� ="#fMap/MapHelper/weather/LoveEffect2/4/0#";//���
var õ�� ="#fMap/MapHelper/weather/rose/0#";//õ�廨
var �̻� ="#fMap/MapHelper/weather/squib/squib1/3#";//�̻�

var ��ۺ찮�� = "#fItem/Etc/0427/04270001/Icon8/4#";  //
var С�ۺ찮�� = "#fItem/Etc/0427/04270001/Icon8/5#";  //
var С���� = "#fItem/Etc/0427/04270001/Icon9/0#";  //
var ����� = "#fItem/Etc/0427/04270001/Icon9/1#";  //
var Сˮ�� = "#fItem/Etc/0427/04270001/Icon10/5#";  //
var ��ˮ�� = "#fItem/Etc/0427/04270001/Icon10/4#";  //
var tz = "#fEffect/CharacterEff/1082565/4/0#";  //������
var tz1 = "#fEffect/CharacterEff/1082565/0/0#";  //������
var tz2 = "#fEffect/CharacterEff/1082565/2/0#";  //������
var а��С�� = "#fEffect/CharacterEff/1112960/3/0#";  //а��С�� ��С��
var а��С��2 = "#fEffect/CharacterEff/1112960/3/1#";  //а��С�� ����
var ���� ="#fEffect/SetEff/208/effect/walk2/4#";
var ����1 ="#fEffect/SetEff/208/effect/walk2/3#";
var С�� ="#fMap/MapHelper/weather/birthday/2#";
var �һ� ="#fMap/MapHelper/weather/rose/4#";
var ����Ҷ ="#fMap/MapHelper/weather/maple/3#";
var С�̻� ="#fMap/MapHelper/weather/squib/squib4/1#";
var ���� ="#fMap/MapHelper/weather/witch/3#";
var ����2 = "#fEffect/CharacterEff/1114000/2/0#";
var ���� = Array("������","��������","���3","���4","���5","���6","���7")
var ���� = Array("һ","��","��","��","��","��","��")
var ��ɫ��ͷ = "#fUI/UIWindow/Quest/icon2/7#";


var ���� = "#fUI/UIWindow.img/Quest/summary#";//
var ���� = "#fUI/UIWindow.img/Quest/reward#";//
var ���ʻ�� = "#fUI/UIWindow.img/Quest/prob#";//
var ����ֵ = "#fUI/UIWindow.img/QuestIcon/8/0#";//
var ��� = "#fUI/UIWindow.img/QuestIcon/7/0#";//
var ������ = "#fUI/UIWindow.img/QuestIcon/5/0#";//
var ��ȡ = "#fUI/UIWindow.img/QuestIcon/4/0#";//

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
/*         var
        text = ttt1+"�ű�����\r\n";
        text += sss+tz1+tz2+add+����+"#L1#����ѡ��1\r\n";
		text +=  "\r\n";
        cm.sendNext(text) */;
		var
		text =  "#e#r  - ÿ������\r\n\r\n#n#k"
		text += "ð��·�ܳ����ʵ�ͣ�½Ų������һЩ��������£����������������ÿ�մ�����ÿһ�׶ζ��г��߾��齱��\r\n"
		text +="ÿ���һ�� #r12#k �׶λ��ܻ�� #r1#k ���Ͷ�ֵ\r\n"
		text +="�Ͷ�ֵ���Զһ��ǳ�ϡ�е��ߣ��ǵ�ÿ�춼Ҫ�����Ŷ\r\n"
		text +="#b#L1#"+а��С��+"#e��ʼÿ������#n#l#L2#"+С�ۺ찮��+"ժȡ�ۺ컨#l#L3#"+С�ۺ찮��+"��ȡ���ʱ�#l\r\n"
		text +="#b#L4#"+С�ۺ찮��+"ÿ�������齱������#l#L5#"+С�ۺ찮��+"�Ͷ�ֵϡ�е��߽���#l\r\n"
		text +="#b#L6#"+С�ۺ찮��+"�Ͷ�ֵ�һ�ϡ�е���/Ŀǰӵ�У�#r"+"0"+"#b ��#l\r\n"
		text +="#b#L7#"+С����+"#rˢ������ 1 - 10 �� ��ÿ������200���þ�#l\r\n"
		text +="#b#L8#"+С����+"#rˢ������ 1 - 10 �� ��ÿ������3���Ͷ�ѫ�£�#l\r\n"
		text +="#b#L9#"+С����+"#rˢ������11 - 12 �� ��ÿ������1����˵��(ϡ��)��#l\r\n"
		cm.sendNext(text);
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

    }
}