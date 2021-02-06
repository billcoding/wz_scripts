var status = 0;
var fstype = 0;
var price = 50000000; //没用
var types = new Array("装备栏", "消耗栏", "任务栏", "杂物栏", "现金栏");
var chance3 = (Math.floor(Math.random() * 8) + 1);
var 正方箭头 = "#fUI/Basic/BtHide3/mouseOver/0#";
var 强化需要点卷 = 10000;
var 最大强化次数;
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
			text = "#e#d这是本服的装备升级次数系统#n\r\n\r\n";
			text += "#r1.这里只提升装备可升级次数,不改变属性\r\n"
			text += "#r2.强化时请将装备放到背包第一格,100%成功\r\n"
			text += "#r3.每件装备最多可强化125次\r\n"
			text += " #b#L2#"+正方箭头+"使用"+强化需要点卷+"点券升级+1次(125最高)\r\n"
            cm.sendSimple(text);
        } 
		else if (status == 1) 
		{
            if (selection == 2){
		var ii = Packages.server.MapleItemInformationProvider.getInstance();
                var item = cm.getInventory(1).getItem(1);
		if(item.getItemId() == 1142003){
		    cm.sendOk("#e#d提示:#n#v1142003#不能强化!");
                    cm.dispose();
					return;
				}
                var statup = new java.util.ArrayList();
		var itemid = item.getItemId();
                if (item == null){
                    cm.sendOk("#e#d提示:#n你装备栏第一格没有装备!");
                    cm.dispose();
					return;
                }
				var 已升级次数= Math.abs(item.getLevel());
				var 剩余回合 =  Math.abs(item.getUpgradeSlots());
				var 强化下限 = 125;
				if(cm.getPlayer().isGM())
				{
					var 强化上限 = 255;
				}else{
					var 强化上限 = 255;
				}
				
				var pd = 强化上限 - (已升级次数 + 剩余回合 );
                fstype = 2;
				
				//if (剩余回合+已升级次数<强化下限){
				if (true){	
				cm.sendOk("#e#d提示:#n只能强化125次以上装备"+已升级次数+"  "+剩余回合);
                    cm.dispose();
					return;
				}
				text = "#e#d提示:#n每 #r"+强化需要点卷+"#d 点卷为装备#v"+itemid+"#增加1次可升级次数\r\n该装备剩余可升级次数:#r"+pd+"#d   拥有点卷:#r"+cm.getPlayer().getCSPoints(1)+"\r\n";
				最大强化次数 = parseInt(cm.getPlayer().getCSPoints(1)/强化需要点卷);
				if(最大强化次数 > pd)
				{
					text += "您想要提升可升级次数几次？"
					cm.sendGetNumber(text,1,1,剩余回合);
				}else{
					text += "您想要提升可升级次数几次？"
					cm.sendGetNumber(text,1,1,剩余回合);
				}
            } 
        } else if (status == 2){
			var ii = Packages.server.MapleItemInformationProvider.getInstance();
            var item = cm.getInventory(1).getItem(1);
            var statup = new java.util.ArrayList();
            if (item == null) 
			{
                cm.sendOk("#e#d提示:#n你装备栏第一格没有装备!");
                cm.dispose();
				return;
           }  
	   
			
			var item = cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy();
			var id = item.getItemId();
			var 已升级次数= item.getLevel();
			var 剩余回合 = item.getUpgradeSlots();
			if(id == 1122000)
			{
				var 强化上限 = 255;
			}else {
				if(cm.getPlayer().isGM())
				{
					var 强化上限 = 255;
				}else{
					var 强化上限 = 255;
				}
			}
			var pd = 强化上限 - (已升级次数 + 剩余回合);
			var 升级次数 = selection;
			var 使用点卷 = 升级次数*强化需要点卷; 
			if (pd != -1 && pd > 0){
				var item = cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy();
				var statup = new java.util.ArrayList();
				item.setUpgradeSlots((item.getUpgradeSlots() + 升级次数));
				item.setLocked(1);
				Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
				Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
				//cm.gainNX(10000000);//扣除点卷 

				cm.sendOk("#e#d提示:#n升级成功！");
				cm.喇叭(2,"玩家["+cm.getName()+"]使用"+使用点卷+"点卷给装备升级了"+升级次数+"个次数,大家一起恭喜他(她)!");
				cm.dispose();
			}else if (pd == 0){
				cm.sendOk("#e#d提示:#n当前装备已到达强化上限，无法强化！");
				cm.dispose();
			}   
		}
	}
}