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
echo $faker->identityDocument; // stdClass with properties "code", "number", "issueDate  & "expiryDate"
echo $faker->identityDocument('PN', ['date' => new \DateTime('2019-05-10'), 'type' => 'issue', 'birth' => new \DateTime('2001-02-03')]); //  Generate "national passport" issued on 2019-05-10 for person born on 2001-02-03
echo $faker->identityDocument->code; // "PN" - From Code tabel 48, see https://www.rvig.nl/reisdocumenten/register-paspoortsignaleringen/reisdocumentsoort-categorie-12-persoonslijst
echo $faker->identityDocument->number; // "NS7GAKP999" - Document number
echo $faker->identityDocument->issueDate; // "2015-10-08" - Document issue date
echo $faker->identityDocument->expiryDate; // "2025-10-08" - Document expiry date
```
