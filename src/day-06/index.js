const findLargest = (ary) => {
  const sorted = [...ary].sort((a, b) => a - b)
  const value = sorted.pop()
  const index = ary.indexOf(value)
  return {
    value,
    index
  }
}

const redistribute = (ary, val, index) => {
  const idx = index >= ary.length ? 0 : index
  if (val > 0) {
    ary[idx] = ary[idx] + 1
    return redistribute(ary, val - 1, idx + 1)
  }
  return ary
}
const realloaction = (input) => {
  const storage = [input]
  let done = false
  let cycleDiff = 0
  while (!done) {
    const clone = [...storage[storage.length - 1]]
    const largest = findLargest(clone)
    clone[largest.index] = 0
    const distributedArray = redistribute(clone, largest.value, largest.index + 1)
    for (let i = 0; i < storage.length; i++) {
      let ary = storage[i]

      const same = (ary.length === distributedArray.length) && ary.every((element, index) => element === distributedArray[index])

      if (same) {
        cycleDiff = storage.length - i
        done = true
        break
      }
    }
    storage.push(distributedArray)
  }
  return {
    cycles: storage.length - 1,
    cycleDiff
  }
}

module.exports = { realloaction }
