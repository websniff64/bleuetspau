/* Blocage de l'utilisation du bouton droit */
/* version 2                                */
/* webcyril - Aout 2000                     */
/* Modifié le 01/11/2001 pour le simplifier et le faire marcher! */

var text  = "BleuetsPau - http://www.bleuetspau.fr.st";

function warn(evnt){
if (navigator.appName.toUpperCase().match(/NETSCAPE/) != null) {
if (evnt.which >= 2){
alert(text);
//document.onmouseup=overload
return false;
}
} 
else 
{
if (event.button != 1){
alert(text);
// Ligne suivante mise en commentaire par Tony pour que ca marche!
//document.onmouseup=overload
return false;
}
}
}
document.onmousedown=warn;
if (document.layers) window.captureEvents(Event.MOUSEDOWN);
window.onmousedown=warn;

