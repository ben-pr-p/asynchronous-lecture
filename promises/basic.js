const generateAsyncFn = require('../generate-async-fn')

const asyncFn = generateAsyncFn(2 * 1000, 'async code is fun!')
const asyncPromise = new Promise((resolve, reject) => {
  asyncFn((err, result) => {
    if (err) {
      return reject(err)
    }

    return resolve(result)
  })
})

asyncPromise
.then(val => {
  console.log(val)
})
.catch(err => {
  console.log(`Found error: ${err}`)
})
