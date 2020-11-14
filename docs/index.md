# Faker

[![Monthly Downloads](https://poser.pugx.org/fakerphp/faker/d/monthly.png)](https://packagist.org/packages/fakerphp/faker)
[![Continuous Integration](https://github.com/FakerPHP/Faker/workflows/Continuous%20Integration/badge.svg?branch=main)](https://github.com/FakerPHP/Faker/actions)
[![StyleCI](https://github.styleci.io/repos/307658860/shield?branch=main&style=plastic)](https://github.styleci.io/repos/307658860?branch=main)

Faker is a PHP library that generates fake data for you. Whether you need to bootstrap your database, create good-looking XML documents, fill-in your persistence to stress test it, or anonymize data taken from a production service, Faker is for you.

Faker is heavily inspired by Perl's [Data::Faker](http://search.cpan.org/~jasonk/Data-Faker-0.07/), and by ruby's [Faker](https://rubygems.org/gems/faker).

Faker requires PHP >= 7.1.

## Installation

```shell
composer require fakerphp/faker
```

## Basic Usage

### Autoloading

Faker supports both `PSR-0` as `PSR-4` autoloaders.
```php
<?php
# When installed via composer
require_once 'vendor/autoload.php';
```

You can also load `Fakers` shipped `PSR-0` autoloader
```php
<?php
# Load Fakers own autoloader
require_once '/path/to/Faker/src/autoload.php';
```

*alternatively, you can use any another PSR-4 compliant autoloader*

### Create fake data
Use `Faker\Factory::create()` to create and initialize a faker generator, which can generate data by accessing properties named after the type of data you want.

```php
<?php
// use the factory to create a Faker\Generator instance
$faker = Faker\Factory::create();

// generate data by accessing properties
echo $faker->name;
  // 'Lucy Cechtelar';
echo $faker->address;
  // "426 Jordy Lodge
  // Cartwrightshire, SC 88120-6700"
echo $faker->text;
  // Dolores sit sint laboriosam dolorem culpa et autem. Beatae nam sunt fugit
  // et sit et mollitia sed.
  // Fuga deserunt tempora facere magni omnis. Omnis quia temporibus laudantium
  // sit minima sint.
```

Even if this example shows a property access, each call to `$faker->name` yields a different (random) result. This is because Faker uses `__get()` magic, and forwards `Faker\Generator->$property` calls to `Faker\Generator->format($property)`.

```php
<?php
for ($i = 0; $i < 10; $i++) {
  echo $faker->name, "\n";
}
  // Adaline Reichel
  // Dr. Santa Prosacco DVM
  // Noemy Vandervort V
  // Lexi O'Conner
  // Gracie Weber
  // Roscoe Johns
  // Emmett Lebsack
  // Keegan Thiel
  // Wellington Koelpin II
  // Ms. Karley Kiehn V
```

**Tip**: For a quick generation of fake data, you can also use Faker as a command line tool thanks to [faker-cli](https://github.com/bit3/faker-cli).

## Formatters

Each of the generator properties (like `name`, `address`, and `lorem`) are called "formatters". A faker generator has many of them, packaged in "providers". Here is a list of the bundled formatters in the default locale.

### `Faker\Provider\Base`

    randomDigit             // 7
    randomDigitNot(5)       // 0, 1, 2, 3, 4, 6, 7, 8, or 9
    randomDigitNotNull      // 5
    randomNumber($nbDigits = NULL, $strict = false) // 79907610
    randomFloat($nbMaxDecimals = NULL, $min = 0, $max = NULL) // 48.8932
    numberBetween($min = 1000, $max = 9000) // 8567
    randomLetter            // 'b'
    // returns randomly ordered subsequence of a provided array
    randomElements($array = array ('a','b','c'), $count = 1) // array('c')
    randomElement($array = array ('a','b','c')) // 'b'
    shuffle('hello, world') // 'rlo,h eoldlw'
    shuffle(array(1, 2, 3)) // array(2, 1, 3)
    numerify('Hello ###') // 'Hello 609'
    lexify('Hello ???') // 'Hello wgt'
    bothify('Hello ##??') // 'Hello 42jz'
    asciify('Hello ***') // 'Hello R6+'
    regexify('[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}'); // sm0@y8k96a.ej

### `Faker\Provider\Lorem`

    word                                             // 'aut'
    words($nb = 3, $asText = false)                  // array('porro', 'sed', 'magni')
    sentence($nbWords = 6, $variableNbWords = true)  // 'Sit vitae voluptas sint non voluptates.'
    sentences($nb = 3, $asText = false)              // array('Optio quos qui illo error.', 'Laborum vero a officia id corporis.', 'Saepe provident esse hic eligendi.')
    paragraph($nbSentences = 3, $variableNbSentences = true) // 'Ut ab voluptas sed a nam. Sint autem inventore aut officia aut aut blanditiis. Ducimus eos odit amet et est ut eum.'
    paragraphs($nb = 3, $asText = false)             // array('Quidem ut sunt et quidem est accusamus aut. Fuga est placeat rerum ut. Enim ex eveniet facere sunt.', 'Aut nam et eum architecto fugit repellendus illo. Qui ex esse veritatis.', 'Possimus omnis aut incidunt sunt. Asperiores incidunt iure sequi cum culpa rem. Rerum exercitationem est rem.')
    text($maxNbChars = 200)                          // 'Fuga totam reiciendis qui architecto fugiat nemo. Consequatur recusandae qui cupiditate eos quod.'

### `Faker\Provider\en_US\Person`

    title($gender = null|'male'|'female')     // 'Ms.'
    titleMale                                 // 'Mr.'
    titleFemale                               // 'Ms.'
    suffix                                    // 'Jr.'
    name($gender = null|'male'|'female')      // 'Dr. Zane Stroman'
    firstName($gender = null|'male'|'female') // 'Maynard'
    firstNameMale                             // 'Maynard'
    firstNameFemale                           // 'Rachel'
    lastName                                  // 'Zulauf'

### `Faker\Provider\en_US\Address`

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

### `Faker\Provider\en_US\PhoneNumber`

    phoneNumber             // '201-886-0269 x3767'
    tollFreePhoneNumber     // '(888) 937-7238'
    e164PhoneNumber     // '+27113456789'

### `Faker\Provider\en_US\Company`

    catchPhrase             // 'Monitored regional contingency'
    bs                      // 'e-enable robust architectures'
    company                 // 'Bogan-Treutel'
    companySuffix           // 'and Sons'
    jobTitle                // 'Cashier'

### `Faker\Provider\en_US\Text`

    realText($maxNbChars = 200, $indexSize = 2) // "And yet I wish you could manage it?) 'And what are they made of?' Alice asked in a shrill, passionate voice. 'Would YOU like cats if you were never even spoke to Time!' 'Perhaps not,' Alice replied."

### `Faker\Provider\DateTime`

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

Methods accepting a `$timezone` argument default to `date_default_timezone_get()`. You can pass a custom timezone string to each method, or define a custom timezone for all time methods at once using `$faker::setDefaultTimezone($timezone)`.

### `Faker\Provider\Internet`

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

### `Faker\Provider\UserAgent`

    userAgent              // 'Mozilla/5.0 (Windows CE) AppleWebKit/5350 (KHTML, like Gecko) Chrome/13.0.888.0 Safari/5350'
    chrome                 // 'Mozilla/5.0 (Macintosh; PPC Mac OS X 10_6_5) AppleWebKit/5312 (KHTML, like Gecko) Chrome/14.0.894.0 Safari/5312'
    firefox                // 'Mozilla/5.0 (X11; Linuxi686; rv:7.0) Gecko/20101231 Firefox/3.6'
    safari                 // 'Mozilla/5.0 (Macintosh; U; PPC Mac OS X 10_7_1 rv:3.0; en-US) AppleWebKit/534.11.3 (KHTML, like Gecko) Version/4.0 Safari/534.11.3'
    opera                  // 'Opera/8.25 (Windows NT 5.1; en-US) Presto/2.9.188 Version/10.00'
    internetExplorer       // 'Mozilla/5.0 (compatible; MSIE 7.0; Windows 98; Win 9x 4.90; Trident/3.0)'

### `Faker\Provider\Payment`

    creditCardType          // 'MasterCard'
    creditCardNumber        // '4485480221084675'
    creditCardExpirationDate // 04/13
    creditCardExpirationDateString // '04/13'
    creditCardDetails       // array('MasterCard', '4485480221084675', 'Aleksander Nowak', '04/13')
    // Generates a random IBAN. Set $countryCode to null for a random country
    iban($countryCode)      // 'IT31A8497112740YZ575DJ28BP4'
    swiftBicNumber          // 'RZTIAT22263'

### `Faker\Provider\Color`

    hexcolor               // '#fa3cc2'
    rgbcolor               // '0,255,122'
    rgbColorAsArray        // array(0,255,122)
    rgbCssColor            // 'rgb(0,255,122)'
    safeColorName          // 'fuchsia'
    colorName              // 'Gainsbor'
    hslColor               // '340,50,20'
    hslColorAsArray        // array(340,50,20)

### `Faker\Provider\File`

    fileExtension          // 'avi'
    mimeType               // 'video/x-msvideo'
    // Copy a random file from the source to the target directory and returns the fullpath or filename
    file($sourceDir = '/tmp', $targetDir = '/tmp') // '/path/to/targetDir/13b73edae8443990be1aa8f1a483bc27.jpg'
    file($sourceDir, $targetDir, false) // '13b73edae8443990be1aa8f1a483bc27.jpg'

### `Faker\Provider\Image`

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


### `Faker\Provider\Uuid`

    uuid                   // '7e57d004-2b97-0e7a-b45f-5387367791cd'

### `Faker\Provider\Barcode`

    ean13          // '4006381333931'
    ean8           // '73513537'
    isbn13         // '9790404436093'
    isbn10         // '4881416324'

### `Faker\Provider\Miscellaneous`

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

### `Faker\Provider\Biased`

    // get a random number between 10 and 20,
    // with more chances to be close to 20
    biasedNumberBetween($min = 10, $max = 20, $function = 'sqrt')

### `Faker\Provider\HtmlLorem`

    //Generate HTML document which is no more than 2 levels deep, and no more than 3 elements wide at any level.
    randomHtml(2,3)   // <html><head><title>Aut illo dolorem et accusantium eum.</title></head><body><form action="example.com" method="POST"><label for="username">sequi</label><input type="text" id="username"><label for="password">et</label><input type="password" id="password"></form><b>Id aut saepe non mollitia voluptas voluptas.</b><table><thead><tr><tr>Non consequatur.</tr><tr>Incidunt est.</tr><tr>Aut voluptatem.</tr><tr>Officia voluptas rerum quo.</tr><tr>Asperiores similique.</tr></tr></thead><tbody><tr><td>Sapiente dolorum dolorem sint laboriosam commodi qui.</td><td>Commodi nihil nesciunt eveniet quo repudiandae.</td><td>Voluptates explicabo numquam distinctio necessitatibus repellat.</td><td>Provident ut doloremque nam eum modi aspernatur.</td><td>Iusto inventore.</td></tr><tr><td>Animi nihil ratione id mollitia libero ipsa quia tempore.</td><td>Velit est officia et aut tenetur dolorem sed mollitia expedita.</td><td>Modi modi repudiandae pariatur voluptas rerum ea incidunt non molestiae eligendi eos deleniti.</td><td>Exercitationem voluptatibus dolor est iste quod molestiae.</td><td>Quia reiciendis.</td></tr><tr><td>Inventore impedit exercitationem voluptatibus rerum cupiditate.</td><td>Qui.</td><td>Aliquam.</td><td>Autem nihil aut et.</td><td>Dolor ut quia error.</td></tr><tr><td>Enim facilis iusto earum et minus rerum assumenda quis quia.</td><td>Reprehenderit ut sapiente occaecati voluptatum dolor voluptatem vitae qui velit.</td><td>Quod fugiat non.</td><td>Sunt nobis totam mollitia sed nesciunt est deleniti cumque.</td><td>Repudiandae quo.</td></tr><tr><td>Modi dicta libero quisquam doloremque qui autem.</td><td>Voluptatem aliquid saepe laudantium facere eos sunt dolor.</td><td>Est eos quis laboriosam officia expedita repellendus quia natus.</td><td>Et neque delectus quod fugit enim repudiandae qui.</td><td>Fugit soluta sit facilis facere repellat culpa magni voluptatem maiores tempora.</td></tr><tr><td>Enim dolores doloremque.</td><td>Assumenda voluptatem eum perferendis exercitationem.</td><td>Quasi in fugit deserunt ea perferendis sunt nemo consequatur dolorum soluta.</td><td>Maxime repellat qui numquam voluptatem est modi.</td><td>Alias rerum rerum hic hic eveniet.</td></tr><tr><td>Tempore voluptatem.</td><td>Eaque.</td><td>Et sit quas fugit iusto.</td><td>Nemo nihil rerum dignissimos et esse.</td><td>Repudiandae ipsum numquam.</td></tr><tr><td>Nemo sunt quia.</td><td>Sint tempore est neque ducimus harum sed.</td><td>Dicta placeat atque libero nihil.</td><td>Et qui aperiam temporibus facilis eum.</td><td>Ut dolores qui enim et maiores nesciunt.</td></tr><tr><td>Dolorum totam sint debitis saepe laborum.</td><td>Quidem corrupti ea.</td><td>Cum voluptas quod.</td><td>Possimus consequatur quasi dolorem ut et.</td><td>Et velit non hic labore repudiandae quis.</td></tr></tbody></table></body></html>

## Modifiers

Faker provides three special providers, `unique()`, `optional()`, and `valid()`, to be called before any provider.

```php
// unique() forces providers to return unique values
$values = array();
for ($i = 0; $i < 10; $i++) {
  // get a random digit, but always a new one, to avoid duplicates
  $values []= $faker->unique()->randomDigit;
}
print_r($values); // [4, 1, 8, 5, 0, 2, 6, 9, 7, 3]

// providers with a limited range will throw an exception when no new unique value can be generated
$values = array();
try {
  for ($i = 0; $i < 10; $i++) {
    $values []= $faker->unique()->randomDigitNotNull;
  }
} catch (\OverflowException $e) {
  echo "There are only 9 unique digits not null, Faker can't generate 10 of them!";
}

// you can reset the unique modifier for all providers by passing true as first argument
$faker->unique($reset = true)->randomDigitNotNull; // will not throw OverflowException since unique() was reset
// tip: unique() keeps one array of values per provider

// optional() sometimes bypasses the provider to return a default value instead (which defaults to NULL)
$values = array();
for ($i = 0; $i < 10; $i++) {
  // get a random digit, but also null sometimes
  $values []= $faker->optional()->randomDigit;
}
print_r($values); // [1, 4, null, 9, 5, null, null, 4, 6, null]

// optional() accepts a weight argument to specify the probability of receiving the default value.
// 0 will always return the default value; 1 will always return the provider. Default weight is 0.5 (50% chance).
$faker->optional($weight = 0.1)->randomDigit; // 90% chance of NULL
$faker->optional($weight = 0.9)->randomDigit; // 10% chance of NULL

// optional() accepts a default argument to specify the default value to return.
// Defaults to NULL.
$faker->optional($weight = 0.5, $default = false)->randomDigit; // 50% chance of FALSE
$faker->optional($weight = 0.9, $default = 'abc')->word; // 10% chance of 'abc'

// valid() only accepts valid values according to the passed validator functions
$values = array();
$evenValidator = function($digit) {
	return $digit % 2 === 0;
};
for ($i = 0; $i < 10; $i++) {
	$values []= $faker->valid($evenValidator)->randomDigit;
}
print_r($values); // [0, 4, 8, 4, 2, 6, 0, 8, 8, 6]

// just like unique(), valid() throws an overflow exception when it can't generate a valid value
$values = array();
try {
  $faker->valid($evenValidator)->randomElement([1, 3, 5, 7, 9]);
} catch (\OverflowException $e) {
  echo "Can't pick an even number in that set!";
}
```

If you would like to use a modifier with a value not generated by Faker, use the `passthrough()` method. `passthrough()` simply returns whatever value it was given.

```php
$faker->optional()->passthrough(mt_rand(5, 15));
```

## Localization

`Faker\Factory` can take a locale as an argument, to return localized data. If no localized provider is found, the factory fallbacks to the default locale (en_US).

```php
<?php
$faker = Faker\Factory::create('fr_FR'); // create a French faker
for ($i = 0; $i < 10; $i++) {
  echo $faker->name, "\n";
}
  // Luce du Coulon
  // Auguste Dupont
  // Roger Le Voisin
  // Alexandre Lacroix
  // Jacques Humbert-Roy
  // Thérèse Guillet-Andre
  // Gilles Gros-Bodin
  // Amélie Pires
  // Marcel Laporte
  // Geneviève Marchal
```

You can check available Faker locales in the source code, [under the `Provider` directory](https://github.com/FakerPHP/Faker/tree/1.10/src/Faker/Provider). The localization of Faker is an ongoing process, for which we need your help. Don't hesitate to create localized providers to your own locale and submit a PR!

## Populating Entities Using an ORM or an ODM

Faker provides adapters for Object-Relational and Object-Document Mappers (currently, [Propel](http://www.propelorm.org), [Doctrine2](http://docs.doctrine-project.org/projects/doctrine-orm/en/latest/), [CakePHP](http://cakephp.org), [Spot2](https://github.com/vlucas/spot2), [Mandango](https://github.com/mandango/mandango) and [Eloquent](https://laravel.com/docs/master/eloquent) are supported). These adapters ease the population of databases through the Entity classes provided by an ORM library (or the population of document stores using Document classes provided by an ODM library).

To populate entities, create a new populator class (using a generator instance as parameter), then list the class and number of all the entities that must be generated. To launch the actual data population, call the `execute()` method.

Note that some of the `populators` could require additional parameters. As example the `doctrine` populator has an option to specify
its batchSize on how often it will flush the UnitOfWork to the database.

Here is an example showing how to populate 5 `Author` and 10 `Book` objects:

```php
<?php
$generator = \Faker\Factory::create();
$populator = new \Faker\ORM\Propel\Populator($generator);
$populator->addEntity('Author', 5);
$populator->addEntity('Book', 10);
$insertedPKs = $populator->execute();
```

The populator uses name and column type guessers to populate each column with relevant data. For instance, Faker populates a column named `first_name` using the `firstName` formatter, and a column with a `TIMESTAMP` type using the `dateTime` formatter. The resulting entities are therefore coherent. If Faker misinterprets a column name, you can still specify a custom closure to be used for populating a particular column, using the third argument to `addEntity()`:

```php
<?php
$populator->addEntity('Book', 5, array(
  'ISBN' => function() use ($generator) { return $generator->ean13(); }
));
```

In this example, Faker will guess a formatter for all columns except `ISBN`, for which the given anonymous function will be used.

**Tip**: To ignore some columns, specify `null` for the column names in the third argument of `addEntity()`. This is usually necessary for columns added by a behavior:

```php
<?php
$populator->addEntity('Book', 5, array(
  'CreatedAt' => null,
  'UpdatedAt' => null,
));
```

Of course, Faker does not populate autoincremented primary keys. In addition, `Faker\ORM\Propel\Populator::execute()` returns the list of inserted PKs, indexed by class:

```php
<?php
print_r($insertedPKs);
// array(
//   'Author' => (34, 35, 36, 37, 38),
//   'Book'   => (456, 457, 458, 459, 470, 471, 472, 473, 474, 475)
// )
```

**Note:** Due to the fact that `Faker` returns all the primary keys inserted, the memory consumption will go up drastically when you do batch inserts due to the big list of data.

In the previous example, the `Book` and `Author` models share a relationship. Since `Author` entities are populated first, Faker is smart enough to relate the populated `Book` entities to one of the populated `Author` entities.

Lastly, if you want to execute an arbitrary function on an entity before insertion, use the fourth argument of the `addEntity()` method:

```php
<?php
$populator->addEntity('Book', 5, array(), array(
  function($book) { $book->publish(); },
));
```

## Seeding the Generator

You may want to get always the same generated data - for instance when using Faker for unit testing purposes. The generator offers a `seed()` method, which seeds the random number generator. Calling the same script twice with the same seed produces the same results.

```php
<?php
$faker = Faker\Factory::create();
$faker->seed(1234);

echo $faker->name; // 'Jess Mraz I';
```

> **Tip**: DateTime formatters won't reproduce the same fake data if you don't fix the `$max` value:
>
> ```php
> <?php
> // even when seeded, this line will return different results because $max varies
> $faker->dateTime(); // equivalent to $faker->dateTime($max = 'now')
> // make sure you fix the $max parameter
> $faker->dateTime('2014-02-25 08:37:17'); // will return always the same date when seeded
> ```
>
> **Tip**: Formatters won't reproduce the same fake data if you use the `rand()` php function. Use `$faker` or `mt_rand()` instead:
>
> ```php
> <?php
> // bad
> $faker->realText(rand(10,20));
> // good
> $faker->realText($faker->numberBetween(10,20));
> ```



## Faker Internals: Understanding Providers

A `Faker\Generator` alone can't do much generation. It needs `Faker\Provider` objects to delegate the data generation to them. `Faker\Factory::create()` actually creates a `Faker\Generator` bundled with the default providers. Here is what happens under the hood:

```php
<?php
$faker = new Faker\Generator();
$faker->addProvider(new Faker\Provider\en_US\Person($faker));
$faker->addProvider(new Faker\Provider\en_US\Address($faker));
$faker->addProvider(new Faker\Provider\en_US\PhoneNumber($faker));
$faker->addProvider(new Faker\Provider\en_US\Company($faker));
$faker->addProvider(new Faker\Provider\Lorem($faker));
$faker->addProvider(new Faker\Provider\Internet($faker));
````

Whenever you try to access a property on the `$faker` object, the generator looks for a method with the same name in all the providers attached to it. For instance, calling `$faker->name` triggers a call to `Faker\Provider\Person::name()`. And since Faker starts with the last provider, you can easily override existing formatters: just add a provider containing methods named after the formatters you want to override.

That means that you can easily add your own providers to a `Faker\Generator` instance. A provider is usually a class extending `\Faker\Provider\Base`. This parent class allows you to use methods like `lexify()` or `randomNumber()`; it also gives you access to formatters of other providers, through the protected `$generator` property. The new formatters are the public methods of the provider class.

Here is an example provider for populating Book data:

```php
<?php

namespace Faker\Provider;

class Book extends \Faker\Provider\Base
{
  public function title($nbWords = 5)
  {
    $sentence = $this->generator->sentence($nbWords);
    return substr($sentence, 0, strlen($sentence) - 1);
  }

  public function ISBN()
  {
    return $this->generator->ean13();
  }
}
```

To register this provider, just add a new instance of `\Faker\Provider\Book` to an existing generator:

```php
<?php
$faker->addProvider(new \Faker\Provider\Book($faker));
```

Now you can use the two new formatters like any other Faker formatter:

```php
<?php
$book = new Book();
$book->setTitle($faker->title);
$book->setISBN($faker->ISBN);
$book->setSummary($faker->text);
$book->setPrice($faker->randomNumber(2));
```

**Tip**: A provider can also be a Plain Old PHP Object. In that case, all the public methods of the provider become available to the generator.

## Language specific formatters

### Misnamed locales

| Current name | Correct name |
| - | - |
| `at_AT` | `de_AT` |
| `zh_CN` | `zh_Hans_CN` |
| `zh_TW` | `zh_Hant_TW` |

Source: <https://www.localeplanet.com/icu/>

## Third-Party Libraries Extending/Based On Faker

- Symfony bundles:
  - [`willdurand/faker-bundle`](https://github.com/willdurand/BazingaFakerBundle): Put the awesome Faker library into the Symfony2 DIC and populate your database with fake data.
  - [`hautelook/alice-bundle`](https://github.com/hautelook/AliceBundle), [`h4cc/alice-fixtures-bundle`](https://github.com/h4cc/AliceFixturesBundle): Bundles for using [`nelmio/alice`](https://packagist.org/packages/nelmio/alice) and Faker with data fixtures. Able to use Doctrine ORM as well as Doctrine MongoDB ODM.
- [`emanueleminotto/faker-service-provider`](https://github.com/EmanueleMinotto/FakerServiceProvider): Faker Service Provider for Silex
- [`bit3/faker-cli`](https://github.com/bit3/faker-cli): Command Line Tool for the Faker PHP library
- [`league/factory-muffin`](https://github.com/thephpleague/factory-muffin): enable the rapid creation of objects (PHP port of factory-girl)
- [`fzaninotto/company-name-generator`](https://github.com/fzaninotto/CompanyNameGenerator): Generate names for English tech companies with class
- [`emanueleminotto/faker-placehold-it-provider`](https://github.com/EmanueleMinotto/PlaceholdItProvider): Generate images using placehold.it
- [`spyrit/datalea`](https://github.com/spyrit/datalea) A highly customizable random test data generator web app
- [`frequenc1/newage-ipsum`](https://github.com/frequenc1/newage-ipsum): A new aged ipsum provider for the faker library inspired by http://sebpearce.com/bullshit/
- [`prewk/xml-faker`](https://github.com/prewk/xml-faker): Create fake XML with Faker
- [`denheck/faker-context`](https://github.com/denheck/faker-context): Behat context using Faker to generate testdata
- [`swekaj/cron-expression-generator`](https://github.com/swekaj/CronExpressionGenerator): Faker provider for generating random, valid cron expressions.
- [`pragmafabrik/pomm-faker`](https://github.com/pragmafabrik/Pomm2Faker): Faker client for Pomm database framework (PostgreSQL)
- [`nelmio/alice`](https://github.com/nelmio/alice): Fixtures/object generator with a yaml DSL that can use Faker as data generator.
- [`ravage84/cakephp-fake-seeder`](https://github.com/ravage84/cakephp-fake-seeder) A CakePHP 2.x shell to seed your database with fake and/or fixed data.
- [`bheller/images-generator`](https://github.com/bruceheller/images-generator): An image generator provider using GD for placeholder type pictures
- [`pattern-lab/plugin-faker`](https://github.com/pattern-lab/plugin-php-faker): Pattern Lab is a Styleguide, Component Library, and Prototyping tool. This creates unique content each time Pattern Lab is generated.
- [`guidocella/eloquent-populator`](https://github.com/guidocella/eloquent-populator): Adapter for Laravel's Eloquent ORM.
- [`tamperdata/exiges`](https://github.com/tamperdata/exiges): Faker provider for generating random temperatures
- [`jzonta/faker-restaurant`](https://github.com/jzonta/FakerRestaurant): Faker for Food and Beverage names generate
- [`aalaap/faker-youtube`](https://github.com/aalaap/faker-youtube): Faker for YouTube URLs in various formats
- [`pelmered/fake-car`](https://github.com/pelmered/fake-car): Faker for cars and car data
- [`bluemmb/faker-picsum-photos-provider`](https://github.com/bluemmb/Faker-PicsumPhotos): Generate images using [picsum.photos](http://picsum.photos/)
- [`er1z/fakemock`](https://github.com/er1z/fakemock): Generate mocks using class-configuration and detection via Faker's guesser and Symfony asserts
- [`xvladqt/faker-lorem-flickr`](https://github.com/xvladxtremal/Faker-LoremFlickr): Generate images using [loremflickr.com](http://loremflickr.com/)
- [`metrakit/faker-eddy-malou`](https://github.com/Metrakit/faker-eddy-malou): Generate French Eddy Malou sentences & paragraphs
- [`drupol/belgian-national-number-faker`](https://github.com/drupol/belgian-national-number-faker): Generate fake Belgian national numbers
- [`elgentos/masquerade`](https://github.com/elgentos/masquerade): Configuration-based, platform-agnostic, locale-compatible data faker tool (out-of-the-box support for Magento 2)
- [`ottaviano/faker-gravatar`](https://github.com/ottaviano/faker-gravatar): Generate avatars using [Gravatar](https://en.gravatar.com/site/implement/images/)
- [`finwe/phpstan-faker`](https://github.com/finwe/phpstan-faker): PHPStan extension for Faker methods
- [`springbokagency/faker-xpdo-orm-adapter`](https://github.com/SpringbokAgency/faker-xpdo-orm-adapter): A Faker ORM adapter to populate xPDO objects with fake data.

## License

Faker is released under the MIT License. See the bundled LICENSE file for details.
