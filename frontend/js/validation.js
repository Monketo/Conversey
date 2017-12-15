var $result=$("#result");
var $email = $(".email");
var $pass = $(".pass");
var $confirm_pass=$(".pass_valid");
var $res_pass = $("#pass-res");
var $user = $(".uname");

var typingTimer;
var doneTypingInterval = 500;

function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function email_part(){
  $result.text("");
  var email = $email.val();
  clearTimeout(typingTimer);
  typingTimer = setTimeout(function () {
    console.log(email);
    if (validateEmail(email)) {
      $result.text(email + " is valid ");
      $result.css("color", "green");
      $email.css({
        "border": "1px solid green"

      });
    } else {
      $result.text(email + " is not valid ");
      $result.css("color", "red");
      $email.css({
        "border": "1px solid red"

      });
    }
  }, doneTypingInterval);

}

function user_part(){
  var username=$user.val();
  clearTimeout(typingTimer);
  typingTimer = setTimeout(function () {
    if (username.length < 1) {
      $user.css({
        "border": "1px solid red"
      });
    } else {
      $user.css({
        "border": "1px solid green"
      });
    }
  }, doneTypingInterval);
}



function password_part(){

  var message;

  var pass =$pass.val();
  var cpass =$confirm_pass.val();
  clearTimeout(typingTimer);
  typingTimer = setTimeout(function () {
    if (pass.length < 8) message = "pass is too short";
    if (pass !== cpass) message = "passwords do not match ";
    console.log(message);
    console.log(pass.length);

    if (message !== undefined) {
      $res_pass.text(message);
      $res_pass.css({
        "color": "red"
      })
      $confirm_pass.css("border", "1px solid red");
      $pass.css("border", "1px solid red");

    } else {
      $res_pass.text("");
      $confirm_pass.css("border", "1px solid green");
      $pass.css("border", "1px solid green");

    }
  }, doneTypingInterval);
}

function validate(){
  user_part();
  email_part();
  password_part();

}



$user.on("keyup", function () {
    user_part();
});

$email.on("keyup", function () {
  email_part();
});

$pass.on("keyup", function () {
  password_part();
});
$confirm_pass.on("keyup", function () {
  password_part();
});



$(".submit").on("click", validate);