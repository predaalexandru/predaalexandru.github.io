var canIclick = 0;

//Functie incarcare arma
function reloadGun(e) {
	if(canIclick==0 && $("#SZ2").css('opacity') ==1) {
		canIclick = 1;
		$("#SZ1").animateSprite("play", "reload");
		//resetam impuscatura
		current_shots=0;
		//ascundem butonul de reload
		$("#SZ2").css({opacity:0});
		$.playSound('sounds/reload');
	}
}
//numarul maxim de trageri
var max_shots=7;
var current_shots=0;

//Functie trage arma
function fireGun(e) {
	if(canIclick==0 && gameEnded==0 && $("#SZ2").css('opacity') != 1) {
		canIclick = 1;
		$("#SZ1").animateSprite("play", "fire");
		//incrementam tragerile
		current_shots++;
		$.playSound('sounds/fire');
		if(current_shots >= max_shots) {
			//afisam butonul de reload
			$("#SZ2").css({opacity:1});
		}
	}
}

//Functie pentru a tine cont de hit-uri
var zombieHits_counter = [0,0,0,0,0,0];

var zombieHits_limits = [2,1,3,2,1,3];

function zombieHit(whichOne, xx, yy) {
	zombieHits_counter[whichOne]++;
	
	if(zombieHits_counter[whichOne] >= zombieHits_limits[whichOne]) {
		//SZ_resetZombie(whichOne+1);
		//Reset
		SZ_resetZombie(whichOne+1,1);
	}
	var whichOne2=whichOne+1;
	var $effect_zombiex = $("#zombie_effect"+whichOne2);
	$effect_zombiex.css({top: yy+'px', left: xx+'px', opacity:1});
	$effect_zombiex.animateSprite("play", "z1");
	$effect_zombiex.css('transform','scale('+scalex_zombie[whichOne]+')');
}