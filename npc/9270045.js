function start() {
	cm.sendYesNo("你要离开这个地方吗？?");
}

function action(mode, type, selection) {
    	if (mode == 1) {
		cm.warp(541020700,6);
	}
	cm.dispose();
}
