/*
    Zakum Entrance
*/
var ZakumBattle = 2

function enter(pi) {
    if (pi.getQuestStatus(100200) != 2) {
	pi.playerMessage(5, "您好像还沒准备好面对BOSS。");
	return false;

/*     } else if (!pi.haveItem(4001017)) {
	pi.playerMessage(5, "由于你沒有火焰之眼，所以不能挑战扎昆。");
	return false;
    } */
    
	
	 } 
	 else if (pi.getPlayer().getClient().getChannel() != 1 && pi.getPlayer().getClient().getChannel() != 2 && pi.getPlayer().getClient().getChannel() != 3) {
     pi.playerMessage(5, "★Boss扎昆★只能在频道1、2、3能打。");
     return false;
    }
	
    
	 if (pi.getBossLog('ZakumBattle') >= 2) {
     pi.playerMessage(5, "★Boss扎昆★ 每天只能挑战2次！");
     return false;
	}
	 
	pi.playPortalSE();
	pi.setBossLog('ZakumBattle'); 
    pi.warp(pi.getPlayer().getMapId() + 100, "west00");
    return true;
}