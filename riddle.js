$(function () {
    $('.question').css('height', 20);
    $('.answer').toggle(false).before('<button type="button">Посмотреть ответ').css('padding-left', 20);
    $('button').on('click', function () {
        var currentElement = $(this);
        currentElement.siblings().slideToggle('slow');
    });
});