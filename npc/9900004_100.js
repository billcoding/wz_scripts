importPackage(Packages.client);
var random = java.lang.Math.floor(Math.random() * 4 + 1);
var randoma = java.lang.Math.floor(Math.random() * 3 + 1);
var sgsj = java.lang.Math.floor(Math.random() * 5 + 2);
var sgsja = java.lang.Math.floor(Math.random() * 5 + 2);
var item = java.lang.Math.floor(Math.random() * 100 + 1);

var status = 0;
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
            var txta = "";
            var txtas = "";
			if (cm.getFBRW() == 0 && cm.getFBRWA() == 0 &&��cm.getPlayer().getmrfbrw() == 0 && cm.getPlayer().getmrfbrwa() == 0){
				txt = "#e#r��ã����ÿ�ո�����������ɴ�������;���߲��㣩��\r\n\r\n";
                txt += "#L1##b��ȡÿ�ո�������#l";
                cm.sendSimple(txt);
			}else if (cm.getPlayer().getmrfbrw() > 0 && cm.getPlayer().getmrfbrwa() > 0 && cm.getFBRW() < cm.getPlayer().getmrfbrws() || cm.getFBRWA() < cm.getPlayer().getmrfbrwas()){
				
				txt = "#e#r��ã����ÿ�ո�����������ɴ�������;���߲��㣩��\r\n\r\n";
				if(cm.getPlayer().getmrfbrw() == 1){
					txtas = "�������������";
				}else if(cm.getPlayer().getmrfbrw() == 2){
					txtas = "��߸���";
				}else if(cm.getPlayer().getmrfbrw() == 3){
					txtas = "��ո���";
				}else if(cm.getPlayer().getmrfbrw() == 4){
					txtas = "��������";
				}
				if(cm.getPlayer().getmrfbrwa() == 1){
					txta = "������";
				}else if(cm.getPlayer().getmrfbrwa() == 2){
					txta = "��Ů����";
				}else if(cm.getPlayer().getmrfbrwa() == 3){
					txta = "��������";
				}
                txt += "#b�㵱ǰ������ɽ��ȣ�#l\r\n\r\n";
                txt += "#r"+txtas+"���������� "+cm.getPlayer().getmrfbrws()+"/"+cm.getFBRW()+" Ŀǰ�Ѿ����#l\r\n";
                txt += "#r"+txta+"���������� "+cm.getPlayer().getmrfbrwas()+"/"+cm.getFBRWA()+" Ŀǰ�Ѿ����#l";
                cm.sendOk(txt);
                cm.dispose();
			}else if (cm.getFBRW() >= cm.getPlayer().getmrfbrws() && cm.getFBRWA() >= cm.getPlayer().getmrfbrwas() && cm.getPlayer().getmrfbrws() > 0 &&  cm.getPlayer().getmrfbrwas() > 0){
				
				txt = "#e#r��ã����ÿ�ո�����������ɴ�������;���߲��㣩��\r\n\r\n";
                txt += "#L2##b��ϲ�����ÿ�ո�������[������ȡ����]��#l";
                cm.sendSimple(txt);
            }else{
                txt += "���Ѿ���ɹ���!\r\n��ڶ���������";
                cm.sendOk(txt);
                cm.dispose();
            }

        } else if (selection == 1) {
            if (random <= 1){
                
				cm.getPlayer().setmrfbrw(1);	
				cm.getPlayer().setmrfbrws(sgsj);	
            }else if(random == 2){
                
				cm.getPlayer().setmrfbrw(2);
				cm.getPlayer().setmrfbrws(sgsj);		
            }else if(random == 3){
                
				cm.getPlayer().setmrfbrw(3);
				cm.getPlayer().setmrfbrws(sgsj);		
            }else if(random == 4){	
				cm.getPlayer().setmrfbrw(4);
				cm.getPlayer().setmrfbrws(sgsj);	
            }
			
            if (randoma <= 1){
                
				cm.getPlayer().setmrfbrwa(1);	
				cm.getPlayer().setmrfbrwas(sgsja);	
            }else if(randoma == 2){
                
				cm.getPlayer().setmrfbrwa(2);	
				cm.getPlayer().setmrfbrwas(sgsja);	
            }else if(randoma == 3){
                
				cm.getPlayer().setmrfbrwa(3);	
				cm.getPlayer().setmrfbrwas(sgsja);		
            }
                cm.sendOk("�ɹ���ȡÿ�ո�������\r\n#r�����´��Ҳ鿴���ȡ�#l");
                cm.dispose();
        } else if (selection == 2) {
			if(item > 50){
					cm.gainItem(4000463, 5);
				}else{
					cm.sendOk("������λ����!");
					cm.dispose();
				}
				cm.getPlayer().setmrfbrw(0);	
				cm.getPlayer().setmrfbrws(0);
				cm.getPlayer().setmrfbrwa(0);	
				cm.getPlayer().setmrfbrwas(0);	
				cm.worldMessage(6,"��ϲ��ң�["+cm.getName()+"]���ÿ�ո������񣬴��һ��Ĥ�ݰɡ�");
                cm.sendOk("��ϲ�����ÿ�ո�����������������!");
                cm.dispose();
        }
    }
}
