const generateAsyncFn = require('../generate-async-fn')

const sayN = N => generateAsyncFn(1 * 1000, N)

const promisify = fn => new Promise((resolve, reject) => {
  fn((err, val) => err ? reject(err) : resolve(val))
})

const promisifyN = n => promisify(sayN(n))

// Suppose we only need to access the database if the number is larger than 3
// Try swapping (uncommenting and commenting) 14,15,16
const mayOrMayNotRequireAsyncN = n => n < 3
  ? Promise.resolve(n)
  // ? new Promise((resolve, reject) => resolve(n))
  // ? n
  : promisifyN(n)


const numbersToSay = [1,2,3,4,5,6,7,8,9]
Promise.all(numbersToSay.map(mayOrMayNotRequireAsyncN))
.then(results => {
  console.log(results)
})
.catch(console.log)

mayOrMayNotRequireAsyncN(4)
.then(console.log)
.catch(console.log)

mayOrMayNotRequireAsyncN(2)
.then(console.log)
.catch(console.log)
