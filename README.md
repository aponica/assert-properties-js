# @aponica/assert-properties-js

Assert that a hash (dictionary object) contains certain properties.

This is a convenient way to assert, for example, that certain parameters
or options have been provided. By default, all specified properties must
be defined (an "and" check), but it is also possible to specify that a
certain number of the possibilities are defined (an "or" check).

An equivalent PHP package, @aponica/assert-properies-php, is available,
and should be kept synchronized with this version for consistency.

<a name="installation"></a>
## Installation

```sh
npm i @aponica/assert-properties-js
```

<a name="usage"></a>
## Usage

### Example 1: Assert All Properties ("and")

Assert the hash (dictionary object) passed in as the first argument 
includes all of the property names specified by the second argument:

```javascript
const fAssertProperties = require( '@aponica/assert-properties-js' );
try {
  fAssertProperties( { b: true, n: 123.456, z: 'hello' },
    [ 'b', 'n', 'z' ] );
  }
catch ( iErr ) {
  console.error( iErr );
  }
```

### Example 2: Assert One Property ("or")

Assert the hash passed in as the first argument includes only one of the
property names specified by the second argument:

```javascript
const fAssertProperties = require( '@aponica/assert-properties-js' );
try {
  fAssertProperties( { n: 789.10 },
    [ 'b', 'n', 'z' ], { nMax: 1 } );
  }
catch ( iErr ) {
  console.error( iErr );
  }
```

### Example 3: Assert Two Properties ("or") with Options

Assert the hash passed in as the first argument includes any two of the
property names specified by the second argument, using JavaScript's "in"
operator for comparison, and using a custom label in the error message.
This example will throw an exception with the message
"`foo: too many properties`":

```javascript
const fAssertProperties = require( '@aponica/assert-properties-js' );
try {
  fAssertProperties( { b: true, n: 123.456, z: 'hello' },
    [ 'b', 'n', 'z' ], 
    { zLabel: 'foo', nMax: 2, nMin: 2, bUseIn: true } );
  }
catch ( iErr ) {
  console.error( iErr ); // foo: too many properties
  }
```

### Example 4: Deep Assertions

Assert that the hash "foo" includes a property named "bar", and that "bar"
is itself a hash containing only one of the properties "baz" or "qux":

```javascript
const fAssertProperties = require( '@aponica/assert-properties-js' );
try {
  const foo = { bar: { baz: 1, qux: 2 } };
  fAssertProperties( foo, [ 'bar' ], { zLabel: 'foo' } );
  fAssertProperties( foo.bar, [ 'baz', 'qux' ], { zLabel: 'foo.bar', nMax: 1 } );
  }
catch ( iErr ) {
  console.error( iErr ); // foo.bar: too many properties
  }
```

## Please Donate!

Help keep a roof over our heads and food on our plates! 
If you find aponica?? open source software useful, please 
**[click here](https://www.paypal.com/biz/fund?id=BEHTAS8WARM68)** 
to make a one-time or recurring donation via *PayPal*, credit 
or debit card. Thank you kindly!


## Contributing

Please [contact us](https://aponica.com/contact/) if you believe this package
is missing important functionality that you'd like to provide.

Under the covers, the code is **heavily commented** and uses a form of
[Hungarian notation](https://en.wikipedia.org/wiki/Hungarian_notation) 
for data type guidance. If you submit a pull request, please try to maintain
the (admittedly unusual) coding style, which is the product of many decades
of programming experience.

## Copyright

Copyright 2019-2022 Opplaud LLC and other contributors.

## License

MIT License.

## Trademarks

OPPLAUD and aponica are registered trademarks of Opplaud LLC.

## Related Links

Official links for this project:

* [Home Page & Online Documentation](https://aponica.com/docs/assert-properties-js/)
* [GitHub Repository](https://github.com/aponica/assert-properties-js)
* [NPM Package](https://www.npmjs.com/package/@aponica/assert-properties-js)
  
Related projects:

* [PHP Version (@aponica/assert-properties-php)](https://aponica.com/docs/assert-properties-php/)
