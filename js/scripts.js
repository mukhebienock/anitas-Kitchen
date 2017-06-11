$(document).ready(function() {
  $("form#subscription").submit(function(event) {
    event.preventDefault();
    var youremail = $("input#youremail");
    var result = besubscribed(youremail);

    $("#result").show();
  });



  var besubscribed = function(youremail) {
    return true;
  };
});
