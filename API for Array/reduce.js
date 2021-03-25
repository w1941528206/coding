const arr = [1, 2, 3, 4]

Array.prototype._reduce = function (fn, initValue) {

}

let res = arr.reduce((pre, cur) => { return pre + cur })

console.log(res)