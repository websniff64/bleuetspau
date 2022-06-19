posYmenu = 0;
bgcolor='#FF0000';
bgcolor2='#FCCFD2';
needcenter =false;
if(!needcenter)
posXmenu = 0;
else
{ if (document.all)
posXmenu = (document.body.clientWidth/2)-(700/2);
else
posXmenu = (window.innerWidth/2)-(700/2); 
}
document.write('<style type="text/css">');
document.write('.popper { POSITION: absolute; VISIBILITY: hidden; z-index:3; }')
document.write('#topgauche { position:absolute; top:'+posYmenu+'px; left:'+posXmenu+'px; z-index:10; }')
document.write('A:hover.ejsmenu {color:#000000; text-decoration:none;}')
document.write('A.ejsmenu {color:#000000; text-decoration:none;}')
document.write('</style>')
document.write('<DIV class=popper id=topdeck></DIV>');
/*
SCRIPT EDITE SUR L'EDITEUR JAVACSRIPT
http://www.editeurjavascript.com
*/

/*
LIENS
*/
zlien = new Array;
zlien[0] = new Array;
zlien[1] = new Array;
zlien[2] = new Array;
zlien[3] = new Array;
zlien[4] = new Array;
zlien[5] = new Array;

zlien[0][0] = '<A HREF="http://www.chez.com/fcss/infos.htm" CLASS=ejsmenu>Infos</A>';
zlien[0][1] = '<A HREF="http://www.chez.com/fcss/dirigeants.htm" CLASS=ejsmenu>Dirigeants</A>';
zlien[0][2] = '<A HREF="http://www.chez.com/fcss/histoire.htm" CLASS=ejsmenu>historique </A>';
zlien[1][0] = '<A HREF="http://www.chez.com/fcss/a.htm" CLASS=ejsmenu>Effectif sénior</A>';
zlien[1][1] = '<A HREF="http://www.chez.com/fcss/stat.htm" CLASS=ejsmenu>Statistiques</A>';
zlien[1][2] = '<A HREF="http://www.chez.com/fcss/loisirs.htm" CLASS=ejsmenu>Loisirs</A>';
zlien[2][0] = '<A HREF="http://www.chez.com/fcss/ar.htm" CLASS=ejsmenu>Sénior A</A>';
zlien[2][1] = '<A HREF="http://www.chez.com/fcss/br.htm" CLASS=ejsmenu>Sénior B</A>';
zlien[2][3] = '<A HREF="http://www.chez.com/fcss/une.htm" CLASS=ejsmenu>Saison 2000/2001</A>';
zlien[3][0] = '<A HREF="http://www.chez.com/fcss/ac.htm" CLASS=ejsmenu>Sénior A</A>';
zlien[3][1] = '<A HREF="http://www.chez.com/fcss/bc.htm" CLASS=ejsmenu>Sénior B</A>';
zlien[4][0] = '<A HREF="mailto:bleuetspau@free.fr" CLASS=ejsmenu>Mail</A>';
zlien[5][0] = '<A HREF="http://www.chez.com/fcss/index1.htm" CLASS=ejsmenu>Retour</A>';
var nava = (document.layers);
var dom = (document.getElementById);
var iex = (document.all);
if (nava) { skn = document.topdeck }
else if (dom) { skn = document.getElementById("topdeck").style }
else if (iex) { skn = topdeck.style }
skn.top = posYmenu+24;

function pop(msg,pos)
{
skn.visibility = "hidden";
a=true
skn.left = posXmenu+pos;
var content ="<TABLE BORDER=0 CELLPADDING=0 CELLSPACING=0 BGCOLOR=#000000 WIDTH=100><TR><TD><TABLE WIDTH=100% BORDER=0 CELLPADDING=0 CELLSPACING=1>";
pass = 0
while (pass < msg.length)
{
content += "<TR><TD BGCOLOR="+bgcolor+" onMouseOver=\"this.style.background='"+bgcolor2+"'\" onMouseOut=\"this.style.background='"+bgcolor+"'\" HEIGHT=20><FONT SIZE=1 FACE=\"Verdana\"><B>&nbsp;&nbsp;"+msg[pass]+"</B></FONT></TD></TR>";
pass++;
}
content += "</TABLE></TD></TR></TABLE>";
if (nava)
  {
    skn.document.write(content);
  skn.document.close();
  skn.visibility = "visible";
  }
    else if (dom)
  {
  document.getElementById("topdeck").innerHTML = content;
  skn.visibility = "visible";
  }
    else if (iex)
  {
  document.all("topdeck").innerHTML = content;
  skn.visibility = "visible";
  }
}
function kill()
{
skn.visibility = "hidden";
}
document.onclick = kill;
document.write('<DIV ID=topgauche><TABLE BORDER=0 CELLPADDING=0 CELLSPACING=0 BGCOLOR=#000000 WIDTH=700><TR><TD><TABLE CELLPADING=0 CELLSPACING=1 BORDER=0 WIDTH=100% HEIGHT=25><TR>')
document.write('<TD WIDTH=100 ALIGN=center BGCOLOR='+bgcolor+' onMouseOver="this.style.background=\''+bgcolor2+'\';pop(zlien[0],0)" onMouseOut="this.style.background=\''+bgcolor+'\'"><A onClick="return(false)" onMouseOver="pop(zlien[0],0)" href=# CLASS=ejsmenu><FONT SIZE=1 FACE="Verdana"><B>Le club</B></FONT></a></TD>')
document.write('<TD WIDTH=100 ALIGN=center BGCOLOR='+bgcolor+' onMouseOver="this.style.background=\''+bgcolor2+'\';pop(zlien[1],100)" onMouseOut="this.style.background=\''+bgcolor+'\'"><A onClick="return(false)" onMouseOver="pop(zlien[1],100)" href=# CLASS=ejsmenu><FONT SIZE=1 FACE="Verdana"><B>Equipes</B></FONT></a></TD>')
document.write('<TD WIDTH=100 ALIGN=center BGCOLOR='+bgcolor+' onMouseOver="this.style.background=\''+bgcolor2+'\';pop(zlien[2],200)" onMouseOut="this.style.background=\''+bgcolor+'\'"><A onClick="return(false)" onMouseOver="pop(zlien[2],200)" href=# CLASS=ejsmenu><FONT SIZE=1 FACE="Verdana"><B>Résultats</B></FONT></a></TD>')
document.write('<TD WIDTH=100 ALIGN=center BGCOLOR='+bgcolor+' onMouseOver="this.style.background=\''+bgcolor2+'\';pop(zlien[3],300)" onMouseOut="this.style.background=\''+bgcolor+'\'"><A onClick="return(false)" onMouseOver="pop(zlien[3],300)" href=# CLASS=ejsmenu><FONT SIZE=1 FACE="Verdana"><B>Classements</B></FONT></a></TD>')
document.write('<TD WIDTH=100 ALIGN=center BGCOLOR='+bgcolor+' onMouseOver="this.style.background=\''+bgcolor2+'\';pop(zlien[4],400)" onMouseOut="this.style.background=\''+bgcolor+'\'"><A onClick="return(false)" onMouseOver="pop(zlien[4],400)" href=# CLASS=ejsmenu><FONT SIZE=1 FACE="Verdana"><B>Ecrire</B></FONT></a></TD>')
document.write('<TD WIDTH=100 ALIGN=center BGCOLOR='+bgcolor+' onMouseOver="this.style.background=\''+bgcolor2+'\';pop(zlien[5],500)" onMouseOut="this.style.background=\''+bgcolor+'\'"><A onClick="return(false)" onMouseOver="pop(zlien[5],500)" href=# CLASS=ejsmenu><FONT SIZE=1 FACE="Verdana"><B>Accueil</B></FONT></a></TD>')
document.write('</TR></TABLE></TD></TR></TABLE></DIV>')
