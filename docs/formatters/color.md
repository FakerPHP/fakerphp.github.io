# Color

## `hexColor`

Generate a random hex color.

```php
$faker->hexColor();

// '#ccd578', '#fafa11', '#ea3781'
```

## `safeHexColor`

Generate a random hex color, containing only 16 values per R, G and B.

```php
$faker->safeHexColor();

// '#00eecc', '#00ff88', '#00aaee'
```

## `rgbColorAsArray`

Generate a random RGB color, as an `array`.

```php
$faker->rgbColorAsArray();

// [0 => 30, 1 => 22, 2 => 177], [0 => 150, 1 => 55, 2 => 34], [0 => 219, 1 => 253, 2 => 248]
```

## `rgbColor`

Generate a comma-separated RGB color `string`.

```php
$faker->rgbColor();

// '105,224,78', '97,249,98', '24,250,221'
```

## `rgbCssColor`

Generate a CSS-friendly RGB color `string`.

```php
$faker->rgbCssColor();

// 'rgb(9,110,101)', 'rgb(242,133,147)', 'rgb(124,64,0)'
```

## `rgbaCssColor`

Generate a CSS-friendly RGBA (alpha channel) color `string`.

```php
$faker->rgbaCssColor();

// 'rgba(179,65,209,1)', 'rgba(121,53,231,0.4)', 'rgba(161,239,152,0.9)'
```

## `safeColorName`

Generate a CSS-friendly color name.

```php
$faker->safeColorName();

// 'white', 'fuchsia', 'purple'
```

## `colorName`

Generate a CSS-friendly color name.

```php
$faker->colorName();

// 'SeaGreen', 'Crimson', 'DarkOliveGreen'
```

## `hslColor`

Generate a random HSL color `string`.

```php
$faker->hslColor();

// '87,10,25', '94,24,27', '207,68,84'
```

## `hslColorAsArray`

Generate a random HSL color, as an `array`.

```php
$faker->hslColorAsArray();

// [0 => 311, 1 => 84, 2 => 31], [0 => 283, 1 => 85, 2 => 49], [0 => 57, 1 => 48, 2 => 36]
```
