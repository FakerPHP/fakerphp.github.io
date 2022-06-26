# Numbers and Strings

## `randomDigit`

Generates a random integer from 0 until 9.

```php
echo $faker->randomDigit();

// an integer between 0 and 9
```

## `randomDigitNot`

Generates a random integer from 0 until 9, excluding a given number.

```php
echo $faker->randomDigitNot(2);

// 0, 1, 3, 4, 5, 6, 7, 8 or 9
```

## `randomDigitNotNull`

Generates a random integer from 1 until 9.

```php
echo $faker->randomDigitNotNull();

// an integer between 1 and 9
```

## `randomNumber`

Generates a random integer, containing between 0 and `$nbDigits` amount of digits. When the `$strict` parameter
is `true`, it will only return integers with $nbDigits amount of digits.

```php
echo $faker->randomNumber(5, false);

// 123, 43, 19238, 5, or 1203

echo $faker->randomNumber(5, true);

// 12643, 42931, or 32919
```

## `randomFloat`

Generates a random float. Optionally it's possible to specify the amount of decimals.

The second and third parameters optionally specify a lower and upper bound respectively.

```php
echo $faker->randomFloat();

// 12.9830, 2193.1232312, 102.12

echo $faker->randomFloat(2);

// 43.23, 1203.49, 3428.93

echo $faker->randomFloat(1, 20, 30);

// 21.7, 27.2, 28.1
```

## `numberBetween`

Generates a random integer between `$min` and `$max`. By default, an integer is generated between `0`
and `2,147,483,647` (32-bit integer).

```php
echo $faker->numberBetween();

// 120378987, 182, 102310983

echo $faker->numberBetween(0, 100);

// 32, 87, 91, 13, 75
```

## `randomLetter`

Generates a random character from the alphabet.

```php
echo $faker->randomLetter();

// 'h', 'i', 'q'
```

## `randomElements`

Returns `$count` amount of random element from the given array. By default, the `$count` parameter is set to 1.

```php
echo $faker->randomElements(['a', 'b', 'c', 'd', 'e']);

// ['c']

echo $faker->randomElements(['a', 'b', 'c', 'd', 'e'], 3);

// ['a', 'd', 'e']
```

## `randomElement`

Returns a random element from the given array.

```php
echo $faker->randomElement(['a', 'b', 'c', 'd', 'e']);

// 'c'
```

## `randomKey`

Returns a random key from the given array.

```php
echo $faker->randomKey(['a' => 1, 'b' => 2, 'c' => 3]);

// 'b'
```

## `shuffle`

Returns a shuffled version of either an array or string.

```php
echo $faker->shuffle('hello-world');

// 'lrhoodl-ewl'

echo $faker->shuffle([1, 2, 3]);

// [3, 1, 2]
```

## `numerify`

Generate a string where all `#` characters are replaced by digits between 0 and 10. By default, `###` is used as input.

```php
echo $faker->numerify();

// '912', '271', '109', '674'

echo $faker->numerify('user-####');

// 'user-4928', 'user-3427', 'user-1280'
```

## `lexify`

Generate a string where all `?` characters are replaces with a random letter from the Latin alphabet. By default, `????`
is used as input.

```php
echo $faker->lexify();

// 'sakh', 'qwei', 'adsj'

echo $faker->lexify('id-????');

// 'id-xoqe', 'id-pqpq', 'id-zpeu'
```

## `bothify`

Generate a string where `?` characters are replaced with a random letter, and `#` characters are replaces with a random
digit between 0 and 10. By default, `## ??` is used as input.

```php
echo $faker->bothify();

// '46 hd', '19 ls', '75 pw'

echo $faker->bothify('?????-#####');

// 'lsadj-10298', 'poiem-98342', 'lcnsz-42938'
```

## `asciify`

Generate a string where `*` characters are replaced with a random character from the ASCII table. By default, `****` is
used as input.

```php
echo $faker->asciify();

// '%Y+!', '{<"B', 'kF^a'

echo $faker->asciify('user-****');

// 'user-ntwx', 'user-PK`A', 'user-n`,X'
```

## `regexify`

Generate a random string based on a regex. By default, an empty string is used as input.

```php
echo $faker->regexify();

// ''

echo $faker->regexify('[A-Z]{5}[0-4]{3}');

// 'DRSQX201', 'FUDPA404', 'CQVIU411'
```

