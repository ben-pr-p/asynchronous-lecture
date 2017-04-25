const createPromise = () => new Promise((resolve, reject) => {
  console.log('2 --> Promise created')
  setTimeout(() => resolve(), 100)
})

const createdPromise = new Promise((resolve, reject) => {
  console.log('7 --> Promise created')
  setTimeout(() => resolve(), 100)
})

createPromise()
.then(() => createdPromise)
.then(() => {
  console.log('All done!')
})
.catch(console.error)
