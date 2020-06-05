'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COATS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYES = ['black', 'red', 'blue', 'yellow', 'green'];

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var similarListElement = userDialog.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var randomInt = function (min, max) {
  return min + Math.floor((max - min) * Math.random());
};

var createName = function (names, surnames) {
  var flip = randomInt(0, 1);
  if (flip) {
    return (names[randomInt(0, names.length)] + ' ' + surnames[randomInt(0, surnames.length)]);
  } else {
    return (surnames[randomInt(0, surnames.length)] + ' ' + names[randomInt(0, names.length)]);
  }
};

var wizards = [
  {
    name: createName(WIZARD_NAMES, WIZARD_SURNAMES),
    coatColor: WIZARD_COATS[randomInt(0, WIZARD_COATS.length)],
    eyeColor: WIZARD_EYES[randomInt(0, WIZARD_EYES.length)]
  },
  {
    name: createName(WIZARD_NAMES, WIZARD_SURNAMES),
    coatColor: WIZARD_COATS[randomInt(0, WIZARD_COATS.length)],
    eyeColor: WIZARD_EYES[randomInt(0, WIZARD_EYES.length)]
  },
  {
    name: createName(WIZARD_NAMES, WIZARD_SURNAMES),
    coatColor: WIZARD_COATS[randomInt(0, WIZARD_COATS.length)],
    eyeColor: WIZARD_EYES[randomInt(0, WIZARD_EYES.length)]
  },
  {
    name: createName(WIZARD_NAMES, WIZARD_SURNAMES),
    coatColor: WIZARD_COATS[randomInt(0, WIZARD_COATS.length)],
    eyeColor: WIZARD_EYES[randomInt(0, WIZARD_EYES.length)]
  }
];

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyeColor;

  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}

similarListElement.appendChild(fragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');
