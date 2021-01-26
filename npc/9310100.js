importPackage(Packages.client);
importPackage(Packages.client.inventory);

var status = -1;



function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    
    if (mode == 1) {
        status++;
    } else if (mode == 0 && status != 0) {
        status--;
    } else {
        cm.dispose();
        return;
    }

    if (status == 0) {
		    var text = "\t\t\t#e��ӭ����#rʦͽϵͳ#k!#n\r\n";
            for (i = 0; i < 10; i++) {
                text += "";
            }
			text += "����Ҫ����ʦͽ��ϵ��\r\n"
			text += "#L1#��Ҫ����ʦͽ��ϵ#l			#L6##bʦͽϵͳ˵��#k\r\n"
			text += "#L2#��ͽ����(PS��ʦ��һ�������Ƕӳ�)#l	\r\n"
            text += "#L3#��ͽ��ʦ(PS��ʦ��һ�������Ƕӳ�)#l\r\n"
            text += "#L4#��ͽ��ʦ#l   #L5#�˳�ʦ��#l     #L7##r��ͽ�ܰ�ʦ�����#l\r\n\r\n"
            cm.sendSimple(text);
    } else if (status == 1){
		if (selection == 1){
			var id = cm.getPlayer().getId();
			if (cm.getPlayer().getLevel() < 180){
				cm.sendOk("��ĵȼ�����180��");
				cm.dispose();
				return;
			}else if(cm.getOneTimeLog("ʦ��") < 1){
				cm.setOneTimeLog("ʦ��");
				//cm.ʦ�ų�ʦ();
				cm.sendOk("��ɹ�������ʦ�ţ��Ͻ�ȥ��ͽ�ɣ�");
				cm.worldMessage(6,"��ʦͽϵͳ��[" + cm.getChar().getName() + "]�ɹ�������ʦ�ţ�Ҫ��ʦ���ĸϽ��ˣ�");
				cm.dispose();
			} else {
				cm.sendOk("���Ѿ�������ʦ���ˣ�ȥ��ͽ�ɣ�");
				cm.dispose();
			}
			
        } else if (selection == 2){
			if (cm.getParty() == null) {
                cm.sendNext("����Ӻ��������ң�");
                cm.dispose();
                return;
            } else if (cm.allMembersHere() == false){
				cm.sendOk("ͽ�ܻ���ʦ�����������ͼ����");
				cm.dispose();
				return;
			} else if (cm.getOneTimeLog("ʦ��") < 1) {
                cm.sendNext("����ʦ�����ҶԻ�(PS��ʦ��һ��Ҫ�Ƕ�Ա)");
                cm.dispose();
                return;
			} else if (cm.isLeader()) {
                cm.sendNext("����ʦ�����ҶԻ�(PS��ʦ��һ��Ҫ�Ƕ�Ա)");
                cm.dispose();
                return;
			}
var next = true;
var mapId = cm.getPlayer().getMapId();
var party = cm.getPlayer().getParty().getMembers();
var it = party.iterator();
var cPlayer = it.next();
var victim = cm.getPlayer().getMap().getCharacterById(cPlayer.getId());
var TDid = victim.getId();
var a1_1 = cm.getOneTimeLog(TDid);//�Լ�����ͽ��¼ID
var shoutu = victim.getOneTimeLog(TDid);
var chushi = victim.getOneTimeLog("��ʦ");
var id = cm.getPlayer().getId();
var tcsm = victim.getOneTimeLog("�˳�ʦ��");
var jrsm = victim.getOneTimeLog(TDid);
			if (victim.getLevel() > 50){
				cm.sendOk("׼ͽ�ܵȼ��Ƿ��Ѿ�����50���ˣ���");
				cm.dispose();
				return;
			} else if (a1_1 - jrsm - tcsm > 0){
				cm.sendOk("���Ѿ��չ����ͽ����");
				cm.dispose();
				return;
			} else if (shoutu - tcsm != 0 ){
				cm.sendOk("��ͽ���Ѿ���ʦ����");
				cm.dispose();
			} else if (cm.getOneTimeLog("ʦ��") < 1){
				cm.sendOk("�㻹û����ʦ����");
				cm.dispose();				
			} else if (cm.getPlayer().getParty().getMembers().size() > 2){
				cm.sendOk("ÿ��ֻ�ܴ�һ��ͽ�����ţ���2����ӣ�");
				cm.dispose();
				return;
			} else if (cm.getOneTimeLog("��ͽ") - cm.getOneTimeLog("��ʦ") - tcsm >= 6){
				cm.sendOk("���ʦ���Ѿ��չ�6��ͽ����");
				cm.dispose();
				return;
			} else {
					cm.setOneTimeLog("��ͽ");
					cm.givePartyBossLog("��ͽ");
					cm.setOneTimeLog(TDid);
					cm.sendOk("��ɹ�����"+victim.getName()+"Ϊͽ�ܣ�������ͽ�ܵ���ȷ�Ϲ�ϵ��֮�������Ч��");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"ʦͽϵͳ" + " : ["+ cm.getPlayer().getName() +"]����["+victim.getName()+"]Ϊͽ�ܣ���ͽ�ܽ���ȷ�ϣ�",true).getBytes());
					cm.dispose();
					return;
					}
			
		} else if (selection == 3){
			if (cm.getParty() == null) {
                		cm.sendNext("��Ӻ���������");
                		cm.dispose();
                		return;
            }else if (cm.getOneTimeLog("ʦ��") < 1){
				cm.sendOk("�㻹û����ʦ����");
				cm.dispose();
				return;
			}
			var next = true;
			var gender = cm.getPlayer().getGender();
			var mapId = cm.getPlayer().getMapId();
			var party = cm.getPlayer().getParty().getMembers();
			var it = party.iterator();
			var cPlayer = it.next();
			var victim = cm.getPlayer().getMap().getCharacterById(cPlayer.getId());
			var TDid = victim.getId();
			if (cm.isLeader()) {
                		cm.sendNext("����ʦ�����ҶԻ�(PS��ʦ��һ��Ҫ�Ƕ�Ա)");
                		cm.dispose();
                		return;
			} else if (victim.getLevel() < 140){
				cm.sendOk("���ͽ�ܵȼ�����140�������ܳ�ʦ��");
				cm.dispose();
			} else if (cm.getOneTimeLog("ʦ��") < 1){
				cm.sendOk("�㻹û����ʦ����");
				cm.dispose();
				return;
           	} else if (cm.getOneTimeLog(TDid) == 0){
				cm.sendOk("��ȷ��������ͽ���𣿣���");
				cm.dispose();
				return;
			} else if (cm.getOneTimeLog(-TDid) == 1){
				cm.sendOk("���ͽ���Ѿ���ʦ�ˣ�");
				cm.dispose();
				return;
			} else {
				cm.setOneTimeLog("��ʦ");
				cm.setOneTimeLog(-TDid);
			
				//cm.gainItem(4310098,10);//10�ͱ�
				//cm.gainItem(4310097,10);//10����
				//cm.gainItem(3992025,2);//ʥ������
				//cm.gainItem(4310059,5);//�سɱ�
				cm.gainMeso(200000000);//�����
				cm.gainNX(20000);//���
				cm.gainItem(2340000,10);//ף��
				cm.gainItem(2049116,10);//���� 	
                cm.gainItem(4251202,1);//���
                cm.gainItem(2002031,2);//��ݮ����				
				//victim.modifyCSPoints(1,20000);//���ѻ��
				cm.sendOk("���ͽ"+victim.getName()+"��ʦ�ɹ�!\r\nʦ����ã�2W���#v2340000#*10 #v2049116#*10 #v4251202#*1 #v2002031#*2��");
				Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"ʦͽϵͳ" + " : ["+ cm.getPlayer().getName() +"]��ҳɹ���ͽ��ʦ["+victim.getName()+"]����ذ������",true).getBytes());
				cm.dispose();
			}
		} else if (selection == 4){
			cm.sendOk("�ݲ�֧�ִ˹���");
			cm.dispose();
			//cm.openNpc(9900004,153);
		} else if (selection == 5){
			var id = cm.getPlayer().getId();
			var tcsm = cm.getOneTimeLog("�˳�ʦ��");
			var jrsm = cm.getOneTimeLog(id);
			if (jrsm == 0){;
				cm.sendOk("�˳�ʦ��ʧ�ܣ�\r\n��û��û�м����ʦ��!��ע��ʦ��������ȡ��ʦ�ţ�");
				cm.dispose();
			} else if (jrsm - tcsm == 0){
				cm.sendOk("���Ѿ�û��ʦ�ſ����˳��� �������ٴ��˳���");
				cm.dispose();
			} else {
				cm.setOneTimeLog("�˳�ʦ��");
				cm.sendOk("�˳�ʦ�ųɹ�!");
				cm.dispose();
			}
		} else if (selection == 6){
			cm.sendOk("ʦ��ϵͳ���ܣ�\r\nͽ�ܵȼ�������С��50��\r\nʦ�����ڣ�����180������\r\n\r\nͽ�ܴﵽ140�����ɳ�ʦ��\r\n\r\nʦ����ʦ��ã�2W���#v2340000#*10 #v2049116#*10 #v4251202#*1 #v2002031#*2\r\n\r\n\r\n");
			cm.dispose();
		} else if (selection == 7){
			var id = cm.getPlayer().getId();
			if (cm.getPlayer().getLevel() >= 200){
				cm.sendOk("ʦ������Ҫȷ�ϣ�");
				cm.dispose();
				return;
			} else if (cm.getBossLog("��ͽ") >= 1 && cm.getOneTimeLog(id) == 0){
				cm.setOneTimeLog(id);
				cm.sendOk("ʦͽ��ϵȷ�ϳɹ���");
				Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"ʦͽϵͳ" + " : ["+ cm.getPlayer().getName() +"]ʦͽ��ϵȷ�ϳɹ���",true).getBytes());
				cm.dispose();
			} else {
				cm.sendOk("���Ѿ�ȷ�Ϲ��ˡ�����\r\n");
				cm.dispose();
			}
		}
		
    }
	
}
