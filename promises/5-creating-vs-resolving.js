const createPromise = () => new Promise((resolve, reject) => {
  console.log('2 --> Promise created')
  setTimeout(() => resolve('babies'), 900)
})

const createdPromise = new Promise((resolve, reject) => {
  console.log('7 --> Promise created')
  setTimeout(() => resolve('babies'), 900)
})

setTimeout(() => {
  createdPromise
  .then(console.log)
}, 1000)

// createPromise()
// .then(() => createdPromise)
// .then(() => {
//   console.log('All done!')
// })
// .catch(console.error)
