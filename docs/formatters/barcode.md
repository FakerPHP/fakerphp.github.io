# Barcode

## `ean13`

Generate a random [EAN-13](https://en.wikipedia.org/wiki/International_Article_Number) barcode.

```php
echo $faker->ean13();

// '5803352818140', '4142935337533'
```

## `ean8`

Generate a random [EAN-8](https://en.wikipedia.org/wiki/International_Article_Number) barcode.

```php
echo $faker->ean8();

// '30272446', '00484527'
```

## `isbn10`

[ISBN-10]: <https://en.wikipedia.org/wiki/International_Standard_Book_Number#ISBN-10_check_digit_calculation>

Generate a random [ISBN-10][ISBN-10] compliant `string`.

```php
echo $faker->isbn10();

// '4250151735', '8395066937'
```

## `isbn13`

[ISBN-13]: <https://en.wikipedia.org/wiki/International_Standard_Book_Number#ISBN-13_check_digit_calculation>

Generate a random [ISBN-13][ISBN-13] compliant `string`.

```php
echo $faker->isbn13();

// '9786881116078', '9785625528412'
```
