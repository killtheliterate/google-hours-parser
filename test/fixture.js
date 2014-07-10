module.exports = {
    twentyFour: '1:10:00:18:00,2:10:00:18:00,3:10:00:18:00,4:10:00:18:00,5:10:00:18:00,6:10:00:18:00,7:12:00:20:00',
    amPm: '1:10:00:AM:6:00:PM,2:10:00:AM:6:00:PM,3:10:00:AM:6:00:PM,4:10:00:AM:6:00:PM,5:10:00:AM:6:00:PM,6:10:00:AM:6:00:PM,7:12:00:PM:8:00:PM',
    isPm: 'PM',
    makeHoursObjs1: [ '10:00:18:00', '10:00:18:00', '10:00:18:00', '10:00:18:00', '10:00:18:00', '10:00:18:00', '12:00:20:00' ],
    makeHoursObjs2: [ '10:00:AM:8:00:PM', '10:00:AM:8:00:PM', '10:00:AM:12:00:PM', '10:00:AM:9:00:PM', '10:00:AM:3:00:PM', '10:00:AM:1:00:PM', '12:00:AM:8:00:PM' ],
    parse: { sunday: { open: '10', close: 18  }, monday: { open: '10', close: 18  }, tuesday: { open: '10', close: 18  }, wednesday: { open: '10', close: 18  }, thursday: { open: '10', close: 18  }, friday: { open: '10', close: 18  }, saturday: { open: 24, close: 20  } } 
};
