jQuery(document).ready(function($){



	  $('.1a').bind('inview', function(event, visible) {
      if (visible) {
        $(this).stop().animate({ opacity: 1, left: 100 }, 1000);
      } else {
        $(this).stop().animate({ opacity: 0, left: 0 }, 1000);
      }
  });
	
});