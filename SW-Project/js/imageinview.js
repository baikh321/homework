$( document ).ready(function() {


	  // $('.one-a').bind('inview', function(event, visible) {

	  //     if (visible) {
	  //     	// console.log ("thisisinview");
	  //       $(this).stop().animate({ opacity: 1, left: 20 }, 300);
	  //     } else {
	  //       $(this).stop().animate({ opacity: 0, left: 0 }, 300);
	  //     }

	  // });


	$('.one-a').bind('inview', function(event, visible) {

	      if (visible) {
	      	console.log ("thisisinview");
	        $('.one-a, .one-b, .one-c, .one-d').addClass('show-photo');
	      } else {
	        $('.one-a, .one-b, .one-c, .one-d').removeClass('show-photo');
	      }
	      
	  });

	$('.two-a').bind('inview', function(event, visible) {

	      if (visible) {
	      	console.log ("thisisinview");
	        $('.two-a, .two-b, .two-c, .two-d').addClass('show-photo');
	      } else {
	        $('.two-a, .two-b, .two-c, .two-d').removeClass('show-photo');
	      }
	      
	  });

	$('.three-a').bind('inview', function(event, visible) {

	      if (visible) {
	      	console.log ("thisisinview");
	        $('.three-a, .three-b, .three-c, .three-d').addClass('show-photo');
	      } else {
	        $('.three-a, .three-b, .three-c, .three-d').removeClass('show-photo');
	      }
	      
	  });

	$('.four-a').bind('inview', function(event, visible) {

	      if (visible) {
	      	console.log ("thisisinview");
	        $('.four-a, .four-b, .four-c, .four-d').addClass('show-photo');
	      } else {
	        $('.four-a, .four-b, .four-c, .four-d').removeClass('show-photo');
	      }
	      
	  });

	$('.five-a').bind('inview', function(event, visible) {

	      if (visible) {
	      	console.log ("thisisinview");
	        $('.five-a, .five-b, .five-c, .five-d').addClass('show-photo');
	      } else {
	        $('.five-a, .five-b, .five-c, .five-d').removeClass('show-photo');
	      }
	      
	  });

	$('.six-a').bind('inview', function(event, visible) {

	      if (visible) {
	      	console.log ("thisisinview");
	        $('.six-a, .six-b, .six-c, .six-d').addClass('show-photo');
	      } else {
	        $('.six-a, .six-b, .six-c, .six-d').removeClass('show-photo');
	      }
	      
	  });
	
});