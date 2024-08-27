const apiUrl = "https://www.test.salesforce.com/standardapi";

document.addEventListener('DOMContentLoaded', function() {
    const customRadio = document.getElementById('custom');
    const standardRadio = document.getElementById('standard');
    const textbox = document.getElementById('textbox');
    const selectElement = document.getElementById('options');

    // Function to handle radio button change
    function handleRadioChange() {
        if (standardRadio.checked) {
            textbox.value = apiUrl; // Enter predefined text
            selectElement.disabled = false; // Enable the select dropdown
            selectElement.selectedIndex = 0; // Reset select to default option
        } else {
            textbox.value = ''; // Clear textbox if custom is selected
            selectElement.disabled = true; // Disable the select dropdown
        }
    }

    // Add event listeners to radio buttons
    customRadio.addEventListener('change', handleRadioChange);
    standardRadio.addEventListener('change', handleRadioChange);

    // Initialize the textbox value based on the default selected radio button
    handleRadioChange();
});

function selectedSubjectName() {
    const textbox = document.getElementById('textbox');
    const subjectIdNode = document.getElementById('options');
    if (subjectIdNode.value == "") {
        textbox.value = apiUrl;
    } else {
        textbox.value = `https://www.test.salesforce.com/${subjectIdNode.value}api`;
    }
}

function sendRequest() {
    const textbox = document.getElementById('textbox');
    if (textbox.value) {
        alert(`sending request to ${textbox.value}`);
    } else {
        alert("Please select a Salesforce API endpoint");
    }
}
