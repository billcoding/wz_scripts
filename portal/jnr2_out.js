function enter(pi) {
    var em = pi.getEventManager("Juliet");
    if (em != null && em.getProperty("stage3").equals("3")) {
	pi.warp(926110200,0);
    } else {
	pi.playerMessage(5, "传送点没有开启！");
    }
}