
exports.min = function min (array) {
  return Math.min.apply(Math, array);

}

exports.max = function max (array) {
  return Math.max.apply(Math, array);

}

exports.avg = function avg (array) {
  var total = 0;
for(var i = 0; i < array.length; i++) {
    total += array[i];
}
var avg = total / array.length;
  return avg;
}
