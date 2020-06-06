'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COATS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYES = ['black', 'red', 'blue', 'yellow', 'green'];
var WIZARD_NUMBER = 4;

var userDialog = document.querySelector('.setup');
var similarListElement = userDialog.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var getRandomInt = function (min, max) {
  return min + Math.floor((max - min) * Math.random());
};

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

userDialog.classList.remove('hidden');

postWizards(createWizards());

userDialog.querySelector('.setup-similar').classList.remove('hidden');
