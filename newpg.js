// JavaScript for HealthCare Pro website

// Patient login form submission
const patientForm = document.getElementById('patientForm');
patientForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('patient-email').value;
    const password = document.getElementById('patient-password').value;
    if (email && password) {
        alert(`Patient Login Successful!\nEmail: ${email}`);
    } else {
        alert('Please fill out all fields.');
    }
});

// Doctor login form submission
const doctorForm = document.getElementById('doctorForm');
doctorForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('doctor-email').value;
    const password = document.getElementById('doctor-password').value;
    if (email && password) {
        alert(`Doctor Login Successful!\nEmail: ${email}`);
    } else {
        alert('Please fill out all fields.');
    }
});
