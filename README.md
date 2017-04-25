# asynchronous-lecture
Code samples for a lecture on different ways to handle Javascript's asynchronousness

# Roadmap

## Callbacks (errbacks)

### Basic Example / Introduction

Why do we have to write asynchronous code?

Why is it a good thing that we get to?

### Non-Blocking

Read and run `node ./callbacks/non-blocking.js`

### Passing a Callback is Not Returning Something

Read and run `node ./callbacks/noob.js`

### Sequential Requests

Read and run `node ./callbacks/sequential.js`

### Parallel Requests

Read and run `node ./callbacks/parallel.js`

### Advanced control flow with `async`

Read and run `node ./callbacks/with-async.js`

### Recursive pagination

Read and run `node ./callbacks/pagination.js`

### Pagination with `async`

http://caolan.github.io/async/docs.html#waterfall

## Promises

### Basic Example / Introduction

Read and run `node ./promises/basic.js`

### Promise chaining

Read and run `node ./promises/chain.js`

### Promise.all

Read and run `node ./promises/all.js`

### Promise.resolve

Read and run `node ./promises/resolve.js`

### Creating a Promise vs. Resolving a Promise

Read and run `node ./promises/creating-vs-resolving.js`

### Promise implementations

Depending on your Javascript environment, you may or may not need to specify
the promise implementation. All browsers except Internet Explorer have native
support for promises, and it's in Node / Electron / React Native.

## `async` / `await`

Node 7+ required.

### Basic Example / Introduction

Read and run `node ./aa/basic.js`

### Only a function can be `async`

Read and run `node ./aa/wrong.js`

### Why Async / Await?

Read and run `node ./aa/control-flow.js`

#### While Loop Pagination

Read and run `node ./aa/while-loop-pagination.js`

### Gotchas

#### All Async Functions Return a Promise

Read and run `node ./aa/gotcha-promise-return.js`

#### Easy to Write Not Parallel Code

```javascript
async function asyncNoob () {
  const one = await getOne()
  const two = await getTwo()
  // do something with one, two
}
```

is the equivalent of

```javascript
function promiseNoob () {
  getOne()
  .then(one => {
    getTwo()
    .then(two => {
      // do something with one, two
    })
  })
}
```

Instead write

```javascript
async function asyncBoss () {
  const [ one, two ] = await Promise.all([getOne(), getTwo()])
  // do something with one, two
}
```

or

```javascript
function promiseBoss () {
  Promise.all([getOne(), getTwo()])
  .then(([one, two]) => {
    // do something with one, two
  })
}
```


#### For Each vs. For Of

Read and run `node ./aa/gotcha-for-each-without-async.js`

Read and run `node ./aa/gotcha-for-each-vs-for-of.js`

#### Runtimes

`async` / `await` is only supported in Node 7+ and using `babel-polyfill` for browsers.
If you're running an older Node version, you can use `babel-node` which I personally
don't like, and if you need to keep your build size down on the client you shouldn't
use it there either because `babel-polyfill` adds some overhead.

### Icing

#### Throttling
