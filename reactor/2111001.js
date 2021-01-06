/*
Zakum Altar - Summons Zakum.
*/

function act() {
    rm.changeMusic("Bgm06/FinalFight");
	rm.getMap().spawnZakum(-10, -215);
    rm.mapMessage("扎昆Boss被火焰之眼的力量召唤出來了。");
	if (!rm.getPlayer().isGM()) {
		rm.getMap().startSpeedRun();
	}
}
