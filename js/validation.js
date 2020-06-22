'use strict';

// Модуль validation.js
(function () {
  var userDialog = document.querySelector('.setup');
  var form = userDialog.querySelector('.setup-wizard-form');
  var userNameInput = form.querySelector('.setup-user-name');

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

  var onSuccess = function () {
    userDialog.classList.add('hidden');
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

  var onSubmit = function (evt) {
    window.backend.save(new FormData(form), onSuccess, onError);
    evt.preventDefault();
  };
  form.addEventListener('submit', onSubmit);
})();
