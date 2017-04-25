const resolveWithNum = (num) => new Promise((resolve, reject) =>
  setTimeout(() => resolve(num), 1 * 1000)
)

const numbers = new Array(10).fill(null).map((_, idx) => idx)
// ^ javascript sucks

async function forEachExample () {
  numbers.forEach(async (n) => {
    const num = await resolveWithNum(n)
    console.log(num)
  })
}

async function forOfExample () {
  for (let n of numbers) {
    const num = await resolveWithNum(n)
    console.log(num)
  }
}

async function go () {
  await forEachExample()
  await forOfExample()
}

go()
