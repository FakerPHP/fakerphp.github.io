# Internet

## `email`

Generate an email address.

```php
echo $faker->email();

// 'orval.treutel@blick.com', 'hickle.lavern@erdman.com'
```

## `safeEmail`

Generate a safe email address.

```php
echo $faker->safeEmail();

// 'spencer.ricardo@example.com', 'wolf.sabryna@example.org'
```

## `freeEmail`

Generate a free email address (free, as in, free sign-up).

```php
echo $faker->freeEmail();

// 'marcelino.hyatt@yahoo.com', 'abby81@gmail.com'
```

## `companyEmail`

Generate a company email.

```php
echo $faker->companyEmail();

// 'hschinner@reinger.net', 'paula.blick@hessel.com'
```

## `freeEmailDomain`

Generate a free email domain name.

```php
echo $faker->freeEmailDomain();

// 'gmail.com', 'hotmail.com'
```

## `safeEmailDomain`

Generate a safe email domain.

```php
echo $faker->safeEmailDomain();

// 'example.net', 'example.org'
```

## `userName`

Generate a username.

```php
echo $faker->userName();

// 'ipaucek', 'homenick.alexandre'
```

## `password`

Generate a password, with a given minimum and maximum length. By default, the values `6` and `20` are used for the
minimum and maximum respectively.

```php
echo $faker->password();

// 'dE1U[G$n4g%-Eie[]rn[', '-YCc1t|NSh)U&j6Z'

echo $faker->password(2, 6);

// 'GK,M|', '/ZG.'
```

## `domainName`

Generate a domain name.

```php
echo $faker->domainName();

// 'toy.com', 'schamberger.biz'
```

## `domainWord`

Generate a domain word.

```php
echo $faker->domainWord();

// 'feil', 'wintheiser'
```

## `tld`

Generate a tld (top-level domain).

```php
echo $faker->tld();

// 'com', 'org'
```

## `url`

Generate a URL.

```php
echo $faker->url();

// 'http://cormier.info/eligendi-rem-omnis-quia.html', 'http://pagac.com/'
```

## `slug`

Generate a slug, with a given amount of words. By default, the amount of words it set to 6.

Optionally, a second parameter can be supplied. When `false`, only slugs with the given amount of words will be
generated.

```php
echo $faker->slug();

// 'facere-ipsam-sit-aut-ut-dolorem', 'qui-soluta-sed-facilis-est-ratione-dolor-autem'

echo $faker->slug(2);

// 'et-et-et', 'temporibus-iure'

echo $faker->slug(3, false);

// 'ipsa-consectetur-est', 'quia-ad-nihil'
```

## `ipv4`

Generate an IPv4 address.

```php
echo $faker->ipv4();

// '90.119.172.201', '84.172.232.19'
```

## `localIpv4`

Generate an IPv4 address, inside a local subnet.

```php
echo $faker->localIpv4();

// '192.168.85.208', '192.168.217.138'
```

## `ipv6`

Generate an IPv6 address.

```php
echo $faker->ipv6();

// 'c3f3:40ed:6d6c:4e8e:746b:887a:4551:42e5', '1c3d:a2cf:80ad:f2b6:7794:4f3f:f9fb:59cf'
```

## `macAddress`

Generate a random MAC address.

```php
echo $faker->macAddress();

// '94:00:10:01:58:07', '0E:E1:48:29:2F:E2'
```
