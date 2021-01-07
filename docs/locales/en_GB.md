# English (United Kingdom)

### `Faker\Provider\en_GB\Address`

```php
echo $faker->secondaryAddress(); // "Flat 13"
echo $faker->county();           // 'Hampshire'
```

### `Faker\Provider\en_GB\Company`

```php
echo $faker->vat();                                     // "GB123 4567 89"
echo $faker->vat( Company::VAT_TYPE_BRANCH );           // "GB123 4567 89 012"
echo $faker->vat( Company::VAT_TYPE_GOVERNMENT );       // "GBGD123"
echo $faker->vat( Company::VAT_TYPE_HEALTH_AUTHORITY ); // "GBHA567"
```

### `Faker\Provider\en_GB\Payment`

```php
echo $faker->bankAccountNumber(); // "GB28MLRJ42074399970100"

// Generates a random National Insurance number.
echo $faker->nino(); // "TY179309C"
```

### `Faker\Provider\en_GB\PhoneNumber`

```php
echo $faker->mobileNumber(); // "07720324489"
```
