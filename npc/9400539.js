var ���� = "#fEffect/CharacterEff/1022223/4/0#";
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
var �ȼ� 
var ��þ���;
var ��ý�Ǯ;
var �ȼ��׶�;
var ���� =[4000000,4000016,4000019,4000001,4000002,4000003,4000004,4000005,4000037,4000006,4000187,4000188,4000252,4000253,4000350,4000189,4000190,4000008,4000010,4000012,4000015,4000032,4000008,4000035,4000042,4000300,4000286,4000287,4000059,4000088,4000172,4000106,4000107,4000108,4000367,4000369,4000111,4000128,4000118,4000291,4000292,4000471,4000293,4000112,4000294,4000295,4000157,4000296,4000297,4000351,4000361,4000431,4000432,4000434,4000444,4000445,4000194,4000181,4000431,4000279,4000447,4000448,4000179,4000182,4000232,4000233,4000234,4000238,4000240,4000241,4000242,4000270,4000273,];






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
		��ʼ��();
        var chaxun = cm.�򹤲�ѯ();
		var ����Ʒ;
		var ����;
		var ����;
		if (chaxun[4] != day ){
			����Ʒ = ����[ȡ�����(1,����.length -1)];
			���� = ȡ�����(255,400);
			cm.���޸�(1,����Ʒ,����)
		} 
		   chaxun = cm.�򹤲�ѯ();
		if (chaxun[2] > 15 ){
			cm.sendOk("���մ��Ѿ���ɣ�");
			cm.�Ի�����();
			}else{
				����Ʒ = chaxun[0];
				���� = chaxun[1];
				���� = chaxun[2];
				
				var te = ����+"\r\n"
				te += "��ǰ�򹤽׶�Ϊ #r"+ ����+"#k �׶�\r\n"
					if(����<=10){
					te += "����Ҫ�Ѽ����µ��߸���\r\n"	
					te += "#v"+����Ʒ+"#"+"#z"+����Ʒ+"#"+"     "+����+" / "+cm.getPlayer().getItemQuantity(����Ʒ, false)+"\r\n"
					}else if(����<=12 && ����>=1){
					te += "����������ħ�� #r"+����+" #k���ϵ� #b#v"+����Ʒ+"#"+"#z"+����Ʒ+"#"+"#n#k\r\n"
					te += "�ύ������ѵ��߷���װ������һ��\r\n"
					te += "����������ҽ��ס������г��һ������㡢Ұ���ֻ��\r\n"
					}else if(����<=15 && ����>=13){
					te += "����������ħ�� #r"+����+" #k���ϵ� #b#v"+����Ʒ+"#"+"#z"+����Ʒ+"#"+"#n#k\r\n"
					te += "�ύ������˵��߷���װ������һ��\r\n"
					te += "����������ҽ��ס������г��һ������㡢Ұ���ֻ��\r\n"
					}else{
					cm.sendOk("���մ��Ѿ���ɣ�");
					cm.�Ի�����();
					}
					te += "\r\n\r\n"
					if(����>�ȼ��׶�){
					te += ����+"         #e#r��ǰ�׶��Ѿ���������ȼ�������#b\r\n\r\n"
					}else{
					te += ����+"\r\n\r\n"
					}
					if(�ȼ�>100){
					te += ����ֵ+"  #e#r100�����Ͼ���Up����  #n#k--> "+��þ���+"\r\n"
					te += ���+"    #e#r100�����Ͻ��Up����  #n#k--> "+��ý�Ǯ+"\r\n"
					}else{
					te += ����ֵ+"#n#k  "+��þ���+"\r\n"
					te += ���+"#n#k   "+��ý�Ǯ+"\r\n"
					}
					if(����==4 || ����==8 || ����==12 ){
					te += "#v4001266##z4001266# x 1\r\n"
					}
					if(����>�ȼ��׶�){
					//te += "��ǰ�׶��Ѿ���������ȼ�������֮�������ɣ�����"
					cm.sendSimpleS(te,2);
					cm.�Ի�����()
					}else{
					cm.sendSimpleS(te,2);
					}
			}
			

		
		
    } else if (selection == 2) {
		cm.��Ϣ(5,day)
		
		
		
		
        var text2 = "ѡ��1�ű�����\r\n";
        text2 += "#L3#����ѡ��3\r\n";
		
		cm.sendNext(text2);
    } else if (selection == 3) {

    } else if (selection == 4) {

    } else if (selection == 5) {

    } else if (selection == 6) {

    } else if (selection == 7) {
		var chaxun = cm.�򹤲�ѯ();
		var ����Ʒ;
		var ����;
		var ����;
		if (chaxun[4] != day ){
			cm.sendOk("���컹û�н�ȡ����");
			cm.�Ի�����();
		if (chaxun[2] > 15 ){
			cm.sendOk("���մ��Ѿ���ɣ�����ˢ��");
			cm.�Ի�����();
		}else{
			chaxun = cm.�򹤲�ѯ();
			//����Ҫ����ˢ��
			cm.sendOk("");
			cm.�Ի�����();
		}
		}
    } else if (selection == 8) {

    } else if (selection == -1) {
		chaxun = cm.�򹤲�ѯ();
		����Ʒ = chaxun[0];
		���� = chaxun[1];
		���� = chaxun[2];
		//cm.��Ϣ(5,����Ʒ+"�������"+����);
	if (cm.�ж���Ʒ(����Ʒ,����)){
		cm.����Ʒ(����Ʒ,-����)
		����Ʒ = ����[ȡ�����(1,����.length -1)];
		//cm.��Ϣ(5,����.length);
		���� = ȡ�����(255,400);
		cm.���޸�(����+1,����Ʒ,����)
		cm.��Ϣ(5,"�������");
		cm.������(��þ���);
		cm.gainMeso(��ý�Ǯ);
		if(����==4 || ����==8 || ����==12){
		cm.����Ʒ(4001266,1);
		}
	} else{
		cm.��Ϣ(5,"������Ʒ����!");
		}
		cm.�Ի�����();
	}
}




function ��ʼ��() {
	�ȼ� = cm.getPlayer().getLevel();
	var ���� =1
	if(�ȼ�>100){
		���� =2
	}
	if ( �ȼ� > 1 && �ȼ�< 30){
		�ȼ��׶�=2
		��þ���=�ȼ�*2500*����
		
	}else if(�ȼ� >= 29 && �ȼ�< 50){
		�ȼ��׶�=4
		��þ���=�ȼ�*12000*����
	}else if(�ȼ� >= 50 && �ȼ�< 70){
		�ȼ��׶�=6
		��þ���=�ȼ�*22000*����
	}else if(�ȼ� >= 70 && �ȼ�< 90){
		�ȼ��׶�=8
		��þ���=�ȼ�*50000*����
	}else if(�ȼ� >= 90 && �ȼ�< 120){
		�ȼ��׶�=10
		��þ���=�ȼ�*150000*����
	}else if(�ȼ� >= 120 && �ȼ�< 200){
		�ȼ��׶�=12
		��þ���=�ȼ�*450000*����
	}else if(�ȼ� >= 200 ){
		�ȼ��׶�=15
		��þ���=�ȼ�*700000*����
	}
	��ý�Ǯ=�ȼ�*1000*����
	}
	
function ���¸�����(������) {
	var ����ϵ�� = (������*28)+20
	if (������<=10){
		
	}else if (������<=12 || ������>=11){
	
	}else if (������<=15 || ������>=13){
		
	}
	
}
	