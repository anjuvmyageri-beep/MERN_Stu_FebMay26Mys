const signupForm = document.getElementById("signupForm");
const signupEmail = document.getElementById("signupEmail");
const signupPassword = document.getElementById("signupPassword");
const message = document.getElementById("message");

signupForm.addEventListener("submit", function(event){
    event.preventDefault();

    let email = signupEmail.value;
    let password = signupPassword.value;

    // Email required
    if(!email){
        message.textContent = "Email is required";
        message.style.color = "red";
        signupEmail.focus();
        return;
    }

    // Email validation
    if(!email.includes("@") || !email.includes(".")){
        message.textContent = "Please enter valid email";
        message.style.color = "red";
        signupEmail.focus();
        return;
    }

    // Password required
    if(!password){
        message.textContent = "Password is required";
        message.style.color = "red";
        signupPassword.focus();
        return;
    }

    // Password length
    if(password.length < 8){
        message.textContent = "Password must be at least 8 characters";
        message.style.color = "red";
        signupPassword.focus();
        return;
    }

    // Uppercase check
    if(!/[A-Z]/.test(password)){
        message.textContent = "Password must contain 1 uppercase letter";
        message.style.color = "red";
        signupPassword.focus();
        return;
    }

    // Lowercase check
    if(!/[a-z]/.test(password)){
        message.textContent = "Password must contain 1 lowercase letter";
        message.style.color = "red";
        signupPassword.focus();
        return;
    }

    // Number check
    if(!/\d/.test(password)){
        message.textContent = "Password must contain 1 number";
        message.style.color = "red";
        signupPassword.focus();
        return;
    }

    // Special character
    if(!/[@#$%&*!]/.test(password)){
        message.textContent = "Password must contain 1 special character";
        message.style.color = "red";
        signupPassword.focus();
        return;
    }

    message.textContent = "Signup successful!";
    message.style.color = "green";
    console.log("Success!", {email, password:"****hidden*****"});
});
//clear message on input
signupEmail.addEventListener("input",()=>message.textContent="");
signupPassword.addEventListener("input",()=>message.textContent="");

