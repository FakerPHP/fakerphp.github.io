# Available Formatters

Each of the generator properties (like `name`, `address`, and `lorem`) are called "formatters". A faker generator has
many of them, packaged in "providers". Here is a list of the bundled formatters in the default locale.

In all examples, a faker instance is made using the `en_US` default locale.

```php
$faker = \Faker\Factory::create();
```

### `Faker\Provider\en_US\Person`

```php
title($gender = null|'male'|'female')     // 'Ms.'
titleMale                                 // 'Mr.'
titleFemale                               // 'Ms.'
suffix                                    // 'Jr.'
name($gender = null|'male'|'female')      // 'Dr. Zane Stroman'
firstName($gender = null|'male'|'female') // 'Maynard'
firstNameMale                             // 'Maynard'
firstNameFemale                           // 'Rachel'
lastName                                  // 'Zulauf'
```

### `Faker\Provider\en_US\Address`

```php
cityPrefix                          // 'Lake'
secondaryAddress                    // 'Suite 961'
state                               // 'NewMexico'
stateAbbr                           // 'OH'
citySuffix                          // 'borough'
streetSuffix                        // 'Keys'
buildingNumber                      // '484'
city                                // 'West Judge'
streetName                          // 'Keegan Trail'
streetAddress                       // '439 Karley Loaf Suite 897'
postcode                            // '17916'
address                             // '8888 Cummings Vista Apt. 101, Susanbury, NY 95473'
country                             // 'Falkland Islands (Malvinas)'
latitude($min = -90, $max = 90)     // 77.147489
longitude($min = -180, $max = 180)  // 86.211205
```

### `Faker\Provider\en_US\PhoneNumber`

```php
phoneNumber             // '201-886-0269 x3767'
tollFreePhoneNumber     // '(888) 937-7238'
e164PhoneNumber     // '+27113456789'
```

### `Faker\Provider\en_US\Company`

```php
catchPhrase             // 'Monitored regional contingency'
bs                      // 'e-enable robust architectures'
company                 // 'Bogan-Treutel'
companySuffix           // 'and Sons'
jobTitle                // 'Cashier'
```

### `Faker\Provider\en_US\Text`

```php
realText($maxNbChars = 200, $indexSize = 2) // "And yet I wish you could manage it?) 'And what are they made of?' Alice asked in a shrill, passionate voice. 'Would YOU like cats if you were never even spoke to Time!' 'Perhaps not,' Alice replied."
```

### `Faker\Provider\Uuid`

```php
uuid                   // '7e57d004-2b97-0e7a-b45f-5387367791cd'
```

### `Faker\Provider\Barcode`

```php
ean13          // '4006381333931'
ean8           // '73513537'
isbn13         // '9790404436093'
isbn10         // '4881416324'
```

### `Faker\Provider\Miscellaneous`

```php
boolean // false
boolean($chanceOfGettingTrue = 50) // true
md5           // 'de99a620c50f2990e87144735cd357e7'
sha1          // 'f08e7f04ca1a413807ebc47551a40a20a0b4de5c'
sha256        // '0061e4c60dac5c1d82db0135a42e00c89ae3a333e7c26485321f24348c7e98a5'
locale        // en_UK
countryCode   // UK
languageCode  // en
currencyCode  // EUR
emoji         // 😁
```

### `Faker\Provider\Biased`

```php
// get a random number between 10 and 20,
// with more chances to be close to 20
biasedNumberBetween($min = 10, $max = 20, $function = 'sqrt')
```

### `Faker\Provider\HtmlLorem`

```php
// Generate HTML document which is no more than 2 levels deep, and no more than 3 elements wide at any level.
randomHtml(2, 3)   
// <html><head><title>Aut illo dolorem et accusantium eum.</title></head><body><form action="example.com" method="POST"><label for="username">sequi</label><input type="text" id="username"><label for="password">et</label><input type="password" id="password"></form><b>Id aut saepe non mollitia voluptas voluptas.</b><table><thead><tr><tr>Non consequatur.</tr><tr>Incidunt est.</tr><tr>Aut voluptatem.</tr><tr>Officia voluptas rerum quo.</tr><tr>Asperiores similique.</tr></tr></thead><tbody><tr><td>Sapiente dolorum dolorem sint laboriosam commodi qui.</td><td>Commodi nihil nesciunt eveniet quo repudiandae.</td><td>Voluptates explicabo numquam distinctio necessitatibus repellat.</td><td>Provident ut doloremque nam eum modi aspernatur.</td><td>Iusto inventore.</td></tr><tr><td>Animi nihil ratione id mollitia libero ipsa quia tempore.</td><td>Velit est officia et aut tenetur dolorem sed mollitia expedita.</td><td>Modi modi repudiandae pariatur voluptas rerum ea incidunt non molestiae eligendi eos deleniti.</td><td>Exercitationem voluptatibus dolor est iste quod molestiae.</td><td>Quia reiciendis.</td></tr><tr><td>Inventore impedit exercitationem voluptatibus rerum cupiditate.</td><td>Qui.</td><td>Aliquam.</td><td>Autem nihil aut et.</td><td>Dolor ut quia error.</td></tr><tr><td>Enim facilis iusto earum et minus rerum assumenda quis quia.</td><td>Reprehenderit ut sapiente occaecati voluptatum dolor voluptatem vitae qui velit.</td><td>Quod fugiat non.</td><td>Sunt nobis totam mollitia sed nesciunt est deleniti cumque.</td><td>Repudiandae quo.</td></tr><tr><td>Modi dicta libero quisquam doloremque qui autem.</td><td>Voluptatem aliquid saepe laudantium facere eos sunt dolor.</td><td>Est eos quis laboriosam officia expedita repellendus quia natus.</td><td>Et neque delectus quod fugit enim repudiandae qui.</td><td>Fugit soluta sit facilis facere repellat culpa magni voluptatem maiores tempora.</td></tr><tr><td>Enim dolores doloremque.</td><td>Assumenda voluptatem eum perferendis exercitationem.</td><td>Quasi in fugit deserunt ea perferendis sunt nemo consequatur dolorum soluta.</td><td>Maxime repellat qui numquam voluptatem est modi.</td><td>Alias rerum rerum hic hic eveniet.</td></tr><tr><td>Tempore voluptatem.</td><td>Eaque.</td><td>Et sit quas fugit iusto.</td><td>Nemo nihil rerum dignissimos et esse.</td><td>Repudiandae ipsum numquam.</td></tr><tr><td>Nemo sunt quia.</td><td>Sint tempore est neque ducimus harum sed.</td><td>Dicta placeat atque libero nihil.</td><td>Et qui aperiam temporibus facilis eum.</td><td>Ut dolores qui enim et maiores nesciunt.</td></tr><tr><td>Dolorum totam sint debitis saepe laborum.</td><td>Quidem corrupti ea.</td><td>Cum voluptas quod.</td><td>Possimus consequatur quasi dolorem ut et.</td><td>Et velit non hic labore repudiandae quis.</td></tr></tbody></table></body></html>
```
