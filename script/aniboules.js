/* BoulesElastiques par CCY */

var nDots = 5;
var Xpos = 0;
var Ypos = 0;

// fixed time step, no relation to real time
var DELTAT = .01;

// size of one spring in pixels
var SEGLEN = 10;

// spring constant, stiffness of springs
var SPRINGK = 10;

// all the physics is bogus, just picked stuff to
// make it look okay
var MASS = 1;
var GRAVITY = 50;
var RESISTANCE = 10;

// stopping criterea to prevent endless jittering
// doesn't work when sitting on bottom since floor
// doesn't push back so acceleration always as big
// as gravity
var STOPVEL = 0.1;
var STOPACC = 0.1;
var DOTSIZE = 10;

// BOUNCE is percent of velocity retained when 
// bouncing off a wall
var BOUNCE = 0.75;
var isNetscape = navigator.appName=="Netscape";

// always on for now, could be played with to
// let dots fall to botton, get thrown, etc.

var followmouse = true;

function initBoules()
{
	var i = 0;

	dots = new Array();
	for (i = 0; i < nDots; i++) {
		dots[i] = new dot(i);
	}

	// set their positions
	for (i = 0; i < nDots; i++) {
		dots[i].obj.left = dots[i].X;
		dots[i].obj.top = dots[i].Y;
	}
	setTimeout("startanimate()", 3000);
}

function dot(i) 
{
	this.X = Xpos;
	this.Y = Ypos;
	this.dx = 0;
	this.dy = 0;
	if (isNetscape) {
		this.obj = eval("document.dot" + i);
		if(i>0)
			this.obj.visibility="show";
	} else {
		this.obj = eval("dot" + i + ".style");
		if(i>0)
			this.obj.visibility="visible";
	}
}

function startanimate() {	
	setInterval("animate()", 20);
}

// just save mouse position for animate() to use
function MoveHandler(e)
{
	Xpos = e.pageX;
	Ypos = e.pageY;	  
	return true;
}

// just save mouse position for animate() to use
function MoveHandlerIE() {
  Xpos = window.event.x;
  Ypos = window.event.y;	  
}

if (isNetscape) {
	document.captureEvents(Event.MOUSEMOVE);
	document.onMouseMove = MoveHandler;
} else {
	document.onmousemove = MoveHandlerIE;
}

function vec(X, Y)
{
	this.X = X;
	this.Y = Y;
}

// adds force in X and Y to spring for dot[i] on dot[j]
function springForce(i, j, spring)
{
	var dx = (dots[i].X - dots[j].X);
	var dy = (dots[i].Y - dots[j].Y);
	var len = Math.sqrt(dx*dx + dy*dy);
	if (len > SEGLEN) {
		var springF = SPRINGK * (len - SEGLEN);
		spring.X += (dx / len) * springF;
		spring.Y += (dy / len) * springF;
	}
}

function animate() {	
	// dots[0] follows the mouse,
	// though no dot is drawn there
	var start = 0;
	if (followmouse) {
		dots[0].X = Xpos;
		dots[0].Y = Ypos;	
		start = 1;
	}

	for (i = start ; i < nDots; i++ ) {
		var spring = new vec(0, 0);
		if (i > 0) {
			springForce(i-1, i, spring);
		}
		if (i < (nDots - 1)) {
			springForce(i+1, i, spring);
		}
		
		// air resisitance/friction
		var resist = new vec(-dots[i].dx * RESISTANCE,
							 -dots[i].dy * RESISTANCE);
		
		// compute new accel, including gravity
		var accel = new vec((spring.X + resist.X)/ MASS,
							(spring.Y + resist.Y)/ MASS + GRAVITY);

		// compute new velocity
  	    dots[i].dx += (DELTAT * accel.X);
		dots[i].dy += (DELTAT * accel.Y);
		
		// stop dead so it doesn't jitter when nearly still
		if (Math.abs(dots[i].dx) < STOPVEL &&
		    Math.abs(dots[i].dy) < STOPVEL &&
		    Math.abs(accel.X) < STOPACC &&
			Math.abs(accel.Y) < STOPACC) {
		  dots[i].dx = 0;
		  dots[i].dy = 0;
		}

        // move to new position
		dots[i].X += dots[i].dx;
		dots[i].Y += dots[i].dy;

		// get size of window
		var height, width;
		if (isNetscape) {
		    height = window.innerHeight;
		    width = window.innerWidth;
		} else {	
		    height = document.body.clientHeight;
		    width = document.body.clientWidth;
		}
        

		if (dots[i].X < 0) {
			if (dots[i].dx < 0) {
				dots[i].dx = BOUNCE * -dots[i].dx;
			}
			dots[i].X = 0;
		}

		// move img to new position
		dots[i].obj.left = dots[i].X;			
		dots[i].obj.top =  dots[i].Y;		
	}
}

function	writeBoules()
{
	setTimeout("initBoules()",1000);
}

function Task_0_Test()
{
return 1;
}

function Task_0_Check()
{
var ok=Task_0_Test();
if(ok)
	{
	Task_1_Start();
	}
else
	{
	setTimeout("Task_0_Check()",100);
	}
}
			
function Task_1_Start()
{
	document.forms[0].elements[0].focus();
	Task_1_Check();
}

function Task_1_Test()
{
return 1;
}

function Task_1_Check()
{
var ok=Task_1_Test();
if(ok)
	{
	}
else
	{
	setTimeout("Task_1_Check()",100);
	}
}			

function InitAnimBoules()
{
initBoules();
Task_0_Check();
}

InitAnimBoules();