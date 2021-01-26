


var status = 0;
var ttt ="#fUI/UIWindow.img/Quest/icon9/0#";
var xxx ="#fUI/UIWindow.img/Quest/icon8/0#";
var sss ="#fUI/UIWindow.img/QuestIcon/3/0#";

	function start() {
		status = -1;
		action(1, 0, 0);
		}
	function action(mode, type, selection) {
		if (mode == -1) {
		cm.dispose();
		} else {
		if (status >= 0 && mode == 0) {
		cm.dispose();
		return;
		}
		if (mode == 1)
		status++;
		else
		status--;


	if (status == 0) {

	    var textz = "\r\n��ã����Ǵ�����ѡ������Ҫ���װ�� \r\n����װ�������ֻ��һ��Ȩ\r\n";

		textz += "#r#L0##v1302126##z1302126#    սʿ - ���ֽ�#l\r\n\r\n";

		textz += "#r#L1##v1402068##z1402068#    սʿ - ˫�ֽ�#l\r\n\r\n";

		textz += "#r#L2##v1332095##z1332095#      ���� - ��  ��#l\r\n\r\n";

		textz += "#r#L3##v1382076##z1382076#   ��ʦ - ��  ��#l\r\n\r\n";

		textz += "#r#L4##v1432059##z1432059#   սʿ - ��  ǹ#l\r\n\r\n";

		textz += "#r#L5##v1442084##z1442084#   սʿ - ��  ì#l\r\n\r\n";

		textz += "#r#L6##v1452079##z1452079#   ���� - Զ  ��#l\r\n\r\n";

		textz += "#r#L7##v1462071##z1462071#   ���� - Զ  ��#l\r\n\r\n";

		textz += "#r#L8##v1472095##z1472095#   ���� - ȭ  ��#l\r\n\r\n";

		textz += "#r#L9##v1482043##z1482043#   ���� - ȭ  ��#l\r\n\r\n";

		textz += "#r#L10##v1492044##z1492044#    ���� - ��  ǹ#l\r\n\r\n";

		cm.sendSimple (textz);  

	}else if (status == 1) {

	if (selection == 0){
		if (cm.getMeso() < 0) {
 			cm.sendOk("�����#r1��#k���#k");
      			cm.dispose();
		} else if (!cm.haveItem(5220007,1)) {
 			cm.sendOk("#v5220007##z5220007#��û�и���Ʒ ��Ҫ���̳ǹ����������");
      			cm.dispose();
		} else if (cm.getPlayer().getInventory(net.sf.cherry.client.MapleInventoryType.getByType(1)).isFull(3)){
			cm.sendOk("#b�뱣֤װ����λ������3���ո�,�����޷��һ�.");
			cm.dispose();
		} else{
         var ii = net.sf.cherry.server.MapleItemInformationProvider.getInstance();		                
            var type = ii.getInventoryType(1302126); //���װ��������/////////////////////////////////////////////////////////////////////
            var toDrop = ii.randomizeStats(ii.getEquipById(1302126)).copy(); // ����һ��Equip��
            var temptime = new java.sql.Timestamp(java.lang.System.currentTimeMillis() + 1 * 4 * 60 * 60 * 1000*1); //ʱ��
toDrop.setExpiration(temptime); 
cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
cm.getC().getSession().write(net.sf.cherry.tools.MaplePacketCreator.addInventorySlot(type, toDrop)); //ˢ�±���	
cm.getChar().saveToDB(true);
			cm.gainItem(5220007,-1);
			cm.sendOk("�һ��ɹ�!")
      			cm.dispose();
			}

	}else if (selection == 1){
		if (cm.getMeso() < 0) {
 			cm.sendOk("�����#r5000W#k���#k");
      			cm.dispose();
		} else if (!cm.haveItem(5220007,1)) {
 			cm.sendOk("#v5220007##z5220007#��û�и���Ʒ ��Ҫ���̳ǹ����������#k");
      			cm.dispose();
		} else if (cm.getPlayer().getInventory(net.sf.cherry.client.MapleInventoryType.getByType(1)).isFull(3)){
			cm.sendOk("#b�뱣֤װ����λ������3���ո�,�����޷��һ�.");
			cm.dispose();
		} else{
         var ii = net.sf.cherry.server.MapleItemInformationProvider.getInstance();		                
            var type = ii.getInventoryType(1402068); //���װ��������/////////////////////////////////////////////////////////////////////
            var toDrop = ii.randomizeStats(ii.getEquipById(1402068)).copy(); // ����һ��Equip��
            var temptime = new java.sql.Timestamp(java.lang.System.currentTimeMillis() + 1 * 4 * 60 * 60 * 1000*1); //ʱ��
toDrop.setExpiration(temptime); 
cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
cm.getC().getSession().write(net.sf.cherry.tools.MaplePacketCreator.addInventorySlot(type, toDrop)); //ˢ�±���	
cm.getChar().saveToDB(true);
			cm.gainItem(5220007,-1);
			cm.sendOk("�һ��ɹ�!")
      			cm.dispose();
			}




	}else if (selection == 2){
		if (cm.getMeso() < 0) {
 			cm.sendOk("�����#r5000W#k���#k");
      			cm.dispose();
		} else if (!cm.haveItem(5220007,1)) {
 			cm.sendOk("#v5220007##z5220007#��û�и���Ʒ ��Ҫ���̳ǹ����������#k");
      			cm.dispose();
		} else if (cm.getPlayer().getInventory(net.sf.cherry.client.MapleInventoryType.getByType(1)).isFull(3)){
			cm.sendOk("#b�뱣֤װ����λ������3���ո�,�����޷��һ�.");
			cm.dispose();
		} else{
         var ii = net.sf.cherry.server.MapleItemInformationProvider.getInstance();		                
            var type = ii.getInventoryType(1332095); //���װ��������/////////////////////////////////////////////////////////////////////
            var toDrop = ii.randomizeStats(ii.getEquipById(1332095)).copy(); // ����һ��Equip��
            var temptime = new java.sql.Timestamp(java.lang.System.currentTimeMillis() + 1 * 4 * 60 * 60 * 1000*1); //ʱ��
toDrop.setExpiration(temptime); 
cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
cm.getC().getSession().write(net.sf.cherry.tools.MaplePacketCreator.addInventorySlot(type, toDrop)); //ˢ�±���	
cm.getChar().saveToDB(true);
			cm.gainItem(5220007,-1);
			cm.sendOk("�һ��ɹ�!")
      			cm.dispose();
			}

	}else if (selection == 3){
		if (cm.getMeso() < 0) {
 			cm.sendOk("�����#r5000W#k���#k");
      			cm.dispose();
		} else if (!cm.haveItem(5220007,1)) {
 			cm.sendOk("#v5220007##z5220007#��û�и���Ʒ ��Ҫ���̳ǹ����������#k");
      			cm.dispose();
		} else if (cm.getPlayer().getInventory(net.sf.cherry.client.MapleInventoryType.getByType(1)).isFull(3)){
			cm.sendOk("#b�뱣֤װ����λ������3���ո�,�����޷��һ�.");
			cm.dispose();
		} else{
         var ii = net.sf.cherry.server.MapleItemInformationProvider.getInstance();		                
            var type = ii.getInventoryType(1382076); //���װ��������/////////////////////////////////////////////////////////////////////
            var toDrop = ii.randomizeStats(ii.getEquipById(1382076)).copy(); // ����һ��Equip��
            var temptime = new java.sql.Timestamp(java.lang.System.currentTimeMillis() + 1 * 4 * 60 * 60 * 1000*1); //ʱ��
toDrop.setExpiration(temptime); 
cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
cm.getC().getSession().write(net.sf.cherry.tools.MaplePacketCreator.addInventorySlot(type, toDrop)); //ˢ�±���	
cm.getChar().saveToDB(true);
			cm.gainItem(5220007,-1);
			cm.sendOk("�һ��ɹ�!")
      			cm.dispose();
			}

	}else if (selection == 4){
		if (cm.getMeso() < 0) {
 			cm.sendOk("�����#r5000W#k���#k");
      			cm.dispose();
		} else if (!cm.haveItem(5220007,1)) {
 			cm.sendOk("#v5220007##z5220007#��û�и���Ʒ ��Ҫ���̳ǹ����������#k");
      			cm.dispose();
		} else if (cm.getPlayer().getInventory(net.sf.cherry.client.MapleInventoryType.getByType(1)).isFull(3)){
			cm.sendOk("#b�뱣֤װ����λ������3���ո�,�����޷��һ�.");
			cm.dispose();
		} else{
         var ii = net.sf.cherry.server.MapleItemInformationProvider.getInstance();		                
            var type = ii.getInventoryType(1432059); //���װ��������/////////////////////////////////////////////////////////////////////
            var toDrop = ii.randomizeStats(ii.getEquipById(1432059)).copy(); // ����һ��Equip��
            var temptime = new java.sql.Timestamp(java.lang.System.currentTimeMillis() + 1 * 4 * 60 * 60 * 1000*1); //ʱ��
toDrop.setExpiration(temptime); 
cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
cm.getC().getSession().write(net.sf.cherry.tools.MaplePacketCreator.addInventorySlot(type, toDrop)); //ˢ�±���	
cm.getChar().saveToDB(true);
			cm.gainItem(5220007,-1);
			cm.sendOk("�һ��ɹ�!")
      			cm.dispose();
			}

	}else if (selection == 5){
		if (cm.getMeso() < 0) {
 			cm.sendOk("�����#r5000W#k���#k");
      			cm.dispose();
		} else if (!cm.haveItem(5220007,1)) {
 			cm.sendOk("#v5220007##z5220007#��û�и���Ʒ ��Ҫ���̳ǹ����������#k");
      			cm.dispose();
		} else if (cm.getPlayer().getInventory(net.sf.cherry.client.MapleInventoryType.getByType(1)).isFull(3)){
			cm.sendOk("#b�뱣֤װ����λ������3���ո�,�����޷��һ�.");
			cm.dispose();
		} else{
         var ii = net.sf.cherry.server.MapleItemInformationProvider.getInstance();		                
            var type = ii.getInventoryType(1442084); //���װ��������/////////////////////////////////////////////////////////////////////
            var toDrop = ii.randomizeStats(ii.getEquipById(1442084)).copy(); // ����һ��Equip��
            var temptime = new java.sql.Timestamp(java.lang.System.currentTimeMillis() + 1 * 4 * 60 * 60 * 1000*1); //ʱ��
toDrop.setExpiration(temptime); 
cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
cm.getC().getSession().write(net.sf.cherry.tools.MaplePacketCreator.addInventorySlot(type, toDrop)); //ˢ�±���	
cm.getChar().saveToDB(true);
			cm.gainItem(5220007,-1);
			cm.sendOk("�һ��ɹ�!")
      			cm.dispose();
			}






	}else if (selection == 6){
		if (cm.getMeso() < 0) {
 			cm.sendOk("�����#r5000W#k���#k");
      			cm.dispose();
		} else if (!cm.haveItem(5220007,1)) {
 			cm.sendOk("#v5220007##z5220007#��û�и���Ʒ ��Ҫ���̳ǹ����������#k");
      			cm.dispose();
		} else if (cm.getPlayer().getInventory(net.sf.cherry.client.MapleInventoryType.getByType(1)).isFull(3)){
			cm.sendOk("#b�뱣֤װ����λ������3���ո�,�����޷��һ�.");
			cm.dispose();
		} else{
         var ii = net.sf.cherry.server.MapleItemInformationProvider.getInstance();		                
            var type = ii.getInventoryType(1452079); //���װ��������/////////////////////////////////////////////////////////////////////
            var toDrop = ii.randomizeStats(ii.getEquipById(1452079)).copy(); // ����һ��Equip��
            var temptime = new java.sql.Timestamp(java.lang.System.currentTimeMillis() + 1 * 4 * 60 * 60 * 1000*1); //ʱ��
toDrop.setExpiration(temptime); 
cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
cm.getC().getSession().write(net.sf.cherry.tools.MaplePacketCreator.addInventorySlot(type, toDrop)); //ˢ�±���	
cm.getChar().saveToDB(true);
			cm.gainItem(5220007,-1);
			cm.sendOk("�һ��ɹ�!")
      			cm.dispose();
			}

	}else if (selection == 7){
		if (cm.getMeso() < 0) {
 			cm.sendOk("�����#r5000W#k���#k");
      			cm.dispose();
		} else if (!cm.haveItem(5220007,1)) {
 			cm.sendOk("#v5220007##z5220007#��û�и���Ʒ ��Ҫ���̳ǹ����������#k");
      			cm.dispose();
		} else if (cm.getPlayer().getInventory(net.sf.cherry.client.MapleInventoryType.getByType(1)).isFull(3)){
			cm.sendOk("#b�뱣֤װ����λ������3���ո�,�����޷��һ�.");
			cm.dispose();
		} else{
         var ii = net.sf.cherry.server.MapleItemInformationProvider.getInstance();		                
            var type = ii.getInventoryType(1462071); //���װ��������/////////////////////////////////////////////////////////////////////
            var toDrop = ii.randomizeStats(ii.getEquipById(1462071)).copy(); // ����һ��Equip��
            var temptime = new java.sql.Timestamp(java.lang.System.currentTimeMillis() + 1 * 4 * 60 * 60 * 1000*1); //ʱ��
toDrop.setExpiration(temptime); 
cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
cm.getC().getSession().write(net.sf.cherry.tools.MaplePacketCreator.addInventorySlot(type, toDrop)); //ˢ�±���	
cm.getChar().saveToDB(true);
			cm.gainItem(5220007,-1);
			cm.sendOk("�һ��ɹ�!")
      			cm.dispose();
			}

	}else if (selection == 8){
		if (cm.getMeso() < 0) {
 			cm.sendOk("�����#r5000W#k���#k");
      			cm.dispose();
		} else if (!cm.haveItem(5220007,1)) {
 			cm.sendOk("#v5220007##z5220007#��û�и���Ʒ ��Ҫ���̳ǹ����������#k");
      			cm.dispose();
		} else if (cm.getPlayer().getInventory(net.sf.cherry.client.MapleInventoryType.getByType(1)).isFull(3)){
			cm.sendOk("#b�뱣֤װ����λ������3���ո�,�����޷��һ�.");
			cm.dispose();
		} else{
         var ii = net.sf.cherry.server.MapleItemInformationProvider.getInstance();		                
            var type = ii.getInventoryType(1472095); //���װ��������/////////////////////////////////////////////////////////////////////
            var toDrop = ii.randomizeStats(ii.getEquipById(1472095)).copy(); // ����һ��Equip��
            var temptime = new java.sql.Timestamp(java.lang.System.currentTimeMillis() + 1 * 4 * 60 * 60 * 1000*1); //ʱ��
toDrop.setExpiration(temptime); 
cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
cm.getC().getSession().write(net.sf.cherry.tools.MaplePacketCreator.addInventorySlot(type, toDrop)); //ˢ�±���	
cm.getChar().saveToDB(true);
			cm.gainItem(5220007,-1);
			cm.sendOk("�һ��ɹ�!")
      			cm.dispose();
			}

	}else if (selection == 9){
		if (cm.getMeso() < 0) {
 			cm.sendOk("�����#r5000W#k���#k");
      			cm.dispose();
		} else if (!cm.haveItem(5220007,1)) {
 			cm.sendOk("#v5220007##z5220007#��û�и���Ʒ ��Ҫ���̳ǹ����������#k");
      			cm.dispose();
		} else if (cm.getPlayer().getInventory(net.sf.cherry.client.MapleInventoryType.getByType(1)).isFull(3)){
			cm.sendOk("#b�뱣֤װ����λ������3���ո�,�����޷��һ�.");
			cm.dispose();
		} else{
         var ii = net.sf.cherry.server.MapleItemInformationProvider.getInstance();		                
            var type = ii.getInventoryType(1482043); //���װ��������/////////////////////////////////////////////////////////////////////
            var toDrop = ii.randomizeStats(ii.getEquipById(1482043)).copy(); // ����һ��Equip��
            var temptime = new java.sql.Timestamp(java.lang.System.currentTimeMillis() + 1 * 4 * 60 * 60 * 1000*1); //ʱ��
toDrop.setExpiration(temptime); 
cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
cm.getC().getSession().write(net.sf.cherry.tools.MaplePacketCreator.addInventorySlot(type, toDrop)); //ˢ�±���	
cm.getChar().saveToDB(true);
			cm.gainItem(5220007,-1);
			cm.sendOk("�һ��ɹ�!")
      			cm.dispose();
			}
	}else if (selection == 10){
		if (cm.getMeso() < 0) {
 			cm.sendOk("�����#r5000W#k���#k");
      			cm.dispose();
		} else if (!cm.haveItem(5220007,1)) {
 			cm.sendOk("#v5220007##z5220007#��û�и���Ʒ ��Ҫ���̳ǹ����������#k");
      			cm.dispose();
		} else if (cm.getPlayer().getInventory(net.sf.cherry.client.MapleInventoryType.getByType(1)).isFull(3)){
			cm.sendOk("#b�뱣֤װ����λ������3���ո�,�����޷��һ�.");
			cm.dispose();
		} else{
         var ii = net.sf.cherry.server.MapleItemInformationProvider.getInstance();		                
            var type = ii.getInventoryType(1492044); //���װ��������/////////////////////////////////////////////////////////////////////
            var toDrop = ii.randomizeStats(ii.getEquipById(1492044)).copy(); // ����һ��Equip��
            var temptime = new java.sql.Timestamp(java.lang.System.currentTimeMillis() + 1 * 4 * 60 * 60 * 1000*1); //ʱ��
toDrop.setExpiration(temptime); 
cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
cm.getC().getSession().write(net.sf.cherry.tools.MaplePacketCreator.addInventorySlot(type, toDrop)); //ˢ�±���	
cm.getChar().saveToDB(true);
			cm.gainItem(5220007,-1);
			cm.sendOk("�һ��ɹ�!")
      			cm.dispose();
			}


}
}
}
}
