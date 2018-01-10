var ratio_use = ratio;
//functia principala
function main_call_setupContent() {
	$('#SZ_maincontent').css('width', 600 * ratio);
	$('#SZ_maincontent').css('height', 400 * ratio);

	$('#SZ_maincontent').css('left',($(window).width()/2)-((600 * ratio)/2));
	$('#SZ_maincontent').css('top',($(window).height()/2)-((400 * ratio)/2));
	
	$('#box1').css('width', 631 * ratio);
	$('#box1').css('height', 457 * ratio);
	$('#box1').css('left', ($(window).width()/2)-((637 * ratio)/2));
	$('#box1').css('top', ($(window).height()/2)-((457 * ratio)/2));
	
	$('#logo').css('width', 400 * ratio);
	$('#logo').css('height', 146 * ratio);
	$('#logo').css('left', 0);
	$('#logo').css('top', 0);
	//Arma
	$('#SZ1').css('width', 150 * ratio);
	$('#SZ1').css('height', 150 * ratio);
	
	//Incarcator
	$('#SZ2').css('width', 200 * ratio);
	$('#SZ2').css('height', 90 * ratio);
	
	//Scorul
	$('#SZ3').css('width', 235 * ratio);
	$('#SZ3').css('height', 100 * ratio);
	
	//var image_ids= ["#SZ1","#SZ2","#SZ3"];
	//var image_sizes = [ [150, 150], [200, 90], [235, 100] ];
	
	//Intro si sfarsit joc
	if($(window).height() < $(window).width()) {
		ratio_use = $(window).height() / 800;
	}
	
	$('#SZ4').css('width', 458 * ratio);
	$('#SZ4').css('height', 370 * ratio);
	$('#SZ4').css('left', 71 * ratio);
	$('#SZ4').css('left', ($(window).width()/2)-((600 * ratio_use)/2));
	$('#SZ4').css('top', ($(window).height()/2)-((400 * ratio_use)/2));
	
	$('#textx').css('width', '100%');
	$('#textx').css('height', '50%');
	//Arma
	setup_gun_SS();
	
	
	//Creare zombie
	for(i = 1 ; i < 7; i++) {
		SZ_createZombie(i);
	}
	
	start_end_game(0);
}

var gameEnded = 0;
function start_end_game(whichOne) {
	for (i = 1; i < 4; i++) {
		$('#SZ_'+i).css({opacity:0});
	}
	for (i = 1; i < 7; i++) {
		$('#zombie_'+i).stop();
		$('#zombie_'+i).css({opacity:0});
		$('#bubble_zombie_'+i).css({opacity:0});
		$("#zombie"+i).css("z-index", i+100);
	}
	if(whichOne==0){
		$('#SZ4').css('background-image', 'url(Images/splash_intro.png)');
	} else {
		$('#SZ3').css({opacity:1});
		$('#SZ4').css('background-image','url(Images/splash_gameover.png)');
	}
	$('#SZ4').css('top',0);

	//$('#SZ4').css('top', ($(window).height()/2)-((701 * ratio_use)/2));
	
	$('#SZ4').css({opacity:1});
	gameEnded= 1;
}

var current_score = 0;
function updateScore() {
	$("#textx").text(current_score);
}


function start_game() {
	current_score = 0;
	updateScore();
	zindex_current = 0;
	current_shots = 0;
	gameEnded = 0;

	$('#SZ4').css({opacity:0});
	$('#SZ4').css('top', ($(window).height()));
	for (i = 1; i < 4; i++) {
		$('#SZ0_'+i).css({opacity:1});
	}
	$('#SZ2').css({opacity:0});

	for (i = 0; i < 7; i++) {
		SZ_resetZombie(i,0);
	}
	$('#SZ3').css({opacity:0.5});
}