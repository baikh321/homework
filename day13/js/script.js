$(document).ready(function() {
	$(".button").on("click", function(e) {
		e.preventDefault();
		$("#overlay").fadeIn();
	});

	// $("#overlay").on("click", function(e) {
	// 	e.preventDefault();
	// 	$("#overlay").fadeOut();
	// });
});