var status = 0;
var fstype = 0;
var price = 50000000; //û��
var types = new Array("װ����", "������", "������", "������", "�ֽ���");
var chance3 = (Math.floor(Math.random() * 8) + 1);
var ������ͷ = "#fUI/Basic/BtHide3/mouseOver/0#";
var ǿ����Ҫ��� = 10000;
var ���ǿ������;
function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1) status++;
        if (status == 0) 
		{
			text = "#e#d���Ǳ�����װ����������ϵͳ#n\r\n\r\n";
			text += "#r1.����ֻ����װ������������,���ı�����\r\n"
			text += "#r2.ǿ��ʱ�뽫װ���ŵ�������һ��,100%�ɹ�\r\n"
			text += "#r3.ÿ��װ������ǿ��125��\r\n"
			text += " #b#L2#"+������ͷ+"ʹ��"+ǿ����Ҫ���+"��ȯ����+1��(125���)\r\n"
            cm.sendSimple(text);
        } 
		else if (status == 1) 
		{
            if (selection == 2){
		var ii = Packages.server.MapleItemInformationProvider.getInstance();
                var item = cm.getInventory(1).getItem(1);
		if(item.getItemId() == 1142003){
		    cm.sendOk("#e#d��ʾ:#n#v1142003#����ǿ��!");
                    cm.dispose();
					return;
				}
                var statup = new java.util.ArrayList();
		var itemid = item.getItemId();
                if (item == null){
                    cm.sendOk("#e#d��ʾ:#n��װ������һ��û��װ��!");
                    cm.dispose();
					return;
                }
				var ����������= Math.abs(item.getLevel());
				var ʣ��غ� =  Math.abs(item.getUpgradeSlots());
				var ǿ������ = 125;
				if(cm.getPlayer().isGM())
				{
					var ǿ������ = 255;
				}else{
					var ǿ������ = 255;
				}
				
				var pd = ǿ������ - (���������� + ʣ��غ� );
                fstype = 2;
				
				//if (ʣ��غ�+����������<ǿ������){
				if (true){	
				cm.sendOk("#e#d��ʾ:#nֻ��ǿ��125������װ��"+����������+"  "+ʣ��غ�);
                    cm.dispose();
					return;
				}
				text = "#e#d��ʾ:#nÿ #r"+ǿ����Ҫ���+"#d ���Ϊװ��#v"+itemid+"#����1�ο���������\r\n��װ��ʣ�����������:#r"+pd+"#d   ӵ�е��:#r"+cm.getPlayer().getCSPoints(1)+"\r\n";
				���ǿ������ = parseInt(cm.getPlayer().getCSPoints(1)/ǿ����Ҫ���);
				if(���ǿ������ > pd)
				{
					text += "����Ҫ�����������������Σ�"
					cm.sendGetNumber(text,1,1,ʣ��غ�);
				}else{
					text += "����Ҫ�����������������Σ�"
					cm.sendGetNumber(text,1,1,ʣ��غ�);
				}
            } 
        } else if (status == 2){
			var ii = Packages.server.MapleItemInformationProvider.getInstance();
            var item = cm.getInventory(1).getItem(1);
            var statup = new java.util.ArrayList();
            if (item == null) 
			{
                cm.sendOk("#e#d��ʾ:#n��װ������һ��û��װ��!");
                cm.dispose();
				return;
           }  
	   
			
			var item = cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy();
			var id = item.getItemId();
			var ����������= item.getLevel();
			var ʣ��غ� = item.getUpgradeSlots();
			if(id == 1122000)
			{
				var ǿ������ = 255;
			}else {
				if(cm.getPlayer().isGM())
				{
					var ǿ������ = 255;
				}else{
					var ǿ������ = 255;
				}
			}
			var pd = ǿ������ - (���������� + ʣ��غ�);
			var �������� = selection;
			var ʹ�õ�� = ��������*ǿ����Ҫ���; 
			if (pd != -1 && pd > 0){
				var item = cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy();
				var statup = new java.util.ArrayList();
				item.setUpgradeSlots((item.getUpgradeSlots() + ��������));
				item.setLocked(1);
				Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
				Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
				//cm.gainNX(10000000);//�۳���� 

				cm.sendOk("#e#d��ʾ:#n�����ɹ���");
				cm.����(2,"���["+cm.getName()+"]ʹ��"+ʹ�õ��+"����װ��������"+��������+"������,���һ��ϲ��(��)!");
				cm.dispose();
			}else if (pd == 0){
				cm.sendOk("#e#d��ʾ:#n��ǰװ���ѵ���ǿ�����ޣ��޷�ǿ����");
				cm.dispose();
			}   
		}
	}
}