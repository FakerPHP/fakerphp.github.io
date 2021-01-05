# Japanese (Japan)

### `Faker\Provider\ja_JP\Person`

```php
// Generates a 'kana' name
echo $faker->kanaName($gender = null|'male'|'female'); // "アオタ ミノル"

// Generates a 'kana' first name
echo $faker->firstKanaName($gender = null|'male'|'female'); // "ヒデキ"

// Generates a 'kana' first name on the male
echo $faker->firstKanaNameMale(); // "ヒデキ"

// Generates a 'kana' first name on the female
echo $faker->firstKanaNameFemale(); // "マアヤ"

// Generates a 'kana' last name
echo $faker->lastKanaName(); // "ナカジマ"
```
