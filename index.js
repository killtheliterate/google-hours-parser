// Require lodash
var _ = require('lodash');

var parseHoursString = function(hoursStr) {
    var hours = hoursStr.split(',');

    return _.map(hours ,function(hourStr) {
        var dayHours = hourStr.split(':');
        dayHours.shift(); // Shift the day of week int off the array

        return dayHours.join(':');
    });
};

var isPm = function(str) {
  return str === 'PM' ? true : false;
};

var convertTo24Hour = function(amPm, piece) {
  if (isPm(amPm)) {
    return parseInt(piece, 10) + 12;
  } else {
    return piece;
  }
};

var makeHoursObjs = function(hoursArr) {
  var exp = new RegExp('(AM|PM)', 'ig');

  return _.map(hoursArr, function(el) {
      var bitsOfHours = el.split(':'),
          openClose = {
              open: '',
              close: ''
          };

      // Do some stuff
      if (el.match(exp).length === 0) {
          openClose.open = bitsOfHours[0];
          openClose.close = bitsOfHours[1];

          return openClose;
      } else {
          openClose.open = convertTo24Hour(bitsOfHours[1], bitsOfHours[0]);
          openClose.close = convertTo24Hour(bitsOfHours[2], bitsOfHours[3]);

          return openClose;
      }
  });
};

var zipDaysHours = function(hours) {
  var days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

  return _.object(days, hours);
};

module.exports = _.compose(zipDaysHours, makeHoursObjs, parseHoursString);
