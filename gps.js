document.getElementById("id_business_level_version").innerHTML="Business level version 2017.12.06.3";


navigator.geolocation.getCurrentPosition(on_gps_success, on_gps_error);

//----------------------------------------------
function on_gps_success(p)
{
	document.getElementById("id_p").innerHTML = "Lat = " + p.coords.latitude + " <br> Long = " + p.coords.longitude + "<br> Accuracy = " + p.coords.accuracy + "m" + "<br> Altitude = " + p.coords.altitude + "m" + 
		"<br> Speed =" + p.coords.speed + "m/s";
	
	var map_str = "https://maps.googleapis.com/maps/api/staticmap?" + 
		"markers=color:blue|" + p.coords.latitude+ "," + p.coords.longitude + "|Palatul+Apor&" + 
		"path=color:0xff0000|" + p.coords.latitude + "," + p.coords.longitude + "|Palatul+Apor&" + 
		"zoom=15&" +
		"size=320x240&" + 
		"key=AIzaSyDssSOFnHelNRLYEP_tlXXhOjy2502y-CI";
	
	document.getElementById("id_gps_img").setAttribute("src",map_str);
} 
//-----------------------------------------------
function on_gps_error(e)
{
	alert(e.code);
}
//------------------------------------------------