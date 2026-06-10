# Georgian (Georgia)

### `Faker\Provider\ka_GE\Payment`

```php
// Generates a random bank account number
echo $faker->bankAccountNumber(); // "GE33ZV9773853617253389"
```
require_once 'vendor/autoload.php';

// use the factory to create a Faker\Generator instance
$faker = Faker\Factory::create();
// generate data by calling methods
echo $faker->name();
// 'Vince Sporer'
echo $faker->email();
// 'walter.sophia@hotmail.com'
echo $faker->text();
// 'Numquam ut mollitia at consequuntur inventore dolorem.'
Each call to $faker->name() yields a different (random) result. This is because Faker uses __call() magic, and forwards Faker\Generator->$method() calls to Faker\Generator->format($method, $attributes).

for ($i = 0; $i < 3; $i++) {
    echo $faker->name() . "\n";
}

// 'Cyrus Boyle'
// 'Alena Cummerata'
// 'Orlo Bergstrom'
