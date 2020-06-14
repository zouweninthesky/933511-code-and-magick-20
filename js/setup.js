'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COATS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYES = ['black', 'red', 'blue', 'yellow', 'green'];
var WIZARD_FIREBALL = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var WIZARD_NUMBER = 4;

var userDialog = document.querySelector('.setup');
var userDialogOpen = document.querySelector('.setup-open');
var userDialogClose = userDialog.querySelector('.setup-close');
var userNameInput = userDialog.querySelector('.setup-user-name');
var userCoat = userDialog.querySelector('.wizard-coat');
var userEyes = userDialog.querySelector('.wizard-eyes');
var userFireball = userDialog.querySelector('.setup-fireball');
var similarListElement = userDialog.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var getRandomInt = function (min, max) {
  return min + Math.floor((max - min) * Math.random());
};

// Функции создания волшебников и данных для них

var createName = function (names, surnames) {
  var flip = getRandomInt(0, 2);
  if (flip) {
    return (names[getRandomInt(0, names.length)] + ' ' + surnames[getRandomInt(0, surnames.length)]);
  } else {
    return (surnames[getRandomInt(0, surnames.length)] + ' ' + names[getRandomInt(0, names.length)]);
  }
};

var createWizards = function () {
  var wizards = [];
  for (var i = 0; i < WIZARD_NUMBER; i++) {
    wizards[i] = {
      name: createName(WIZARD_NAMES, WIZARD_SURNAMES),
      coatColor: WIZARD_COATS[getRandomInt(0, WIZARD_COATS.length)],
      eyeColor: WIZARD_EYES[getRandomInt(0, WIZARD_EYES.length)]
    };
  }
  return wizards;
};

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyeColor;

  return wizardElement;
};

var postWizards = function (wizards) {
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < wizards.length; i++) {
    fragment.appendChild(renderWizard(wizards[i]));
  }
  similarListElement.appendChild(fragment);
};

// Функции вызова меню кастомизации

var onUserDialogEscPress = function (evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closeUserDialog();
  }
};

var openUserDialog = function () {
  userDialog.classList.remove('hidden');

  document.addEventListener('keydown', onUserDialogEscPress);
};

var closeUserDialog = function () {
  userDialog.classList.add('hidden');

  document.removeEventListener('keydown', onUserDialogEscPress);
};

userDialogOpen.addEventListener('click', function () {
  openUserDialog();
});

userDialogOpen.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
    openUserDialog();
  }
});

userDialogClose.addEventListener('click', function () {
  closeUserDialog();
});

userDialogClose.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
    closeUserDialog();
  }
});

// Функции, описывающие меню кастомизации

userNameInput.addEventListener('invalid', function () {
  if (userNameInput.validity.valueMissing) {
    userNameInput.setCustomValidity('Обязательное поле');
  } else {
    userNameInput.setCustomValidity('');
  }
});

userNameInput.addEventListener('input', function () {
  var valueLength = userNameInput.value.length;

  if (valueLength < userNameInput.minLength) {
    userNameInput.setCustomValidity('Ещё ' + (userNameInput.minLength - valueLength) + ' симв.');
  } else if (valueLength > userNameInput.maxLength) {
    userNameInput.setCustomValidity('Удалите лишние ' + (valueLength - userNameInput.maxLength) + ' симв.');
  } else {
    userNameInput.setCustomValidity('');
  }
});

var changeColor = function (array, element, inputID) {
  var color = array[getRandomInt(0, array.length)];
  if (element === userFireball) {
    element.style.backgroundColor = color;
  } else {
    element.style.fill = color;
  }
  userDialog.querySelector('#' + inputID).value = color;
};

userCoat.addEventListener('click', function () {
  changeColor(WIZARD_COATS, userCoat, 'coat-color');
});

userEyes.addEventListener('click', function () {
  changeColor(WIZARD_EYES, userEyes, 'eyes-color');
});

userFireball.addEventListener('click', function () {
  changeColor(WIZARD_FIREBALL, userFireball, 'fireball-color');
});

// Тело программы

postWizards(createWizards());

userDialog.querySelector('.setup-similar').classList.remove('hidden');

