//regex for foid
// const unregex = /^FO-([0-9]{3})+$/;

const Validate = () => {
var role = document.getElementById('role');
var names = document.getElementById('names');
var datetoday = document.getElementById('datetoday');
var dateofbirth = document.getElementById('dateofbirth');
var ward = document.getElementById('ward');
var address = document.getElementById('adress');
var yearsofstay = document.getElementById('yearsofstay');
var username = document.getElementById('username');
var password = document.getElementById('password');
var email = document.getElementById('email');
var nin = document.getElementById('nid');
var foid = document.getElementById('foid');
var activity = document.getElementById('activity');
var residence = document.getElementById('residence');
var gender = document.getElementById('gender');


var roleError = document.getElementById('roleerr');
var namesError = document.getElementById('nameserr');
var datetodayError = document.getElementById('datetodayerr');
var dateofbirthError = document.getElementById('dateofbirtherr');
var wardError = document.getElementById('warderr');
var addressError = document.getElementById('adresserr');
var yearsofstayError = document.getElementById('yearsofstayerr');
var usernameError = document.getElementById('usernameerr');
var passwordError = document.getElementById('passworderr');
var emailError = document.getElementById('emailerr');
var ninError = document.getElementById('niderr');
var foidError = document.getElementById('foiderr');
var activityError = document.getElementById('activityerr');
var residenceError = document.getElementById('residenceerr');
var genderError = document.getElementById('gendererr');

//regex for foid
const foidRegex = /^FO-([0-9]{3})+$/;


if (role.value == "") {
    role.style.border = '1px solid red';
    roleError.textContent = 'Please specify role';
    roleError.style = 'color: red; font-size: 11px; font-family: Arial, Helvertica, Sans-serif;'
    return false
} 
else if ( role.value == 'notspecified') {
    role.style.border = '1px solid red';
    roleError.textContent = 'Please specify role';
    roleError.style = 'color: red; font-size: 11px; font-family: Arial, Helvertica, Sans-serif;'
    return false
}
else{
role.style.border = '1px solid green';
roleError.textContent = "";
}

//
if (password.value == "") {
    password.style.border = '1px solid red';
    passwordError.textContent = 'Please specify password';
    passwordError.style = 'color: red; font-size: 11px; font-family: Arial, Helvertica, Sans-serif;'
    return false
} 
else if ( password.value.length < 5) {
    password.style.border = '1px solid red';
    passwordError.textContent = 'password mustbe atleast five characters';
    passwordError.style = 'color: red; font-size: 11px; font-family: Arial, Helvertica, Sans-serif;'
    return false
}
else{
password.style.border = '1px solid green';
passwordError.textContent = "";
}

//
if (foid.value == "") {
    foid.style.border = '1px solid red';
    foidError.textContent = 'Please farmerOne Number';
    foidError.style = 'color: red; font-size: 11px; font-family: Arial, Helvertica, Sans-serif;'
    return false;
} 
else if (!foid.value.match(foidRegex)) {
    foid.style.border = '1px solid red';
    foidError.textContent = 'Please use format fo-001';
    foidError.style = 'color: red; font-size: 11px; font-family: Arial, Helvertica, Sans-serif;'
    return false;
}
else{
foid.style.border = '1px solid green';
foidError.textContent = "";
}

//
 if (ward.value === "selectward") {
    ward.style.border = '1px solid red';
    wardError = 'Please select ward';
    wardError.style = 'color: red; font-size: 11px; font-family: Arial, Helvertica, Sans-serif;'
    return false;
}
else{
ward.style.border = '1px solid green';
wardError.textContent = "";
}
//
if (activity.value === "selectactivity") {
    activity.style.border = '1px solid red';
    activityError = 'Please select activity';
    activityError.style = 'color: red; font-size: 11px; font-family: Arial, Helvertica, Sans-serif;'
    return false;
}
else{
activity.style.border = '1px solid green';
activityError.textContent = "";
}
//
if (residence.value === "select residence type") {
    residence.style.border = '1px solid red';
    residenceError = 'Please select residence';
    residenceError.style = 'color: red; font-size: 11px; font-family: Arial, Helvertica, Sans-serif;'
    return false;
}
else{
residence.style.border = '1px solid green';
residenceError.textContent = "";
}

//
if (gender.value === "select gender") {
    gender.style.border = '1px solid red';
    genderError = 'Please select residence';
    genderError.style = 'color: red; font-size: 11px; font-family: Arial, Helvertica, Sans-serif;'
    return false;
}
else{
gender.style.border = '1px solid green';
genderError.textContent = "";
}














}