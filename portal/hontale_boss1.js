function enter(pi) {
   var em = pi.getEventManager("HorntailBattle");

    if (em != null) {
		var prop = em.getProperty("preheadCheck");

		if (prop != null && prop.equals("0")) {
	   		pi.mapMessage(6, "有个巨大的生物正从洞穴深处靠近。")
			em.setProperty("preheadCheck", "1");
		}
		if( prop != null && prop.equals("2") && pi.getMonsterCount(240060000) < 1 ) { //召唤怪物之后变成2
			em.setProperty("state",2);
		}
    }
}