# should-quote

This is a tiny library to detect if a string should be wrapped in quotes to work as an object key.

## How to Install

```sh
yarn add should-quote
```

or...

```sh
npm install should-quote
```

## How to Use

First you need to import the function as seen below:

```ts
import shouldQuote from 'should-quote';
```

Then you can use it on string literals...

```ts
console.log(shouldQuote('foo')); // false

console.log(shouldQuote('foo bar')); // true
```

...or variables with string value.

```ts
const key = 'prop.name';

console.log(shouldQuote(key) ? `obj['${key}']` : `obj.${key}`); // obj['prop.name']
```

The logged output would have been dot notation if camel case were used.

```ts
const key = 'propName';

console.log(shouldQuote(key) ? `obj['${key}']` : `obj.${key}`); // obj.propName
```

It allows unquoted keys if it complies with the lexical grammar.

```ts
const key = '\\u0078'; // yeah, \u0078 does not have to be quoted

console.log(shouldQuote(key) ? `obj['${key}']` : `obj.${key}`); // obj.\u0078
```
