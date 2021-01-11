# ORM Integration

Faker provides adapters for Object-Relational and Object-Document Mappers (currently, [Propel](http://www.propelorm.org), [Doctrine2](http://docs.doctrine-project.org/projects/doctrine-orm/en/latest/), [CakePHP](http://cakephp.org), [Spot2](https://github.com/vlucas/spot2), [Mandango](https://github.com/mandango/mandango) and [Eloquent](https://laravel.com/docs/master/eloquent) are supported). These adapters ease the population of databases through the Entity classes provided by an ORM library (or the population of document stores using Document classes provided by an ODM library).

To populate entities, create a new populator class (using a generator instance as parameter), then list the class and number of all the entities that must be generated. To launch the actual data population, call the `execute()` method.

Note that some of the `populators` could require additional parameters. As example the `doctrine` populator has an option to specify
its batchSize on how often it will flush the UnitOfWork to the database.

Here is an example showing how to populate 5 `Author` and 10 `Book` objects:

```php
$generator = \Faker\Factory::create();
$populator = new \Faker\ORM\Propel\Populator($generator);
$populator->addEntity('Author', 5);
$populator->addEntity('Book', 10);
$insertedPKs = $populator->execute();
```

The populator uses name and column type guessers to populate each column with relevant data. For instance, Faker populates a column named `first_name` using the `firstName` formatter, and a column with a `TIMESTAMP` type using the `dateTime` formatter. The resulting entities are therefore coherent. If Faker misinterprets a column name, you can still specify a custom closure to be used for populating a particular column, using the third argument to `addEntity()`:

```php
$populator->addEntity('Book', 5, [
  'ISBN' => function() use ($generator) { return $generator->ean13(); }
]);
```

In this example, Faker will guess a formatter for all columns except `ISBN`, for which the given anonymous function will be used.

???+ tip

    To ignore some columns, specify `null` for the column names in the third argument of `addEntity()`. This is usually necessary for columns added by a behavior:

    ```php
    $populator->addEntity('Book', 5, [
      'CreatedAt' => null,
      'UpdatedAt' => null,
    ]);
    ```

Of course, Faker does not populate auto-incremented primary keys. In addition, `Faker\ORM\Propel\Populator::execute()` returns the list of inserted PKs, indexed by class:

```php
print_r($insertedPKs);
// [
//   'Author' => [34, 35, 36, 37, 38],
//   'Book'   => [456, 457, 458, 459, 470, 471, 472, 473, 474, 475],
// ]
```

???+ note

    Due to the fact that `Faker` returns all the primary keys inserted, the memory consumption will go up drastically when you do batch inserts due to the big list of data.

In the previous example, the `Book` and `Author` models share a relationship. Since `Author` entities are populated first, Faker is smart enough to relate the populated `Book` entities to one of the populated `Author` entities.

Lastly, if you want to execute an arbitrary function on an entity before insertion, use the fourth argument of the `addEntity()` method:

```php
$populator->addEntity('Book', 5, [], [
    function($book) {
        $book->publish(); 
    },
]);
```
