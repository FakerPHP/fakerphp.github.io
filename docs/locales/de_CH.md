# German (Switzerland)

### `Faker\Provider\de_CH\Address`

```php
echo $faker->canton();        // ["GE" => "Genf"]
echo $faker->cantonShort();   // "GE"
echo $faker->cantonName();    // "Genf"
```

### `Faker\Provider\de_CH\Payment`

```php
echo $faker->bankAccountNumber(); // "CH28167004ZG2ZU4X0H47"
```

### `Faker\Provider\de_CH\Person`

```php
// Generates a random AVS13/AHV13 social security number
echo $faker->avs13(); // "756.1234.5678.97" OR
echo $faker->ahv13(); // "756.1234.5678.97"
```

### `Faker\Provider\de_CH\PhoneNumber`

```php
echo $faker->mobileNumber(); // "076 915 37 73"
```
