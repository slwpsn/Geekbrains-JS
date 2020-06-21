'use strict';
var temperatureCelsius = +prompt('Какая температура по Цельсию в градусах?', 'Ваше число');
var temperatureFahrenheit = (9 / 5) * temperatureCelsius + 32;
alert('А по Фаренгейту это вот столько градусов — '+temperatureFahrenheit);
document.write('Сегодня мы узнали, что ' + temperatureCelsius + ' градусов по Цельсию — это ' + temperatureFahrenheit + ' градусов по Фаренгейту, ');


var admin, name;
name = prompt('Как вас зовут?', 'Василий');
admin = name;
alert('Ну привет, ' + admin + '!');
document.write('вас зовут ' + admin + ', а ');

var sumNumberString = 1000 + '108';
alert('А вы знали, что, по мнению JavaScript, если к 1000 прибавить \'108\', то получится ' + sumNumberString + '?');
document.write('1000 + \'108\' = ' + sumNumberString + '!');