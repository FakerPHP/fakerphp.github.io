# Formatters

Each of the generator properties (like `name`, `address`, and `lorem`) are called "formatters". A faker generator has
many of them, packaged in "providers". Here is a list of the bundled formatters in the default locale.

In all examples, a faker instance is made using the `en_US` default locale.

```php
$faker = \Faker\Factory::create();
```

### Numbers and Strings (`Faker\Provider\Base`)

#### # `randomDigit`

Generates a random integer from 0 until 9.

```php
echo $faker->randomDigit();

// an integer between 0 and 10
```

#### # `randomDigitNot`

Generates a random integer from 0 until 9, excluding a given number.

```php
echo $faker->randomDigitNot(2);

// 1, 3, 4, 5, 6, 7, 8 or 9
```

#### # `randomDigitNotNull`

Generates a random integer from 1 until 9.

```php
echo $faker->randomDigitNotNull();

// an integer between 1 and 10
```

#### # `randomNumber`

Generates a random integer, containing between 0 and `$nbDigits` amount of digits. When the `$strict` parameter
is `true`, it will only return integers with $nbDigits amount of digits.

```php
echo $faker->randomNumber(5, false);

// 123, 43, 19238, 5, or 1203

echo $faker->randomNumber(5, true);

// 12643, 42931, or 32919
```

#### # `randomFloat`

Generates a random float. Optionally it's possible to specify the amount of decimals.

The second and third parameters optionally specify a lower and upper bound respectively.

```php
echo $faker->randomFloat();

// 12.9830, 2193.1232312, 102.12

echo $faker->randomFloat(2);

// 43.23, 1203.49, 3428.93

echo $faker->randomFloat(1, 20, 30);

// 21.7, 27.2, 28.1
```

#### # `numberBetween`

Generates a random integer between `$min` and `$max`. By default, an integer is generated between `0`
and `2,147,483,647` (32-bit integer).

```php
echo $faker->numberBetween();

// 120378987, 182, 102310983

echo $faker->numberBetween(0, 100);

// 32, 87, 91, 13, 75
```

#### # `randomLetter`

Generates a random character from the alphabet.

```php
echo $faker->randomLetter();

// 'h', 'i', 'q'
```

#### # `randomElements`

Returns `$count` amount of random element from the given array. By default, the `$count` parameter is set to 1.

```php
echo $faker->randomElements(['a', 'b', 'c', 'd', 'e']);

// ['c']

echo $faker->randomElements(['a', 'b', 'c', 'd', 'e'], 3);

// ['a', 'd', 'e']
```

#### # `randomElement`

Returns `$count` amount of random element from the given array. By default, the `$count` parameter is set to 1.

```php
echo $faker->randomElement(['a', 'b', 'c', 'd', 'e']);

// 'c'
```

#### # `shuffle`

Returns a shuffled version of either an array or string.

```php
echo $faker->shuffle('hello-world');

// 'lrhoodl-ewl'

echo $faker->shuffle([1, 2, 3]);

// [3, 1, 2]
```

#### # `numerify`

Generate a string where all `#` characters are replaced by digits between 0 and 10. By default, `###` is used as input.

```php
echo $faker->numerify();

// '912', '271', '109', '674'

echo $faker->numerify('user-####');

// 'user-4928', 'user-3427', 'user-1280'
```

#### # `lexify`

Generate a string where all `?` characters are replaces with a random letter from the Latin alphabet. By default, `????`
is used as input.

```php
echo $faker->lexify();

// 'sakh', 'qwei', 'adsj'

echo $faker->lexify('id-????');

// 'id-xoqe', 'id-pqpq', 'id-zpeu'
```

#### # `bothify`

Generate a string where `?` characters are replaced with a random letter, and `#` characters are replaces with a random
digit between 0 and 10. By default, `## ??` is used as input.

```php
echo $faker->bothify();

// '46 hd', '19 ls', '75 pw'

echo $faker->bothify('?????-#####');

// 'lsadj-10298', 'poiem-98342', 'lcnsz-42938'
```

#### # `asciify`

Generate a string where `*` characters are replaced with a random character from the ASCII table. By default, `****` is
used as input.

```php
echo $faker->asciify();

// '%Y+!', '{<"B', 'kF^a'

echo $faker->asciify('user-****');

// 'user-ntwx', 'user-PK`A', 'user-n`,X'
```

#### # `regexify`

Generate a random string based on a regex. By default, an empty string is used as input.

```php
echo $faker->regexify();

// ''

echo $faker->regexify('[A-Z]{5}[0-4]{3}');

// 'DRSQX201', 'FUDPA404', 'CQVIU411'
```

### Text and Paragraphs (`Faker\Provider\Lorem`)

#### # `word`

Generate a string containing random single word.

```php
echo $faker->word();

// 'molestiae', 'occaecati', 'distinctio'
```

#### # `words`

Generate an array containing a specified amount of random words.

Optionally, a second boolean parameter can be supplied. When true, a string will be returned instead of an array.

```php
echo $faker->words();

// ['praesentium', 'possimus', 'modi']

echo $faker->words(5);

// ['molestias', 'repellendus', 'qui', 'temporibus', 'ut']

echo $faker->words(3, true);

// 'placeat vero saepe'
```

#### # `sentence`

Generate a sentence containing a given amount of words. By default, `6` words is used.

Optionally, a second boolean parameter can be supplied. When `false`, only sentences with the given amount of words will
be generated. By default, `sentence` will deviate from the given amount by +/- 40%.

```php
echo $faker->sentence();

// 'Sit vitae voluptas sint non voluptates.'

echo $faker->sentence(3);

// 'Laboriosam non voluptas.'
```

```php
sentences($nb = 3, $asText = false);              // ['Optio quos qui illo error.', 'Laborum vero a officia id corporis.', 'Saepe provident esse hic eligendi.']
paragraph($nbSentences = 3, $variableNbSentences = true); // 'Ut ab voluptas sed a nam. Sint autem inventore aut officia aut aut blanditiis. Ducimus eos odit amet et est ut eum.'
paragraphs($nb = 3, $asText = false);             // ['Quidem ut sunt et quidem est accusamus aut. Fuga est placeat rerum ut. Enim ex eveniet facere sunt.', 'Aut nam et eum architecto fugit repellendus illo. Qui ex esse veritatis.', 'Possimus omnis aut incidunt sunt. Asperiores incidunt iure sequi cum culpa rem. Rerum exercitationem est rem.']
text($maxNbChars = 200)                          // 'Fuga totam reiciendis qui architecto fugiat nemo. Consequatur recusandae qui cupiditate eos quod.'
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

### `Faker\Provider\DateTime`

```php
unixTime($max = 'now')                // 58781813
dateTime($max = 'now', $timezone = null) // DateTime('2008-04-25 08:37:17', 'UTC')
dateTimeAD($max = 'now', $timezone = null) // DateTime('1800-04-29 20:38:49', 'Europe/Paris')
iso8601($max = 'now')                 // '1978-12-09T10:10:29+0000'
date($format = 'Y-m-d', $max = 'now') // '1979-06-09'
time($format = 'H:i:s', $max = 'now') // '20:49:42'
dateTimeBetween($startDate = '-30 years', $endDate = 'now', $timezone = null) // DateTime('2003-03-15 02:00:49', 'Africa/Lagos')
dateTimeInInterval($startDate = '-30 years', $interval = '+ 5 days', $timezone = null) // DateTime('2003-03-15 02:00:49', 'Antartica/Vostok')
dateTimeThisCentury($max = 'now', $timezone = null)     // DateTime('1915-05-30 19:28:21', 'UTC')
dateTimeThisDecade($max = 'now', $timezone = null)      // DateTime('2007-05-29 22:30:48', 'Europe/Paris')
dateTimeThisYear($max = 'now', $timezone = null)        // DateTime('2011-02-27 20:52:14', 'Africa/Lagos')
dateTimeThisMonth($max = 'now', $timezone = null)       // DateTime('2011-10-23 13:46:23', 'Antarctica/Vostok')
amPm($max = 'now')                    // 'pm'
dayOfMonth($max = 'now')              // '04'
dayOfWeek($max = 'now')               // 'Friday'
month($max = 'now')                   // '06'
monthName($max = 'now')               // 'January'
year($max = 'now')                    // '1993'
century                               // 'VI'
timezone                              // 'Europe/Paris'
```

Methods accepting a `$timezone` argument default to `date_default_timezone_get()`. You can pass a custom timezone string
to each method, or define a custom timezone for all time methods at once using `$faker::setDefaultTimezone($timezone)`.

### `Faker\Provider\Internet`

```php
email                   // 'tkshlerin@collins.com'
safeEmail               // 'king.alford@example.org'
freeEmail               // 'bradley72@gmail.com'
companyEmail            // 'russel.durward@mcdermott.org'
freeEmailDomain         // 'yahoo.com'
safeEmailDomain         // 'example.org'
userName                // 'wade55'
password                // 'k&|X+a45*2['
domainName              // 'wolffdeckow.net'
domainWord              // 'feeney'
tld                     // 'biz'
url                     // 'http://www.skilesdonnelly.biz/aut-accusantium-ut-architecto-sit-et.html'
slug                    // 'aut-repellat-commodi-vel-itaque-nihil-id-saepe-nostrum'
ipv4                    // '109.133.32.252'
localIpv4               // '10.242.58.8'
ipv6                    // '8e65:933d:22ee:a232:f1c1:2741:1f10:117c'
macAddress              // '43:85:B7:08:10:CA'
```

### `Faker\Provider\UserAgent`

```php
userAgent              // 'Mozilla/5.0 (Windows CE) AppleWebKit/5350 (KHTML, like Gecko) Chrome/13.0.888.0 Safari/5350'
chrome                 // 'Mozilla/5.0 (Macintosh; PPC Mac OS X 10_6_5) AppleWebKit/5312 (KHTML, like Gecko) Chrome/14.0.894.0 Safari/5312'
firefox                // 'Mozilla/5.0 (X11; Linuxi686; rv:7.0) Gecko/20101231 Firefox/3.6'
safari                 // 'Mozilla/5.0 (Macintosh; U; PPC Mac OS X 10_7_1 rv:3.0; en-US) AppleWebKit/534.11.3 (KHTML, like Gecko) Version/4.0 Safari/534.11.3'
opera                  // 'Opera/8.25 (Windows NT 5.1; en-US) Presto/2.9.188 Version/10.00'
internetExplorer       // 'Mozilla/5.0 (compatible; MSIE 7.0; Windows 98; Win 9x 4.90; Trident/3.0)'
```

### `Faker\Provider\Payment`

```php
creditCardType          // 'MasterCard'
creditCardNumber        // '4485480221084675'
creditCardExpirationDate // 04/13
creditCardExpirationDateString // '04/13'
creditCardDetails       // ['MasterCard', '4485480221084675', 'Aleksander Nowak', '04/13']
// Generates a random IBAN. Set $countryCode to null for a random country
iban($countryCode)      // 'IT31A8497112740YZ575DJ28BP4'
swiftBicNumber          // 'RZTIAT22263'
```

### `Faker\Provider\Color`

```php
hexcolor               // '#fa3cc2'
rgbcolor               // '0,255,122'
rgbColorAsArray        // [0, 255, 122]
rgbCssColor            // 'rgb(0, 255, 122)'
safeColorName          // 'fuchsia'
colorName              // 'Gainsbor'
hslColor               // '340,50,20'
hslColorAsArray        // [340, 50, 20]
```

### `Faker\Provider\File`

```php
fileExtension          // 'avi'
mimeType               // 'video/x-msvideo'
// Copy a random file from the source to the target directory and returns the fullpath or filename
file($sourceDir = '/tmp', $targetDir = '/tmp') // '/path/to/targetDir/13b73edae8443990be1aa8f1a483bc27.jpg'
file($sourceDir, $targetDir, false) // '13b73edae8443990be1aa8f1a483bc27.jpg'
```

### `Faker\Provider\Image`

```php
// Image generation provided by Placeholder (https://placeholder.com/)
imageUrl($width = 640, $height = 480) // 'https://via.placeholder.com/640x480.png/000044?text=inventore'
imageUrl($width, $height, 'cats')     // 'https://via.placeholder.com/640x480.png/0022ff?text=cats+quia'
imageUrl($width, $height, 'cats', true, 'Faker') // 'https://via.placeholder.com/640x480.png/00ddcc?text=cats+Faker+labore'
imageUrl($width, $height, 'cats', true, 'Faker', true) // 'https://via.placeholder.com/640x480.png/CCCCCC?text=cats+Faker+sit' Monochrome image
image($dir = '/tmp', $width = 640, $height = 480) // '/tmp/13b73edae8443990be1aa8f1a483bc27.jpg'
image($dir, $width, $height, 'cats')  // 'tmp/13b73edae8443990be1aa8f1a483bc27.jpg' it's a cat!
image($dir, $width, $height, 'cats', false) // '13b73edae8443990be1aa8f1a483bc27.jpg' it's a filename without path
image($dir, $width, $height, 'cats', true, false) // it's a no randomize images (default: `true`)
image($dir, $width, $height, 'cats', true, true, 'Faker') // 'tmp/13b73edae8443990be1aa8f1a483bc27.jpg' it's a cat with 'Faker' text. Default, `null`.
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
