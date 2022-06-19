/* Boulettes de couleur tournat autour du curseur */
/* webcyril - Aout 2000                           */

var ns=document.layers ? 1 : 0;

if (ns) 
{
window.captureEvents(Event.MOUSEMOVE);
var yBase = 200;
var xBase = 200;
var delay = 10;
var yAmpl = 10;
var yMax = 40;
var step = .2;
var ystep = .5;
var currStep = 0;
var tAmpl=1;
var Xpos = 50;
var Ypos = 50;
var j = 0;

function MoveHandler(evnt) 
{
Xpos = evnt.pageX;
Ypos = evnt.pageY;
}

window.onMouseMove = MoveHandler;

function AnimationBoules() 
 {
 yBase = window.innerHeight/4 ;
 xBase = window.innerWidth/4;

 for ( j = 0 ; j < 7 ; j++ ) 
  {
   document.layers[j].top = Ypos + Math.cos((20*Math.sin(currStep/20))+j*70)*yBase*(Math.sin(10+currStep/10)
   +0.2)*Math.cos((currStep + j*25)/10);

   document.layers[j].left =Xpos + Math.sin((20*Math.sin(currStep/20))+j*70)*xBase*(Math.sin(10+currStep/10)
   +0.2)*Math.cos((currStep + j*25)/10);
   }   
 currStep += step;
 setTimeout("AnimationBoules()", delay);
 }
AnimationBoules();
}
