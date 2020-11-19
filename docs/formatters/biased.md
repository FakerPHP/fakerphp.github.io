# Biased

## `biasedNumberBetween`

Generate a random `integer`, with a bias using a given function.

```php
function biasedNumberBetween(
    int $min = 0, 
    int $max = 100, 
    string $function = 'sqrt'
): int;
```

Examples:

```php
echo $faker->biasedNumberBetween(0, 20);

// 14, 18, 12

echo $faker->biasedNumberBetween(0, 20, 'log');

// 9, 4, 12
```
