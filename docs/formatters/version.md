# Version

## `semver`

Generate a random [semantic version v2.0.0](https://semver.org/spec/v2.0.0.html) string.

Optionally, the parameters `$preRelease` and `$build` can be set to `true` to randomly include pre-release and/or build
parts into the version.

Examples:

```php
echo $faker->semver();

// 0.0.1, 1.0.0, 9.99.99

echo $faker->semver(true, true);

// 0.0.1-beta, 1.0.0-rc.1, 1.5.9+276e88b, 5.6.2-alpha.2+20180419085616
```
