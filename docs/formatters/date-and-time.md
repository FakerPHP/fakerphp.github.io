# Date and Time

Methods accepting a `$timezone` argument default to `date_default_timezone_get()`. You can pass a custom timezone string
to each method, or define a custom timezone for all time methods at once using `$faker::setDefaultTimezone($timezone)`.

## `unixTime`

Generate an [unix time](https://en.wikipedia.org/wiki/Unix_time) between zero, and the given value. By default, `now` is
used as input.

Optionally, a parameter can be supplied containing a `DateTime`, `int` or `string`.

```php
echo $faker->unixTime();

// 1605544623, 1025544612

echo $faker->unixTime(new DateTime('+3 weeks'));

// unix timestamp between 0 and the date 3 weeks from now.
```

## `dateTime`

Generate a `DateTime` between January 1, 1970, and the given max. By default, `now` is used as max.

Optionally, a parameter can be supplied containing a `DateTime`, `int` or `string`.

An optional second parameter can be supplied, with the timezone.

```php
echo $faker->dateTime();

// DateTime: August 12, 1991 
```

## `dateTimeAD`

Generate a `DateTime` between January 1, 0001, and the given max. By default, `now` is used as max.

An optional second parameter can be supplied, with the timezone.

```php
echo $faker->dateTimeAD();

// DateTime: September 19, 718
```

## `iso8601`

Generate an ISO8601 formatted `string` between January 1, 0001, and the given max. By default, `now` is used as max.

```php
echo $faker->iso8601();
```

## `date`

Generate a date `string`, with a given format and max value. By default, `'Y-m-d'` and `'now'` are used for the format
and maximum value respectively.

```php
echo $faker->date();

// '1999-06-09'

echo $faker->date('Y_m_d');

// '2011_02_19'
```

## `time`

Generate a time `string`, with a given format and max value. By default, `H:i:s'` and `now` are used for the format and
maximum value respectively.

```php
echo $faker->time();

// '12:02:50'

echo $faker->time('H_i_s');

// '20_49_12'
```

## `dateTimeBetween`

Generate a `DateTime` between two dates. By default, `-30 years` and `now` are used.

An optional third parameter can be supplied, with the timezone.

```php
echo $faker->dateTimeBetween();

// a date between -30 years ago, and now

echo $faker->dateTimeBetween('-1 week', '+1 week');

// a date between -1 week ago, and 1 week from now
```

## `dateTimeInInterval`

Generate a `DateTime` between a date and an interval from that date. By default, the date is set to `-30 years`, and the
interval is set to `+5 days`.

An optional third parameter can be supplied, with the timezone.

```php
echo $faker->dateTimeInInterval();

// a date between -30 years ago, and -30 years + 5 days

echo $faker->dateTimeInInterval('-1 week', '+3 days');

// a date between -1 week ago, and -1 week + 3 days
```

## `dateTimeThisCentury`

Generate a `DateTime` that is within the current century. An optional `$max` value can be supplied, by default this is
set to `now`.

An optional second parameter can be supplied, with the timezone.

```php
echo $faker->dateTimeThisCentury();

// a date somewhere in this century

echo $faker->dateTimeThisCentury('+8 years');

// a date somewhere in this century, with an upper bound of +8 years
```

## `dateTimeThisDecade`

Generate a `DateTime` that is within the current decade. An optional `$max` value can be supplied, by default this is
set to `now`.

An optional second parameter can be supplied, with the timezone.

```php
echo $faker->dateTimeThisDecade();

// a date somewhere in this decade

echo $faker->dateTimeThisDecade('+2 years');

// a date somewhere in this decade, with an upper bound of +2 years
```

## `dateTimeThisYear`

Generate a `DateTime` that is within the current year. An optional `$max` value can be supplied, by default this is set
to `now`.

An optional second parameter can be supplied, with the timezone.

```php
echo $faker->dateTimeThisYear();

// a date somewhere in this year

echo $faker->dateTimeThisYear('+2 months');

// a date somewhere in this year, with an upper bound of +2 months
```

## `dateTimeThisMonth`

Generate a `DateTime` that is within the current month. An optional `$max` value can be supplied, by default this is set
to `now`.

An optional second parameter can be supplied, with the timezone.

```php
echo $faker->dateTimeThisMonth();

// a date somewhere in this month

echo $faker->dateTimeThisMonth('+12 days');

// a date somewhere in this month, with an upper bound of +12 days
```

## `amPm`

Generate a random `DateTime`, with a given upper bound, and return the am/pm `string` value. By default, the upper bound
is set to `now`.

```php
echo $faker->amPm();

// 'am'

echo $faker->amPm('+2 weeks');

// 'pm'
```

## `dayOfMonth`

Generate a random `DateTime`, with a given upper bound, and return the day of month `string` value. By default, the
upper bound is set to `now`.

```php
echo $faker->dayOfMonth();

// '24'

echo $faker->dayOfMonth('+2 weeks');

// '05'
```

## `dayOfWeek`

Generate a random `DateTime`, with a given upper bound, and return the day of week `string` value. By default, the
upper bound is set to `now`.

```php
echo $faker->dayOfWeek();

// 'Tuesday'

echo $faker->dayOfWeek('+2 weeks');

// 'Friday'
```

## `month`

Generate a random `DateTime`, with a given upper bound, and return the month's number `string` value. By default, the
upper bound is set to `now`.

```php
echo $faker->month();

// '9'

echo $faker->month('+10 weeks');

// '7'
```

## `monthName`

Generate a random `DateTime`, with a given upper bound, and return the month's name `string` value. By default, the
upper bound is set to `now`.

```php
echo $faker->monthName();

// 'September'

echo $faker->monthName('+10 weeks');

// 'April'
```

## `year`

Generate a random `DateTime`, with a given upper bound, and return the year's `string` value. By default, the
upper bound is set to `now`.

```php
echo $faker->year();

// '1998'

echo $faker->year('+10 years');

// '2022'
```

## `century`

Generate a random century name.

```php
echo $faker->century();

// 'IX', 'XVII', 'II'
```

## `timezone`

Generate a random timezone name.

```php
echo $faker->timezone();

// 'Europe/Amsterdam', 'America/Montreal'

echo $faker->timezone('US');

// 'America/New_York', 'America/Los_Angeles'
```
