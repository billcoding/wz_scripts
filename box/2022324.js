var ������ƷID = 2022324;

function start() {

            if (cm.�ж���Ʒ(������ƷID,1) == false ) {
             cm.dispose();
             return;				
			} 

            var ii = Packages.server.MapleItemInformationProvider.getInstance();
            var item = cm.getInventory(1).getItem(1);
            //var itemId = item.getItemId();
             if (item == null) {
                
				cm.��Ϣ(5,"[װ��������] : װ������һ��û��װ����");
                cm.dispose();
				return;
            }
			if (item.getFlag()==16){
				cm.��Ϣ(5,"[װ��������] : װ���Ѿ����Խ����ˣ���Ҫ�ظ�ʹ�ã�");
                cm.dispose();
				return;
			}
			if (ii.isCash(item.getItemId()) ) {
			cm.��Ϣ(1,"���������ֽ�װ����");
            cm.dispose();
            return;
            }  

			cm.gainItem(������ƷID, -1);
			cm.playSound(false, "Romio/discovery");
			item = cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy();
			item.setFlag(16)
			Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, true);
                Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
				cm.��Ϣ(5,"[װ��������] : ����װ�����Խ����ˣ�");
			cm.dispose();
			return;


			 
} 
        


