# Estonian (Estonia)

### `Faker\Provider\et_EE\Address`

```php
echo $faker->state()              // 'Hiiumaa'
echo $faker->buildingNumber()     // '12c'
echo $faker->city()               // 'Tartu'
echo $faker->streetName()         // 'Vabaduse puiestee'
echo $faker->streetAddress()      // 'Hommiku 2/5'
echo $faker->postcode()           // '12345'
echo $faker->address()            // 'Tatari tänav 69a 00679 Võrumaa'
echo $faker->country()            // 'Soome'
```

### `Faker\Provider\et_EE\Payment`

```php
// Generates a random bank account number
echo $faker->bankAccountNumber(); // "EE8350799879879616"
```

### `Faker\Provider\et_EE\Person`

```php
// Generates a valid Finnish personal identity number (in Estonian - Isikukood)
echo $faker->personalIdentityNumber() // '39306027445'

// Since the numbers are different for male and female persons, optionally you can specify gender.
echo $faker->personalIdentityNumber(\DateTime::createFromFormat('Y-m-d', '2015-12-14'), 'female') // '61512147137'
```

### `Faker\Provider\et_EE\Company`

```php
// Generates a random Estonian business name
echo $faker->company() // 'Kirsipuu Tsement OÜ'

// Generates an Estonian business registration code (in Estonian - Registrikood)
echo $faker->registrationCode() // '86864589'

// Generates an Estonian business VAT number (in Estonian - Käibemaksukohustuslasena registreerimise number)
echo $faker->vat() // 'EE719175530'

// Generates a random company suffix
echo $faker->companySuffix(); // "OÜ"

// Generates a random catchphrase
echo $faker->catchPhrase(); // "Iseseisev kohalik analüüs"

// Generates random bs
echo $faker->bs(); // "e-äri dünaamiline võrdlus"
```
