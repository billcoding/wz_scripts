importPackage(Packages.client);
var status = 0;
var item = java.lang.Math.floor(Math.random() * 100 + 50);
var drop = java.lang.Math.floor(Math.random() * 8 + 3);
function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        if (status == 0) {
            var txt = "";
			if(cm.getPlayer().getLevel() < 70){
                txt += "��70���Ժ��������ҽ�����";
                cm.sendOk(txt);
                cm.dispose();
			}else if (cm.getSJRW() == 0){
				txt = "��ã�������ÿ���ͽ������ͽ�����һ����3�Σ�ÿһ���ѶȲ�ͬ�������Ľ�һ�Խ��Խ��Ӵ��\r\n\r\n";
                txt += "#L1##b����200����������#v4000026#�����ң�#l";
                cm.sendSimple(txt);
			}else if (cm.getSJRW() == 1){
				txt = "��ã������ǵڶ����ͽ������ͽ�����һ����3�Σ�ÿһ���ѶȲ�ͬ�������Ľ�һ�Խ��Խ��Ӵ��\r\n\r\n";
                txt += "#L2##b����200����ʨƤ��#v4000155#�����ң�#l";
                cm.sendSimple(txt);
			}else if (cm.getSJRW() == 2){
				txt = "��ã������ǵ������ͽ������ͽ�����һ����3�Σ�ÿһ���ѶȲ�ͬ�������Ľ�һ�Խ��Խ��Ӵ��\r\n\r\n";
                txt += "#L3##b����1���������β��#v4000235#�����ң�#l \r\n#b����1������Ҷ��#v4000243#�����ң�#l\r\n#b����50��ͭ����#v4000407#�����ң�#l";
                cm.sendSimple(txt);
            }else{
                txt += "���Ѿ���ɹ�������ʱ��δ����!\r\n��ڶ���������";
                cm.sendOk(txt);
                cm.dispose();
            }

        } else if (selection == 1) {
            if (cm.haveItem(4000026,200)){
			if(item >= 50){
				if(cm.canHold(4011000 , drop)){
					cm.gainItem(4011000 , drop);
				}else{
					cm.sendOk("������λ����!");
					cm.dispose();
				}
			}else if(item > 50 && item <= 55){
				if(cm.canHold(4011001 , drop)){
					cm.gainItem(4011001 , drop);
				}else{
					cm.sendOk("������λ����!");
					cm.dispose();
				}
			}else if(item > 55 && item <= 60){
				if(cm.canHold(4011002 , drop)){
					cm.gainItem(4011002 , drop);
				}else{
					cm.sendOk("������λ����!");
					cm.dispose();
				}
			}else if(item > 60 && item <= 65){
				if(cm.canHold(4011003 , drop)){
					cm.gainItem(4011003, drop);
				}else{
					cm.sendOk("������λ����!");
					cm.dispose();
				}
			}else if(item > 65 && item <= 67){
				if(cm.canHold(4011004, drop)){
					cm.gainItem(4011004, drop);
				}else{
					cm.sendOk("������λ����!");
					cm.dispose();
				}
			}else if(item > 67 && item <= 69){
				if(cm.canHold(4011005, drop)){
					cm.gainItem(4011005, drop);
				}else{
					cm.sendOk("������λ����!");
					cm.dispose();
				}
			}else if(item > 69 && item <= 71){
				if(cm.canHold(4011006, drop)){
					cm.gainItem(4011006, drop);
				}else{
					cm.sendOk("������λ����!");
					cm.dispose();
				}
			}else if(item > 71 && item <= 73){
				if(cm.canHold(4011008, drop)){
					cm.gainItem(4011008, drop);
				}else{
					cm.sendOk("������λ����!");
					cm.dispose();
				}
			}else if(item > 73 && item <= 75){
				if(cm.canHold(4021000, drop)){
					cm.gainItem(4021000, drop);
				}else{
					cm.sendOk("������λ����!");
					cm.dispose();
				}
			}else if(item > 75 && item <= 77){
				if(cm.canHold(4021001, drop)){
					cm.gainItem(4021001, drop);
				}else{
					cm.sendOk("������λ����!");
					cm.dispose();
				}
			}else if(item > 77 && item <= 79){
				if(cm.canHold(4021002, drop)){
					cm.gainItem(4021002, drop);
				}else{
					cm.sendOk("������λ����!");
					cm.dispose();
				}
			}else if(item > 79 && item <= 81){
				if(cm.canHold(4021003, drop)){
					cm.gainItem(4021003, drop);
				}else{
					cm.sendOk("������λ����!");
					cm.dispose();
				}
			}else if(item > 81 && item <= 83){
				if(cm.canHold(4021004, drop)){
					cm.gainItem(4021004, drop);
				}else{
					cm.sendOk("������λ����!");
					cm.dispose();
				}
			}else if(item > 83 && item <= 85){
				if(cm.canHold(4021005, drop)){
					cm.gainItem(4021005, drop);
				}else{
					cm.sendOk("������λ����!");
					cm.dispose();
				}
			}else if(item > 85 && item <= 87){
				if(cm.canHold(4021006, drop)){
					cm.gainItem(4021006, drop);
				}else{
					cm.sendOk("������λ����!");
					cm.dispose();
				}
			}else if(item > 87 && item <= 89){
				if(cm.canHold(4021007, drop)){
					cm.gainItem(4021007, drop);
				}else{
					cm.sendOk("������λ����!");
					cm.dispose();
				}
			}else if(item > 89){
				if(cm.canHold(4021008, drop)){
					cm.gainItem(4021008, drop);
				}else{
					cm.sendOk("������λ����!");
					cm.dispose();
				}
			}
                cm.gainSJRW(1);//
				cm.gainMeso(1000000);
                cm.gainItem(4000026, -200);
                cm.sendOk("��ϲ����ɵ�һ���ͽ�������ӵڶ�������");
                cm.dispose();
            }else{
                cm.sendOk("����200����������#v4000026#������!");
                cm.dispose();
            }

        } else if (selection == 2) {
            if (cm.haveItem(4000155,200)){
			if(item >= 50){
				if(cm.canHold(4011000 , drop)){
					cm.gainItem(4011000 , drop);
				}else{
					cm.sendOk("������λ����!");
					cm.dispose();
				}
			}else if(item > 50 && item <= 55){
				if(cm.canHold(4011001 , drop)){
					cm.gainItem(4011001 , drop);
				}else{
					cm.sendOk("������λ����!");
					cm.dispose();
				}
			}else if(item > 55 && item <= 60){
				if(cm.canHold(4011002 , drop)){
					cm.gainItem(4011002 , drop);
				}else{
					cm.sendOk("������λ����!");
					cm.dispose();
				}
			}else if(item > 60 && item <= 65){
				if(cm.canHold(4011003 , drop)){
					cm.gainItem(4011003, drop);
				}else{
					cm.sendOk("������λ����!");
					cm.dispose();
				}
			}else if(item > 65 && item <= 67){
				if(cm.canHold(4011004, drop)){
					cm.gainItem(4011004, drop);
				}else{
					cm.sendOk("������λ����!");
					cm.dispose();
				}
			}else if(item > 67 && item <= 69){
				if(cm.canHold(4011005, drop)){
					cm.gainItem(4011005, drop);
				}else{
					cm.sendOk("������λ����!");
					cm.dispose();
				}
			}else if(item > 69 && item <= 71){
				if(cm.canHold(4011006, drop)){
					cm.gainItem(4011006, drop);
				}else{
					cm.sendOk("������λ����!");
					cm.dispose();
				}
			}else if(item > 71 && item <= 73){
				if(cm.canHold(4011008, drop)){
					cm.gainItem(4011008, drop);
				}else{
					cm.sendOk("������λ����!");
					cm.dispose();
				}
			}else if(item > 73 && item <= 75){
				if(cm.canHold(4021000, drop)){
					cm.gainItem(4021000, drop);
				}else{
					cm.sendOk("������λ����!");
					cm.dispose();
				}
			}else if(item > 75 && item <= 77){
				if(cm.canHold(4021001, drop)){
					cm.gainItem(4021001, drop);
				}else{
					cm.sendOk("������λ����!");
					cm.dispose();
				}
			}else if(item > 77 && item <= 79){
				if(cm.canHold(4021002, drop)){
					cm.gainItem(4021002, drop);
				}else{
					cm.sendOk("������λ����!");
					cm.dispose();
				}
			}else if(item > 79 && item <= 81){
				if(cm.canHold(4021003, drop)){
					cm.gainItem(4021003, drop);
				}else{
					cm.sendOk("������λ����!");
					cm.dispose();
				}
			}else if(item > 81 && item <= 83){
				if(cm.canHold(4021004, drop)){
					cm.gainItem(4021004, drop);
				}else{
					cm.sendOk("������λ����!");
					cm.dispose();
				}
			}else if(item > 83 && item <= 85){
				if(cm.canHold(4021005, drop)){
					cm.gainItem(4021005, drop);
				}else{
					cm.sendOk("������λ����!");
					cm.dispose();
				}
			}else if(item > 85 && item <= 87){
				if(cm.canHold(4021006, drop)){
					cm.gainItem(4021006, drop);
				}else{
					cm.sendOk("������λ����!");
					cm.dispose();
				}
			}else if(item > 87 && item <= 89){
				if(cm.canHold(4021007, drop)){
					cm.gainItem(4021007, drop);
				}else{
					cm.sendOk("������λ����!");
					cm.dispose();
				}
			}else if(item > 89){
				if(cm.canHold(4021008, drop)){
					cm.gainItem(4021008, drop);
				}else{
					cm.sendOk("������λ����!");
					cm.dispose();
				}
			}
                cm.gainSJRW(1);//cm.gainPS(1);  ����˼�� ��������̵�һ����ʱ������� ����ֵ+1��������޷����ظ����ڶ����ˡ�ֻ���賿12��ˢ�²��У�
				cm.gainMeso(2000000);
                cm.gainItem(4000155, -200);
                cm.sendOk("��ϲ����ɵڶ����ͽ�������ӵ���������");
                cm.dispose();
            }else{
                cm.sendOk("����200����ʨƤ��#v4000155#������!");
                cm.dispose();
            }

        } else if (selection == 3) {
            if (cm.haveItem(4000235,1) && cm.haveItem(4000243,1) && cm.haveItem(4000407,50)){
				if(item > 50 && item <= 55){
				cm.gainNX(3000);
			}else if(item > 55 && item <= 60){
				if(cm.canHold(2049100, 2)){
					cm.gainItem(2049100, 2);
				}else{
					cm.sendOk("������λ����!");
					cm.dispose();
				}
			}else if(item > 60 && item <= 65){
				if(cm.canHold(2340000, 2)){
					cm.gainItem(2340000, 2);
				}else{
					cm.sendOk("������λ����!");
					cm.dispose();
				}
			}else if(item > 65 && item <= 67){
				if(cm.canHold(1032205)){
					cm.gainItem(1032205);
				}else{
					cm.sendOk("������λ����!");
					cm.dispose();
				}
			}else if(item > 67 && item <= 69){
				if(cm.canHold(1032206)){
					cm.gainItem(1032206);
				}else{
					cm.sendOk("������λ����!");
					cm.dispose();
				}
			}else if(item > 69 && item <= 71){
				if(cm.canHold(1032207)){
					cm.gainItem(1032207);
				}else{
					cm.sendOk("������λ����!");
					cm.dispose();
				}
			}else if(item > 71 && item <= 73){
				if(cm.canHold(1102040)){
					cm.gainItem(1102040);
				}else{
					cm.sendOk("������λ����!");
					cm.dispose();
				}
			}else if(item > 73 && item <= 75){
				if(cm.canHold(1102041)){
					cm.gainItem(1102041);
				}else{
					cm.sendOk("������λ����!");
					cm.dispose();
				}
			}else if(item > 75 && item <= 77){
				if(cm.canHold(1102042)){
					cm.gainItem(1102042);
				}else{
					cm.sendOk("������λ����!");
					cm.dispose();
				}
			}else if(item > 77 && item <= 79){
				if(cm.canHold(1102043)){
					cm.gainItem(1102043);
				}else{
					cm.sendOk("������λ����!");
					cm.dispose();
				}
			}else if(item > 79 && item <= 81){
				if(cm.canHold(1122001)){
					cm.gainItem(1122001);
				}else{
					cm.sendOk("������λ����!");
					cm.dispose();
				}
			}else if(item > 81 && item <= 83){
				if(cm.canHold(1122002)){
					cm.gainItem(1122002);
				}else{
					cm.sendOk("������λ����!");
					cm.dispose();
				}
			}else if(item > 83 && item <= 85){
				if(cm.canHold(1122003)){
					cm.gainItem(1122003);
				}else{
					cm.sendOk("������λ����!");
					cm.dispose();
				}
			}else if(item > 85 && item <= 87){
				if(cm.canHold(1122004)){
					cm.gainItem(1122004);
				}else{
					cm.sendOk("������λ����!");
					cm.dispose();
				}
			}else if(item > 87 && item <= 89){
				if(cm.canHold(1122005)){
					cm.gainItem(1122005);
				}else{
					cm.sendOk("������λ����!");
					cm.dispose();
				}
			}else if(item > 89 && item <= 91){
				if(cm.canHold(1122006)){
					cm.gainItem(1122006);
				}else{
					cm.sendOk("������λ����!");
					cm.dispose();
				}
			}else if(item > 91 && item <= 93){
				if(cm.canHold(1012170)){
					cm.gainItem(1012170);
				}else{
					cm.sendOk("������λ����!");
					cm.dispose();
				}
			}else if(item > 93 && item <= 95){
				if(cm.canHold(1302063)){
					cm.gainItem(1302063);
				}else{
					cm.sendOk("������λ����!");
					cm.dispose();
				}
			}else if(item > 95 && item <= 97){
				if(cm.canHold(1302106)){
					cm.gainItem(1302106);
				}else{
					cm.sendOk("������λ����!");
					cm.dispose();
				}
			}else if(item >= 98){
				if(cm.canHold(1402014)){
					cm.gainItem(1402014);
				}else{
					cm.sendOk("������λ����!");
					cm.dispose();
				}
			}
                cm.gainSJRW(1);//cm.gainPS(1);  ����˼�� ��������̵�һ����ʱ������� ����ֵ+1��������޷����ظ����ڶ����ˡ�ֻ���賿12��ˢ�²��У�
				cm.gainMeso(3500000);
                cm.gainItem(4000407, -50);
                cm.gainItem(4000235, -1);
                cm.gainItem(4000243, -1);
                cm.sendOk("��ϲ�����ȫ���ͽ�����������������");
				cm.worldMessage(6,"��ϲ��ң�["+cm.getName()+"]���ÿ���ͽ����񣬴��һ��Ĥ�ݰɡ�");
                cm.dispose();
            }else{
                cm.sendOk("#b����1���������β��#v4000235#�����ң�#l \r\n#b����1������Ҷ��#v4000243#�����ң�#l\r\n#b����50��ͭ����#v4000407#�����ң�#l");
                cm.dispose();
            }
        }
    }
}
