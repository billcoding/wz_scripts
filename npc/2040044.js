/* ==================
 �ű�����:  NPC	    
 �ű����ߣ�����ؼ     
 ��ϵ��ʽ��840645183  
 =====================
 */


importPackage(java.awt);
//���������� �������ˢ����
var PQItems = new Array(4001022, 4001023);
var status;

var exp = 80000;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else if (status == -1 && cm.isLeader()) {
        var eim = cm.getPlayer().getEventInstance();
        var leaderPreamble = eim.getProperty("crackLeaderPreamble");
        if (leaderPreamble == null) {
            eim.setProperty("crackLeaderPreamble", "done");
            cm.sendNext("��ӭ���� ���֮�� - (#r�������#k) #bBoss#k�׶�\r\n\r\n�������Ķ�Աһ����#r����ɯ��#k���#b#z4001023##kȻ�󽻸��ҡ���֪������ɯ����ô�ٻ���?���������ĸ�����û��������#r����ɯ��#k�ͻ���֡���");
            cm.dispose();
        } else {
            if (cm.haveItem(4001023) && cm.isLeader()) {
                var eim = cm.getPlayer().getEventInstance();
                if (eim == null) {
                    cm.removeAll(PQItems[i]);
                } else if (cm.isLeader()) {
                    eim.disbandParty();
                    cm.getEventManager("LudiPQ").setProperty("LPQOpen", "true");
                } else {
                    eim.leftParty(cm.getPlayer());
                }
				cm.worldMessage(6,"��ң�["+cm.getName()+"]�������Ķ�������������Ӹ�����");
				cm.givePartyItems(4170005,1);
				if(cm.getPlayer().getmrfbrw() == 2){
							cm.givePartyFb(1);
					}
                cm.warpParty(922011100);
                cm.dispose();


//status = 0;
                //cm.sendSimple("��л���Ǹ��Ҵ�����#r#z4001023##k�������ڿ��Խ������Ķ�Ա���͵�������ͼ,��������֮ǰ�������һ��ѡ����ô�����ҡ��������Ķ�������ʲô��\r\n\r\n#b#L0#��ȡ���� (���ش�ׯ)#l\r\n");
            } else {
                cm.sendNext("��ȷ�����Ҵ�����#r#z4001023##k������һ���Լ��ı���������������#r#z4001023##k�ҿ��Խ������Ķ�Աһ���͵�������ͼ����ô����");
                cm.dispose();
            }
        }
    } else if (status == -1 && !cm.isLeader()) {
        cm.sendNext("��ӭ���� ���֮�� - (#r�������#k) #bBoss#k�׶�\r\n\r\n�������Ķ�Աһ����#r����ɯ��#k���#b#z4001023#k#kȻ�󽻸��ҡ���֪������ɯ����ô�ٻ���?���������ĸ�����û��������#r����ɯ��#k�ͻ���֡���");
        cm.dispose();
         } else if (status == 0 && cm.isLeader()) {
        /*
         var eim = cm.getPlayer().getEventInstance();
         var em = cm.getEventManager("LudiPQ");
         clear(9, eim, cm);
         cm.gainItem(4001023, -1);
         var party = eim.getPlayers();
         cm.givePartyExp(exp, party);
         em.setProperty("entryPossible", "true");
         var endTime = new java.util.Date().getTime();
         var startTime = cm.getPlayer().getEventInstance().getProperty("startTime");
         var startTime2 = cm.getPlayer().getEventInstance().getProperty("s9start");
         
         var get30 = false;
         if (((endTime - startTime) < 600000))
         get30 = true;
         
         var get34 = false;
         if (((endTime - startTime2) < 90000))
         get34 = true;
         
         var giveNx = eim.getProperty("smugglers") != "true";
         eim.dispose();
         */

        //if (selection == 0) {
        //cm.warpParty(922010000, 0);
        //cm.dispose();
        /*
         bem = cm.getEventManager("LudiPQBonus");
         if (bem == null) {
         bem.startInstance(cm.getParty(), cm.getPlayer().getMap());
         cm.dispose();
         } else {
         cm.sendNext("�����ļ�û�п���������ϵ����Ա��");
         cm.dispose();
         }
         */

        //} 
    }
}

 function clear(stage, eim, cm) {
 eim.setProperty("stage" + stage.toString() + "status", "clear");
    cm.showEffect(true, "quest/party/clear");
    cm.playSound(true, "Party1/Clear");
    cm.environmentChange(true, "gate");
 var map = eim.getMapInstance(cm.getPlayer().getMapId());
 //map.broadcastMessage(packetglow);
 // stage 9 does not have a door, might be cause of DC error
 }
 
 function warpToBonus(eim, player, bonusMapId, giveNx) {
 if (giveNx) {
 //player.finishAchievement(28);
 //player.finishAchievement(36);
 }
 
 var bonusMap = cm.getPlayer().getClient().getChannelServer().getMapFactory().getMap(bonusMapId);
 eim.unregisterPlayer(player);
 player.changeMap(bonusMap, bonusMap.getPortal(0));
 }
 