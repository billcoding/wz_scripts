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
var sss = "#fUI/UIWindow.img/QuestIcon/3/0#";//ѡ�����
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
function start() {
    status = -1;

    action(1, 0, 0);
}
function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
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
			 text +=  ""+����2+����2+����2+����2+����2+����2+����2+����2+����2+����2+����2+����2+����2+����2+����2+����2+����2+����2+����2+"\r\n"
			 text +="\t\t\t  #e��ӭ����#b����ð�յ�v079 #k!#n\r\n\r\n"
			 text +=а��С�� +"������ʱ�䣺#r"+year+"#k �� #r"+month+"#k �� #r"+day+"#k �� #r"+hour+"#k �� #r"+minute+"#k �� ���� #r"+����[ weekday ]+"#k\r\n" 
			 text +=а��С�� +"���տ��Ÿ�����#e#b"+ ����[ weekday ]+"  "
			 text +=а��С�� +"#k#n��ǰ����ʱ�䣺#b#e"+cm.getGamePoints()+"#k#n ����"+"\r\n"
			 
			 text +=а��С�� +"��ĸ�����ϷIDΪ��#r"+(20000+cm.getPlayer().getId())+"#k  "
			 text +=а��С�� +"�ƹ��������Ϊ��#r#e3\r\n#n"
			//text += "   "+�̻�+""+�̻�+""+�̻�+"#k\r\n";
            //text += ""+����+"             "+����1+"\r\n"
		  	
			//text += "#dɱ��������#b"+cm.getPlayer().getSG()+"\r\n"	
		   //text += ""+����+����+����+����+����+����+����+����+����+����+����+����+����+"\r\n"
		  text += ""+С�̻�+С�̻�+С�̻�+С�̻�+С�̻�+С�̻�+С�̻�+С�̻�+С�̻�+С�̻�+С�̻�+С�̻�+С�̻�+С�̻�+С�̻�+С�̻�+С�̻�+С�̻�+"\r\n"
		//var tex2 = ""+cm.getHyPay(1)+"";
            //text += "#L910000000##b" + а��С�� + "#r�������г�#l#l#L9310034##b" + а��С�� + "#r#rBOSS����#l\r\n\r\n"//3
			//text += "#L14##b" + С�ۺ찮�� + "���ܴ���#l#l#L1##b" + С�ۺ찮�� + "ÿ��ǩ��#l#l#L7018##b" + С�ۺ찮�� + "�ӻ��̵�#l#L23##b" + С�ۺ찮�� + "��������#l#l\r\n"//3
            //text += "#L7009##b" + С�ۺ찮�� + "װ������#l#l#L6##b" + С�ۺ찮�� + "����̳�#l#L15##b" + С�ۺ찮�� + "����תְ#l#L9##b" + С�ۺ찮�� + "ÿ���ܻ�#l\r\n#L7005##b" + С�ۺ찮�� + "����ɾ��#l#L7001##b" + С�ۺ찮�� + "��ɫ����#l#L9000036##b" + С�ۺ찮�� + "�һ�ϵͳ#l#L20##b" + С�ۺ찮�� + "ɱ�ֽ���#l\r\n"//3
			//text += "#L1247##b" + С�ۺ찮�� + "��������#l#L7004##b"+ С�ۺ찮�� + "����˫��#l#l#L1000##b" + С�ۺ찮�� + "VIPϵͳ#l #L8888##b" + С�ۺ찮�� + "װ��ǿ��#l#l\r\n"//3
//text += "#L19##b" + С�ۺ찮�� + "�������#l#L9000041##b" + С�ۺ찮�� + "��ȯ�һ�#l#l#L7003##b" + С�ۺ찮�� + "Ѫ�ºϳ�#l#l#L8787##b" + С�ۺ찮�� + "�ʼ����#l#l\r\n"//l#L17##b" + ��ɫ�ǵ� + "ǿ������#l#l\r\n\r\n"
//text += "#l#L7006##b" + С�ۺ찮�� + "����ȫ��#l#l#L9981##b" + С�ۺ찮�� + "��ҶĲ�#l#l#L9100201#" + С�ۺ찮�� + "��ȯ�ĳ�#l#L19910808#" + С�ۺ찮�� + "����ϵͳ#l\r\n\r\n\r\n"
 //text += "#L1243##b" + ��ɫ��ͷ + "���ŶĲ�#l#l#L1249##b" + ��ɫ��ͷ + "�н�齱#l#l#L1245##b" + ��ɫ��ͷ + "��ֵ�齱#l\r\n\r\n"
 //text += "#L1246##b" + ��ɫ��ͷ + "�Ҿ�ǿ��#l#l#L1252##b" + ��ɫ��ͷ + "�н�һ�#l#l#L1253##b" + ��ɫ��ͷ + "����ǿ��#l\r\n\r\n"

 text +="#L1##r#e" + ��ɫ��ͷ + "�·��տ��弶�(Boss��ɱ����ϡ�е���)"+"#l\r\n"
 text +="#L2##d" + ��ɫ��ͷ + "���Ƶ���ʱ� (�ֽ�/ϡ�е��ߵ�������)"+"#l\r\n\r\n#n"
 text += "#L11##b" + С�ۺ찮�� + "��ʱ����#l#l#L12##b" + С�ۺ찮�� + "��ͼ����#l#l#L13##b" + С�ۺ찮�� + "ɾ������#l#L14##b" + С�ۺ찮�� + "#e��ֵ����#l#l\r\n#n"
 text += "#L21##b" + С�ۺ찮�� + "���߽���#l#l#L22##b" + С�ۺ찮�� + "ʦͽϵͳ#l#l#L23##b" + С�ۺ찮�� + "��������#l#L24##b" + С�ۺ찮�� + "#eս������#l#l\r\n#n"
 
 
 text += "\r\n"+С�̻�+С�̻�+С�̻�+С�̻�+С�̻�+С�̻�+С�̻�+С�̻�+С�̻�+С�̻�+С�̻�+С�̻�+С�̻�+С�̻�+С�̻�+С�̻�+С�̻�+С�̻�


		    cm.sendSimple(text);
			} else if (selection == 1) {
            cm.openNpc(9900004,999);

		   } else if (selection == 2) {
		    cm.dispose();
		   } else if (selection == 11) {
            cm.openNpc(9900004,999);		
		   } else if (selection == 12) {
		    cm.openNpc(9900004,30);			
		   } else if (selection == 13) {
            cm.openNpc(9900004,32);		
		   } else if (selection == 14) {
		    cm.dispose();			
		   } else if (selection == 21) {
            cm.openNpc(9900004,2);
     	}
	}
}


