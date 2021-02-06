var 所需物品ID = 2022355;


var 数组1 =['Str', 'Dex', 'Int', 'Luk', 'Hp', 'Mp', 'Watk', 'Matk']
var 数组2 =['力量', '敏捷', '智力', '运气', ' HP ', ' Mp ', '攻击', '魔力']

function start() {

            if (cm.判断物品(所需物品ID,1) == false ) {
             cm.dispose();
             return;				
			} 

            var ii = Packages.server.MapleItemInformationProvider.getInstance();
            var item = cm.getInventory(1).getItem(1);
            //var itemId = item.getItemId();
             if (item == null) {
                
				//cm.消息(6,"[时装强化] : 装备栏第一格没有装备！");
				cm.playerMessage(6,"[时装强化] : 装备栏第一格没有装备！");
                cm.dispose();
				return;
            } 

			if (ii.isCash(item.getItemId())== false ) {
                        //cm.sendOk("只能用于时装！");
						//cm.消息(1,"只能用于时装！");
						cm.playerMessage(1,"只能用于时装！");
                        cm.dispose();
                        return;
                    }  
					if (取随机数啊(1,100) <= 35 ){  //强化失败
						cm.gainItem(所需物品ID, -1);
						//cm.消息(6,"[时装强化] : 强化失败！");
						cm.playerMessage(6,"[时装强化] : 强化失败！");
						cm.dispose();
						return;
						}
                item = cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy();
                var 装备头 = item.getOwner();
                var lv = "",
                    newLv = "";
                if (装备头 == "") {
				cm.gainItem(所需物品ID, -1);
                    //没有鉴定过的装备 
					cm.playSound(false, "Romio/discovery");
					item.setOwner("0次混沌强化");
					cm.playerMessage(6,"[时装强化] : 装备激活成功！");
					Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, true);
					Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
					cm.dispose();
					return;
					
                } else {
					cm.gainItem(所需物品ID, -1);
                    lv = 装备头.substring(0, 装备头.length() - 5);
					//cm.消息(1,lv);
					if (lv == "NaN" ){
						lv = "0"
					}
					var cc = parseInt(lv)+1
						item.setOwner(cc + "次混沌强化");
						for (var i = 0; i < 8; i++) {
						if (取随机数啊(1,5) >= 4 ){
							var 老 = item['get' + 数组1[i]]();
							if (i==4 || i==5) {
								var 新 = 老 + 取随机数啊(-6,10);
								//cm.消息(2,"[属性变动1] : "+数组2[i]+" "+老+" --> "+ 新);
								} else {
							    var 新 = 老 + 取随机数啊(-5,5);
							    }
							if (新 <= 0 ){
							item['set' + 数组1[i]](0);
							//cm.消息(2,"[时装强化] : "+数组2[i]+" "+老+" ==》 "+ "0");
							} else {
							//cm.消息(2,"[属性变动] : "+数组2[i]+" "+老+" --> "+ 新);
							cm.playerMessage(2,"[属性变动] : "+数组2[i]+" "+老+" --> "+ 新);
							item['set' + 数组1[i]](新);

							}
						}
                    }
                }
				cm.playSound(false, "Romio/discovery"); 
				//cm.playWZSound("Game/EnchantSuccess");
				//cm.getClient().getSession().write(Packages.tools.MaplePacketCreator.playSound("Romio/discovery"))
				
				Packages.handling.world.World.Broadcast.broadcastSmega(Packages.tools.MaplePacketCreator.itemMegaphone("[时装强化] : 玩家 "+cm.getPlayer().getName() +" 成功第 "+cc+" 次混沌强化，大家恭喜他/她吧!~",true,cm.getClient().getChannel(),item).getBytes());
				
				
				
				//Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.getGachaponMega("[时装强化]"," : 玩家 "+cm.getPlayer().getName() +" 成功第 "+cc+" 次混沌强化，大家恭喜他/她吧!",item,0, cm.getClient().getChannel()).getBytes());
				
				
				//cm.gainGachaponItem(1142080,1,"现金商城22",100);
				
				
				
				//Packages.handling.world.World.Broadcast.broadcastSmega(Packages.tools.MaplePacketCreator.serverNotice(11, cm.getClient().getChannel(),"张三 : 你好啊啊",true).getBytes());
				
				
                Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, true);
                Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
                
                //cm.sendOk("恭喜,鉴定成功 , 快看看你的包袱吧 ！");
                //cm.worldMessage("[装备鉴定]]：恭喜[" + cm.getChar().getName() + "]成功使用了装备鉴定功能,获得[" + newLv + "]级道具 ！");
                cm.dispose();
				return;
} 
        


function 取随机数啊(a, b) {
    if (!(typeof (a) === "number" && typeof (b) === "number")) {
        return 0;
    }
    if (b < a) {
        b = a + 1;
    }
    if (a == b) {
        return a;
    }
    return parseInt(Math.random() * (b - a + 1) + a);
}

