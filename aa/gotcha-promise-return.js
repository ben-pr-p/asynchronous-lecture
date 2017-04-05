const giveMe1 = async () => {
  return 1
}
// equivalent to Promise.resolve(1)

console.log(giveMe1())
giveMe1().then(console.log).catch(console.error)
