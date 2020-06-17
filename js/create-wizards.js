'use strict';

// Модуль create-wizards.js
(function () {
  var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var WIZARD_NUMBER = 4;

  var similarListElement = document.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

  var createName = function (names, surnames) {
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

  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyeColor;

    return wizardElement;
  };

  var createWizardsFragment = function (wizards) {
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < wizards.length; i++) {
      fragment.appendChild(renderWizard(wizards[i]));
    }
    similarListElement.appendChild(fragment);
  };

  window.postWizards = function () {
    createWizardsFragment(createWizardsMocks());
  };
})();
