// Selecting the login form
const loginForm = document.getElementById('loginForm');

// Adding event listener for form submission
loginForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from refreshing the page

    // Get wallet address and password values
    const walletAddress = document.getElementById('wallet-address').value.trim();
    const password = document.getElementById('password').value.trim();

    // Basic validation
    if (!walletAddress || !password) {
        alert('Please enter both Wallet Address and Password.');
        return;
    }

    // Simulating login (this part will be replaced with blockchain logic)
    console.log('Logging in with:', {
        walletAddress: walletAddress,
        password: password
    });

    // Example: Redirect after successful login (you can customize this)
    alert('Login successful!');
    window.location.href = 'dashboard.html'; // Adjust to your next page
});
