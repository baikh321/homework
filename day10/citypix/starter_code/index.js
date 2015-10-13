$(document).ready(function(){


$(document).on('change', '#input', function() {
  changeBackground();
});


function changeBackground(){
  var city = $("#input").val();

  if (city === "New York City"){
    $("body").removeClass().addClass("nyc");
  } 
  else if (city === "San Francisco"){
    $("body").removeClass().addClass("sf");
  }
  else if (city === "Los Angeles"){
    $("body").removeClass().addClass("la");
  }
  else if (city === "Austin"){
    $("body").removeClass().addClass("austin");
  }
  else if (city === "Sydney"){
    $("body").removeClass().addClass("sydney");
  }

  else {
    $("body").removeClass()
  };
};
});