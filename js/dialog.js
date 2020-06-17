'use strict';

// Модуль создает обработчики открытия и закрытия диалогового окна
(function () {
  var userDialog = document.querySelector('.setup');
  var userDialogOpen = document.querySelector('.setup-open');
  var userDialogClose = userDialog.querySelector('.setup-close');

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
})();
