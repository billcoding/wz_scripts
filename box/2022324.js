var 所需物品ID = 2022324;

function start() {

            if (cm.判断物品(所需物品ID,1) == false ) {
             cm.dispose();
             return;				
			} 

            var ii = Packages.server.MapleItemInformationProvider.getInstance();
            var item = cm.getInventory(1).getItem(1);
            //var itemId = item.getItemId();
             if (item == null) {
                
				cm.消息(5,"[装备交换卡] : 装备栏第一格没有装备！");
                cm.dispose();
				return;
            }
			if (item.getFlag()==16){
				cm.消息(5,"[装备交换卡] : 装备已经可以交易了，不要重复使用！");
                cm.dispose();
				return;
			}
			if (ii.isCash(item.getItemId()) ) {
			cm.消息(1,"不能用于现金装备！");
            cm.dispose();
            return;
            }  

			cm.gainItem(所需物品ID, -1);
			cm.playSound(false, "Romio/discovery");
			item = cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy();
			item.setFlag(16)
			Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, true);
                Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
				cm.消息(5,"[装备交换卡] : 现在装备可以交易了！");
			cm.dispose();
			return;


			 
} 
        


