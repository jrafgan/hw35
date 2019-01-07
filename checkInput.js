$(function () {

    var btn = $('#button');
    $('input[type="text"]').change(function (e) {
        e.preventDefault();
        var usernameText = $('#username').val();
        var passwordText = $('#password').val();

        if (usernameText.length > 5 && passwordText.length > 5) {
            btn.attr('disabled', false);
            btn.click(function (e) {
                e.preventDefault();
                alert('Your username is : ' + usernameText + '\nYour password is : ' + passwordText);
            });
        }
    });
});