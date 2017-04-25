const generateAsyncFn = require('../generate-async-fn')

const sayOne = generateAsyncFn(2 * 1000, 'one')
const sayTwo = generateAsyncFn(1 * 1000, 'two')

const batchAsync = (fn1, fn2, cb) => {
  const results = [
    undefined,
    undefined
  ]

  fn1((err, val) => {
    if (err) {
      return cb(err)
    }

    results[0] = val
    if (results[1] !== undefined) {
      cb(null, results)
    }
  })

  fn2((err, val) => {
    if (err) {
      return cb(err)
    }

    results[1] = val
    if (results[0] !== undefined) {
      cb(null, results)
    }
  })
}

batchAsync(sayOne, sayTwo, (err, vals) => {
  console.log(vals)
})
