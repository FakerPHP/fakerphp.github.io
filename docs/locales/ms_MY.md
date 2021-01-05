# Malay (Malaysia)

### `Faker\Provider\ms_MY\Address`

```php
// Generates a random Malaysian township
echo $faker->township(); // "Taman Bahagia"

// Generates a random Malaysian town address with matching postcode and state
echo $faker->townState(); // "55100 Bukit Bintang, Kuala Lumpur"
```

### `Faker\Provider\ms_MY\Miscellaneous`

```php
// Generates a random vehicle license plate number
echo $faker->jpjNumberPlate(); // "WPL 5169"
```

### `Faker\Provider\ms_MY\Payment`

```php
// Generates a random Malaysian bank
echo $faker->bank(); // "Maybank"

// Generates a random Malaysian bank account number (10-16 digits)
echo $faker->bankAccountNumber(); // "1234567890123456"

// Generates a random Malaysian insurance company
echo $faker->insurance(); // "AIA Malaysia"

// Generates a random Malaysian bank SWIFT Code
echo $faker->swiftCode(); // "MBBEMYKLXXX"
```

### `Faker\Provider\ms_MY\Person`

```php
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
```
