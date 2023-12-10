let username = document.getElementById("username").value;
let password = document.getElementById("password").value;
let validationText = document.getElementById("validationText");
let validationPassword = document.getElementById("validationPassword");
let btn = document.getElementById("btn")

function validation(){
    if(username.length == ""){
        validationText.innerHTML = 'Fill the form';
    }  
    if(password.length == ""){
        validationPassword.textContent = 'Write a password';
    }
}




btn.addEventListener("click", validation)

