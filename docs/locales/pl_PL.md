# Polish (Poland)
based on phpfaker v1.21.0

### `Faker\Provider\pl_PL\Person`
```php
// Generates a random PESEL number
echo $faker->pesel() // 01322920616 (string)
// Generates a random personal identity card number
echo $faker->personalIdentityNumber() // AUT578654 (string)
// Generates a random taxpayer identification number (NIP)
echo $faker->taxpayerIdentificationNumber() // 3856102511 (string)
echo $faker->lastName() // Dąbrowska (string)
echo $faker->lastNameMale() // Sobczak (string)
echo $faker->lastNameFemale() // Bąk (string)
echo $faker->title() // doc. (string)
echo $faker->titleMale() // mgr (string)
echo $faker->titleFemale() // inż. (string)
echo $faker->name() // Sonia Piotrowska (string)
echo $faker->firstName() // Andrzej (string)
echo $faker->firstNameMale() // Aleks (string)
echo $faker->firstNameFemale() // Urszula (string)
```

### `Faker\Provider\pl_PL\Company`
```php
echo $faker->companyPrefix() // Fundacja (string)
// Generates a random REGON number
echo $faker->regon() // 975697664 (string)
// Generates a random local REGON number
echo $faker->regonLocal() // 81638079068090 (string)
echo $faker->company() // Spółdzielnia Ziółkowska (string)
echo $faker->companySuffix() // S.A. (string)
echo $faker->jobTitle() // laboriosam (string)
```
### `Faker\Provider\pl_PL\PhoneNumber`
```php
echo $faker->phoneNumber() // 0048(35)8772422 (string)
echo $faker->e164PhoneNumber() // +41962746172 (string)
echo $faker->imei() // 949862290137949 (string)
```

### `Faker\Provider\pl_PL\Address`
```php
echo $faker->city() // Lubliniec (string)
echo $faker->streetName() // Grottgera Artura (string)
echo $faker->state() // pomorskie (string)
echo $faker->citySuffix() // Ville (string)
echo $faker->streetSuffix() // Street (string)
echo $faker->buildingNumber() // 14/34 (string)
echo $faker->streetAddress() // Ściegiennego Piotra 41 (string)
echo $faker->postcode() // 30-705 (string)
echo $faker->address() // Wierzbowa 18A, 23-944 Zawiercie (string)
echo $faker->country() // Vanuatu (string)
echo $faker->latitude() // -14.912376 (double)
echo $faker->longitude() // -2.17882 (double)
echo $faker->localCoordinates() // => [30.037672, 31.186133] (array)
```

### `Faker\Provider\pl_PL\Payment`
```php
// Generates a random bank name
echo $faker->bank(); // "Narodowy Bank Polski" (string)
// Generates a random bank account number
echo $faker->bankAccountNumber(); // "PL14968907563953822118075816" (string)
echo $faker->creditCardType() // Visa (string)
echo $faker->creditCardNumber() // 379652090842569 (string)
echo $faker->creditCardExpirationDateString() // 02/23 (string)
echo $faker->creditCardDetails() // => [MasterCard, 2221730504155970, Joanna Walczak, 02/25] (array)
echo $faker->iban() // AD876763228127KI0TFXEGN4 (string)
echo $faker->swiftBicNumber() // HKNZUEV1 (string)
```

### `Faker\Provider\pl_PL\Internet`
```php
echo $faker->email() // jeremi37@interia.pl (string)
echo $faker->safeEmail() // wasilewski.dawid@example.org (string)
echo $faker->freeEmail() // jerzy.nowak@wp.pl (string)
echo $faker->companyEmail() // alex.maciejewska@sobczak.org (string)
echo $faker->freeEmailDomain() // gazeta.pl (string)
echo $faker->safeEmailDomain() // example.org (string)
echo $faker->userName() // leon15 (string)
echo $faker->password() // g+uhCVpj (string)
echo $faker->domainName() // kowalczyk.pl (string)
echo $faker->domainWord() // bak (string)
echo $faker->tld() // pl (string)
echo $faker->url() // http://szymanska.pl/ (string)
echo $faker->slug() // at-eos-expedita-voluptas-totam-dolores (string)
echo $faker->ipv4() // 145.12.53.193 (string)
echo $faker->ipv6() // 5524:1a46:5897:8d18:bbad:b0c3:be4f:b306 (string)
echo $faker->localIpv4() // 10.58.47.248 (string)
echo $faker->macAddress() // 1F:F0:44:01:32:B4 (string)
```

### `Faker\Provider\pl_PL\Text`
```php
echo $faker->realText() // Klondike'u. Tak ciągnęły się jeden nad drugi i rosły, zesztywniałe z przerażenia i osłupiałe. Daleki, zimny, czerwony odblask zabarwiał je późnymi kolorami. Nie jedliśmy tego dnia obiadu, bo ogień w. (string)
echo $faker->realTextBetween() // Na rynku spotkałem ludzi zażywających przechadzki. Wszyscy, oczarowani widowiskiem tej nocy, mieli twarze wzniesione i srebrne od magii nieba. Troska o portfel opuściła mnie zupełnie. Ojciec. (string)
```

### `Faker\Provider\pl_PL\LicensePlate`
```php
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
