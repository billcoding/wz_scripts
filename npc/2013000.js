var status = -1;
var 最小等级 = 50; // 35
var 最高等级 = 255; // 65
var 最少人数 = 3;
var 最多人数 = 6;
var 副本名称 = " - 天空通天塔（女神组队副本）";
var 自强经验 = 55000;
var 时间 = 3;
var bosslog = "女神塔";


var 爱心 = "#fEffect/CharacterEff/1022223/4/0#";
var 礼包物品 = "#v1302000#";
var add = "#fEffect/CharacterEff/1112903/0/0#";//红桃心
var aaa = "#fUI/UIWindow.img/Quest/icon9/0#";//红色右箭头
var zzz = "#fUI/UIWindow.img/Quest/icon8/0#";//蓝色右箭头
var sss = "#fUI/UIWindow.img/QuestIcon/3/0#";//选择道具
var 正方箭头 = "#fUI/Basic/BtHide3/mouseOver/0#";
var 感叹号 = "#fUI/UIWindow/Quest/icon0#";
var 美化new = "#fUI/UIWindow/Quest/icon5/1#";
var 红色箭头 = "#fEffect/CharacterEff/1112908/0/1#";  //彩光3
var ttt1 = "#fEffect/CharacterEff/1062114/1/0#";  //爱心
var 蓝色角点 = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var ca = java.util.Calendar.getInstance();
var year = ca.get(java.util.Calendar.YEAR); //获得年份
var month = ca.get(java.util.Calendar.MONTH) + 1; //获得月份
var day = ca.get(java.util.Calendar.DATE);//获取日
var hour = ca.get(java.util.Calendar.HOUR_OF_DAY); //获得小时
var minute = ca.get(java.util.Calendar.MINUTE);//获得分钟
var second = ca.get(java.util.Calendar.SECOND); //获得秒
var weekday = ca.get(java.util.Calendar.DAY_OF_WEEK)-1;//获得星期
var 正方箭头 = "#fUI/Basic/BtHide3/mouseOver/0#";
var 爱心 = "#fEffect/CharacterEff/1022223/4/0#";

var 粉爱心 = "#fItem/Etc/0427/04270005/Icon8/1#";  //
var 菊花 = "#fUI/PredictHarmony/card/19#";//卡片效果菊花
var 笑 = "#fUI/GuildBBS/GuildBBS/Emoticon/Basic/0#";//笑脸
var 金枫叶 ="#fMap/MapHelper/weather/maple/2#";
var 红枫叶 ="#fMap/MapHelper/weather/maple/1#";
var 巫女 ="#fMap/MapHelper/weather/witch/0#";//巫女
var 气球 ="#fMap/MapHelper/weather/balloon/4#";//气球
var 射箭 ="#fMap/MapHelper/weather/LoveEffect2/4/0#";//射箭
var 玫瑰 ="#fMap/MapHelper/weather/rose/0#";//玫瑰花
var 烟花 ="#fMap/MapHelper/weather/squib/squib1/3#";//烟花

var 大粉红爱心 = "#fItem/Etc/0427/04270001/Icon8/4#";  //
var 小粉红爱心 = "#fItem/Etc/0427/04270001/Icon8/5#";  //
var 小黄星 = "#fItem/Etc/0427/04270001/Icon9/0#";  //
var 大黄星 = "#fItem/Etc/0427/04270001/Icon9/1#";  //
var 小水滴 = "#fItem/Etc/0427/04270001/Icon10/5#";  //
var 大水滴 = "#fItem/Etc/0427/04270001/Icon10/4#";  //
var tz = "#fEffect/CharacterEff/1082565/4/0#";  //粉兔子
var tz1 = "#fEffect/CharacterEff/1082565/0/0#";  //橙兔子
var tz2 = "#fEffect/CharacterEff/1082565/2/0#";  //蓝兔子
var 邪恶小兔 = "#fEffect/CharacterEff/1112960/3/0#";  //邪恶小兔 【小】
var 邪恶小兔2 = "#fEffect/CharacterEff/1112960/3/1#";  //邪恶小兔 【大】
var 花草 ="#fEffect/SetEff/208/effect/walk2/4#";
var 花草1 ="#fEffect/SetEff/208/effect/walk2/3#";
var 小花 ="#fMap/MapHelper/weather/birthday/2#";
var 桃花 ="#fMap/MapHelper/weather/rose/4#";
var 银杏叶 ="#fMap/MapHelper/weather/maple/3#";
var 小烟花 ="#fMap/MapHelper/weather/squib/squib4/1#";
var 星星 ="#fMap/MapHelper/weather/witch/3#";
//var 星星2 = "#fEffect/CharacterEff/1114000/2/0#";
var 副本 = Array("玩具玩具","海盗副本","玩具3","玩具4","玩具5","玩具6","玩具7")
var 星期 = Array("一","二","三","四","五","六","天")
var 蓝色箭头 = "#fUI/UIWindow/Quest/icon2/7#";


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
        if (mode == 1) {
            status++;
        }
        else {
            status--;
			}
		if (cm.getMapId() == 920010000) { //天空地图NPC也会出现
			cm.sendOk("我们必须拯救他 需要20个云的碎片");
			cm.dispose();
			return;
			
        }
        if (status == 0) {
			for (var i = 4001044; i < 4001064; i++) {    //删除一些道具
			cm.removeAll(i); //holy
	}
            var tex2 = "";
            var text = "";
			 text +=  ""+邪恶小兔2+邪恶小兔2+邪恶小兔2+邪恶小兔2+邪恶小兔2+邪恶小兔2+邪恶小兔2+邪恶小兔2+邪恶小兔2+邪恶小兔2+邪恶小兔2+邪恶小兔2+邪恶小兔2+邪恶小兔2+邪恶小兔2+邪恶小兔2+邪恶小兔2+邪恶小兔2+邪恶小兔2+"\r\n"
			 text +=" #e#r"+副本名称+"#k#n\r\n\r\n"
			 //text +=邪恶小兔 +"服务器时间：#r"+year+"#k 年 #r"+month+"#k 月 #r"+day+"#k 日 #r"+hour+"#k 点 #r"+minute+"#k 分 星期 #r"+星期[ weekday ]+"#k\r\n" 
			 //text +=邪恶小兔 +"今日开放副本：#e#b"+ 副本[ weekday ]+"  "
			 //text +=邪恶小兔 +"#k#n当前在线时间：#b#e"+cm.getGamePoints()+"#k#n 分钟"+"\r\n"
			 
			 //text +=邪恶小兔 +"你的个人游戏ID为：#r"+(20000+cm.getPlayer().getId())+"#k  "
			 //text +=邪恶小兔 +"推广玩家数量为：#r#e3\r\n#n"
			 text +="副本说明：\r\n"
			 text +=小黄星+"人数限制：#r"+最少人数+"#k - #r"+最多人数+"#k 队员     "
			 text +=小黄星+"等级限制：#r"+最小等级+"#k - #r"+最高等级+"#k 级\r\n"
			 text +=小黄星+"开放时间：每周 #r"+星期[时间]+"#k        "
			 text +=小黄星+"经验说明：#r等级 x "+自强经验+"#k\r\n"
			 text +=小黄星+"今日挑战次数： #r"+ cm.getBossLog(bosslog) +"#k         "
			 text +=小黄星+"累计挑战次数： #b"+ cm.getBossLog(bosslog) +"#k\r\n\r\n"
			 //text +=小黄星+"#b根据当前等级预计获得通关经验 #r"+ cm.判断等级()* 自强经验/10000+"#b 万#k\r\n"
			text +="  #L1##r#e" + 蓝色箭头 + "开始组队副本"+"#l\r\n"
			text +="  #L2##d" + 蓝色箭头 + "副本征集令：5W金币/次"+"#l\r\n#n"
			text +="  #L3##d#e" + 蓝色箭头 + "通关次数兑换物品"+"#l\r\n#n"
			text +="  #L4##d#e" + 蓝色箭头 + "自强模式和副本经验币介绍"+"#l\r\n#n"
 //text += "\r\n"+小烟花+小烟花+小烟花+小烟花+小烟花+小烟花+小烟花+小烟花+小烟花+小烟花+小烟花+小烟花+小烟花+小烟花+小烟花+小烟花+小烟花+小烟花

		    cm.sendSimple(text);
			} else if (selection == 1) {
				for (var i = 4001044; i < 4001064; i++) {
					cm.removeAll(i); //holy
				}
			if (cm.getParty() == null) { // No Party
				cm.sendSimple("#e你貌似没有达到要求...:\r\n\r\n#r" + 最少人数 + " 玩家成员, 每个人的等级必须在 " + 最小等级 + " 到 等级 " + 最高等级 );
			} else if (!cm.isLeader()) { // Not Party Leader
				cm.sendSimple("如果你想做任务，请 #b队长#k 跟我谈.");
			} else {
				var party = cm.getParty().getMembers();
				var mapId = cm.getMapId();
				var next = true;
				var levelValid = 0;
				var inMap = 0;
				var it = party.iterator();

				while (it.hasNext()) {
				var cPlayer = it.next();
			if ((cPlayer.getLevel() >= 最小等级) && (cPlayer.getLevel() <= 最高等级)) {
				levelValid += 1;
			} else {
				next = false;
			}
			if (cPlayer.getMapid() == mapId) {
				inMap += (cPlayer.getJobId() == 900 ? 6 : 1);
				}
			}
			if (party.size() > 最多人数 || inMap < 最少人数) {
				next = false;
			}
			if (next) {
				var em = cm.getEventManager("OrbisPQ");
			if (em == null) {
				cm.sendSimple("找不到脚本请联络GM#b\r\n");
			} else {
				var prop = em.getProperty("state");
		    if (prop.equals("0") || prop == null) {
				em.startInstance(cm.getParty(), cm.getMap());
				cm.dispose();
				return;
		    } else {
				cm.sendSimple("其他队伍已经在里面做 #r组队任务了#k 请尝试换频道或者等其他队伍完成。");
				cm.dispose();
		    }
			}
			} else {
				cm.sendSimple("你的队伍貌似没有达到要求...:\r\n\r\n#r" + 最少人数 + " 玩家成员, 每个人的等级必须在 " + 最小等级 + " 到 等级 " + 最高等级 );
				cm.dispose();
			}
			}
		    } else if(selection == 2) {
			   if(cm.getMeso() >= 50000){
				cm.给金币(-50000);
			    cm.组队征集喇叭(3,"玩家 "+cm.getPlayer().getName()+" 寻找"+副本名称+"队友,有没有参加的小伙伴！");
			    cm.对话结束();
			   }
		    cm.dispose();
     	}
	}
}
