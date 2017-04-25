const async = require('async')
const bluebird = require('bluebird')

const generateAsyncFn = require('../generate-async-fn')

const nextPageCb = (currentPage, fn) => {
  if (currentPage < 10) generateAsyncFn(1 * 100, currentPage + 1)(fn)
  else fn(null, null)
}

const nextPage = bluebird.promisify(nextPageCb)

async function fetchAllPages () {
  const pages = []
  let pageNum = 1

  while (pageNum != null) {
    pages.push(pageNum)
    pageNum = await nextPage(pageNum)
  }
  return pages
}

fetchAllPages()
.then(console.log)
