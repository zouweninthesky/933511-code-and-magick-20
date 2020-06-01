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

var randomInt = function (min, max) {
  return min + Math.floor((max - min) * Math.random());
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

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var renderHeader = function (ctx) {
  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', CLOUD_X + GAP * 2, CLOUD_Y + GAP + FONT_GAP);
  ctx.fillText('Список результатов:', CLOUD_X + GAP * 2, CLOUD_Y + GAP + FONT_GAP * 2);
};

var renderScoreBar = function (ctx, playerName, i, currentBarHeight) {
  if (playerName === 'Вы') {
    ctx.fillStyle = 'rgba(255, 0, 0, 1)';
  } else {
    var randomSaturation = randomInt(0, 100);
    ctx.fillStyle = 'hsl(240, ' + randomSaturation + '%, 50%)';
  }
  ctx.fillRect(CLOUD_X + GAP * 3 + (BAR_GAP + BAR_WIDTH) * i, CLOUD_Y + GAP * 2 + FONT_GAP * 3 + BAR_HEIGHT_MAX - currentBarHeight, BAR_WIDTH, currentBarHeight);
};

//Думал сделать без проверки, просто вывести внутри функции и счёт, и имя, чтобы в renderStatistics был только один вызов. Какой вариант лучше?
//Просто эта проверка не делает функцию менее специфичной, у меня ощущение, как будто это все излишне нагромождено...
var renderText = function (ctx, text, i, currentBarHeight) {
  ctx.fillStyle = '#000';
  if (typeof (text) === 'number') {
    ctx.fillText(Math.round(text), CLOUD_X + GAP * 3 + (BAR_GAP + BAR_WIDTH) * i, CLOUD_Y + GAP * 3 + FONT_GAP * 2 + BAR_HEIGHT_MAX - currentBarHeight);
  } else {
    ctx.fillText(text, CLOUD_X + GAP * 3 + (BAR_GAP + BAR_WIDTH) * i, CLOUD_Y + CLOUD_HEIGHT - GAP * 2);
  }
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');
  renderHeader(ctx);
  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    var currentBarHeight = (BAR_HEIGHT_MAX * times[i]) / maxTime;
    renderText(ctx, times[i], i, currentBarHeight);
    renderScoreBar(ctx, players[i], i, currentBarHeight);
    renderText(ctx, players[i], i, currentBarHeight);
  }
};
