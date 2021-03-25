const arr = [1, 2, 2, 1, 3, 4, 5]

function sortArr (arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        let newNum
        newNum = arr[i]
        arr[i] = arr[j]
        arr[j] = newNum
      }
    }
  }
  return arr
}

const res = sortArr(arr)

console.log(res)

const initArr = [1, 5, 3, 6, 8]

function anyArr (initArr) {

}