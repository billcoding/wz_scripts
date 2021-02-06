var 正在进行中 = "#fUI/UIWindow/Quest/Tab/enabled/1#";
var 完成 = "#fUI/UIWindow/Quest/Tab/enabled/2#";
var 正在进行中蓝 = "#fUI/UIWindow/MonsterCarnival/icon1#";
var 完成红 = "#fUI/UIWindow/MonsterCarnival/icon0#";
function start() {
    status = -1;

    action(1, 0, 0);
}
function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    }
    else {
        if (status >= 0 && mode == 0) {

            cm.sendOk("感谢你的光临！");
            cm.dispose();
            return;
        }
        if (mode == 1) {
            status++;
        }
        else {
            status--;
        }
        if (status == 0) {
            var tex2 = "";
            var text = "";
            for (i = 0; i < 10; i++) {
                text += "";
            }
			//text += "#d角色名称：#b" + cm.getName() + "#k#n\t  #b当前在线时间：#r" + cm.getGamePoints() + "分钟#k#n\r\n"
		//	text += "\t\t\t\r\n\r\n 在线奖励依次为:\r\n特殊药水10个     超级药水10个     喇叭3个  枫叶100个\r\n抵用卷=3000点    抵用卷=3300点    抵用卷=3700点.\r\n\r\n"
			//text += "#L1##r领取永久雇佣商人！#v5030001#x1#l\r\n\r\n\r\n\r\n"//3
			//cm.gainItemPeriod(2000005,3,1);
            if (cm.getBossLog("签到") == 0 ) {//获取玩家签到状态
                cm.setBossLog('签到');//设置签到次数
                cm.getPlayer().gainqiandao(1);
                //cm.sendOk("恭喜签到成功！");
				//cm.gainDY(300)
                cm.消息(2, "[每日签到] : " + cm.getPlayer().getName() + "，今日已成功签到！当前连续签到天数为：" + cm.getPlayer().getqiandao() + "天.");
                //cm.dispose();
            //} else {
/*                 cm.sendOk("您今日已签到过了！");
                cm.dispose();			 */
			}
			
			
			
			if(cm.getPlayer().getGamePoints() >= 60 && cm.getPlayer().getGamePointsPD() == 0){
					text += "#L2##r"+完成红+"在线时间超过60分钟！"+完成+"#v5200002#(金币)x5w#l\r\n\r\n\r\n"//3
				} else if(cm.getPlayer().getGamePoints() >= 60 && cm.getPlayer().getGamePointsPD() > 0){
					text += ""+完成红+"#r在线时间超过60分钟！#l"+完成+"\r\n\r\n"//3
				} else {
					text += ""+正在进行中蓝+"#r在线时间超过60分钟！#l"+正在进行中+"#v5200002#(金币)x5w\r\n\r\n"//3
			}
			
			if(cm.getPlayer().getGamePoints() >= 120 && cm.getPlayer().getGamePointsPD() == 1){
					text += "#L3##r"+完成红+"在线时间超过120分钟！"+完成+"#v2000005#x50#l\r\n\r\n\r\n"//3
				} else if(cm.getPlayer().getGamePoints() >= 120 && cm.getPlayer().getGamePointsPD() > 1){
					text += ""+完成红+"#r在线时间超过120分钟！#l"+完成+"\r\n\r\n"//3
				} else {
					text += ""+正在进行中蓝+"#r在线时间超过120分钟！#l"+正在进行中+"#v2000005#x50\r\n\r\n"//3
			}
			
			if(cm.getPlayer().getGamePoints() >= 180 && cm.getPlayer().getGamePointsPD() == 2){
					text += "#L4##r"+完成红+"在线时间超过180分钟！"+完成+"#v5072000#x3个.#l\r\n\r\n\r\n"//3
				} else if(cm.getPlayer().getGamePoints() >= 180 && cm.getPlayer().getGamePointsPD() > 2){
					text += ""+完成红+"#r在线时间超过180分钟！#l"+完成+"\r\n\r\n"//3
				} else {
					text += ""+正在进行中蓝+"#r在线时间超过180分钟！#l"+正在进行中+"#v5072000#x3\r\n\r\n"//3
			}
			
			if(cm.getPlayer().getGamePoints() >= 240 && cm.getPlayer().getGamePointsPD() == 3){
					text += "#L5##r"+完成红+"在线时间超过240分钟！"+完成+"#v5200001#(抵用卷)x200#l\r\n\r\n\r\n"//3
				} else if(cm.getPlayer().getGamePoints() >= 240 && cm.getPlayer().getGamePointsPD() > 3){
					text += ""+完成红+"#r在线时间超过240分钟！#l"+完成+"\r\n\r\n"//3
				} else {
					text += ""+正在进行中蓝+"#r在线时间超过240分钟！#l"+正在进行中+"#v5200001#(抵用卷)x200\r\n\r\n"//3
			}
			
			if(cm.getPlayer().getGamePoints() >= 300 && cm.getPlayer().getGamePointsPD() == 4){
					text += "#L6##r"+完成红+"在线时间超过300分钟！"+完成+"#v4310019#(纪念币)x1#l\r\n\r\n\r\n"//3
				} else if(cm.getPlayer().getGamePoints() >= 300 && cm.getPlayer().getGamePointsPD() > 4){
					text += ""+完成红+"#r在线时间超过300分钟！#l"+完成+"\r\n\r\n"//3 
				} else {
					text += ""+正在进行中蓝+"#r在线时间超过300分钟！#l"+正在进行中+"#v4310019#(纪念币)x1\r\n\r\n"//3
			}
			
			if(cm.getPlayer().getGamePoints() >= 360 && cm.getPlayer().getGamePointsPD() == 5){
					text += "#L7##r"+完成红+"在线时间超过360分钟！"+完成+"#v5200001#(抵用卷)x200#l\r\n\r\n\r\n"//3
				} else if(cm.getPlayer().getGamePoints() >= 360 && cm.getPlayer().getGamePointsPD() > 5){
					text += ""+完成红+"#r在线时间超过360分钟！#l"+完成+"\r\n\r\n"//3
				} else {
					text += ""+正在进行中蓝+"#r在线时间超过360分钟！#l"+正在进行中+"#v5200001#(抵用卷)x200\r\n\r\n"//3
			}
			
			if(cm.getPlayer().getGamePoints() >= 420 && cm.getPlayer().getGamePointsPD() == 6){
					text += "#L8##r"+完成红+"在线时间超过420分钟！"+完成+"#v5200002#(金币)x40w#l\r\n\r\n\r\n"//3
				} else if(cm.getPlayer().getGamePoints() >= 420 && cm.getPlayer().getGamePointsPD() > 6){
					text += ""+完成红+"#r在线时间超过420分钟！#l"+完成+"\r\n\r\n"//3
				} else {
					text += ""+正在进行中蓝+"#r在线时间超过420分钟！#l"+正在进行中+"#v5200002#(金币)x40w\r\n\r\n"//3
			}
 			if(cm.getPlayer().getGamePoints() >= 600 && cm.getPlayer().getGamePointsPD() == 7){
					text += "#L9##r"+完成红+"在线时间超过600分钟！"+完成+"#v4310019#(纪念币)x2#l\r\n\r\n\r\n"//3
				} else if(cm.getPlayer().getGamePoints() >= 420 && cm.getPlayer().getGamePointsPD() > 7){
					text += ""+完成红+"#r在线时间超过600分钟！#l"+完成+"\r\n\r\n"//3
				} else {
					text += ""+正在进行中蓝+"#r在线时间超过600分钟！#l"+正在进行中+"#v4310019#(纪念币)x2\r\n\r\n"//3
			}           
			if(cm.getPlayer().getGamePoints() >= 720 && cm.getPlayer().getGamePointsPD() == 8){
					text += "#L10##r"+完成红+"在线时间超过720分钟！"+完成+"#v5200002#(点券)x800#l\r\n\r\n\r\n"//3
				} else if(cm.getPlayer().getGamePoints() >= 420 && cm.getPlayer().getGamePointsPD() > 8){
					text += ""+完成红+"#r在线时间超过720分钟！#l"+完成+"\r\n\r\n"//3
				} else {
					text += ""+正在进行中蓝+"#r在线时间超过720分钟！#l"+正在进行中+"#v5200002#(点券)x800\r\n\r\n"//3
			}			
			
			
			
			
			
			
			cm.sendSimple(text);
        } else if (selection == 1) {
			if(cm.haveItem(5030001, 1)){
            cm.sendOk("你已经领取过了。无法重新领取！");
            cm.dispose();
			}else if (cm.haveItem(5030000, 1)){
            cm.sendOk("你已经领取过了。无法重新领取！");
            cm.dispose();
			}else{
			cm.gainItem(5030001, 1);//
			//cm.gainGamePointsPD(1);
           // cm.sendOk("领取奖励成功！");
			cm.worldMessage(6,"玩家：["+cm.getName()+"]领取永久雇佣商人！");
            cm.dispose();
			}
        } else if (selection == 2) {
			cm.给金币(50000);
			cm.gainGamePointsPD(1);
            //cm.sendOk("领取奖励成功！");
			cm.worldMessage(6,"玩家：["+cm.getName()+"]领取了60分钟在线奖励！金币5万.");
            cm.dispose();
			cm.openNpc(9900004,2);
        } else if (selection == 3) {
			//cm.gainItem(2000005, 10);
			cm.gainItemPeriod(2000005,50,1);
			cm.gainGamePointsPD(1);
            //cm.sendOk("领取奖励成功！");
			cm.worldMessage(6,"玩家：["+cm.getName()+"]领取了120分钟在线奖励！超级药水50个.");
            cm.dispose();
			cm.openNpc(9900004,2);
        } else if (selection == 4) {
			cm.gainItem(5072000, 3);
			cm.gainGamePointsPD(1);
            //cm.sendOk("领取奖励成功！");
			cm.worldMessage(6,"玩家：["+cm.getName()+"]领取了180分钟在线奖励！道具喇叭*3个.");
            cm.dispose();
			cm.openNpc(9900004,2);
        } else if (selection == 5) {
			//cm.gainItem(4001126, 100);//枫叶
			cm.gainDY(200);
			cm.gainGamePointsPD(1);
            //cm.sendOk("领取奖励成功！");
			cm.worldMessage(6,"玩家：["+cm.getName()+"]领取了240分钟在线奖励！抵用券200.");
            cm.dispose();
			cm.openNpc(9900004,2);
        } else if (selection == 6) {
			cm.gainItem(4310019, 1);
			cm.gainGamePointsPD(1);
            //cm.sendOk("领取奖励成功！");
			cm.worldMessage(6,"玩家：["+cm.getName()+"]领取了300分钟在线奖励！纪念币x1.");
            cm.dispose();
			cm.openNpc(9900004,2);
        } else if (selection == 7) {
            cm.gainDY(200)
			cm.gainGamePointsPD(1);
            //cm.sendOk("领取奖励成功！");
			cm.worldMessage(6,"玩家：["+cm.getName()+"]领取了360分钟在线奖励！抵用卷200.");
            cm.dispose();
			cm.openNpc(9900004,2);
        } else if (selection == 8) {
            cm.给金币(400000)
			cm.gainGamePointsPD(1);
            //cm.sendOk("领取奖励成功！");
			cm.worldMessage(6,"玩家：["+cm.getName()+"]领取了420分钟在线奖励！金币40万.");
            cm.dispose();
			cm.openNpc(9900004,2);
        } else if (selection == 9) {
            cm.gainItem(4310019, 2);
			cm.gainGamePointsPD(1);
            //cm.sendOk("领取奖励成功！");
			cm.worldMessage(6,"玩家：["+cm.getName()+"]领取了600分钟在线奖励！纪念币x2.");
            cm.dispose();
			cm.openNpc(9900004,2);
        } else if (selection == 10) {
            cm.给点券(800)
			cm.gainGamePointsPD(1);
            //cm.sendOk("领取奖励成功！");
			cm.worldMessage(6,"玩家：["+cm.getName()+"]领取了720分钟在线奖励！点券800.");
            cm.dispose();
			cm.openNpc(9900004,2);
		}
           // cm.openNpc(9900004,2);
    }
}


