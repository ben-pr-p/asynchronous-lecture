const bluebird = require('bluebird')
const goodFn = bluebird.promisify(require('../generate-async-fn')(1 * 1000, 'hello'))
const badFn = bluebird.promisify(require('../generate-async-fn')(1 * 1000, 'hello', true))

const method1 = async () => {
  const result = await goodFn()
  console.log(result)
}

async function method2 () {
  const result = await goodFn()
  console.log(result)
}

async function errorExample () {
  try {
    const result = await badFn()
    console.log(result)
  } catch (err) {
    console.log('Error:')
    console.error(err)
  }
}

method1()
method2()

errorExample()
