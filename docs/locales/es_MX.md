# Spanish (Mexico)

### `Faker\Provider\es_MX\Person`

```php
// Generates a random Registro Federal de Contribuyentes (RFC)
echo $faker->rfc(); // 'DAJI111017'

// Generates a random Registro Federal de Contribuyentes (RFC) with Homoclave
echo $faker->rfc(true); // OIIJ321019802

// Generates a random Clave Única de Registro de Población (CURP)
echo $faker->curp(); // OALI920621HDFRBR00
```

### `Faker\Provider\es_MX\Address`

```php
// Returns a random municipality (Municipio)
echo $faker->municipality(); // Coyoacán
```
