document.getElementById('login-submit').addEventListener('click', function(){
    // console.log('botton clicked');

    //get user Email
    const emailField = document.getElementById('user-email');
    // const userEmail = document.getElementById('user-email').value;
    const userEmail = emailField.value;
    //console.log(userEmail);

    //get user password
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;

    //check Email and Password
    if(userEmail == 'sontan@baap.com' && userPassword == 'secret'){
        console.log('valid-user');

        //taking to another html page if required info is authenticated
        window.location.href = 'banking.html';
    }



})
