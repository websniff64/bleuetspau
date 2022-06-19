//
// Librairie de fonctions JavaScript
//
// Fichier a inclure au debut de chaque fichier html
//




//-----------------------------------------
// contrôle de la numéricité d'une chaîne
//-----------------------------------------
function JS_isNum(p_string)
{
    var w_char="";
    for(var i=0;i<=p_string.length-1;i++)
    {
        w_char=p_string.charAt(i);
        if(w_char<'0'||w_char>'9')
              return false;
    }
    return true;
}


//-----------------------------------------
// lancement d'une fenetre
//-----------------------------------------
function launch(URL_dest, Nom_dest, Param_dest, Lanceur)
{
  var fenetre = open(URL_dest, Nom_dest, Param_dest);
  if (fenetre.opener == null)
  {
	  fenetre.opener = window;
  }
  fenetre.opener.name = Lanceur;
  fenetre.focus;
  return fenetre;
}


//-----------------------------------------
// Affichage detail
//-----------------------------------------
function Detail(p_code_cg,p_code_match,p_club_recev,p_club_visit,p_tour,p_club)
{
	if ( (p_club == null) || (p_club=='') )
	{
		var param = "etat=detail&code_cg=" + p_code_cg + "&code_match=" + p_code_match + "&club_recev=" + p_club_recev + "&club_visit=" + p_club_visit + "&libelle_journee=" + p_tour;
		reponse = launch("/cgi-bin/championnats/champ_detail.pl?" + param, "lavisu", "toolbar=0,location=0,directories=0,status=0,scrollbars=0,resizable=1,copyhistory=0,width=480,height=400,left=10,top=5", "depart");
	}
	else
	{
		var param = "etat=detail&code_cg=" + p_code_cg + "&code_match=" + p_code_match + "&club_recev=" + p_club_recev + "&club_visit=" + p_club_visit + "&libelle_journee=" + p_tour+ "&numero_club=" + p_club;
		reponse = launch("/cgi-bin/clubs/clubs_detail.pl?" + param, "lavisu", "toolbar=0,location=0,directories=0,status=0,scrollbars=0,resizable=1,copyhistory=0,width=480,height=400,left=10,top=5", "depart");

	}
}


//-----------------------------------------
// Redirection sur recherche guidee
//-----------------------------------------
// compet :			null -> championnat
//					coupe -> coupes
//					cfra -> coupe de France
//					clubs -> clubs
function RechGuid(compet)
{
	if ( (compet == null) || (compet=='') )
	{
		texte = "/cgi-bin/championnats/champ_rechguid.pl";
	}
	else
	{
		if (compet== 'coupe')
		{
			texte = "/cgi-bin/coupes/coupes_rechguid.pl";
		}
			
		if (compet == 'cfra')
		{
			texte = "/cgi-bin/coupes/coupes_rechguid.pl?cfra=1";
		}

		if (compet== 'clubs')
		{
			texte = "/cgi-bin/clubs/clubs_rechguid.pl";
		}
	}

	reponse = launch(texte, "lavisu", "toolbar=0,location=0,directories=0,status=0,scrollbars=0,resizable=1,copyhistory=0,width=480,height=350,left=10,top=5", "depart");
}


//-----------------------------------------
// Redirection sur recherche guidee
//-----------------------------------------
// compet :		    null -> championnat
//                  coupe -> coupes
//                  cfra -> coupe de France
function RechGuidClub(p_club,compet)
{
	if ( (p_club != "")&&(JS_isNum(p_club)) )
	{
		if ( (compet == null) || (compet=='') )
		{
			texte = "/cgi-bin/championnats/champ_rechguid_resu.pl?club=" + p_club+"&type=CHAM";
		}
		else
		{
			if (compet == 'cfra')
			{
				texte = "/cgi-bin/coupes/coupes_rechguid_resu.pl?club=" + p_club+"&type=COUP&cfra=1";
			}
			if (compet== 'coupe')
			{
				texte = "/cgi-bin/coupes/coupes_rechguid_resu.pl?club=" + p_club+"&type=COUP";
			}
			if (compet== 'clubs')
			{
				texte = "/cgi-bin/clubs/clubs_rechguid_resu.pl?club=" + p_club;
			}
		}
		self.location.href=texte;
	}
	else
	{
		window.alert("Le numéro d'affiliation doit être numérique");
	}
	return false;
}

//-----------------------------------------
// Departement Demande: verification puis lancement 
//-----------------------------------------
// compet :         null -> championnat
//                  coupe -> coupes
//                  cfra -> coupe de France
function rechdist(p_dept,coupe,compet)
{
  if ( (p_dept!="")&&(JS_isNum(p_dept)) )
  {
        while (p_dept.length != 3)
        {
                p_dept= "0" + p_dept;
        }
        
        // Le departement a-t-il des districts?
        if (JS_HasDistrict(p_dept))    // Il a des districts
        {
			if ( (compet == null)  || (compet=='') )
			{
				texte="/cgi-bin/championnats/champ_listdist.pl?dept="+p_dept;
			}
			else
			{
				if (compet == 'cfra')
				{
					texte="/cgi-bin/coupes/cfra_listdist.pl?dept="+p_dept+"&type_coupe="+coupe;
				}
				else
				{
					texte="/cgi-bin/coupes/coupes_listdist.pl?dept="+p_dept;
	
					if (coupe != "")
					{
						texte += "&type_coupe="+coupe;
					}
				}
			}
			reponse = launch(texte, "lavisu", "toolbar=0,location=0,directories=0,status=0,scrollbars=0,resizable=1,copyhistory=0,width=480,height=350,left=10,top=5", "depart");
        }
        else                    // Pas de districts
        {
			if ( (compet == null) || (compet=='') )
			{
                texte="/cgi-bin/championnats/champ_regi.pl?dept=" + p_dept;
			}
			else
			{
				if (compet == 'cfra')
				{
					texte="/cgi-bin/coupes/cfra_result.pl?dept=" + p_dept+"&type_coupe="+coupe;
				}
				else
				{
					if (coupe == "")
					{
						texte="/cgi-bin/coupes/coupes_regi.pl?dept=" + p_dept;
					}
					else
					{
						texte="/cgi-bin/coupes/cfra_result.pl?dept=" + p_dept+"&type_coupe="+coupe;
					}
				}
			}
			self.location.href=texte;
        }

  }
  else          // Zone non renseignee ou non numerique
  {
        window.alert("Veuillez saisir un département valide");
  }
  return false;
}

//-----------------------------------------
// Ligue Demandee: verification puis lancement 
//-----------------------------------------
// compet :         null -> championnat
//                  coupe -> coupes
//                  cfra -> coupe de France
function majligue(p_codeCG,coupe,compet)
{
        if (p_codeCG!="null")
        {
			if ( (compet==null) || (compet=='') )
			{
				texte="/cgi-bin/championnats/champ_regi.pl?code_cg=" + p_codeCG;
			}
			else
			{
				if ( (coupe==null) || (coupe=='') )
				{
					texte="/cgi-bin/coupes/coupes_regi.pl?code_cg=" + p_codeCG;
				}
				else
				{
					texte="/cgi-bin/coupes/cfra_result.pl?code_cg=" + p_codeCG+"&type_coupe="+coupe;
				}
			}
			self.location.href=texte;
        }
}

//-----------------------------------------
// D1D2 Demandee: verification puis lancemnt 
// compet :         null -> championnat
//                  club -> clubs
//-----------------------------------------
function majD1D2(p_club,compet)
{
	var texte;
	var club = document.FormD1D2.MenuD1D2.options[document.FormD1D2.MenuD1D2.selectedIndex].value
	if (compet=='club')
	{
		if (p_club!="null")
		{
				var param = "numclub="+p_club+"&amateur=0";
				self.location.href="/cgi-bin/clubs/accueil_club.pl?" + param;
		}
	}
	else
	{
		if (p_club!="null")
		{
				var param = "type=CHAM&club="+p_club;
				self.location.href="/cgi-bin/championnats/champ_rechguid_resu.pl?" + param;
		}
	}
}

//-----------------------------------------
// Saisie d'un mail: controle, confirmation puis envoi
//-----------------------------------------
function Saisie_email(p_email)
{
	if ((p_email.indexOf('@', 0) == -1) || (p_email.indexOf('.', 0) ==-1))
	{
		alert("Entrez une adresse valide");
		window.parent.FormEmail.adresse.value="";
	}
	else
	{
		if (p_email!="")
		{
			reponse = launch("/www/general/pages/popupmail.html?email="+p_email, "email", "toolbar=0,location=0,directories=0,status=0,scrollbars=0,resizable=1,copyhistory=0,width=480,height=350,left=10,top=5", "depart");
		}
	}
	return false
}

//-----------------------------------------
// V2
//-----------------------------------------

function move_img(img_name,img_url) {
	if (document.images) {
	        document.images[img_name].src=eval(img_url+".src");             
	}
}

function OpenWin(url,titre,w,h,l,t){
	stats="toolbar=no,location=no,directories=no,status=no,menubar=no," ;
	stats += "resizable=yes,width=" + w + ",height="+h+",left="+l+",top="+t ;
	win= window.open (url,titre,stats);
	win.focus();
}

var picto=""
var leg=""
function AffZoom(imgzoom,laleg){
	picto = imgzoom;
	leg=laleg;
	wi=400;
	hi=400;
	titre="Zoom";
	stats="toolbar=no,location=no,directories=no,status=no,menubar=no," ;
	stats += "resizable=yes,left=0,top=0,width=" + wi + ",height="+hi ;
	imgwin = window.open ("/vinclude/img.php?img="+escape(picto)+"&leg="+escape(leg),titre,stats);
}



function OpenNamedWin(url, namee, w, h){
var szParams = "toolbar=no,,width=" + w + ",height=" + h + ",scrollbars=yes,resize=yes,status=yes"
nam=namee;
win = window.open(url,nam, szParams);
win.focus();
}

function cvespoirs(adresse) 
{
var adrfin="/selections/espoirs/selection/"+adresse+".shtml";
window.open(adrfin, "visu", "toolbar=0,location=0,directories=0,status=0,scrollbars=1,resizable=1,copyhistory=0,width=520,height=550,left=10,top=5");
}


//-----------------------------------------
// Le departement a-t-il des districts?
//-----------------------------------------
function JS_HasDistrict(p_dept)
{
   if ( (p_dept==971) || (p_dept==972) || (p_dept==973) || (p_dept==974) || (p_dept==975) || (p_dept==976) || (p_dept=="020") || (p_dept==904) || (p_dept==905) ) // Pas de districts
   {
	return 0;
   }
   else // Districts
   {
	return 1;
   }
}


//-----------------------------------------
//  Recuperer les parametres d'entree
//-----------------------------------------
function RecupParams()
{
	var idx = document.URL.indexOf('?');
	var params = new Array();
	if (idx != -1)
	{
		var pairs = document.URL.substring(idx+1,
		document.URL.length).split('&');
		for (var i=0; ipairs.length; i++)
		{
			nameVal = pairs[i].split('=');
			params[nameVal[0]] = nameVal[1];
		}
	}
	return params;
}


function RechEdition() { var ladate = document.rechedit.annee.value; 

  if ( (ladate == "") || (!JS_isNum(ladate)) || (ladate.length!=4) ||(ladate<1918)||(ladate>2001)) 

  { window.alert("Veuillez saisir une année comprise entre 1918 et 2001");

  return false;

  } else { self.location.href="/www/coup/historique/pages/hist"+ladate+".shtml"; 

  return false; } }
  
  // aller à un match de cm


function match2(num_matc) 
{ 
window.location="/compint/match.php?compet=1355&match="+num_matc+"&r=90"
}


function match(num){
window.location="http://www.fff.fr/compint/match.php?compet=1355&match="+num+"&r=90"
}


function apresmatch(num){
window.location="http://www.fff.fr/compint/match.php?compet=1355&match="+num+"&r=3600"
}

 // diaporamacm

function diapo_bleu(num) 
{ 
var popg=((screen.width)-500)/2;
var poph=(screen.height)-600;
window.open("/cm2002/diapobleu/"+num+".shtml", "inscription", "toolbar=0,location=0,directories=0,status=0,scrollbars=0,resizable=0,copyhistory=0,left="+popg+",top="+poph+",width=480,height=550");
}
