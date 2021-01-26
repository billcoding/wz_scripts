importPackage(Packages.database);

var squadName = "PinkBean";
var eventName = "PinkBeanBattle";
var bossID = "Ʒ����"
var cd = 36 * 60 * 60 * 1000 * 0
var pbmap = 270050100;
var minSquadSize = 2;

var status = -1;

/* function getNextEnterTime(){
	var characterID = cm.getPlayer().getId();
	var con = DatabaseConnection.getConnection();
	var ps = con.prepareStatement("SELECT * FROM bosslog WHERE characterid = ? AND bossid = ?");
	ps.setInt(1, characterID);
	ps.setString(2, bossID);
	var rs = ps.executeQuery();
	var time = 0;
	if (rs.next()){
		bossTime = rs.getTimestamp("time");
		if (bossTime != null){
			time = bossTime.getTime();
			//cm.getPlayer().dropMessage(6,""+time);
		}
	}
	ps.close();
	rs.close();
	return time + cd;
} */

function start() {
	var em = cm.getEventManager(eventName);
	if (cm.getBossLog(bossID) >= 1 ){
		cm.sendOk("ÿ��ֻ����սһ�Σ����Ѿ���ս����.");
		cm.dispose();
		return;
	}
	
/* 	var nextEnter = getNextEnterTime();
	if (nextEnter > cm.getCurrentTime()){
		cm.sendOk("����36��Сʱ���Ѿ���ս��#b"+ bossID +"#k\r\nʣ��ʱ�䣺" + cm.getReadableMillis(cm.getCurrentTime(), nextEnter));
		cm.dispose();
		return;
	} */
/* 		if (get){
		cm.sendOk("�����嵥Ϊ�գ�����ϵ����Ա.");
		cm.dispose();
		return;
	} */
	
	
	
	var eim_status = em.getProperty("state");
	if (eim_status == null || eim_status.equals("0")){
		var squadAvailability = cm.getSquadAvailability(squadName);
		if (squadAvailability == -1){
			status = 0;
			cm.sendYesNo("���ڿ�������Զ���ӣ������ΪԶ���Ӷӳ���");
		} else if (squadAvailability == 1){ 
			// -1 = cancelled, 0 = not, 1 = true
			var type = cm.isSquadLeader(squadName);
			if (type == -1){
				cm.sendOk("�Ѿ�����������.");
				cm.dispose();
			} else if (type  == 0){
				var memberType = cm.isSquadMember(squadName);
				if (memberType == 2){
					cm.sendOk("��Զ���ӵ��Ʋ�����.");
					cm.dispose();
				} else if (memberType == 1){
					status = 5;
					cm.sendSimple("����������ʲô��\r\n#b#L2#�鿴Զ���ӳ�Ա��#l \r\n#b#L0#����Զ���ӡ�#l ");
				} else if (memberType == -1) {
					cm.sendOk("Զ����Ա�Ѿ��ﵽ30�������Ժ����ԡ�");
					cm.dispose();
				} else {
					status = 5;
					cm.sendSimple("����������ʲô��\r\n#b#L2#�鿴Զ���ӳ�Ա��#l \r\n#b#L0#����Զ���ӡ�#l ");
				}
			} else {// IS LEADEAR
				status = 10;
				cm.sendSimple("����������ʲô��\r\n#b#L0#�鿴Զ���ӳ�Ա��#l \r\n#b#L1#����Զ���ӳ�Ա��#l \r\n#b#L2#�༭�����б�#l \r\n#r#L3#�����ͼ��#l");
			}
		} else {
			//���PB��ͼ��û���ˣ����û�У�����Զ��
			if( cm.getMonsterCount(pbmap) < 1 || cm.getPlayerCount(pbmap) < 1){
				var em = cm.getEventManager(eventName);
				var eim = em.getInstance(eventName);
				if (eim != null){
					eim.dispose();
				}
				var squad = cm.getSquad(squadName);
				if (squad != null){
					squad.clear();
				}
			}
			
			var eim = cm.getDisconnected(eventName);
			if (eim == null){
				cm.sendOk("Զ���ӵ���ս�Ѿ���ʼ��");
				cm.safeDispose();
			} else {
				cm.sendYesNo("��Ҫ��������Զ��������");
				status = 2;
			}
		}
	} else {
		var eim = cm.getDisconnected(eventName);
		if (eim == null) {
			cm.sendOk("Զ���ӵ���ս�Ѿ���ʼ��");
			cm.safeDispose();
		} else {
			cm.sendYesNo("��Ҫ��������Զ��������");
			status = 2;
		}
	}
}


function action(mode, type, selection){
	switch (status){
		case 0:
			if (mode == 1){
				if (cm.registerSquad(squadName, 5, "�Ѿ���Ϊ��Զ���Ӷӳ�������������Զ���ӣ������´򿪶Ի��������Զ���ӡ�" )){
					cm.sendOk("���Ѿ���Ϊ��Զ���Ӷӳ�����������5���ӣ���ȴ���Ա�ǵ����롣");
					cm.dispose();
				} else {
					cm.sendOk("δ֪����.");
				}
			}
			break;
		case 2:
			if (!cm.reAdd(eventName, squadName)){
				cm.sendOk("����δ֪�Ĵ��󣬲���ʧ�ܡ�");
			}
			cm.safeDispose();
			break;
		case 5:
			if (selection == 0){//join
				var ba = cm.addMember(squadName, true);
				if (ba == 2){
					cm.sendOk("Զ����Ա�Ѿ��ﵽ30�������Ժ����ԡ�");
				} else if (ba == 1){
					cm.sendOk("�������Զ���ӳɹ�����Ⱥ�ӳ�ָʾ��");
				} else {
					cm.sendOk("���Ѿ��μ���Զ���ӣ���Ⱥ�ӳ�ָʾ��");
				}
			} else if (selection == 1){//withdraw
				var baa = cm.addMember(squadName, false);
				if (baa == 1){
					cm.sendOk("�Ʋ�ָ���Ķ�Ա�ɹ���");
				} else {
					cm.sendOk("��û�вμ�Զ����");
				}
			} else if (selection == 2){
				if (!cm.getSquadList(squadName, 0)){
					cm.sendOk("����δ֪�Ĵ��󣬲���ʧ��.");
				}
			}
			cm.dispose();
			break;
		case 10:
			if (mode == 1){
				if (selection == 0){
					if (!cm.getSquadList(squadName, 0)){
						cm.sendOk("����δ֪�Ĵ��󣬲���ʧ��.");
					}
					cm.dispose();
				} else if (selection == 1 ){
					status = 11;
					if (!cm.getSquadList(squadName, 0)){
						cm.sendOk("����δ֪�Ĵ��󣬲���ʧ��.");
						cm.dispose();
					}
				} else if (selection == 2){
					status = 12;
					if (!cm.getSquadList(squadName, 0)){
						cm.sendOk("����δ֪�Ĵ��󣬲���ʧ��.");
						cm.dispose();
					}
				} else if (selection == 3){
					var enteringSquad = cm.getSquad(squadName);
					if (enteringSquad != null){
						var membercount = enteringSquad.getSquadSize();
						if (membercount < minSquadSize){
							cm.sendOk("Զ������Ҫ����"+ minSquadSize +"�˲ſ��볡��Զ����������"+membercount);
							cm.dispose();
							return;
						}
						var members = enteringSquad.getMembers();
 						for (var i = 0; i < enteringSquad.getSquadSize(); i++){
							var character = enteringSquad.getChar(members.get(i));
							character.setBossLog(bossID);
						} 
						var dd = cm.getEventManager(eventName);
						dd.startInstance(cm.getSquad(squadName),cm.getMap());
					} else {
						cm.sendOk("����δ֪�Ĵ��󣬲���ʧ��.");
					}
					cm.dispose();
				}
			} else {
				cm.dispose();
			}
			break;
		case 11:
			cm.banMember(squadName, selection);
			cm.dispose();
			break;
		case 12:
			if (selection != -1){
				cm.acceptMember(squadName, selection);
			}
			cm.dispose();
			break;
	}
}