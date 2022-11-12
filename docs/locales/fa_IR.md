# Persian (Iran)

### `Faker\Provider\fa_IR\Person`

```php
// Generates a valid nationalCode
echo $faker->nationalCode(); // "0078475759"
```

### `Faker\Provider\fa_IR\Address`

```php
echo $faker->city(); // "رفسنجان"

echo $faker->stateName(); // "کرمان"

echo $faker->streetName(); // "خیابان آفتاب"

echo $faker->streetAddress(); // "رفسنجان - خیابان آفتاب"

echo $faker->postcode(); //?  "4730815600"

echo $faker->address(); // "کرمان - رفسنجان - خیابان آفتاب - کد پستی 4730815600"

```

### `Faker\Provider\fa_IR\Company`

```php
// Generates a random contract type
echo $faker->contract(); // "رسمی"
```
