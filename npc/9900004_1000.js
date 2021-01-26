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
		Array(105040316,10,"��˯ɭ������"),	
										//Array(109010000,10,"ð�յ��-Ѱ�ұ���"), 
										Array(109040001,10,"ð�յ������"), 
										Array(103000900,10,"��������������"),      
										Array(280020000,10,"��ɽ����"), 
										Array(101000100,10,"�̿�����") 											
		);

//------------------------------------------------------------------------

var monstermaps = Array(
		Array(104040000,0,"����ѵ���������������ʺ� 1 ~ 15 ����ҡ�"), 
		Array(103000101,0,"����һ����<��1����> �ʺ� 20 ~ 30 ����ҡ�"), 
		Array(103000105,0,"����һ����<��4����> �ʺ� 50 ~ 70 ����ҡ�"), 
		Array(101030110,0,"��1��Ӫ������������ �ʺ� 40 ~ 60 ����ҡ�"), 
		Array(106000002,0,"Σ�յ�Ͽ�Ȣ򡡡������ʺ� 40 ~ 60 ����ҡ�"), 
		Array(101030103,0,"�ż�����آ󡡡������ʺ� 40 ~ 60 ����ҡ�"), 
		Array(101040001,0,"Ұ������������������ʺ� 20 ~ 35 ����ҡ�"), 
		Array(101040003,0,"��֮�ڹ�֮�ء��������ʺ� 20 ~ 35 ����ҡ�"), 
		Array(101030001,0,"Ұ��������򡡡������ʺ� 20 ~ 35 ����ҡ�"), 
		Array(104010001,0,"��ĺ��� ���������� �ʺ� 10 ~ 20 ����ҡ�"), 
		Array(105070001,0,"���Ϲ㳡 ���������� �ʺ� 20 ~ 40 ����ҡ�"), 
		Array(105090300,0,"��Ѩ�����������������ʺ� 40 ~ 70 ����ҡ�"), 
		Array(105040306,0,"����֮�� ���������� �ʺ� 60 ~ 80 ����ҡ�"), 
		Array(230020000,0,"������·�������������ʺ� 30 ~ 40 ����ҡ�"), 
		Array(230010400,0,"������·�������������ʺ� 40 ~ 50 ����ҡ�"), 
		Array(211041400,0,"����֮�֢������������ʺ� 55 ~ 70 ����ҡ�"), 
		Array(222010000,0,"��ɽ��ڡ������������ʺ� 20 ~ 50 ����ҡ�"), 
		Array(220010500,0,"¶̨�����������������ʺ� 40 ~ 70 ����ҡ�"), 
		Array(251010000,0,"ʮ��ҩ�ݵء����������ʺ� 45 ~ 60 ����ҡ�"), 
		Array(250020000,0,"���������������������ʺ� 50 ~ 60 ����ҡ�"),
		Array(800020130,0,"�������ˡ����������ʺ� 50 ~ 70 ����ҡ�"), 
		Array(200040000,0,"�Ʋʹ�԰�󡡡��������ʺ� 35 ~ 60 ����ҡ�"),
		Array(541010010,0,"���鴬��  �����������ʺ� 60 ~ 90 ����ҡ�"),
		Array(200010301,0,"�ڰ�ͥԺ�񡡡��������ʺ� 70 ~ 90 ����ҡ�"),
		Array(600020300,0,"���붴Ѩ�񡡡��������ʺ� 80 ~ 120 ����ҡ�"), 
		Array(240020100,0,"��������ս�����������ʺ� 85 ~ 120 ����ҡ�"),
		Array(220070201,0,"��ʧ��ʱ�䡡���������ʺ� 85 ~ 120 ����ҡ�"), 
		Array(220070301,0,"ʱ��ֹ֮ͣ�䡡�������ʺ� 95 ~ 120 ����ҡ�"),
		Array(240040000,0,"����Ͽ�ȡ�������    �ʺ� 95 ~ 120 ����ҡ�"),
		Array(551030100,0,"��ɭ������ڡ��������ʺ� 95 ~ 120 ����ҡ�"),  
		Array(541020000,0,"��³����ڡ����������ʺ� 95 ~ 150 ����ҡ�"),
		Array(240040500,0,"��֮��Ѩ��ڡ��������ʺ� 100 ~ 150 ����ҡ�")   
		); 

//------------------------------------------------------------------------

var townmaps = Array(

		//Array(109010000,0,"ð�յ��-Ѱ�ұ���"), 
		Array(749030000,0,"�ù�"), 
		Array(910000000,0,"�����г�"),
		Array(104000000,0,"�����"), 
		Array(100000000,0,"���ִ�"), 
		Array(101000000,0,"ħ������"), 
		Array(102000000,0,"��ʿ����"), 
		Array(103000000,0,"��������"), 
		Array(120000000,0,"ŵ����˹����ͷ"),
		Array(140000000,0,"���"), 
		Array(105040300,2000,"����֮��"),
		Array(200000000,5000,"���֮��"),
		Array(211000000,10000,"����ѩ��"), 
		Array(230000000,10000,"ˮ������"),  
		Array(222000000,10000,"ͯ����"), 
		Array(220000000,10000,"��߳�"),
		Array(701000000,1000,"��������"),
		Array(250000000,10000,"����"), 
		//Array(702000000,10000,"������"), 
		Array(500000000,10000,"̩��"),
		Array(260000000,10000,"���ﰲ��"),  
		Array(600000000,10000,"��Ҷ��"), 
		Array(240000000,10000,"��ľ��"),  
		Array(261000000,10000,"�������"), 
		Array(221000000,10000,"�����������"), 
		Array(251000000,10000,"�ٲ���"),
		Array(701000200,10000,"�Ϻ�ԥ԰"),
		Array(550000000,10000,"��¡����"),
	//	Array(130000000,0,"ʥ��"),
		Array(551000000,10000,"�ʰ��"),
		//Array(740000000,10000,"�����"), 
		Array(801000000,10000,"�Ѻʹ�"), 
		Array(540010000,10000,"�¼��»���"),
		Array(541000000,10000,"�¼�����ͷ"),
		Array(300000000,10000,"����ɭ��"), 
		//Array(270000100,10000,"ʱ�����"), 
		Array(702100000,10000,"�ؾ���"), 
		Array(800000000,10000,"�Ŵ�����")
		//Array(130000200,10000,"ʥ�ز�·"),
	//	Array(741000208,0,"���㳡"),
	//	Array(925020000,0,"����������"),
		//Array(930000000,0,"����ɭ��")
		//Array(930000010,0,"ɭ�����")	
	//	Array(702090400,0,"Ӣ���"),  
	//	Array(700000000,0,"��𽹬"), 
	//	Array(749020000,0,"���쵰���ͼ")
		);

//------------------------------------------------------------------------

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

   	    var add = "#e#kMapleStory.��ݴ��ͷ���.#k\r\n\r\n";

//		add += "#r����������������������Ʒչ��#k\r\n";

//		add += "#b����#k\r\n";

//		add += "#v3010154# #v3010179# #v3010169# #v3010171# #v3010174# #v3010182# #v3010183# #v3010053##b\r\n\r\n";

//		add += "#b����#k\r\n";

//		add += "#v1902060# #v1912053# #v1902062# #v1912055# #v1902063# #v1912056# #v1902040# #v1912057#\r\n\r\n";

		add += "#L0##e#d�����ͼ����#l ";

		add += "#L1#������ͼ����#l ";
		
		//add += "#L2#���ͼ����#l ";

		//add += "#L3##rBOSS״̬#l ";
 
		//add += "#L4##rϵͳ�����#l ";
		cm.sendSimple (add);    

//------------------------------------------------------------------------
				
	} else if (status == 1) {

	if (selection == 0){
		var selStr = "#rMapleStory#k\r\n#d������������������ѡ�����Ŀ�ĵذ�.#k#b";
		for (var i = 0; i < townmaps.length; i++) {
		selStr += "\r\n#L" + i + "#" + townmaps[i][2] + "";
		}
		cm.sendSimple(selStr);
		towns = 1;
		}

	if (selection == 1) {
		var selStr = "#rMapleStory#k\r\n#d������������������ѡ�����Ŀ�ĵذ�.#k#b";
		for (var i = 0; i < monstermaps.length; i++) {
		selStr += "\r\n#L" + i + "#" + monstermaps[i][2] + "";
		}
		cm.sendSimple(selStr);
		monsters = 1;
		}

	if (selection == 2) {
		var selStr = "#rMapleStory#k\r\n#d������������������ѡ�����Ŀ�ĵذ�.#k#b";
		for (var i = 0; i < bossmaps.length; i++) {
		selStr += "\r\n#L" + i + "#" + bossmaps[i][2] + "";
		}
		cm.sendSimple(selStr);
		bosses = 1;
		}

	if (selection == 3) {
		var map = net.sf.cherry.net.channel.ChannelServer.getInstance(1).getMapFactory().getMap(280030000);
		var zha1 = map.getCharacters().toArray().length;
		var map = net.sf.cherry.net.channel.ChannelServer.getInstance(2).getMapFactory().getMap(280030000);
		var zha2 = map.getCharacters().toArray().length;
		var map = net.sf.cherry.net.channel.ChannelServer.getInstance(3).getMapFactory().getMap(280030000);
		var zha3 = map.getCharacters().toArray().length;
		var map = net.sf.cherry.net.channel.ChannelServer.getInstance(4).getMapFactory().getMap(280030000);
		var zha4 = map.getCharacters().toArray().length;

		var map = net.sf.cherry.net.channel.ChannelServer.getInstance(1).getMapFactory().getMap(240060200);
		var hei1 = map.getCharacters().toArray().length;
		var map = net.sf.cherry.net.channel.ChannelServer.getInstance(2).getMapFactory().getMap(240060200);
		var hei2 = map.getCharacters().toArray().length;
		var map = net.sf.cherry.net.channel.ChannelServer.getInstance(3).getMapFactory().getMap(240060200);
		var hei3 = map.getCharacters().toArray().length;
		var map = net.sf.cherry.net.channel.ChannelServer.getInstance(4).getMapFactory().getMap(240060200);
		var hei4 = map.getCharacters().toArray().length

		var map = net.sf.cherry.net.channel.ChannelServer.getInstance(1).getMapFactory().getMap(270050100);
		var pb1 = map.getCharacters().toArray().length;
		var map = net.sf.cherry.net.channel.ChannelServer.getInstance(2).getMapFactory().getMap(270050100);
		var pb2 = map.getCharacters().toArray().length;
		var map = net.sf.cherry.net.channel.ChannelServer.getInstance(3).getMapFactory().getMap(270050100);
		var pb3 = map.getCharacters().toArray().length;
		var map = net.sf.cherry.net.channel.ChannelServer.getInstance(4).getMapFactory().getMap(270050100);
		var pb4 = map.getCharacters().toArray().length

		var map = net.sf.cherry.net.channel.ChannelServer.getInstance(1).getMapFactory().getMap(220080001);
		var nao1 = map.getCharacters().toArray().length;
		var map = net.sf.cherry.net.channel.ChannelServer.getInstance(2).getMapFactory().getMap(220080001);
		var nao2 = map.getCharacters().toArray().length;
		var map = net.sf.cherry.net.channel.ChannelServer.getInstance(3).getMapFactory().getMap(220080001);
		var nao3 = map.getCharacters().toArray().length;
		var map = net.sf.cherry.net.channel.ChannelServer.getInstance(4).getMapFactory().getMap(220080001);
		var nao4 = map.getCharacters().toArray().length

   	    var add = "������ʾΪ���ߵ�BOSSս��#b\r\n";

		add += ""+aaa+"[#rƵ��һ#b]\r\n";

		add += ""+zzz+"[#d����#b]��#r"+nao1+"#b��  [#d����#b]��#r"+zha1+"#b��  [#d����#b]��#r"+hei1+"#b��\r\n\r\n";

		add += ""+aaa+"[#rƵ����#b]\r\n";

		add += ""+zzz+"[#d����#b]��#r"+nao2+"#b��  [#d����#b]��#r"+zha2+"#b��  [#d����#b]��#r"+hei2+"#b��\r\n\r\n";

		add += ""+aaa+"[#rƵ����#b]\r\n";

		add += ""+zzz+"[#d����#b]��#r"+nao3+"#b��  [#d����#b]��#r"+zha3+"#b��  [#d����#b]��#r"+hei3+"#b��\r\n\r\n";

		add += ""+aaa+"[#rƵ����#b]\r\n";

		add += ""+zzz+"[#d����#b]��#r"+nao4+"#b��  [#d����#b]��#r"+zha4+"#b��  [#d����#b]��#r"+hei4+"#b��\r\n\r\n";
 
		cm.sendOk (add); 

		cm.dispose();

                   }
				   
	if (selection == 4) {
            cm.openNpc(9310100, 0);
		}


//------------------------------------------------------------------------

	} else if (status == 2) {

	if (towns == 1) {
		cm.sendYesNo("��ȷ��Ҫȥ " + townmaps[selection][2] + "?");
		chosenMap = selection;
		towns = 2;

	} else if (monsters == 1) {
		cm.sendYesNo("��ȷ��Ҫȥ " + monstermaps[selection][2] + "?");
		chosenMap = selection;
		monsters = 2;

	} else if (bosses == 1) {
		cm.sendYesNo("��ȷ��Ҫȥ " + bossmaps[selection][2] + "?");
		chosenMap = selection;
		bosses = 2;

	} else if (fuben == 1) {
		cm.sendYesNo("��ȷ��Ҫȥ " + fubenmaps[selection][2] + "?");
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
		cm.sendOk("��û���㹻�Ľ��Ŷ!");
		}
		cm.dispose();

	} else if (monsters == 2) {
		if(cm.getMeso()>=monstermaps[chosenMap][1]){
		cm.warp(monstermaps[chosenMap][0], 0);
		cm.gainMeso(-monstermaps[chosenMap][1]);
		}else{
		cm.sendOk("��û���㹻�Ľ��Ŷ!");
		}
		cm.dispose();

	} else if (bosses == 2) {
		if(cm.getMeso()>=bossmaps[chosenMap][1]){
		cm.warp(bossmaps[chosenMap][0], 0);
		cm.gainMeso(-bossmaps[chosenMap][1]);
		}else{
		cm.sendOk("��û���㹻�Ľ��Ŷ!");
		}
		cm.dispose();

	} else if (fuben == 2) {
		if(cm.getMeso()>=fubenmaps[chosenMap][1]){
		cm.warp(fubenmaps[chosenMap][0], 0);
		cm.gainMeso(-fubenmaps[chosenMap][1]);
		}else{
		cm.sendOk("��û���㹻�Ľ��Ŷ!");
		}
		cm.dispose();

                }

//------------------------------------------------------------------------

		}
		}
		}

