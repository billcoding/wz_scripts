var ������ƷID = 2022355;


var ����1 =['Str', 'Dex', 'Int', 'Luk', 'Hp', 'Mp', 'Watk', 'Matk']
var ����2 =['����', '����', '����', '����', ' HP ', ' Mp ', '����', 'ħ��']

function start() {

            if (cm.�ж���Ʒ(������ƷID,1) == false ) {
             cm.dispose();
             return;				
			} 

            var ii = Packages.server.MapleItemInformationProvider.getInstance();
            var item = cm.getInventory(1).getItem(1);
            //var itemId = item.getItemId();
             if (item == null) {
                
				//cm.��Ϣ(6,"[ʱװǿ��] : װ������һ��û��װ����");
				cm.playerMessage(6,"[ʱװǿ��] : װ������һ��û��װ����");
                cm.dispose();
				return;
            } 

			if (ii.isCash(item.getItemId())== false ) {
                        //cm.sendOk("ֻ������ʱװ��");
						//cm.��Ϣ(1,"ֻ������ʱװ��");
						cm.playerMessage(1,"ֻ������ʱװ��");
                        cm.dispose();
                        return;
                    }  
					if (ȡ�������(1,100) <= 35 ){  //ǿ��ʧ��
						cm.gainItem(������ƷID, -1);
						//cm.��Ϣ(6,"[ʱװǿ��] : ǿ��ʧ�ܣ�");
						cm.playerMessage(6,"[ʱװǿ��] : ǿ��ʧ�ܣ�");
						cm.dispose();
						return;
						}
                item = cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy();
                var װ��ͷ = item.getOwner();
                var lv = "",
                    newLv = "";
                if (װ��ͷ == "") {
				cm.gainItem(������ƷID, -1);
                    //û�м�������װ�� 
					cm.playSound(false, "Romio/discovery");
					item.setOwner("0�λ���ǿ��");
					cm.playerMessage(6,"[ʱװǿ��] : װ������ɹ���");
					Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, true);
					Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
					cm.dispose();
					return;
					
                } else {
					cm.gainItem(������ƷID, -1);
                    lv = װ��ͷ.substring(0, װ��ͷ.length() - 5);
					//cm.��Ϣ(1,lv);
					if (lv == "NaN" ){
						lv = "0"
					}
					var cc = parseInt(lv)+1
						item.setOwner(cc + "�λ���ǿ��");
						for (var i = 0; i < 8; i++) {
						if (ȡ�������(1,5) >= 4 ){
							var �� = item['get' + ����1[i]]();
							if (i==4 || i==5) {
								var �� = �� + ȡ�������(-6,10);
								//cm.��Ϣ(2,"[���Ա䶯1] : "+����2[i]+" "+��+" --> "+ ��);
								} else {
							    var �� = �� + ȡ�������(-5,5);
							    }
							if (�� <= 0 ){
							item['set' + ����1[i]](0);
							//cm.��Ϣ(2,"[ʱװǿ��] : "+����2[i]+" "+��+" ==�� "+ "0");
							} else {
							//cm.��Ϣ(2,"[���Ա䶯] : "+����2[i]+" "+��+" --> "+ ��);
							cm.playerMessage(2,"[���Ա䶯] : "+����2[i]+" "+��+" --> "+ ��);
							item['set' + ����1[i]](��);

							}
						}
                    }
                }
				cm.playSound(false, "Romio/discovery"); 
				//cm.playWZSound("Game/EnchantSuccess");
				//cm.getClient().getSession().write(Packages.tools.MaplePacketCreator.playSound("Romio/discovery"))
				
				Packages.handling.world.World.Broadcast.broadcastSmega(Packages.tools.MaplePacketCreator.itemMegaphone("[ʱװǿ��] : ��� "+cm.getPlayer().getName() +" �ɹ��� "+cc+" �λ���ǿ������ҹ�ϲ��/����!~",true,cm.getClient().getChannel(),item).getBytes());
				
				
				
				//Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.getGachaponMega("[ʱװǿ��]"," : ��� "+cm.getPlayer().getName() +" �ɹ��� "+cc+" �λ���ǿ������ҹ�ϲ��/����!",item,0, cm.getClient().getChannel()).getBytes());
				
				
				//cm.gainGachaponItem(1142080,1,"�ֽ��̳�22",100);
				
				
				
				//Packages.handling.world.World.Broadcast.broadcastSmega(Packages.tools.MaplePacketCreator.serverNotice(11, cm.getClient().getChannel(),"���� : ��ð���",true).getBytes());
				
				
                Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, true);
                Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
                
                //cm.sendOk("��ϲ,�����ɹ� , �쿴����İ����� ��");
                //cm.worldMessage("[װ������]]����ϲ[" + cm.getChar().getName() + "]�ɹ�ʹ����װ����������,���[" + newLv + "]������ ��");
                cm.dispose();
				return;
} 
        


function ȡ�������(a, b) {
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

