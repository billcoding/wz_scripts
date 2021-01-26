

var status = 0;

var maps = Array(
Array(500000000,3000,300),
Array(702000000,3000,300),
//Array(600000000,3000,300),
Array(540000000,3000,300),
Array(800000000,3000,300),
Array(701000000,3000,300),
Array(702100000,3000,300),
Array(550000000,3000,300)
);//���ε�ͼ����
var selectedMap = -1;
var cost = 0;

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
	if ((status <= 2 && mode == 0) || (status == 5 && mode == 1)){
		cm.dispose();
		return;
	}
	if (mode == 1)
		status++;
	else
		status--;
	if (cm.getChar().getMapId() != 500000000 && cm.getChar().getMapId() != 702000000 && cm.getChar().getMapId() != 800000000 && cm.getChar().getMapId() != 600000000 && cm.getChar().getMapId() != 540000000 && cm.getChar().getMapId() != 550000000 && cm.getChar().getMapId() != 541000000) {
		if (status == 0) {
			status = 1;
			if (cm.getJob() == 0) {
				cm.sendNext("Ϊ�˴ӷ�æ���ճ��н��ѣ�ȥ����һ��������ô������������������ӱ������Ļ�������ѧ�����ٶ����Ļ��ᣡ����ð�յ����ι�˾Ϊ��׼���ˣ��ḻ��Ȥ��#b��������#k�ײ͡�˭˵��������ܹ����һ����ġ����ǵ�#bð�յ����������ײ�#kֻ��Ҫ#b2900���#k�Ϳ�������ȫ�̡�");
			} else {
				cm.sendNext("Ϊ�˴ӷ�æ���ճ��н��ѣ�ȥ����һ��������ô������������������ӱ������Ļ�������ѧ�����ٶ����Ļ��ᣡ����ð�յ����ι�˾Ϊ��׼���ˣ��ḻ��Ȥ��#b��������#k�ײ͡�˭˵��������ܹ����һ����ġ����ǵ�#bð�յ����������ײ�#kֻ��Ҫ#b3000���#k�Ϳ�������ȫ�̡�");
			}
		} else if (status == 1) {
			cm.sendSimple("���ھͿ���ȥ�� #b̩����ˮ���г�,������,�ձ��Ŵ�����#k����һ�����ڸ����ε��Ҷ���Ϊ����ṩ�����ȳϵķ�����ô��׼���ã����ֿ���9���Żݡ�\r\n#b#L0#�鿴������·.#k#l");
		} else if (status == 2) {
var selStr = "���ھͿ���ȥ�� #b̩����ˮ���г�,������,�ձ��Ŵ�����#k����һ�����ڸ����ε��Ҷ���Ϊ����ṩ�����ȳϵķ�����ô��׼���ã����ֿ���9���Żݡ�#b";
				if (cm.getJob() == 0) {
					for (var i = 0; i < maps.length; i++) {
						selStr += "\r\n#L" + i + "##m" + maps[i][0] + "# ("+maps[i][2]+"���)#l";
					}
				}else{
					for (var i = 0; i < maps.length; i++) {
						selStr += "\r\n#L" + i + "##m" + maps[i][0] + "# ("+maps[i][1]+"���)#l";
					}
				}
				cm.sendSimple(selStr);
		} else if (status == 3) {
			selectedMap = selection;
			if (cm.getJob() == 0) {
				cost = maps[selectedMap][2];
			} else {
				cost = maps[selectedMap][1];
			}
			cm.sendYesNo("���Ѿ������ã�ȷ��Ҫȥ #b#m" + maps[selectedMap][0] + "##k����ô�㽫Ҫ������ #b" + cost +"���#k. �������ȥ��");
		} else if (status == 4) {
			if (cm.getMeso() < cost) {
				cm.sendPrev("����,��Ǯ����! ��ʵ����̫�ֲ���!�Ҳ��ܴ���ȥ.");
			} else {
				cm.gainMeso(-cost);
				cm.saveLocation("WORLDTOUR");
				cm.warp(maps[selectedMap][0], 0);
				cm.dispose();
			}
		}	
	} else if (cm.getChar().getMapId() == 500000000 || cm.getChar().getMapId() == 702000000 || cm.getChar().getMapId() == 800000000 || cm.getChar().getMapId() == 600000000 || cm.getChar().getMapId() == 540000000 || cm.getChar().getMapId() == 550000000 || cm.getChar().getMapId() == 551000000 || cm.getChar().getMapId() == 541000000 || cm.getChar().getMapId() == 220000000 || cm.getChar().getMapId() == 240000000) {
		if (status == 0) {
			cm.sendSimple ("����������ô��������Ȥ�ɡ�\r\n#L0##b���أ�#m" + cm.getSavedLocation("WORLDTOUR") + "# #k#l\r\n#L1##b�����۹�#k#l");
		} else if (status == 1) {
			if (selection == 0) {
				cm.sendOk("�õģ������Ҫ����ĵط�������ǵĸ����ҡ�");
			} else if (selection == 1) {
				cm.sendOk("�����ȥ���ٵ��������ɡ��������ȥ��ʱ�����������ҡ�");
				cm.dispose();
			} 
		} else if (status == 2) {
			var map = cm.getSavedLocation("WORLDTOUR");
			if (map == -1) {
				map = 100000000;
			}
			cm.warp(map, 0);
			cm.dispose();
			}
		}
	}
}