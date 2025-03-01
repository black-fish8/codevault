// JavaScript for Patient Registration Form

// Handle form submission
document.getElementById('patientForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const fullName = document.querySelector('input[placeholder="Enter Full Name"]').value;
    const dob = document.querySelector('input[type="date"]').value;
    const gender = document.querySelector('select[required]').value;
    const bloodGroup = document.querySelector('select[required]').nextElementSibling.value;
    const address = document.querySelector('input[placeholder="Enter your Permanent Address"]').value;
    const email = document.querySelector('input[placeholder="Enter your Email-id"]').value;
    const password = document.querySelector('input[placeholder="Enter your Password"]').value;
    const confirmPassword = document.querySelector('input[placeholder="Confirm your Password"]').value;

    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }

    alert(`Registration Successful!\nName: ${fullName}\nDOB: ${dob}\nGender: ${gender}\nBlood Group: ${bloodGroup}\nAddress: ${address}\nEmail: ${email}`);

    this.reset();
});

// Close form function
function closeForm() {
    if (confirm('Are you sure you want to close the form?')) {
        document.getElementById('patientForm').reset();
    }
}
