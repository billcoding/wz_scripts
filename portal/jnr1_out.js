function enter(pi) {
    if (pi.getMap().getAllMonstersThreadsafe().size() == 0) {
	pi.warp(926110100,0);
    } else {
	pi.playerMessage(5, "传送点没有开启！");
    }
}