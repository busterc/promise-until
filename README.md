# promise-until [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]
> Calls a function repeatedly if a condition returns false and until the condition returns true and then resolves the promise

- See Also
  - [promise-do-until](https://github.com/busterc/promise-do-until)
  - [promise-whilst](https://github.com/sindresorhus/promise-whilst)
  - [promise-do-whilst](https://github.com/busterc/promise-do-whilst)

## Installation

```sh
$ npm install --save promise-until
```

## Usage

```js
import promiseUntil from 'promise-until';

let count = 0;

promiseUntil(() => {
  return count === 5;
}, () => {
  count++;
}).then(() => {
  console.log(count);
  // => 5
});

// ...

let max = 0;

promiseUntil(() => {
  return max === 0;
}, () => {
  max++;
}).then(() => {
  console.log(max);
  // => 0
});

```

## API

### promiseUntil(condition, action)

Executes `action` repeatedly if `condition` returns `false` and until `condition` returns `true` and then resolves the promise. Rejects if `action` returns a promise that rejects or if an error is thrown anywhere.

#### condition

Type: `function`

Should return a boolean of whether to continue.

#### action

Type: `function`

Action to run for each iteration.

You can return a promise and it will be handled.

## License

ISC © [Buster Collings]()


[npm-image]: https://badge.fury.io/js/promise-until.svg
[npm-url]: https://npmjs.org/package/promise-until
[travis-image]: https://travis-ci.org/busterc/promise-until.svg?branch=master
[travis-url]: https://travis-ci.org/busterc/promise-until
[daviddm-image]: https://david-dm.org/busterc/promise-until.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/busterc/promise-until
