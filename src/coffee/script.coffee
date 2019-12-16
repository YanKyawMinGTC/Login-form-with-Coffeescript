console.log("coffee")
$name = $("input[type='text']").val()
$pass = $("input[type='password']").val()
$email = $("input[type='email']").val()
#  for error value
$name_error = $(".username_error").val()
$email_error = $(".email_error").val()
$pass_error = $(".pass_error").val()
$(".submit").click ->
  name = $("input[type='text']").val()
  pass = $("input[type='password']").val()
  email = $("input[type='email']").val()
  name_regex = /^[A-Za-z]+$/
  pass_regex = /^[A-Za-z]\w{7,14}$/
  email_regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  if name =="" and email =="" and pass =="" 
    $(".error").addClass "active"
    console.log(name)
    false
  else if !name_regex.test(name)
      console.log(name)
      $(".username_error").addClass "active"
      false
  else if !email_regex.test(email)
      console.log(email)
      $(".email_error").addClass "active"
      false
  else if !pass_regex.test(pass)
      console.log(pass)
      $(".pass_error").addClass "active"
      false
  else
    console.log(name)
    alert("Username is "+name+"\n"+"Email is "+email+"\n"+"Password is "+pass)  
    true
