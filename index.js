// Require lodash
var _ = require('lodash');

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

var parseHoursString = function(hoursStr) {
    return _.map(hoursStr.split(',') ,function(hourStr) {
        var dayHours = _.rest(hourStr.split(':'));

        return dayHours.join(':');
    });
};

var makeHoursObjs = function(hoursArr) {
    var exp = new RegExp('(AM|PM)', 'ig');

    return _.map(hoursArr, function(el) {
        var bitsOfHours = el.split(':'),
            matches = el.match(exp),
            openClose = {
                open: '',
                close: ''
            };

        if (matches === null) {
            openClose.open = bitsOfHours[0];
            openClose.close = bitsOfHours[2];

            return openClose;
        } else {
            openClose.open = convertTo24Hour(bitsOfHours[2], bitsOfHours[0]);
            openClose.close = convertTo24Hour(bitsOfHours[5], bitsOfHours[3]);

            return openClose;
        }
    });
};

var zipDaysHours = function(hours) {
    var days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

    return _.object(days, hours);
};

var test = {
    convertTo24Hour: convertTo24Hour,
    isPm: isPm,
    makeHoursObjs: makeHoursObjs,
    parseHoursString: parseHoursString,
    zipDaysHours: zipDaysHours
};

module.exports =  {
    parse: _.compose(zipDaysHours, makeHoursObjs, parseHoursString),
    test: test
};
