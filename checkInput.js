$(function () {

    var usernameText;
    var passwordText;
    $('input[type="text"]').change(function () {
        usernameText = $('input[name="username"]').val();
        passwordText = $('input[name="password"]').val();

        if (usernameText != '' && usernameText.length > 5 && passwordText.length > 5) {
            $('input[type="submit"]').prop('disabled', false);
        }
    });
    $('input[type="submit"]').click(function (event) {
        event.preventDefault();
        alert('Your username is : ' + usernameText + '\nYour password is : ' + passwordText);
    });
});