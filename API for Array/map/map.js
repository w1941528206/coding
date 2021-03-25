const arr = [1, 2, 3, 4]

Array.prototype._map = function (fn, thisArg) {
  if (Object.prototype.toString.call(fn) !== '[object Function]')
    throw new Error('params is not correct')
  let resArr = []
  let curArr = this
  for (let i = 0; i < curArr.length; i++) {
    resArr[i] = fn.call(thisArg, curArr[i], i, curArr)
  }
  return resArr
}

// const res = arr.map((item, index, arr) => { return item + 1 })
const res = arr._map((item, index, arr) => { return item + 1 })

console.log(res)