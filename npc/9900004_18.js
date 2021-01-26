
importPackage(java.lang);

var status = 0;
var slot = Array();
var stats = Array("����ע��");
var selected;
var statsSel;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status >= 0 && mode == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (status == 0) {
            cm.sendSimple("�װ���#r#h ##k����,����������ע����������-ħ������\r\n\r\n�������й���������ħ��������2�ֶ����ڶ������ע��\r\n\r\nע��һ����Ҫ����1��#r#v4032323##z4032323#\r\n\r\n���Խ����ע��#r����ԭװ���Ĺ���������ħ������#k������ ���¸���30�㡣\r\n\r\n���磺#rԭװ����������ħ��������50.��ô�ͻ������������߸���30��\r\n\r\nҲ����˵��߿���ע�뵽80����Ϳ��ܽ��͵�20.ԭ�����ϸ���30��~\r\n\r\n#L2#����ע����������-ħ������-��Ҫ��#r#v4032323##z4032323##l");
        } else if (selection == 2) {
            var avail = "";
            for (var i = -1; i > -199; i--) {
                if (cm.getInventory( - 1).getItem(i) != null) {
                    avail += "#L" + Math.abs(i) + "##t" + cm.getInventory( - 1).getItem(i).getItemId() + "##v"+cm.getInventory( - 1).getItem(i).getItemId()+"##l\r\n";
                }
                slot.push(i);
            }
            cm.sendSimple("��ѡ������Ҫ����ע����װ��:\r\n#b" + avail);
    } else if (status == 2) {
        selected = selection - 1;
        var text = "";
        for (var i = 0; i < stats.length; i++) {
            text += "#L" + i + "#" + stats[i] + "#l\r\n";
        }
        cm.sendSimple("��ѡ������Ҫ����ע����װ�� #b#t" + cm.getInventory( - 1).getItem(slot[selected]).getItemId() + "##k װ��\r\n#b" + text);
    } else if (status == 3) {
        statsSel = selection;
        cm.playerMessage("��ǰѡ�� " + selection+"  "+slot[selected]);
        if (selection == 20) {
            cm.sendGetText("��ȷ�������װ���� #b#t" + cm.getInventory( - 1).getItem(slot[selected]).getItemId() + "##k's " + stats[statsSel] + " to?");
	} else {
       cm.sendYesNo("��ȷ����Ҫ����ע����װ����");
        }
    } else if (status == 4) {
	   if(cm.haveItem(4032323,1)){
	//cm.getPlayer().modifyCSPoints(1,-10000)
	cm.gainItem(4032323, -1);
        cm.equipqh(slot[selected], true); 
        cm.sendOk("װ������ע���ɹ���");
	   }else{
        cm.sendOk("#v4032323#����1���޷�������");
	   }
        cm.dispose();
    } else {
        cm.dispose();
    }
}
