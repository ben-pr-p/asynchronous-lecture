const async = require('async')

async.parallel([sayOne, sayTwo], (err, results) => {
  console.log(results)
})

// More options on http://caolan.github.io/async/
