document.getElementById("id_logic_level_version").innerHTML="Business level version 2017.11.22.4";

var synt = window.speechSynthesis;

//-----------------------------------------------------
function get_voices()
{
	var voices = synt.getVoices();
	for( var i = 0; i < voices.length; i++) {
		document.getElementById("id_voices").innerHTML += voices[i].name + ":" + voices[i].lang + "<br>";
	}
}
//---------------------------------------------------------
function speak() 
{
	var enunt = new SpeechSynthesisUtterance();
	enunt.lang ="en-US";
	enunt.text = document.getElementById("id_text").value;
	
	enunt.onerror = function(e) {
		alert(e.error);
	}
	synt.speak(enunt);
}
//--------------------------------------------------------