'use strict';

(function () {

  var getRandomColor = function (array) {
    return array[window.util.getRandomInt(0, array.length)];
  };

  window.colorize = function (array, element, inputID, destination) {
    var color = getRandomColor(array, element);
    if (element.tagName.toLowerCase() === 'div') {
      element.style.backgroundColor = color;
    } else {
      element.style.fill = color;
    }
    destination.querySelector('#' + inputID).value = color;
    return color;
  };
})();
