const form = document.getElementById("form");

function formValidation (event) {
      event.preventDefault();
      // Target Message 
      const FnameError = document.getElementById("errorFname");
      const LnameError = document.getElementById("errorLname");
      const passwordError = document.getElementById("errorPass");
      const errorEmail = document.getElementById("errorEmail");

      // Target Inputs Values 
      const fName = event.target.firstName.value;
      const lName = event.target.lastName.value;
      const email = event.target.email.value;
      const password = event.target.password.value;
      const select = event.target.select.value;
      const textArea = event.target.textarea.value;
      // The Object for send data in server
      const formInformation = {
            fName,
            lName,
            email,
            password,
            select,
            textArea
      }

      if (fName === '') {
            FnameError.innerHTML = "First Name Is Requerd ! ";
            FnameError.classList.add("fnameErrorMessage");
      } else {
            FnameError.innerHTML = " ";
            FnameError.classList.remove("fnameErrorMessage");
      }

      if (lName === '') {
            LnameError.innerHTML = "Last Name Is Requerd ! ";
            LnameError.classList.add("fnameErrorMessage");
      } else {
            LnameError.innerHTML = "";
            LnameError.classList.remove("fnameErrorMessage");
      }

      if (password === '') {
            passwordError.innerHTML = "Please Enter Your Password !";
            passwordError.classList.add("passErrorMessage")
      } else {
            passwordError.innerHTML = "";
            passwordError.classList.remove("passErrorMessage")
      }

      if (!email.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
            errorEmail.innerHTML = "Please enter a valid email";
            errorEmail.classList.add("emailErrorMessage")
            return   false;
      } 
      else {
            errorEmail.innerHTML = "";
            errorEmail.classList.remove("emailErrorMessage")
            return true;
      }
      
      
}

form.addEventListener("submit", formValidation);