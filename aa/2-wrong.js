const bluebird = require('bluebird')
const goodFn = bluebird.promisify(require('../generate-async-fn')(1 * 1000, 'hello'))
const badFn = bluebird.promisify(require('../generate-async-fn')(1 * 1000, 'hello', true))

// Produces a syntax error
async function main () {
  const result = await goodFn()
  console.log(result)
}

main()
