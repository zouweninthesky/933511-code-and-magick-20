'use strict';

(function () {
  var DOWN_URL = 'https://javascript.pages.academy/code-and-magick/data';
  var UP_URL = 'https://javascript.pages.academy/code-and-magick';
  var TIMEOUT_IN_MS = 10000;

  var load = function (onSuccess, onError) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.addEventListener('load', function () {
      try {
        onSuccess(xhr.response);
      } catch (err) {
        onError('Статус ответа: ' + xhr.status + ' ' + xhr.statusText);
      }
    });
    xhr.addEventListener('error', function () {
      onError('Произошла ошибка соединения');
    });
    xhr.addEventListener('timeout', function () {
      onError('Запрос не успел выполниться за ' + xhr.timeout / 1000 + ' с');
    });

    xhr.timeout = TIMEOUT_IN_MS;

    xhr.open('GET', DOWN_URL);
    xhr.send();
  };

  var save = function (data, onSuccess, onError) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.addEventListener('load', function () {
      onSuccess(xhr.response);
    });
    xhr.open('POST', UP_URL);
    try {
      xhr.send(data);
    } catch (err) {
      onError('Статус ответа: ' + xhr.status + ' ' + xhr.statusText);
    }
  };

  window.backend = {
    load: load,
    save: save
  };
})();
