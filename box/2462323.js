/* var ��ͷ = "#fUI/Initials/Button/Button9/mouseOver/0#";
var ��ͷ1 = "#fUI/GuildMark/Mark/Etc/00009004/3#";
var ��ͷ2 = "#fUI/GuildMark.img/Mark/Etc/00009001/11#";
var ��ͷ3 = "#fUI/GuildMark.img/Mark/Etc/00009001/7#";
 */
var ���� = "#fEffect/CharacterEff/1114000/2/0#";
//var ���� = "#fEffect/CharacterEff/1022223/4/0#";
//var ��ɫ��ͷ = "#fUI/UIWindow/Quest/icon6/7#";
//var ������ = "#fUI/UIWindow/Quest/icon3/6#";
var ��ɫ��ͷ = "#fUI/UIWindow/Quest/icon2/7#";



function start() {
    status = -1;
    action(1, 0, 0);
}

function ȡ�����(a, b) {
    if (!(typeof (a) === "number" && typeof (b) === "number")) {
        return 0;
    }
    if (a < 0) {
        a = 0;
    }
    if (b < a) {
        b = a + 1;
    }
    if (a == b) {
        return a;
    }
    return parseInt(Math.random() * (b - a + 1) + a);
}


function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (status == 0) {
        var
        text =""+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+"\r\n"
			text += "\t\t\t  #e��ӭ����#b����ð�յ�v079 #k!#n\r\n\r\n#k�����ܾ�һ����ҽű�������BUG������֮�����ý����˺źͻ�����#k�����ᳫ������ң��ذ����£�����֧����������֮����н��ף���ˮӦ�õõ��ر���\r\n�����������չٷ�����������ά�����޸��������Է¹ٷ�Ϊ��\r\n#r����Ҳ��һλ90�󻳾�ð�յ�����ң����豾��������ǮΪĿ�ģ�Ϊ�˹�ͬ�һض�ʱ�Ŀ���ʱ�⣡ϣ����λ��Ҷ�ύ���ѣ��������ѣ�����ƽ�ȣ�Ϊ��ά����Ϸƽ�⣡��ҷ���BUG�뼰ʱ���������ǽ���ά������ͬ����һ�����õ���Ϸ������\r\n";
        text += "#L1##r#e"+ ��ɫ��ͷ +"��ȡ�������������\r\n";
		text += "#L2##b"+ ��ɫ��ͷ +"Ŀǰ�׶���Ӧ�����������\r\n";
		text += "#L3#"+ ��ɫ��ͷ +"�����ǿӦ����Щʲô��\r\n";
		text += "#L4#"+ ��ɫ��ͷ +"�����Ƽ�������ʲô������\r\n";
		text += "#L5#"+ ��ɫ��ͷ +"����ӦƸ�����������ָ���ô����\r\n\r\n";
		text += ""+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����;
		//text += FileoutputUtil.CurrentReadable_Time();
		//text += ȡ�����(1,3)+" "+ ȡ�����(1,3)
		cm.getPlayer().gainqiandao(1)
        cm.sendSimpleS(text,2);
    } else if (selection == 1) {
		var
        text1 = "ѡ��1�ű����� "+ cm.ʣ�౳��(5)  + "\r\n";
        text1 += "#L1#����ѡ��1\r\n";
        cm.sendNext(text1);
		cm.�Ի�����();
    } else if (selection == 2) {
		var
        text2 = "ѡ��1�ű�����\r\n";
        text2 += "#L3#����ѡ��3\r\n";
		
		cm.sendNext(text2);
    } else if (selection == 3) {

    } else if (selection == 4) {

    } else if (selection == 5) {

    } else if (selection == 20) {

    }
}