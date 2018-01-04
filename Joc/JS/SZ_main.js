var ratio;
var newWidth;
$(window).load(function() {
	var div = $(window);
	ratio = (div.width() / 1024);
	newWidth = div.width();
	
	main_call_setupContent();
})