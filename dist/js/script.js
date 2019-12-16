var $email, $email_error, $name, $name_error, $pass, $pass_error;

console.log("coffee");

$name = $("input[type='text']").val();

$pass = $("input[type='password']").val();

$email = $("input[type='email']").val();

//  for error value
$name_error = $(".username_error").val();

$email_error = $(".email_error").val();

$pass_error = $(".pass_error").val();

$(".submit").click(function() {
  var email, email_regex, name, name_regex, pass, pass_regex;
  name = $("input[type='text']").val();
  pass = $("input[type='password']").val();
  email = $("input[type='email']").val();
  name_regex = /^[A-Za-z]+$/;
  pass_regex = /^[A-Za-z]\w{7,14}$/;
  email_regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (name === "" && email === "" && pass === "") {
    $(".error").addClass("active");
    console.log(name);
    return false;
  } else if (!name_regex.test(name)) {
    console.log(name);
    $(".username_error").addClass("active");
    return false;
  } else if (!email_regex.test(email)) {
    console.log(email);
    $(".email_error").addClass("active");
    return false;
  } else if (!pass_regex.test(pass)) {
    console.log(pass);
    $(".pass_error").addClass("active");
    return false;
  } else {
    console.log(name);
    alert("Username is " + name + "\n" + "Email is " + email + "\n" + "Password is " + pass);
    return true;
  }
});
