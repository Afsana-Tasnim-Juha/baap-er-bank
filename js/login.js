// step-1 : add click event handler with thw submit button
document.getElementById('btn-submit').addEventListener('click', function () {
    //console.log('click the button');
    // step 2 : get the email address inside the email inside input field
    //always remember to use .value to get text from an input field
    const emailField = document.getElementById('user emial');
    const email = emailField.value;

    // step 3 : get password
    //3.a : set id on the html element
    //3.b : get the element
    //3.c : get the value from the element

    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;

    //step 4 : verify email and password whether valid user or not

    if (email === 'ASDF@gmail.com' && password === 'secret') {
        console.log('valid user')
    }
    else {
        console.log('invalid user')
    }
})

