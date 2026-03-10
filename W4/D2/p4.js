const studentForm = document.getElementById("studentForm");
const nameInput = document.getElementById("nameInput");
const emailInput = document.getElementById("emailInput");
const inspectBtn = document.getElementById("inspectBtn");
const terms = document.getElementById("terms");
const country = document.getElementById("Country");

inspectBtn.addEventListener("click", function () {

    console.log("Form:", studentForm);
    console.log("Name:", nameInput.value);
    console.log("Email:", emailInput.value);

    const selectedGender = document.querySelector('input[name="gender"]:checked');

    if (selectedGender) {
        console.log("Gender:", selectedGender.value);
    } else {
        console.log("Gender: Not selected");
    }

    console.log("Accepted terms:", terms.checked);
    console.log("Country:", country.value);

});