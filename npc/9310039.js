/*
 少林妖僧 -- 入口NPC
 */

var 妖僧 = 10;
function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (status >= 0 && mode == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
            cm.sendSimple("#e\r\n#b是否要挑战武陵妖僧副本? \r\n (每天可挑战10次! 当前已经挑战"+cm.getBossLog('妖僧')+"次)#k \r\n#L0##r我要挑战武陵妖僧#k#l");
        } else if (status == 1) {
            if (selection == 0) {
                var pt = cm.getPlayer().getParty();
                if ( cm.getQuestStatus(8534) != 0 ) {
                    cm.sendOk("你似乎不够资格挑战武陵妖僧！");
                    cm.dispose();
               } else if (cm.getBossLog('妖僧') >= 10) {
                    cm.sendOk("每天只能打10次妖僧！");
                    cm.dispose();
                } else if (cm.getParty() == null) {
                    cm.sendOk("请组队再来找我....");
                    cm.dispose();
                } else if (!cm.isLeader()) {
                    cm.sendOk("请叫你的队长来找我!");
                    cm.dispose();
                } else if (pt.getMembers().size() < 2) {
                    cm.sendOk("需要 3 人以上的组队才能进入！!");
                    cm.dispose();
                } else {
                    var party = cm.getParty().getMembers();
                    var mapId = cm.getMapId();
                    var next = true;
                    var levelValid = 0;
                    var inMap = 0;

                    var it = party.iterator();
                    while (it.hasNext()) {
                        var cPlayer = it.next();
                        if ((cPlayer.getLevel() >= 100 && cPlayer.getLevel() <= 200) || cPlayer.getJobId() == 900) {
                            levelValid += 1;
                        } else {
                            next = false;
                        }
                        if (cPlayer.getMapid() == mapId) {
                            inMap += (cPlayer.getJobId() == 900 ? 3 : 1);
                        }
                    }
                    if ( inMap < 1) {
                        next = false;
                    }
					
                    if (next) {
                        var em = cm.getEventManager("shaoling");
                        if (em == null) {
                            cm.sendOk("当前副本有问题，请联络管理员....");
                        } else {
                            var prop = em.getProperty("state");
                            if (prop.equals("0") || prop == null) {
                                em.startInstance(cm.getParty(), cm.getMap());
                                cm.设置组队BossLog("妖僧");
                                cm.dispose();
                                return;
                            } else {
                                cm.sendOk("里面已经有人在挑战...");
                            }
                        }
                    } else {
                        cm.sendOk("等级尚未达到 #r100#k 或者已经超过 #r200#k");
                    }
                }
                cm.dispose();
            }
        }
    }
}
