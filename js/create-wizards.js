'use strict';

(function () {
  // var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  // var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  // var WIZARD_NUMBER = 4;

  var MAX_SIMILAR_WIZARD_COUNT = 4;

  var userDialog = document.querySelector('.setup');

  var similarListElement = document.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

  /*  var createName = function (names, surnames) {
    var flip = window.util.getRandomInt(0, 2);
    if (flip) {
      return (names[window.util.getRandomInt(0, names.length)] + ' ' + surnames[window.util.getRandomInt(0, surnames.length)]);
    } else {
      return (surnames[window.util.getRandomInt(0, surnames.length)] + ' ' + names[window.util.getRandomInt(0, names.length)]);
    }
  };

  var createWizardsMocks = function () {
    var wizards = [];
    for (var i = 0; i < WIZARD_NUMBER; i++) {
      wizards[i] = {
        name: createName(WIZARD_NAMES, WIZARD_SURNAMES),
        coatColor: window.colorSettings.coats[window.util.getRandomInt(0, window.colorSettings.coats.length)],
        eyeColor: window.colorSettings.eyes[window.util.getRandomInt(0, window.colorSettings.eyes.length)]
      };
    }
    return wizards;
  };
  */

  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyeColor;

    return wizardElement;
  };

  var onLoad = function (wizards) {
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < MAX_SIMILAR_WIZARD_COUNT; i++) {
      fragment.appendChild(renderWizard(wizards[window.util.getRandomInt(0, wizards.length)]));
    }
    similarListElement.appendChild(fragment);

    userDialog.querySelector('.setup-similar').classList.remove('hidden');
  };

  var onError = function (errorMessage) {
    var node = document.createElement('div');
    node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
    node.style.position = 'absolute';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '30px';

    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);
  };

  window.backend.load(onLoad, onError);
})();
