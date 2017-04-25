const bluebird = require('bluebird')
const resolveWithNum = (num) => new Promise((resolve, reject) =>
  setTimeout(() => resolve(num), 1 * 1000)
)

const numbers = new Array(10).fill(null).map((_, idx) => idx)
// ^ javascript sucks

async function badForEachExample () {
  numbers.forEach(async n => {
    const num = await resolveWithNum(n)
    console.log(num)
  })
}

badForEachExample()
