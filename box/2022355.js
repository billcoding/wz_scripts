var status = 0;
var ������ƷID = 4000025;
// var properties = [
//     'Str', 'Dex', 'Int', 'Luk',
//     'Hp', 'Mp', 'Watk', 'Matk',
//     'Wdef', 'Mdef', 'Acc', 'Avoid',
//     'Hands', 'Speed', 'Jump', 'Owner'
// ];
//����,����,����,����
//HP,MP,�﹥,ħ��
//����,ħ��,����,�ر�
//�ּ�,����,��Ծ��
//Potential1-3,��Ǳ��,079�ͻ���û�����,�޳�
//����˭(�����������ȼ��ı�ʶ)
//װ������������Ʒ�� , �Լ���ͬƷ����ı��װ�������б� , �Լ����Ե���ֵ
var ���� = {
    "D": {
        ����s: ['Str', 'Dex', 'Int', 'Luk'],
        ����ֵ: [10, 10, 10, 10]
    },
    "C": {
        ����s: ['Str', 'Dex', 'Int', 'Luk'],
        ����ֵ: [20, 20, 20, 20]
    },
    "B": {
        ����s: ['Str', 'Dex', 'Int', 'Luk'],
        ����ֵ: [40, 40, 40, 40]
    },
    "A": {
        ����s: ['Str', 'Dex', 'Int', 'Luk'],
        ����ֵ: [60, 60, 60, 60]
    },
    "S": {
        ����s: ['Str', 'Dex', 'Int', 'Luk', 'Watk', 'Matk'],
        ����ֵ: [80, 80, 80, 80, 80, 80]
    },
    "SS": {
        ����s: ['Str', 'Dex', 'Int', 'Luk', 'Watk', 'Matk', 'Hands'],
        ����ֵ: [100, 100, 100, 100, 100, 100, 100]
    },
    "SSS": {
        ����s: ['Str', 'Dex', 'Int', 'Luk', 'Watk', 'Matk', 'Hands'],
        ����ֵ: [150, 150, 150, 150, 150, 150, 150]
    }
} //;['D', 'C', 'B', 'A', 'S', 'SS', 'SSS'];
//
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
        if (mode == 1) status++;
        if (status == 0) {
            var ii = Packages.server.MapleItemInformationProvider.getInstance();
            var item = cm.getInventory(1).getItem(1);
            var itemId = item.getItemId();
            if (item == null) {
                cm.sendOk("��ǰ������һ��û��װ�� ��");
                cm.dispose();
            }
			            //cm.showEffect(false, "quest/party/clear");
            //cm.playSound(false, "Game/Bird");
           var text = "    #e ���� ! ����#r��˵�е�װ������֮��#k : \r\n";
            text += "�Ƿ�ȷ��ʹ��һö#v4000025#������ǰ���� �� \r\n";
			text += "#bǱ�ܵȼ���Ϊ��D-C-B-A-S-SS-SSS�ߵ� �ȼ�������� ���ή��װ����ʼ����\r\n";
            text += "��ǰ���� �� \r\n";
            text += "#v" + itemId + "#\r\n";
            cm.sendYesNo(text);
        } else if (status == 1) {
            var ii = Packages.server.MapleItemInformationProvider.getInstance();
            if (cm.haveItem(������ƷID, 1)) {
                item = cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy();
                try {
/*                     if (ii.isCash(item.getItemId())) {
                        cm.sendOk("�Բ���,��װ��֧�ּ��� ��");
                        cm.dispose();
                        return;
                    } */
                } catch (e) {
                    cm.dispose();
                    return;
                }
                //��ȡ��ǰ��Ʒ�����еȼ�
                var װ��ͷ = item.getOwner();
                var lv = "",
                    newLv = "";
                var ����s, ����ֵ;
                var ��װ�� = false;
                if (װ��ͷ == "") {
                    //û�м�������װ�� 
                    ��װ�� = true;
                } else {
                    lv = װ��ͷ.substring(0, װ��ͷ.length() - 1);
                }
                newLv = �������ABC();
                if (lv != newLv) {
                    if (��װ��) {
                        // ����׷��
                        ����s = ����[newLv].����s;
                        ����ֵ = ����[newLv].����ֵ;
                        for (var i = 0; i < ����s.length; i++) {
                            var �� = item['get' + ����s[i]]();
                            var �� = �� + parseInt(����ֵ[i]);
                            item['set' + ����s[i]](��);
                        }
                    } else {
                        //replace new property
                        //5 , 10
                        //var opts = getNewProperty(����[lv], ����[newLv]);
                        //��վɵ�����
                        var oldPorps = ����[lv].����s;
                        var oldVals = ����[lv].����ֵ;
                        for (var i = 0; i < oldPorps.length; i++) {
                            var currVal = item['get' + oldPorps[i]]();
                            var oldVal = oldVals[i];
                            item['set' + oldPorps[i]](currVal - parseInt(oldVal));
                        }
                        //�����µ�
                        ����s = ����[newLv].����s;
                        ����ֵ = ����[newLv].����ֵ;
                        for (var i = 0; i < ����s.length; i++) {
                            var �� = item['get' + ����s[i]]();
                            var �� = �� + parseInt(����ֵ[i]);
                            item['set' + ����s[i]](��);
                        }
                    }
                }
                item.setOwner(newLv + "��");
                Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, true);
                Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
                cm.gainItem(������ƷID, -1);
                cm.sendOk("��ϲ,�����ɹ� , �쿴����İ����� ��");
                cm.worldMessage("[װ������]]����ϲ[" + cm.getChar().getName() + "]�ɹ�ʹ����װ����������,���[" + newLv + "]������ ��");
                cm.dispose();
            } else {
                cm.sendOk("�Բ���,��û���㹻��#v" + ������ƷID + "# ��");
                cm.dispose();
                return;
            }
        } else {
            cm.dispose();
        }
    }
}

function �������ABC() {
    //
    //9 8 7 6 3 2 1
    var num = Math.floor(Math.random() * 10000);
    var flag = "D";
    if (num > 1000 && num <= 2000) {
        //C
        flag = "C";
    } else if (num > 2000 && num <= 2700) {
        //B
        flag = "B";
    } else if (num > 2700 && num <= 3300) {
        //A
        flag = "A";
    } else if (num > 3300 && num <= 3600) {
        //S
        flag = "S";
    } else if (num > 3600 && num <= 3800) {
        //SS
        flag = "SS";
    } else if (num > 3800 && num <= 3900) {
        //SSS
        flag = "SSS";
    } else {
        flag = "D";
    }
    return flag;
}