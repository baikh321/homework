// $('a.readmore').on('click', function (e) {
//     e.preventDefault();

// var activeLink = $(this);
// if (activeLink.hasClass(“.hide”) {
//     // link is already expanded so write code to close it
//    // then remove the expanded class
//    activeLink.removeClass(“.hide”);
// } else {
//     // link is not expanded so write code to open it
//    // then add the expanded class
//     activeLink.addClass(“.readmore”);
// }

// $(this).find(‘a.readmore').toggle();
// }

// });


$(document).ready(function() {
    $("#show-this-on-click").accordion({collapsible: true, active: false});
});