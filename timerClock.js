$(function () {
    var resetButton = $('#reset');
    var startButton = $('#start');
    var pauseButton = $('#pause');
    var interval;
    var value;

    pauseButton.on('click', function () {
        clearInterval(interval);
    });

    resetButton.on('click', function () {
        value = parseInt($('#seconds').text('00'));
        value = parseInt($('#minutes').text('00'));
    });

    startButton.on('click', function () {
        start();
    });

    start = function () {
        var seconds = $('#seconds');
        var minutes = $('#minutes');

        var zeroPad = function (number, zeroes) {
            var currentNumber = String(number);
            var currentLength = String(number).length;
            for (i = 0; i < zeroes - currentLength; i++) {
                currentNumber = '0' + currentNumber;
            }
            return currentNumber;
        };

        interval = setInterval(function () {
            value = parseInt($('#seconds').text());
            value++;
            seconds.text(zeroPad(value, 2));
            if (value === 60) {
                value = parseInt($('#seconds').text('00'));
                minutesValue();
            }
        }, 1000);

        var minutesValue = function () {
            var value = parseInt($('#minutes').text());
            value++;
            minutes.text(zeroPad(value, 2));
        };
    }
});