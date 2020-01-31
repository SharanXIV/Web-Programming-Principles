/********************************************************************************* 
*
* WEB222 Assignment #5
*
* I declare that this assignment is my own work in accordance with Seneca 
* Academic Policy. No part of this assignment has been copied manually or 
* electronically from any other source (including web sites) or distributed to 
* other students. 
* 
* Name: Sharan Shanmugaratnam     Student ID: 153601174     Date: July 26th, 2018 
* 
********************************************************************************/

function formValidation() {
    clearErrors();
    var clear = validCity();
    clear = validProvince() && clear;
    clear = validPostalCode() && clear;
    clear = validUsername() && clear;
    clear = validPassword() && clear;
    clear = validPassword2() && clear;

    if (clear == true) {
        alert("Registration was successful!")
    }
    else {
        alert("Registration was unsuccessful!")
    }
    return clear;
}

function clearErrors() {
    document.querySelector("#cityError").innerHTML = "";
    document.querySelector("#provinceError").innerHTML = "";
    document.querySelector("#postalCodeError").innerHTML = "";
    document.querySelector("#usernameError").innerHTML = "";
    document.querySelector("#passwordError").innerHTML = "";
    document.querySelector("#password2Error").innerHTML = "";
}

function validCity() {
    var element = document.getElementById("city");
    var entry = element.value.trim();
    entry = entry.toUpperCase();
    var error = document.querySelector("#cityError");
    var allAlpha = true;

    for (var i = 0; i < entry.length; i++) {
        if (entry.charAt(i) < "A" || entry.charAt(i) > "Z") {
            allAlpha = false;
        }
    }
    if (!allAlpha) {
        clearErrors();
        error.innerHTML += "<p>Error: City must contain letters only.</p>"
        element.focus();
        return allAlpha;
    }
    clearErrors();
    return allAlpha;
}

function validProvince() {
    var element = document.getElementById("provs");
    var entry = element.value;
    var error = document.querySelector("#provinceError");

    if (entry.length == 0) {
        clearErrors();
        error.innerHTML += "<p>Error: No Province was selected.<p>";
        element.focus();
        return false;
    }
    else {
        clearErrors();
        return true;
    }
}

function validPostalCode() {
    var element = document.getElementById("postalCode");
    var entry = element.value;
    var error = document.querySelector("#postalCodeError");
    var postalCode = /^[A-Z][0-9][A-Z][0-9][A-Z][0-9]$/;

    if (entry.match(postalCode)) {
        clearErrors();
        return true;
    }
    else {
        clearErrors();
        error.innerHTML += "<p>Error: Postal code is in the wrong format.</p>"
        element.focus();
        return false;
    }
}

function validUsername() {
    var element = document.getElementById("username");
    var entry = element.value.trim();
    var error = document.querySelector("#usernameError");

    if (entry.length < 6) {
        clearErrors();
        error.innerHTML += "<p>Error: Username must be at least 6 characters.</p>"
        element.focus();
        return false;
    }
    if (entry.charAt(0) < "A" || entry.charAt(0) > "z") {
        clearErrors();
        error.innerHTML += "<p>Error: Username must start with a letter.</p>"
        element.focus();
        return false;
    }

    clearErrors();
    return true;
}

function validPassword() {
    var element = document.getElementById("password");
    var entry = element.value;
    var error = document.querySelector("#passwordError");
    var capString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var hasNum = false;
    var hasCap = false;

    if (entry.length < 8) {
        clearErrors();
        error.innerHTML += "<p>Error: Password must be at least 8 characters.</p>"
        element.focus();
        return false;
    }
    if (entry.charAt(0) < "A" || entry.charAt(0) > "z") {
        clearErrors();
        error.innerHTML += "<p>Error: Password must start with a letter.</p>"
        element.focus();
        return false;
    }
    for (var i = 0; i < entry.length; i++) {
        if (entry.charAt(i) >= 0 || entry.charAt(i) <= 9) {
            hasNum = true;
        }
        if (capString.indexOf(entry.substr(i, 1)) >= 0) {
            hasCap = true;
        }
    }
    if (!hasNum) {
        clearErrors();
        error.innerHTML += "<p>Error: Password must contain a number.</p>"
        element.focus();
        return false;
    }
    if (!hasCap) {
        clearErrors();
        error.innerHTML += "<p>Error: Password must contain a capital.</p>"
        element.focus();
        return false;
    }
    clearErrors();
    return true;
}

function validPassword2() {
    var error = document.querySelector("#password2Error");
    var entry = document.signup.password2.value.trim();
    if (validPassword() == false){
        clearErrors();
        error.innerHTML += "<p>Error: First password entry is not valid!</p>";
        document.signup.password.focus();
        return false;
    }
    else if (entry != document.signup.password.value.trim()) {
        clearErrors();
        error.innerHTML += "<p>Error: Passwords do not match!</p>";
        document.signup.password2.focus();
        return false;
    }
    clearErrors();
    return true;
}