var status = 0; 
var maps = Array(270050000, 910000000); 
var mapsname = Array("回到神殿入口", "回到自由市场"); 
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
            cm.sendOk("如果你没有足够的胆量与PB战斗，可以找我让你离开！"); 
            cm.dispose(); 
            return; 
        } 
        if (mode == 1) 
            status++; 
        else { 
            cm.sendOk("如果你没有足够的胆量与PB战斗，可以找我让你离开！"); 
            cm.dispose(); 
            return; 
        } if (status == 0) { 
            cm.sendYesNo("#b你好,我是时间神殿的的守护法师,如果你觉得这里的怪物很给力,那么我可以放你离开."); 
        } else if (status == 1) { 
            var selStr = "你选择.#b"; 
                for (var i = 0; i < maps.length; i++) { 
                selStr += "\r\n#L" + i + "#" + mapsname[ i ]+""; 
                } 
            cm.sendSimple(selStr); 
            
        } else if (status == 2) { 
            cm.sendYesNo("决定好要去 " + mapsname[selection] + "吗?"); 
            selectedMap = selection; 
        } 
        
        else if (status == 3) { 
            cm.warp(maps[selectedMap], 0); 
            cm.dispose(); 
        } 
    } 
}