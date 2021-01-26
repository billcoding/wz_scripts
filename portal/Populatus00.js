var 闹钟 = 2;
function enter(pi) {
    if (pi.getPlayer().getClient().getChannel() != 1 && pi.getPlayer().getClient().getChannel() != 2 && pi.getPlayer().getClient().getChannel() != 3) {
        pi.playerMessage(5, "★帕普拉图斯★只能在频道1、2、3能打。");
        return false;
    }
/*     if (pi.haveItem(4031870)) {
        pi.warp(922020300, 0);
        return true; */         //到一个新的地图，没有出口不知道是啥
    
/*     if (!pi.haveItem(4031172)) {
        pi.playerMessage(5, "不明的力量无法进入，需要有玩具奖牌。");
        return false;
    } else {
		pi.getPlayer().removeAll(4031172);
	} */
	if (pi.getBossLog("闹钟") >= 2) {
		pi.playerMessage(5, "一天只能打两次★帕普拉图斯★");
		return false;
	}
    if (pi.getPlayerCount(220080001) <= 0) { // Papu Map
        var papuMap = pi.getMap(220080001);
        papuMap.resetFully();
		pi.setBossLog("闹钟");
        pi.playPortalSE();
        pi.warp(220080001, "st00");
        return true;
    } else {
        if (pi.getMap(220080001).getSpeedRunStart() == 0 && (pi.getMonsterCount(220080001) <= 0 || pi.getMap(220080001).isDisconnected(pi.getPlayer().getId()))) {
			pi.setBossLog("闹钟");
            pi.playPortalSE();
            pi.warp(220080001, "st00");
            return true;
        } else {
            pi.playerMessage(5, "里面的战斗已经开始，请稍后再尝试。");
            return false;
        }
    }
}