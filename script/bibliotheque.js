<!-- Fonction pour afficher une fenetre popup
function affichewin(titre,chemin,larg,haut)
	{
	i1 = new Image;
	i1.src = chemin;
	popupImage = window.open(chemin,'_blank','height='+haut+',width='+larg+',toolbar=0,location=0,directories=0,menuBar=0,scrollbars=1,resizable=1');
}

<!-- Fonction renvoyant le nom et la version du navigateur
function browserID()
	{
	var name = navigator.appName ;
	var version = navigator.appVersion;
	if (name == 'Netscape')
	{
		name = 'Netscape Navigator';
		version = navigator.appVersion.substring(0,4);
	}
	else
	{
		if (name == 'Microsoft Internet Explorer')
		{
			id = version.indexOf('MSIE');
			version = version.substring(id+5,id+9);
		}
		else
		{
			name = 'Navigateur inconnu';
			version = '0.00';
		}
	}
	ID = name + ' ' + version;
	return ID;
	}

<!-- Fonction renvoyant la Date et l'heure courante
function getDateTime()
{
	var now = new Date();
	var e = '0' + now.getHours();
	if (e.length > 2) e = e.substring(1);
	d = e + ':';
	e = '0' + now.getMinutes();
	if (e.length > 2) e = e.substring(1);
	d += e + ' ';
	e = '0' + now.getDate();
	if (e.length > 2) e = e.substring(1);
	d += e + '/';
	e = '0' + (now.getMonth() + 1);
	if (e.length > 2) e = e.substring(1);
	d += e + '/' + now	.getFullYear();
	
	return d;
}