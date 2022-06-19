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