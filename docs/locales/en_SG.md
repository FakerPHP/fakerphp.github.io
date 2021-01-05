# English (Singapore)

### `Faker\Provider\en_SG\Address`

```php
echo $faker->blockNumber(); // "Blk 914"
```

### `Faker\Provider\en_SG\Person`

```php
// Generates a National Registration Identity Card (NRIC) number
echo $faker->nric(); // "S4098150J"

// Generates a Foreign Identification Number (FIN)
echo $faker->fin(); // "G2325088N"

// Generates either NRIC or FIN number depending on the second argument
echo $faker->singaporeId(new \DateTime('2005-03-01'), $faker->boolean()); // "T0550799A"
```

### `Faker\Provider\en_SG\PhoneNumber`

```php
echo $faker->tollFreeInternationalNumber(); // "800 520 9659"

echo $faker->tollFreeLineNumber(); // "1800 331 6934"

echo $faker->premiumPhoneNumber(); // "1900 219 6547"

echo $faker->mobileNumber(); // "9207 0603"

echo $faker->fixedLineNumber(); // "6752 8659"

echo $faker->voipNumber(); // "3384 1228
```
