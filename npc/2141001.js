importPackage(Packages.database);

var squadName = "PinkBean";
var eventName = "PinkBeanBattle";
var bossID = "品克缤"
var cd = 36 * 60 * 60 * 1000 * 0
var pbmap = 270050100;
var minSquadSize = 1;

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
		cm.sendOk("每天只能挑战一次，你已经挑战过了.");
		cm.dispose();
		return;
	}
	
/* function start() {
	var em = cm.getEventManager(eventName);
	if (em == null){
		cm.sendOk("配置清单为空，请联系管理员.");
		cm.dispose();
		return;
	}
	
	var nextEnter = getNextEnterTime();
	if (nextEnter > cm.getCurrentTime()){
		cm.sendOk("您在36个小时内已经挑战过#b"+ bossID +"#k\r\n剩余时间：" + cm.getReadableMillis(cm.getCurrentTime(), nextEnter));
		cm.dispose();
		return;
	} */
	
	var eim_status = em.getProperty("state");
	if (eim_status == null || eim_status.equals("0")){
		var squadAvailability = cm.getSquadAvailability(squadName);
		if (squadAvailability == -1){
			status = 0;
			cm.sendYesNo("现在可以申请远征队，你想成为远征队队长吗？");
		} else if (squadAvailability == 1){ 
			// -1 = cancelled, 0 = not, 1 = true
			var type = cm.isSquadLeader(squadName);
			if (type == -1){
				cm.sendOk("已经结束了申请.");
				cm.dispose();
			} else if (type  == 0){
				var memberType = cm.isSquadMember(squadName);
				if (memberType == 2){
					cm.sendOk("在远征队的制裁名单.");
					cm.dispose();
				} else if (memberType == 1){
					status = 5;
					cm.sendSimple("你现在想做什么？\r\n#b#L2#查看远征队成员。#l \r\n#b#L0#加入远征队。#l ");
				} else if (memberType == -1) {
					cm.sendOk("远征队员已经达到30名，请稍后再试。");
					cm.dispose();
				} else {
					status = 5;
					cm.sendSimple("你现在想做什么？\r\n#b#L2#查看远征队成员。#l \r\n#b#L0#加入远征队。#l ");
				}
			} else {// IS LEADEAR
				status = 10;
				cm.sendSimple("你现在想做什么？\r\n#b#L0#查看远征队成员。#l \r\n#b#L1#管理远征队成员。#l \r\n#b#L2#编辑限制列表。#l \r\n#r#L3#进入地图。#l");
			}
		} else {
			//检测PB地图有没有人，如果没有，重置远征
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
				cm.sendOk("远征队的挑战已经开始。");
				cm.safeDispose();
			} else {
				cm.sendYesNo("你要继续进行远征任务吗？");
				status = 2;
			}
		}
	} else {
		var eim = cm.getDisconnected(eventName);
		if (eim == null) {
			cm.sendOk("远征队的挑战已经开始。");
			cm.safeDispose();
		} else {
			cm.sendYesNo("你要继续进行远征任务吗？");
			status = 2;
		}
	}
}


function action(mode, type, selection){
	switch (status){
		case 0:
			if (mode == 1){
				if (cm.registerSquad(squadName, 5, "已经成为了远征队队长。如果你想加入远征队，请重新打开对话申请加入远征队。" )){
					cm.sendOk("你已经成为了远征队队长。接下来的5分钟，请等待队员们的申请。");
					cm.dispose();
				} else {
					cm.sendOk("未知错误.");
				}
			}
			break;
		case 2:
			if (!cm.reAdd(eventName, squadName)){
				cm.sendOk("由于未知的错误，操作失败。");
			}
			cm.safeDispose();
			break;
		case 5:
			if (selection == 0){//join
				var ba = cm.addMember(squadName, true);
				if (ba == 2){
					cm.sendOk("远征队员已经达到30名，请稍后再试。");
				} else if (ba == 1){
					cm.sendOk("申请加入远征队成功，请等候队长指示。");
				} else {
					cm.sendOk("你已经参加了远征队，请等候队长指示。");
				}
			} else if (selection == 1){//withdraw
				var baa = cm.addMember(squadName, false);
				if (baa == 1){
					cm.sendOk("制裁指定的队员成功。");
				} else {
					cm.sendOk("你没有参加远征队");
				}
			} else if (selection == 2){
				if (!cm.getSquadList(squadName, 0)){
					cm.sendOk("由于未知的错误，操作失败.");
				}
			}
			cm.dispose();
			break;
		case 10:
			if (mode == 1){
				if (selection == 0){
					if (!cm.getSquadList(squadName, 0)){
						cm.sendOk("由于未知的错误，操作失败.");
					}
					cm.dispose();
				} else if (selection == 1 ){
					status = 11;
					if (!cm.getSquadList(squadName, 0)){
						cm.sendOk("由于未知的错误，操作失败.");
						cm.dispose();
					}
				} else if (selection == 2){
					status = 12;
					if (!cm.getSquadList(squadName, 0)){
						cm.sendOk("由于未知的错误，操作失败.");
						cm.dispose();
					}
				} else if (selection == 3){
					var enteringSquad = cm.getSquad(squadName);
					if (enteringSquad != null){
						var membercount = enteringSquad.getSquadSize();
						if (membercount < minSquadSize){
							cm.sendOk("远征队需要至少"+ minSquadSize +"人才可入场。远征队人数："+membercount);
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
						cm.sendOk("由于未知的错误，操作失败.");
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