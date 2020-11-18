# File

## `mimeType`

Generate a random MIME-type `string`.

```php
$faker->mimeType();

// 'application/vnd.ms-artgalry', 'application/mods+xml', 'video/x-sgi-movie'
```

## `fileExtension`

Generate a random file extension type `string`.

```php
$faker->fileExtension();

// 'deb', 'mp4s', 'uvg'
```

## `file`

Copy a random file from the source directory to the target directory and return the filename / relative path.

```php
$faker->file('docs', 'site', true);

// 'site/f6df6c74-2884-35c7-b802-6f96cf2ead01.md', 'site/423cfca4-709c-3942-8d66-34b08affd90b.md', 'site/c7a76943-e2cc-3c99-b75b-ac2df15cb3cf.md'

$faker->file('docs', 'site', false);

// 'c4cdee40-0eee-3172-9bca-bdafbb743c17.md', '88aef77e-040d-39a3-8f88-eca522f759ba.md', 'ecbee0e9-6fad-397b-88fb-d84704c7a71c.md'
```

