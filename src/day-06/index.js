const findLargest = (ary) => {
  const sorted = [].concat(ary).sort()
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
const part1 = (input) => {
  const storage = [input]
  let done = false
  while (!done) {
    const clone = [].concat(storage[storage.length - 1])
    const largest = findLargest(clone)
    clone[largest.index] = 0
    const distributedArray = redistribute(clone, largest.value, largest.index + 1)
    for (let ary of storage) {
      let test = []
      for (let i = 0; i < ary.length; i++) {
        test.push(ary[i] === distributedArray[i])
      }
      if ((test.filter(bool => bool === false)).length === 0) {
        done = true
      }
    }
    storage.push(distributedArray)
  }
  return storage.length - 1
}

const part2 = (input) => {
}

module.exports = { part1, part2 }
