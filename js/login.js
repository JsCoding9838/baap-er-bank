document.getElementById('login-submit').addEventListener('click', function(){
    // get user email
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    // get user password
    const passwordfield = document.getElementById('user-password');
    const userPassoword = passwordfield.value;
    // check email and password
    if(userEmail == 'sontan@baap.com' && userPassoword == 'secret'){
        window.location.href = 'banking.html';
    }
})

