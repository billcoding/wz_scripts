function enter(pi) {
    if (pi.getMap().getAllMonstersThreadsafe().size() == 0) {
	pi.warp(925100400,0); //next
    } else {
	pi.playerMessage(5, "有怪物没有清理完毕，无法进入！");
    }
}