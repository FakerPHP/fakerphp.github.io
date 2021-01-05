# Kazakh (Kazakhstan)

### `Faker\Provider\kk_KZ\Company`

```php
// Generates an business identification number
echo $faker->businessIdentificationNumber(); // "150140000019"
```

### `Faker\Provider\kk_KZ\Payment`

```php
// Generates a random bank name
echo $faker->bank(); // "Қазкоммерцбанк"

// Generates a random bank account number
echo $faker->bankAccountNumber(); // "KZ1076321LO4H6X41I37"
```

### `Faker\Provider\kk_KZ\Person`

```php
// Generates an individual identification number
echo $faker->individualIdentificationNumber(); // "780322300455"

// Generates an individual identification number based on his/her birth date
echo $faker->individualIdentificationNumber(new \DateTime('1999-03-01')); // "990301300455"
```
