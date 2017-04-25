const generateAsyncFn = require('../generate-async-fn')

const sayOne = generateAsyncFn(2 * 1000, 'one')
const sayTwo = generateAsyncFn(1 * 1000, 'two')

const promisify = fn => new Promise((resolve, reject) => {
  fn((err, val) => err ? reject(err) : resolve(val))
})

promisify(sayOne)
.then(one => {
  console.log(one)
  return promisify(sayTwo)
})
.then(two => {
  console.log('two')
  process.exit()
})
.catch(err => {
  // handle error
  console.log('Got error')
  console.log(err)
})
