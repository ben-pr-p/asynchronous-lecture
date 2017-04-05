const generateAsyncFn = require('../generate-async-fn')

const sayOne = generateAsyncFn(2 * 1000, 'one')
const sayTwo = generateAsyncFn(1 * 1000, 'two')

const promisify = fn => new Promise((resolve, reject) => {
  fn((err, val) => err ? reject(err) : resolve(val))
})

Promise.all([
  promisify(sayOne),
  promisify(sayTwo)
])
.then(console.log)
.catch(console.log)

// Use with map
const numbersToSay = [1,2,3,4,5,6,7,8,9]
Promise.all(numbersToSay.map(n => new Promise((resolve, reject) => {
  generateAsyncFn(1 * 1000, n)((err, val) => err ? reject(err) : resolve(val))
})))
.then(results => {
  console.log(results)
})
.catch(console.log)
