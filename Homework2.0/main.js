function validateDOB(){
    DOB = document.getElementById("DOB");
    let date = new Date(DOB.value);
    let maxDate = new Date().setFullYear(new Date().getFullYear(0-120));

    if (date > new Date()){
        document.getElementById("DOBError").textContent = "Cannot have date of birth in the future";
        DOB.value="";
        return false;
    }
    else if (date < new Date(maxDate)){
        document.getElementById("DOBError").textContent = "Cannot have date of birth be more than 120 years ago";
        DOB.value="";
        return false;
    }
    else{
        document.getElementById("DOBError").textContent = "";
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

function validateSSN(){
    const SSN = document.getElementById("SSN").textContent;
    const SSNPattern = /^[0-9]{3}-?[0-9]{2}-?[0-9]{4}$/;

    if (!SSNPattern.test(SSN)){
        document.getElementById("SSNError").textContent = "Please enter your valid Social Security Number";
        return false;
    }
    else{
        document.getElementById("SSNError").textContent = "";
        return true;
    }
}

function ValidateUsername{
    username = document.getElementById("username").value.toLowerCase();
    document.getElementById("username").value = username;

    if (username.length == 0){
        document.getElementById("username-error").textContent = "You can't leave your Username blank";
        return false;
    }

    if(!isNaN(username.characterAt(0))){
        document.getElementById("username-error").textContent = "You can't start your Username with a number";
        return false;
    }

    let regex = /^[a-zA-Z0-9_-]+$/;
    if(!regex.test(username)){
        document.getElementById("username-error").textContent = "Username can only have letters, underscore, numbers, and dashes";
        return false;
    }

    else if(username.length<5){
        document.getElementById("username-error").textContent = "Username must be at least 5 characters";
        return false;
    }

}