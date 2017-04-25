const async = require('async')
const generateAsyncFn = require('../generate-async-fn')

const nextPage = (currentPage, fn) => {
  if (currentPage < 10) generateAsyncFn(1 * 1000, currentPage + 1)(fn)
  else fn(null, null)
}

const pages = []

const callback = (err, pageNum) => {
  if (pageNum) {
    pages.push(pageNum)
    nextPage(pageNum, callback)
  } else {
    console.log(pages)
    process.exit()
  }
}

nextPage(0, callback)
