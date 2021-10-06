# HTML Lorem

## `randomHtml`

Generate a random HTML `string`, with a given maximum depth and width. By default, the depth and width are `4`.

Depth defines the maximum depth of the body.

Width defines the maximum of siblings each element can have.

```php
echo $faker->randomHtml();

// '<html><head><title>Laborum doloribus voluptatum vitae quia voluptatum ipsum veritatis.</title></head><body><form action="example.org" method="POST"><label for="username">sit</label><input type="text" id="username"><label for="password">amet</label><input type="password" id="password"></form><div class="et"><span>Numquam magnam.</span><p>Neque facere consequuntur autem quisquam.</p><ul><li>Veritatis sint.</li><li>Et ducimus.</li><li>Veniam accusamus cupiditate.</li><li>Eligendi eum et doloribus.</li><li>Voluptate ipsa dolores est.</li><li>Enim.</li><li>Dignissimos nostrum atque et excepturi.</li><li>Nisi veniam.</li><li>Voluptate nihil labore sapiente.</li><li>Ut.</li><li>Id suscipit.</li></ul><i>Qui tempora minima ad.</i></div></body></html>'

echo $faker->randomHtml(1, 1);

// '<html><head><title>Architecto ut eius nisi molestiae atque ab.</title></head><body><form action="example.net" method="POST"><label for="username">saepe</label><input type="text" id="username"><label for="password">est</label><input type="password" id="password"></form></body></html>'
```
