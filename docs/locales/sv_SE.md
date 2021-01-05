# Swedish (Sweden)

### `Faker\Provider\sv_SE\Payment`

```php
// Generates a random bank account number
echo $faker->bankAccountNumber(); // "SE5018548608468284909192"
```

### `Faker\Provider\sv_SE\Person`

```php
// Generates a valid Swedish personal identity number (in Swedish - Personnummer)
echo $faker->personalIdentityNumber(); // '950910-0799'

// Since the numbers are different for male and female persons, optionally you can specify gender.
echo $faker->personalIdentityNumber('female'); // '950910-0781'
```
