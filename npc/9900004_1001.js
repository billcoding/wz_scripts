

var status = 0;
var jobName;
var job;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.sendOk("�����ܺ�Ŷ~~�����ı��뷨�ǵ���ʱ�����ҡ�ף����ˣ�");
        cm.dispose();
    } else {
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
            cm.sendNext("�ˣ����� #b����Ա#k �ҿ��԰��������תְŶ~~��");
        } else if (status == 1) {
            if(cm.getJob() >= 1000 && cm.getJob() <= 1510){
                cm.sendNext("�ۣ�������ʿ�ŵ�һԱ���Һܸ���Ϊ�����Ŷ������");
                status = 160;
                return;
            }
            if(cm.getJob() >= 2000){
                cm.sendNext("��~~ս��ս��������ְҵŶ~�Һܸ���Ϊ�����Ŷ������");
                status = 163;
                return;
            }
            if (cm.getLevel() < 255 && cm.getJob() == 0) {
                if (cm.getLevel() < 8) {
                    cm.sendNext("�Բ���������Ҫ�ﵽ #b[8��]#k �Ҳ���Ϊ�����");
                    status = 98;
                } else if (cm.getLevel() < 10) {
                    cm.sendYesNo("������Ҫ����ħ��ʦ�ľ�����ȥ��ӡħ��������,#b����Ա#k ������ħ���Կ�,����Ӧ�þ���Ϲ�ȥ֧Ԯ��,�������������ְҵ��ǰ��������������ħ���ľ���,����һ�����ĵ�·,��ô�����Ϊ #bħ��ʦ#k ��");
                    status = 150;
                    
                } else {
                    cm.sendNext("��~~���ֿ���һ�����֣�\r\n��ϲ��ﵽ�� #r[10��]#k  ��ô����ѡ��� #b[��һְҵ]#k �ǣ�");
                    status = 153;
                }
            } else if (cm.getLevel() < 30) {
                cm.sendNext("��ô����ð�ջ���˳���ɡ���Ŭ�����лر�����Ȼ��һ�ж��������׵ġ����㵽�� #r[30��]#k ��ʱ��Ϳ��Խ���#b[�ڶ���תְ]#k��ʱ������������Ŷ��");
                status = 98;
            } else if (cm.getJob() == 400) {
                cm.sendSimple("��~�����ּ����ˣ���ϲ��ﵽ#r[30��]#k ����תְΪһ����\r\n#L0##b�̿�#l    #L1##b����#l#k");
            } else if (cm.getJob() == 100) {
                cm.sendSimple("��~�����ּ����ˣ���ϲ��ﵽ#r[30��]#k ����תְΪһ����\r\n#L2##b����#l    #L3##b��ʿ#l    #L4##bǹսʿ#l#k");
            } else if (cm.getJob() == 200) {
                cm.sendSimple("��~�����ּ����ˣ���ϲ��ﵽ#r[30��]#k ����תְΪһ����\r\n#L5##b����#l    #L6##b��#l    #L7##b��ʦ#l#k");
            } else if (cm.getJob() == 300) {
                cm.sendSimple("��~�����ּ����ˣ���ϲ��ﵽ#r[30��]#k ����תְΪһ����\r\n#L8##b����#l    #L9##b����#l#k");
            } else if (cm.getJob() == 500) {
               // cm.sendSimple("��~�����ּ����ˣ���ϲ��ﵽ#r[30��]#k ����תְΪһ����\r\n#L10##bȭ��#l");
                cm.sendSimple("��~�����ּ����ˣ���ϲ��ﵽ#r[30��]#k ����תְΪһ����\r\n#L10##bȭ��#l   #L11##bǹ��#l");

            } else if (cm.getLevel() < 70) {
                cm.sendNext("��ô����ð�ջ���˳���ɡ���Ŭ�����лر�����Ȼ��һ�ж��������׵ġ����㵽�� #r[70��]#k ��ʱ��Ϳ��Խ���#b[������תְ]#k��ʱ������������Ŷ��");
                status = 98;
            } else if (cm.getJob() == 410) {
                status = 63;
                cm.sendYesNo("��ϲ��ﵽ�� #r[70��]#k �����ھ�Ҫ��� #b[������תְ]#k ��");
            } else if (cm.getJob() == 420) {
                status = 66;
                cm.sendYesNo("��ϲ��ﵽ�� #r[70��]#k �����ھ�Ҫ��� #b[������תְ]#k ��");
            } else if (cm.getJob() == 310) {
                status = 69;
                cm.sendYesNo("��ϲ��ﵽ�� #r[70��]#k �����ھ�Ҫ��� #b[������תְ]#k ��");
            } else if (cm.getJob() == 320) {
                status = 72;
                cm.sendYesNo("��ϲ��ﵽ�� #r[70��]#k �����ھ�Ҫ��� #b[������תְ]#k ��");
            } else if (cm.getJob() == 210) {
                status = 75;
                cm.sendYesNo("��ϲ��ﵽ�� #r[70��]#k �����ھ�Ҫ��� #b[������תְ]#k ��");
            } else if (cm.getJob() == 220) {
                status = 78;
                cm.sendYesNo("��ϲ��ﵽ�� #r[70��]#k �����ھ�Ҫ��� #b[������תְ]#k ��");
            } else if (cm.getJob() == 230) {
                status = 81;
                cm.sendYesNo("��ϲ��ﵽ�� #r[70��]#k �����ھ�Ҫ��� #b[������תְ]#k ��");
            } else if (cm.getJob() == 110) {
                status = 84;
                cm.sendYesNo("��ϲ��ﵽ�� #r[70��]#k �����ھ�Ҫ��� #b[������תְ]#k ��");
            } else if (cm.getJob() == 120) {
                status = 87;
                cm.sendYesNo("��ϲ��ﵽ�� #r[70��]#k �����ھ�Ҫ��� #b[������תְ]#k ��");
            } else if (cm.getJob() == 130) {
                status = 90;
                cm.sendYesNo("��ϲ��ﵽ�� #r[70��]#k �����ھ�Ҫ��� #b[������תְ]#k ��");
            } else if (cm.getJob() == 510) {
                status = 93;
                cm.sendYesNo("��ϲ��ﵽ�� #r[70��]#k �����ھ�Ҫ��� #b[������תְ]#k ��");
            } else if (cm.getJob() == 520) {
                status = 96;
                cm.sendYesNo("��ϲ��ﵽ�� #r[70��]#k �����ھ�Ҫ��� #b[������תְ]#k ��");
            } else if (cm.getLevel() < 120) {
                cm.sendNext("��ô����ð�ջ���˳���ɡ���Ŭ�����лر�����Ȼ��һ�ж��������׵ġ����㵽�� #r[120��]#k ��ʱ��Ϳ��Խ���#b[���Ĵ�תְ]#k��ʱ������������Ŷ��");
                status = 98;
            } else if (cm.getJob() == 411) {
                status = 105;
                cm.sendYesNo("��ϲ��ﵽ�� #r[120��]#k �����ھ�Ҫ��� #b[���Ĵ�תְ]#k ��");
            } else if (cm.getJob() == 421) {
                status = 108;
                cm.sendYesNo("��ϲ��ﵽ�� #r[120��]#k �����ھ�Ҫ��� #b[���Ĵ�תְ]#k ��");
            } else if (cm.getJob() == 311) {
                status = 111;
                cm.sendYesNo("��ϲ��ﵽ�� #r[120��]#k �����ھ�Ҫ��� #b[���Ĵ�תְ]#k ��");
            } else if (cm.getJob() == 321) {
                status = 114;
                cm.sendYesNo("��ϲ��ﵽ�� #r[120��]#k �����ھ�Ҫ��� #b[���Ĵ�תְ]#k ��");
            } else if (cm.getJob() == 211) {
                status = 117;
                cm.sendYesNo("��ϲ��ﵽ�� #r[120��]#k �����ھ�Ҫ��� #b[���Ĵ�תְ]#k ��");
            } else if (cm.getJob() == 221) {
                status = 120;
                cm.sendYesNo("��ϲ��ﵽ�� #r[120��]#k �����ھ�Ҫ��� #b[���Ĵ�תְ]#k ��");
            } else if (cm.getJob() == 231) {
                status = 123;
                cm.sendYesNo("��ϲ��ﵽ�� #r[120��]#k �����ھ�Ҫ��� #b[���Ĵ�תְ]#k ��");
            } else if (cm.getJob() == 111) {
                status = 126;
                cm.sendYesNo("��ϲ��ﵽ�� #r[120��]#k �����ھ�Ҫ��� #b[���Ĵ�תְ]#k ��");
            } else if (cm.getJob() == 121) {
                status = 129;
                cm.sendYesNo("��ϲ��ﵽ�� #r[120��]#k �����ھ�Ҫ��� #b[���Ĵ�תְ]#k ��");
            } else if (cm.getJob() == 131) {
                status = 132;
                cm.sendYesNo("��ϲ��ﵽ�� #r[120��]#k �����ھ�Ҫ��� #b[���Ĵ�תְ]#k ��");
            } else if (cm.getJob() == 511) {
                status = 135;
                cm.sendYesNo("��ϲ��ﵽ�� #r[120��]#k �����ھ�Ҫ��� #b[���Ĵ�תְ]#k ��");
            } else if (cm.getJob() == 521) {
                status = 138;
                cm.sendYesNo("��ϲ��ﵽ�� #r[120��]#k �����ھ�Ҫ��� #b[���Ĵ�תְ]#k ��");
            } else if (cm.getLevel() < 255) {
                cm.sendNext("�˲������Ѿ���������е�תְ��\r\n�����Բ���Ҫ������,����Ҳû������ �۹���������");
                status = 98;
            } else if (cm.getLevel() >= 255) {
                cm.sendOk("#d����... ΰ��� #r[#h #]#k ,���Ѿ�ͨ��һ��������������ս�ĵ�·,���ڳ�Ϊ�˷�����ӿ������.����������������,�� #r[����Ա]#k #d��ӡ��ħ������������,���Ĳ��������ܼ�,����Ҫ�����ĸ���ǿ������������еľ���!"); 
                cm.dispose();
            } else {
                cm.dispose();
            }

        } else if (status == 2) {
            if (selection == 0) {
                jobName = "�̿�";
                job = 410;
            }
            if (selection == 1) {
                jobName = "����";
                job = 420;
            }
            if (selection == 2) {
                jobName = "����";
                job = 110;
            }
            if (selection == 3) {
                jobName = "׼��ʿ";
                job = 120;
            }
            if (selection == 4) {
                jobName = "ǹսʿ";
                job = 130;
            }
            if (selection == 5) {
                jobName = "���׷�ʦ";
                job = 220;
            }
            if (selection == 6) {
                jobName = "�𶾷�ʦ";
                job = 210;
            }
            if (selection == 7) {
                jobName = "��ʦ";
                job = 230;
            }
            if (selection == 8) {
                jobName = "����";
                job = 310;
            }
            if (selection == 9) {
                jobName = "����";
                job = 320;
            }
            if (selection == 10) {
                jobName = "ȭ��";
                job = 510;
            }
            if (selection == 11) {
                jobName = "��ǹ��";
                job = 520;
            }
            cm.sendYesNo("�����ѡ��Ŷ��ȷ��Ҫ��Ϊһ�� #b[" + jobName + "] #k��"); 
                        
                        
        } else if (status == 3) {
            cm.changeJob(job);
            if (cm.getJob() == 410) {
            } else if (cm.getJob() == 420) {
                cm.serverNotice("[����תְϵͳ]: ��ϲ [" + cm.getPlayer().getName() + "] ��NPC������Ա ����תְ�ɹ���");
            } else if (cm.getJob() == 110) {
                cm.serverNotice("[����תְϵͳ]: ��ϲ [" + cm.getPlayer().getName() + "] ��NPC������Ա ����תְ�ɹ���");
            } else if (cm.getJob() == 120) {
                cm.serverNotice("[����תְϵͳ]: ��ϲ [" + cm.getPlayer().getName() + "] ��NPC������Ա ����תְ�ɹ���");
            } else if (cm.getJob() == 130) {
                cm.serverNotice("[����תְϵͳ]: ��ϲ [" + cm.getPlayer().getName() + "] ��NPC������Ա ����תְ�ɹ���");
            } else if (cm.getJob() == 220) {
                cm.serverNotice("[����תְϵͳ]: ��ϲ [" + cm.getPlayer().getName() + "] ��NPC������Ա ����תְ�ɹ���");
            } else if (cm.getJob() == 210) {
                cm.serverNotice("[����תְϵͳ]: ��ϲ [" + cm.getPlayer().getName() + "] ��NPC������Ա ����תְ�ɹ���");
            } else if (cm.getJob() == 230) {
                cm.serverNotice("[����תְϵͳ]: ��ϲ [" + cm.getPlayer().getName() + "] ��NPC������Ա ����תְ�ɹ���");
            } else if (cm.getJob() == 310) {
                cm.serverNotice("[����תְϵͳ]: ��ϲ [" + cm.getPlayer().getName() + "] ��NPC������Ա ����תְ�ɹ���");
            } else if (cm.getJob() == 320) {
                cm.serverNotice("[����תְϵͳ]: ��ϲ [" + cm.getPlayer().getName() + "] ��NPC������Ա ����תְ�ɹ���");
            } else if (cm.getJob() == 510) {
                cm.serverNotice("[����תְϵͳ]: ��ϲ [" + cm.getPlayer().getName() + "] ��NPC������Ա ����תְ�ɹ���");
            } else if (cm.getJob() == 520) {
                cm.serverNotice("[����תְϵͳ]: ��ϲ [" + cm.getPlayer().getName() + "] ��NPC������Ա ����תְ�ɹ���");
            }

            cm.sendOk("תְ�ɹ������Ͷ�����������ǿ���ʱ��ǵ�������Ŷ��");
            cm.dispose();

        } else if (status == 61) {
            if (cm.getJob() == 410) {
                status = 63;
                cm.sendYesNo("#d��ϲ��ﵽ�� #r[XXX��]#k #d,�����ھ�Ҫ��� #r[��XXX��תְ]#k ��");
            } else if (cm.getJob() == 420) {
                status = 66;
                cm.sendYesNo("#d��ϲ��ﵽ�� #r[XXX��]#k #d,�����ھ�Ҫ��� #r[��XXX��תְ]#k ��");
            } else if (cm.getJob() == 310) {
                status = 69;
                cm.sendYesNo("#d��ϲ��ﵽ�� #r[XXX��]#k #d,�����ھ�Ҫ��� #r[��XXX��תְ]#k ��");
            } else if (cm.getJob() == 320) {
                status = 72;
                cm.sendYesNo("#d��ϲ��ﵽ�� #r[XXX��]#k #d,�����ھ�Ҫ��� #r[��XXX��תְ]#k ��");
            } else if (cm.getJob() == 210) {
                status = 75;
                cm.sendYesNo("#d��ϲ��ﵽ�� #r[XXX��]#k #d,�����ھ�Ҫ��� #r[��XXX��תְ]#k ��");
            } else if (cm.getJob() == 220) {
                status = 78;
                cm.sendYesNo("#d��ϲ��ﵽ�� #r[XXX��]#k #d,�����ھ�Ҫ��� #r[��XXX��תְ]#k ��");
            } else if (cm.getJob() == 230) {
                status = 81;
                cm.sendYesNo("#d��ϲ��ﵽ�� #r[XXX��]#k #d,�����ھ�Ҫ��� #r[��XXX��תְ]#k ��");
            } else if (cm.getJob() == 110) {
                status = 84;
                cm.sendYesNo("#d��ϲ��ﵽ�� #r[XXX��]#k #d,�����ھ�Ҫ��� #r[��XXX��תְ]#k ��");
            } else if (cm.getJob() == 120) {
                status = 87;
                cm.sendYesNo("#d��ϲ��ﵽ�� #r[XXX��]#k #d,�����ھ�Ҫ��� #r[��XXX��תְ]#k ��");
            } else if (cm.getJob() == 130) {
                status = 90;
                cm.sendYesNo("#d��ϲ��ﵽ�� #r[XXX��]#k #d,�����ھ�Ҫ��� #r[��XXX��תְ]#k ��");
            } else if (cm.getJob() == 510) {
                status = 93;
                cm.sendYesNo("#d��ϲ��ﵽ�� #r[XXX��]#k #d,�����ھ�Ҫ��� #r[��XXX��תְ]#k ��");
            } else if (cm.getJob() == 520) {
                status = 960;
                cm.sendYesNo("#d��ϲ��ﵽ�� #r[XXX��]#k #d,�����ھ�Ҫ��� #r[��XXX��תְ]#k ��");
            } else { 
                cm.dispose();
            }

        } else if (status == 64) {
            cm.changeJob(411);
            cm.sendOk("תְ�ɹ������Ͷ�����������ǿ���ʱ��ǵ�������Ŷ��");
            cm.serverNotice("[����תְϵͳ]: ��ϲ [" + cm.getPlayer().getName() + "] ��NPC������Ա ����תְ�ɹ���");
            cm.dispose();
        } else if (status == 67) {
            cm.changeJob(421);
            cm.sendOk("תְ�ɹ������Ͷ�����������ǿ���ʱ��ǵ�������Ŷ��");
            cm.serverNotice("[����תְϵͳ]: ��ϲ [" + cm.getPlayer().getName() + "] ��NPC������Ա ����תְ�ɹ���");
            cm.dispose();
        } else if (status == 70) {
            cm.changeJob(311);
            cm.sendOk("תְ�ɹ������Ͷ�����������ǿ���ʱ��ǵ�������Ŷ��");
            cm.serverNotice("[����תְϵͳ]: ��ϲ [" + cm.getPlayer().getName() + "] ��NPC������Ա ����תְ�ɹ���");
            cm.dispose();
        } else if (status == 73) {
            cm.changeJob(321);
            cm.sendOk("תְ�ɹ������Ͷ�����������ǿ���ʱ��ǵ�������Ŷ��");
            cm.serverNotice("[����תְϵͳ]: ��ϲ [" + cm.getPlayer().getName() + "] ��NPC������Ա ����תְ�ɹ���");
            cm.dispose();
        } else if (status == 76) {
            cm.changeJob(211);
            cm.sendOk("תְ�ɹ������Ͷ�����������ǿ���ʱ��ǵ�������Ŷ��");
            cm.serverNotice("[����תְϵͳ]: ��ϲ [" + cm.getPlayer().getName() + "] ��NPC������Ա ����תְ�ɹ���");
            cm.dispose();
        } else if (status == 79) {
            cm.changeJob(221);
            cm.sendOk("תְ�ɹ������Ͷ�����������ǿ���ʱ��ǵ�������Ŷ��");
            cm.serverNotice("[����תְϵͳ]: ��ϲ [" + cm.getPlayer().getName() + "] ��NPC������Ա ����תְ�ɹ���");
            cm.dispose();
        } else if (status == 82) {
            cm.changeJob(231);
            cm.sendOk("תְ�ɹ������Ͷ�����������ǿ���ʱ��ǵ�������Ŷ��");
            cm.serverNotice("[����תְϵͳ]: ��ϲ [" + cm.getPlayer().getName() + "] ��NPC������Ա ����תְ�ɹ���");
            cm.dispose();
        } else if (status == 85) {
            cm.changeJob(111);
            cm.sendOk("תְ�ɹ������Ͷ�����������ǿ���ʱ��ǵ�������Ŷ��");
            cm.serverNotice("[����תְϵͳ]: ��ϲ [" + cm.getPlayer().getName() + "] ��NPC������Ա ����תְ�ɹ���");
            cm.dispose();
        } else if (status == 88) {
            cm.changeJob(121);
            cm.sendOk("תְ�ɹ������Ͷ�����������ǿ���ʱ��ǵ�������Ŷ��");
            cm.serverNotice("[����תְϵͳ]: ��ϲ [" + cm.getPlayer().getName() + "] ��NPC������Ա ����תְ�ɹ���");
            cm.dispose();
        } else if (status == 91) {
            cm.changeJob(131);
            cm.sendOk("תְ�ɹ������Ͷ�����������ǿ���ʱ��ǵ�������Ŷ��");
            cm.serverNotice("[����תְϵͳ]: ��ϲ [" + cm.getPlayer().getName() + "] ��NPC������Ա ����תְ�ɹ���");
        } else if (status == 94) {
            cm.changeJob(511);
            cm.sendOk("תְ�ɹ������Ͷ�����������ǿ���ʱ��ǵ�������Ŷ��");
            cm.serverNotice("[����תְϵͳ]: ��ϲ [" + cm.getPlayer().getName() + "] ��NPC������Ա ����תְ�ɹ���");
        } else if (status == 97) {
            cm.changeJob(521);
            cm.sendOk("תְ�ɹ������Ͷ�����������ǿ���ʱ��ǵ�������Ŷ��");
            cm.serverNotice("[����תְϵͳ]: ��ϲ [" + cm.getPlayer().getName() + "] ��NPC������Ա ����תְ�ɹ���");
            cm.dispose();
        } else if (status == 99) {
            cm.sendOk("�����ܺ�Ŷ~~���Ͱɣ��ټ���");
            cm.dispose();

        } else if (status == 102) {
            if (cm.getJob() == 411) {
                status = 105;
                cm.sendYesNo("#d��ϲ��ﵽ�� #r[XXXX��]#k #d,�����ھ�Ҫ��� #r[��XXXX��תְ]#k ��");
            } else if (cm.getJob() == 421) {
                status = 108;
                cm.sendYesNo("#d��ϲ��ﵽ�� #r[XXXX��]#k #d,�����ھ�Ҫ��� #r[��XXXX��תְ]#k ��");
            } else if (cm.getJob() == 311) {
                status = 111;
                cm.sendYesNo("#d��ϲ��ﵽ�� #r[XXXX��]#k #d,�����ھ�Ҫ��� #r[��XXXX��תְ]#k ��");
            } else if (cm.getJob() == 321) {
                status = 114;
                cm.sendYesNo("#d��ϲ��ﵽ�� #r[XXXX��]#k #d,�����ھ�Ҫ��� #r[��XXXX��תְ]#k ��");
            } else if (cm.getJob() == 211) {
                status = 117;
                cm.sendYesNo("#d��ϲ��ﵽ�� #r[XXXX��]#k #d,�����ھ�Ҫ��� #r[��XXXX��תְ]#k ��");
            } else if (cm.getJob() == 221) {
                status = 120;
                cm.sendYesNo("#d��ϲ��ﵽ�� #r[XXXX��]#k #d,�����ھ�Ҫ��� #r[��XXXX��תְ]#k ��");
            } else if (cm.getJob() == 231) {
                status = 123;
                cm.sendYesNo("#d��ϲ��ﵽ�� #r[XXXX��]#k #d,�����ھ�Ҫ��� #r[��XXXX��תְ]#k ��");
            } else if (cm.getJob() == 111) {
                status = 126;
                cm.sendYesNo("#d��ϲ��ﵽ�� #r[XXXX��]#k #d,�����ھ�Ҫ��� #r[��XXXX��תְ]#k ��");
            } else if (cm.getJob() == 121) {
                status = 129;
                cm.sendYesNo("#d��ϲ��ﵽ�� #r[XXXX��]#k #d,�����ھ�Ҫ��� #r[��XXXX��תְ]#k ��");
            } else if (cm.getJob() == 131) {
                status = 132;
                cm.sendYesNo("#d��ϲ��ﵽ�� #r[XXXX��]#k #d,�����ھ�Ҫ��� #r[��XXXX��תְ]#k ��");
            } else if (cm.getJob() == 511) {
                status = 135;
                cm.sendYesNo("#d��ϲ��ﵽ�� #r[XXXX��]#k #d,�����ھ�Ҫ��� #r[��XXXX��תְ]#k ��");
            } else if (cm.getJob() == 521) {
                status = 137;
                cm.sendYesNo("#d��ϲ��ﵽ�� #r[XXXX��]#k #d,�����ھ�Ҫ��� #r[��XXXX��תְ]#k ��");
            } else { 
                cm.dispose();
            }


        } else if (status == 106) {
            cm.changeJob(412);
            cm.sendOk("תְ�ɹ������Ͷ�����������ǿ���ʱ��ǵ�������Ŷ��");
            cm.serverNotice("[����תְϵͳ]: ��ϲ [" + cm.getPlayer().getName() + "] ��NPC������Ա ����תְ�ɹ���");
            
    cm.teachSkill(4120002,0,10);//�ٶ���
    cm.teachSkill(4120005,0,10);//��Һ
    cm.teachSkill(4121000,0,10);//��ʿ
    cm.teachSkill(4121003,0,10);//����
    cm.teachSkill(4121004,0,10);//���߷���
    cm.teachSkill(4121006,0,10);//��������
    cm.teachSkill(4121007,0,10);//�����������
    cm.teachSkill(4121008,0,10);//���߳��
    cm.teachSkill(4121009,0,5);
            // cm.setLevel(121);
            cm.dispose();
        } else if (status == 109) {
            cm.changeJob(422);
            cm.sendOk("תְ�ɹ������Ͷ�����������ǿ���ʱ��ǵ�������Ŷ��");
            cm.serverNotice("[����תְϵͳ]: ��ϲ [" + cm.getPlayer().getName() + "] ��NPC������Ա ����תְ�ɹ���");
           
    cm.teachSkill(4220002,0,10);
    cm.teachSkill(4220005,0,10);
    cm.teachSkill(4221000,0,10);
    cm.teachSkill(4221001,0,10);
    cm.teachSkill(4221003,0,10);
    cm.teachSkill(4221004,0,10);
    cm.teachSkill(4221006,0,10);
    cm.teachSkill(4221007,0,10);
    cm.teachSkill(4221008,0,5);
            // cm.setLevel(121);
            cm.dispose();
        } else if (status == 112) {
            cm.changeJob(312);
            cm.sendOk("תְ�ɹ������Ͷ�����������ǿ���ʱ��ǵ�������Ŷ��");
            cm.serverNotice("[����תְϵͳ]: ��ϲ [" + cm.getPlayer().getName() + "] ��NPC������Ա ����תְ�ɹ���");
            
    cm.teachSkill(3120005,0,10);
    cm.teachSkill(3121000,0,10);
    cm.teachSkill(3121002,0,10);
    cm.teachSkill(3121003,0,10);
    cm.teachSkill(3121004,0,10);
    cm.teachSkill(3121006,0,10);
    cm.teachSkill(3121007,0,10);
    cm.teachSkill(3121008,0,10);
    cm.teachSkill(3121009,0,5);	
            // cm.setLevel(121);
            cm.dispose();
        } else if (status == 115) {
            cm.changeJob(322);
            cm.sendOk("תְ�ɹ������Ͷ�����������ǿ���ʱ��ǵ�������Ŷ��");
            cm.serverNotice("[����תְϵͳ]: ��ϲ [" + cm.getPlayer().getName() + "] ��NPC������Ա ����תְ�ɹ���");
            
    cm.teachSkill(3220004,0,10);
    cm.teachSkill(3221000,0,10);
    cm.teachSkill(3221001,0,10);
    cm.teachSkill(3221002,0,10);
    cm.teachSkill(3221003,0,10);
    cm.teachSkill(3221005,0,10);
    cm.teachSkill(3221006,0,10);
    cm.teachSkill(3221007,0,10);
    cm.teachSkill(3221008,0,5);
            // cm.setLevel(121);
            cm.dispose();
        } else if (status == 118) {
            cm.changeJob(212);
            cm.sendOk("תְ�ɹ������Ͷ�����������ǿ���ʱ��ǵ�������Ŷ��");
            cm.serverNotice("[����תְϵͳ]: ��ϲ [" + cm.getPlayer().getName() + "] ��NPC������Ա ����תְ�ɹ���");
            
    cm.teachSkill(2121000,0,10);
    cm.teachSkill(2121001,0,10);
    cm.teachSkill(2121002,0,10);
    cm.teachSkill(2121003,0,10);
    cm.teachSkill(2121004,0,10);
    cm.teachSkill(2121005,0,10);
    cm.teachSkill(2121006,0,10);
    cm.teachSkill(2121007,0,10);
    cm.teachSkill(2121008,0,5);
            // cm.setLevel(121);
            cm.dispose();
        } else if (status == 121) {
            cm.changeJob(222);
            cm.sendOk("תְ�ɹ������Ͷ�����������ǿ���ʱ��ǵ�������Ŷ��");
            cm.serverNotice("[����תְϵͳ]: ��ϲ [" + cm.getPlayer().getName() + "] ��NPC������Ա ����תְ�ɹ���");
            
    cm.teachSkill(2221000,0,10);
    cm.teachSkill(2221001,0,10);
    cm.teachSkill(2221002,0,10);
    cm.teachSkill(2221003,0,10);
    cm.teachSkill(2221004,0,10);
    cm.teachSkill(2221005,0,10);
    cm.teachSkill(2221006,0,10);
    cm.teachSkill(2221007,0,10);
    cm.teachSkill(2221008,0,5);
            // cm.setLevel(121);
            cm.dispose();
        } else if (status == 124) {
            cm.changeJob(232);
            cm.sendOk("תְ�ɹ������Ͷ�����������ǿ���ʱ��ǵ�������Ŷ��");
            cm.serverNotice("[����תְϵͳ]: ��ϲ [" + cm.getPlayer().getName() + "] ��NPC������Ա ����תְ�ɹ���");
            
    cm.teachSkill(2321000,0,10);
    cm.teachSkill(2321001,0,10);
    cm.teachSkill(2321002,0,10);
    cm.teachSkill(2321003,0,10);
    cm.teachSkill(2321004,0,10);
    cm.teachSkill(2321005,0,10);
    cm.teachSkill(2321006,0,10);
    cm.teachSkill(2321007,0,10);
    cm.teachSkill(2321008,0,10);
    cm.teachSkill(2321009,0,5);
            // cm.setLevel(121);
            cm.dispose();
        } else if (status == 127) {
            cm.changeJob(112);
            cm.sendOk("תְ�ɹ������Ͷ�����������ǿ���ʱ��ǵ�������Ŷ��");
            cm.serverNotice("[����תְϵͳ]: ��ϲ [" + cm.getPlayer().getName() + "] ��NPC������Ա ����תְ�ɹ���");
            
    cm.teachSkill(1120003,0,10);
    cm.teachSkill(1120004,0,10);
    cm.teachSkill(1120005,0,10);
    cm.teachSkill(1121000,0,10);
    cm.teachSkill(1121001,0,10);
    cm.teachSkill(1121002,0,10);
    cm.teachSkill(1121006,0,10);
    cm.teachSkill(1121008,0,10);
    cm.teachSkill(1121010,0,10);
    cm.teachSkill(1121011,0,5);
            // cm.setLevel(121);
            cm.dispose();
        } else if (status == 130) {
            cm.changeJob(122);
            cm.sendOk("תְ�ɹ������Ͷ�����������ǿ���ʱ��ǵ�������Ŷ��");
            cm.serverNotice("[����תְϵͳ]: ��ϲ [" + cm.getPlayer().getName() + "] ��NPC������Ա ����תְ�ɹ���");
            
    cm.teachSkill(1220005,0,10);
    cm.teachSkill(1220006,0,10);
    cm.teachSkill(1220010,0,10);
    cm.teachSkill(1221000,0,10);
    cm.teachSkill(1221001,0,10);
    cm.teachSkill(1221002,0,10);
    cm.teachSkill(1221003,0,10);
    cm.teachSkill(1221004,0,10);
    cm.teachSkill(1221007,0,10);
    cm.teachSkill(1221009,0,10);
    cm.teachSkill(1221011,0,10);
    cm.teachSkill(1221012,0,5);
            // cm.setLevel(121);
            cm.dispose();
        } else if (status == 133) {
            cm.changeJob(132);
            cm.sendOk("תְ�ɹ������Ͷ�����������ǿ���ʱ��ǵ�������Ŷ��");
            cm.serverNotice("[����תְϵͳ]: ��ϲ [" + cm.getPlayer().getName() + "] ��NPC������Ա ����תְ�ɹ���");
            
    cm.teachSkill(1320005,0,10);
    cm.teachSkill(1320006,0,10);
    cm.teachSkill(1320008,0,10);
    cm.teachSkill(1320009,0,10);
    cm.teachSkill(1321000,0,10);
    cm.teachSkill(1321001,0,10);
    cm.teachSkill(1321002,0,10);
    cm.teachSkill(1321003,0,10);
    cm.teachSkill(1321007,0,10);
    cm.teachSkill(1321010,0,5);
            // cm.setLevel(121);
            cm.dispose();
        } else if (status == 136) {
            cm.changeJob(512);
            cm.sendOk("תְ�ɹ������Ͷ�����������ǿ���ʱ��ǵ�������Ŷ��");
            cm.serverNotice("[����תְϵͳ]: ��ϲ [" + cm.getPlayer().getName() + "] ��NPC������Ա ����תְ�ɹ���");
            
    cm.teachSkill(5121000,0,10);
    cm.teachSkill(5121001,0,10);
    cm.teachSkill(5121002,0,10);
    cm.teachSkill(5121003,0,10);
    cm.teachSkill(5121004,0,10);
    cm.teachSkill(5121005,0,10);
    cm.teachSkill(5121007,0,10);
    cm.teachSkill(5121008,0,5);
    cm.teachSkill(5121009,0,10);
    cm.teachSkill(5121010,0,10);
            // cm.setLevel(121);
            cm.dispose();
        } else if (status == 139) {
            cm.changeJob(522);
            cm.sendOk("תְ�ɹ������Ͷ�����������ǿ���ʱ��ǵ�������Ŷ��");
            cm.serverNotice("[����תְϵͳ]: ��ϲ [" + cm.getPlayer().getName() + "] ��NPC������Ա ����תְ�ɹ���");
            
    cm.teachSkill(5220001,0,10);
    cm.teachSkill(5220002,0,10);
    cm.teachSkill(5220011,0,10);
    cm.teachSkill(5221000,0,10);
    cm.teachSkill(5221003,0,10);
    cm.teachSkill(5221004,0,10);
    cm.teachSkill(5221006,0,10);
    cm.teachSkill(5221007,0,10);
    cm.teachSkill(5221008,0,10);
    cm.teachSkill(5221009,0,10);
    cm.teachSkill(5221010,0,5);
            // cm.setLevel(121);
            cm.dispose();
        } else if (status == 151) {
            if (cm.c.getPlayer().getInt() >= 4) {
                cm.teachSkill(2000000,0,16); //Improving MP Recovery
                cm.teachSkill(2000001,0,10); //Improving Max MP Increase
                cm.teachSkill(2001002,0,20); //Magic Guard
                cm.teachSkill(2001003,0,20); //Magic Armor
                cm.teachSkill(2001004,0,20); //Energy Bolt
                cm.teachSkill(2001005,0,20); //Magic Claw
                cm.changeJob(200);
                cm.sendOk("תְ�ɹ���ϣ�����Ϊ��ɫ�� #b[ħ��ʦ]#k ��");
                cm.serverNotice("[����תְϵͳ]: ��ϲ [" + cm.getPlayer().getName() + "] ��NPC������Ա ����תְ�ɹ���");
                cm.dispose();
            } else {
                cm.sendOk("��û�з�����С����: #b[20 ����]#k ��");
                cm.dispose();
            }
            
        } else if (status == 154) {
            //cm.sendSimple("��ô��~~������ѡ��һ������ϲ����ְҵ�ɣ�#b\r\n#L0#սʿ#l  #L1#ħ��ʦ#l  #L2#������#l  #L3#����#l#k");
            cm.sendSimple("��ô��~~������ѡ��һ������ϲ����ְҵ�ɣ�#b\r\n#L0#սʿ#l  #L1#ħ��ʦ#l  #L2#������#l  #L3#����#l  #L4#����#l#k");


        } else if (status == 155) {
            if (selection == 0) {
                jobName = "սʿ";
                job = 100;
            }
            if (selection == 1) {
                jobName = "ħ��ʦ";
                job = 200;
            }
            if (selection == 2) {
                jobName = "������";
                job = 300;
            }
            if (selection == 3) {
                jobName = "����";
                job = 400;
            }
            if (selection == 4) {
                jobName = "����";
                job = 500;
            }
            cm.sendYesNo("�����ѡ��Ŷ��ȷ��Ҫ��Ϊһ�� #b[" + jobName + "] #k��"); 
        } else if (status == 156) {
                cm.changeJob(job);
                cm.sendOk("תְ�ɹ������Ͷ�����������ǿ���ʱ��ǵ�������Ŷ��");
                cm.serverNotice("[����תְϵͳ]: ��ϲ [" + cm.getPlayer().getName() + "] ��NPC������Ա ����תְ�ɹ���");
                cm.dispose();
            
        } else if (status == 161) {
            if(cm.getJob() == 1000 && cm.getLevel()>=10){
                //cm.sendSimple("�������㻹��һ��������,��ѡ��һ���ʺ��Լ���ְҵ��!#b\r\n#L0#����ʿ#l #L1#����ʿ#l #L2#����ʹ��#l #L3#ҹ����#l #L4#��Ϯ��#l#k");
				cm.sendYesNo("��ʿ����ʱ�رղ���תְ��");
            }else if(parseInt(cm.getJob() / 100) >10 && cm.getLevel()>=30 && cm.getJob()%100 == 0){
                cm.sendYesNo("�����ȷ��Ҫ���еڶ���תְ����");
            }else if(parseInt(cm.getJob() / 100) >10 && cm.getLevel()>=70 && cm.getJob()%10 == 0){
                cm.sendYesNo("�����ȷ��Ҫ���е�����תְ����");
            }else{
                cm.sendOk("��Ŀǰ����������ʹ���ҵķ���Ŷ!");
                cm.dispose();
            }
        } else if (status == 162) {
            if(cm.getJob() == 1000 && cm.getLevel()>=10){
                if (selection == 0) {
                    job = 1100;
                } else if (selection == 1) {
                    job = 1200;
                } else if (selection == 2) {
                    job = 1300;
                } else if (selection == 3) {
                    job = 1400;
                } else if (selection == 4) {
                    job = 1500;
                }
                cm.changeJob(job);
                //cm.gainItem(1142066,1);
                cm.serverNotice("[����תְϵͳ]: ��ϲ [" + cm.getPlayer().getName() + "] ��NPC������Ա ����תְΪ��ʿ��ְҵ��");
                cm.sendOk("תְ�ɹ������Ͷ�����������ǿ���ʱ��ǵ�������Ŷ��");
            } else if(parseInt(cm.getJob() / 100) >10 && cm.getLevel()>=30 && cm.getJob()%100 == 0){
                cm.changeJob(cm.getJob()+10);
                //cm.gainItem(1142067,1);
                cm.serverNotice("[����תְϵͳ]: ��ϲ [" + cm.getPlayer().getName() + "] ��NPC������Ա ����תְΪ��ʿ��ְҵ��");
                cm.sendOk("תְ�ɹ������Ͷ�����������ǿ���ʱ��ǵ�������Ŷ��");
            } else if(parseInt(cm.getJob() / 100) >10 && cm.getLevel()>=70 && cm.getJob()%10 == 0){
                //cm.gainItem(1142068,1);
                cm.getPlayer().gainAp(5);
                cm.changeJob(cm.getJob()+1);
                cm.serverNotice("[����תְϵͳ]: ��ϲ [" + cm.getPlayer().getName() + "] ��NPC������Ա ����תְΪ��ʿ��ְҵ��");
                cm.sendOk("תְ�ɹ���ϣ�����Ժ��ð��֮·˳��!");
            }
            cm.dispose();
        } else if (status == 164) {
            if(cm.getJob() == 2000 && cm.getLevel() >=10){
                cm.sendYesNo("ս��ս������\r\n�������㻹��һ��սͯ,��ȷ��Ҫ���е�һ��תְ��");
            } else if(cm.getJob() == 2100 && cm.getLevel() >=30) {
                cm.sendYesNo("ս��ս�����������ȷ��Ҫ���еڶ���תְ����");
            } else if(cm.getJob() == 2110 && cm.getLevel() >=70){
                cm.sendYesNo("ս��ս�����������ȷ��Ҫ���е�����תְ����");
            } else if(cm.getJob() == 2111 && cm.getLevel() >=120) {
                cm.sendYesNo("ս��ս�����������ȷ��Ҫ���е��Ĵ�תְ����");
            } else if(cm.getJob() == 2112 && cm.getLevel() >120) {
                cm.sendOk("���Ѿ���������е�תְ�������������Ͱɣ���");
            } else {
                cm.sendOk("������Ŀǰ���������һ�����Ϊ������Ŷ�����Ͱɣ�");
                cm.dispose();
            }
        } else if (status == 165) {
            if(cm.getJob() == 2000 && cm.getLevel() >=10){
                cm.changeJob(2100);
                //cm.gainItem(1142129,1);
                //cm.gainItem(1442077,1);
                //cm.gainItem(2000022,50);
                //cm.gainItem(2000023,50);
                cm.teachSkill(21000000,0,10);
                cm.teachSkill(21001003,0,20);
                cm.serverNotice("[����תְϵͳ]: ��ϲ [" + cm.getPlayer().getName() + "] ��NPC������Ա ����תְΪս��ְҵ��");
                cm.sendOk("תְ�ɹ������Ͷ�����������ǿ���ʱ��ǵ�������Ŷ��");
            } else if(cm.getJob() == 2100 && cm.getLevel() >=30){
                cm.changeJob(2110);
                //cm.gainItem(1142130,1);
                //cm.gainItem(1442078,1);
                cm.teachSkill(21100000,0,20);
                cm.teachSkill(21100002,0,20);
                cm.teachSkill(21100004,0,20);
                cm.teachSkill(21100005,0,20);
                cm.serverNotice("[����תְϵͳ]: ��ϲ [" + cm.getPlayer().getName() + "] ��NPC������Ա ����תְΪս��ְҵ��");
                cm.sendOk("תְ�ɹ������Ͷ�����������ǿ���ʱ��ǵ�������Ŷ��");
            } else if(cm.getJob() == 2110 && cm.getLevel() >=70){
                //cm.gainItem(1142131,1);
                cm.getPlayer().gainAp(5);
                cm.changeJob(2111);
                cm.teachSkill(21110002,0,20);
                cm.serverNotice("[����תְϵͳ]: ��ϲ [" + cm.getPlayer().getName() + "] ��NPC������Ա ����תְΪս��ְҵ��");
                cm.sendOk("תְ�ɹ������Ͷ�����������ǿ���ʱ��ǵ�������Ŷ��");
            } else if(cm.getJob() == 2111 && cm.getLevel() >=120){
                //cm.gainItem(1142132,1);
                cm.getPlayer().gainAp(5);
                cm.teachSkill(21121000,0,30);
                cm.teachSkill(21120004,0,30);
                cm.teachSkill(21120005,0,30);
                cm.teachSkill(21120006,0,30);
                cm.teachSkill(21120007,0,30);
                cm.changeJob(2112);
                cm.serverNotice("[����תְϵͳ]: ��ϲ [" + cm.getPlayer().getName() + "] ��NPC������Ա ����תְΪս��ְҵ��");
                cm.sendOk("תְ�ɹ���ϣ�����Ժ��ð��֮·˳����");
            }
            cm.dispose();
        } else {
            cm.dispose();
        }  

    }
}
