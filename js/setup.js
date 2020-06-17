'use strict';

var WIZARD_FIREBALLS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

var userDialog = document.querySelector('.setup');
var userCoat = userDialog.querySelector('.wizard-coat');
var userEyes = userDialog.querySelector('.wizard-eyes');
var userFireball = userDialog.querySelector('.setup-fireball');

// Тело программы

window.colorize(window.colorSettings.coats, userCoat, 'coat-color', userDialog);
window.colorize(window.colorSettings.eyes, userEyes, 'eyes-color', userDialog);
window.colorize(WIZARD_FIREBALLS, userFireball, 'fireball-color', userDialog);

window.postWizards();

userDialog.querySelector('.setup-similar').classList.remove('hidden');

