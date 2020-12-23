function start() {
	if (cm.getPlayer().getClient().getChannel() < 4 ) {
        cm.dispose();
        cm.openNpc(2083004, 1);
    } else {
        cm.sendOk("只有在1、2、3频道才可以参加黑龙远征队");
        cm.dispose();
    }
}