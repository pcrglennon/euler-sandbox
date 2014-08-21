function sumOfMultiplesBelow(limit) {
  var sum = 0;
  _.each(_.range(0, limit), function(i) {
    if (i % 3 == 0 || i % 5 == 0) {
      sum += i;
    }
  });
  return sum;
}

$(function() {
  $('#01').find('button').click(function() {
    var result = sumOfMultiplesBelow(1000);
    $('#01').find('textarea').html(result);
  });
});