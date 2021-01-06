/*
	NPC Name: 		The Forgotten Temple Manager
	Map(s): 		Deep in the Shrine - Forgotten Twilight
	Description: 		Pink Bean battle starter
*/
var status = -1;

function start() {
	if (cm.getPlayer().getLevel() < 120) {
		cm.sendOk("你的等级小于 120 级,无法挑战.");
		cm.dispose();
		return;
	}

	if (cm.getBossLog('HorntailBattle') >= 1) {
		//cm.warp(240050400, 0);//地图传送
		cm.sendOk("暗黑龙王 每天只能挑战1次.");
		cm.dispose();
		return;
	}
//	var party = cm.getPlayer().getParty();
//   if (party == null) {
//		cm.sendOk("你的队伍要有2个人以上，你才可以申请远征队长。");
//        cm.safeDispose();
//		return;
//    }
//    if (party.getMembers().size() < 1) {
//		cm.sendOk("你的队伍要有2个人以上，你才可以申请远征队长。");
//        cm.safeDispose();
//        return;
//     }
//	if (cm.getPlayerCount(240050400 ) < 1){
//		cm.sendOk("你的队伍要有2个人以上，你才可以申请远征队长。");
//        cm.safeDispose();
//		return;
//	}
    var em = cm.getEventManager("HorntailBattle");

    if (em == null) {
		cm.sendOk("配置清单为空，请联系管理员.");
		cm.dispose();
		return;
    }
	
    var eim_status = em.getProperty("state");
	if (eim_status == null || eim_status.equals("0")) {
		var squadAvailability = cm.getSquadAvailability("Horntail");
		if (squadAvailability == -1) {
			status = 0;
			cm.sendYesNo("现在可以申请远征队，你想成为远征队队长吗？");
		} else if (squadAvailability == 1) {
			// -1 = Cancelled, 0 = not, 1 = true
			var type = cm.isSquadLeader("Horntail");
			if (type == -1) {
				cm.sendOk("已经结束了申请.");
				cm.dispose();
			} else if (type == 0) {
				var memberType = cm.isSquadMember("Horntail");
				if (memberType == 2) {
					cm.sendOk("在远征队的制裁名单.");
					cm.dispose();
				} else if (memberType == 1) {
					status = 5;
					//cm.sendSimple("你现在想做什么？\r\n#b#L0#查看远征队成员。#l \r\n#b#L1#加入远征队。#l \r\n#b#L2#退出远征队。#l");
					cm.sendSimple("你现在想做什么？\r\n#b#L2#查看远征队成员。#l \r\n#b#L0#加入远征队。#l ");
				} else if (memberType == -1) {
					cm.sendOk("远征队员已经达到30名，请稍后再试。");
					cm.dispose();
				} else {
					status = 5;
					//cm.sendSimple("你现在想做什么？ \r\n#b#L0#查看远征队成员。#l \r\n#b#L1#加入远征队。#l \r\n#b#L2#退出远征队。#l");
					cm.sendSimple("你现在想做什么？\r\n#b#L2#查看远征队成员。#l \r\n#b#L0#加入远征队。#l ");
				}
			} else { // Is leader
				status = 10;
				cm.sendSimple("你现在想做什么？\r\n#b#L0#查看远征队成员。#l \r\n#b#L1#管理远征队成员。#l \r\n#b#L2#编辑限制列表。#l \r\n#r#L3#进入地图。#l");
				// TODO viewing!
			}
	    } else {
			//检测黑龙地图有没有人，如果没有，重置远征
			if( (cm.getMonsterCount(240060000) < 1 || cm.getPlayerCount(240060000) < 1)
				&& (cm.getMonsterCount(240060100) < 1 || cm.getPlayerCount(240060100) < 1)
				&& (cm.getMonsterCount(240060200) < 1 || cm.getPlayerCount(240060200) < 1) ) {
				//如果没有人，或者没有怪，初始化黑龙远征状态。
				var em = cm.getEventManager("HorntailBattle");
				var eim = em.getInstance("HorntailBattle");
				if( eim != null ) {
					eim.dispose();
				}
				var squad = cm.getSquad("Horntail");
				if( squad != null ) {
					squad.clear();
				}
			}
			
			var eim = cm.getDisconnected("HorntailBattle");
			if (eim == null) {
				cm.sendOk("远征队的挑战已经开始。");
				cm.safeDispose();
			} else {
				cm.sendYesNo("你要继续进行远征任务吗？");
				status = 2;
			}
	    }
	} else {
		var eim = cm.getDisconnected("HorntailBattle");
		if (eim == null) {
			cm.sendOk("远征队的挑战已经开始。");
			cm.safeDispose();
		} else {
			cm.sendYesNo("你要继续进行远征任务吗？");
			status = 2;
		}
	}
}

function action(mode, type, selection) {
    switch (status) {
	case 0:
	    if (mode == 1) {
                if (cm.registerSquad("Horntail", 5, " 已经成为了远征队队长。如果你想加入远征队，请重新打开对话申请加入远征队。")) {
				cm.sendOk("你已经成为了远征队队长。接下来的5分钟，请等待队员们的申请。");
				//cm.gainNX(-1000);
			} else {
				cm.sendOk("未知错误.");
			}
	    }
	    cm.dispose();
	    break;
	case 2:
		if (!cm.reAdd("HorntailBattle", "Horntail")) {
			cm.sendOk("由于未知的错误，操作失败。");
		}
		cm.safeDispose();
		break;
	case 5:
	    if (selection == 0) { // join
			var ba = cm.addMember("Horntail", true);
			if (ba == 2) {
				cm.sendOk("远征队员已经达到30名，请稍后再试。");
			} else if (ba == 1) {
				cm.sendOk("申请加入远征队成功，请等候队长指示。");
			} else {
				cm.sendOk("你已经参加了远征队，请等候队长指示。");
			}
	    } else if (selection == 1) {// withdraw
			var baa = cm.addMember("Horntail", false);
			if (baa == 1) {
				cm.sendOk("制裁指定的成员成功。");
			} else {
				cm.sendOk("你没有参加远征队。");
			}
	    } else if (selection == 2) {
			if (!cm.getSquadList("Horntail", 0)) {
				cm.sendOk("由于未知的错误，操作失败.");
			}
	    }
	    cm.dispose();
	    break;
	case 10:
	    if (mode == 1) {
			if (selection == 0) {
				if (!cm.getSquadList("Horntail", 0)) {
					cm.sendOk("由于未知的错误，操作失败.");
				}
				cm.dispose();
			} else if (selection == 1) {
				status = 11;
				if (!cm.getSquadList("Horntail", 1)) {
					cm.sendOk("由于未知的错误，操作失败.");
					cm.dispose();
				}
			} else if (selection == 2) {
				status = 12;
				if (!cm.getSquadList("Horntail", 2)) {
					cm.sendOk("由于未知的错误，操作失败.");
					cm.dispose();
				}
			} else if (selection == 3) { // get insode
				if (cm.getSquad("Horntail") != null) {
					var dd = cm.getEventManager("HorntailBattle");
					//dd.startInstance(cm.getSquad("Horntail"), cm.getMap());
					//cm.sendOk("由于未知的错误，操作失败."+cm.getMap());
				
					//var party = cm.getPlayer().getParty();
					//if (party == null) {
					//	cm.sendOk("你的队伍要有2个人以上,才可以进入暗黑龙王的战斗.");
					//	cm.safeDispose();
					//	return;
					//}
					//if (party.getMembers().size() < 2) {
					//	cm.sendOk("你的队伍要有2个人以上,才可以进入暗黑龙王的战斗.");
					//	cm.safeDispose();
					//	return;
					//}
					cm.worldMessage(6,"玩家：["+cm.getName()+"]带领远征队伍挑战暗黑龙王！");
					//cm.sendOk("请你打败黑龙王左头颅，将#v4031050#交给我\r\n然后用#v4031050#交换30个#v4000186#碎片发给你的队友们进入黑龙王的战斗。");
					dd.startInstance(cm.getSquad("Horntail"), cm.getMap());
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
	    cm.banMember("Horntail", selection);
	    cm.dispose();
	    break;
	case 12:
	    if (selection != -1) {
			cm.acceptMember("Horntail", selection);
	    }
	    cm.dispose();
	    break;
    }
}