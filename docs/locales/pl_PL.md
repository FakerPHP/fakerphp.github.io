# Polish (Poland)

### `Faker\Provider\pl_PL\Person`

```php
// Generates a random PESEL number
echo $faker->pesel(); // "40061451555"
// Generates a random personal identity card number
echo $faker->personalIdentityNumber(); // "AKX383360"
// Generates a random taxpayer identification number (NIP)
echo $faker->taxpayerIdentificationNumber(); // '8211575109'
```

### `Faker\Provider\pl_PL\Company`

```php
// Generates a random REGON number
echo $faker->regon(); // "714676680"
// Generates a random local REGON number
echo $faker->regonLocal(); // "15346111382836"
```

### `Faker\Provider\pl_PL\Payment`

```php
// Generates a random bank name
echo $faker->bank(); // "Narodowy Bank Polski"
// Generates a random bank account number
echo $faker->bankAccountNumber(); // "PL14968907563953822118075816"
```

### `Faker\Provider\pl_PL\LicensePlate`
```php
<?php
// Generates a random Polish civil vehicle registration number
echo $faker->licensePlate(); // "SO 4429E"
echo $faker->licensePlate(false); // "BKL YP21"
// Generates a random Polish vehicle registration number including civil, army and services plates
echo $faker->licensePlate(true); // "CBY 0874H", "HPF N2LV"
// Generates a random Polish vehicle registration number for specific voivodeships
echo $faker->licensePlate(false, ['zachodniopomorskie', 'świętokrzyskie']); // "ZGY 35807"
// Generates a random Polish vehicle registration number for specific counties
echo $faker->licensePlate(false, ['warmińsko-mazurskie'], ['nidzicki', 'olecki']); // "NOE 35807"
// Generates a random Polish license plate of Border Service or Police
echo $faker->licensePlate(true, ['services'], ['Straż Graniczna', 'Policja']); // "UG 822PC"
// Generates a random Polish army license plate
echo $faker->licensePlate(true, ['army']); // "UG 822PC"
```
