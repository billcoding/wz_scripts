function enter(pi) {
    if (pi.getBossLog("狮熊Boss") >= 2) {
        pi.playerMessage(5, "每天只能挑战2次！");
		  return false;
    } else {
		}
	if (!pi.haveItem(4032246)) {
        pi.playerMessage(5, "你没有梦幻主题公园魂魄。");
    } else {
        //pi.openNpc(9270047);
        if (pi.getPlayerCount(551030200) <= 0) { // Fant. Map
            var FantMap = pi.getMap(551030200);
            FantMap.resetReactors();
            FantMap.killAllMonsters(false);
            pi.playPortalSE();
            pi.warp(551030200, "sp");
			pi.setBossLog("狮熊Boss");
        } else {
            if (pi.getMonsterCount(551030200) <= 0) {
                pi.playPortalSE();
                pi.warp(551030200, "sp");
				pi.setBossLog("狮熊Boss");
            } else {
                pi.playerMessage(5, "对抗暴力熊的挑战已经开始了，你不能进去。");
            }
        }
    }
}