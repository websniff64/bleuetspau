/* Une etoile suit le curseur */
/* webcyril - Aout 2000       */

var image_star = "<img src=star.gif height=10 width=10 border=0>"

NS4 = (document.layers) ? 1 : 0;
IE4 = (document.all) ? 1 : 0;
VERSION4 = (NS4|IE4) ? 1 : 0;

var styleSP1 = (NS4) ? "" : ".style";

var objSP1 = new Array();
var numObjSP1 = 6
var ptrSP1 = 0;

function defObjSP1(ID) 
{
    if (NS4) 
    {
        this.layer = new Layer (0);
        this.layer.visibility = "hidden";
        this.layer.document.write(image_star);
        this.layer.document.close();
    } 
    else 
    {
        eval ('this.layer = document.all.SP1'+ID);
    }
    this.old = 6;
}

function testVisibilitySP1() 
{
    for(var x=0; x < numObjSP1; x++) 
    {
        with (objSP1[x]) 
        {
            if (old <numObjSP1) 
            {
                if (++old == numObjSP1) eval('layer' +  styleSP1 + '.visibility = "hidden"');
            }
        }
    }
}

function mouseEventSP1(e) {
    ptrSP1 = (++ptrSP1 < numObjSP1) ? ptrSP1 : 0;

    objSP1[ptrSP1].old = 0;

    if (NS4) {
        objSP1[ptrSP1].layer.visibility = "visible";
        objSP1[ptrSP1].layer.left = e.pageX ;
        objSP1[ptrSP1].layer.top = e.pageY + 5;
    } else {
        objSP1[ptrSP1].layer.style.visibility = "visible";
        objSP1[ptrSP1].layer.style.pixelLeft = event.clientX + document.body.scrollLeft ;
        objSP1[ptrSP1].layer.style.pixelTop = event.clientY + document.body.scrollTop + 5;
    }
}

function initSP1() 
{
    if (VERSION4) 
    {
        for(var x=0; x<numObjSP1; x++) objSP1[x] = new defObjSP1(x) ;

        if (NS4) document.captureEvents(Event.MOUSEMOVE);
        document.onmousemove = mouseEventSP1;

        setInterval("testVisibilitySP1();",40);
    }
}

if (VERSION4 && ! NS4) 
{
    for (var x=0; x<numObjSP1; x++) 
    {
        document.write('<div id="SP1'+x+'" style="position: absolute; visibility: hidden;">');
        document.write(image_star + '</div>');
        document.write('</div>');
    }
}

if (window.onload) 
{
    if (window.RegExp) 
    {
        var regstr = '^[^\\{]*\\{((.|\\t|\\n|\\r)*)}[^\\}]*$';
        window.onload.toString().match(regstr);
        window.onload = new Function (RegExp.$1+"; initSP1 ();");
    }
}
else window.onload = initSP1;
