var 礼包物品 = "#v1302000#";
var x1 = "1302000,+1";// 物品ID,数量
var x2;
var x3;
var x4;
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
var 星星2 = "#fEffect/CharacterEff/1114000/2/0#";
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
			 text +=  ""+星星2+星星2+星星2+星星2+星星2+星星2+星星2+星星2+星星2+星星2+星星2+星星2+星星2+星星2+星星2+星星2+星星2+星星2+星星2+"\r\n"
			 text +="\t\t\t  #e欢迎来到#b悠悠冒险岛v079 #k!#n\r\n\r\n"
			 text +=邪恶小兔 +"服务器时间：#r"+year+"#k 年 #r"+month+"#k 月 #r"+day+"#k 日 #r"+hour+"#k 点 #r"+minute+"#k 分 星期 #r"+星期[ weekday ]+"#k\r\n" 
			 text +=邪恶小兔 +"今日开放副本：#e#b"+ 副本[ weekday ]+"  "
			 text +=邪恶小兔 +"#k#n当前在线时间：#b#e"+cm.getGamePoints()+"#k#n 分钟"+"\r\n"
			 
			 text +=邪恶小兔 +"你的个人游戏ID为：#r"+(20000+cm.getPlayer().getId())+"#k  "
			 text +=邪恶小兔 +"推广玩家数量为：#r#e3\r\n#n"
			//text += "   "+烟花+""+烟花+""+烟花+"#k\r\n";
            //text += ""+花草+"             "+花草1+"\r\n"
		  	
			//text += "#d杀怪总数：#b"+cm.getPlayer().getSG()+"\r\n"	
		   //text += ""+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+"\r\n"
		  text += ""+小烟花+小烟花+小烟花+小烟花+小烟花+小烟花+小烟花+小烟花+小烟花+小烟花+小烟花+小烟花+小烟花+小烟花+小烟花+小烟花+小烟花+小烟花+"\r\n"
		//var tex2 = ""+cm.getHyPay(1)+"";
            //text += "#L910000000##b" + 邪恶小兔 + "#r回自由市场#l#l#L9310034##b" + 邪恶小兔 + "#r#rBOSS传送#l\r\n\r\n"//3
			//text += "#L14##b" + 小粉红爱心 + "万能传送#l#l#L1##b" + 小粉红爱心 + "每日签到#l#l#L7018##b" + 小粉红爱心 + "杂货商店#l#L23##b" + 小粉红爱心 + "发型脸型#l#l\r\n"//3
            //text += "#L7009##b" + 小粉红爱心 + "装备制作#l#l#L6##b" + 小粉红爱心 + "点卷商城#l#L15##b" + 小粉红爱心 + "快速转职#l#L9##b" + 小粉红爱心 + "每日跑环#l\r\n#L7005##b" + 小粉红爱心 + "道具删除#l#L7001##b" + 小粉红爱心 + "特色副本#l#L9000036##b" + 小粉红爱心 + "兑换系统#l#L20##b" + 小粉红爱心 + "杀怪奖励#l\r\n"//3
			//text += "#L1247##b" + 小粉红爱心 + "家族任务#l#L7004##b"+ 小粉红爱心 + "购买双倍#l#l#L1000##b" + 小粉红爱心 + "VIP系统#l #L8888##b" + 小粉红爱心 + "装备强化#l#l\r\n"//3
//text += "#L19##b" + 小粉红爱心 + "金榜题名#l#L9000041##b" + 小粉红爱心 + "点券兑换#l#l#L7003##b" + 小粉红爱心 + "血衣合成#l#l#L8787##b" + 小粉红爱心 + "皇家骑宠#l#l\r\n"//l#L17##b" + 蓝色角点 + "强化次数#l#l\r\n\r\n"
//text += "#l#L7006##b" + 小粉红爱心 + "技能全满#l#l#L9981##b" + 小粉红爱心 + "金币赌博#l#l#L9100201#" + 小粉红爱心 + "点券赌场#l#L19910808#" + 小粉红爱心 + "鉴定系统#l\r\n\r\n\r\n"
 //text += "#L1243##b" + 红色箭头 + "澳门赌博#l#l#L1249##b" + 红色箭头 + "中介抽奖#l#l#L1245##b" + 红色箭头 + "充值抽奖#l\r\n\r\n"
 //text += "#L1246##b" + 红色箭头 + "砸卷强化#l#l#L1252##b" + 红色箭头 + "中介兑换#l#l#L1253##b" + 红色箭头 + "超级强化#l\r\n\r\n"

 text +="#L1##r#e" + 蓝色箭头 + "新服刚开冲级活动(Boss首杀奖励稀有道具)"+"#l\r\n"
 text +="#L2##d" + 蓝色箭头 + "悠悠岛限时活动 (现金/稀有道具等你来拿)"+"#l\r\n\r\n#n"
 text += "#L11##b" + 小粉红爱心 + "临时功能#l#l#L12##b" + 小粉红爱心 + "地图爆率#l#l#L13##b" + 小粉红爱心 + "删除道具#l#L14##b" + 小粉红爱心 + "#e充值赞助#l#l\r\n#n"
 text += "#L21##b" + 小粉红爱心 + "在线奖励#l#l#L22##b" + 小粉红爱心 + "师徒系统#l#l#L23##b" + 小粉红爱心 + "待定待定#l#L24##b" + 小粉红爱心 + "#e战力评分#l#l\r\n#n"
 
 
 text += "\r\n"+小烟花+小烟花+小烟花+小烟花+小烟花+小烟花+小烟花+小烟花+小烟花+小烟花+小烟花+小烟花+小烟花+小烟花+小烟花+小烟花+小烟花+小烟花


		    cm.sendSimple(text);
			} else if (selection == 1) {
            cm.openNpc(9900004,999);

		   } else if (selection == 2) {
		    cm.dispose();
		   } else if (selection == 11) {
            cm.openNpc(9900004,999);		
		   } else if (selection == 12) {
		    cm.openNpc(9900004,30);			
		   } else if (selection == 13) {
            cm.openNpc(9900004,32);		
		   } else if (selection == 14) {
		    cm.dispose();			
		   } else if (selection == 21) {
            cm.openNpc(9900004,2);
     	}
	}
}


