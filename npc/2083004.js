function start() {
	if (cm.getPlayer().getClient().getChannel() < 4 ) {
        cm.dispose();
        cm.openNpc(2083004, 1);
    } else {
        cm.sendOk("ֻ����1��2��3Ƶ���ſ��ԲμӺ���Զ����");
        cm.dispose();
    }
}