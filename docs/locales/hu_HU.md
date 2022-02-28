# Hungarian (Hungary)

### `Faker\Provider\hu_HU\Address`

```php
// Generates a random Floor or Door with suffix
echo $faker->secondaryAddress(); // "10. emelet"

// Generates a random state
echo $faker->state(); // "Pest"

// Echo the capital of Hungary
echo $faker->capital(); // "Budapest"

// Generates a random big city
echo $faker->bigCity(); // "Békéscsaba"

// Generates a random small city
echo $faker->smallerCity(); // "Ajka"

// Generates a coordinates inside the border of Hungary
echo $faker->localCoordinates(); // ['47.049242', '18.355119']
```

### `Faker\Provider\hu_HU\Company`

```php
// Generates a random company suffix
echo $faker->companySuffix(); // "Kft"
```

### `Faker\Provider\hu_HU\Payment`

```php
// Generates a random bank account number
echo $faker->bankAccountNumber(); // "HU09904437680048220079300783"
```

### `Faker\Provider\hu_HU\Person`

```php
// Generates a random male first name
echo $faker->firstNameMale(); // "Albert"

// Generates a random female first name
echo $faker->firstNameFemale(); // "Adél"

// Generates a random unisex last name
echo $faker->lastName(); // "Antal"

// Generates a specific Hungarian name format for females after marriage
echo $faker->lastNameFemaleMarried(); // "Kissné"

// Generates a random prefix before the name
echo $faker->title(); // "Dr."

// Replaced by specific unisex hungarian title
echo $faker->titleMale(); // "Báró"

// Replaced by specific unisex hungarian title
echo $faker->titleFemale(); // "Özv."

// Echo the PhD suffix
echo $faker->suffix(); // "PhD"
```

### `Faker\Provider\hu_HU\PhoneNumber`

```php
// Generates a random phone number
echo $faker->phoneNumber(); // "+36-00-000-0000"
```

### `Faker\Provider\hu_HU\Text`

```php
// Generates a text
echo $faker->text(); // "ELSŐ FEJEZET 1 - Uram! A késemért jöttem! - Hol hagyta?"
```
