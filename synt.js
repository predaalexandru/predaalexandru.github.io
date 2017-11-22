document.getElementById("id_logic_level_version").innerHTML="Business level version 2017.11.22.5";

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
	
	enunt.onend = function(e) {
			document.getElementById("id_button_speak").disable = false;
	}
	
	document.getElementById("id_button_speak").disable = true;
	synt.speak(enunt);
}
//--------------------------------------------------------