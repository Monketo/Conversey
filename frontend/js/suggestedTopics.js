$(function () {
  $("#stars-existing button").click(function () {
    var $star = $(this);
    var currId = parseInt($star.attr('id'), "10");
    if($star.attr('class').indexOf('active') != -1){
      $star.css("color", "grey");
      $star.removeClass("active");
      for (var i = currId; i <= 5; i++) {
        var $sibl = $("#" + i);
        $sibl.css("color", "grey");
        $sibl.removeClass("active");
      }
    } else {
      $star.css("color", "yellow");
      $star.addClass("active");
      for (i = currId; i >= 1; i--) {
        $sibl = $("#" + i);
        $sibl.css("color", "yellow");
        $sibl.addClass("active");
      }
    }
  });
});

