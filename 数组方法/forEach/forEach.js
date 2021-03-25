const arr = [1, 2, 3, 4]

arr.forEach((item, index) => {
  arr[index] = 6
})

console.log(arr)