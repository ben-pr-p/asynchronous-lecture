const async = require('async')
const generateAsyncFn = require('../generate-async-fn')

const sayOne = generateAsyncFn(2 * 1000, 'one')
const sayTwo = generateAsyncFn(1 * 1000, 'two')

async.parallel([sayOne, sayTwo], (err, results) => {
  console.log(results)
})

// More options on http://caolan.github.io/async/
