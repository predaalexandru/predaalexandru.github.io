//Functia de a crea un zombi
function SZ_createZombie(whichOne) {
	var div = document.createElement('div');
	var div2 = document.createElement('div');
	
	div.setAttribute('style', 'position: fixed; top:0, left:0;')
	div2.setAttribute('style', 'position: fixed; top:0; left:0;')
	
	var top_position = $('#SZ0').height() * 0.435;
	
	var left_position = Math.floor(Math.random() * ($('#SZ0').width())-(ratio*50)) + (ratio*50);
	
	leftx_zombie[whichOne-1]=left_position;
	
	//pozitionarea zombi
	div.style.left = left_position + 'px';
	div.style.top = top_position + 'px';
	
	div2.style.left = left_position + 'px';
	div2.style.top = top_position + 'px';
	
	div.id = 'zombie' + whichOne;
	div2.id = 'bubble_zombie' + whichOne;
	
	//afisare pe ecran
	document.body.appendChild(div);
	document.body.appendChild(div2);
	
	setup_zombie_SS(whichOne);
	
	SZ_animateZombie(whichOne);
	
	//Ascundem zombie-ul la inceput
	$("#bubble_zombie"+whichOne).css('transform','scale('+0+')');
	
	//cand facem click pe zombie
	$("#zombie"+whichOne).bind('mousedown touchstart', function(e) {
		if($("#zombie"+whichOne).css('opacity')!=0 && $("#SZ2").css('opacity')!=1){
			fireGun(event);
			zombieHit(whichOne-1);
		}
	});
}

var scalex_zombie = [0,0,0,0,0,0];
var leftx_zombie = [0,0,0,0,0,0];

//Animare zombi sa se apropie
function SZ_animateZombie(whichOne) {
	var timex = [13000,8000,16000,14000,10000,18000];
	
	var $zombiex = $("#zombie"+whichOne);
	
	$zombiex.css('transform', 'scale('+0+')');
	
	//resetam opacitatea la zombie
	$zombiex.css({opacity:1});
	
	var amty = ($(window).height()*0.7);
	var ZS_ease = ['easeInSine','easeOutQuart','easeInOutQuad','easeInSine','easeOutQuart','easeInOutQuad'];
	
	//animare zombi
	$zombiex.delay(timex[whichOne-1]/3).animate({
		left: "+="+1+ "px",
	}, {
		easing: ZS_ease[whichOne-1],
		duration: timex[whichOne-1],
		step: function(now, fx) {
			if(fx.prop == "left") {
				var xx = (fx.pos)*16;
					if(xx > 15) {
						$(this).stop();
						SZ_resetZombie(whichOne,0);
					} else {
						$(this).css('transform','scale('+xx+')');
						scalex_zombie[whichOne-1] = xx;
					}
			}
		},
		complete: function() {
		}
	});
}


function SZ_resetZombie(whichOne, zombieBubble_generate) {
	
	zombieHits_counter[whichOne-1]=0;
	//atribuim un user pt div
	var $zombiex = $("#zombie"+whichOne);
	
	$zombiex.stop();
	
	var top_position = $('#SZ0').height() * 0.435;
	
	if(zombieBubble_generate==1) {
		var $bubble_zombiex = $("#bubble_zombie"+whichOne);
		$bubble_zombiex.css({
			top: top_position+'px',
			left: $zombiex.css("left"),
			opacity:1
		});
		$bubble_zombiex.css('transform', 'scale('+scalex_zombie[whichOne-1]+')');
		
		//facem call la functia de animare bubble
		bubbleZombie_flyAway(whichOne);
	}
	
	var left_position = Math.floor(Math.random() * ($('#SZ0').width())-(ratio*50)) + (ratio*50);
	
	//pozitia stanga
	leftx_zombie[whichOne-1] = left_position;
	
	//repozitionare zombie
	$zombiex.css({top: top_position+'px', left: left_position+'px', opacity:0});
	
	SZ_animateZombie(whichOne);
}