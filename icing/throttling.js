const bluebird = require('bluebird')
const generateAsyncFn = require('../generate-async-fn')

function throttlePromise (time, promise) {
  return new Promise((resolve, reject) => {
    Promise.all([
      new Promise((resolve, reject) => setTimeout(resolve, time)),
      promise
    ])
    .then(results => resolve(results[1]))
    .catch(reject)
  })
}

const helloFn = bluebird.promisify(require('../generate-async-fn')(1 * 100, 'hello'))

console.time('throttle')
throttlePromise(1000, helloFn())
.then(result => {
  console.timeEnd('throttle')
  console.log(result)
})
