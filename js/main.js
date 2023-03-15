$(document).ready(function() {
    $(".color-range").on("input change", function() {
        // change body background color
        $("body").css("backgroundColor", $(this).val());
        console.log($(this).val());
        // change h1 color to white if the background is black
      if($(this).val() <= "#242424"){
        $("h1").css("color","white");
      }else{
        $("h1").css("color","black");
      }
    });
});