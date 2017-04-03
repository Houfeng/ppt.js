module.exports = function random(min, max) {
  return parseInt(Math.random() * (max - min + 1) + min);
};