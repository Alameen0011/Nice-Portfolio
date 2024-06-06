document.getElementById('form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission

    // Clear previous errors
    document.getElementById('name_Error').textContent = '';
    document.getElementById('email_Error').textContent = '';
    document.getElementById('message_Error').textContent = '';

    // Get form values
    const name = document.getElementById('cname').value.trim();
    const email = document.getElementById('cemail').value.trim();
    const message = document.getElementById('cmessage').value.trim();

    let valid = true;

    // Name validation
    if (name === '') {
        document.getElementById('name_Error').textContent = 'Name is required';
        valid = false;
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === '') {
        document.getElementById('email_Error').textContent = 'Email is required';
        valid = false;
    } else if (!emailPattern.test(email)) {
        document.getElementById('email_Error').textContent = 'Invalid email format';
        valid = false;
    }

    // Message validation
    if (message === '') {
        document.getElementById('message_Error').textContent = 'Message is required';
        valid = false;
    }

    // If the form is valid
    if (valid) {
        const scriptURL = 'https://script.google.com/macros/s/AKfycbz2-iuR2CslZrLn541fZ7lIKapREE2RNpuYSwjNP0aR66rG5Wf-bqJWK1S_AeJ40F09/exec';
        const form = document.forms['contact-Form'];
        const success = document.getElementById('message');

        fetch(scriptURL, { method: 'POST', body: new FormData(form)})
            .then(response => {
                success.textContent = "Data successfully sent";
                setTimeout(function() {
                    success.textContent = "";
                    location.reload();
                }, 5000);
            })
            .catch(error => console.error('Error!', error.message));
    }
});
