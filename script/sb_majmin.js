/* Status Barre avec Lettres qui passent en Maj/Min */
/* webcyril - Aout 2000 */

var text  = "Webcyril - http://webcyril.fr.st"
var speed = 60
var x = 0

function StatusBarre_MajMin() 
{
  var a = text.substring(0,x)
  var b = text.substring(x,x+1).toUpperCase()
  var c = text.substring(x+1,text.length)

  window.status = a + b + c

  if (x == text.length) 
    {
      x = 0
    }
  else
    {
      x++
    }
  setTimeout("StatusBarre_MajMin()",speed)
}

StatusBarre_MajMin();