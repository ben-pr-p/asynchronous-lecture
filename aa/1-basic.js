const bluebird = require('bluebird')
const goodFn = bluebird.promisify(require('../generate-async-fn')(1 * 1000, 'hello'))
const badFn = bluebird.promisify(require('../generate-async-fn')(1 * 1000, 'hello', true))

const method1 = async () => {
  // const result = await goodFn()
  // console.log(result)
  return 1
}

async function method2 () {
  const result = await goodFn()
  console.log(result)
  return 2
}



async function errorExample () {
  try {
    const result = await goodFn()
    console.log(result)
  } catch (err) {
    console.log('Error:')
    console.error(err)
  }
}

// method1().then(console.log)
// method2().then(console.log)
//
errorExample()
