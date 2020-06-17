'use strict';

// Модуль validation.js
(function () {
  var userNameInput = document.querySelector('.setup-user-name');

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
})();
