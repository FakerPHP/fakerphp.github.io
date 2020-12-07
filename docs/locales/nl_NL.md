# Dutch (Netherlands)

### `Faker\Provider\nl_NL\Company`

```php
echo $faker->jobTitle; // "Houtbewerker"
echo $faker->vat; // "NL123456789B01" - Dutch Value Added Tax number
echo $faker->btw; // "NL123456789B01" - Dutch Value Added Tax number (alias)
```

### `Faker\Provider\nl_NL\Payment`

```php
echo $faker->bankAccountNumber; // "NL74MNEJ4830302492"
```

### `Faker\Provider\nl_NL\Person`

```php
echo $faker->idNumber; // "111222333" - Dutch Personal identification number (BSN)
// Generate information about an identity document
echo $faker->identityDocumentNumber(new \DateTime('2019-05-10')); // "NS70AKP99" - Document number for issue date
echo $faker->identityDocumentNumber(new \DateTime('2019-05-10'), 'PN'); // "NS70AKP99" - "national passport" document number for issue date
echo $faker->identityDocumentValidity(20); // 10 - Document validity in years for person at age of 20
```
