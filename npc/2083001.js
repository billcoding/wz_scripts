function start() {
    if (cm.getLevel() < 120 ) {              
    cm.sendOk("等级没有达到120级，无法挑战！");
	cm.dispose();
	 } else {
		// cm.sendOk("等级没有达到120级，无法挑战！1");
		 cm.warp(240050400,0);                 
         cm.dispose();
		 }
}