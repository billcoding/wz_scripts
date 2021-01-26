importPackage(Packages.tools.packet);

var Petlist = new Array(); //���ڴ洢��װ����˵�ѷų����ĳ������Ϊ MaplePet�����ݡ�
var petname;

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.sendOk("�õġ��´��ټ���");
		cm.dispose();
	} else {
		if (mode == 0) {
			cm.sendOk("�õġ��´��ټ���");
			cm.dispose();
			return;
		}
		if (mode == 1) {
			status++;
		} else {
			status--;
		}
		
		if (status == 0) {		
			cm.sendNext("\r\n#e���ã����ǳ������NPC\r\n������ʱ��,��Ҫ��Ҫ�����ĳ���ų���\r\n������Ҫʹ�ø��ӷ���,���⿨��\r\nÿ����Ҫ#v5170000#\r\n#r#k");			
		} else if (status == 1){
		//	cm.getPlayer().dropMessage("0");
			for(i = 0; i < 3; i++){
				if(cm.getChar().getPet(i) != null){
					Petlist.push(cm.getChar().getPet(i)); //ѭ������ɫװ������������λ�ã������װ������ͰѸó������ѹ�� Petlist����
				}				
			}
			//cm.getPlayer().dropMessage("1");
			if(Petlist.length > 0){
			//	cm.getPlayer().dropMessage("2");
				if(Petlist.length > 1){  //�ж�Petlist�ĳ��ȡ�Ҳ����˵�ų����ĳ��������
				//cm.getPlayer().dropMessage("3");
					cm.sendOk("ֻ�зų�һֻ����ʱ������ȷ��ʶ��!");
					cm.dispose();
				}else{
				//	cm.getPlayer().dropMessage("4");
					var petid = Petlist[0].getPetItemId();					
					var text = "����ҪΪ #v" + petid + "# �����֡� "
					text += "���������ǣ�#r" +  Petlist[0].getName() + "#k\r\n\r\n";				
					text += "��ȷ��Ҫ��������������";
					cm.sendYesNo(text);										
				}

			}else{
				cm.sendOk("���Ҫ�����ĳ���ų���!");
				cm.dispose();
			}			
		}else if (status == 2){			
			cm.sendGetText("�������µĳ������֣�\r\n#rע�⣺Ϊ�˱������,�뾡����Ҫʹ�ø��ӵķ��š������ĵ�\r\n ");
		}else if (status == 3){
			petname = cm.getText().trim();
			if(petname.getBytes("GBK").length > 12 || petname.getBytes("GBK").length < 2){			
				cm.sendOk("������ĳ������ֱ�����2-10���ַ�֮��,һ�������������ַ�!");
				cm.dispose();
			}else{			
				if(checktext(petname) == false){
					cm.sendOk("�Բ���,���ĳ��ﲻ��ʹ���������!");
					cm.dispose();
				}else{
					cm.sendYesNo("�˴γ��������Ҫ��ȡ���������\r\nȷ��Ҫ��#r " + Petlist[0].getName() + " #k�ĳ�#r " + petname + " #k��?");
				}							
			}
		}else if (status == 4){	
			if(cm.haveItem(5170000, 1)) {
				cm.gainItem(5170000, -1);			
			    Petlist[0].setName(petname);			
                cm.getC().getPlayer().getMap().broadcastMessage(MTSCSPacket.changePetName(cm.getPlayer(), petname, 0));
				Petlist[0].saveToDb();
				cm.sendOk("#r��������ɹ�!\r\n��Ҫ���߲���������ʾ");
			}else{
				cm.sendOk("�Բ���,��û�г��������,�Ҳ��ܰ����ĳ�������֡�");
			}
			cm.dispose();
		}
	}
}	

function checktext(text){    //�ַ������ǹ��ܣ��Զ�ɾ���ؼ��ֳ���
    var gl = new Array("ɵB","GM","gm","����","����","��","SB","ЦЦ","�ɿ�","��ΰ","ΰ��","����","SB","����","ð�յ�","ð�յ�");
    for(i=0; i<gl.length; i++){
	if(text.indexOf(gl[i]) >= 0){		
		return false;
		break;    
	}
    }    
    return true;    
}  


