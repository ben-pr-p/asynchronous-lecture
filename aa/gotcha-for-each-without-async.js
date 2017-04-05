const bluebird = require('bluebird')
const goodFn = bluebird.promisify(require('../generate-async-fn')(1 * 1000, 'hello'))

const numbers = new Array(10).fill(null).map((_, idx) => idx)
// ^ javascript sucks

async function badForEachExample () {
  numbers.forEach(n => {
    const num = await goodFn(n)
  })
}

badForEachExample()
