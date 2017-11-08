document.getElementById("id_logic_level_version").innerHTML="Business level version 2017.11.08.2";

var canvas = document.getElementById("id_canvas");
var context = canvas.getContext("2d");

canvas.addEventListener("touchstart", on_touch_start);

function on_touch_start(e)
{
	var rect = canvas.getBoundingClientRect();
	var touches = e.changedTouches;
	for (i=0; i < touches.length; i++)
		{
			context.beginPath();
		    context.arc(touches[i].pageX - rect.left, touches[i].pageY - rect.top, 10, 0, 2 * Math.PI);
			context.stroke();
		}
}