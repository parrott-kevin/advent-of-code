const part1 = (input) => {
  let storage = [0]

  let position = 0
  let i = 1

  let done = false
  while (!done) {
    position = ((position + input) % i) + 1
    if (position >= storage.length) {
      storage.push(i)
    } else {
      storage = [...storage.slice(0, position), ...[i], ...storage.slice(position)]
    }

    if (i === 2017) {
      done = true
    } else {
      i++
    }
  }
  return storage[position + 1]
}

const part2 = (input) => {
  let storage = [0]

  let position = 0
  let i = 1

  let done = false
  while (!done) {
    position = ((position + input) % i) + 1
    if (position >= storage.length) {
      storage.push(i)
    } else {
      storage = [...storage.slice(0, position), ...[i], ...storage.slice(position)]
    }

    if (i === 50000000) {
      done = true
    } else {
      i++
    }
  }
  return storage[storage.indexOf(0) + 1]
}

module.exports = { part1, part2 }
