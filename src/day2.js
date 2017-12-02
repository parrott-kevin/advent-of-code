const part1 = (ary) => {
  const checksum = ary.reduce((result, item) => {
    const minMax = item.reduce((result, val) => {
      result.min = val < result.min ? val : result.min
      result.max = val > result.max ? val : result.max
      return result
    }, { min: item[0], max: item[0] })
    result += minMax.max - minMax.min
    return result
  }, 0)

  return checksum
}

const part2 = (ary) => {
  const checksum = ary.reduce((result, item) => {
    let val = 0
    for (let i = 0; i < item.length - 1; i++) {
      let found = false
      for (let j = i + 1; j < item.length; j++) {
        if (item[i] % item[j] === 0) {
          val = item[i] / item[j]
          found = true
          break
        }
        if (item[j] % item[i] === 0) {
          val = item[j] / item[i]
          found = true
          break
        }
      }
      if (found) {
        break
      }
    }
    result += val
    return result
  }, 0)

  return checksum
}

module.exports = {
  part1,
  part2
}
