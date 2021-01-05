# Spanish (Spain)

### `Faker\Provider\es_ES\Person`

```php
// Generates a Documento Nacional de Identidad (DNI) number
echo $faker->dni(); // '77446565E'

// Generates a random valid licence code
echo $faker->licenceCode(); // B
```

### `Faker\Provider\es_ES\Payment`

```php
echo $faker->bankAccountNumber(); // "ES5285748762396535068585"

// Generates a Código de identificación Fiscal (CIF) number
echo $faker->vat(); // "A35864370"
```

### `Faker\Provider\es_ES\PhoneNumber`

```php
// Generates a special rate toll free phone number
echo $faker->tollFreeNumber(); // 900 123 456

// Generates a mobile phone number
echo $faker->mobileNumber(); // +34 612 12 24
```
