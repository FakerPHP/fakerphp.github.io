# Image

## `imageUrl`

Get a random image URL from [placeholder.com](https://placeholder.com).

To provide a less verbose explanation of this function, we'll use a function definition here:

```php
function imageUrl(
    int $width = 640,
    int $height = 480,
    ?string $category = null, /* used as text on the image */
    bool $randomize = true,
    ?string $word = null,
    bool $gray = false,
    string $format = 'png'
): string;
```

Below, a few examples of possible parameter combinations:

```php
echo $faker->imageUrl(640, 480, 'animals', true);

// 'https://via.placeholder.com/640x480.png/004466?text=animals+omnis'

echo $faker->imageUrl(360, 360, 'animals', true, 'cats');

// 'https://via.placeholder.com/360x360.png/00bbcc?text=animals+cats+vero'

echo $faker->imageUrl(360, 360, 'animals', true, 'dogs', true);

// https://via.placeholder.com/360x360.png/CCCCCC?text=animals+dogs+veniam

echo $faker->imageUrl(360, 360, 'animals', true, 'dogs', true, 'jpg');

// https://via.placeholder.com/360x360.jpg/CCCCCC?text=animals+dogs+veniam
```

## `image`

Get a random `image` from [placeholder.com](https://placeholder.com) and download it to a directory (`$dir`). The full
path of the image is returned as a `string`.

All the parameters are the same as `imageUrl`. Except an extra first parameter, this defines where the
image should be stored.

```php
function image(
    ?string $dir = null,
    int $width = 640,
    int $height = 480,
    ?string $category = null,
    bool $fullPath = true,
    bool $randomize = true,
    ?string $word = null,
    bool $gray = false,
    string $format = 'png'
)
```

Below, a few examples of possible parameter combinations:

```php
echo $faker->image(null, 640, 480);

// '/tmp/309fd63646f6d781848850277c14aef2.png'

echo $faker->image(null, 360, 360, 'animals', true);

// '/tmp/4d2666e5968e10350428e3ed64de9175.png'

echo $faker->image(null, 360, 360, 'animals', true, true, 'cats', true);

// '/tmp/9444227f06f0b024a14688ef3b31fe7a.png'

echo $faker->image(null, 360, 360, 'animals', true, true, 'cats', true, 'jpg');

// '/tmp/9444227f06f0b024a14688ef3b31fe7a.jpg'
```
