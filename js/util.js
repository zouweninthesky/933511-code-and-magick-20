'use strict';

// Модуль util.js
(function () {
  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;

  window.util = {
    ESC_KEYCODE: ESC_KEYCODE,
    ENTER_KEYCODE: ENTER_KEYCODE,

    getRandomInt: function (min, max) {
      return min + Math.floor((max - min) * Math.random());
    }
  };
})();
