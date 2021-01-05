# Romanian (Romania)

### `Faker\Provider\ro_RO\Payment`

```php
// Generates a random bank account number
echo $faker->bankAccountNumber(); // "RO55WRJE3OE8X3YQI7J26U1E"
```

### `Faker\Provider\ro_RO\Person`

```php
// Generates a random male name prefix/title
echo $faker->prefixMale(); // "ing."
// Generates a random female name prefix/title
echo $faker->prefixFemale(); // "d-na."
// Generates a random male first name
echo $faker->firstNameMale(); // "Adrian"
// Generates a random female first name
echo $faker->firstNameFemale(); // "Miruna"

// Generates a random Personal Numerical Code (CNP)
echo $faker->cnp(); // "2800523081231"
// Valid option values:
//    $gender: null (random), male, female
//    $dateOfBirth (1800+): null (random), Y-m-d, Y-m (random day), Y (random month and day)
//          i.e. '1981-06-16', '2015-03', '1900'
//    $county: 2 letter ISO 3166-2:RO county codes and B1, B2, B3, B4, B5, B6 for Bucharest's 6 sectors
//    $isResident true/false flag if the person resides in Romania
echo $faker->cnp($gender = null, $dateOfBirth = null, $county = null, $isResident = true);
```

### `Faker\Provider\ro_RO\PhoneNumber`

```php
// Generates a random toll-free phone number
echo $faker->tollFreePhoneNumber(); // "0800123456"
// Generates a random premium-rate phone number
echo $faker->premiumRatePhoneNumber(); // "0900123456"
```
