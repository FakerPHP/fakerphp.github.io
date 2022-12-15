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

### `Faker\Provider\sv_SE\MobileNumber`

```php
// Generates a random Swedish mobile phone number
echo $faker->mobileNumber(); // "+467########"
echo $faker->mobileNumber(); // "+46(0)7########"
echo $faker->mobileNumber(); // "+46 (0)7## ## ## ##"
echo $faker->mobileNumber(); // "+46 (0)7## ### ###"
echo $faker->mobileNumber(); // "07########"
echo $faker->mobileNumber(); // "07## ## ## ##"
echo $faker->mobileNumber(); // "07## ### ###"
```

### Publishable and GDPR safe number series

The [Swedish Post and Telecom Authority (PTS) has reserved a series of numbers](https://www.pts.se/sv/bransch/telefoni/nummer-och-adressering/telefonnummer-for-anvandning-i-bocker-och-filmer-etc/) that are safe to use in relation to European GDPR laws.
<br>The numbers will never be used by any subscriber wich also makes them safe to publish in books, movies, TV series etc. 

```php
//Publishable Swedish mobile phone number series
echo '070-1740' . $faker->faker->numberBetween(605, 699);

//Publishable Swedish landline phone number series
echo '031-3900' . $faker->numberBetween(600, 699);
echo '040-6280' . $faker->numberBetween(400, 499);
echo '08-46500' . $faker->numberBetween(400, 499);
echo '0980-319' . $faker->numberBetween(200, 299);
```

