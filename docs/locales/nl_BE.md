# Dutch (Belgium)

### `Faker\Provider\nl_BE\Payment`

```php
echo $faker->bankAccountNumber(); // "BE74249767372336"
echo $faker->vat();               // "BE 0123456789" - Belgian Value Added Tax number
echo $faker->vat(false);          // "BE0123456789" - unspaced Belgian Value Added Tax number
```

### `Faker\Provider\nl_BE\Person`

```php
echo $faker->rrn();         // "83051711784" - Belgian Rijksregisternummer
echo $faker->rrn('female'); // "50032089858" - Belgian Rijksregisternummer for a female
```
