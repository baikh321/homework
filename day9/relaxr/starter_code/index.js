// $('p.readmore a').on('click', function (e) {
//     e.preventDefault();

// 	var activeLink = $(this);
// 	if (activeLink.hasClass(".hide")) {
// 		// link is already expanded so write code to close it
// 		// then remove the expanded class
// 		activeLink.removeClass(".hide");
// 	} else {
// 		// link is not expanded so write code to open it
// 		// then add the expanded class
// 		activeLink.addClass(".hide");
// 	}

// 	$(this).find('a.readmore').toggle();

// });

$("p.readmore a").on("click", function(e) {
	e.preventDefault();
	$("#show-this-on-click").slideToggle();
	$(".readmore").addClass("hide");
	$(".readless").removeClass("hide");
});

$("p.readless a").on("click", function(e) {
	e.preventDefault();
	$("#show-this-on-click").slideToggle();
	$(".readless").addClass("hide");
	$(".readmore").removeClass("hide");
});

