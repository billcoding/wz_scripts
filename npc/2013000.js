var status = -1;
var ��С�ȼ� = 50; // 35
var ��ߵȼ� = 255; // 65
var �������� = 3;
var ������� = 6;
var �������� = " - ���ͨ������Ů����Ӹ�����";
var ��ǿ���� = 55000;
var ʱ�� = 3;
var bosslog = "Ů����";


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
//var ����2 = "#fEffect/CharacterEff/1114000/2/0#";
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
            cm.dispose();
            return;
        }
        if (mode == 1) {
            status++;
        }
        else {
            status--;
			}
		if (cm.getMapId() == 920010000) { //��յ�ͼNPCҲ�����
			cm.sendOk("���Ǳ��������� ��Ҫ20���Ƶ���Ƭ");
			cm.dispose();
			return;
			
        }
        if (status == 0) {
			for (var i = 4001044; i < 4001064; i++) {    //ɾ��һЩ����
			cm.removeAll(i); //holy
	}
            var tex2 = "";
            var text = "";
			 text +=  ""+а��С��2+а��С��2+а��С��2+а��С��2+а��С��2+а��С��2+а��С��2+а��С��2+а��С��2+а��С��2+а��С��2+а��С��2+а��С��2+а��С��2+а��С��2+а��С��2+а��С��2+а��С��2+а��С��2+"\r\n"
			 text +=" #e#r"+��������+"#k#n\r\n\r\n"
			 //text +=а��С�� +"������ʱ�䣺#r"+year+"#k �� #r"+month+"#k �� #r"+day+"#k �� #r"+hour+"#k �� #r"+minute+"#k �� ���� #r"+����[ weekday ]+"#k\r\n" 
			 //text +=а��С�� +"���տ��Ÿ�����#e#b"+ ����[ weekday ]+"  "
			 //text +=а��С�� +"#k#n��ǰ����ʱ�䣺#b#e"+cm.getGamePoints()+"#k#n ����"+"\r\n"
			 
			 //text +=а��С�� +"��ĸ�����ϷIDΪ��#r"+(20000+cm.getPlayer().getId())+"#k  "
			 //text +=а��С�� +"�ƹ��������Ϊ��#r#e3\r\n#n"
			 text +="����˵����\r\n"
			 text +=С����+"�������ƣ�#r"+��������+"#k - #r"+�������+"#k ��Ա     "
			 text +=С����+"�ȼ����ƣ�#r"+��С�ȼ�+"#k - #r"+��ߵȼ�+"#k ��\r\n"
			 text +=С����+"����ʱ�䣺ÿ�� #r"+����[ʱ��]+"#k        "
			 text +=С����+"����˵����#r�ȼ� x "+��ǿ����+"#k\r\n"
			 text +=С����+"������ս������ #r"+ cm.getBossLog(bosslog) +"#k         "
			 text +=С����+"�ۼ���ս������ #b"+ cm.getBossLog(bosslog) +"#k\r\n\r\n"
			 //text +=С����+"#b���ݵ�ǰ�ȼ�Ԥ�ƻ��ͨ�ؾ��� #r"+ cm.�жϵȼ�()* ��ǿ����/10000+"#b ��#k\r\n"
			text +="  #L1##r#e" + ��ɫ��ͷ + "��ʼ��Ӹ���"+"#l\r\n"
			text +="  #L2##d" + ��ɫ��ͷ + "���������5W���/��"+"#l\r\n#n"
			text +="  #L3##d#e" + ��ɫ��ͷ + "ͨ�ش����һ���Ʒ"+"#l\r\n#n"
			text +="  #L4##d#e" + ��ɫ��ͷ + "��ǿģʽ�͸�������ҽ���"+"#l\r\n#n"
 //text += "\r\n"+С�̻�+С�̻�+С�̻�+С�̻�+С�̻�+С�̻�+С�̻�+С�̻�+С�̻�+С�̻�+С�̻�+С�̻�+С�̻�+С�̻�+С�̻�+С�̻�+С�̻�+С�̻�

		    cm.sendSimple(text);
			} else if (selection == 1) {
				for (var i = 4001044; i < 4001064; i++) {
					cm.removeAll(i); //holy
				}
			if (cm.getParty() == null) { // No Party
				cm.sendSimple("#e��ò��û�дﵽҪ��...:\r\n\r\n#r" + �������� + " ��ҳ�Ա, ÿ���˵ĵȼ������� " + ��С�ȼ� + " �� �ȼ� " + ��ߵȼ� );
			} else if (!cm.isLeader()) { // Not Party Leader
				cm.sendSimple("��������������� #b�ӳ�#k ����̸.");
			} else {
				var party = cm.getParty().getMembers();
				var mapId = cm.getMapId();
				var next = true;
				var levelValid = 0;
				var inMap = 0;
				var it = party.iterator();

				while (it.hasNext()) {
				var cPlayer = it.next();
			if ((cPlayer.getLevel() >= ��С�ȼ�) && (cPlayer.getLevel() <= ��ߵȼ�)) {
				levelValid += 1;
			} else {
				next = false;
			}
			if (cPlayer.getMapid() == mapId) {
				inMap += (cPlayer.getJobId() == 900 ? 6 : 1);
				}
			}
			if (party.size() > ������� || inMap < ��������) {
				next = false;
			}
			if (next) {
				var em = cm.getEventManager("OrbisPQ");
			if (em == null) {
				cm.sendSimple("�Ҳ����ű�������GM#b\r\n");
			} else {
				var prop = em.getProperty("state");
		    if (prop.equals("0") || prop == null) {
				em.startInstance(cm.getParty(), cm.getMap());
				cm.dispose();
				return;
		    } else {
				cm.sendSimple("���������Ѿ��������� #r���������#k �볢�Ի�Ƶ�����ߵ�����������ɡ�");
				cm.dispose();
		    }
			}
			} else {
				cm.sendSimple("��Ķ���ò��û�дﵽҪ��...:\r\n\r\n#r" + �������� + " ��ҳ�Ա, ÿ���˵ĵȼ������� " + ��С�ȼ� + " �� �ȼ� " + ��ߵȼ� );
				cm.dispose();
			}
			}
		    } else if(selection == 2) {
			   if(cm.getMeso() >= 50000){
				cm.�����(-50000);
			    cm.�����������(3,"��� "+cm.getPlayer().getName()+" Ѱ��"+��������+"����,��û�вμӵ�С��飡");
			    cm.�Ի�����();
			   }
		    cm.dispose();
     	}
	}
}
