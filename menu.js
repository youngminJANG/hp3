var now = -1;
var last =2;

jQuery(document).ready(function() {
  $(".nav>li").mouseover(function(){
    $(this).children().slideDown();
  });
  
  $(".nav>li").mouseleave(function(){
    $(this).children().slideUp();
  });
  
  start();
  
  $(".banner img").click(function(){
    $("#modal").addClass("active");
  });
  
  $("#modal button").click(function(){
    $("#modal").removeClass("active");
  });
  
  
  
  
});

function start(){
  setInterval(function(){ InOunt();},3000);
}







