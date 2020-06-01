'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var BAR_GAP = 50;
var FONT_GAP = 20;
var BAR_WIDTH = 40;
var BAR_HEIGHT_MAX = 150;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

var randomInt = function (min, max) {
  return min + Math.floor((max - min) * Math.random());
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', CLOUD_X + GAP * 2, CLOUD_Y + GAP + FONT_GAP);
  ctx.fillText('Список результатов:', CLOUD_X + GAP * 2, CLOUD_Y + GAP + FONT_GAP * 2);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    var currentBarHeight = (BAR_HEIGHT_MAX * times[i]) / maxTime;
    ctx.fillText(Math.round(times[i]), CLOUD_X + GAP * 3 + (BAR_GAP + BAR_WIDTH) * i, CLOUD_Y + GAP * 3 + FONT_GAP * 2 + BAR_HEIGHT_MAX - currentBarHeight);
    if (players[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      var randomSaturation = randomInt(0, 100);
      ctx.fillStyle = 'hsl(240, ' + randomSaturation + '%, 50%)';
    }
    ctx.fillRect(CLOUD_X + GAP * 3 + (BAR_GAP + BAR_WIDTH) * i, CLOUD_Y + GAP * 2 + FONT_GAP * 3 + BAR_HEIGHT_MAX - currentBarHeight, BAR_WIDTH, currentBarHeight);
    ctx.fillStyle = '#000';
    ctx.fillText(players[i], CLOUD_X + GAP * 3 + (BAR_GAP + BAR_WIDTH) * i, CLOUD_Y + CLOUD_HEIGHT - GAP * 2);
  }
};
