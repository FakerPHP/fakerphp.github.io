# Miscellaneous

## `boolean`

Generate a random `bool`.

```php
echo $faker->boolean();

// true, true, false
```

## `md5`

[MD5]: <https://en.wikipedia.org/wiki/MD5>

Generate a random [MD5][MD5] hash `string`.

```php
echo $faker->md5();

// 'b1f447c2ee6029c7d2d8b3112ecfb160', '6d5d81469dfb247a15c9030d5aae38f1'
```

## `sha1`

[SHA-1]: <https://en.wikipedia.org/wiki/SHA-1>

Generate a random [SHA-1][SHA-1] hash `string`.

```php
echo $faker->sha1();

// '20d1061c44ca4eef07e8d129c7000101b3e872af', '28cda1350140b3465ea8f65b933b1dad98ee5425'
```

## `sha256`

[SHA-2]: <https://en.wikipedia.org/wiki/SHA-2>

Generate a random [SHA-256][SHA-2] hash `string`.

```php
echo $faker->sha256();

// 'bfa80759a5c40a8dd6694a3752bac231ae49c136396427815b0e33bd10974919'
```

## `locale`

Generate a random locale `string`.

```php
echo $faker->locale();

// 'ln_CD', 'te_IN', 'sh_BA'
```

## `countryCode`

Generate a random [two-letter country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) `string`.

```php
echo $faker->countryCode();

// 'LK', 'UM', 'CZ'
```

## `countryISOAlpha3`

Generate a random [three-letter country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3) `string`.

```php
echo $faker->countryISOAlpha3();

// 'ZAF', 'UKR', 'MHL'
```

## `languageCode`

Generate a random [two-letter language code](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) `string`.

```php
echo $faker->languageCode();

// 'av', 'sc', 'as'
```

## `currencyCode`

Generate a random [currency code](https://en.wikipedia.org/wiki/ISO_4217) `string`.

```php
echo $faker->currencyCode();

// 'AED', 'SAR', 'KZT'
```

## `emoji`

Generate a random emoji.
K
```php
echo $faker->emoji();

// '😦', '😎', '😢'
```
