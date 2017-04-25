const generateAsyncFn = require('../generate-async-fn')

const sayOne = generateAsyncFn(2 * 1000, 'one')
const sayTwo = generateAsyncFn(1 * 1000, 'two')

sayOne((err, value) => {
  console.log(value)

  sayTwo((err, value) => {
    console.log(value)
  })
})
