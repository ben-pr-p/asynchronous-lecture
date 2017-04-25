const generateAsyncFn = require('../generate-async-fn')

const sayOne = generateAsyncFn(2 * 1000, 'one')

console.log(sayOne())
