/*
 *
 *  �˽ű������������������
 * ������ҵ�ű����Ⱥ:1049548
 *
 */

var aaa = "#fUI/UIWindow.img/Quest/icon9/0#";
var zzz = "#fUI/UIWindow.img/Quest/icon8/0#";
var sss = "#fUI/UIWindow.img/QuestIcon/3/0#";

//------------------------------------------------------------------------

var chosenMap = -1;
var monsters = 0;
var towns = 0;
var bosses = 0;
var fuben = 0;

//------------------------------------------------------------------------

var bossmaps = Array(
										Array(100000005,100000,"Ģ����"),													        
										Array(105070002,100000,"��ʬĢ����"), 
										Array(105090900,100000,"���������Ժ"),     
										Array(800010100,1000000,"��Ģ����"), 
										Array(240020402,100000,"�������Ϣ��"), 
										Array(240020101,100000,"����Ҷ�ɭ��"),  
										Array(220080000,100000,"ʱ�����ı�Դ"),  
										Array(230040420,100000,"Ƥ��ū˹��Ѩ"), 
										Array(702070400,100000,"�ؾ����߲�"), 
										Array(551030100,100000,"��ɭ�������"),
										Array(541020700,100000,"�����������ż�"),
										Array(211042300,100000,"�������"), 
										Array(240050400,100000,"����֮Ѩ���"), 
										Array(270050000,100000,"��Ļƻ�")														
		);

//------------------------------------------------------------------------

var monstermaps = Array(
                                        Array(104040000,0,"����ѵ����------------01��-30��"), 
										Array(550000100,0,"��Ţ�ĺӰ���Χ--------30��-50��"), 
										Array(220010500,5000,"¶̨����--------------40��-70��"), 
										Array(250020000,5000,"����������------------50��-60��"), 
										Array(105040306,10000,"����֮��--------------60��-80��"), 
										Array(541020000,20000,"��³�����------------70��-90��"), 
										Array(240010700,20000,"���֮��--------------090��-110��"), 
										Array(240020100,20000,"��������ս��----------100��-120��"), 
										Array(240030101,20000,"��������--------------110��-130��"), 
										Array(541020500,50000,"��³������------------120��-140��"), 
										Array(240040511,50000,"����������֮��Ѩ------130��-150��"), 
										Array(270030500,50000,"��ȴ֮·5-------------140��-160��"),  
										Array(230010400,50000,"������·"), 
										Array(211041400,50000,"����֮�֢�"), 
										Array(222010000,50000,"��ɽ���"),
										Array(220070301,50000,"ʱ��ֹ֮ͣ��"), 
										Array(220070201,50000,"��ʧ��ʱ��"), 
										Array(220050300,50000,"ʱ��ͨ��"), 
										Array(251010000,50000,"ʮ��ҩ�ݵ�"), 
										Array(200040000,50000,"�Ʋʹ�԰��"), 
										Array(200010301,50000,"�ڰ�ͥԺ��"), 
										Array(240040500,50000,"��֮��Ѩ���"), 
										Array(240040000,50000,"����Ͽ��"), 
										Array(600020300,50000,"���붴Ѩ"),
                                        Array(541020000,50000,"��³ׯ԰"), 
										Array(800020130,50000,"��������")
		); 

//------------------------------------------------------------------------

var townmaps = Array(

										Array(104000000,0,"�����"), 
										Array(100000000,0,"���ִ�"), 
										Array(101000000,0,"ħ������"), 
										Array(102000000,0,"��ʿ����"), 
										Array(103000000,0,"��������"), 
                                        Array(140000000,0,"���"),
                                        Array(106020000,0,"Ģ����"),
										Array(120000000,0,"ŵ����˹��"),
										Array(741000208,0,"���㳡"),
										Array(105040300,0,"����֮��"), 
										Array(200000000,0,"���֮��"),
										Array(211000000,0,"����ѩ��"), 
										Array(230000000,0,"ˮ������"),  
										Array(222000000,0,"ͯ����"), 
										Array(220000000,0,"��߳�"),
										Array(701000000,0,"��������"),
										Array(250000000,0,"����"), 
										Array(702000000,0,"������"), 
										Array(500000000,0,"̩��"),
										Array(260000000,0,"���ﰲ��"), 
										Array(600000000,0,"��Ҷ��"), 
										Array(240000000,0,"��ľ��"), 
										Array(261000000,0,"�������"), 
										Array(221000000,0,"�����������"), 
										Array(251000000,0,"�ٲ���"),
										Array(701000200,0,"�Ϻ�ԥ԰"),
										Array(130000000,0,"ʥ��"),  
										Array(801000000,0,"�Ѻʹ�"), 
										Array(540010000,0,"�¼��»���"),
										Array(541000000,0,"�¼�����ͷ"),
										Array(300000000,0,"����ɭ��"), 
										Array(270000100,0,"ʱ�����"), 
										Array(702100000,0,"�ؾ���"), 
										Array(970000000,0,"��������"), 
										Array(800000000,0,"�Ŵ�����") 
										
		);

//---------//Array(700000000,0,"����ͼ") ---------------------------------------------------------------

var fubenmaps = Array(
		Array(800020400,0,"����PK��ͼ"),
		Array(193000000,0,"���ɵ�ͼ")						
		);

//------------------------------------------------------------------------

	function start() {
		status = -1;
		action(1, 0, 0);
		}
	function action(mode, type, selection) {
	if (mode == -1) {
		cm.sendOk("#b�õ�,�´��ټ�.");
		cm.dispose();
		} else {
	if (status >= 0 && mode == 0) {
		cm.sendOk("#b�õ�,�´��ټ�.");
		cm.dispose();
		return;
		}
	if (mode == 1) {
		status++;
		} else {
		status--;
		}

//------------------------------------------------------------------------

	if (status == 0) {

   	    var add = "#e#r�ҿ��԰����͵�����ȥ�ĵط���\r\n\r\n#b";

	//	add += "ð�յ������ͼ�Ҷ�����Ϊ���͵�,";

	//	add += "Ϊ�������,����������������ͼ,��Ӹ���,BOSS��ͼֱ�Ӵ���,";

	//	add += "�������ʲô���õĵ�ͼ,������ϵ����Ա���,��л��Ա�����֧��.#b\r\n\r\n";

		add += "#L0#������#l ";

		add += "   #L1#��������#l";

	//	add += "       #k#L3#BOSS״̬#l\r\n\r\n\r\n ";

	//	add += " #r#L6#��Ӹ���#l";

	  	add += "    #L2#BOSS����#l ";
 
		cm.sendSimple (add);    

//------------------------------------------------------------------------
				
	} else if (status == 1) {

	if (selection == 0){
		var selStr = "#e#rѡ�����Ŀ�ĵذɣ�#b";
		for (var i = 0; i < townmaps.length; i++) {
		selStr += "\r\n#L" + i + "#" + townmaps[i][2] + "";
		}
		cm.sendSimple(selStr);
		towns = 1;
		}

	if (selection == 1) {
		var selStr = "#e#rѡ�����Ŀ�ĵذɣ�#b";
		for (var i = 0; i < monstermaps.length; i++) {
		selStr += "\r\n#L" + i + "#" + monstermaps[i][2] + "";
		}
		cm.sendSimple(selStr);
		monsters = 1;
		}

	if (selection == 2) {
		var selStr = "#e#rѡ�����Ŀ�ĵذɣ����ͷ���10W��#b";
		for (var i = 0; i < bossmaps.length; i++) {
		selStr += "\r\n#L" + i + "#" + bossmaps[i][2] + "";
		}
		cm.sendSimple(selStr);
		bosses = 1;
		}

	if (selection == 3) {
		var map = net.sf.odinms.net.channel.ChannelServer.getInstance(1).getMapFactory().getMap(280030000);
		var zha1 = map.getCharacters().toArray().length;
		var map = net.sf.odinms.net.channel.ChannelServer.getInstance(2).getMapFactory().getMap(280030000);
		var zha2 = map.getCharacters().toArray().length;
		var map = net.sf.odinms.net.channel.ChannelServer.getInstance(3).getMapFactory().getMap(280030000);
		var zha3 = map.getCharacters().toArray().length;
		var map = net.sf.odinms.net.channel.ChannelServer.getInstance(4).getMapFactory().getMap(280030000);
		var zha4 = map.getCharacters().toArray().length;

		var map = net.sf.odinms.net.channel.ChannelServer.getInstance(1).getMapFactory().getMap(240060200);
		var hei1 = map.getCharacters().toArray().length;
		var map = net.sf.odinms.net.channel.ChannelServer.getInstance(2).getMapFactory().getMap(240060200);
		var hei2 = map.getCharacters().toArray().length;
		var map = net.sf.odinms.net.channel.ChannelServer.getInstance(3).getMapFactory().getMap(240060200);
		var hei3 = map.getCharacters().toArray().length;
		var map = net.sf.odinms.net.channel.ChannelServer.getInstance(4).getMapFactory().getMap(240060200);
		var hei4 = map.getCharacters().toArray().length

		var map = net.sf.odinms.net.channel.ChannelServer.getInstance(1).getMapFactory().getMap(270050100);
		var pb1 = map.getCharacters().toArray().length;
		var map = net.sf.odinms.net.channel.ChannelServer.getInstance(2).getMapFactory().getMap(270050100);
		var pb2 = map.getCharacters().toArray().length;
		var map = net.sf.odinms.net.channel.ChannelServer.getInstance(3).getMapFactory().getMap(270050100);
		var pb3 = map.getCharacters().toArray().length;
		var map = net.sf.odinms.net.channel.ChannelServer.getInstance(4).getMapFactory().getMap(270050100);
		var pb4 = map.getCharacters().toArray().length

		var map = net.sf.odinms.net.channel.ChannelServer.getInstance(1).getMapFactory().getMap(220080001);
		var nao1 = map.getCharacters().toArray().length;
		var map = net.sf.odinms.net.channel.ChannelServer.getInstance(2).getMapFactory().getMap(220080001);
		var nao2 = map.getCharacters().toArray().length;
		var map = net.sf.odinms.net.channel.ChannelServer.getInstance(3).getMapFactory().getMap(220080001);
		var nao3 = map.getCharacters().toArray().length;
		var map = net.sf.odinms.net.channel.ChannelServer.getInstance(4).getMapFactory().getMap(220080001);
		var nao4 = map.getCharacters().toArray().length

   	    var add = "#e#r������ʾΪ���ߵ�BOSSս��#b\r\n";

		add += ""+aaa+"[#rƵ��һ#b]\r\n";

		add += ""+zzz+"[#d����#b]��#r"+zha1+"#b��  [#d����#b]��#r"+hei1+"#b��  [#dPB#b]��#r"+pb1+"#b��  [#d����#b]��#r"+nao1+"#b��\r\n\r\n";

		add += ""+aaa+"[#rƵ����#b]\r\n";

		add += ""+zzz+"[#d����#b]��#r"+zha2+"#b��  [#d����#b]��#r"+hei2+"#b��  [#dPB#b]��#r"+pb2+"#b��  [#d����#b]��#r"+nao2+"#b��\r\n\r\n";

		add += ""+aaa+"[#rƵ����#b]\r\n";

		add += ""+zzz+"[#d����#b]��#r"+zha3+"#b��  [#d����#b]��#r"+hei3+"#b��  [#dPB#b]��#r"+pb3+"#b��  [#d����#b]��#r"+nao3+"#b��\r\n\r\n";

		add += ""+aaa+"[#rƵ����#b]\r\n";

		add += ""+zzz+"[#d����#b]��#r"+zha4+"#b��  [#d����#b]��#r"+hei4+"#b��  [#dPB#b]��#r"+pb4+"#b��  [#d����#b]��#r"+nao4+"#b��\r\n\r\n";
 
		cm.sendOk (add); 

		cm.dispose();
                   }

	if (selection == 6) {
cm.openNpc(9900006,1);
                   }
	if (selection == 5) {
cm.warp(700000000,0);
cm.dispose();

                   }
//------------------------------------------------------------------------

	} else if (status == 2) {

	if (towns == 1) {
		cm.sendYesNo("#e#r��ȷ��Ҫȥ " + townmaps[selection][2] + "?");
		chosenMap = selection;
		towns = 2;

	} else if (monsters == 1) {
		cm.sendYesNo("#e#r��ȷ��Ҫȥ " + monstermaps[selection][2] + "?");
		chosenMap = selection;
		monsters = 2;

	} else if (bosses == 1) {
		cm.sendYesNo("#e#r��ȷ��Ҫȥ " + bossmaps[selection][2] + "?");
		chosenMap = selection;
		bosses = 2;

	} else if (fuben == 1) {
		cm.sendYesNo("#e#r��ȷ��Ҫȥ " + fubenmaps[selection][2] + "?");
		chosenMap = selection;
		fuben = 2;

		}

//----------------------------------------------------------------------

	} else if (status == 3) {

	if (towns == 2) {
		if(cm.getMeso()>=townmaps[chosenMap][1]){
		cm.warp(townmaps[chosenMap][0], 0);
		cm.gainMeso(-townmaps[chosenMap][1]);
		}else{
		cm.sendOk("#e#r��û���㹻�Ľ��Ŷ!");
		}
		cm.dispose();

	} else if (monsters == 2) {
		if(cm.getMeso()>=monstermaps[chosenMap][1]){
		cm.warp(monstermaps[chosenMap][0], 0);
		cm.gainMeso(-monstermaps[chosenMap][1]);
		}else{
		cm.sendOk("#e#r��û���㹻�Ľ��Ŷ!");
		}
		cm.dispose();

	} else if (bosses == 2) {
		if(cm.getMeso()>=bossmaps[chosenMap][1]){
		cm.warp(bossmaps[chosenMap][0], 0);
		cm.gainMeso(-bossmaps[chosenMap][1]);
		}else{
		cm.sendOk("#e#r��û���㹻�Ľ��Ŷ!");
		}
		cm.dispose();

	} else if (fuben == 2) {
		if(cm.getMeso()>=fubenmaps[chosenMap][1]){
		cm.warp(fubenmaps[chosenMap][0], 0);
		cm.gainMeso(-fubenmaps[chosenMap][1]);
		}else{
		cm.sendOk("#e#r��û���㹻�Ľ��Ŷ!");
		}
		cm.dispose();

                }

//------------------------------------------------------------------------

		}
		}
		}

