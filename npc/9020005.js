var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	if (status == 0) {
	    cm.dispose();
	}
	status--;
    }
    if (status == 0) {
	cm.sendSimple("#b#L2#Go break out of prison with a party.#l\r\n#L3#Marx Von Leon Belt (50 Guard Keys) (STR/DEX)#l\r\n#L4#Alma Von Leon Belt (50 Guard Keys) (INT/LUK)#l\r\n#L5#Fox Von Leon Belt (50 Guard Keys) (STR/DEX)#l\r\n#L6#Nox Von Leon Belt (50 Guard Keys) (DEX/LUK)#l\r\n#L7#Cora Von Leon Belt (50 Guard Keys) (STR/DEX)#l#k");
    } else if (status == 1) {
	if (selection == 2) {
	    if (cm.getPlayer().getParty() == null || !cm.isLeader()) {
		cm.sendOk("队长一定要在这个地图.");
	    } else {
		var party = cm.getPlayer().getParty().getMembers();
		var mapId = cm.getPlayer().getMapId();
		var next = true;
		var size = 0;
		var it = party.iterator();
		while (it.hasNext()) {
			var cPlayer = it.next();
			var ccPlayer = cm.getPlayer().getMap().getCharacterById(cPlayer.getId());
			if (ccPlayer == null || ccPlayer.getLevel() < 120) {
				next = false;
				break;
			}
			size += (ccPlayer.isGM() ? 4 : 1);
		}	
		if (next && size >= 2) {
			var em = cm.getEventManager("Prison");
			if (em == null) {
				cm.sendOk("The prison is fine at the moment. Please try again later.");
			} else {
		    var prop = em.getProperty("state");
		    if (prop.equals("0") || prop == null) {
			em.startInstance(cm.getPlayer().getParty(), cm.getPlayer().getMap(), 200);
		    } else {
			cm.sendOk("另一个小队任务已经进入了这个通道.");
		    }
			}
		} else {
			cm.sendOk("你的队伍中所有2+的成员必须达到120级或以上.");
		}
	    }
	} else if (selection == 3 || selection == 4 || selection == 5 || selection == 6 || selection == 7) {
		if (!cm.canHold(1132091 + selection,1)) {
			cm.sendOk("Make room in Equip.");
		} else if (cm.haveItem(4001534,50)) { //TODO JUMP
			cm.gainItem(1132091 + selection, 1);
			cm.gainItem(4001534, -50);
		} else {
			cm.sendOk("带着50个守卫钥匙回来.");
		}
	}
	cm.dispose();
    }
}