const bluebird = require('bluebird')
const helloFn = bluebird.promisify(require('../generate-async-fn')(1 * 1000, 'hello'))
const heyFn = bluebird.promisify(require('../generate-async-fn')(1 * 1000, 'hi'))
const goodByeFn = bluebird.promisify(require('../generate-async-fn')(1 * 1000, 'good bye'))

const main = async () => {
  const fn = Math.random() > .5 ? helloFn : heyFn
  const message = await fn()

  let response = 'sup'

  if (message == 'hi') {
    response = await goodByeFn()
  }

  return response
}


Promise.all(new Array(10).fill(null).map(main))
.then(console.log)
.catch(console.error)

// Equivalent code with Promises

const chainedMainWithPromises = () => new Promise((resolve, reject) => {
  const fn = Math.random() > .5 ? helloFn : heyFn

  fn()
  .then(message => {
    if (message == 'hi') {
      return goodByeFn()
    } else {
      return 'sup'
    }
  })
  .then(resolve)
})

const noobMainWithPromises = () => new Promise((resolve, reject) => {
  const fn = Math.random() > .5 ? helloFn : heyFn

  fn()
  .then(message => {
    if (message == 'hi') {
      return goodByeFn().then(response => resolve(response))
    } else {
      return resolve('sup')
    }
  })
})


Promise.all(new Array(10).fill(null).map(chainedMainWithPromises))
.then(console.log)
.catch(console.error)

Promise.all(new Array(10).fill(null).map(noobMainWithPromises))
.then(console.log)
.catch(console.error)
