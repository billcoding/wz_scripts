var status = 0; 
var maps = Array(270050000, 910000000); 
var mapsname = Array("�ص�������", "�ص������г�"); 
var selectedMap = -1; 

function start() { 
    status = -1; 
    action(1, 0, 0); 
} 

function action(mode, type, selection) { 
    if (mode == -1) { 
        cm.dispose(); 
    } else { 
        if (status >= 3 && mode == 0) { 
            cm.sendOk("�����û���㹻�ĵ�����PBս�����������������뿪��"); 
            cm.dispose(); 
            return; 
        } 
        if (mode == 1) 
            status++; 
        else { 
            cm.sendOk("�����û���㹻�ĵ�����PBս�����������������뿪��"); 
            cm.dispose(); 
            return; 
        } if (status == 0) { 
            cm.sendYesNo("#b���,����ʱ�����ĵ��ػ���ʦ,������������Ĺ���ܸ���,��ô�ҿ��Է����뿪."); 
        } else if (status == 1) { 
            var selStr = "��ѡ��.#b"; 
                for (var i = 0; i < maps.length; i++) { 
                selStr += "\r\n#L" + i + "#" + mapsname[ i ]+""; 
                } 
            cm.sendSimple(selStr); 
            
        } else if (status == 2) { 
            cm.sendYesNo("������Ҫȥ " + mapsname[selection] + "��?"); 
            selectedMap = selection; 
        } 
        
        else if (status == 3) { 
            cm.warp(maps[selectedMap], 0); 
            cm.dispose(); 
        } 
    } 
}