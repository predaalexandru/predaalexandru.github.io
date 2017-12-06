document.getElementById("id_business_level_version").innerHTML="Business level version 2017.12.06.2";


navigator.geolocation.getCurrentPosition(on_gps_success, on_gps_error);

//----------------------------------------------
function on_gps_success(p)
{
	document.getElementById("id_p").innerHTML = "Lat = " + p.coords.latitude + " <br> Long = " + p.coords.longitude + "<br> Accuracy = " + p.coords.accuracy + "m" + "<br> Altitude = " + p.coords.altitude + "m";
} 
//-----------------------------------------------
function on_gps_error(e)
{
	alert(e.code);
}
//------------------------------------------------