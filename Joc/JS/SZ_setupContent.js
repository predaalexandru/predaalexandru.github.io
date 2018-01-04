//functia principala
function main_call_setupContent() {
	//Arma
	//$('#SZ1').css('width', 150 * ratio);
	//$('#SZ1').css('height', 150 * ratio);
	
	//Incarcator
	//$('#SZ2').css('width', 200 * ratio);
	//$('#SZ2').css('height', 90 * ratio);
	
	//Scorul
	//$('#SZ3').css('width', 235 * ratio);
	//$('#SZ3').css('height', 100 * ratio);
	
	var image_ids= ["#SZ1","#SZ2","#SZ3"];
	var image_sizes = [ [150, 150], [200, 90], [235, 100] ];
	
	//Arma
	setup_gun_SS();
	
	//Zombie
	SZ_createZombie(1);
	
	//Creare zombie
	for(i = 1 ; i < 7; i++) {
		SZ_createZombie(i);
	}
}