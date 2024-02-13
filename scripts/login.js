document.getElementById('btn-submit').addEventListener('click', function () {
    const emailField = document.getElementById('user_email');
    const email = emailField.value;
    const passwordField = document.getElementById('password_field')
    const password = passwordField.value;
    console.log(email, password);
    

    // DO NOT VERIFY email and password on the client side:

    if (email === 'sontan@bap.com' && password === 'secret') {
        window.location.href = 'bank.html'
    } else {
        alert('email and password not matched')
    }
})