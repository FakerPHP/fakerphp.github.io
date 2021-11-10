# English (South Africa)

### `Faker\Provider\en_ZA\Company`

```php
// Generates a random company registration number
echo $faker->companyNumber(); // 1999/789634/01
```

### `Faker\Provider\en_ZA\Person`

```php
// Generates a random national identification number
echo $faker->idNumber(); // 6606192211041

// Generates a random valid licence code
echo $faker->licenceCode(); // EB
```

### `Faker\Provider\en_ZA\PhoneNumber`

```php
// Generates a special rate toll free phone number
echo $faker->tollFreeNumber(); // 0800 555 5555

// Generates a mobile phone number
echo $faker->mobileNumber(); // 082 123 5555
```

### `Faker\Provider\en_ZA\Address`

```php
// Generates a city prefix
echo $faker->cityPrefix(); // East

// Generates a secondary address
echo $faker->secondaryAddress(); // Appt. 350

// Generates a province
echo $faker->province(); // Gauteng

// Generates a province abbreviation
echo $faker->provinceAbbr(); // GP
```

### `Faker\Provider\en_ZA\Internet`

```php
// Generates a free email domain
echo $faker->freeEmailDomain(); // webmail.co.za

// Generates a random TLD for South Africa
echo $faker->tld(); // co.za
```
