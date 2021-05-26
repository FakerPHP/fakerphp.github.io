# French (Belgium)

### `Faker\Provider\fr_BE\Address`

```php
echo $faker->province(); // "Brabant wallon"
echo $faker->cityName(); // "La Roche-en-Ardenne"
```

### `Faker\Provider\fr_BE\Company`

```php
echo $faker->company(); // "Timmermans SA"
echo $faker->companySuffix(); // "ASBL"
```

### `Faker\Provider\fr_BE\Internet`

```php
echo $faker->tld(); // "be"
```

### `Faker\Provider\fr_BE\Payment`

```php
// IBAN for a Belgian bank account. Will always start with "BE".
echo $faker->bankAccountNumber(); // "BE22800006647946"

// VAT number.
echo $faker->vat(); // "BE 0123456789"

// Same as above but without any space between country code and number.
echo $faker->vat(false); // "BE0123456789"
```

### `Faker\Provider\fr_BE\Person`

```php
echo $faker->firstNameFemale(); // "Marion"
echo $faker->firstNameMale(); // "Maxime"

echo $faker->lastName(); // "Janssens"

echo $faker->titleFemale(); // "Dr."
echo $faker->titleMale(); // "M."
```

### `Faker\Provider\fr_BE\PhoneNumber`

```php
echo $faker->phoneNumber(); // "+32(0)2 9398787"
```
