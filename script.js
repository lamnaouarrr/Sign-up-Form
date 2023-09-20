let password = document.getElementById("userPassword"),
    confirmPassword = document.getElementById("confirmPassword");

document.getElementById("submit").addEventListener("click", validatePassword);

function validatePassword(){
    if(password.value != confirmPassword.value){
        document.getElementById("messageCP").innerHTML = "**Passwords does not match";
        document.getElementById("confirmPassword").style.borderColor = "#c92a2a";
    }
    else{
        document.getElementById("messageCP").innerHTML = "";
        document.getElementById("confirmPassword").style.borderColor = "#ced4da";
    }
}