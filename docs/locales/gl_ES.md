# Galician (Spain)

### `Faker\Provider\gl_ES\Address`

```php
// Generates the name of a Galician municipality (concello)
echo $faker->cityName(); // 'Allariz'

// Generates a Galician street type
echo $faker->streetPrefix(); // 'Praza'

// Generates a secondary address (floor / door)
echo $faker->secondaryAddress(); // '6º Esq.'

// Generates one of the four Galician provinces
echo $faker->state(); // 'Lugo'

// Generates a postcode of a Galician province (15, 27, 32 or 36)
echo $faker->postcode(); // '15931'
```

### `Faker\Provider\gl_ES\Company`

```php
echo $faker->companyPrefix(); // 'Obradoiro'
```

### `Faker\Provider\gl_ES\Person`

```php
// Generates a Documento Nacional de Identidad (DNI) number
echo $faker->dni(); // '92625583Y'

// Generates a random valid licence code
echo $faker->licenceCode(); // 'D1'
```

### `Faker\Provider\gl_ES\Payment`

```php
echo $faker->bankAccountNumber(); // "ES4176507496425094705468"

// Generates a Código de identificación Fiscal (CIF) number
echo $faker->vat(); // "D66464301"
```

### `Faker\Provider\gl_ES\PhoneNumber`

```php
// Generates a landline phone number with a Galician prefix (981, 982, 986 or 988)
echo $faker->phoneNumber(); // +34 981322434

// Generates a special rate toll free phone number
echo $faker->tollFreeNumber(); // 900 392 942

// Generates a mobile phone number
echo $faker->mobileNumber(); // 632-115184
```
