function rotateGun(e) {
	var xPos = e.clientX;
	var currentXPositionPercentage = xPos/newWidth;
	var amountToRotate = -15 + (currentXPositionPercentage * 50);
	$("#SZ1").css('transform', 'rotate('+amountToRotate+'deg)');
	
}

//Function pentru zombie
function bubbleZombie_flyAway(whichOne) {
	current_score++;
	updateScore();
	//asignam un nume pentru div
	var $zombiex = $("#bubble_zombie"+whichOne);
	$zombiex.animate({
		top: "-="+50*ratio+ "px",
	}, {
		easing: "easeOutElastic",
		duration: 400,
		complete: function() {
			$(this).delay(150).animate({
				opacity: "-="+1,
			}, {
				easing: "easeOutQuint",
				duration: 1000,
				step: function(now, fx) {
					if(fx.prop == "opacity" && fx.pos >= 0.1) {
						var xx = 0.5/(fx.pos);
						$(this).css('transform', 'scale('+xx+')');
					}
				}, complete: function() {
					SZ_animateZombie(whichOne);
				}//sfarsit complete function
			}); //sfarsit a doua animatie
		}//sfarsit complete function
	});//sfarsit prima animatie
}