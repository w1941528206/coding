const arr = [1, 2, 3, 4]

Array.prototype._reduce = function (fn, initValue) {
  if (Object.prototype.toString.call(fn) !== '[object Function]')
    throw new Error('params is not correct')
  let arr = this
  let initIndex
  let acc
  initIndex = arguments.length === 1 ? 1 : 0
  acc = arguments.length === 1 ? arr[0] : initValue
  for (let i = initIndex; i < arr.length; i++)
    acc = fn(acc, arr[i], i, arr)
  return acc
}

// let res = arr.reduce((pre, cur) => { return pre + cur })
let res = arr._reduce((pre, cur) => { return pre + cur })

console.log(res)