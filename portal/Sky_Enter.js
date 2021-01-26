function enter(pi) {
    if (pi.getPlayer().getSkillLevel(1026) > 0 || pi.getPlayer().getSkillLevel(10001026) > 0 || pi.getPlayer().getSkillLevel(20001026) > 0 || pi.getPlayer().getSkillLevel(20011026) > 0 || pi.getPlayer().getSkillLevel(30001026) > 0) {
	var eim = pi.getDisconnected("Dragonica");
	if (eim != null && pi.getPlayer().getParty() != null) { //only skip if not null
		eim.registerPlayer(pi.getPlayer());
		return true;
	}
    if (pi.getPlayer().getParty() == null || !pi.isLeader()) {
	pi.playerMessage(5, "队长一定要在这个地图.");
	return false;
    }
	var party = pi.getPlayer().getParty().getMembers();
	var next = true;
	var size = 0;
	var it = party.iterator();
	while (it.hasNext()) {
		var cPlayer = it.next();
		var ccPlayer = pi.getPlayer().getMap().getCharacterById(cPlayer.getId());
		if (ccPlayer == null) {
			next = false;
			break;
		} else if (ccPlayer.isGM()) {
			size += 4;
		} else {
			size++;
		}
	}
	if (next && size > 3) {
		var em = pi.getEventManager("Dragonica");
		if (em == null) {
			pi.playerMessage(5, "此事件目前不可用.");
		} else {
			var prop = em.getProperty("state");
			if (prop == null || prop.equals("0")) {
				em.startInstance(pi.getParty(), pi.getMap());
			} else {
				pi.playerMessage(5, "已经有人在打这个BOSS了.");
			}
		}
	} else {
		pi.playerMessage(5, "确保有3名以上的队员都在这张地图上.");
		return false;
	}
        return true;
    } else {
        pi.playerMessage("门还没开.");
        return false;
    }
}