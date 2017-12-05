const part1 = (num) => {
  const ary = num.split('')
  const sumAry = []
  for (let i = 0; i < ary.length; i++) {
    const j = i === ary.length - 1 ? 0 : i + 1
    if (ary[i] === ary[j]) {
      sumAry.push(parseInt(ary[i], 10))
    }
  }
  const result = sumAry.reduce((sum, i) => {
    sum += i
    return sum
  }, 0)
  return result
}

const part2 = (num) => {
  const ary = num.split('')
  const sumAry = []
  for (let i = 0; i < ary.length; i++) {
    const j = i >= ary.length / 2 ? i - (ary.length / 2) : i + ary.length / 2
    if (ary[i] === ary[j]) {
      sumAry.push(parseInt(ary[i], 10))
    }
  }
  const result = sumAry.reduce((sum, i) => {
    sum += i
    return sum
  }, 0)
  return result
}

module.exports = {
  part1,
  part2
}
