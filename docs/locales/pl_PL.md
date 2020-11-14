# Polish (Poland)

### `Faker\Provider\pl_PL\Person`

```php
<?php

// Generates a random PESEL number
echo $faker->pesel; // "40061451555"
// Generates a random personal identity card number
echo $faker->personalIdentityNumber; // "AKX383360"
// Generates a random taxpayer identification number (NIP)
echo $faker->taxpayerIdentificationNumber; // '8211575109'
```

### `Faker\Provider\pl_PL\Company`

```php
<?php

// Generates a random REGON number
echo $faker->regon; // "714676680"
// Generates a random local REGON number
echo $faker->regonLocal; // "15346111382836"
```

### `Faker\Provider\pl_PL\Payment`

```php
<?php

// Generates a random bank name
echo $faker->bank; // "Narodowy Bank Polski"
// Generates a random bank account number
echo $faker->bankAccountNumber; // "PL14968907563953822118075816"
```
