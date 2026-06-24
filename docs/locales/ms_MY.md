# Malay (Malaysia)

### `Faker\Provider\ms_MY\Address`

```php
// Generates a random building prefix
echo $faker->buildingPrefix(); // "No."

// Generates a random building number
echo $faker->buildingNumber(); // "123"

// Generates a random street prefix
echo $faker->streetPrefix(); // "Jalan"

// Generates a random complete street name
echo $faker->streetName(); // "Jalan Utama 7"

// Generates a random Malaysian township
echo $faker->township(); // "Taman Bahagia"

// Generates a random township prefix abbreviation
echo $faker->townshipPrefixAbbr(); // "USJ"

// Generates a random township prefix
echo $faker->townshipPrefix(); // "Taman"

// Generates a random township suffix
echo $faker->townshipSuffix(); // "Bahagia"

// Generates a random postcode, optionally for a given state
// $state may be one of: perlis, kedah, penang, kelantan, terengganu, pahang,
// perak, selangor, kl, putrajaya, nsembilan, melaka, johor, labuan, sabah, sarawak
echo $faker->postcode($state = null); // "55100"

// Generates a random Malaysian town address with matching postcode and state
echo $faker->townState(); // "55100 Bukit Bintang, Kuala Lumpur"

// Generates a random Malaysian city (town)
echo $faker->city(); // "Ampang"

// Generates a random Malaysian state
echo $faker->state(); // "Johor"
```

### `Faker\Provider\ms_MY\Company`

```php
// Generates a random Malaysian company name
echo $faker->companyName(); // "AirAsia"

// Generates a random industry
echo $faker->industry(); // "Automobil"
```

### `Faker\Provider\ms_MY\Miscellaneous`

```php
// Generates a random vehicle license plate number
echo $faker->jpjNumberPlate(); // "WPL 5169"

// Generates a random Peninsular Malaysia prefix alphabet
echo $faker->peninsularPrefix(); // "W"

// Generates a random Sarawak state prefix alphabet
echo $faker->sarawakPrefix(); // "QA"

// Generates a random Sabah state prefix alphabet
echo $faker->sabahPrefix(); // "SA"

// Generates a random specialty license plate prefix
echo $faker->specialPrefix(); // "G1M"

// Generates a random valid license plate alphabet
echo $faker->validAlphabet(); // "A"

// Generates a random number sequence between 1 and 9999
echo $faker->numberSequence(); // 1234
```

### `Faker\Provider\ms_MY\Payment`

```php
// Generates a random Malaysian bank
echo $faker->bank(); // "Maybank"

// Generates a random Malaysian bank account number (10-16 digits)
echo $faker->bankAccountNumber(); // "1234567890123456"

// Generates a random Malaysian local bank
echo $faker->localBank(); // "Public Bank"

// Generates a random Malaysian foreign bank
echo $faker->foreignBank(); // "Citibank Berhad"

// Generates a random Malaysian government bank
echo $faker->governmentBank(); // "Bank Simpanan Nasional"

// Generates a random Malaysian insurance company
echo $faker->insurance(); // "AIA Malaysia"

// Generates a random Malaysian bank SWIFT Code
echo $faker->swiftCode(); // "MBBEMYKLXXX"

// Generates the Malaysian currency symbol
echo $faker->currencySymbol(); // "RM"
```

### `Faker\Provider\ms_MY\Person`

```php
// Generates a random Malay male first name
echo $faker->firstNameMaleMalay(); // "Ahmad"

// Generates a random Malay female first name
echo $faker->firstNameFemaleMalay(); // "Adibah"

// Generates a random Malay last name
echo $faker->lastNameMalay(); // "Abdullah"

// Generates a random Malay male 'Muhammad' name
echo $faker->muhammadName(); // "Muhammad"

// Generates a random Malay female 'Nur' name
echo $faker->nurName(); // "Nur"

// Generates a random Malay male 'Haji' title
echo $faker->haji(); // "Haji"

// Generates a random Malay female 'Hajjah' title
echo $faker->hajjah(); // "Hajjah"

// Generates a random Malay male title
echo $faker->titleMaleMalay(); // "Syed"

// Generates a random Chinese last name
echo $faker->lastNameChinese(); // "Lim"

// Generates a random Chinese male first name
echo $faker->firstNameMaleChinese(); // "Goh Tong"

// Generates a random Chinese female first name
echo $faker->firstNameFemaleChinese(); // "Mew Choo"

// Generates a random Christian male name
echo $faker->firstNameMaleChristian(); // "Aaron"

// Generates a random Christian female name
echo $faker->firstNameFemaleChristian(); // "Alice"

// Generates a random Indian initial
echo $faker->initialIndian(); // "S. "

// Generates a random Indian male first name
echo $faker->firstNameMaleIndian(); // "Arumugam"

// Generates a random Indian female first name
echo $faker->firstNameFemaleIndian(); // "Ambiga"

// Generates a random Indian last name
echo $faker->lastNameIndian(); // "Subramaniam"

// Generates a random last name (Malay, Chinese or Indian)
echo $faker->lastName(); // "Lee"

// Generates a random personal identity card (myKad) number
echo $faker->myKadNumber($gender = null|'male'|'female', $hyphen = null|true|false); // "710703471796"
```

### `Faker\Provider\ms_MY\PhoneNumber`

```php
// Generates a random Malaysian mobile number
echo $faker->mobileNumber($countryCodePrefix = null|true|false, $formatting = null|true|false); // "+6012-705 3767"

// Generates a random Malaysian landline number
echo $faker->fixedLineNumber($countryCodePrefix = null|true|false, $formatting = null|true|false); // "03-7112 0455"

// Generates a random Malaysian voip number
echo $faker->voipNumber($countryCodePrefix = null|true|false, $formatting = null|true|false); // "015-458 7099"

// Generates random prefix digits for 011 numbers
echo $faker->zeroOneOnePrefix(); // "10"

// Generates random prefix digits for 014 numbers
echo $faker->zeroOneFourPrefix(); // "2"

// Generates random prefix digits for 015 numbers
echo $faker->zeroOneFivePrefix(); // "1"

// Generates a random Malaysian country code prefix
echo $faker->countryCodePrefix($formatting = null|true|false); // "+6"
```
