document.getElementById("id_business_level_version").innerHTML="Business level version 2017.12.06.0";


navigator.geolocation.watchPosition(on_gps_success, on_gps_error);

var marker;

//----------------------------------------------
function on_gps_success(p)
{
	document.getElementById("id_p").innerHTML = "Lat = " + p.coords.latitude + " <br> Long = " + p.coords.longitude + "<br> Accuracy = " + p.coords.accuracy + "m" + "<br> Altitude = " + p.coords.altitude + "m" + 
		"<br> Speed =" + p.coords.speed + "m/s";
	
	var map_obj = new google.maps.Map(document.getElementById("id_map"));
	map_obj.setCenter({lat:p.coords.latitude, lng:p.coords.longitude});
	map_obj.setZoom(10);
	
	marker = new google.maps.Marker({
    position: {lat:p.coords.latitude, lng:p.coords.longitude},
    title:"LMM!",
	map:map_obj,
	animation: google.maps.Animation.DROP
});
	marker.addListener("click", on_marker_click);
	//marker.setMap(map_obj);
}
//-----------------------------------------------
function on_marker_click() 
{
	if (marker.getAnimation() !== null) {
    marker.setAnimation(null);
  } else {
    marker.setAnimation(google.maps.Animation.BOUNCE);
  }
}
//-----------------------------------------------
function on_gps_error(e)
{
	alert(e.code);
}
//------------------------------------------------