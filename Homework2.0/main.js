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
        document.getElementById("EmailError).textContent = "";
        return true;
    }

}


function validateUsername(){
    username = document.getElementById("username").value.toLowerCase();
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
    let pwd = document.getElementById("pwderror").value;
    let errorMessage = [];

    if(!pwd.match(/[a-z]/)) errorMessage.push("Enter at least one lowercase letter in your password");

    if(!pwd.match(/[A-Z]/)) errorMessage.push("Enter at least one uppercase letter in your password");

    if(!pwd.match(/[0-9]/)) errorMessage.push("Enter at least one number in your password");

    if(!pwd.match(/[!\@#\$%&*\-_\\.+\(\)]/)) errorMessage.push("Enter at least one special character in your password");
    
    if(pwd.includes(username)) errorMessage.push("You can't add your Username as your password")
    
    if(errorMessage.length > 0){
        document.getElementById("pwderror").textContent = errorMessage.join(", ");
        return errorMessage;
    }

    else{
        document.getElementById("pwderror").textContent = "Your password fits the criteria";
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
    const isValid =
        validateDOB()&&
        validateSSN()&&
        validateZipcode() &&
        validateEmail(document.getElementById("email").value) &&
        validateUsername() &&
        validatePassword();
    if(!isValid){
        event.preventDefault();
        alert("Please correct any errors before submitting your form.");
        return false;
    }
    return true;
}

/**I am implementing this code so incase if a person forget to fill something out or there are errors, it should
mentioned to the person that they need to fix the errors before submit it. Here are the inks to it
https://www.w3schools.com/js/js_validation.asp **/

document.addEventListener('DOMContentLoaded', function(){
    const form = document.getElementById('submitForm');
    form.addEventListener('submit', handleFormSubmit);
});
