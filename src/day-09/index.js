const takeOutGarbage = (str, count = 0) => {
  const end = str.indexOf('>')
  if (end >= 1) {
    const start = (str.slice(0, end)).indexOf('<')
    const sliced = str.slice(0, start) + str.slice(end + 1)
    count += (end - start - 1)
    return takeOutGarbage(sliced, count)
  } else {
    return { str, count }
  }
}

const hike = (str) => {
  const storage = {}
  let level = 1
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '{') {
      !(level in storage) && (storage[level] = 0)
      storage[level] = storage[level] + 1
      level += 1
    }
    if (str[i] === '}') {
      level -= 1
    }
  }
  const sum = Object.keys(storage).reduce((r, key) => {
    r += parseInt(key, 10) * storage[key]
    return r
  }, 0)
  return sum
}

const main = (input) => {
  const removedIgnored = input.replace(/!./g, '')
  const removedGarbage = takeOutGarbage(removedIgnored)
  const cleaned = removedGarbage.str.replace(/{,}/g, '{}').replace(/{,{/g, '{{').replace(/},}/g, '}}')
  return { score: hike(cleaned), garbageCount: removedGarbage.count }
}

module.exports = { main }
