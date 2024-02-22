# Chinese (Traditional, Taiwan)

### `Faker\Provider\zh_TW\Person`

```php
// Generates a random personal identify number
echo $faker->personalIdentityNumber(); // A223456789
```

### `Faker\Provider\zh_TW\Company`

```php
// Generates a random VAT / Company Tax number
echo $faker->VAT(); //23456789
```

### `Faker\Provider\zh_TW\Address`

```php
// Generates city / country
echo $faker->county(); // 新北市

// Generates dist of county
$county = $faker->county(); // 新北市
echo $faker->distOf($county); // 板橋區

// Generate random dist
echo $faker->dist(); // 萬華區
```

### `Faker\Provider\zh_TW\PhoneNumber`

```php
// Generates mobile
echo $faker->cellPhoneNumber(); // 0912345678
echo $faker->cellPhoneNumber(true); // 0912-345-678

echo $faker->intlCellPhoneNumber(); // +886912345678
echo $faker->intlCellPhoneNumber(true); // +886-912-345-678

// Generates local number
echo $faker->localPhoneNumber(); // (02)25555555
echo $faker->localPhoneNumber(true); // (02)2555-5555
```
