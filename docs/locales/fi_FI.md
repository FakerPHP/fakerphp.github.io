# Finnish (Finland)

### `Faker\Provider\fi_FI\Payment`

```php
// Generates a random bank account number
echo $faker->bankAccountNumber(); // "FI8350799879879616"
```

### `Faker\Provider\fi_FI\Person`

```php
// Generates a valid Finnish personal identity number (in Finnish - Henkilötunnus)
echo $faker->personalIdentityNumber() // '170974-007J'

// Since the numbers are different for male and female persons, optionally you can specify gender.
echo $faker->personalIdentityNumber(\DateTime::createFromFormat('Y-m-d', '2015-12-14'), 'female') // '141215A520B'
```
