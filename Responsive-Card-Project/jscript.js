$(document).ready(function() {

	//Add a class on mouse enter in the card
	($(".card") || $(".erto")).on("mouseenter", function () {
		$(this).addClass("selected").siblings().removeClass("selected"); 
	});	


});