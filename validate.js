const email = document.querySelector("input[type=email]");
const password = document.querySelector("input[type=password]");

function onSubmitFunction(event) {
  const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
  const emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  if (email.value === "" || password.value === "") {
    alert("Please fill in all fields.");
    return false; 
  }

  if (!emailPattern.test(email.value)) {
    alert("Enter a valid email.");
    return false;  
  }

  if (!passwordPattern.test(password.value)) {
    alert("Enter a valid password. It must contain at least one uppercase letter, one lowercase letter, one number, and be at least 8 characters long.");
    return false; 
  }

  return true; 
}