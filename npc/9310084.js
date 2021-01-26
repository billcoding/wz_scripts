var 星星 = "#fEffect/CharacterEff/1114000/2/0#";
var 爱心 = "#fEffect/CharacterEff/1022223/4/0#";
var 红色箭头 = "#fUI/UIWindow/Quest/icon6/7#";
var 正方形 = "#fUI/UIWindow/Quest/icon3/6#";
var 蓝色箭头 = "#fUI/UIWindow/Quest/icon2/7#";
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
            text += ""+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+"\r\n"
			text += "\t\t\t  #e欢迎来到#b悠悠冒险岛v079 #k!#n\r\n#r结婚说明如下：\r\n结婚要求：必须是2个人,都要有结婚钥匙.\r\n结婚对象：必须是一男一女.男方当队长.\r\n结婚奖励：结婚经验加成30%和结婚戒指一枚\r\n#d结婚之后双方共同做组队任务，可每人获得#v1112495# x1 \r\n\r\n#r"
            text += "结婚流程：\r\n1.双方先购买恋人戒指.\r\n2.购买结婚钥匙.双方都要购买!\r\n3.组队进入地图.俩人身上要有100W买结婚衣服合计200万.\r\n4.点击月老结婚成功.\r\n5.在#d 爱琴丽亚 #r领取 #d老公老婆戒指.#r\r\n\r\n"
            text += "#L1##e#d" + 蓝色箭头 + "我要跟情侣进入结婚地图#l\r\n\r\n#L2##d" + 蓝色箭头 + "购买结婚钥匙 - 需要点卷 520 点卷/个.#l\r\n\r\n\r\n"//3
            //text += "#L3##d" + 蓝色箭头 + "玩具组队副本#l#L4##d" + 蓝色箭头 + "天空组队副本#l\r\n\r\n"//3
            //text += "#L5##d" + 蓝色箭头 + "毒物组队副本#l#L6##d" + 蓝色箭头 + "海盗组队副本#l\r\n\r\n"//3
            //text += "#L7##d" + 蓝色箭头 + "罗密欧与朱丽叶组队副本#l\r\n\r\n"//3
            //text += "#L9##d" + 蓝色箭头 + "英语学院副本#l\r\n\r\n"//3
            //text += "#L10##d" + 蓝色箭头 + "怪物嘉年华(组队对抗副本.最低2V2)#l\r\n\r\n"//3
            //text += "#L8##d" + 蓝色箭头 + "遗址公会对抗战(家族副本)#l\r\n\r\n"//3
            //text += ""+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+"\r\n"
            //text += "#L11##dLv120.千年树精王遗迹Ⅱ#l\r\n\r\n"//3
            //text += "#L12##dLv130.人偶师BOSS挑战#l\r\n\r\n"//3
            //text += "" + 蓝色箭头 + "#L13##rLv120级以上.绯红副本挑战#l\r\n\r\n"//3
            //text += "" + 蓝色箭头 + "#L14##rLv140级以上.御姐副本挑战#l\r\n\r\n"//3
            text += ""+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星
            cm.sendSimple(text);
        } else if (selection == 1) { //月妙组队副本		//cm.warp(700000000 ,0);
            if (!cm.haveItem(4031409,1)) {  
            cm.sendOk("进入结婚地图需要#v4031409##z4031409#,请先购买再说！");
                cm.dispose();
              }else{
			cm.warp(700000000,0);  
				cm.gainItem(4031409, -1);//
				cm.dispose();
                return;
	      } 
        } else if (selection == 2) {  //废弃组队副本
                    if (!cm.canHold(4031409, 1)) {
            cm.sendOk("背包满了，请清理一下！！");
                cm.dispose();
			}else if (cm.haveItem(4031409,1)) {  
            cm.sendOk("你已经有了#v4031409##z4031409#,不要重复购买！");
                cm.dispose();
			}else if (cm.getPlayer().getCSPoints(1) >= 9999) {
				cm.gainNX(-520);
				cm.gainItem(4031409, 1);//
			cm.喇叭(2, "恭喜[" + cm.getPlayer().getName() + "]成功购买结婚钥匙一个，请和你的伴侣一起进入结婚地图，准备结婚吧！！");
            cm.sendOk("购买成功！");
            cm.dispose();
			}else{
            cm.sendOk("点卷不足，无法购买!");
            cm.dispose();
			}
		}	
    }
}


