# Text and Paragraphs

## `word`

Generate a string containing random single word.

```php
echo $faker->word();

// 'molestiae', 'occaecati', 'distinctio'
```

## `words`

Generate an array containing a specified amount of random words.

Optionally, a second boolean parameter can be supplied. When `true`, a string will be returned instead of an array.

```php
echo $faker->words();

// ['praesentium', 'possimus', 'modi']

echo $faker->words(5);

// ['molestias', 'repellendus', 'qui', 'temporibus', 'ut']

echo $faker->words(3, true);

// 'placeat vero saepe'
```

## `sentence`

Generate a sentence containing a given amount of words. By default, `6` words is used.

Optionally, a second boolean parameter can be supplied. When `false`, only sentences with the given amount of words will
be generated. By default, `sentence` will deviate from the given amount by +/- 40%.

```php
echo $faker->sentence();

// 'Sit vitae voluptas sint non voluptates.'

echo $faker->sentence(3);

// 'Laboriosam non voluptas.'
```

## `sentences`

Generate an array containing a given amount of sentences. By default, `3` sentences are generated.

Optionally, a second boolean parameter can be supplied. When `true`, a string will be returned instead of an array.

```php
echo $faker->sentences();

// ['Optio quos qui illo error.', 'Laborum vero a officia id corporis.', 'Saepe provident esse hic eligendi.']

echo $faker->sentences(2);

// ['Consequatur animi cumque.', 'Quibusdam eveniet ut.']
```

## `paragraph`

Generate a paragraph of text, containing a given amount of sentences. By default, `3` sentences are generated.

Optionally, a second boolean parameter can be supplied. When `false`, only sentences with the given amount of words will
be generated. By default, sentences will deviate from the default word length of 6 by +/- 40%.

```php
echo $faker->paragraph();

// 'Similique molestias exercitationem officia aut. Itaque doloribus et rerum voluptate iure. Unde veniam magni dignissimos expedita eius.'

echo $faker->paragraph(2);

// 'Consequatur velit incidunt ipsam eius beatae. Est omnis autem illum iure.'

echo $faker->paragraph(2, false);

// 'Laborum unde mollitia distinctio nam nihil. Quo expedita et exercitationem voluptas impedit.'
```

## `paragraphs`

Generate an array containing a given amount of paragraphs. By default, `3` paragraphs are generated.

Optionally, a second boolean parameter can be supplied. When `true`, a string will be returned instead of an array.

```php
echo $faker->paragraphs();

// [
//     'Aperiam fugiat alias nobis sunt hic. Quasi dolore autem quo sapiente et distinctio. Dolor ipsum saepe quaerat possimus molestiae placeat iste.', 
//     'Et enim labore debitis consequatur id omnis. Dolorum qui id natus tenetur doloremque sed. Delectus et quis sit quod. Animi assumenda dolorum voluptate nobis aut.',
//     'Voluptas quidem corporis non sed veritatis laudantium eaque modi. Quidem est et est deserunt. Voluptatem magni assumenda voluptas et qui delectus.'
// ]

echo $faker->paragraphs(2);

// [
//     'Quasi nihil nisi enim omnis natus eum. Autem sed ea a maxime. Qui eaque doloribus sit et ab repellat. Aspernatur est rem ut.',
//     'Corrupti quibusdam qui et excepturi. Fugiat minima soluta quae sunt. Aperiam adipisci quas minus eius.'
// ]

echo $faker->paragraphs(2, true);

// Quia odit et quia ab. Eos officia dolor aut quia et sed. Quis sint amet aut. Eius enim sint praesentium error quo sed eligendi. Quo id sint et amet dolorem rem maiores.
//
// Fuga atque velit consectetur id fugit eum. Cupiditate aut itaque dolores praesentium. Eius sunt ut ut ipsam.
```

##  `text`

Generate a random string of text. The first parameter represents the maximum number of characters the text should contain (by default, `200`).

```php
echo $faker->text();

// Omnis accusantium non ut dolor modi. Quo vel omnis eum velit aspernatur pariatur. Blanditiis nisi accusantium a deleniti. Nam aut dolorum aut officiis consequatur.

echo $faker->text(100);

// Quaerat eveniet magni a optio. Officia facilis cupiditate fugiat earum ipsam nemo nulla.
```
