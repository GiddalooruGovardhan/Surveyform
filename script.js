function submitForm() {
    // Get form values
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const dob = document.getElementById('dob').value;
    const country = document.getElementById('country').value;

    const genderCheckboxes = document.querySelectorAll('input[name="gender"]:checked');
    const gender = Array.from(genderCheckboxes).map(checkbox => checkbox.value).join(', ');

    const profession = document.getElementById('profession').value;
    const email = document.getElementById('email').value;
    const mobileNumber = document.getElementById('mobileNumber').value;

    // Validate the form
    if (!firstName || !lastName || !dob || !country || !gender || !profession || !email || !mobileNumber) {
        alert('Please fill in all the fields.');
        return;
    }

    // Display popup with form data
    const popupData = `
        <p><strong>First Name:</strong> ${firstName}</p>
        <p><strong>Last Name:</strong> ${lastName}</p>
        <p><strong>Date of Birth:</strong> ${dob}</p>
        <p><strong>Country:</strong> ${country}</p>
        <p><strong>Gender:</strong> ${gender}</p>
        <p><strong>Profession:</strong> ${profession}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mobile Number:</strong> ${mobileNumber}</p>
    `;
    document.getElementById('popupData').innerHTML = popupData;
    document.getElementById('popup').style.display = 'block';

    // Reset the form
    resetForm();
}

function resetForm() {
    document.getElementById('surveyForm').reset();
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}
