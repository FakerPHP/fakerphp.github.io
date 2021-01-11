# Portuguese (Brazil)

### `Faker\Provider\pt_BR\Address`

```php
// Generates a random region name
echo $faker->region(); // 'Nordeste'

// Generates a random region abbreviation
echo $faker->regionAbbr(); // 'NE'
```

### `Faker\Provider\pt_BR\PhoneNumber`

```php
echo $faker->areaCode();  // 21
echo $faker->cellphone(); // 9432-5656
echo $faker->landline();  // 2654-3445
echo $faker->phone();     // random landline, 8-digit or 9-digit cellphone number

// Using the phone functions with a false argument returns unformatted numbers
echo $faker->cellphone(false); // 74336667

// cellphone() has a special second argument to add the 9th digit. Ignored if generated a Radio number
echo $faker->cellphone(true, true); // 98983-3945 or 7343-1290

// Using the "Number" suffix adds area code to the phone
echo $faker->cellphoneNumber();     // (11) 98309-2935
echo $faker->landlineNumber(false); // 3522835934
echo $faker->phoneNumber();         // formatted, random landline or cellphone (obeying the 9th digit rule)
echo $faker->phoneNumberCleared();  // not formatted, random landline or cellphone (obeying the 9th digit rule)
```

### `Faker\Provider\pt_BR\Payment`

```php
echo $faker->bankAccountNumber(); // "BR0506997786328342762640926MO"
```

### `Faker\Provider\pt_BR\Person`

```php
// The name generator may include double first or double last names, plus title and suffix
echo $faker->name(); // 'Sr. Luis Adriano Sepúlveda Filho'

// Valid document generators have a boolean argument to remove formatting
echo $faker->cpf();      // '145.343.345-76'
echo $faker->cpf(false); // '45623467866'
echo $faker->rg();       // '84.405.736-3'
echo $faker->rg(false);  // '844057363'
```

### `Faker\Provider\pt_BR\Company`

```php
// Generates a Brazilian formatted and valid CNPJ
echo $faker->cnpj();      // '23.663.478/0001-24'
echo $faker->cnpj(false); // '23663478000124'
```
