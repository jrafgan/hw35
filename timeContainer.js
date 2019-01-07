
$(function () {
    var rad = function (min, max) {
        var rand = Math.round(min - 0.5 + Math.random() * (max - min + 1));
        return rand;
    };
    var stopInterval = $('#stop');
    var startInterval = $('#start');
    var container = $('#container');

    var interval = setInterval(function () {
        container.append($('<div class="element">').text(rad(0, 20)));
    }, 5000);

    stopInterval.on('click', function (e) {
        e.preventDefault();
        clearInterval(interval);
    });

    startInterval.on('click', function (e) {
        e.preventDefault();
        setInterval(interval);
    });
    setInterval(interval);
});
