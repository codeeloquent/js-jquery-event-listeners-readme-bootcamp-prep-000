//define functions here

function getIt(){
  $('p').on("click", function(){
    alert("Hey!");
  });
}

function frameIt(){
  $('img').on("load", function() {
    $('img').addClass("tasty");
  });
}

function pressIt(){
  $('#typing').on("kdydown", function(press){
    if(press.which === 71){
      alert("You pressed dwon the G key.");
    }
  });
}

$(document).ready(function(){

// call functions here
  
});
