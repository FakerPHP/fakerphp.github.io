# French (France)

### `Faker\Provider\fr_FR\Address`

```php
// Generates a random department name
echo $faker->departmentName(); // "Haut-Rhin"

// Generates a random department number
echo $faker->departmentNumber(); // "2B"

// Generates a random department info (department number => department name)
$faker->department(); // ['18' => 'Cher'];

// Generates a random region
echo $faker->region(); // "Saint-Pierre-et-Miquelon"

// Generates a random appartement, stair
echo $faker->secondaryAddress(); // "Bat. 961"
```

### `Faker\Provider\fr_FR\Company`

```php
// Generates a random SIREN number
echo $faker->siren(); // 082 250 104

// Generates a random SIRET number
echo $faker->siret(); // 347 355 708 00224
```

### `Faker\Provider\fr_FR\Payment`

```php
echo $faker->bankAccountNumber; // "FR982713192809U43A8QR4OJ923"

// Generates a random VAT
echo $faker->vat(); // FR 12 123 456 789
```

### `Faker\Provider\fr_FR\Person`

```php
// Generates a random NIR / Sécurité Sociale number
echo $faker->nir(); // 1 88 07 35 127 571 - 19
```

### `Faker\Provider\fr_FR\PhoneNumber`

```php
// Generates phone numbers
echo $faker->phoneNumber();   // +33 (0)1 67 97 01 31
echo $faker->mobileNumber();  // +33 6 21 12 72 84
echo $faker->serviceNumber(); // 08 98 04 84 46
```
