'use strict';

var WIZARD_FIREBALLS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

var userDialog = document.querySelector('.setup');
var userCoat = userDialog.querySelector('.wizard-coat');
var userEyes = userDialog.querySelector('.wizard-eyes');
var userFireball = userDialog.querySelector('.setup-fireball');

// Тело программы

var colorizeCoats = function (array, inputID, destination) {
  userCoat.addEventListener('click', function () {
    window.createWizards.onCoatChange(window.colorize(array, userCoat, inputID, destination));
  });
};

var colorizeEyes = function (array, inputID, destination) {
  userEyes.addEventListener('click', function () {
    window.createWizards.onEyesChange(window.colorize(array, userEyes, inputID, destination));
  });
};

var colorizeFireball = function (array, inputID, destination) {
  userFireball.addEventListener('click', function () {
    window.colorize(array, userFireball, inputID, destination);
  });
};

colorizeCoats(window.colorSettings.coats, 'coat-color', userDialog);
colorizeEyes(window.colorSettings.eyes, 'eyes-color', userDialog);
colorizeFireball(WIZARD_FIREBALLS, 'fireball-color', userDialog);

userDialog.querySelector('.setup-similar').classList.remove('hidden');

