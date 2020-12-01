# German (Austria)

### `Faker\Provider\at_AT\Address`

```php
echo $faker->state;           // "Wien"
```

### `Faker\Provider\at_AT\Payment`

```php
echo $faker->vat;           // "AT U12345678" - Austrian Value Added Tax number
echo $faker->vat(false);    // "ATU12345678" - unspaced Austrian Value Added Tax number
```

### `Faker\Provider\at_AT\Person`

```php
echo $faker->ssn;                                  // "3130231169" - Austrian Social Security number
echo $faker->ssn(new \DateTime('2010-09-08'));     // "8235080910" - Austrian Social Security number for a specific birth date
```
