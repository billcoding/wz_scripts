importPackage(Packages.tools);
importPackage(Packages.constants);


var HighSmega = 15000000;
var ItemSmega = 15000000;
var Amulet = 15000000;
var Sp = 15000000;



var picked = 0;
var status = -1;
var itemid = -1;
var state = -1;


function start() {
    status = -1;
    action(1, 0, 0);
}


function action(mode, type, selection) {
    if (mode == 1)
        status++;
    else {
        cm.sendOk("лл���٣���ӭ�´�����.");
        cm.dispose();
        return;
    }
    if (status == 0) {
        cm.sendSimple("�˻�ӭ��������!~\r\n���ǵ�����ƷNPC\r\n��Ŀǰ�� #r[" + cm.getMeso() + "]#k  ���\r\n#l��������Ҫʲô����??#k\r\n#l\r\n#L101##b�㲥��#l\r\n#L102##b������#l");
    } else if (status == 1) {
        state = selection;
        if (state == 101) {
            cm.sendSimple("��Ŀǰ�� #r[" + cm.getMeso() + "]#k ���#k \r ����Ҫʲô������??#k \r #L0##i5072000#��Ч������ - 1500���� \r\n#L1##i5076000#�������� - 1500����");
        } else if (state == 102) {
            cm.sendSimple("��Ŀǰ�� #r[" + cm.getMeso() + "]#k ���#k \r #L5##i5130000#����� - 1500����\r\n#L6##i5050001#1ת�������þ��� - 1500����\r\n#L7##i5050002#2ת�������þ��� - 1500����\r\n#L8##i5050003#3ת�������þ��� - 1500����\r\n#L9##i5050004#4ת�������þ��� - 1500����");
        }
    } else if (status == 2) {
        if (state == 101) {
            picked = selection;
            cm.sendGetNumber("������Ҫ����ٸ���??", 1, 1, 100);
        } else if (state == 102) {
            picked = selection;
            cm.sendGetNumber("������Ҫ����ٸ���??", 1, 1, 100);
        }
    } else if (status == 3) {
        tw = selection;
        if (state == 101) {
            if (tw * 0 != -0) {
                cm.sendOk("��ֻ����0���ϵ�����!");
                cm.dispose();
                return;
            }
            if (picked == 0) {
                cm.sendYesNo("��Щ#i5072000# ���� " + tw * HighSmega + " ���, ������ȷ��Ҫ������??");
            }
            if (picked == 1) {
                cm.sendYesNo("��Щ#i5076000# ���� " + tw * ItemSmega + " ���, ������ȷ��Ҫ������??");
            }
            if (picked == 2) {
                cm.sendYesNo("��Щ#i5072000# ���� " + tw * HighSmega + " ���, ������ȷ��Ҫ������??");
            }
            if (picked == 3) {
                cm.sendYesNo("��Щ���齫���� " + tw * RMC + " ���, ������ȷ��Ҫ������??");
            }
            if (picked == 4) {
                cm.sendYesNo("��Щ���齫���� " + tw * EMC + " ���, ������ȷ��Ҫ������??");
            }
        }
        if (state == 102) {
            if (tw * 0 != 0) {
                cm.sendOk("��ֻ����0���ϵ�����!");
                cm.dispose();
                return;
            }
            if (picked == 5) {
                cm.sendYesNo("��Щ#i5130000# ���� " + tw * Amulet + " ���, ������ȷ��Ҫ������??");
            }
            if (picked == 6) {
                cm.sendYesNo("��Щ#i5050001# ���� " + tw * Sp + " ���, ������ȷ��Ҫ������??");
            }
            if (picked == 7) {
                cm.sendYesNo("��Щ#i5050002# ���� " + tw * Sp + " ���, ������ȷ��Ҫ������??");
            }
            if (picked == 8) {
                cm.sendYesNo("��Щ#i5050003# ���� " + tw * Sp + " ���, ������ȷ��Ҫ������??");
            }
            if (picked == 9) {
                cm.sendYesNo("��Щ#i5050004# ���� " + tw * Sp + " ���, ������ȷ��Ҫ������??");
            }
        }
    } else if (status == 4) {
        if (state == 101) {
            if (picked == 0) {
                if (cm.getMeso() >= tw * HighSmega) {
                    cm.gainItem(5072000, tw);
                    cm.gainMeso(-(tw * HighSmega));
                    cm.sendOk("��л�㹺���� #i5072000# ���� " + tw * HighSmega + " ��ң�лл�ݹ˻�ӭ�´�����~~");
                    cm.dispose();
                } else {
                    cm.sendOk("��û���㹻�Ľ��!");
                    cm.dispose();
                }
            }
            if (picked == 1) {
                if (cm.getMeso() >= tw * ItemSmega) {
                    cm.gainItem(5076000, tw);
                    cm.gainMeso(-(tw * ItemSmega));
                    cm.sendOk("��л�㹺���� #i5076000# ���� " + tw * ItemSmega + " ��ң�лл�ݹ˻�ӭ�´�����~~");
                    cm.dispose();
                } else {
                    cm.sendOk("��û���㹻�Ľ��!");
                    cm.dispose();
                }
            }
            if (picked == 2) {
                if (cm.getPlayer().getCSPoints(1) >= tw * SMC) {
                    cm.gainItem(5062002, tw);
                    cm.getPlayer().modifyCSPoints(1, -tw * SMC);
                    cm.dispose();
                } else {
                    cm.sendOk("��û���㹻�ĵ���!");
                    cm.dispose();
                }
            }
            if (picked == 3) {
                if (cm.getPlayer().getCSPoints(1) >= tw * RMC) {
                    cm.gainItem(5062003, tw);
                    cm.getPlayer().modifyCSPoints(1, -tw * RMC);
                    cm.dispose();
                } else {
                    cm.sendOk("��û���㹻�ĵ���!");
                    cm.dispose();
                }
            }
            if (picked == 4) {
                if (cm.getPlayer().getCSPoints(1) >= tw * EMC) {
                    cm.gainItem(5062005, tw);
                    cm.getPlayer().modifyCSPoints(1, -tw * EMC);
                    cm.dispose();
                } else {
                    cm.sendOk("��û���㹻�ĵ���!");
                    cm.dispose();
                }
            }
        }
        if (state == 102) {
            if (picked == 5) {
                if (cm.getMeso() >= tw * Amulet) {
                    cm.gainItem(5130000, tw);
                    cm.gainMeso(-(tw * Amulet));
                    cm.sendOk("��л�㹺���� #i5130000# ���� " + tw * Amulet + " ��ң�лл�ݹ˻�ӭ�´�����~~");
                    cm.dispose();
                } else {
                    cm.sendOk("��û���㹻�Ľ��!");
                    cm.dispose();
                }
            }
            if (picked == 6) {
                if (cm.getMeso() >= tw * Sp) {
                    cm.gainItem(5050001, tw);
                    cm.gainMeso(-(tw * Sp));
                    cm.sendOk("��л�㹺���� #i5050001# ���� " + tw * Sp + " ��ң�лл�ݹ˻�ӭ�´�����~~");
                    cm.dispose();
                } else {
                    cm.sendOk("��û���㹻�Ľ��!");
                    cm.dispose();
                }
            }
            if (picked == 7) {
                if (cm.getMeso() >= tw * Sp) {
                    cm.gainItem(5050002, tw);
                    cm.gainMeso(-(tw * Sp));
                    cm.sendOk("��л�㹺���� #i5050002# ���� " + tw * Sp + " ��ң�лл�ݹ˻�ӭ�´�����~~");
                    cm.dispose();
                } else {
                    cm.sendOk("��û���㹻�Ľ��!");
                    cm.dispose();
                }
            }
            if (picked == 8) {
                if (cm.getMeso() >= tw * Sp) {
                    cm.gainItem(5050003, tw);
                    cm.gainMeso(-(tw * Sp));
                    cm.sendOk("��л�㹺���� #i5050003# ���� " + tw * Sp + " ��ң�лл�ݹ˻�ӭ�´�����~~");
                    cm.dispose();
                } else {
                    cm.sendOk("��û���㹻�Ľ��!");
                    cm.dispose();
                }
            }
            if (picked == 9) {
                if (cm.getMeso() >= tw * Sp) {
                    cm.gainItem(5050004, tw);
                    cm.gainMeso(-(tw * Sp));
                    cm.sendOk("��л�㹺���� #i5050004# ���� " + tw * Sp + " ��ң�лл�ݹ˻�ӭ�´�����~~");
                    cm.dispose();
                } else {
                    cm.sendOk("��û���㹻�Ľ��!");
                    cm.dispose();
                }

            }
        }
    }
}
