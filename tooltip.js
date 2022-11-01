var ie = document.all ? 1 : 0
var ns = document.layers ? 1 : 0

if(ns){doc = "document."; sty = ""}
if(ie){doc = "document.all."; sty = ".style"}
var initialize = 0
var Ex, Ey, topColor, subColor, ContentInfo
if(ie){
	Ex = "event.x"
	Ey = "event.y"
	topColor = "#000000"
	subColor = "#000000"
}

if(ns){
	Ex = "e.pageX"
	Ey = "e.pageY"
	window.captureEvents(Event.MOUSEMOVE)
	window.onmousemove=overhere
	topColor = "#000000"
	subColor = "#000000"
}

function MoveToolTip(layerName, FromTop, FromLeft, e){
if(ie){eval(doc + layerName + sty + ".top = "  + (eval(FromTop) + document.body.scrollTop))}
if(ns){eval(doc + layerName + sty + ".top = "  +  eval(FromTop))}
//alert(eval(FromLeft) + ' ' + document.clientWidth)
if (eval(FromLeft) > (document.body.clientWidth / 2)) {
	eval(doc + layerName + sty + ".left = " + (eval(FromLeft) - 515))
} else {
	eval(doc + layerName + sty + ".left = " + (eval(FromLeft) + 15))
}
}

function ReplaceContent(layerName){

if(ie){document.all[layerName].innerHTML = ContentInfo}


if(ns){

with(document.layers[layerName].document) 
{ 
   open(); 
   write(ContentInfo); 
   close(); 
}

}


}

function Activate(){initialize=1}
function deActivate(){initialize=0}


function overhere(e){
if(initialize){

MoveToolTip("ToolTip", Ey, Ex, e)
eval(doc + "ToolTip" + sty + ".visibility = 'visible'")
}

else{
MoveToolTip("ToolTip", 0, 0)
eval(doc + "ToolTip" + sty + ".visibility = 'hidden'")
}


}


function EnterContent(layerName, TTitle, TContent){

ContentInfo = '<table border="0" width="500" cellspacing="1" cellpadding="1" class="barCell2" style="cursor: default; color: white" align=top><td height=22 align=center class="navmenu" colspan=8 style="height: 15"><center><b>' + TTitle + '</b></center></td></tr>' +
'<tr><td width="100%">'+
'<font class="weakcell">'+TContent+'</font>'+
'</td></tr>'+
'</table>';
ReplaceContent(layerName)
}

     var ie = document.all ? 1 : 0
      var ns = document.layers ? 1 : 0
     if(ie){
      document.write('<style type="text/css">')
      document.write('.textfield {font-size:10pt; font-family:arial; color:#808080; font-weight:bold;}\n')
      document.write('.hexfield {font-size:10pt; font-family:arial; color:#808080; font-weight:bold;}\n')
      document.write('.buttons {border-style: solid; background-color: #808080; border-color: #000000; border-width: 1; color: #000000; font-size: 10pt; font-family: arial; font-weight: bold;}\n')
      document.write('</style>')
      }

function DrawTT(Caption, Text) {
document.write('<a href="javascript:void(0)" onMouseover="EnterContent(\'ToolTip\',\'' + Caption + '\',\'' + Text + '\'); Activate();" onMouseout="deActivate()">' + Caption + '</a>')
}


function DrawTT2(Caption, Text, QL, QW) {
ContentInfo = '<table border="0" width="500" cellspacing="1" cellpadding="1" class="barCell2" style="cursor: default; color: white" align=top><td height=22 align=center class="navmenu" colspan=8 style="height: 15"><center><b>' + Caption + '</b></center></td></tr>' +
'<tr class="weakcell"><td width="50%">Quest Starter: <b>'  + QW +'</b></td><td width="50%">'+
'Quest Level: <i>'+QL+'</i>'+
'</td></tr>'+
'<tr class="weakcell"><td width="100%" colspan="2">'+
''+Text+''+
'</td></tr>'+
'</table>';

document.write('<tr><td>' + ContentInfo + '</td></tr>')
}