console.log("✅ main.js loaded!");

function validateFname(){
    const fnameInput = document.getElementById("fname");
    const errorBox = document.getElementById("fnameError");
    const value = fnameInput.value.trim();
    const namePattern = /^[A-Za-z'-]{1,30}$/;

    if(value == ""){
        errorBox.textContent = "First name is required.";
        return false;
    }
    if(!namePattern.test(value)){
        errorBox.textContent = "The first name can only have letters, dashes, and apostrophes allowed.";
        return false;
    }
    errorBox.textContent = "";
    return true;

}

function validateLname(){
    const lnameInput = document.getElementById("lname");
    const errorBox = document.getElementById("lnameError");
    const value = lnameInput.value.trim();
    const namePattern = /^[A-Za-z'-]{1,30}$/;

    if(value == ""){
        errorBox.textContent = "Last name is required.";
        return false;
    }
    if(!namePattern.test(value)){
        errorBox.textContent = "The last name can only have letters, dashes, and apostrophes allowed.";
        return false;
    }
    errorBox.textContent = "";
    return true;

}

//Need to copy validatefname for validatelname because it's the same method, just tweaking some few variables

function validateMname(){
    let Mname = document.getElementById("Mname").value;
    const namePattern = /^[A-Z]+$/;
    
    Mname = Mname.toUpperCase();
    document.getElementById("Mname").value = Mname;
    
    if(!Mname.match(namePattern)){
        document.getElementById("mnameError").textContent = "Middle name initial must be upper case";
        return false;
    }
    else{
    	document.getElementById("mnameError").textContent = "";
        return true;   
    }
    
}

function validateDOB(){
    DOB = document.getElementById("DOB");
    let date = new Date(DOB.value);
    let maxDate = new Date();
    maxDate.setFullYear(maxDate.getFullYear() - 120);


    if (date > new Date()){
        document.getElementById("DOBError").textContent = "(Cannot have date of birth in the future)";
        DOB.value="";
        return false;
    }
    else if (date < new Date(maxDate)){
        document.getElementById("DOBError").textContent = "(Cannot have date of birth be more than 120 years ago)";
        DOB.value="";
        return false;
    }
    else{
        document.getElementById("DOBError").textContent = "";
        return true;
    }

}

function validateSSN(){
    const SSN = document.getElementById("SSN").value;
    const SSNPattern = /^[0-9]{3}-?[0-9]{2}-?[0-9]{4}$/;

    if(!SSN.match(SSNPattern)){
        document.getElementById("SSNError").textContent = "(Enter a valid Social Security Number)";
        return false;
    }
    else{
        document.getElementById("SSNError").textContent = "";
        return true;
    }
}

function validateZipcode(){
    const zipcodeInput = document.getElementById("zipcode");
    let zipC = zipcodeInput.value.replace(/[^\d]/g,"");

    if (!zipC){
        document.getElementById("ZipcodeError").textContent = "Your zipcode cannot be blank. Please fill it out."
        return false;
    }
    if (zipC.length > 5){
        zipC = zipC.slice(0,5) + "-" + zipC.slice(5,9);
    }
    else{
        zipC = zipC.slice(0,5);
    }

    zipcodeInput.value = zipC;
    document.getElementById("ZipcodeError").textContent = "";
    return true;

}

function validateEmail(email){
    var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!email){
        document.getElementById("EmailError").textContent = "Email cannot be blank.";
        return false;
    }
    if(!email.match(emailRegex)){
        document.getElementById("EmailError").textContent = "Enter a valid email address.";
        return false;
    }
    else{
        document.getElementById("EmailError").textContent = "";
        return true;
    }

}


function validateUsername(){
    let username = document.getElementById("username").value.toLowerCase();
    document.getElementById("username").value = username;

    if (username.length == 0){
        document.getElementById("usernameError").textContent = "You can't leave your Username blank";
        return false;
    }

    if(!isNaN(username.charAt(0))){
        document.getElementById("usernameError").textContent = "You can't start your Username with a number";
        return false;
    }

    let regex = /^[a-zA-Z0-9_-]+$/;
    if(!regex.test(username)){
        document.getElementById("usernameError").textContent = "Username can only have letters, underscore, numbers, and dashes";
        return false;
    }

    else if(username.length < 5){
        document.getElementById("usernameError").textContent = "Username must be at least 5 characters";
        return false;
    }

    else if(username.length > 30){
        document.getElementById("usernameError").textContent = "Username cannot be longer than 30 characters";
        return false;
    }

    else{
        document.getElementById("usernameError").textContent = "";
        return true;
    }

}

function validatePassword(){
    let pwd = document.getElementById("pwd").value;
    let username = document.getElementById("username").value;
    let errorMessage = [];

    if(!pwd.match(/[a-z]/)) errorMessage.push("Enter at least one lowercase letter in your password");

    if(!pwd.match(/[A-Z]/)) errorMessage.push("Enter at least one uppercase letter in your password");

    if(!pwd.match(/[0-9]/)) errorMessage.push("Enter at least one number in your password");

    if(!pwd.match(/[!\@#\$%&*\-_\\.+\(\)]/)) errorMessage.push("Enter at least one special character in your password");
    
    if(pwd.includes(username)) errorMessage.push("You can't add your Username as your password")
    
    if(errorMessage.length > 0){
        document.getElementById("pwderror").textContent = errorMessage.join(", ");
        return false;
    }

    else{
        document.getElementById("pwderror").textContent = "Your password fits the criteria";
        return true;
    }

}

function confirmPassword(){
    const pwd = document.getElementById("pwd").value;
    const repwd = document.getElementById("repwd").value;

    if(pwd !== repwd){
        document.getElementById("repwdError").textContent = "Your password does not match. Please make sure to match your passwords.";
        return false;
    }
    else{
        document.getElementById("repwdError").textContent = "";
        return true;
    }
}

function ReviewInput(){
    var ContentInfo = document.getElementById("submitForm");
    var ContentOutput = "<table class = 'output' ><th colspan = '3' > Review your form: </th>";

    for(let i = 0; i < ContentInfo.elements.length; i++){
        if(ContentInfo.elements[i].value !== ""){
            switch(ContentInfo.elements[i].type){
                case "checkbox":
                    if(ContentInfo.elements[i].checked){
                        ContentOutput += `<tr><td align = 'right'>${ContentInfo.elements[i].name} </td><td> &#x2713; </td></tr>`;

                    }
                    break;

                case "radio":
                    if(ContentInfo.elements[i].checked){
                       ContentOutput += `<tr><td align='right'>${ContentInfo.elements[i].name}</td><td>${ContentInfo.elements[i].value}</td></tr>`;
                    }
                    break;
                
                default:
                    ContentOutput += `<tr><td align='right'>${ContentInfo.elements[i].name}</td><td>${ContentInfo.elements[i].value}</td></tr>`;
            }
        }
    }
    ContentOutput += "</table>";
    document.getElementById("ReviewInput").innerHTML = ContentOutput;
}

function RemovingReviewData(){
    document.getElementById("ReviewInput").innerHTML = "";
}

function handleFormSubmit(event){
    console.log("handleFormSubmit is running!");
    const isValid =
        validateFname() &&
        validateMname() &&
        validateLname() &&
        validateDOB()&&
        validateSSN()&&
        validateZipcode() &&
        validateEmail(document.getElementById("email").value) &&
        validateUsername() &&
        validatePassword() &&
        confirmPassword();
    
    if(!isValid){
        console.log("Validate failed, it's preventing from submission.");
        event.preventDefault();
        alert("Please correct any errors before submitting your form.");
        return false;
    }
    console.log("All validations passed, proceed to thank you page.");
    return true;
}

/**I am implementing this code so incase if a person forget to fill something out or there are errors, it should
mentioned to the person that they need to fix the errors before submit it. Here are the inks to it
https://www.w3schools.com/js/js_validation.asp **/

document.addEventListener('DOMContentLoaded', function(){
    const form = document.getElementById('submitForm');
    form.addEventListener('submit', handleFormSubmit);
    const rememberMe = document.getElementById("rememberMe");
    
    if (rememberMe && !rememberMe.checked) {
        deleteAllCookies();
    }
});



function showAlert(){
    var alert = document.getElementById("alert");
    
}

function setCookie(name, cvalue, expiredDays){
    var day = new Date();
    day.setTime(day.getTime() + (expiredDays * 24 * 60 * 60 * 1000));
    var expires = "expires = " + day.toUTCString();
    document.cookie = name + " = " + cvalue + "; " + expires + "; path=/";
}

function getCookie(name){
    var cookieName = name + " = ";
    var cookies = document.cookie.split(';');

    for(var i = 0; i < cookies.length; i++){
        var cookie = cookies[i].trim();
        if(cookie.indexOf(cookieName) === 0){
            return cookie.substring(cookieName.length, cookie.length);
        }
    }
    return "";
}

const inputs = [
  { id: "fname", cookieName: "fname" },
  { id: "lname", cookieName: "lname" },
  { id: "email", cookieName: "email" },
  { id: "username", cookieName: "username" }
];

inputs.forEach(function(input) {
    var inputElement = document.getElementById(input.id);
    var cookieValue = getCookie(input.cookieName);

    if(cookieValue !== ""){
        inputElement.value = cookieValue;
    }

    inputElement.addEventListener("input", function() {
        setCookie(input.cookieName, inputElement.value, 30);
    });
});

var fname = getCookie("fname");
if(fname !== ""){
    document.getElementById("welcome1").textContent = "Welcome back, " + fname + "!<br>";
    document.getElementById("welcome2").innerHTML = "a href='#' id= 'newUser'>Not " + fname + "? Click here to start a new form.</a>";
    document.getElementById("newUser").addEventListener("click", function () {
                            inputs.forEach(function (input) {
                                setCookie(input.cookieName, "", -1);
                            });
                            location.reload();
    });
}

document.getElementById("rememberMe").addEventListener("change", function() {
    const rememberMe = this.checked;

    if (!rememberMe) {
        deleteAllCookies();
    } else {
        inputs.forEach(function(input) {
            const inputElement = document.getElementById(input.id);
            if (inputElement.value.trim() !== "") {
                setCookie(input.cookieName, inputElement.value, 2);
            }
        });
    }
});

function deleteAllCookies(){
    document.cookie.split(";").forEach(function (cookie){
        let equalIndex = cookie.indexOf("=");
        let name = equalIndex > -1 ? cookie.substr(0, equalIndex) : cookie;
        document.cookie = name + "=; expires = Fri, 01 January 2005 00:00:00 UTC; path=/;";
    });
}

    
    
