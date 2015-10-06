

// when the submit button is click. fire up the following function.

$("#submit-btn").click(function( event ) {

	// prevent the form from submitting
  event.preventDefault();

  // define citytype, search for input, and city-type ID and look for the value. then spitout the value in lowercase
  var cityType = $("input#city-type").val().toLowerCase();

  // create a sitch using the defined citytype
  switch (cityType) {

  	// when the value equals the following:
  	case "nyc": case "new york": case "new york city": case "ny":

  	// remove all classes
  		$("body").removeClass("nyc sf la austin sydney");

  		// Add specific class 
  		$("body").addClass("nyc");

  		// stop here, dont do anything else.
  	break;
  	case "sf": case "san francisco": case "bay area":
  		$("body").removeClass("nyc sf la austin sydney");
  		$("body").addClass("sf");
  	break;
  	case "la": case "los angeles": case "lax":
  		$("body").removeClass("nyc sf la austin sydney");
  		$("body").addClass("la");
  	break;
  	case "austin": case "atx":
  		$("body").removeClass("nyc sf la austin sydney");
  		$("body").addClass("austin");
  	break;
  	case "sydney": case "syd":
  		$("body").removeClass("nyc sf la austin sydney");
  		$("body").addClass("sydney");
  	break;

  	// if else, use default setting.
  	default: 
  		alert("Please enter a city");
  		$("body").removeClass("nyc sf la austin sydney");
  }
});

