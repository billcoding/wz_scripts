importPackage(Packages.client);
var random = java.lang.Math.floor(Math.random() * 7 + 1);
var randoma = java.lang.Math.floor(Math.random() * 8 + 1);
var sgsj = java.lang.Math.floor(Math.random() * 300 + 100);
var sgsja = java.lang.Math.floor(Math.random() * 300 + 100);
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
			if(cm.getPlayer().getLevel() < 10){
                txt += "#e��10���Ժ��������ҽ�����";
                cm.sendOk(txt);
                cm.dispose();
			}else if (cm.getSGRW() == 0 && cm.getSGRWA() == 0 &&��cm.getPlayer().getmrsgrw() == 0 && cm.getPlayer().getmrsgrwa() == 0){
				txt = "#e#r��ã�������ÿ��ɱ��������Ұ������ɱ�ֵ�ͬʱҲ������������ִ����ܲ���ɡ�\r\n\r\n";
                txt += "#L1##b��ȡÿ��ɱ������#l";
                cm.sendSimple(txt);
			}else if (cm.getPlayer().getmrsgrw() > 0 && cm.getPlayer().getmrsgrwa() > 0 && cm.getSGRW() < cm.getPlayer().getmrsgrws() || cm.getSGRWA() < cm.getPlayer().getmrsgrwas()){
				txt = "��ã�������ÿ��ɱ��������Ұ������ɱ�ֵ�ͬʱҲ������������ִ����ܲ���ɡ�\r\n\r\n";
				if(cm.getPlayer().getmrsgrw() == 1130100){
					txtas = "��ľ��";
				}else if(cm.getPlayer().getmrsgrw() == 210100){
					txtas = "��ˮ��";
				}else if(cm.getPlayer().getmrsgrw() == 3230308){
					txtas = "�վ�ȸ";
				}else if(cm.getPlayer().getmrsgrw() == 4230100){
					txtas = "��������";
				}else if(cm.getPlayer().getmrsgrw() == 8150100){
					txtas = "����";
				}else if(cm.getPlayer().getmrsgrw() == 5130103){
					txtas = "������";
				}else if(cm.getPlayer().getmrsgrw() == 5200002){
					txtas = "��ʯ��";
				}
				if(cm.getPlayer().getmrsgrwa() == 6230300){
					txta = "��С��";
				}else if(cm.getPlayer().getmrsgrwa() == 7130101){
					txta = "��ǹţħ��";
				}else if(cm.getPlayer().getmrsgrwa() == 7130601){
					txta = "а��٪���";
				}else if(cm.getPlayer().getmrsgrwa() == 5130102){
					txta = "��ʯͷ��";
				}else if(cm.getPlayer().getmrsgrwa() == 8140103){
					txta = "����������";
				}else if(cm.getPlayer().getmrsgrwa() == 8140600){
					txta = "�Ǻ���";
				}else if(cm.getPlayer().getmrsgrwa() == 8150300){
					txta = "�����";
				}else if(cm.getPlayer().getmrsgrwa() == 8190005){
					txta = "������";
				}
                txt += "#b�㵱ǰ������ɽ��ȣ�#l\r\n\r\n";
                txt += "#r"+txtas+"���������� "+cm.getPlayer().getmrsgrws()+"/"+cm.getSGRW()+" Ŀǰ�Ѿ���ɱ#l\r\n";
                txt += "#r"+txta+"���������� "+cm.getPlayer().getmrsgrwas()+"/"+cm.getSGRWA()+" Ŀǰ�Ѿ���ɱ#l";
                cm.sendOk(txt);
                cm.dispose();
			}else if (cm.getSGRW() >= cm.getPlayer().getmrsgrws() && cm.getSGRWA() >= cm.getPlayer().getmrsgrwas() && cm.getPlayer().getmrsgrws() > 0 &&  cm.getPlayer().getmrsgrwas() > 0){
				txt = "��ã�������ÿ��ɱ��������Ұ������ɱ�ֵ�ͬʱҲ������������ִ����ܲ���ɡ�\r\n\r\n";
                txt += "#L2##b��ϲ�����ÿ��ɱ������[������ȡ����]��#l";
                cm.sendSimple(txt);
            }else{
                txt += "���Ѿ���ɹ���!\r\n��ڶ���������";
                cm.sendOk(txt);
                cm.dispose();
            }

        } else if (selection == 1) {
            if (random <= 1){
                
				cm.getPlayer().setmrsgrw(1130100);	
				cm.getPlayer().setmrsgrws(sgsj);	
            }else if(random == 2){
                
				cm.getPlayer().setmrsgrw(210100);
				cm.getPlayer().setmrsgrws(sgsj);		
            }else if(random == 3){
                
				cm.getPlayer().setmrsgrw(3230308);
				cm.getPlayer().setmrsgrws(sgsj);		
            }else if(random == 4){
                
				cm.getPlayer().setmrsgrw(4230100);	
				cm.getPlayer().setmrsgrws(sgsj);	
            }else if(random == 5){
                
				cm.getPlayer().setmrsgrw(8150100);	
				cm.getPlayer().setmrsgrws(sgsj);	
            }else if(random == 6){
                
				cm.getPlayer().setmrsgrw(5130103);	
				cm.getPlayer().setmrsgrws(sgsj);	
            }else if(random >= 7){
                
				cm.getPlayer().setmrsgrw(5200002);	
				cm.getPlayer().setmrsgrws(sgsj);	
            }
			
            if (randoma <= 1){
                
				cm.getPlayer().setmrsgrwa(6230300);	
				cm.getPlayer().setmrsgrwas(sgsja);	
            }else if(randoma == 2){
                
				cm.getPlayer().setmrsgrwa(7130101);	
				cm.getPlayer().setmrsgrwas(sgsja);	
            }else if(randoma == 3){
                
				cm.getPlayer().setmrsgrwa(7130601);	
				cm.getPlayer().setmrsgrwas(sgsja);	
            }else if(randoma == 4){
                
				cm.getPlayer().setmrsgrwa(5130102);	
				cm.getPlayer().setmrsgrwas(sgsja);	
            }else if(randoma == 5){
                
				cm.getPlayer().setmrsgrwa(8140103);	
				cm.getPlayer().setmrsgrwas(sgsja);	
            }else if(randoma == 6){
                
				cm.getPlayer().setmrsgrwa(8140600);	
				cm.getPlayer().setmrsgrwas(sgsja);	
            }else if(randoma == 7){
                
				cm.getPlayer().setmrsgrwa(8150300);	
				cm.getPlayer().setmrsgrwas(sgsja);	
            }else if(randoma >= 8){
                
				cm.getPlayer().setmrsgrwa(8190005);	
				cm.getPlayer().setmrsgrwas(sgsja);	
            }
                cm.sendOk("�ɹ���ȡÿ��ɱ������\r\n#r�����´��Ҳ鿴�����Լ�Ҫɱ�Ĺ��#l");
                cm.dispose();
        } else if (selection == 2) {
			if(item > 50){
					cm.gainItem(4000463, 5);
				}else{
					cm.sendOk("������λ����!");
					cm.dispose();
				}
			
				cm.getPlayer().setmrsgrw(0);	
				cm.getPlayer().setmrsgrws(0);
				cm.getPlayer().setmrsgrwa(0);	
				cm.getPlayer().setmrsgrwas(0);	
				cm.worldMessage(6,"��ϲ��ң�["+cm.getName()+"]���ÿ��ɱ�����񣬴��һ��Ĥ�ݰɡ�");
                cm.sendOk("��ϲ�����ÿ��ɱ����������������!");
                cm.dispose();
        }
    }
}
