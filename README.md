gHoursParser
============

Parse Google Places hours strings into POJOs (plain 'ol JS objects). Expects string to be formatted in the way 
described [here](https://support.google.com/places/answer/1722104?hl=en#hours).

* 24 hour format: dayOfWeek:hh:mm:hh:mm
* AM/PM format: dayOfWeek:hh:mm:AMorPM:hh:mm:AMorPM

before:
```
1:10:00:18:00,2:10:00:18:00,3:10:00:18:00,4:10:00:18:00,5:10:00:18:00,6:10:00:18:00,7:12:00:20:00
```

after:
```
{
  sunday: {
    open: '10',
    close: 18
  },
  monday: {
    open: '10',
    close: 18
  },
  tuesday: {
    open: '10',
    close: 18
  },
  wednesday: {
    open: '10',
    close: 18
  },
  thursday: {
    open: '10',
    close: 18
  },
  friday: {
    open: '10',
    close: 18
  },
  saturday: {
    open: 12,
    close: 20
  }
}
```
