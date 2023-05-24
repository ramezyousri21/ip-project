document.getElementById("signupForm").addEventListener("submit", function(event) {
  event.preventDefault();

  var password = document.getElementById("password").value;
  var email = document.getElementById("email").value;
  var name = document.getElementById("firstName").value + document.getElementById("lastName").value
  var nationality = document.getElementById("nationality").value

  var passwordError = document.getElementById("passwordError");
  var emailError = document.getElementById("emailError");

  // Password length validation
  if (password.length < 8) {
    passwordError.textContent = "Password must be at least 8 characters long.";
    return;
  } else {
    passwordError.textContent = "";
  }

  // Email format validation
  var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/;
  if (!email.match(emailRegex)) {
    emailError.textContent = "Invalid email address.";
    return;
  } else {
    emailError.textContent = "";
  }

  

console.log("Sending data")
  //Data Sending to API backend
  const http = new XMLHttpsRequest()
  const user_Data = {
    "Username":email,
    "Password":password,
    "Nationality":nationality,
    "FullName":name
  }
  const url  = 'http://51.11.178.214:8080/user/'+user_Data.Username+'-'+user_Data.Password+'-'+user_Data.FullName+'-'+user_Data.Nationality
http.open("POST" , url , true)
console.log(user_Data)
http.send()

// Form submission
//this.submit();

});
