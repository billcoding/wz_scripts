/* Author: aaroncsn(MapleSea Like)(Incomplete)
 NPC Name: 		Mr. Do
 Map(s): 		Mu Lung: Mu Lung(2500000000)
 Description: 		Potion Creator
 */

var status = 0;
var selectedType = -1;
var selectedItem = -1;
var item;
var mats;
var matQty;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        cm.dispose();
    }
    if (status == 0 && mode == 1) {
        if (cm.isQuestActive(3821)) {
            cm.forceCompleteQuest(3821);
            cm.sendNext("������ɡ�");
            cm.dispose();
            return;
        }
        var selStr = "���Ǹ���Ŷ��յ��ˡ�����˵˵����Ҫʲô������ #b"
        var options = new Array("��ҩ", "�������");
        for (var i = 0; i < options.length; i++) {
            selStr += "\r\n#L" + i + "# " + options[i] + "#l";
        }
        cm.sendSimple(selStr);
    } else if (status == 1 && mode == 1) {
        selectedType = selection;
        var selStr;
        var items;
        if (selectedType == 0) { //Make a medicine
            cm.sendNext("�������ѧ��ҩ�����һ������ѧϰ��ҩ�䷽��û��ʲô��������ʺ��ˡ�");
            cm.dispose();
            return;
        } else if (selectedType == 1) { //Make a scroll
            selStr = "��Ҫ��Ҫʲô����#b";
            items = new Array("#t2043000#", "#t2043100#", "#t2043200#", "#t2043300#", "#t2043700#", "#t2043800#", "#t2044000#", "#t2044100#", "#t2044200#", "#t2044300#", "#t2044400#", "#t2044500#", "#t2044600#", "#t2044700#", "#t2044800#", "#t2044900##k");
        } else if (selectedType == 2) { //Donate medicine ingredients
            selStr = "ʲô����������е�ҩ�ľ��׳��������Ǻ���Ϣ�������׵�������#b100��#kΪ��λ���������߿�����������ħ�顣��ϸ���������ҩ�ģ� #b";
            items = new Array("Acorn", "Thimble", "Needle Pouch", "Necki Flower", "Necki Swimming Cap", "Broken Piece of Pot", "Ginseng-Boiled Water", "Straw Doll", "Wooden Doll", "Bellflower Root", "100-Year-Old Bellflower", "Old Paper", "Yellow Belt", "Broken Deer Horn", "Red Belt", "Peach Seed", "Mr. Alli's Leather", "Cat Doll", "Mark of the Pirate", "Captain Hat#k");
        } else { //I want to forfeit the restoration of Portrait Scroll...
            cm.dispose();
            return;
        }
        for (var i = 0; i < items.length; i++) {
            selStr += "\r\n#L" + i + "# " + items[i] + "#l";
        }
        cm.sendSimple(selStr);
    } else if (status == 2 && mode == 1) {
        selectedItem = selection;
        if (selectedType == 1) { //Scrolls
            var itemSet = new Array(2043000, 2043100, 2043200, 2043300, 2043700, 2043800, 2044000, 2044100, 2044200, 2044300, 2044400, 2044500, 2044600, 2044700, 2044800, 2044900);
            var matSet = new Array(new Array(4001124, 4010001), new Array(4001124, 4010001), new Array(4001124, 4010001), new Array(4001124, 4010001), new Array(4001124, 4010001), new Array(4001124, 4010001), new Array(4001124, 4010001), new Array(4001124, 4010001), new Array(4001124, 4010001), new Array(4001124, 4010001), new Array(4001124, 4010001), new Array(4001124, 4010001), new Array(4001124, 4010001), new Array(4001124, 4010001), new Array(4001124, 4010001), new Array(4001124, 4010001));
            var matQtySet = new Array(new Array(100, 10), new Array(100, 10), new Array(100, 10), new Array(100, 10), new Array(100, 10), new Array(100, 10), new Array(100, 10), new Array(100, 10), new Array(100, 10), new Array(100, 10), new Array(100, 10), new Array(100, 10), new Array(100, 10), new Array(100, 10), new Array(100, 10), new Array(100, 10));
            item = itemSet[selectedItem];
            mats = matSet[selectedItem];
            matQty = matQtySet[selectedItem];
            var prompt = "����Ҫ�� #t" + item + "#? \r\n����������Ҫ�Ĳ��ϡ�#k";
            if (mats instanceof Array) {
                for (var i = 0; i < mats.length; i++) {
                    prompt += "\r\n#i" + mats[i] + "# " + matQty[i] + " #t" + mats[i] + "#";
                }
            } else {
                prompt += "\r\n#i" + mats + "# " + matQty + " #t" + mats + "#What do you think? Would you like to make on right now?";
            }
            cm.sendYesNo(prompt);
        } else if (selectedType == 2) {
            status = 3;
            var itemSet = new Array(4000276, 4000277, 4000278, 4000279, 4000280, 4000291, 4000292, 4000286, 4000287, 4000293, 4000294, 4000298, 4000284, 4000288, 4000285, 4000282, 4000295, 4000289, 4000296, 4031435);
            item = itemSet[selectedItem];
            var prompt = "��ȷ������Ҫ���� #b100�� #t " + item + "##k";
            cm.sendYesNo(prompt);
        }
    } else if (status == 3 && mode == 1) {
        var complete = false;
        if (mats instanceof Array) {
            for (var i = 0; i < mats.length; i++) {
                if (matQty[i] == 1) {
                    if (!cm.haveItem(mats[i])) {
                        complete = false;
                    }
                } else {
                    var count = 0;
                    var iter = cm.getInventory(4).listById(mats[i]).iterator();
                    while (iter.hasNext()) {
                        count += iter.next().getQuantity();
                    }
                    if (count < matQty[i])
                        complete = false;
                }
            }
        } else {
            var count = 0;
            var iter = cm.getInventory(4).listById(mats).iterator();
            while (iter.hasNext()) {
                count += iter.next().getQuantity();
            }
            if (count < matQty)
                complete = false;
        }
        if (!complete || !cm.canHold(2044900)) {
            cm.sendOk("�����û���㹻�Ĳ��ϡ�");
            cm.dispose();
        } else {
            if (mats instanceof Array) {
                for (var i = 0; i < mats.length; i++) {
                    cm.gainItem(mats[i], -matQty[i]);
                }
            } else {
                cm.gainItem(mats, -matQty);
            }
        }
    }
}